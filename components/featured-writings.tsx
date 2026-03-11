"use client"

import { motion } from "framer-motion"
import { WritingCard } from "./writing-card"

const featuredWritings = [
  {
    title: "The Art of Letting Go",
    excerpt: "There comes a moment in every life when holding on becomes more painful than release. I learned this truth not through wisdom, but through the slow unraveling of everything I thought I knew about love and loss.",
    readingTime: "8 min read",
    category: "Reflection",
    date: "March 2026"
  },
  {
    title: "Letters to My Younger Self",
    excerpt: "If I could fold time like paper and slip a note through the crease, what would I say to the person I used to be? Perhaps nothing. Perhaps everything would remain exactly as it should.",
    readingTime: "12 min read",
    category: "Personal",
    date: "February 2026"
  },
  {
    title: "The Space Between Heartbeats",
    excerpt: "In meditation, they tell you to focus on the breath. But I've always been more interested in the pauses—those infinite moments where everything stops and the universe holds its tongue.",
    readingTime: "6 min read",
    category: "Philosophy",
    date: "January 2026"
  }
]

export function FeaturedWritings() {
  return (
    <section id="writings" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
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
        
        <div className="grid gap-6">
          {featuredWritings.map((writing, index) => (
            <WritingCard key={writing.title} {...writing} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
