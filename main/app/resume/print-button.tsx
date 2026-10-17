"use client"

import { Download } from "lucide-react"

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="cta inline-flex text-[11.5px] tracking-[0.2em]">
      Save as PDF
      <Download className="size-3.5" aria-hidden />
    </button>
  )
}
