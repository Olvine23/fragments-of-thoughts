import { getArticleBySlug, getAllArticleSlugs } from "@/lib/articles"
import { notFound } from "next/navigation"
import { ArticleContent } from "@/components/article-content"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return { title: "Article Not Found" }
  }
  
  return {
    title: `${article.title} | Fragments of Thought`,
    description: article.excerpt,
  }
}

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }
  
  return <ArticleContent article={article} />
}
