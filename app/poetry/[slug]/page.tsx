import { notFound } from "next/navigation"
import { getPoemBySlug, getAllPoemSlugs } from "@/lib/poems"
import { PoemContent } from "@/components/poem-content"

interface PoemPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPoemSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PoemPageProps) {
  const { slug } = await params
  const poem = getPoemBySlug(slug)
  
  if (!poem) {
    return { title: "Poem Not Found" }
  }

  return {
    title: `${poem.title} | Poetry | Fragments of Thought`,
    description: poem.lines.slice(0, 4).join(" "),
  }
}

export default async function PoemPage({ params }: PoemPageProps) {
  const { slug } = await params
  const poem = getPoemBySlug(slug)

  if (!poem) {
    notFound()
  }

  return <PoemContent poem={poem} />
}
