"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@artemisdiamond.hu",
    href: "mailto:info@artemisdiamond.hu"
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+36 30 123 4567",
    href: "tel:+36301234567"
  },
  {
    icon: MapPin,
    title: "Helyszín",
    value: "Budapest, Magyarország",
    href: null
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  return (
    <section
      id="kapcsolat"
      className="py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.96 0.02 246) 0%, oklch(0.90 0.04 248) 48%, oklch(0.74 0.07 252) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p 
            className="text-sm tracking-[0.3em] text-primary uppercase font-medium"
            variants={itemVariants}
          >
            Kapcsolat
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-light text-foreground text-balance"
            variants={itemVariants}
          >
            Lépjen velünk{" "}
            <span className="font-semibold italic">kapcsolatba</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Érdeklődik cicáink iránt, vagy kérdése van? Örömmel válaszolunk!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="space-y-6" variants={containerVariants}>
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.title}
                  className="flex items-start gap-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "hsl(var(--primary))",
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-medium text-foreground">{info.title}</h3>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="p-6 rounded-2xl bg-card border border-border relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"
                animate={{
                  background: [
                    "linear-gradient(to right, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05))",
                    "linear-gradient(to right, hsl(var(--accent) / 0.05), hsl(var(--primary) / 0.05))",
                    "linear-gradient(to right, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05))"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="relative">
                <h3 className="font-semibold text-foreground mb-2">Látogatás</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Személyes látogatásra előzetes egyeztetés alapján van lehetőség. 
                  Kérjük, vegye fel velünk a kapcsolatot időpont egyeztetéséhez.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="h-full flex flex-col items-center justify-center py-16 relative"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-semibold text-foreground mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Köszönjük!
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Hamarosan felvesszük Önnel a kapcsolatot.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-6 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {[
                    { id: "name", label: "Név", type: "text", placeholder: "Az Ön neve", required: true },
                    { id: "email", label: "Email", type: "email", placeholder: "pelda@email.hu", required: true },
                    { id: "phone", label: "Telefon", type: "tel", placeholder: "+36 30 123 4567", required: false }
                  ].map((field, index) => (
                    <motion.div 
                      key={field.id}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Label htmlFor={field.id}>{field.label}</Label>
                      <motion.div
                        animate={{
                          scale: focusedField === field.id ? 1.02 : 1
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <Input
                          id={field.id}
                          type={field.type}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="bg-background transition-shadow duration-300 focus:shadow-lg focus:shadow-primary/10"
                        />
                      </motion.div>
                    </motion.div>
                  ))}

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label htmlFor="message">Üzenet</Label>
                    <motion.div
                      animate={{
                        scale: focusedField === "message" ? 1.02 : 1
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Írja le kérdését vagy érdeklődését..."
                        rows={4}
                        required
                        className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow duration-300 focus:shadow-lg focus:shadow-primary/10"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full group relative overflow-hidden"
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="relative flex items-center justify-center">
                        Üzenet küldése
                        <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
