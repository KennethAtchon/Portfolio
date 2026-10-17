import { Arrow } from "@/components/arrow"
import { SectionTitle } from "@/components/section-title"
import { person } from "@/data/profile"

const mailto = `mailto:${person.email}?subject=${encodeURIComponent("Software engineering role")}`

export function Contact() {
  const links = [
    { label: "Email Kenneth", href: mailto },
    { label: "View résumé", href: "/resume" },
    { label: "LinkedIn", href: person.links.linkedin },
    { label: "GitHub", href: person.links.github },
  ]
  return (
    <section id="contact" className="mx-auto max-w-[1536px] scroll-mt-6 px-5 pt-28 md:px-[50px] md:pt-[150px]">
      <SectionTitle aside={person.status}>Contact</SectionTitle>
      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-x-[34px]">
        <h2 className="text-[clamp(3rem,7.4vw,112px)] font-[420] leading-[0.9] tracking-[-0.04em] lg:col-span-7">
          Hiring?
          <br />
          Let’s talk.
        </h2>
        <div className="lg:col-span-5 lg:pt-3">
          <p className="max-w-[30ch] text-[26px] leading-[1.42] tracking-[-0.012em]">
            I’m looking for my next role on a team that ships web platform, auth or product engineering work.
          </p>
          <a href={mailto} className="mt-8 inline-block break-all text-[clamp(1.4rem,2.2vw,30px)] tracking-[-0.01em] text-blue underline decoration-1 underline-offset-[7px] hover:decoration-2">
            {person.email}
          </a>
          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="cta inline-flex text-[12px] tracking-[0.22em]">
                  {l.label}
                  <Arrow />
                </a>
              </li>
            ))}
          </ul>
          <p className="caps mt-10 text-[10.5px] leading-[1.8] text-ink-3">
            {person.location} · {person.workAuth} · {person.phone}
          </p>
        </div>
      </div>
    </section>
  )
}
