"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-abstract.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
            A Personal Writing Space
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance">
            Fragments of Thought
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto italic">
            {"\""}In the quiet hours between midnight and dawn, words find their way to the surface—raw, unfiltered, honest.{"\""}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <nav className="flex items-center justify-center gap-8 text-sm">
            <a href="#writings" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Writings
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a href="#thoughts" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Thoughts
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a href="#poetry" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Poetry
            </a>
          </nav>
        </motion.div>
      </div>
    </section>
  )
}
