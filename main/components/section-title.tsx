export function SectionTitle({ children, aside }: { children: string; aside?: string }) {
  return (
    <div className="flex items-baseline justify-between border-t border-rule pt-[29px]">
      <h2 className="serif-caps text-[17.6px] leading-none tracking-[0.27em]">{children}</h2>
      {aside && <p className="caps text-[10.5px] text-ink-3">{aside}</p>}
    </div>
  )
}
