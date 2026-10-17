import { Arrow } from "@/components/arrow"
import { cards, type Card } from "@/data/profile"

const pad = (n: number) => String(n).padStart(2, "0")

function DeviceShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1b1d22]">
      <img src={src} alt="" aria-hidden className="absolute inset-0 size-full scale-110 object-cover opacity-60 blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/30 to-black/70" />
      <div
        className="absolute left-[9%] top-[8%] w-[205%] origin-top-left rounded-[44px] bg-[#0d0e10] p-[16px] shadow-[0_50px_90px_-20px_rgb(0_0_0/0.8),inset_0_0_0_1.5px_rgb(255_255_255/0.1)] transition-transform duration-700 ease-out group-hover:-translate-y-1.5"
        style={{ transform: "perspective(1800px) rotateX(10deg) rotateY(-18deg) rotateZ(-7deg)" }}
      >
        <img src={src} alt={alt} className="block w-full rounded-[30px]" />
      </div>
    </div>
  )
}

function WorkCard({ card, index, wide }: { card: Card; index: number; wide: boolean }) {
  const href = `/work/${card.slug}`
  return (
    <article className={`group min-w-0 ${wide ? "lg:col-span-10" : "lg:col-span-9"}`}>
      <a href={href} className={`relative block overflow-hidden bg-[#e9e5dc] ${wide ? "aspect-[738/359]" : "aspect-[738/359] lg:aspect-[665/359]"}`} aria-label={`${card.title}: view project`}>
        {card.image.frame === "device" ? (
          <DeviceShot src={card.image.src} alt={card.image.alt} />
        ) : (
          <img
            src={card.image.src}
            alt={card.image.alt}
            loading={index < 2 ? "eager" : "lazy"}
            className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        )}
      </a>
      <div className="mt-[21px] flex items-start">
        <p className="w-[46px] shrink-0 text-[28px] sm:w-[60px] sm:text-[32px] font-[350] leading-[26px] tracking-[-0.02em] text-blue">{pad(index + 1)}</p>
        <span className="mt-[-2px] h-[68px] w-px shrink-0 bg-rule-soft" aria-hidden />
        <div className="min-w-0 flex-1 pl-5 sm:pl-[34px]">
          <p className="caps -mt-[4px] text-[10px] tracking-[0.2em] text-ink-3">{card.category}</p>
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <h3 className="mt-[9px] text-[27.5px] leading-[32px] tracking-[-0.012em]">
                <a href={href} className="transition-colors hover:text-blue">
                  {card.title}
                </a>
              </h3>
              <p className="mt-[8px] max-w-[46ch] text-[16.8px] leading-[21px] text-ink-2">{card.blurb}</p>
            </div>
            <a href={href} className="cta mt-[5px] hidden shrink-0 text-[11px] tracking-[0.17em] sm:inline-flex">
              View project
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-[1536px] scroll-mt-6 px-5 md:px-[50px]">
      <div className="mt-14 border-t border-rule pt-[28px] lg:mt-[44px]">
        <div className="flex items-baseline justify-between">
          <h2 className="serif-caps text-[17.6px] leading-none tracking-[0.27em]">Selected work</h2>
          <p className="relative -top-[4px] flex items-center gap-[18px] text-[14px] leading-none text-ink-3" aria-label={`${cards.length} projects`}>
            <span>01</span>
            <span className="h-px w-[20px] bg-rule-soft" aria-hidden />
            <span>{pad(cards.length)}</span>
          </p>
        </div>
        <div className="mt-[21px] grid gap-x-[34px] gap-y-16 lg:grid-cols-19 lg:gap-y-[88px]">
          {cards.map((card, i) => (
            <WorkCard key={card.slug} card={card} index={i} wide={Math.floor(i / 2) % 2 === 0 ? i % 2 === 0 : i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
