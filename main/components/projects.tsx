import { ArrowUpRight } from "lucide-react"
import { btn, Chip, Container, SectionHeader } from "@/components/ui"
import { archive, featuredProjects, otherProjects, type Project } from "@/data/profile"

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="relative space-y-2" aria-label="How it works">
      <span className="absolute bottom-5 left-[19px] top-5 w-px bg-ov-md" aria-hidden />
      {steps.map((s, i) => {
        const last = i === steps.length - 1
        return (
          <li key={s} className="relative flex items-center gap-3">
            <span
              className={`grid size-10 shrink-0 place-items-center rounded-field font-mono text-xs ${last ? "lit text-fg" : "bg-s2 text-fg-3 shadow-card"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={`rounded-field px-3 py-2 text-sm ${last ? "lit font-medium text-fg" : "bg-s2 text-fg-2 shadow-card"}`}>{s}</span>
          </li>
        )
      })}
    </ol>
  )
}

function Featured({ project }: { project: Project }) {
  return (
    <article data-spot className="reveal grid gap-2 rounded-card bg-s1 p-2 shadow-card md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
      <div className="p-5 md:p-7">
        <p className="eyebrow">{project.kind}</p>
        <h3 className="mt-2 font-display text-[2.4rem] font-extrabold leading-none tracking-[-0.02em]">{project.name}</h3>
        <p className="mt-4 text-pretty leading-relaxed text-fg-2">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.stack.map((s) => (
            <li key={s}>
              <Chip>{s}</Chip>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-fg-3">{project.status}</p>
      </div>
      {project.flow && (
        <div className="rounded-float bg-s0 p-5 shadow-sunk md:p-7">
          <p className="eyebrow mb-4">How it works</p>
          <Flow steps={project.flow} />
        </div>
      )}
    </article>
  )
}

export function Projects() {
  return (
    <Container id="projects" className="pt-28 md:pt-36">
      <SectionHeader
        eyebrow="Side projects"
        title="What I build on my own time"
        intro="Products I design, build and ship end to end: an AI video editor, a trading-bot desktop app, a published SDK, and the tooling my AI agents run on."
      />

      <div className="mt-12 space-y-4">
        {featuredProjects.map((p) => (
          <Featured key={p.name} project={p} />
        ))}
      </div>

      <ul data-spot className="reveal mt-4 overflow-hidden rounded-card bg-s1 shadow-card">
        {otherProjects.map((p) => (
          <li key={p.name} className="grid gap-x-8 gap-y-3 border-b border-line p-5 last:border-0 md:grid-cols-[240px_minmax(0,1fr)_auto] md:items-start md:p-6">
            <div>
              <h3 className="font-semibold tracking-[-0.01em]">{p.name}</h3>
              <p className="mt-0.5 text-sm text-fg-3">{p.kind}</p>
            </div>
            <div>
              <p className="text-pretty leading-relaxed text-fg-2">{p.summary}</p>
              <p className="mt-2 font-mono text-xs text-fg-3">{p.stack.join(" · ")}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {p.links?.length ? (
                p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={btn.small}>
                    {l.label}
                    <ArrowUpRight className="size-3.5 text-fg-3" aria-hidden />
                  </a>
                ))
              ) : (
                <span className="inline-flex h-8 items-center rounded-field bg-ov-xs px-3 text-[0.8125rem] text-fg-3">{p.status}</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-fg-3">
        <span>Earlier work:</span>
        {archive.map((a) => (
          <a key={a.href} href={a.href} target="_blank" rel="noreferrer" className="text-fg-2 underline decoration-ov-lg underline-offset-4 transition-colors hover:text-fg hover:decoration-fg-2">
            {a.name}
          </a>
        ))}
      </p>
    </Container>
  )
}
