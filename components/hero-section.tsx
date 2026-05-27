"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

/** Deterministic 0–1 value from index. */
function particleUnit(index: number, channel: number): number {
  const n = Math.sin(index * 12.9898 + channel * 78.233) * 43758.5453
  return n - Math.floor(n)
}

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  left: `${(particleUnit(i, 1) * 100).toFixed(2)}%`,
  top: `${(particleUnit(i, 2) * 100).toFixed(2)}%`,
  duration: 4 + particleUnit(i, 3) * 4,
  delay: particleUnit(i, 4) * 2,
}))

export function HeroSection() {
  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    setShowParticles(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Particles — client-only (avoids SSR vs Framer Motion style mismatch) */}
      <div className="absolute inset-0 z-0" aria-hidden>
        {showParticles &&
          PARTICLES.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{ left: particle.left, top: particle.top }}
              animate={{
                y: [0, -20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
      </div>

      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-cat.jpg"
          alt="Maine Coon macska"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(108deg, oklch(0.99 0.01 245 / 0.68) 0%, oklch(0.95 0.025 248 / 0.42) 38%, oklch(0.30 0.07 258 / 0.34) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/18 via-accent/6 to-transparent" />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 border border-white/75 text-sm tracking-wide text-white font-medium shadow-md shadow-black/20">
              <Sparkles className="w-4 h-4" />
              Maine Coon & Szibériai
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]">
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Artemis
              </motion.span>
              <motion.span 
                className="block font-semibold italic text-sky-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Diamond
              </motion.span>
              <motion.span 
                className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-widest text-white/95"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Cattery
              </motion.span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white leading-relaxed max-w-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Üdvözöljük tenyészetünkben — világosból sötétkékbe vezető 
            eleganciában neveljük Maine Coon és Szibériai macskáinkat, 
            szeretettel és szakértelemmel.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button asChild size="lg" className="group relative overflow-hidden shadow-lg shadow-black/30">
              <Link href="/galeria">
                <span className="relative z-10 flex items-center">
                  Fedezze fel cicáinkat
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group backdrop-blur-sm border-white/70 bg-white/15 text-white hover:bg-white/25 hover:text-white">
              <Link href="#kapcsolat">
                <span className="relative">
                  Lépjen kapcsolatba velünk
                </span>
              </Link>
            </Button>
          </motion.div>

          {/* Stats with Animated Counters */}
          <motion.div 
            className="flex flex-wrap gap-8 pt-8 border-t border-border/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {[
              { value: "10+", label: "Év tapasztalat" },
              { value: "150+", label: "Boldog család" },
              { value: "100%", label: "Törzskönyves" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-default px-1 py-1"
              >
                <motion.p 
                  className="text-3xl md:text-4xl font-semibold text-sky-200"
                  style={{
                    WebkitTextStroke: "0.8px rgba(255,255,255,0.55)",
                    textShadow: "0 2px 10px rgba(0,0,0,0.45)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <p
                  className="text-sm text-white/92"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.45)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
