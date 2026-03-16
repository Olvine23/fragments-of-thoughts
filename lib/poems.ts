// lib/poems.ts
import "server-only"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Poem } from "./type"
 

const poemsDir = path.join(process.cwd(), "content/poetry")

export function getAllPoems(): Poem[] {
  const files = fs.readdirSync(poemsDir)

  return files.map((file) => {
    const slug = file.replace(".md", "")
    const fileContent = fs.readFileSync(path.join(poemsDir, file), "utf8")
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title ?? "",
      image: data.image ?? "",
      date: data.date ?? "",
      dedication: data.dedication ?? undefined,
      note: data.note ?? undefined,
      lines: content.trim().split("\n"),
    }
  })
}

export function getPoemBySlug(slug: string): Poem | undefined {
  return getAllPoems().find((poem) => poem.slug === slug)
}

export function getAllPoemSlugs(): string[] {
  return getAllPoems().map((poem) => poem.slug)
}