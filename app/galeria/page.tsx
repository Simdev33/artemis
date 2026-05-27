"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const cats = [
  {
    id: 1,
    name: "Apollo",
    color: "Ezüst tabby",
    gender: "Kan",
    description: "Apollo egy fenséges ezüst tabby kan, gyönyörű zöld szemekkel és lenyűgöző bundával. Barátságos és játékos természetű.",
    image: "/images/cat-1.jpg",
  },
  {
    id: 2,
    name: "Luna",
    color: "Vörös mackerel",
    gender: "Nőstény",
    description: "Luna a tenyészet büszkesége, mesés vörös bundájával és arany szemeivel. Gyengéd és szeretetteljes.",
    image: "/images/cat-2.jpg",
  },
  {
    id: 3,
    name: "Artemis",
    color: "Fehér krém",
    gender: "Nőstény",
    description: "Artemis névadónk, elegáns fehér-krém bundával és kék szemekkel. Igazi hercegnő a tenyészetben.",
    image: "/images/cat-3.jpg",
  },
  {
    id: 4,
    name: "Zeus",
    color: "Barna tabby",
    gender: "Kan",
    description: "Zeus az egyik legnagyobb Maine Coon-unk, impozáns méretével és sűrű bundájával igazi király.",
    image: "/images/cat-4.jpg",
  },
  {
    id: 5,
    name: "Kicsike",
    color: "Tabby kölyök",
    gender: "Kölyök",
    description: "A legújabb kölykeink egyike, játékos és kíváncsi. Hamarosan új otthont keres!",
    image: "/images/cat-5.jpg",
  },
  {
    id: 6,
    name: "Shadow",
    color: "Fekete füst",
    gender: "Kan",
    description: "Shadow misztikus fekete füst bundájával és aranysárga szemeivel lenyűgöző látványt nyújt.",
    image: "/images/cat-6.jpg",
  },
]

const filters = ["Összes", "Kan", "Nőstény", "Kölyök"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: { duration: 0.3 }
  }
}

export default function GalleryPage() {
  const [selectedCat, setSelectedCat] = useState<typeof cats[0] | null>(null)
  const [activeFilter, setActiveFilter] = useState("Összes")

  const filteredCats = activeFilter === "Összes" 
    ? cats 
    : cats.filter(cat => cat.gender === activeFilter)

  const currentIndex = selectedCat ? filteredCats.findIndex(c => c.id === selectedCat.id) : -1

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedCat(filteredCats[currentIndex - 1])
    }
  }

  const goToNext = () => {
    if (currentIndex < filteredCats.length - 1) {
      setSelectedCat(filteredCats[currentIndex + 1])
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.p 
            className="text-sm tracking-[0.3em] text-primary uppercase font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Galéria
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl font-light text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ismerje meg{" "}
            <span className="font-semibold italic">cicáinkat</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fedezze fel gyönyörű Maine Coon macskáinkat. Minden állatunk törzskönyves, 
            egészséges és szeretetteljes otthonban nevelkedik.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-colors relative",
                  activeFilter === filter
                    ? "text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {activeFilter === filter && (
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeFilter}
          >
            <AnimatePresence mode="popLayout">
              {filteredCats.map((cat, index) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat)}
                  className="group text-left focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
                  variants={cardVariants}
                  layout
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
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
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Number Badge */}
                    <motion.div 
                      className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-sm font-medium text-foreground">0{index + 1}</span>
                    </motion.div>

                    {/* Gender Badge */}
                    <motion.div 
                      className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <span className="text-xs font-medium text-foreground">{cat.gender}</span>
                    </motion.div>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                      whileHover={{ translateX: "200%" }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />

                    {/* Hover info overlay */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-6"
                      initial={{ y: 100, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <h3 className="text-2xl font-semibold text-primary-foreground">{cat.name}</h3>
                      <p className="text-primary-foreground/80">{cat.color}</p>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="mt-4 space-y-1"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-muted-foreground">{cat.color}</p>
                  </motion.div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedCat} onOpenChange={() => setSelectedCat(null)}>
        <DialogContent
          className="max-w-4xl p-0 bg-card border-border overflow-hidden"
          showCloseButton={false}
        >
          {selectedCat && (
            <>
              <DialogTitle className="sr-only">
                {selectedCat.name} – {selectedCat.gender}, {selectedCat.color}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {selectedCat.description}
              </DialogDescription>
            </>
          )}

          <button
            onClick={() => setSelectedCat(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
            aria-label="Bezárás"
          >
            <X className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            {selectedCat && (
              <motion.div 
                key={selectedCat.id}
                className="grid md:grid-cols-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <motion.div 
                  className="relative aspect-square md:aspect-auto md:h-[500px]"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={selectedCat.image}
                    alt={selectedCat.name}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {currentIndex > 0 && (
                    <motion.button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                      aria-label="Előző"
                      whileHover={{ scale: 1.1, x: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                  )}
                  {currentIndex < filteredCats.length - 1 && (
                    <motion.button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                      aria-label="Következő"
                      whileHover={{ scale: 1.1, x: 3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  )}
                </motion.div>

                {/* Info */}
                <motion.div 
                  className="p-8 flex flex-col justify-center space-y-6"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div>
                    <motion.p 
                      className="text-sm tracking-[0.2em] text-primary uppercase font-medium mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedCat.gender}
                    </motion.p>
                    <motion.h2 
                      className="text-3xl md:text-4xl font-semibold text-foreground"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      {selectedCat.name}
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-muted-foreground mt-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedCat.color}
                    </motion.p>
                  </div>
                  
                  <motion.p 
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    {selectedCat.description}
                  </motion.p>

                  <motion.div 
                    className="pt-4 border-t border-border"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="text-sm text-muted-foreground">
                      Érdeklődik {selectedCat.name} iránt?{" "}
                      <a href="/#kapcsolat" className="text-primary hover:underline">
                        Lépjen kapcsolatba velünk!
                      </a>
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  )
}
