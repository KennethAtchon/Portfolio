import content from "@/data/content.json"

export function TechStack() {
  const techStack = content.techStack

  return (
    <section id="tech-stack" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <div className="relative inline-block">
            <h2 className="text-4xl font-black tracking-tight text-foreground md:text-6xl uppercase relative z-10">
              Tech Stack
            </h2>
            <div className="absolute -bottom-2 left-0 w-2/3 h-4 bg-muted -z-10" />
          </div>
          <p className="text-lg text-foreground max-w-2xl leading-relaxed font-bold uppercase">
            Technologies I work with regularly and understand deeply
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([category, technologies], index) => {
            const bgColors = ["bg-secondary/20", "bg-muted/20", "bg-accent/20", "bg-secondary/20", "bg-muted/20", "bg-accent/20"]
            return (
              <div
                key={category}
                className={`space-y-4 border-4 border-foreground p-6 ${bgColors[index % bgColors.length]} shadow-[6px_6px_0_0_rgba(0,0,0,1)]`}
              >
                <h3 className="text-xl font-black text-foreground uppercase border-b-4 border-foreground pb-2">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {technologies.map((tech) => (
                    <li key={tech} className="text-base text-foreground font-bold flex items-center">
                      <span className="w-3 h-3 bg-foreground mr-3 inline-block" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
