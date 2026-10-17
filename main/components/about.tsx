import { Arrow } from "@/components/arrow"
import { SectionTitle } from "@/components/section-title"
import { certificates, education, person, roles, toolbox } from "@/data/profile"

const facts = [
  { label: "Currently", value: `${person.title}, ${person.company}` },
  { label: "Focus", value: "Web platform, auth, mobile" },
  { label: "Based in", value: person.location },
  { label: "Work authorization", value: "U.S. citizen, no sponsorship needed" },
  { label: "Education", value: `${education.degree}, Purdue · ${education.gpa} GPA` },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1536px] scroll-mt-6 px-5 pt-28 md:px-[50px] md:pt-[150px]">
      <SectionTitle aside="Seattle, WA">About</SectionTitle>
      <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-x-[34px]">
        <div className="lg:col-span-8">
          <p className="text-balance text-[clamp(1.9rem,3.4vw,46px)] leading-[1.14] tracking-[-0.022em]">
            I’m Kenneth, a software engineer at Amazon. I work on the parts of software people only notice when they break:
            sign-in, sessions, edge infrastructure and how fast a page loads.
          </p>
          <p className="mt-8 max-w-[62ch] text-pretty text-[19px] leading-[1.55] text-ink-2">
            Before Amazon I studied computer science at Purdue University Calumet, graduating with a 3.87 GPA and high honors, built Azure
            networks as a DevOps intern, and evaluated LLM-generated code for DataAnnotation. On my own time I build AI-native products,
            from a video editor you direct by talking to it to a desktop app that runs trading bots and explains every decision.
          </p>
        </div>
        <div className="lg:col-span-4">
          <dl className="border-t border-rule-soft">
            {facts.map((f) => (
              <div key={f.label} className="border-b border-rule-soft py-[15px]">
                <dt className="caps text-[10.5px] text-ink-3">{f.label}</dt>
                <dd className="mt-[9px] text-[19px] leading-[1.3]">{f.value}</dd>
              </div>
            ))}
          </dl>
          <a href="/resume" className="cta inline-flex mt-10 text-[12.5px] tracking-[0.24em]">
            View résumé
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1536px] scroll-mt-6 px-5 pt-28 md:px-[50px] md:pt-[150px]">
      <SectionTitle aside="2023 — present">Experience</SectionTitle>
      <ol className="mt-6">
        {roles.map((r, i) => (
          <li key={`${r.org}-${r.start}`} className="grid gap-x-[34px] gap-y-4 border-b border-rule-soft py-10 lg:grid-cols-12">
            <div className="flex items-start gap-5 lg:col-span-3">
              <span className="text-[32px] font-[350] leading-[26px] tracking-[-0.02em] text-blue">{String(i + 1).padStart(2, "0")}</span>
              <p className="caps mt-[7px] text-[10.5px] leading-[1.6] text-ink-3">
                {r.start} — {r.end}
              </p>
            </div>
            <div className="lg:col-span-3">
              <h3 className="text-[27px] leading-[1.15] tracking-[-0.012em]">{r.title}</h3>
              <p className="mt-2 text-[17px] text-ink-2">
                {r.org} · {r.place}
              </p>
            </div>
            <ul className="space-y-3 lg:col-span-6">
              {r.points.map((p) => (
                <li key={p} className="text-pretty text-[17px] leading-[1.5] text-ink-2">
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li className="grid gap-x-[34px] gap-y-4 py-10 lg:grid-cols-12">
          <div className="flex items-start gap-5 lg:col-span-3">
            <span className="text-[32px] font-[350] leading-[26px] tracking-[-0.02em] text-blue">{String(roles.length + 1).padStart(2, "0")}</span>
            <p className="caps mt-[7px] text-[10.5px] leading-[1.6] text-ink-3">
              {education.start} — {education.end}
            </p>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-[27px] leading-[1.15] tracking-[-0.012em]">{education.degree}</h3>
            <p className="mt-2 text-[17px] text-ink-2">
              {education.school} · {education.gpa} GPA, {education.honors.toLowerCase()}
            </p>
          </div>
          <div className="space-y-3 lg:col-span-6">
            {education.notes.map((n) => (
              <p key={n} className="text-pretty text-[17px] leading-[1.5] text-ink-2">
                {n}
              </p>
            ))}
            <p className="text-[17px] leading-[1.5] text-ink-2">{certificates.map((c) => `${c.name} (${c.date})`).join("; ")}.</p>
          </div>
        </li>
      </ol>
    </section>
  )
}

export function Toolbox() {
  return (
    <section id="toolbox" className="mx-auto max-w-[1536px] scroll-mt-6 px-5 pt-28 md:px-[50px] md:pt-[150px]">
      <SectionTitle aside="Where each was used">Toolbox</SectionTitle>
      <dl className="mt-6 grid gap-x-[34px] md:grid-cols-2">
        {toolbox.map((g) => (
          <div key={g.group} className="border-b border-rule-soft py-7">
            <dt className="flex items-baseline justify-between gap-4">
              <span className="text-[24px] tracking-[-0.01em]">{g.group}</span>
              <span className="caps text-right text-[10px] text-ink-3">{g.proof}</span>
            </dt>
            <dd className="mt-3 text-[17px] leading-[1.55] text-ink-2">{g.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
