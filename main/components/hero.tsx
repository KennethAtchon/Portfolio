import { Button } from "@/components/ui/button"
import Link from "next/link"
import content from "@/data/content.json"

export function Hero() {
  const { hero } = content

  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Multiple geometric shapes for depth */}
      <div className="absolute top-20 right-8 w-72 h-72 bg-accent border-4 border-foreground translate-x-4 translate-y-4 -z-10" />
      <div className="absolute top-20 right-8 w-72 h-72 bg-secondary border-4 border-foreground -z-20" />

      <div className="absolute top-48 left-[60%] w-32 h-32 bg-muted border-4 border-foreground rotate-12 -z-15" />

      <div className="absolute bottom-32 right-24 w-24 h-24 border-4 border-foreground bg-secondary -z-10" />
      <div className="absolute bottom-16 left-12 w-16 h-16 border-4 border-foreground bg-muted rotate-45 -z-10" />

      <div className="space-y-12 relative z-10">
        <div className="space-y-6">
          <h1 className="text-6xl font-black tracking-tight text-foreground md:text-8xl text-balance leading-[0.95] uppercase">
            {hero.greeting}
          </h1>
          <p className="text-2xl text-foreground md:text-3xl font-bold tracking-wide uppercase border-l-8 border-accent pl-6">
            {hero.tagline}
          </p>
        </div>

        <p className="max-w-2xl text-xl text-foreground leading-relaxed md:text-2xl font-medium">
          {hero.description}
        </p>

        <div className="flex flex-wrap gap-6 pt-6">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary border-4 border-foreground px-8 py-6 text-base font-bold uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
          >
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-white text-foreground hover:bg-muted border-4 border-foreground px-8 py-6 text-base font-bold uppercase shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
          >
            <Link href="#contact">Let's Chat</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
