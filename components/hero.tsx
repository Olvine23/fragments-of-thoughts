"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/poetry-untitled.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      {/* Animated ambient glows - subtle and localized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pulsing glow 1 - top right corner, 8s cycle */}
        <motion.div
          className="absolute top-[10%] right-[10%] w-[120px] h-[120px] rounded-full blur-[60px]"
          style={{ backgroundColor: "rgba(100, 140, 200, 0.25)" }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Pulsing glow 2 - bottom left corner, 10s cycle */}
        <motion.div
          className="absolute bottom-[25%] left-[8%] w-[100px] h-[100px] rounded-full blur-[50px]"
          style={{ backgroundColor: "rgba(120, 130, 180, 0.3)" }}
          animate={{
            opacity: [0, 0.35, 0],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Pulsing glow 3 - right side middle, 12s cycle */}
        <motion.div
          className="absolute top-[45%] right-[5%] w-[80px] h-[80px] rounded-full blur-[40px]"
          style={{ backgroundColor: "rgba(130, 150, 210, 0.35)" }}
          animate={{
            opacity: [0, 0.45, 0],
            scale: [0.85, 1.2, 0.85],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
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
        
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a 
          href="#writings" 
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
