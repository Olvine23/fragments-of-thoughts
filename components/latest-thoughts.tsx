"use client"

import { motion } from "framer-motion"

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
    <section id="thoughts" className="px-6 py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
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
              className="p-6 rounded-lg bg-card/30 border border-border/30 hover:border-primary/20 transition-all duration-500"
            >
              <p className="font-serif text-lg leading-relaxed mb-4 italic text-foreground/90">
                {`"${thought.content}"`}
              </p>
              <span className="text-xs text-muted-foreground">{thought.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
