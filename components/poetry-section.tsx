"use client"

import { Poem } from "@/lib/type"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
 

interface PoetrySectionProps {
  poems: Poem[]
}

export function PoetrySection({ poems }: PoetrySectionProps) {
  return (
    <section id="poetry" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">Poetry</h2>
          <p className="text-muted-foreground">Words arranged in patterns of feeling.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {poems.map((poem, index) => (
            <Link href={`/poetry/${poem.slug}`} key={poem.slug}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl bg-card/30 border border-border/30 hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={poem.image}
                      alt={poem.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80" />
                    <h3 className="absolute bottom-4 left-4 font-serif text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {poem.title}
                    </h3>
                  </div>

                  <div className="p-6">
                    <div className="font-serif text-sm leading-loose text-foreground/80 line-clamp-4">
                      {poem.lines.slice(0, 4).map((line, lineIndex) => (
                        <p key={lineIndex} className={line === "" ? "h-3" : ""}>
                          {line}
                        </p>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center text-xs text-primary/70 group-hover:text-primary transition-colors duration-300">
                      <span>Read full poem</span>
                      <svg
                        className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}