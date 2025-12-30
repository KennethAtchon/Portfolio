import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Grid pattern background covering all sections */}
      <div
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage: `
          linear-gradient(to right, oklch(0.15 0 0 / 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, oklch(0.15 0 0 / 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
        }}
      />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
