"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { exhibitionEvents } from "@/lib/exhibitions"

const featuredExhibitions = exhibitionEvents.slice(0, 3)

export function ExhibitionsSection() {
  return (
    <section
      id="kiallitasok"
      className="py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.99 0.01 245) 0%, oklch(0.94 0.025 248) 55%, oklch(0.84 0.05 252) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-4">
            <p className="text-sm tracking-[0.3em] text-primary uppercase font-medium">
              Kiállítások
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-foreground text-balance">
              Rendszeresen részt veszünk{" "}
              <span className="font-semibold italic text-primary">
                hazai és külföldi kiállításokon
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Folyamatosan megmérettetjük cicáinkat rangos kiállításokon, ahol
              szakmai visszajelzésekkel és szép eredményekkel erősítjük
              tenyészetünk minőségét.
            </p>
          </div>

          <Button asChild variant="outline" className="w-fit group">
            <Link href="/kiallitasok">
              Összes kiállítás megtekintése
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredExhibitions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <Link href="/kiallitasok" className="group relative block">
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-primary/15 bg-card/80 backdrop-blur-sm shadow-lg shadow-primary/5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                >
                  <Image
                    src={item.photos[0].image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground">
                    <Trophy className="w-3.5 h-3.5 text-primary" />
                    {item.result}
                  </span>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ y: 100, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl font-semibold text-primary-foreground">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {item.location} • {item.date}
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="mt-4 space-y-1 px-1"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {item.location} • {item.date}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
