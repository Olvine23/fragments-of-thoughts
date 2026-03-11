"use client"

import { motion } from "framer-motion"

interface WritingCardProps {
  title: string
  excerpt: string
  readingTime: string
  category: string
  date: string
  index: number
}

export function WritingCard({ title, excerpt, readingTime, category, date, index }: WritingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="p-6 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-500">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="text-primary/80 uppercase tracking-wider">{category}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{date}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>{readingTime}</span>
        </div>
        
        <h3 className="font-serif text-2xl font-medium mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        
        <div className="mt-6 flex items-center text-sm text-primary/70 group-hover:text-primary transition-colors duration-300">
          <span>Continue reading</span>
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.article>
  )
}
