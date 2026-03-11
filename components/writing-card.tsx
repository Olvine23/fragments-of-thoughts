"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface WritingCardProps {
  slug: string
  title: string
  excerpt: string
  readingTime: string
  category: string
  date: string
  image: string
  index: number
}

export function WritingCard({ slug, title, excerpt, readingTime, category, date, image, index }: WritingCardProps) {
  return (
    <Link href={`/writing/${slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group cursor-pointer"
      >
        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-500">
          {/* Image */}
          <div className="relative w-full md:w-64 h-48 md:h-40 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-60" />
          </div>
          
          {/* Content */}
          <div className="flex flex-col justify-center flex-1">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="text-primary/80 uppercase tracking-wider font-medium">{category}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{date}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{readingTime}</span>
            </div>
            
            <h3 className="font-serif text-2xl font-medium mb-3 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed line-clamp-2 text-sm">
              {excerpt}
            </p>
            
            <div className="mt-4 flex items-center text-sm text-primary/70 group-hover:text-primary transition-colors duration-300">
              <span>Continue reading</span>
              <svg 
                className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
