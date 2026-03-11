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
      
      {/* Animated ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Pulsing glow 1 - top right, 8s cycle - BRIGHT BLUE */}
        <motion.div
          className="absolute top-[15%] right-[20%] w-[300px] h-[300px] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(59, 130, 246, 0.5)" }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Pulsing glow 2 - bottom left, 10s cycle - NAVY/INDIGO */}
        <motion.div
          className="absolute bottom-[20%] left-[15%] w-[350px] h-[350px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(99, 102, 241, 0.45)" }}
          animate={{
            opacity: [0.15, 0.6, 0.15],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        
        {/* Pulsing glow 3 - center, 12s cycle - LARGER SOFT BLUE */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(56, 189, 248, 0.35)" }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        
        {/* Wandering accent glow - moves across screen */}
        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full blur-[80px]"
          style={{ backgroundColor: "rgba(139, 92, 246, 0.5)" }}
          animate={{
            x: ["10vw", "60vw", "30vw", "10vw"],
            y: ["20vh", "50vh", "70vh", "20vh"],
            opacity: [0.2, 0.6, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
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
