"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type { Article } from "@/lib/articles"

interface ArticleContentProps {
  article: Article
}

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/30"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm">Back to writings</span>
          </Link>
          
          <span className="font-serif text-sm text-muted-foreground">Fragments of Thought</span>
        </div>
      </motion.nav>
      
      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] min-h-[400px] mt-16"
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 text-sm text-foreground/70 mb-4">
                <span className="text-primary uppercase tracking-wider font-medium">{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-foreground/30" />
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-foreground/30" />
                <span>{article.readingTime}</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="px-6 py-16"
      >
        <div className="max-w-3xl mx-auto">
          {/* Opening quote */}
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 mb-12 italic border-l-2 border-primary/30 pl-6">
            {article.excerpt}
          </p>
          
          {/* Main content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => {
              // Handle headers
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-serif text-2xl md:text-3xl font-light mt-12 mb-6 text-foreground">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              
              // Handle regular paragraphs
              return (
                <p key={index} className="text-foreground/80 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              )
            })}
          </div>
          
          {/* End ornament */}
          <div className="flex items-center justify-center gap-4 mt-16 text-muted-foreground/50">
            <span className="w-12 h-px bg-border" />
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="w-12 h-px bg-border" />
          </div>
          
          {/* Author note */}
          <div className="mt-16 p-8 rounded-xl bg-card/30 border border-border/30">
            <p className="font-serif text-lg text-foreground/80 italic text-center">
              Thank you for reading. If these words found you at the right moment, I hope they brought some comfort.
            </p>
          </div>
          
          {/* Back link */}
          <div className="mt-12 text-center">
            <Link 
              href="/#writings" 
              className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Explore more writings</span>
            </Link>
          </div>
        </div>
      </motion.article>
    </main>
  )
}
