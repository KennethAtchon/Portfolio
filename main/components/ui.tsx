import type { ReactNode } from "react"

export const btn = {
  primary:
    "lit-ember inline-flex h-11 items-center justify-center gap-2 rounded-field px-4 text-[0.9375rem] font-semibold transition-[filter,transform] duration-150 hover:brightness-110 active:scale-[0.97]",
  secondary:
    "lit inline-flex h-11 items-center justify-center gap-2 rounded-field px-4 text-[0.9375rem] font-medium text-fg transition-[background-color,transform] duration-150 hover:bg-ov-sm active:scale-[0.97]",
  icon: "lit grid size-11 place-items-center rounded-field text-fg-2 transition-[background-color,color,transform] duration-150 hover:bg-ov-sm hover:text-fg active:scale-[0.97]",
  small:
    "lit inline-flex h-8 items-center gap-1.5 rounded-field px-3 text-[0.8125rem] font-medium text-fg transition-[background-color,transform] duration-150 hover:bg-ov-sm active:scale-[0.97]",
}

export function Container({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-[1180px] px-5 md:px-8 ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="reveal max-w-[44rem]">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-0.015em]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-pretty text-lg leading-relaxed text-fg-2">{intro}</p>}
    </header>
  )
}

export function Chip({ children, strong }: { children: ReactNode; strong?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.8125rem] leading-none ${
        strong ? "bg-ov-md text-fg" : "bg-ov-sm text-fg-2"
      }`}
    >
      {children}
    </span>
  )
}

export function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded-[5px] bg-ov-md px-1 font-mono text-[0.6875rem] text-fg-2 shadow-[inset_0_-1px_0_rgb(0_0_0/0.4)]">
      {children}
    </kbd>
  )
}
