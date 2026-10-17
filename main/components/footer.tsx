import { person } from "@/data/profile"

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1180px] px-5 pb-10 pt-20 md:px-8 print:hidden">
      <div className="flex flex-col gap-3 border-t border-line pt-6 text-sm text-fg-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {person.name}
        </p>
        <p>Built with Next.js · Set in Cabinet Grotesk and Geist</p>
        <a href="#top" className="transition-colors hover:text-fg">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
