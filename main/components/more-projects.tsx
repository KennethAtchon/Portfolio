import { Arrow } from "@/components/arrow"
import { SectionTitle } from "@/components/section-title"
import { archive, otherProjects } from "@/data/profile"

export function MoreProjects() {
  return (
    <section id="projects" className="mx-auto max-w-[1536px] scroll-mt-6 px-5 pt-28 md:px-[50px] md:pt-[150px]">
      <SectionTitle aside="Built on my own time">More projects</SectionTitle>
      <ul className="mt-6">
        {otherProjects.map((p) => (
          <li key={p.slug} className="grid gap-x-[34px] gap-y-3 border-b border-rule-soft py-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="text-[27px] leading-[1.15] tracking-[-0.012em]">{p.name}</h3>
              <p className="caps mt-3 text-[10px] text-ink-3">{p.kind}</p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-pretty text-[17px] leading-[1.5] text-ink-2">{p.summary}</p>
              <p className="mt-2 text-[15px] text-ink-3">{p.stack.join(" · ")}</p>
            </div>
            <div className="flex flex-wrap items-start gap-x-8 gap-y-4 lg:col-span-3 lg:justify-end">
              {p.links?.length ? (
                p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="cta inline-flex text-[11px] tracking-[0.18em]">
                    {l.label}
                    <Arrow />
                  </a>
                ))
              ) : (
                <span className="caps text-[10px] text-ink-3">{p.status}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-[17px] text-ink-3">
        Earlier work:{" "}
        {archive.map((a, i) => (
          <span key={a.href}>
            <a href={a.href} target="_blank" rel="noreferrer" className="text-ink-2 underline decoration-rule underline-offset-4 hover:text-blue">
              {a.name}
            </a>
            {i < archive.length - 1 ? ", " : "."}
          </span>
        ))}
      </p>
    </section>
  )
}
