import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedCats } from "@/components/featured-cats"
import { ExhibitionsSection } from "@/components/exhibitions-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.99 0.01 245) 0%, oklch(0.95 0.025 248) 32%, oklch(0.88 0.05 250) 68%, oklch(0.30 0.08 260) 100%)",
      }}
    >
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturedCats />
      <ExhibitionsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
