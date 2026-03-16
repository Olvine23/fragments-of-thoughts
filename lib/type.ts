// lib/types.ts
export interface Poem {
  slug: string
  title: string
  image: string
  date: string
  lines: string[]
  dedication?: string
  note?: string
}