import { Container, SectionHeader } from "@/components/ui"
import { certificates, education, roles } from "@/data/profile"

function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((p) => (
        <li key={p} className="grid grid-cols-[14px_1fr] gap-2 text-pretty leading-relaxed text-fg-2">
          <span className="mt-[0.6em] size-1.5 rounded-full bg-fg-3" aria-hidden />
          {p}
        </li>
      ))}
    </ul>
  )
}

export function Experience() {
  return (
    <Container id="experience" className="pt-28 md:pt-36">
      <SectionHeader eyebrow="Experience" title="Where I’ve worked" intro="Two years at Amazon, three roles before it, and a computer science degree finished with a 3.87." />

      <ol data-spot className="reveal mt-12 overflow-hidden rounded-card bg-s1 shadow-card">
        {roles.map((r) => (
          <li key={`${r.org}-${r.start}`} className="grid gap-x-10 gap-y-3 border-b border-line p-6 md:grid-cols-[200px_minmax(0,1fr)] md:p-8">
            <div>
              <p className="font-mono text-[0.8125rem] text-fg-3">
                {r.start} – {r.end}
              </p>
              {r.current && (
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-ov-sm px-2.5 py-1 text-xs text-fg">
                  <span className="live-dot" aria-hidden />
                  Current
                </p>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.01em]">{r.title}</h3>
              <p className="mt-0.5 text-fg-2">
                <span className="text-fg">{r.org}</span> · {r.place}
              </p>
              <Points items={r.points} />
            </div>
          </li>
        ))}
        <li className="grid gap-x-10 gap-y-3 bg-s2/40 p-6 md:grid-cols-[200px_minmax(0,1fr)] md:p-8">
          <p className="font-mono text-[0.8125rem] text-fg-3">
            {education.start} – {education.end}
          </p>
          <div>
            <h3 className="text-lg font-semibold tracking-[-0.01em]">{education.degree}</h3>
            <p className="mt-0.5 text-fg-2">
              <span className="text-fg">{education.school}</span> · {education.gpa} GPA · {education.honors}
            </p>
            <Points items={education.notes} />
            <div className="mt-5 flex flex-wrap gap-2">
              {certificates.map((c) => (
                <p key={c.name} className="rounded-field bg-s2 px-3 py-2 text-sm shadow-lit">
                  {c.name} <span className="text-fg-3">· {c.date}</span>
                </p>
              ))}
            </div>
          </div>
        </li>
      </ol>
    </Container>
  )
}
