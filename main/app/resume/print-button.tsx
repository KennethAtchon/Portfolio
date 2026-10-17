"use client"

import { Download } from "lucide-react"
import { btn } from "@/components/ui"

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className={btn.small}>
      <Download className="size-3.5 text-fg-3" aria-hidden />
      Save as PDF
    </button>
  )
}
