import content from "@/data/content.json"

export function About() {
  const { about } = content

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 md:py-32">
      <div className="space-y-10">
        <div className="relative inline-block">
          <h2 className="text-5xl font-black tracking-tight text-foreground md:text-7xl uppercase relative z-10">
            {about.title}
          </h2>
          <div className="absolute -bottom-2 left-0 w-full h-4 bg-accent -z-10" />
        </div>

        <div className="max-w-3xl space-y-6 text-foreground leading-relaxed">
          {about.paragraphs.map((paragraph, index) => {
            const isHighlighted = index % 2 === 0
            const borderColor = index === 0 ? "border-secondary" : index === 2 ? "border-muted" : ""
            const bgColor = index === 0 ? "bg-secondary/20" : index === 2 ? "bg-muted/20" : ""

            return (
              <p
                key={index}
                className={`text-xl md:text-2xl font-medium leading-relaxed ${
                  isHighlighted && borderColor ? `border-l-8 ${borderColor} pl-6 ${bgColor} py-4` : ""
                }`}
              >
                {paragraph}
              </p>
            )
          })}
        </div>
      </div>
    </section>
  )
}
