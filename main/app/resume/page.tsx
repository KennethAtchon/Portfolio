import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"
import { PrintButton } from "@/app/resume/print-button"
import { btn } from "@/components/ui"
import { certificates, education, person, resume, roles, toolbox } from "@/data/profile"

export const metadata: Metadata = {
  title: "Résumé",
  description: "Kenneth Atchon’s résumé: software engineer at Amazon on web platform, authentication and mobile.",
}

function Heading({ children }: { children: string }) {
  return (
    <h2 className="mt-[0.12in] border-b border-[#1a1a1a] pb-[2px] font-mono text-[7.5pt] font-semibold uppercase tracking-[0.12em] text-[#1a1a1a]">
      {children}
    </h2>
  )
}

export default function ResumePage() {
  return (
    <div className="min-h-screen py-6 print:p-0 md:py-10">
      <div className="mx-auto mb-5 flex max-w-[8.5in] flex-wrap items-center justify-between gap-3 px-4 print:hidden">
        <a href="/" className={btn.small}>
          <ArrowLeft className="size-3.5 text-fg-3" aria-hidden />
          Back to the site
        </a>
        <PrintButton />
      </div>

      <article className="mx-auto w-full max-w-[8.5in] rounded-[4px] bg-[#fffdf8] px-[0.5in] py-[0.4in] text-[9pt] leading-[1.32] text-[#1a1a1a] shadow-[0_30px_80px_-20px_rgb(0_0_0/0.7)] print:max-w-none print:rounded-none print:shadow-none">
        <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1 border-b-2 border-[#1a1a1a] pb-2">
          <div>
            <h1 className="font-display text-[24pt] font-extrabold leading-none tracking-[-0.01em]">{person.name}</h1>
            <p className="mt-1.5 text-[10.5pt] font-semibold">Software Engineer · Web platform, authentication and mobile</p>
          </div>
          <p className="font-mono text-[7.5pt] text-[#55524c]">{person.location}</p>
        </header>
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 font-mono text-[7.5pt] text-[#55524c]">
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <span>{person.phone}</span>
          <a href={person.links.linkedin}>linkedin.com/in/kenneth-atchon</a>
          <a href={person.links.github}>github.com/KennethAtchon</a>
          <a href={person.site}>atchonk.netlify.app</a>
        </p>

        <Heading>Summary</Heading>
        <p className="mt-1.5">{resume.summary}</p>

        <Heading>Experience</Heading>
        {roles.map((r) => (
          <section key={`${r.org}-${r.start}`} className="mt-2 break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-bold">
                {r.title} <span className="font-normal">· {r.org}, {r.place}</span>
              </h3>
              <p className="font-mono text-[7.5pt] text-[#55524c]">
                {r.start} – {r.end}
              </p>
            </div>
            <ul className="mt-0.5 list-disc space-y-0.5 pl-4 marker:text-[#c93a08]">
              {r.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        ))}

        <Heading>Projects</Heading>
        <ul className="mt-1.5 space-y-1">
          {resume.projects.map((p) => (
            <li key={p.name} className="break-inside-avoid">
              <span className="font-bold">{p.name}</span> · {p.line} <span className="font-mono text-[7pt] text-[#55524c]">{p.stack}</span>
            </li>
          ))}
        </ul>

        <Heading>Skills</Heading>
        <dl className="mt-1.5 grid grid-cols-[1.15in_1fr] gap-x-3 gap-y-0.5">
          {toolbox.map((g) => (
            <div key={g.group} className="contents">
              <dt className="font-bold">{g.group}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>

        <Heading>Education &amp; certificates</Heading>
        <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-4">
          <p>
            <span className="font-bold">{education.degree}</span> · {education.school}, {education.place} · GPA {education.gpa}, {education.honors.toLowerCase()}
          </p>
          <p className="font-mono text-[7.5pt] text-[#55524c]">
            {education.start} – {education.end}
          </p>
        </div>
        {certificates.map((c) => (
          <div key={c.name} className="flex items-baseline justify-between gap-x-4">
            <p>{c.name}</p>
            <p className="font-mono text-[7.5pt] text-[#55524c]">{c.date}</p>
          </div>
        ))}
      </article>
    </div>
  )
}
