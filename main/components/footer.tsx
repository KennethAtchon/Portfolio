import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <div className="flex flex-col items-center gap-6 border-t-4 border-foreground pt-12">
        <div className="flex gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/70 transition-colors border-4 border-foreground p-3 bg-secondary shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-foreground/70 transition-colors border-4 border-foreground p-3 bg-muted shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>

          <Link
            href="mailto:alex.johnson@example.com"
            className="text-foreground hover:text-foreground/70 transition-colors border-4 border-foreground p-3 bg-accent shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>

        <p className="text-sm text-foreground text-center max-w-md font-bold uppercase border-4 border-foreground px-6 py-3 bg-white">
          © {currentYear} Alex Johnson.
        </p>
      </div>
    </footer>
  )
}
