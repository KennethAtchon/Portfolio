import { About, Experience, Toolbox } from "@/components/about"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { MoreProjects } from "@/components/more-projects"
import { SelectedWork } from "@/components/selected-work"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <MoreProjects />
        <About />
        <Experience />
        <Toolbox />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
