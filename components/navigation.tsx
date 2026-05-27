"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Diamond, Facebook, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Főoldal" },
  { href: "/galeria", label: "Galéria" },
  { href: "/kiallitasok", label: "Kiállítások" },
  { href: "/#rolunk", label: "Rólunk" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
]

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: <Facebook className="w-4 h-4" />,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    href: "https://tiktok.com",
    label: "TikTok",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M14 3c.2 1.7 1.2 3.2 2.7 4.1 1 .6 2.2 1 3.3 1V11c-1.5 0-3-.4-4.3-1.2v6.6c0 3-2.4 5.4-5.4 5.4S5 19.4 5 16.4 7.4 11 10.4 11c.3 0 .6 0 .8.1v2.9a2.6 2.6 0 0 0-.8-.1c-1.4 0-2.6 1.1-2.6 2.5S9 19 10.4 19s2.6-1.1 2.6-2.5V3h1Z" />
      </svg>
    ),
  },
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
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
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
            <div className="h-5 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-white/10 text-sky-200 hover:bg-sky-400 hover:text-white transition-colors flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
              <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/10 text-sky-200 hover:bg-sky-400 hover:text-white transition-colors flex items-center justify-center"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
