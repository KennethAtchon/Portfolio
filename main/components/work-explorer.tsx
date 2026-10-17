"use client"

import { useRef, useState, type KeyboardEvent } from "react"
import { ChevronRight } from "lucide-react"
import { figures } from "@/components/figures"
import { Chip, Container, SectionHeader } from "@/components/ui"
import { work, type Work } from "@/data/profile"

function Detail({ item, index }: { item: Work; index: number }) {
  const Figure = figures[item.figure]
  return (
    <article data-spot className="panel-in rounded-card bg-s1 p-2 shadow-card">
      <div className="p-4 md:p-6">
        <p className="eyebrow">
          {String(index + 1).padStart(2, "0")} · Amazon{item.period ? ` · ${item.period}` : ""}
        </p>
        <h3 className="mt-2.5 hidden text-balance font-display text-[clamp(1.6rem,2.6vw,2.15rem)] font-extrabold leading-[1.08] tracking-[-0.01em] lg:block">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[60ch] text-pretty leading-relaxed text-fg-2">{item.context}</p>
      </div>

      <figure className="rounded-float bg-s0 p-4 shadow-sunk md:p-6">
        <div className="-mx-1 overflow-x-auto px-1 pb-1">
          <Figure />
        </div>
        <figcaption className="mt-3 text-xs leading-relaxed text-fg-3">{item.caption}</figcaption>
      </figure>

      <div className="grid gap-6 p-4 md:p-6 xl:grid-cols-[minmax(0,1fr)_260px] xl:gap-8">
        <div>
          <h4 className="eyebrow">What I did</h4>
          <ul className="mt-3 space-y-3">
            {item.did.map((d) => (
              <li key={d} className="grid grid-cols-[14px_1fr] gap-2 text-pretty leading-relaxed text-fg-2">
                <span className="mt-[0.6em] size-1.5 rounded-full bg-fg-3" aria-hidden />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="self-start rounded-float bg-s2 p-4 shadow-lit">
          <h4 className="eyebrow">Outcome</h4>
          <p className="mt-2 text-pretty font-medium leading-relaxed text-fg">{item.outcome}</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-4">
            {item.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display text-2xl font-extrabold leading-none tracking-[-0.01em]">{m.value}</p>
                <p className="mt-1.5 text-xs text-fg-3">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ul className="flex flex-wrap gap-1.5 px-4 pb-4 md:px-6 md:pb-6" aria-label="Technologies">
        {item.stack.map((s) => (
          <li key={s}>
            <Chip>{s}</Chip>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function WorkExplorer() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const select = (i: number, focus = false) => {
    setActive(i)
    if (focus) tabs.current[i]?.focus()
    // If the newly shown panel (desktop) or its button (mobile) starts above the nav, bring it into view.
    requestAnimationFrame(() => {
      const desktop = window.matchMedia("(min-width: 1024px)").matches
      const el = desktop ? document.getElementById(`work-panel-${work[i].id}`) : tabs.current[i]
      if (el && el.getBoundingClientRect().top < 80) el.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault()
      select((i + 1) % work.length, true)
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault()
      select((i - 1 + work.length) % work.length, true)
    }
  }

  return (
    <Container id="work" className="pt-28 md:pt-36">
      <SectionHeader
        eyebrow="Selected work · Amazon"
        title="What I’ve shipped at Amazon"
        intro="Six projects across web platform, authentication and mobile. Each one covers the situation, what I did, and what changed, with a diagram of how it works."
      />

      {/* Mobile: one column where each panel sits under its button (display: contents + order).
          Desktop: the button list is a sticky column and the active panel fills the right. */}
      <div className="mt-12 flex flex-col lg:grid lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start lg:gap-x-6">
        <div className="contents lg:sticky lg:top-24 lg:col-start-1 lg:row-start-1 lg:block lg:space-y-1.5">
          {work.map((item, i) => {
            const on = i === active
            return (
              <button
                key={item.id}
                ref={(el) => {
                  tabs.current[i] = el
                }}
                type="button"
                id={`work-tab-${item.id}`}
                aria-expanded={on}
                aria-controls={`work-panel-${item.id}`}
                onClick={() => select(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                style={{ order: 2 * i }}
                className={`group mb-1.5 flex w-full items-start gap-3 rounded-float px-4 py-3.5 text-left transition-[background-color,box-shadow] duration-150 lg:mb-0 ${
                  on ? "lit" : "bg-s1/60 hover:bg-ov-xs lg:bg-transparent"
                }`}
              >
                <span className={`mt-0.5 font-mono text-xs ${on ? "text-ember-lift" : "text-fg-3"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-[0.9375rem] font-medium leading-snug ${on ? "text-fg" : "text-fg-2 group-hover:text-fg"}`}>{item.title}</span>
                  <span className={`mt-1 text-[0.8125rem] leading-snug text-fg-3 ${on ? "block" : "hidden"}`}>{item.short}</span>
                </span>
                <ChevronRight
                  className={`mt-0.5 size-4 shrink-0 text-fg-3 transition-transform duration-150 ${on ? "rotate-90 lg:rotate-0 lg:text-fg-2" : ""}`}
                  aria-hidden
                />
              </button>
            )
          })}
        </div>
        {work.map((item, i) => (
          <div
            key={item.id}
            id={`work-panel-${item.id}`}
            role="region"
            aria-labelledby={`work-tab-${item.id}`}
            style={{ order: 2 * i + 1 }}
            className={`${i === active ? "block" : "hidden"} mb-4 lg:col-start-2 lg:row-start-1 lg:mb-0`}
          >
            <Detail item={item} index={i} />
          </div>
        ))}
      </div>
    </Container>
  )
}
