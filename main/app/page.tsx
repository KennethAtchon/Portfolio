import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Nav } from "@/components/nav"
import { Projects } from "@/components/projects"
import { Spotlight } from "@/components/spotlight"
import { Toolbox } from "@/components/toolbox"
import { WorkExplorer } from "@/components/work-explorer"

export default function Home() {
  return (
    <>
      <Nav />
      <Spotlight />
      <main>
        <Hero />
        <WorkExplorer />
        <Experience />
        <Toolbox />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
