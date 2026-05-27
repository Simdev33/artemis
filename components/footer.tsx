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
    <footer className="bg-secondary/50 border-t border-border overflow-hidden">
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
                <Diamond className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold tracking-wide text-foreground">
                  Artemis Diamond
                </span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Cattery
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Prémium Maine Coon macskák tenyésztése szeretettel és szakértelemmel, 
              több mint 10 éve.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground">Gyors linkek</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Főoldal" },
                { href: "/galeria", label: "Galéria" },
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
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-lg font-semibold text-foreground">Kapcsolat</h3>
            <div className="flex flex-col gap-3">
              <motion.a 
                href="mailto:info@artemisdiamond.hu" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                info@artemisdiamond.hu
              </motion.a>
              <motion.a 
                href="tel:+36301234567" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
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
                  className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
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
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Artemis Diamond Cattery. Minden jog fenntartva.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
