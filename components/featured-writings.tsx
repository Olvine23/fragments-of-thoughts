"use client"

import { motion } from "framer-motion"
import { WritingCard } from "./writing-card"
import { articles } from "@/lib/articles"

export function FeaturedWritings() {
  return (
    <section id="writings" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">Featured Writings</h2>
          <p className="text-muted-foreground">Selected pieces that carry a piece of my heart.</p>
        </motion.div>
        
        <div className="grid gap-8">
          {articles.map((article, index) => (
            <WritingCard key={article.slug} {...article} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
