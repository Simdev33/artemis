"use client"

import Link from "next/link"
import { Diamond, Instagram, Facebook, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export function Footer() {
  return (
    <footer
      className="border-t border-primary/20 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.42 0.09 255) 0%, oklch(0.24 0.07 260) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Diamond className="w-8 h-8 text-sky-300" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold tracking-wide text-white">
                  Artemis Diamond
                </span>
                <span className="text-xs tracking-[0.2em] text-sky-200/70 uppercase">
                  Cattery
                </span>
              </div>
            </Link>
            <p className="text-sky-100/60 text-sm leading-relaxed max-w-xs">
              Prémium Maine Coon és Szibériai macskák tenyésztése szeretettel 
              és szakértelemmel, több mint 10 éve.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white">Gyors linkek</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Főoldal" },
                { href: "/galeria", label: "Galéria" },
                { href: "/kiallitasok", label: "Kiállítások" },
                { href: "/#rolunk", label: "Rólunk" },
                { href: "/#kapcsolat", label: "Kapcsolat" }
              ].map((link) => (
                <motion.div 
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-sky-100/60 hover:text-sky-300 transition-colors text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white">Kapcsolat</h3>
            <div className="flex flex-col gap-3">
              <motion.a 
                href="mailto:info@artemisdiamond.hu" 
                className="flex items-center gap-2 text-sky-100/60 hover:text-sky-300 transition-colors text-sm group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                info@artemisdiamond.hu
              </motion.a>
              <motion.a 
                href="tel:+36301234567" 
                className="flex items-center gap-2 text-sky-100/60 hover:text-sky-300 transition-colors text-sm group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                +36 30 123 4567
              </motion.a>
            </div>
            <div className="flex items-center gap-4 pt-2">
              {[
                { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
                { href: "https://facebook.com", icon: Facebook, label: "Facebook" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 text-sky-200 hover:bg-sky-400 hover:text-white transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center text-sky-100/50 text-sm">
            © {new Date().getFullYear()} Artemis Diamond Cattery. Minden jog fenntartva.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
