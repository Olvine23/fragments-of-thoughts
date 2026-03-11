"use client"

import { motion } from "framer-motion"

const poems = [
  {
    title: "Dusk",
    lines: [
      "The sun dips low, a final bow",
      "to shadows stretching, lengthening now.",
      "I hold my breath as colors blend—",
      "another day approaching end.",
      "",
      "But endings, too, hold gentle grace,",
      "like wrinkles on a well-loved face.",
      "In fading light, I find my peace:",
      "with every sunset comes release."
    ]
  },
  {
    title: "Untitled (For You)",
    lines: [
      "You exist somewhere between",
      "my waking and my dreaming—",
      "a presence felt but never seen,",
      "always arriving, always leaving.",
      "",
      "I have learned to love the space",
      "you occupy within my chest.",
      "Even absence has a face",
      "when you have known someone at their best."
    ]
  },
  {
    title: "3 AM",
    lines: [
      "The house breathes differently at night,",
      "settling into itself like an old friend.",
      "I trace the ceiling patterns",
      "and wonder if the moon feels lonely too—",
      "always watching, never touching,",
      "loving from an impossible distance."
    ]
  }
]

export function PoetrySection() {
  return (
    <section id="poetry" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">Poetry</h2>
          <p className="text-muted-foreground">Words arranged in patterns of feeling.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {poems.map((poem, index) => (
            <motion.div
              key={poem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-6 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-500 h-full">
                <h3 className="font-serif text-xl font-medium mb-6 text-primary/80 group-hover:text-primary transition-colors duration-300">
                  {poem.title}
                </h3>
                <div className="font-serif text-sm leading-loose text-foreground/80">
                  {poem.lines.map((line, lineIndex) => (
                    <p key={lineIndex} className={line === "" ? "h-4" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
