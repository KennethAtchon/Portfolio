import type { CSSProperties, ReactNode } from "react"

const MONO = "var(--font-geist-mono)"
const SANS = "var(--font-inter)"
const ACCENT_WASH = "rgb(11 60 182 / 0.07)"

type Tone = "default" | "ember" | "raised"

function T({
  x,
  y,
  children,
  anchor = "start",
  size = 9.5,
  fill = "var(--fg-2)",
  weight = 400,
  font = MONO,
}: {
  x: number
  y: number
  children: ReactNode
  anchor?: "start" | "middle" | "end"
  size?: number
  fill?: string
  weight?: number
  font?: string
}) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontFamily={font} fontSize={size} fontWeight={weight} fill={fill}>
      {children}
    </text>
  )
}

function Markers({ id }: { id: string }) {
  return (
    <defs>
      {[
        [`${id}-a`, "var(--fg-3)"],
        [`${id}-e`, "var(--ember)"],
      ].map(([mid, color]) => (
        <marker key={mid} id={mid} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill={color} />
        </marker>
      ))}
    </defs>
  )
}

function Box({ x, y, w, h, title, sub, tone = "default" }: { x: number; y: number; w: number; h: number; title: string; sub?: string; tone?: Tone }) {
  const fill = tone === "ember" ? ACCENT_WASH : tone === "raised" ? "var(--s3)" : "var(--s2)"
  const stroke = tone === "ember" ? "var(--ember)" : "var(--ov-md)"
  return (
    <g>
      <rect className="ln" x={x} y={y} width={w} height={h} rx={8} fill={fill} stroke={stroke} style={{ "--len": 2 * (w + h) } as CSSProperties} />
      <T x={x + w / 2} y={y + (sub ? h / 2 - 1 : h / 2 + 4)} anchor="middle" size={11} weight={600} font={SANS} fill={tone === "ember" ? "var(--ember-lift)" : "var(--fg)"}>
        {title}
      </T>
      {sub && (
        <T x={x + w / 2} y={y + h / 2 + 13} anchor="middle" size={9} fill="var(--fg-3)">
          {sub}
        </T>
      )}
    </g>
  )
}

function Arrow({ d, id, ember, dashed }: { d: string; id: string; ember?: boolean; dashed?: boolean }) {
  return (
    <path
      className={dashed ? undefined : "ln"}
      d={d}
      fill="none"
      stroke={ember ? "var(--ember)" : "var(--fg-3)"}
      strokeWidth={ember ? 1.75 : 1.1}
      strokeDasharray={dashed ? "4 4" : undefined}
      markerEnd={`url(#${id}-${ember ? "e" : "a"})`}
    />
  )
}

function Frame({ label, children, viewBox }: { label: string; children: ReactNode; viewBox: string }) {
  return (
    <svg viewBox={viewBox} role="img" aria-label={label} className="draw h-auto w-full min-w-[540px]">
      {children}
    </svg>
  )
}

export function EdgeFigure() {
  const id = "edge"
  return (
    <Frame
      viewBox="0 0 566 258"
      label="Users reach AWS WAF, running in count mode, then CloudFront with Lambda@Edge, then a reverse proxy that routes to separate frontend and backend services. Tenant configuration is added by code review and deployed to the edge."
    >
      <Markers id={id} />
      <Box x={0} y={40} w={82} h={52} title="Users" sub="browser" />
      <Arrow id={id} d="M82,66 H102" />
      <Box x={104} y={40} w={116} h={52} title="AWS WAF" sub="count mode first" tone="ember" />
      <T x={162} y={110} anchor="middle" size={9} fill="var(--fg-3)">
        log → tune → block
      </T>
      <Arrow id={id} d="M220,66 H240" />
      <rect className="ln" x={242} y={20} width={156} height={92} rx={10} fill="var(--s2)" stroke="var(--ov-md)" style={{ "--len": 496 } as CSSProperties} />
      <T x={254} y={39} size={11} weight={600} font={SANS} fill="var(--fg)">
        CloudFront
      </T>
      <Box x={254} y={52} w={132} h={46} title="Lambda@Edge" sub="request logic" tone="raised" />
      <Arrow id={id} d="M398,66 H418" />
      <Box x={420} y={40} w={146} h={52} title="Reverse proxy" sub="single entry point" />
      <Arrow id={id} d="M493,92 V122 H455 V146" />
      <Arrow id={id} d="M493,122 H531 V146" />
      <Box x={420} y={148} w={70} h={46} title="Frontend" />
      <Box x={496} y={148} w={70} h={46} title="Backend" />

      <rect x={116} y={186} width={160} height={52} rx={8} fill="var(--s1)" stroke="var(--ov-sm)" />
      <rect x={110} y={180} width={160} height={52} rx={8} fill="var(--s2)" stroke="var(--ov-sm)" />
      <Box x={104} y={174} w={160} h={52} title="Tenant config" sub="added by code review" />
      <Arrow id={id} dashed d="M264,200 H320 V114" />
      <T x={104} y={252} size={9} fill="var(--fg-3)">
        new tenant = reviewed code change
      </T>
    </Frame>
  )
}

