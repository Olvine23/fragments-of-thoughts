"use client"

import { Poem } from "@/lib/type"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
 

interface PoemContentProps {
  poem: Poem
}

export function PoemContent({ poem }: PoemContentProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#poetry"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm">Back to Poetry</span>
          </Link>

          <Link
            href="/"
            className="font-serif text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Fragments
          </Link>
        </div>
      </motion.div>

      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={poem.image}
          alt={poem.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />

        <div className="absolute inset-0 flex items-end justify-center pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center px-6"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-4 text-balance">
              {poem.title}
            </h1>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground/80 italic font-serif">
                — Olvine George
              </p>
              {poem.dedication && (
                <p className="text-muted-foreground italic text-lg">
                  {poem.dedication}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              {poem.date}
            </span>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-16"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-xl md:text-2xl leading-loose text-center"
          >
            {poem.lines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                className={line === "" ? "h-8" : "whitespace-pre-line mb-2 text-foreground"}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex justify-center mt-16 mb-12"
          >
            <svg className="w-8 h-8 text-primary/40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
            </svg>
          </motion.div>

          {poem.note && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="p-8 rounded-xl bg-card/30 border border-border/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-1 h-full min-h-[60px] bg-gradient-to-b from-primary/50 to-transparent rounded-full" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    A note from the author
                  </p>
                  <p className="text-foreground/80 leading-relaxed italic font-serif">
                    {poem.note}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="mt-16 pt-12 border-t border-border/30 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">Continue exploring</p>
            <Link
              href="/#poetry"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
            >
              <span>View all poetry</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}