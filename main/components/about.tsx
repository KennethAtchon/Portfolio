export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 md:py-32">
      <div className="space-y-10">
        <div className="relative inline-block">
          <h2 className="text-5xl font-black tracking-tight text-foreground md:text-7xl uppercase relative z-10">
            About Me
          </h2>
          <div className="absolute -bottom-2 left-0 w-full h-4 bg-accent -z-10" />
        </div>

        <div className="max-w-3xl space-y-6 text-foreground leading-relaxed">
          <p className="text-xl md:text-2xl font-medium leading-relaxed border-l-8 border-secondary pl-6 bg-secondary/20 py-4">
            I'm a software engineer who believes great code should be like a good joke—concise, well-timed, and makes
            perfect sense once you get it. I've spent the last several years building systems that scale, debugging
            problems that shouldn't exist, and occasionally creating problems that definitely shouldn't exist.
          </p>

          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            My approach? Write clean code that your future self won't curse at. Choose the right tool for the job, not
            the newest one. Test thoroughly, but know when good enough is good enough. And always, always write
            documentation—because six months from now, you'll be grateful you did.
          </p>

          <p className="text-xl md:text-2xl font-medium leading-relaxed border-l-8 border-muted pl-6 bg-muted/20 py-4">
            I'm fascinated by distributed systems, performance optimization, and the surprisingly deep rabbit holes of
            seemingly simple problems. I believe the best engineers are equal parts problem solver, communicator, and
            pragmatist. Currently, I'm most excited about building reliable, maintainable software that actually solves
            real problems—not just impressive-sounding ones.
          </p>

          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            Outside of coding, I'm learning Japanese (slowly), attempting to keep houseplants alive (unsuccessfully),
            and convinced that tabs are better than spaces (controversially).
          </p>
        </div>
      </div>
    </section>
  )
}
