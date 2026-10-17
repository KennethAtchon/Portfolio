import { Chip, Container, SectionHeader } from "@/components/ui"
import { toolbox } from "@/data/profile"

export function Toolbox() {
  return (
    <Container id="toolbox" className="pt-28 md:pt-36">
      <SectionHeader eyebrow="Toolbox" title="What I work with" intro="Each group notes where I’ve actually used it." />

      <dl className="mt-12 grid gap-x-12 md:grid-cols-2">
        {toolbox.map((g) => (
          <div key={g.group} className="reveal border-t border-line py-6">
            <dt className="flex items-baseline justify-between gap-4">
              <span className="font-semibold tracking-[-0.01em]">{g.group}</span>
              <span className="text-right text-xs text-fg-3">{g.proof}</span>
            </dt>
            <dd className="mt-3.5 flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  )
}