export function SessionsFigure() {
  const id = "ses"
  return (
    <Frame
      viewBox="0 0 566 292"
      label="Two paths tie a session from site A to site B. Client path: signed in on A, an iframe on B's domain sets B's cookie, then a redirect to B. Backend path: the user presses continue, the backend links A's and B's account IDs, and an async call when the user lands on B ties the sessions."
    >
      <Markers id={id} />
      <rect x={0} y={22} width={150} height={266} rx={12} fill="var(--ov-xs)" />
      <rect x={416} y={22} width={150} height={266} rx={12} fill="var(--ov-xs)" />
      <T x={75} y={13} anchor="middle" size={10} fill="var(--fg)" weight={600}>
        SITE A
      </T>
      <T x={283} y={13} anchor="middle" size={10} fill="var(--fg-3)">
        LINK
      </T>
      <T x={491} y={13} anchor="middle" size={10} fill="var(--fg)" weight={600}>
        SITE B
      </T>

      <T x={283} y={46} anchor="middle" size={9} fill="var(--fg-3)">
        client path
      </T>
      <Box x={10} y={56} w={130} h={50} title="Signed in on A" />
      <Arrow id={id} d="M140,81 H206" />
      <Box x={208} y={56} w={150} h={50} title="iframe on B’s domain" sub="sets B’s cookie" tone="ember" />
      <Arrow id={id} d="M358,81 H424" />
      <T x={391} y={74} anchor="middle" size={8.5} fill="var(--fg-3)">
        redirect
      </T>
      <Box x={426} y={56} w={130} h={50} title="Arrives on B" sub="cookie in place" />

      <line x1={0} y1={136} x2={566} y2={136} stroke="var(--ov-md)" strokeDasharray="3 5" />

      <T x={283} y={160} anchor="middle" size={9} fill="var(--fg-3)">
        backend path
      </T>
      <Box x={10} y={170} w={130} h={50} title="Presses Continue" sub="user action" />
      <Arrow id={id} d="M140,195 H206" />
      <Box x={208} y={170} w={150} h={50} title="Link account IDs" sub="A’s user ↔ B’s user" />
      <Arrow id={id} d="M426,195 H360" />
      <Box x={426} y={170} w={130} h={50} title="Lands on B" sub="async call" />
      <Arrow id={id} ember d="M283,220 V242" />
      <rect x={208} y={244} width={150} height={36} rx={8} fill="var(--ember)" />
      <T x={283} y={266} anchor="middle" size={11} weight={700} font={SANS} fill="var(--on-ember)">
        Sessions tied
      </T>
    </Frame>
  )
}

