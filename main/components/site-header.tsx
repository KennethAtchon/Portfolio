import { person } from "@/data/profile"

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-[1536px] items-center px-5 pt-5 md:px-[50px] md:pt-[22px]">
      <a href="/" className="whitespace-nowrap text-[18px] leading-[28px] tracking-[-0.012em] sm:text-[21px] md:text-[23.7px]">
        {person.name}
      </a>
      <span className="ml-[22px] hidden h-px flex-1 bg-rule sm:block" aria-hidden />
      <nav aria-label="Primary" className="ml-auto flex items-center gap-4 pl-4 text-[15px] sm:ml-[44px] sm:gap-6 sm:pl-0 sm:text-[17px] md:gap-[52px] md:text-[17.7px]">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="leading-[28px] transition-colors hover:text-blue">
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href="/#contact"
        className="ml-4 size-[9px] shrink-0 translate-y-[2px] rounded-full bg-blue sm:ml-6 sm:size-[11px] md:ml-[66px]"
        aria-label={`${person.status}: get in touch`}
        title={person.status}
      />
    </header>
  )
}
