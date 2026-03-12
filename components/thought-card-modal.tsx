"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRef, useCallback } from "react"
import Image from "next/image"

interface Thought {
  content: string
  date: string
}

interface ThoughtCardModalProps {
  thought: Thought | null
  isOpen: boolean
  onClose: () => void
}

export function ThoughtCardModal({ thought, isOpen, onClose }: ThoughtCardModalProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleDownload = useCallback(async () => {
    if (!cardRef.current || !thought) return

    try {
      const html2canvas = (await import("html2canvas")).default
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true,
      })
      
      const link = document.createElement("a")
      link.download = `thought-${thought.date.replace(/\s/g, "-").toLowerCase()}.png`
      link.href = canvas.toDataURL("image/png")
      link.click()
    } catch (error) {
      console.error("Failed to download:", error)
    }
  }, [thought])

  const handleShare = useCallback(async () => {
    if (!thought) return

    const shareText = `"${thought.content}"\n\n— Fragments of Thought`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "A Thought",
          text: shareText,
        })
      } catch (error) {
        // User cancelled or share failed
        await navigator.clipboard.writeText(shareText)
      }
    } else {
      await navigator.clipboard.writeText(shareText)
    }
  }, [thought])

  const handleCopyText = useCallback(async () => {
    if (!thought) return
    const shareText = `"${thought.content}"\n\n— Fragments of Thought`
    await navigator.clipboard.writeText(shareText)
  }, [thought])

  return (
    <AnimatePresence>
      {isOpen && thought && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
          
          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* The shareable card */}
            <div
              ref={cardRef}
              className="relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              {/* Background image */}
              <Image
                src="/images/card.jpg"
                alt=""
                fill
                className="object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/70" />
              
              {/* Content - clean and minimal */}
              <div className="absolute inset-0 flex items-center justify-center p-10 md:p-14">
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground text-center">
                  {thought.content}
                </p>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 border border-border/50 text-sm text-foreground/80 hover:text-foreground hover:border-primary/50 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
              
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 border border-border/50 text-sm text-foreground/80 hover:text-foreground hover:border-primary/50 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
              
              <button
                onClick={handleCopyText}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 border border-border/50 text-sm text-foreground/80 hover:text-foreground hover:border-primary/50 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </button>
            </div>
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
