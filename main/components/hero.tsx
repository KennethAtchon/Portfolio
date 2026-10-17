import type { CSSProperties } from "react"
import { Arrow } from "@/components/arrow"
import { hero } from "@/data/profile"

const step = (i: number) => ({ "--i": i }) as CSSProperties

export function Hero() {
  return (
    <section className="mx-auto max-w-[1536px] px-5 md:px-[50px]">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_1px_395px]">
        <div className="pt-12 md:pt-[56px]">
          <h1 className="text-[clamp(3.2rem,7.49vw,115px)] font-[420] leading-[1.13] tracking-[-0.043em]">
            {hero.headline.map((line, i) => (
              <span key={line} className={`rise block lg:whitespace-nowrap ${i === 0 ? "lg:tracking-[-0.022em]" : ""}`} style={step(i)}>
                {line}
              </span>
            ))}
          </h1>

          <div className="rise mt-10 flex flex-wrap items-end gap-y-6 lg:mt-[4px]" style={step(2)}>
            <div className="caps w-[282px] space-y-[12px] text-[10.5px] tracking-[0.18em] text-ink-3">
              <p>{hero.role}</p>
              <p>{hero.based}</p>
            </div>
            <span className="mb-[11px] hidden h-[2px] w-[104px] bg-blue sm:block" aria-hidden />
            <p className="serif-caps text-[10.6px] leading-none tracking-[0.42em] sm:mb-[1px] sm:ml-[59px]">{hero.tagline}</p>
          </div>
        </div>

        <span className="hidden bg-rule lg:mt-[62px] lg:mb-[20px] lg:block" aria-hidden />

        <div className="rise pt-12 lg:pl-[67px] lg:pt-[84px]" style={step(1)}>
          <p className="max-w-[24ch] text-[26px] leading-[37.5px] tracking-[-0.012em] md:text-[27.5px]">{hero.intro}</p>
          <a href="#work" className="cta inline-flex mt-[46px] text-[13.6px] font-normal tracking-[0.2em]">
            {hero.cta}
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}
