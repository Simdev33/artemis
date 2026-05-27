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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import {
  type Cat,
  type CatBreed,
  type CatCategory,
  BREED_LABELS,
  CATEGORY_LABELS,
  GALLERY_CATEGORIES,
  filterCats,
} from "@/lib/cats"

type CategoryFilter = CatCategory | "all"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
}

function GalleryGrid({
  breed,
  category,
  onSelect,
}: {
  breed: CatBreed
  category: CategoryFilter
  onSelect: (cat: Cat) => void
}) {
  const filteredCats = filterCats(breed, category)

  if (filteredCats.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-16 text-lg">
        Ebben a kategóriában jelenleg nincs megjeleníthető macska.
      </p>
    )
  }

  return (
    <motion.div
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={`${breed}-${category}`}
    >
      <AnimatePresence mode="popLayout">
        {filteredCats.map((cat, index) => (
          <motion.button
            key={cat.id}
            onClick={() => onSelect(cat)}
            className="group text-left focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
            variants={cardVariants}
            layout
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary shadow-lg shadow-primary/10"
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

              <motion.div
                className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center border border-primary/20"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-medium text-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>

              <motion.div
                className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <span className="text-xs font-medium">
                  {CATEGORY_LABELS[cat.category]}
                </span>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ y: 100, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-semibold text-primary-foreground">
                  {cat.name}
                </h3>
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
  )
}

export default function GalleryPage() {
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null)
  const [activeBreed, setActiveBreed] = useState<CatBreed>("maine-coon")
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all")

  const filteredCats = filterCats(activeBreed, activeCategory)
  const currentIndex = selectedCat
    ? filteredCats.findIndex((c) => c.id === selectedCat.id)
    : -1

  const handleBreedChange = (breed: CatBreed) => {
    setActiveBreed(breed)
    setActiveCategory("all")
    setSelectedCat(null)
  }

  const goToPrevious = () => {
    if (currentIndex > 0) setSelectedCat(filteredCats[currentIndex - 1])
  }

  const goToNext = () => {
    if (currentIndex < filteredCats.length - 1)
      setSelectedCat(filteredCats[currentIndex + 1])
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

      <section className="pt-32 pb-16 relative overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-96 h-96 bg-accent/25 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.p
            className="text-sm tracking-[0.3em] text-primary uppercase font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Galéria
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-light text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ismerje meg{" "}
            <span className="font-semibold italic text-primary">cicáinkat</span>
          </motion.h1>
          <motion.p
            className="text-lg text-foreground/85 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Maine Coon és Szibériai vonalaink — válasszon fajtát, majd szűrje
            kandúrok, nőstények vagy kiscicáink között.
          </motion.p>
        </div>
      </section>

      <section className="sticky top-20 z-40 border-b border-primary/20 bg-background/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 space-y-5">
          <Tabs
            value={activeBreed}
            onValueChange={(v) => handleBreedChange(v as CatBreed)}
            className="w-full"
          >
            <TabsList className="mx-auto flex h-auto w-full max-w-md gap-1 bg-primary/10 p-1.5 border border-primary/15">
              {(Object.keys(BREED_LABELS) as CatBreed[]).map((breed) => (
                <TabsTrigger
                  key={breed}
                  value={breed}
                  className="flex-1 rounded-lg px-6 py-2.5 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                >
                  {BREED_LABELS[breed]}
                </TabsTrigger>
              ))}
            </TabsList>

            {(Object.keys(BREED_LABELS) as CatBreed[]).map((breed) => (
              <TabsContent key={breed} value={breed} className="mt-0">
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  <motion.button
                    onClick={() => setActiveCategory("all")}
                    className={cn(
                      "px-5 py-2 rounded-full text-sm font-medium transition-colors relative",
                      activeCategory === "all"
                        ? "text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeCategory === "all" && (
                      <motion.div
                        className="absolute inset-0 bg-primary rounded-full"
                        layoutId="categoryFilter"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">Összes</span>
                  </motion.button>

                  {GALLERY_CATEGORIES.map((cat) => (
                    <motion.button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "px-5 py-2 rounded-full text-sm font-medium transition-colors relative",
                        activeCategory === cat
                          ? "text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeCategory === cat && (
                        <motion.div
                          className="absolute inset-0 bg-primary rounded-full"
                          layoutId="categoryFilter"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">
                        {CATEGORY_LABELS[cat]}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-background/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <GalleryGrid
            breed={activeBreed}
            category={activeCategory}
            onSelect={setSelectedCat}
          />
        </div>
      </section>

      <Dialog open={!!selectedCat} onOpenChange={() => setSelectedCat(null)}>
        <DialogContent
          className="max-w-4xl p-0 bg-card border-primary/20 overflow-hidden"
          showCloseButton={false}
        >
          {selectedCat && (
            <>
              <DialogTitle className="sr-only">
                {selectedCat.name} – {CATEGORY_LABELS[selectedCat.category]},{" "}
                {selectedCat.color}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {selectedCat.description}
              </DialogDescription>
            </>
          )}

          <button
            onClick={() => setSelectedCat(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
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
              >
                <motion.div
                  className="relative aspect-square md:aspect-auto md:h-[500px]"
                  style={{ background: "linear-gradient(135deg, oklch(0.90 0.06 248) 0%, oklch(0.70 0.12 252) 100%)" }}
                >
                  <Image
                    src={selectedCat.image}
                    alt={selectedCat.name}
                    fill
                    className="object-cover"
                  />
                  {currentIndex > 0 && (
                    <motion.button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
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
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Következő"
                      whileHover={{ scale: 1.1, x: 3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  )}
                </motion.div>

                <motion.div className="p-8 flex flex-col justify-center space-y-6 bg-gradient-to-b from-card to-secondary/40">
                  <div>
                    <p className="text-sm tracking-[0.2em] text-primary uppercase font-medium mb-1">
                      {BREED_LABELS[selectedCat.breed]}
                    </p>
                    <p className="text-sm tracking-[0.15em] text-muted-foreground uppercase mb-2">
                      {CATEGORY_LABELS[selectedCat.category]}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                      {selectedCat.name}
                    </h2>
                    <p className="text-lg text-muted-foreground mt-1">
                      {selectedCat.color}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCat.description}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Érdeklődik {selectedCat.name} iránt?{" "}
                      <a
                        href="/#kapcsolat"
                        className="text-primary hover:underline font-medium"
                      >
                        Lépjen kapcsolatba velünk!
                      </a>
                    </p>
                  </div>
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
