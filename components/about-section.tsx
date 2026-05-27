"use client"

import Image from "next/image"
import { Heart, Award, Shield, Sparkles, Facebook, Instagram } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Heart,
    title: "Szeretettel nevelve",
    description: "Minden cicánk családtagként nő fel, emberközeli környezetben."
  },
  {
    icon: Award,
    title: "Törzskönyves állatok",
    description: "Összes macskánk FIFe regisztrált, ellenőrzött vérvonallal."
  },
  {
    icon: Shield,
    title: "Egészséggarancia",
    description: "Teljes egészségügyi vizsgálat, oltások és chip minden cicánál."
  },
  {
    icon: Sparkles,
    title: "Prémium minőség",
    description: "Csak a legjobb vonalakból származó, kiváló genetikájú állatok."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    href: "https://tiktok.com",
    label: "TikTok",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M14 3c.2 1.7 1.2 3.2 2.7 4.1 1 .6 2.2 1 3.3 1V11c-1.5 0-3-.4-4.3-1.2v6.6c0 3-2.4 5.4-5.4 5.4S5 19.4 5 16.4 7.4 11 10.4 11c.3 0 .6 0 .8.1v2.9a2.6 2.6 0 0 0-.8-.1c-1.4 0-2.6 1.1-2.6 2.5S9 19 10.4 19s2.6-1.1 2.6-2.5V3h1Z" />
      </svg>
    ),
  },
]

export function AboutSection() {
  return (
    <section
      id="rolunk"
      className="py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.98 0.012 245) 0%, oklch(0.93 0.03 248) 52%, oklch(0.83 0.055 252) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-cats.jpg"
                alt="Maine Coon macskák"
                fill
                className="object-cover"
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating decorative elements */}
            <motion.div
              className="absolute top-1/4 -right-4 w-20 h-20 border-2 border-primary/20 rounded-full"
              animate={{ 
                rotate: 360,
                y: [0, -10, 0]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.p 
                className="text-sm tracking-[0.3em] text-primary uppercase font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Rólunk
              </motion.p>
              <h2 className="text-4xl md:text-5xl font-light text-foreground text-balance">
                Szenvedéllyel a{" "}
                <span className="font-semibold italic text-primary">Maine Coon</span>{" "}
                és{" "}
                <span className="font-semibold italic text-primary">Szibériai</span>{" "}
                macskákért
              </h2>
            </motion.div>

            <motion.div 
              className="space-y-4 text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              <p>
                Az Artemis Diamond Cattery-t több mint egy évtizede alapítottam, 
                a prémium macskafajták iránti mély szeretetemből. Maine Coon és 
                Szibériai vonalainkon egyaránt elkötelezetten dolgozom azon, hogy 
                egészséges, gyönyörű és kiváló temperamentumú macskákat neveljek.
              </p>
              <p>
                Tenyészetünkben minden cica a család részeként nő fel, így 
                kiváló szocializációval és emberbarát természettel kerülnek új 
                otthonukba — legyen szó a Maine Coon &quot;szelíd óriásairól&quot; 
                vagy a bátor, hűséges szibériai társakról.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-6 pt-4"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  className="flex gap-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "hsl(var(--primary))",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="pt-6 border-t border-primary/20"
              variants={itemVariants}
            >
              <p className="text-sm md:text-base text-foreground mb-4">
                Elérhetőek vagyunk Facebookon, Instagramon és TikTokon is:
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full bg-primary/12 text-primary flex items-center justify-center border border-primary/25 hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
