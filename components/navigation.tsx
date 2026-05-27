"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Diamond } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Főoldal" },
  { href: "/galeria", label: "Galéria" },
  { href: "/kiallitasok", label: "Kiállítások" },
  { href: "/#rolunk", label: "Rólunk" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/20 shadow-md"
      style={{ background: "oklch(0.27 0.08 255 / 0.82)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Diamond className="w-8 h-8 text-sky-300 transition-transform group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-wide text-white">
                Artemis Diamond
              </span>
              <span className="text-xs tracking-[0.2em] text-sky-200/70 uppercase">
                Cattery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-sky-300",
                  pathname === link.href
                    ? "text-sky-300 font-medium"
                    : "text-white/75"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg tracking-wide transition-colors hover:text-sky-300",
                    pathname === link.href
                      ? "text-sky-300 font-medium"
                      : "text-white/75"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