export function FederationFigure() {
  const id = "fed"
  const t0 = 104
  const before: [string, number, number][] = [
    ["remoteEntry.js", 0, 52],
    ["chunk-a.js", 52, 100],
    ["chunk-b.js", 58, 112],
    ["shared/react", 100, 150],
    ["chunk-c.js", 112, 168],
    ["vendors-x.js", 150, 214],
  ]
  const after: [string, number, number][] = [
    ["remoteEntry.js", 0, 52],
    ["bundle.js", 52, 124],
  ]
  const row = 18
  const bar = (name: string, a: number, b: number, y: number, accent: boolean) => (
    <g key={`${name}${y}`}>
      <T x={t0 - 8} y={y + 9.5} anchor="end" size={9} fill="var(--fg-2)">
        {name}
      </T>
      <rect x={t0 + a} y={y} width={b - a} height={12} rx={3} fill={accent ? "var(--ember)" : "var(--ov-lg)"} />
    </g>
  )
  const afterY = 36 + before.length * row + 32
  const axisY = afterY + after.length * row + 12
  const cols = 6
  const rows = 6
  const mx = 380
  const my = 42
  const cell = 24
  return (
    <Frame
      viewBox="0 0 566 290"
      label="Request waterfall. Before: the remote entry triggers six chained chunk requests. After: the remote entry and one consolidated bundle, finishing much sooner. Beside it, a test matrix of configuration combinations, each measured with Playwright; the shipped option is highlighted."
    >
      <Markers id={id} />
      <T x={0} y={16} size={10} weight={600} fill="var(--fg)">
        BEFORE
      </T>
      {before.map(([n, a, b], i) => bar(n, a, b, 30 + i * row, false))}
      <T x={0} y={afterY - 10} size={10} weight={600} fill="var(--ember-lift)">
        AFTER
      </T>
      {after.map(([n, a, b], i) => bar(n, a, b, afterY + i * row, true))}
      <Arrow id={id} d={`M${t0},${axisY} H${t0 + 236}`} />
      <T x={t0 + 236} y={axisY + 14} anchor="end" size={8.5} fill="var(--fg-3)">
        time
      </T>
      <line x1={t0 + 124} y1={afterY - 4} x2={t0 + 124} y2={axisY} stroke="var(--ember)" strokeDasharray="3 3" />
      <line x1={t0 + 214} y1={28} x2={t0 + 214} y2={axisY} stroke="var(--fg-3)" strokeDasharray="3 3" />
      <path className="ln" d={`M${t0 + 128},${axisY + 24} H${t0 + 210}`} stroke="var(--ember)" strokeWidth={1.75} markerStart={`url(#${id}-e)`} markerEnd={`url(#${id}-e)`} />
      <T x={t0 + 169} y={axisY + 40} anchor="middle" size={9.5} weight={600} fill="var(--ember-lift)">
        fewer round trips
      </T>

      <T x={mx} y={16} size={10} weight={600} fill="var(--fg)">
        TEST MATRIX
      </T>
      <T x={mx} y={30} size={8.5} fill="var(--fg-3)">
        chunking × sharing × size
      </T>
      <g className="cells">
        {Array.from({ length: rows * cols }, (_, i) => {
          const r = Math.floor(i / cols)
          const c = i % cols
          const chosen = r === 2 && c === 3
          const risky = (r * 7 + c * 3) % 5 === 0
          const x = mx + c * (cell + 6)
          const y = my + r * (cell + 6)
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={cell}
              height={cell}
              rx={5}
              fill={chosen ? "var(--ember)" : risky ? "transparent" : "var(--s3)"}
              stroke={chosen ? "var(--ember)" : risky ? "var(--fg-3)" : "var(--ov-md)"}
              strokeDasharray={risky ? "3 3" : undefined}
              style={{ "--d": i, transformOrigin: `${x + cell / 2}px ${y + cell / 2}px` } as CSSProperties}
            />
          )
        })}
      </g>
      <g transform={`translate(${mx} ${my + rows * (cell + 6) + 10})`}>
        <rect width={10} height={10} rx={2.5} fill="var(--s3)" stroke="var(--ov-md)" />
        <T x={16} y={9} size={8.5}>
          measured in Playwright
        </T>
        <rect y={16} width={10} height={10} rx={2.5} fill="none" stroke="var(--fg-3)" strokeDasharray="3 3" />
        <T x={16} y={25} size={8.5}>
          fast, but riskier
        </T>
        <rect y={32} width={10} height={10} rx={2.5} fill="var(--ember)" />
        <T x={16} y={41} size={8.5} fill="var(--fg)">
          shipped: safe for 300+ tenants
        </T>
      </g>
    </Frame>
  )
}

