"use client"

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react"
import { Briefcase, Copy, FileText, FolderGit2, Github, History, Linkedin, Mail, Search, Send, Wrench, type LucideIcon } from "lucide-react"
import { Kbd } from "@/components/ui"
import { person } from "@/data/profile"

type Command = { id: string; group: "Jump to" | "Actions"; label: string; hint?: string; icon: LucideIcon; run: () => void }

export function CommandPalette({ open, onClose, onToast }: { open: boolean; onClose: () => void; onToast: (message: string) => void }) {
  const [query, setQuery] = useState("")
  const [index, setIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = useMemo<Command[]>(() => {
    const jump = (hash: string) => () => {
      onClose()
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" })
      history.replaceState(null, "", hash)
    }
    const visit = (href: string) => () => {
      onClose()
      window.open(href, "_blank", "noopener,noreferrer")
    }
    return [
      { id: "work", group: "Jump to", label: "Work at Amazon", hint: "6 projects", icon: Briefcase, run: jump("#work") },
      { id: "experience", group: "Jump to", label: "Experience", icon: History, run: jump("#experience") },
      { id: "toolbox", group: "Jump to", label: "Toolbox", hint: "skills", icon: Wrench, run: jump("#toolbox") },
      { id: "projects", group: "Jump to", label: "Side projects", icon: FolderGit2, run: jump("#projects") },
      { id: "contact", group: "Jump to", label: "Contact", icon: Mail, run: jump("#contact") },
      {
        id: "email",
        group: "Actions",
        label: "Email Kenneth",
        hint: person.email,
        icon: Send,
        run: () => {
          onClose()
          window.location.href = `mailto:${person.email}`
        },
      },
      {
        id: "copy",
        group: "Actions",
        label: "Copy email address",
        icon: Copy,
        run: () => {
          onClose()
          navigator.clipboard.writeText(person.email).then(
            () => onToast("Email address copied"),
            () => onToast(person.email),
          )
        },
      },
      {
        id: "resume",
        group: "Actions",
        label: "Open résumé",
        icon: FileText,
        run: () => {
          onClose()
          window.location.href = "/resume"
        },
      },
      { id: "linkedin", group: "Actions", label: "Open LinkedIn", icon: Linkedin, run: visit(person.links.linkedin) },
      { id: "github", group: "Actions", label: "Open GitHub", icon: Github, run: visit(person.links.github) },
    ]
  }, [onClose, onToast])

  const results = commands.filter((c) => `${c.label} ${c.hint ?? ""} ${c.group}`.toLowerCase().includes(query.trim().toLowerCase()))

  useEffect(() => {
    if (!open) return
    setQuery("")
    setIndex(0)
    const frame = requestAnimationFrame(() => inputRef.current?.focus())
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = overflow
    }
  }, [open])

  useEffect(() => setIndex(0), [query])

  if (!open) return null

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setIndex((i) => (results.length ? (i + 1) % results.length : 0))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setIndex((i) => (results.length ? (i - 1 + results.length) % results.length : 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      results[index]?.run()
    } else if (e.key === "Escape") {
      e.preventDefault()
      onClose()
    }
  }

  let row = -1
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Command menu" onKeyDown={onKeyDown}>
      <button type="button" aria-label="Close command menu" onClick={onClose} className="scrim-in absolute inset-0 bg-black/55 backdrop-blur-[3px]" />
      <div className="palette-in relative mx-auto mt-[12vh] w-[min(560px,calc(100%-1.5rem))] overflow-hidden rounded-float bg-s3 shadow-float">
        <div className="flex h-14 items-center gap-3 border-b border-line px-4">
          <Search className="size-4 text-fg-3" aria-hidden />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to a section or run an action…"
            aria-label="Search commands"
            aria-activedescendant={results[index] ? `cmd-${results[index].id}` : undefined}
            className="h-full flex-1 bg-transparent text-[0.9375rem] text-fg outline-none placeholder:text-fg-3"
          />
          <Kbd>esc</Kbd>
        </div>
        <div role="listbox" aria-label="Commands" className="max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 && <p className="px-3 py-6 text-center text-sm text-fg-3">Nothing matches “{query}”.</p>}
          {(["Jump to", "Actions"] as const).map((group) => {
            const items = results.filter((c) => c.group === group)
            if (!items.length) return null
            return (
              <div key={group} className="pb-1">
                <p className="eyebrow px-3 pb-1.5 pt-2">{group}</p>
                {items.map((c) => {
                  row += 1
                  const i = row
                  const active = i === index
                  const Icon = c.icon
                  return (
                    <button
                      key={c.id}
                      id={`cmd-${c.id}`}
                      role="option"
                      aria-selected={active}
                      type="button"
                      onMouseMove={() => setIndex(i)}
                      onClick={c.run}
                      className={`flex h-11 w-full items-center gap-3 rounded-field px-3 text-left text-[0.9375rem] transition-colors ${
                        active ? "lit text-fg" : "text-fg-2"
                      }`}
                    >
                      <Icon className="size-4 shrink-0 text-fg-3" aria-hidden />
                      <span className="flex-1 truncate">{c.label}</span>
                      {c.hint && <span className="truncate font-mono text-xs text-fg-3">{c.hint}</span>}
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-between border-t border-line px-4 py-2.5 text-xs text-fg-3">
          <span className="flex items-center gap-1.5">
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd> to move
            <span className="ml-2 flex items-center gap-1.5">
              <Kbd>↵</Kbd> to run
            </span>
          </span>
          <span>Kenneth Atchon</span>
        </div>
      </div>
    </div>
  )
}
