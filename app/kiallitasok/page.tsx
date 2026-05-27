"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Trophy, X } from "lucide-react"
import { motion } from "framer-motion"
import {
  exhibitionEvents,
  type ExhibitionEvent,
  type ExhibitionPhoto,
} from "@/lib/exhibitions"

type SelectedPhoto = {
  eventId: number
  photoId: number
}

export default function ExhibitionsPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<SelectedPhoto | null>(null)

  const activeContext = useMemo(() => {
    if (!selectedPhoto) return null
    const event = exhibitionEvents.find((e) => e.id === selectedPhoto.eventId)
    if (!event) return null
    const photoIndex = event.photos.findIndex((p) => p.id === selectedPhoto.photoId)
    if (photoIndex < 0) return null
    return { event, photoIndex, photo: event.photos[photoIndex] }
  }, [selectedPhoto])

  const openPhoto = (event: ExhibitionEvent, photo: ExhibitionPhoto) => {
    setSelectedPhoto({ eventId: event.id, photoId: photo.id })
  }

  const goToPrevious = () => {
    if (!activeContext) return
    const prev = activeContext.photoIndex - 1
    if (prev >= 0) {
      setSelectedPhoto({
        eventId: activeContext.event.id,
        photoId: activeContext.event.photos[prev].id,
      })
    }
  }

  const goToNext = () => {
    if (!activeContext) return
    const next = activeContext.photoIndex + 1
    if (next < activeContext.event.photos.length) {
      setSelectedPhoto({
        eventId: activeContext.event.id,
        photoId: activeContext.event.photos[next].id,
      })
    }
  }

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.99 0.01 245) 0%, oklch(0.95 0.025 248) 32%, oklch(0.88 0.05 250) 68%, oklch(0.30 0.08 260) 100%)",
      }}
    >
      <Navigation />

      <section className="pt-32 pb-14 relative overflow-hidden">
        <motion.div
          className="absolute top-24 left-12 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-80 h-80 bg-accent/12 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 9, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <p className="text-sm tracking-[0.3em] text-primary uppercase font-medium mb-4">
            Kiállítások
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 text-balance">
            Eseményeink{" "}
            <span className="font-semibold italic text-primary">
              hazai és külföldi
            </span>{" "}
            kiállításokról
          </h1>
          <p className="text-lg text-foreground/85 max-w-3xl mx-auto">
            Nem csak itthon, hanem külföldön is rendszeresen részt veszünk
            macskakiállításokon. Az alábbi szekciók eseményenként mutatják be a
            hétvégéinket, rövid leírással és képekkel.
          </p>
        </div>
      </section>

      <section className="py-10 bg-background/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">
          {exhibitionEvents.map((event, eventIndex) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: eventIndex * 0.04 }}
              className="rounded-3xl border border-primary/15 bg-card/85 backdrop-blur-sm p-6 md:p-8 shadow-lg shadow-primary/5"
            >
              <div className="mb-8">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-[0.17em]">
                  <Trophy className="w-4 h-4" />
                  {event.result}
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
                  {event.title}
                </h2>
                <p className="mt-2 text-primary font-medium">
                  {event.location} • {event.date}
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">
                  {event.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.photos.map((photo) => (
                  <motion.button
                    key={photo.id}
                    onClick={() => openPhoto(event, photo)}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    className="group text-left rounded-2xl overflow-hidden border border-primary/15 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <motion.div
                      className="relative aspect-[4/3]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.35 }}
                    >
                      <Image
                        src={photo.image}
                        alt={photo.caption}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-95 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <p className="text-sm font-medium text-primary-foreground">
                          {photo.caption}
                        </p>
                      </div>
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Dialog open={!!activeContext} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent
          className="max-w-5xl p-0 bg-card border-primary/20 overflow-hidden"
          showCloseButton={false}
        >
          {activeContext && (
            <>
              <DialogTitle className="sr-only">{activeContext.event.title}</DialogTitle>
              <DialogDescription className="sr-only">
                {activeContext.photo.caption}
              </DialogDescription>
            </>
          )}

          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/85 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Bezárás"
          >
            <X className="w-5 h-5" />
          </button>

          {activeContext && (
            <div className="grid md:grid-cols-[1.7fr_1fr]">
              <div className="relative aspect-square md:aspect-auto md:h-[560px]">
                <Image
                  src={activeContext.photo.image}
                  alt={activeContext.photo.caption}
                  fill
                  className="object-cover"
                />

                {activeContext.photoIndex > 0 && (
                  <motion.button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/85 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Előző"
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                )}
                {activeContext.photoIndex < activeContext.event.photos.length - 1 && (
                  <motion.button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/85 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Következő"
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.94 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                )}
              </div>

              <div className="p-7 flex flex-col justify-center space-y-4">
                <p className="text-sm tracking-[0.2em] text-primary uppercase font-medium">
                  {activeContext.event.location} • {activeContext.event.date}
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  {activeContext.event.title}
                </h2>
                <p className="text-sm text-primary font-medium inline-flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  {activeContext.event.result}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {activeContext.photo.caption}
                </p>
                <p className="text-xs text-muted-foreground/80">
                  Kép {activeContext.photoIndex + 1} / {activeContext.event.photos.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  )
}
