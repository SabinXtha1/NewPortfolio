"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Contact, Terminal } from "lucide-react"
import { VscHome } from 'react-icons/vsc';
import { SiAboutdotme, SiHyperskill } from "react-icons/si"

const navItems = [
  { label: "Home", href: "/" ,icon:<VscHome/>},
  { label: "Terminal", href: "/Terminal",icon:<Terminal/> },
  { label: "Contact", href: "/contact" ,icon:<Contact/>},
  {label:"Skill",href:"#skill",icon:<SiHyperskill/>},
  
]

export default function ModernNavbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const controls = useAnimation()
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY && currentY > 80) {
        controls.start({ y: -100 }) // hide
      } else {
        controls.start({ y: 0 }) // show
      }
      setLastScrollY(currentY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, controls])

  if (pathname === "/Terminal") return null

  return (
    <motion.div
      animate={controls}
      initial={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed top-4 left-0 right-0 z-[999] mx-auto w-[90vw] md:w-[60vw]"
    >
      <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl px-6 py-4">
        {/* Desktop Nav */}
        <div className=" flex justify-between items-center">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link key={index} href={item.href} className="relative px-4 py-2 group">
                <span
                  className={`relative flex items-center gap-3 z-10 font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/70 group-hover:text-white"
                  }`}
                >
                 {item.icon}    <span className="hidden md:inline-block">
                   {item.label}
                  </span>
                </span>
                <motion.div
                  layoutId="nav-highlight"
                  className={`absolute inset-0 rounded-2xl -z-10 transition ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-blue-800"
                      : "group-hover:bg-white/10"
                  }`}
                />
              </Link>
            )
          })}
        </div>

        
      </div>
    </motion.div>
  )
}
