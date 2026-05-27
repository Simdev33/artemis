"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { featuredCats, BREED_LABELS } from "@/lib/cats"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export function FeaturedCats() {
  return (
    <section
      className="py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.98 0.012 245) 0%, oklch(0.92 0.032 248) 50%, oklch(0.80 0.06 252) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="space-y-4" variants={headerVariants}>
            <motion.p 
              className="text-sm tracking-[0.3em] text-primary uppercase font-medium"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Kiemelt cicáink
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground text-balance">
              Ismerje meg{" "}
              <span className="font-semibold italic text-primary">sztárjainkat</span>
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Maine Coon és Szibériai vonalaink legkiemeltebb tagjai.
            </p>
          </motion.div>
          <motion.div variants={headerVariants}>
            <Button asChild variant="outline" className="w-fit group">
              <Link href="/galeria">
                Összes megtekintése
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Cats Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {featuredCats.map((cat, index) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/galeria"
                className="group relative block"
              >
                <motion.div 
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, oklch(0.20 0.10 270 / 0.85) 0%, oklch(0.35 0.10 265 / 0.4) 45%, transparent 100%)" }}
                  />
                  
                  {/* Info Overlay */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ y: 100, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl font-semibold text-primary-foreground">{cat.name}</h3>
                    <p className="text-primary-foreground/80">{cat.color}</p>
                  </motion.div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    whileHover={{ translateX: "200%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.div>

                {/* Default Info */}
                <motion.div 
                  className="mt-4 space-y-1"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-medium text-foreground">{cat.name}</h3>
                  <p className="text-sm text-primary font-medium">{BREED_LABELS[cat.breed]}</p>
                  <p className="text-muted-foreground">{cat.color}</p>
                </motion.div>

                {/* Number Badge */}
                <motion.div 
                  className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-sm font-medium text-foreground">0{index + 1}</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