function FeatureRow({ x, y }: { x: number; y: number }) {
  return (
    <g>
      {[0, 74, 148].map((dx, i) => (
        <rect key={dx} x={x + dx} y={y} width={i === 2 ? 72 : 68} height={30} rx={6} fill="var(--ov-sm)" />
      ))}
    </g>
  )
}

export function MigrationFigure() {
  const id = "mig"
  return (
    <Frame
      viewBox="0 0 566 318"
      label="Before: the React Native app depends on separate iOS and Android sign-in code, so every change is written twice. After: one React Native sign-in package containing context, session expiry, demo mode and logging, which feeds 100+ metrics."
    >
      <Markers id={id} />
      <T x={0} y={16} size={10} weight={600} fill="var(--fg)">
        BEFORE
      </T>
      <rect x={0} y={28} width={250} height={92} rx={12} fill="none" stroke="var(--ov-lg)" strokeDasharray="4 4" />
      <T x={12} y={46} size={8.5} fill="var(--fg-3)">
        A to Z app · React Native
      </T>
      <FeatureRow x={14} y={58} />
      <Arrow id={id} d="M62,180 V124" />
      <Arrow id={id} d="M188,180 V124" />
      <Box x={0} y={182} w={122} h={54} title="iOS sign-in" sub="Swift · Obj-C" />
      <Box x={128} y={182} w={122} h={54} title="Android sign-in" sub="Java" />
      <path d="M2,252 v6 h246 v-6" fill="none" stroke="var(--fg-3)" />
      <T x={125} y={276} anchor="middle" size={9.5} fill="var(--fg-2)">
        every change written twice
      </T>

      <Arrow id={id} ember d="M262,150 H300" />

      <T x={316} y={16} size={10} weight={600} fill="var(--ember-lift)">
        AFTER
      </T>
      <rect x={316} y={28} width={250} height={226} rx={12} fill="none" stroke="var(--ov-lg)" />
      <T x={328} y={46} size={8.5} fill="var(--fg-3)">
        A to Z app · React Native
      </T>
      <FeatureRow x={330} y={58} />
      <rect className="ln" x={328} y={102} width={226} height={140} rx={10} fill={ACCENT_WASH} stroke="var(--ember)" style={{ "--len": 732 } as CSSProperties} />
      <T x={340} y={121} size={10} weight={600} fill="var(--ember-lift)">
        Sign-in package
      </T>
      <Box x={340} y={132} w={98} h={46} title="Context" sub="React state" />
      <Box x={444} y={132} w={98} h={46} title="Session" sub="expiry" />
      <Box x={340} y={184} w={98} h={46} title="Demo mode" sub="for testers" />
      <Box x={444} y={184} w={98} h={46} title="Logging" sub="new path" />
      <Arrow id={id} d="M493,230 V274" />
      <Box x={430} y={276} w={126} h={34} title="100+ metrics" />
      <T x={316} y={286} size={9.5} fill="var(--fg)">
        one codebase,
      </T>
      <T x={316} y={300} size={9.5} fill="var(--fg)">
        half the work
      </T>
    </Frame>
  )
}

