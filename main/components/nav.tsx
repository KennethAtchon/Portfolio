"use client"

import { useCallback, useEffect, useState } from "react"
import { Check, Menu, Search } from "lucide-react"
import { CommandPalette } from "@/components/command-palette"
import { btn, Kbd } from "@/components/ui"
import { person } from "@/data/profile"

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#toolbox", label: "Toolbox" },
  { href: "#projects", label: "Projects" },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [mod, setMod] = useState("⌘")

  useEffect(() => {
    if (!/Mac|iPhone|iPad/.test(navigator.userAgent)) setMod("Ctrl")
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(null), 1800)
    return () => clearTimeout(id)
  }, [toast])

  const close = useCallback(() => setOpen(false), [])
  const showToast = useCallback((message: string) => setToast(message), [])

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3 md:px-5 print:hidden">
        <div className="mx-auto flex h-14 max-w-[1180px] items-center gap-2 rounded-float bg-s1/80 px-2.5 shadow-float backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2.5 rounded-field px-1 py-1" aria-label={`${person.name}, back to top`}>
            <span className="lit grid size-8 place-items-center rounded-[8px] font-display text-[0.8125rem] font-extrabold tracking-tight">
              {person.initials}
            </span>
            <span className="hidden text-[0.9375rem] font-semibold tracking-[-0.01em] sm:inline">{person.name}</span>
          </a>
          <nav aria-label="Sections" className="ml-4 hidden items-center gap-0.5 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex h-9 items-center rounded-field px-3 text-sm text-fg-2 transition-colors hover:bg-ov-sm hover:text-fg"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="hidden h-9 items-center gap-2 rounded-field bg-ov-xs pl-2.5 pr-1.5 text-sm text-fg-3 shadow-sunk transition-colors hover:text-fg-2 md:inline-flex"
            >
              <Search className="size-4" aria-hidden />
              <span className="pr-6">Search</span>
              <Kbd>{mod === "⌘" ? "⌘K" : "Ctrl K"}</Kbd>
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lit grid size-8 place-items-center rounded-field text-fg-2 transition-transform active:scale-[0.97] md:hidden"
            >
              <Menu className="size-4" />
            </button>
            <a href="/resume" className={`${btn.small} hidden sm:inline-flex`}>
              Résumé
            </a>
            <a href="#contact" className="lit-ember inline-flex h-8 items-center rounded-field px-3 text-[0.8125rem] font-semibold transition-[filter,transform] hover:brightness-110 active:scale-[0.97]">
              Contact
            </a>
          </div>
        </div>
      </header>
      <CommandPalette open={open} onClose={close} onToast={showToast} />
      {toast && (
        <div role="status" className="palette-in fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-float bg-s3 px-4 py-2.5 text-sm shadow-float">
          <Check className="size-4 text-live" aria-hidden />
          {toast}
        </div>
      )}
    </>
  )
}
