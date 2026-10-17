import { cards, person } from "@/data/profile"

const credits = Array.from(new Map(cards.flatMap((c) => (c.image.credit ? [[c.image.credit.name, c.image.credit.url]] : []))).entries())

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1536px] px-5 pb-10 pt-28 md:px-[50px] md:pt-[150px] print:hidden">
      <div className="grid gap-6 border-t border-rule pt-6 text-[15px] text-ink-3 md:grid-cols-[auto_1fr_auto] md:gap-12">
        <p>
          © {new Date().getFullYear()} {person.name}
        </p>
        <p className="text-pretty md:text-center">
          Photography from Unsplash by{" "}
          {credits.map(([name, url], i) => (
            <span key={name}>
              <a href={url} target="_blank" rel="noreferrer" className="underline decoration-rule underline-offset-4 hover:text-ink">
                {name}
              </a>
              {i < credits.length - 2 ? ", " : i === credits.length - 2 ? " and " : "."}
            </span>
          ))}{" "}
          Exva screenshots are real captures of its demo mode.
        </p>
        <a href="#top" className="hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
