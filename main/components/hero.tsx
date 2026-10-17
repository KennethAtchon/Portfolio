import type { CSSProperties } from "react"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { LocalTime } from "@/components/local-time"
import { btn, Chip, Container, Kbd } from "@/components/ui"
import { facts, headline, intro, person, proof } from "@/data/profile"

const step = (i: number) => ({ "--i": i }) as CSSProperties

const keywords = ["TypeScript", "React", "React Native", "AWS", "CloudFront", "Lambda@Edge", "Module Federation", "Webpack", "GraphQL", "Node.js"]

export function Hero() {
  return (
    <Container id="top" className="pt-14 md:pt-24">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
        <div>
          <p className="arrive inline-flex items-center gap-2.5 rounded-full bg-s1 py-1.5 pl-3 pr-3.5 text-sm text-fg-2 shadow-card" style={step(0)}>
            <span className="live-dot" aria-hidden />
            <span className="text-fg">{person.status}</span>
            <span className="h-3.5 w-px bg-ov-md" aria-hidden />
            {person.location}
          </p>

          <h1 className="arrive mt-7 font-display text-[clamp(3.1rem,7.6vw,6.25rem)] font-extrabold leading-[0.92] tracking-[-0.025em]" style={step(1)}>
            {person.name}
          </h1>

          <p className="arrive mt-6 max-w-[22ch] text-balance font-display text-[clamp(1.6rem,2.9vw,2.35rem)] font-bold leading-[1.12] tracking-[-0.01em] text-fg-2" style={step(2)}>
            {headline.split("only notice")[0]}
            <span className="text-fg">only notice{headline.split("only notice")[1]}</span>
          </p>

          <p className="arrive mt-6 max-w-[58ch] text-pretty text-[1.0625rem] leading-relaxed text-fg-2" style={step(3)}>
            {intro}
          </p>

          <div className="arrive mt-8 flex flex-wrap items-center gap-2.5" style={step(4)}>
            <a href={`mailto:${person.email}?subject=${encodeURIComponent("Software engineering role")}`} className={btn.primary}>
              Email Kenneth
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a href="/resume" className={btn.secondary}>
              View résumé
            </a>
            <a href={person.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`${btn.icon} max-sm:hidden`}>
              <Linkedin className="size-[18px]" />
            </a>
            <a href={person.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={`${btn.icon} max-sm:hidden`}>
              <Github className="size-[18px]" />
            </a>
          </div>

          <ul className="arrive mt-8 flex flex-wrap gap-1.5" style={step(5)} aria-label="Core technologies">
            {keywords.map((k) => (
              <li key={k}>
                <Chip>{k}</Chip>
              </li>
            ))}
          </ul>
        </div>

        <aside data-spot className="arrive rounded-card bg-s1 p-2 shadow-card lg:mt-16" style={step(3)} aria-label="Quick facts">
          <div className="flex items-center gap-3.5 rounded-float bg-s2 p-4 shadow-lit">
            <span className="lit grid size-12 shrink-0 place-items-center rounded-field font-display text-lg font-extrabold">{person.initials}</span>
            <div className="min-w-0">
              <p className="truncate font-semibold">{person.name}</p>
              <p className="truncate text-sm text-fg-2">
                {person.title} · {person.company}
              </p>
            </div>
          </div>
          <dl className="px-4 pb-2 pt-3">
            {facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-0">
                <dt className="shrink-0 text-sm text-fg-3">{f.label}</dt>
                <dd className="text-right text-[0.9375rem] text-fg">
                  {f.value}
                  {f.note && <span className="mt-0.5 block text-xs text-fg-3">{f.note}</span>}
                  {f.live === "time" && (
                    <span className="mt-0.5 block text-xs text-fg-3">
                      <LocalTime /> local
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <p className="flex items-center justify-between rounded-float bg-ov-xs px-4 py-3 text-sm text-fg-3">
            Jump anywhere
            <span className="flex items-center gap-1">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </span>
          </p>
        </aside>
      </div>

      <div data-spot className="reveal mt-20 grid grid-cols-2 overflow-hidden rounded-card bg-s1 shadow-card md:mt-28 lg:grid-cols-5">
        {proof.map((p, i) => (
          <div
            key={p.label}
            className={`p-5 md:p-6 ${i > 0 ? "lg:border-l lg:border-line" : ""} ${i % 2 === 1 ? "border-l border-line lg:border-l" : ""} ${
              i >= 2 ? "border-t border-line lg:border-t-0" : ""
            } ${i === proof.length - 1 ? "col-span-2 lg:col-span-1" : ""}`}
          >
            <p className="font-display text-[2.4rem] font-extrabold leading-none tracking-[-0.02em]">{p.value}</p>
            <p className="mt-2.5 text-sm leading-snug text-fg-2">{p.label}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}
