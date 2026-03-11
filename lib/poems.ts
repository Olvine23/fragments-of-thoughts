export interface Poem {
  slug: string
  title: string
  image: string
  date: string
  lines: string[]
  dedication?: string
  note?: string
}

export const poems: Poem[] = [
  {
    slug: "dusk",
    title: "Dusk",
    image: "/images/poetry-dusk.jpg",
    date: "March 2026",
    lines: [
      "The sun dips low, a final bow",
      "to shadows stretching, lengthening now.",
      "I hold my breath as colors blend—",
      "another day approaching end.",
      "",
      "But endings, too, hold gentle grace,",
      "like wrinkles on a well-loved face.",
      "In fading light, I find my peace:",
      "with every sunset comes release.",
      "",
      "The birds return to places unseen,",
      "and the world grows soft, a muted dream.",
      "I stand here in the in-between,",
      "neither darkness nor light's last gleam.",
      "",
      "Tomorrow waits beyond the night,",
      "but for now, I'll hold the fading light."
    ],
    note: "Written while watching the sunset from my grandmother's porch, the same place where I first learned to love the quiet hours."
  },
  {
    slug: "untitled-for-you",
    title: "Untitled (For You)",
    image: "/images/poetry-untitled.jpg",
    date: "February 2026",
    dedication: "For someone who exists in memory",
    lines: [
      "You exist somewhere between",
      "my waking and my dreaming—",
      "a presence felt but never seen,",
      "always arriving, always leaving.",
      "",
      "I have learned to love the space",
      "you occupy within my chest.",
      "Even absence has a face",
      "when you have known someone at their best.",
      "",
      "Some nights I trace the shape of you",
      "in constellations overhead,",
      "connecting stars like memories do,",
      "holding tight to what you said.",
      "",
      "You told me once that love remains",
      "long after lovers learn to part.",
      "I believe you now. The ache sustains",
      "a permanent address inside my heart.",
      "",
      "So I keep you in the in-between,",
      "in the pause before I speak your name.",
      "The realest thing I've ever seen",
      "is the ghost of what we could became."
    ],
    note: "Some poems write themselves in the middle of the night when you're thinking about someone who changed the way you see the world."
  },
  {
    slug: "3-am",
    title: "3 AM",
    image: "/images/poetry-3am.jpg",
    date: "January 2026",
    lines: [
      "The house breathes differently at night,",
      "settling into itself like an old friend.",
      "I trace the ceiling patterns",
      "and wonder if the moon feels lonely too—",
      "always watching, never touching,",
      "loving from an impossible distance.",
      "",
      "The refrigerator hums its lullaby,",
      "a mechanical heartbeat in the dark.",
      "Somewhere a clock ticks forward",
      "while my thoughts loop back,",
      "replaying conversations",
      "I should have had differently.",
      "",
      "At 3 AM, the world is honest.",
      "There's no one left to perform for,",
      "no mask that fits this hour.",
      "Just me and the shadows",
      "making peace with our shapes.",
      "",
      "Dawn will come, as it always does,",
      "and I'll become the daytime version of myself—",
      "capable, composed, convincing.",
      "But here, in the blue darkness,",
      "I'm allowed to simply be:",
      "unfinished, uncertain, and alive."
    ],
    note: "The hours between midnight and dawn have always been my most honest. This poem is a love letter to insomnia and the truths it reveals."
  }
]

export function getPoemBySlug(slug: string): Poem | undefined {
  return poems.find(poem => poem.slug === slug)
}

export function getAllPoemSlugs(): string[] {
  return poems.map(poem => poem.slug)
}
