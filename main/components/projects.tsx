import { Card } from "@/components/ui/card"
import content from "@/data/content.json"
import Link from "next/link"

interface Project {
  name: string
  summary: string
  problem: string
  solution: string
  impact: string
  techStack: string[]
  period?: string
  company?: string
  github?: string
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const bgColors = ["bg-secondary/30", "bg-muted/30", "bg-accent/30"]
  const bgColor = bgColors[index % bgColors.length]

  return (
    <Card
      className={`group p-10 md:p-12 ${bgColor} border-4 border-foreground shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200`}
    >
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <h3 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight border-b-4 border-foreground pb-2 inline-block">
              {project.name}
            </h3>
            {project.company && (
              <span className="text-sm font-bold text-foreground bg-white border-2 border-foreground px-3 py-1 uppercase">
                {project.company}
              </span>
            )}
          </div>
          <p className="text-lg md:text-xl text-foreground font-bold">{project.summary}</p>
          {project.period && (
            <p className="text-sm text-foreground/70 font-medium italic">{project.period}</p>
          )}
        </div>

        <div className="space-y-6 text-foreground">
          <div className="space-y-2 border-l-6 border-secondary pl-4 bg-secondary/10 py-2">
            <h4 className="text-sm font-black uppercase tracking-wider">Problem</h4>
            <p className="text-base md:text-lg leading-relaxed font-medium">{project.problem}</p>
          </div>

          <div className="space-y-2 border-l-6 border-muted pl-4 bg-muted/10 py-2">
            <h4 className="text-sm font-black uppercase tracking-wider">Solution</h4>
            <p className="text-base md:text-lg leading-relaxed font-medium">{project.solution}</p>
          </div>

          <div className="space-y-2 border-l-6 border-accent pl-4 bg-accent/10 py-2">
            <h4 className="text-sm font-black uppercase tracking-wider">Impact</h4>
            <p className="text-base md:text-lg leading-relaxed font-medium">{project.impact}</p>
          </div>
        </div>

        <div className="pt-6 border-t-4 border-foreground">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-bold text-foreground bg-white border-3 border-foreground uppercase shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-150"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-foreground hover:text-foreground/70 transition-colors border-2 border-foreground px-4 py-2 bg-white uppercase"
              >
                View on GitHub
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export function Projects() {
  const workProjects: Project[] = content.workProjects || []
  const personalProjects: Project[] = content.personalProjects || []

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-32 bg-secondary/10">
      <div className="space-y-20">
        <div className="space-y-6">
          <div className="relative inline-block">
            <h2 className="text-5xl font-black tracking-tight text-foreground md:text-7xl uppercase relative z-10">
              Things I've Built
            </h2>
            <div className="absolute -bottom-2 left-0 w-3/4 h-4 bg-accent -z-10" />
          </div>
          <p className="text-xl md:text-2xl text-foreground max-w-2xl leading-relaxed font-bold uppercase">
            A selection of projects from my professional work and personal development
          </p>
        </div>

        {/* Work Experience Projects Section */}
        {workProjects.length > 0 && (
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="relative inline-block">
                <h3 className="text-3xl font-black tracking-tight text-foreground md:text-5xl uppercase relative z-10">
                  Work Experience
                </h3>
                <div className="absolute -bottom-1 left-0 w-1/2 h-3 bg-secondary -z-10" />
              </div>
              <p className="text-lg md:text-xl text-foreground max-w-2xl leading-relaxed font-bold">
                Professional projects from my work at Amazon and other companies
              </p>
            </div>
            <div className="grid gap-10">
              {workProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Personal Projects Section */}
        {personalProjects.length > 0 && (
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="relative inline-block">
                <h3 className="text-3xl font-black tracking-tight text-foreground md:text-5xl uppercase relative z-10">
                  Side Projects
                </h3>
                <div className="absolute -bottom-1 left-0 w-1/2 h-3 bg-muted -z-10" />
              </div>
              <p className="text-lg md:text-xl text-foreground max-w-2xl leading-relaxed font-bold">
                Personal projects and side work showcasing my skills and interests
              </p>
            </div>
            <div className="grid gap-10">
              {personalProjects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
