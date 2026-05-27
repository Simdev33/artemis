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
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl overflow-hidden border border-primary/15 bg-card/80 backdrop-blur-sm shadow-lg shadow-primary/5"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.photos[0].image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-foreground">
                  <Trophy className="w-3.5 h-3.5 text-primary" />
                  {item.result}
                </span>
              </div>

              <div className="p-5 space-y-1">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-primary font-medium">
                  {item.location} • {item.date}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