export function TwoPersonFigure() {
  const id = "tp"
  const lanes = [
    { x: 80, title: "Manager" },
    { x: 283, title: "Review package" },
    { x: 486, title: "Associate" },
  ]
  const msg = (x1: number, x2: number, y: number, text: string, opts: { dashed?: boolean; ember?: boolean } = {}) => (
    <g>
      <Arrow id={id} d={`M${x1},${y} H${x2 + (x2 > x1 ? -2 : 2)}`} dashed={opts.dashed} ember={opts.ember} />
      <T x={(x1 + x2) / 2} y={y - 7} anchor="middle" size={9.5} fill={opts.ember ? "var(--ember-lift)" : "var(--fg-2)"}>
        {text}
      </T>
    </g>
  )
  return (
    <Frame
      viewBox="0 0 566 334"
      label="Sequence: the manager starts a demo session; the review package sends the associate a deep link to an approval screen; the manager polls while waiting; the associate approves; the manager sees approved and demo mode turns on."
    >
      <Markers id={id} />
      {lanes.map((lane) => (
        <g key={lane.title}>
          <Box x={lane.x - 66} y={4} w={132} h={32} title={lane.title} />
          <line x1={lane.x} y1={36} x2={lane.x} y2={326} stroke="var(--ov-md)" strokeDasharray="2 4" />
        </g>
      ))}
      {msg(80, 283, 70, "1 · start demo session")}
      {msg(283, 486, 104, "2 · deep link: approve?")}
      <rect x={480} y={110} width={12} height={130} rx={4} fill="var(--s3)" stroke="var(--ov-md)" />
      <T x={472} y={178} anchor="end" size={9} fill="var(--fg-3)">
        approval screen
      </T>
      <rect x={16} y={122} width={290} height={84} rx={8} fill="var(--ov-xs)" stroke="var(--ov-md)" />
      <rect x={16} y={122} width={150} height={18} rx={8} fill="var(--ov-md)" />
      <T x={26} y={134.5} size={8.5} fill="var(--fg)">
        loop · waiting state
      </T>
      {msg(80, 283, 164, "3 · poll status")}
      {msg(283, 80, 194, "pending", { dashed: true })}
      {msg(486, 283, 236, "4 · approve")}
      {msg(283, 80, 270, "5 · approved", { ember: true })}
      <rect x={16} y={288} width={128} height={32} rx={8} fill="var(--ember)" />
      <T x={80} y={308} anchor="middle" size={11} weight={700} font={SANS} fill="var(--on-ember)">
        Demo mode on
      </T>
    </Frame>
  )
}

export function LocalesFigure() {
  const cols = 27
  const rows = 4
  const cw = 15
  const ch = 30
  const gap = 3
  const x0 = 40
  const y0 = 30
  const gridW = cols * (cw + gap) - gap
  const base = y0 + rows * (ch + gap)
  return (
    <Frame viewBox="0 0 566 222" label="A grid of 4 email templates by 27 languages: 108 files.">
      <T x={x0} y={16} size={10} weight={600} fill="var(--fg)">
        27 languages →
      </T>
      <g className="cells">
        {Array.from({ length: rows * cols }, (_, i) => {
          const r = Math.floor(i / cols)
          const c = i % cols
          const x = x0 + c * (cw + gap)
          const y = y0 + r * (ch + gap)
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={cw}
              height={ch}
              rx={3}
              fill={c === 0 ? "var(--ember)" : "var(--ov-lg)"}
              style={{ "--d": c + r * 6, transformOrigin: `${x + cw / 2}px ${y + ch / 2}px` } as CSSProperties}
            />
          )
        })}
      </g>
      {Array.from({ length: rows }, (_, r) => (
        <T key={r} x={x0 - 10} y={y0 + r * (ch + gap) + ch / 2 + 3.5} anchor="end" size={9.5} fill="var(--fg-2)">
          T{r + 1}
        </T>
      ))}
      <path d={`M${x0},${base + 6} v6 h${gridW} v-6`} fill="none" stroke="var(--fg-3)" />
      <T x={x0} y={base + 32} size={9.5}>
        4 templates × 27 languages
      </T>
      <T x={x0 + gridW} y={base + 36} anchor="end" size={20} weight={700} font={SANS} fill="var(--fg)">
        = 108 files
      </T>
      <rect x={x0} y={base + 44} width={8} height={8} rx={2} fill="var(--ember)" />
      <T x={x0 + 13} y={base + 51.5} size={8.5} fill="var(--fg-3)">
        source language
      </T>
    </Frame>
  )
}

export const figures = {
  edge: EdgeFigure,
  sessions: SessionsFigure,
  federation: FederationFigure,
  migration: MigrationFigure,
  "two-person": TwoPersonFigure,
  locales: LocalesFigure,
}
