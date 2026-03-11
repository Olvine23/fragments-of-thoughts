"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const thoughts = [
  {
    content: "Sometimes the most profound conversations happen in complete silence, sitting beside someone who understands that words aren't always necessary.",
    date: "March 9"
  },
  {
    content: "I've started measuring my days not by productivity, but by moments of genuine presence. The difference has been everything.",
    date: "March 5"
  },
  {
    content: "There's a particular kind of beauty in unfinished things—in sentences that trail off, in stories without endings, in the space we leave for possibility.",
    date: "March 1"
  },
  {
    content: "Rain at 3 AM hits different. It feels like the world is being washed clean while everyone sleeps, and you're the only witness.",
    date: "February 27"
  }
]

export function LatestThoughts() {
  return (
    <section id="thoughts" className="relative px-6 py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/thoughts-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">Latest Thoughts</h2>
          <p className="text-muted-foreground">Unpolished reflections, captured as they come.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {thoughts.map((thought, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 h-full">
                <svg className="w-8 h-8 text-primary/30 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-serif text-lg leading-relaxed mb-6 text-foreground/90">
                  {thought.content}
                </p>
                <span className="text-xs text-muted-foreground tracking-wide">{thought.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
