"use client"

import { useState } from "react"
import { ArrowRight, Check, Copy, Github, Linkedin } from "lucide-react"
import { btn, Container } from "@/components/ui"
import { person } from "@/data/profile"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard blocked or unavailable: open the mail client instead.
      window.location.href = `mailto:${person.email}`
    }
  }

  return (
    <Container id="contact" className="pt-28 md:pt-36">
      <div data-spot className="reveal overflow-hidden rounded-card bg-s1 p-2 shadow-card">
        <div className="rounded-float bg-s2/60 p-6 shadow-lit md:p-12">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 max-w-[18ch] text-balance font-display text-[clamp(2.3rem,5.4vw,4.4rem)] font-extrabold leading-[1] tracking-[-0.02em]">
            Hiring for a software engineer?
          </h2>
          <p className="mt-5 max-w-[56ch] text-pretty text-lg leading-relaxed text-fg-2">
            I’m looking for my next role on a team that ships web platform, auth, or product engineering work. Email is the fastest way to reach me, and the résumé is always current with this page.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${person.email}?subject=${encodeURIComponent("Software engineering role")}`}
              className="break-all font-display text-[clamp(1.35rem,3vw,2.25rem)] font-bold tracking-[-0.01em] underline decoration-ov-lg decoration-2 underline-offset-[6px] transition-colors hover:decoration-ember"
            >
              {person.email}
            </a>
            <button type="button" onClick={copy} className={btn.small} aria-live="polite">
              {copied ? <Check className="size-3.5 text-live" /> : <Copy className="size-3.5 text-fg-3" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            <a href={`mailto:${person.email}?subject=${encodeURIComponent("Software engineering role")}`} className={btn.primary}>
              Email Kenneth
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a href="/resume" className={btn.secondary}>
              View résumé
            </a>
            <a href={person.links.linkedin} target="_blank" rel="noreferrer" className={btn.secondary}>
              <Linkedin className="size-4 text-fg-2" aria-hidden />
              LinkedIn
            </a>
            <a href={person.links.github} target="_blank" rel="noreferrer" className={btn.secondary}>
              <Github className="size-4 text-fg-2" aria-hidden />
              GitHub
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 px-6 py-4 text-sm text-fg-3 md:px-12">
          <span>{person.location}</span>
          <span>{person.workAuth}</span>
          <a href={`tel:${person.phone.replace(/[^+\d]/g, "")}`} className="transition-colors hover:text-fg">
            {person.phone}
          </a>
          <a href={person.links.leetcode} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">
            LeetCode
          </a>
        </div>
      </div>
    </Container>
  )
}
