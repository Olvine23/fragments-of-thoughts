import { Metadata } from "next"
import { WritingEditor } from "@/components/writing-editor"

export const metadata: Metadata = {
  title: "Write | Fragments of Thought",
  description: "A quiet space for your thoughts to take shape.",
}

export default function WritePage() {
  return <WritingEditor />
}
