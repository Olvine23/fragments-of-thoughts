"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

type WritingMode = "article" | "poetry" | "thought"

interface WritingStats {
  words: number
  characters: number
  readingTime: string
}

export function WritingEditor() {
  const [mode, setMode] = useState<WritingMode>("article")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [stats, setStats] = useState<WritingStats>({ words: 0, characters: 0, readingTime: "0 min" })
  const [ambientMode, setAmbientMode] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Calculate stats
  useEffect(() => {
    const words = content.trim() ? content.trim().split(/\s+/).length : 0
    const characters = content.length
    const minutes = Math.ceil(words / 200)
    setStats({
      words,
      characters,
      readingTime: `${minutes} min read`
    })
  }, [content])

  // Auto-save to localStorage
  useEffect(() => {
    const saveTimeout = setTimeout(() => {
      if (title || content) {
        localStorage.setItem("draft", JSON.stringify({ mode, title, content, savedAt: new Date().toISOString() }))
        setLastSaved(new Date())
      }
    }, 2000)
    return () => clearTimeout(saveTimeout)
  }, [title, content, mode])

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("draft")
    if (saved) {
      const { mode: savedMode, title: savedTitle, content: savedContent, savedAt } = JSON.parse(saved)
      setMode(savedMode || "article")
      setTitle(savedTitle || "")
      setContent(savedContent || "")
      if (savedAt) setLastSaved(new Date(savedAt))
    }
  }, [])

  // Hide controls after inactivity
  const handleMouseMove = useCallback(() => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    if (isFocused && !ambientMode) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
  }, [isFocused, ambientMode])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  // Auto-resize textarea
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = "auto"
      contentRef.current.style.height = contentRef.current.scrollHeight + "px"
    }
  }, [content])

  const clearDraft = () => {
    setTitle("")
    setContent("")
    localStorage.removeItem("draft")
    setLastSaved(null)
  }

  const getPlaceholder = () => {
    switch (mode) {
      case "poetry":
        return "Let the words flow like water...\n\nPress Enter twice for a new stanza."
      case "thought":
        return "What's on your mind?\n\nCapture a fleeting thought, an observation, a moment of clarity..."
      default:
        return "Begin your story...\n\nWrite freely. The words will find their rhythm."
    }
  }

  const getTitlePlaceholder = () => {
    switch (mode) {
      case "poetry":
        return "Untitled Poem"
      case "thought":
        return "A fleeting thought..."
      default:
        return "Your story begins here..."
    }
  }

  return (
    <main 
      className={`min-h-screen transition-colors duration-1000 ${
        ambientMode 
          ? "bg-[#0a0a12]" 
          : "bg-background"
      }`}
    >
      {/* Ambient background effects */}
      <AnimatePresence>
        {ambientMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 pointer-events-none overflow-hidden"
          >
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top controls */}
      <AnimatePresence>
        {showControls && (
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/30"
          >
            <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Link 
                  href="/" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </Link>
                
                {/* Mode selector */}
                <div className="flex items-center gap-1 p-1 bg-card/50 rounded-lg border border-border/30">
                  {(["article", "poetry", "thought"] as WritingMode[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`px-3 py-1.5 text-xs rounded-md transition-all duration-300 ${
                        mode === m 
                          ? "bg-primary text-primary-foreground" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {m.charAt(0).toUpperCase() + m.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Ambient mode toggle */}
                <button
                  onClick={() => setAmbientMode(!ambientMode)}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    ambientMode 
                      ? "bg-primary/20 text-primary" 
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                  title="Toggle ambient mode"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </button>

                {/* Clear button */}
                <button
                  onClick={clearDraft}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-card/50 rounded-lg transition-all duration-300"
                  title="Clear draft"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Main editor area */}
      <div className="min-h-screen pt-24 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={getTitlePlaceholder()}
              className={`w-full bg-transparent border-none outline-none font-serif text-4xl md:text-5xl lg:text-6xl font-light placeholder:text-muted-foreground/30 mb-8 leading-tight ${
                mode === "poetry" ? "text-center" : ""
              }`}
            />
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12 ${
              mode === "poetry" ? "max-w-32 mx-auto" : "max-w-48"
            }`}
          />

          {/* Content area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <textarea
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={getPlaceholder()}
              className={`w-full bg-transparent border-none outline-none resize-none min-h-[50vh] placeholder:text-muted-foreground/20 leading-relaxed ${
                mode === "poetry" 
                  ? "font-serif text-xl md:text-2xl text-center leading-loose" 
                  : mode === "thought"
                  ? "font-serif text-xl md:text-2xl italic leading-relaxed"
                  : "text-lg md:text-xl leading-loose"
              }`}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <AnimatePresence>
        {showControls && (
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-background/60 backdrop-blur-xl border-t border-border/30"
          >
            <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-6">
                <span>{stats.words} words</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{stats.characters} characters</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{stats.readingTime}</span>
              </div>
              
              <div className="flex items-center gap-4">
                {lastSaved && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                    Saved {formatTimeAgo(lastSaved)}
                  </span>
                )}
              </div>
            </div>
          </motion.footer>
        )}
      </AnimatePresence>

      {/* Writing prompts (shown when empty) */}
      <AnimatePresence>
        {!content && !title && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed bottom-24 left-0 right-0 px-6 pointer-events-none"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground/40 text-sm text-center italic">
                {mode === "poetry" 
                  ? "\"Poetry is when an emotion has found its thought and the thought has found words.\" — Robert Frost"
                  : mode === "thought"
                  ? "\"The soul becomes dyed with the color of its thoughts.\" — Marcus Aurelius"
                  : "\"There is nothing to writing. All you do is sit down at a typewriter and bleed.\" — Ernest Hemingway"
                }
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
  if (seconds < 60) return "just now"
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  return date.toLocaleDateString()
}
