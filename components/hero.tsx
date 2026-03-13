"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/poetry-untitled.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      </div>

      {/* Ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute top-[10%] right-[10%] h-[120px] w-[120px] rounded-full blur-[60px]"
              style={{ backgroundColor: "rgba(100, 140, 200, 0.25)" }}
              animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute bottom-[25%] left-[8%] h-[100px] w-[100px] rounded-full blur-[50px]"
              style={{ backgroundColor: "rgba(120, 130, 180, 0.3)" }}
              animate={{ opacity: [0, 0.35, 0], scale: [0.9, 1.15, 0.9] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
            />

            <motion.div
              className="absolute top-[45%] right-[5%] h-[80px] w-[80px] rounded-full blur-[40px]"
              style={{ backgroundColor: "rgba(130, 150, 210, 0.35)" }}
              animate={{ opacity: [0, 0.45, 0], scale: [0.85, 1.2, 0.85] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 6,
              }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-primary/75">
            A home for scattered words and restless feelings
          </p>

          <h1 className="mb-8 font-serif text-5xl font-light tracking-tight text-foreground/80 text-balance md:text-7xl lg:text-8xl">
            Fragments of Thought
          </h1>

          <p className="mx-auto max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/72 md:text-2xl">
             A space for the thoughts
            <span className="text-foreground"> too raw, too strange, or too honest to stay hidden.</span>
          </p>

          
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? {} : { opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#writings"
          className="group flex flex-col items-center gap-3 text-foreground/50 transition-colors duration-300 hover:text-primary/80"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>

          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}