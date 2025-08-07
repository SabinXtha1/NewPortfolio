"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Contact, Terminal, Menu, X, Contact2 } from 'lucide-react'
import { VscHome } from 'react-icons/vsc'
import { SiAboutdotme, SiHyperskill } from "react-icons/si"
import Image from "next/image"

const navItems = [
  { label: "Home", href: "/", icon: <VscHome /> },
  { label: "Terminal", href: "/Terminal", icon: <Terminal /> },
  { label: "Contact", href: "/contact", icon: <Contact /> },
  // {label:"Skill",href:"#skill",icon:<SiHyperskill/>},
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

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileOpen])

  if (pathname === "/Terminal") return null

  return (
    <>
      <motion.div
        animate={controls}
        initial={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="fixed top-4 left-0 right-0 z-[999] mx-auto w-[90vw] md:w-[80vw] lg:w-[70vw]"
      >
        <div className="relative bg-black/40 backdrop-blur-md border flex justify-between items-center border-white/10 rounded-3xl shadow-xl px-6 py-4">
       <div className="h-full min-w-[30%] overflow-hidden relative">
       
       <div className="group">

 <div className="absolute left-16 top-4 animate-bounce">

<span className="text-white px-3 font-serif py-2 bg-slate-900 rounded-3xl hidden group-hover:inline-block text-nowrap ">
 Pull Me!
</span>
<span className="text-white px-3 py-2 bg-slate-900 rounded-3xl group-hover:hidden ">
  Hey!
</span>
        </div>
<div className=" relative w-[70px] h-[70px] overflow-hidden group-hover:top-[35px]">

           <Image src="/head.png" alt="head" fill className="object-cover" />
</div>
       </div>


      

       </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex w-[60%] justify-between items-center">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link key={index} href={item.href} className="relative px-4 py-2 group">
                  <span
                    className={`relative flex items-center gap-3 z-10 font-medium transition-colors duration-200 ${
                      isActive ? "text-white" : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {item.icon}
                    <span className="hidden md:inline-block">
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

          {/* Mobile Nav Header */}
          <div className="flex md:hidden justify-between items-center font-serif ">
            <div className="flex items-center gap-2">
              {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg flex items-center justify-center">
                {
                  pathname === "/contact" ? <Contact2 className="w-4 h-4 text-white" /> :

                <VscHome className="w-4 h-4 text-white" />
                }
              </div> */}
              <span className="text-white font-medium tracking-wide text-2xl ">
              {
                pathname === "/contact" ? "Contact" : "Portfolio"

              }
                </span>
            </div>
            
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm  z-[998] md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                duration: 0.3 
              }}
              className="fixed top-32 left-4 right-4 z-[999] md:hidden"
            >
              <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-6">
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className="relative block group"
                        onClick={() => setMobileOpen(false)}
                      >
                        <div
                          className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 ${
                            isActive
                              ? "bg-gradient-to-r from-blue-500 to-blue-800 text-white"
                              : "text-white/70 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <span className="text-xl">{item.icon}</span>
                          <span className="font-medium">{item.label}</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
                
             
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
