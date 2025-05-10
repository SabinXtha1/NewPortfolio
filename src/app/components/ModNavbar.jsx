"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Terminal", href: "/Terminal" },
  { label: "Contact", href: "/contact" },
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
        <div className="hidden md:flex justify-between items-center">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link key={index} href={item.href} className="relative px-4 py-2 group">
                <span
                  className={`relative z-10 font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
                <motion.div
                  layoutId="nav-highlight"
                  className={`absolute inset-0 rounded-2xl -z-10 transition ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500 to-red-500"
                      : "group-hover:bg-white/10"
                  }`}
                />
              </Link>
            )
          })}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex justify-between items-center">
          <span className="text-white font-semibold tracking-wide">Menu</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            opacity: mobileOpen ? 1 : 0,
            y: mobileOpen ? 0 : -20,
            pointerEvents: mobileOpen ? "auto" : "none",
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-[64px] left-0 right-0 bg-black/90 rounded-2xl p-4 border border-white/10 md:hidden z-40"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`w-full text-center py-3 rounded-xl transition font-medium ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
