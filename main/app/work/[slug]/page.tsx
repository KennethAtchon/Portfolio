import type { ReactNode } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Arrow } from "@/components/arrow"
import { figures } from "@/components/figures"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { cards, featuredProjects, work } from "@/data/profile"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return cards.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const card = cards.find((c) => c.slug === slug)
  return card ? { title: card.title, description: card.blurb } : {}
}

function Heading({ children }: { children: string }) {
  return <h2 className="caps text-[10.5px] text-ink-3 lg:sticky lg:top-8">{children}</h2>
}

function Row({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="grid gap-5 border-t border-rule-soft py-10 lg:grid-cols-12 lg:gap-x-[34px]">
      <div className="lg:col-span-3">
        <Heading>{title}</Heading>
      </div>
      <div className="lg:col-span-8">{children}</div>
    </div>
  )
}

export default async function WorkPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const index = cards.findIndex((c) => c.slug === slug)
  if (index < 0) notFound()
  const card = cards[index]
  const next = cards[(index + 1) % cards.length]
  const amazon = work.find((w) => w.id === slug)
  const project = featuredProjects.find((p) => p.slug === slug)
  const Figure = amazon ? figures[amazon.figure] : null

  const meta = amazon
    ? [
        { label: "Company", value: "Amazon" },
        ...(amazon.period ? [{ label: "When", value: amazon.period }] : []),
        { label: "Stack", value: amazon.stack.join(", ") },
      ]
    : project
      ? [
          { label: "Type", value: project.kind },
          { label: "Status", value: project.status },
          { label: "Stack", value: project.stack.join(", ") },
        ]
      : []

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[1536px] px-5 md:px-[50px]">
        <a href="/#work" className="caps mt-12 inline-flex items-center gap-3 text-[10.5px] text-ink-3 hover:text-blue">
          <Arrow className="rotate-180" />
          All work
        </a>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-x-[34px]">
          <div className="lg:col-span-8">
            <p className="flex items-center gap-5">
              <span className="text-[32px] font-[350] leading-none text-blue">{String(index + 1).padStart(2, "0")}</span>
              <span className="caps text-[10.5px] tracking-[0.22em] text-ink-3">{card.category}</span>
            </p>
            <h1 className="mt-6 text-[clamp(3.2rem,8vw,124px)] font-[420] leading-[0.9] tracking-[-0.042em]">{card.title}</h1>
            <p className="mt-7 max-w-[34ch] text-balance text-[clamp(1.4rem,2.2vw,30px)] leading-[1.25] tracking-[-0.012em] text-ink-2">
              {amazon ? amazon.title : card.blurb}
            </p>
          </div>
          <dl className="self-end border-t border-rule-soft lg:col-span-4">
            {meta.map((m) => (
              <div key={m.label} className="border-b border-rule-soft py-[14px]">
                <dt className="caps text-[10.5px] text-ink-3">{m.label}</dt>
                <dd className="mt-2 text-[18px] leading-[1.35]">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="mt-14">
          {card.image.frame === "device" ? (
            <div className="relative overflow-hidden bg-[#1b1d22] px-[6%] pt-[5%]">
              <img src={card.image.src} alt="" aria-hidden className="absolute inset-0 size-full scale-110 object-cover opacity-50 blur-2xl" />
              <div className="relative rounded-t-[26px] bg-[#0d0e10] p-[10px] pb-0 shadow-[0_40px_80px_-20px_rgb(0_0_0/0.8),inset_0_0_0_1px_rgb(255_255_255/0.08)]">
                <img src={card.image.src} alt={card.image.alt} className="block w-full rounded-t-[18px]" />
              </div>
            </div>
          ) : (
            <img src={card.image.src} alt={card.image.alt} className="aspect-[21/9] w-full object-cover" />
          )}
          <figcaption className="caps mt-4 text-[10px] text-ink-3">
            {card.image.credit ? (
              <>
                Photograph by{" "}
                <a href={card.image.credit.url} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-ink">
                  {card.image.credit.name}
                </a>{" "}
                on Unsplash
              </>
            ) : (
              "Real screenshot, demo mode with a simulated market"
            )}
          </figcaption>
        </figure>

        <div className="mt-16">
          {amazon && (
            <>
              <Row title="Context">
                <p className="text-pretty text-[clamp(1.35rem,1.9vw,26px)] leading-[1.42] tracking-[-0.01em]">{amazon.context}</p>
              </Row>
              <Row title="What I did">
                <ol className="space-y-6">
                  {amazon.did.map((d, i) => (
                    <li key={d} className="grid grid-cols-[44px_1fr] text-pretty text-[19px] leading-[1.55] text-ink-2">
                      <span className="text-blue">{String(i + 1).padStart(2, "0")}</span>
                      {d}
                    </li>
                  ))}
                </ol>
              </Row>
              {Figure && (
                <Row title="How it works">
                  <figure>
                    <div className="overflow-x-auto border border-rule-soft bg-[#f6f3eb] p-5 md:p-8">
                      <Figure />
                    </div>
                    <figcaption className="mt-3 text-[15px] text-ink-3">
                      <span className="caps mr-3 text-[10px]">Fig. 1</span>
                      {amazon.caption}
                    </figcaption>
                  </figure>
                </Row>
              )}
              <Row title="Outcome">
                <p className="text-pretty text-[clamp(1.35rem,1.9vw,26px)] leading-[1.42] tracking-[-0.01em]">{amazon.outcome}</p>
                <div className="mt-10 flex flex-wrap gap-x-14 gap-y-8">
                  {amazon.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-[56px] font-[380] leading-none tracking-[-0.03em] text-blue">{m.value}</p>
                      <p className="caps mt-3 text-[10px] text-ink-3">{m.label}</p>
                    </div>
                  ))}
                </div>
              </Row>
            </>
          )}
          {project && (
            <>
              <Row title="Overview">
                <p className="text-pretty text-[clamp(1.35rem,1.9vw,26px)] leading-[1.42] tracking-[-0.01em]">{project.summary}</p>
              </Row>
              {project.flow && (
                <Row title="How it works">
                  <ol className="space-y-5">
                    {project.flow.map((s, i) => (
                      <li key={s} className="grid grid-cols-[44px_1fr] border-b border-rule-soft pb-5 text-[21px] last:border-0">
                        <span className="text-blue">{String(i + 1).padStart(2, "0")}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </Row>
              )}
              <Row title="Stack">
                <p className="text-[19px] leading-[1.6] text-ink-2">{project.stack.join(" · ")}</p>
              </Row>
            </>
          )}
        </div>

        <a href={`/work/${next.slug}`} className="group mt-10 grid gap-4 border-t border-rule pt-10 lg:grid-cols-12 lg:gap-x-[34px]">
          <span className="caps text-[10.5px] text-ink-3 lg:col-span-3">Next project</span>
          <span className="flex items-center justify-between gap-6 lg:col-span-9">
            <span className="text-[clamp(2.2rem,5vw,72px)] leading-none tracking-[-0.035em] transition-colors group-hover:text-blue">{next.title}</span>
            <Arrow className="h-5 w-14 text-blue transition-transform group-hover:translate-x-2" />
          </span>
        </a>
      </main>
      <SiteFooter />
    </>
  )
}
