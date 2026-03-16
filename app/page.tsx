import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturedWritings } from "@/components/featured-writings"
import { LatestThoughts } from "@/components/latest-thoughts"
import { PoetrySection } from "@/components/poetry-section"
import { Footer } from "@/components/footer"
import { getAllPoems } from "@/lib/poems"

export default function Home() {
  const poems = getAllPoems()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <FeaturedWritings />
      <LatestThoughts />
      <PoetrySection poems={poems} />
      <Footer />
    </main>
  )
}