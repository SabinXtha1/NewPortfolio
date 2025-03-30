"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Terminal", href: "/Terminal" },
  { label: "Profile", href: "/profile" },
  { label: "Contact", href: "/contact" },
]

export default function ModernNavbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={`fixed top-4 left-0 right-0 z-50 w-[90vw] md:w-[60vw] mx-auto ${pathname === '/Terminal' ? 'hidden' : 'block'}`}>
      <div className="relative backdrop-blur-md bg-black/20 border border-white/10 rounded-3xl px-6 py-4 shadow-lg">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-around">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href

            return (
              <Link key={index} href={item.href} className="relative px-4 py-2 group">
                <span
                  className={`relative z-10 font-medium ${isActive ? "text-white" : "text-white/80"} transition-colors duration-200`}
                >
                  {item.label}
                </span>

                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl -z-0 animate-fadeIn" />
                )}

                {!isActive && (
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-3xl transition-all duration-300 -z-0" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center">
          <span className="text-white font-semibold">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md rounded-3xl p-4 border border-white/10 md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-8 py-3 rounded-2xl ${
                    isActive
                      ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                      : "text-white/80 hover:bg-white/10"
                  } transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

