// Every word on the site comes from here.
// The résumé PDF (public/Kenneth-Atchon-Resume.pdf) is compiled from Ken's Overleaf project, its source of
// truth: https://www.overleaf.com/project/6402857541203dfd475eb084. `roles` and `education` mirror it word
// for word, so change them together. Titles and dates were checked against Ken's LinkedIn on 2026-10-17.
// Other sources: KENNETH_ATCHON_INFO.md, Ken's own descriptions of his Amazon work, and the repo READMEs.

export const person = {
  name: "Kenneth Atchon",
  first: "Kenneth",
  last: "Atchon",
  initials: "KA",
  role: "Software Engineer",
  title: "Software Development Engineer",
  company: "Amazon",
  location: "Seattle, WA",
  timeZone: "America/Los_Angeles",
  workAuth: "U.S. citizen, no sponsorship needed",
  status: "Open to new roles",
  email: "katchon.career@gmail.com",
  phone: "+1 (219) 386-6604",
  site: "https://atchonk.netlify.app",
  resume: "/Kenneth-Atchon-Resume.pdf",
  links: {
    github: "https://github.com/KennethAtchon",
    linkedin: "https://www.linkedin.com/in/kenneth-atchon-488b81214/",
    leetcode: "https://leetcode.com/u/kennethatchon/",
  },
}

export type Work = {
  id: string
  title: string
  short: string
  period?: string
  context: string
  did: string[]
  outcome: string
  metrics: { value: string; label: string }[]
  stack: string[]
  figure: "edge" | "sessions" | "federation" | "migration" | "two-person" | "locales"
  caption: string
}

export const work: Work[] = [
  {
    id: "platform",
    title: "Helped build a multi-tenant platform from the ground up",
    short: "Edge architecture, WAF security and code-reviewed tenant onboarding for a new customer-facing product.",
    context:
      "A new user-facing product needed a platform that many tenants could build on without standing up their own infrastructure. It had to be fast for users everywhere, secure by default, and simple to join.",
    did: [
      "Helped shape the architecture: Amazon CloudFront serves every request at the edge, Lambda@Edge runs request logic close to the user, and a reverse proxy routes to separately deployed frontend and backend services.",
      "Made tenant onboarding a code change. Each tenant arrives through reviewed configuration, so every onboarding is versioned, tested and easy to roll back.",
      "Chose the AWS WAF rule set and launched it in count mode, which logs what each rule would have blocked on real traffic. That let us tune out false positives before any rule could block a real user.",
      "Built the redirect flow that sends already-signed-in users straight to where they belong.",
    ],
    outcome:
      "A shared platform that tenants join through a code review instead of new infrastructure, served from the edge and protected by WAF rules proven against live traffic.",
    metrics: [
      { value: "0→1", label: "built from scratch" },
      { value: "Edge", label: "CloudFront + Lambda@Edge" },
    ],
    stack: ["AWS CloudFront", "Lambda@Edge", "AWS WAF", "Reverse proxy", "Multi-tenancy"],
    figure: "edge",
    caption: "Requests pass WAF and the edge before a reverse proxy splits them between frontend and backend. Tenants are added in code.",
  },
  {
    id: "sessions",
    title: "Kept users signed in across sites without leaning on third-party cookies",
    short: "A client path and a backend path that together carry a session from one domain to another.",
    context:
      "Users signed in on one of our sites needed to arrive signed in on a second site on a different domain. The classic fix, a shared third-party cookie, is blocked by default in Safari and Firefox and is unreliable everywhere else.",
    did: [
      "Researched third-party cookies to the bottom: SameSite rules, browser tracking protections, storage partitioning, and years-old write-ups of workarounds that browsers later broke.",
      "Client path: the page opens an iframe on the second site’s domain, which sets that site’s cookie, then redirects the user.",
      "Backend path: when the user presses a button to continue, we link their account ID on the first site to their ID on the second, then make an async call the moment they land so the two sessions are tied together.",
    ],
    outcome:
      "Users cross between the sites already signed in. The client path covers browsers that allow it, and the backend path doesn’t depend on cookies at all, so neither one is a single point of failure.",
    metrics: [
      { value: "2→1", label: "sites, one session" },
      { value: "2", label: "independent paths" },
    ],
    stack: ["Cookies & SameSite", "iframes", "Redirects", "Account linking", "Async APIs"],
    figure: "sessions",
    caption: "Top: the client sets the second site’s cookie in an iframe. Bottom: the backend ties the two accounts and sessions together.",
  },
  {
    id: "federation",
    title: "Made a 300+ tenant micro-frontend platform load faster",
    short: "Fewer network round trips through webpack chunk consolidation, chosen by measuring every option.",
    period: "2026",
    context:
      "The platform is assembled at runtime from micro-frontends with webpack Module Federation, serving more than 300 tenants. Each page load fired a chain of small chunk requests, and every extra round trip delayed the moment users could see and use the page.",
    did: [
      "Worked out how Module Federation’s share keys and shared scopes decide which copy of a shared dependency, such as React, actually loads. Nothing could change safely until that was understood.",
      "Prototyped the aggressive options: consolidating chunks into one, folding node_modules into vendor chunks, and merging small chunks with minChunkSize.",
      "Used Playwright, with AI to speed up the work, to load every combination of settings and measure its latency, so the decision rested on numbers rather than guesses.",
    ],
    outcome:
      "Consolidated the chunks and removed the extra requests. With 300+ tenants depending on the platform, we shipped only the options that proved safe and left the riskier ones on the bench.",
    metrics: [
      { value: "300+", label: "tenants" },
      { value: "N→1", label: "chunk requests" },
      { value: "Every", label: "config benchmarked" },
    ],
    stack: ["Webpack 5", "Module Federation", "splitChunks", "Playwright", "AI-assisted testing"],
    figure: "federation",
    caption: "A chain of chunk requests becomes one, and every configuration was measured before choosing. Schematic, not to scale.",
  },
  {
    id: "react-native",
    title: "Rebuilt the A to Z sign-in experience in React Native",
    short: "Merged separate iOS and Android sign-in codebases into one, with accessibility built in from day one.",
    period: "Q4 2024 – Q2 2025",
    context:
      "A to Z is the app Amazon associates use to manage their work. Most of it already ran on React Native, but sign-in was still two native codebases, Swift / Objective-C and Java, so every change was built twice and kept in sync by hand.",
    did: [
      "Rebuilt 8 authentication screens from Figma and the legacy designs, accessible from day one: screen-reader labels throughout and layouts that hold up at every screen size.",
      "Implemented the shared React Context state, session expiration, a demo mode for app testers, and a new logging system.",
      "Migrated 100+ metrics from the native apps and removed the redundant ones along the way.",
    ],
    outcome:
      "One codebase instead of two. Sign-in changes take about half the development time, and the login flow now matches the rest of the modernized app.",
    metrics: [
      { value: "8", label: "screens rebuilt" },
      { value: "100+", label: "metrics migrated" },
      { value: "½", label: "dev time per change" },
    ],
    stack: ["React Native", "TypeScript", "Swift", "Objective-C", "Java", "Accessibility"],
    figure: "migration",
    caption: "Two native sign-in stacks collapse into one React Native package inside the app.",
  },
  {
    id: "two-person",
    title: "Unlocked demo mode in 13 countries with two-person review",
    short: "Closed the security finding that was blocking demo mode’s rollout to the US and the EU.",
    period: "Q3 – Q4 2025",
    context:
      "Demo mode couldn’t launch in the US or EU until a security finding was closed: one person could start a demo session entirely on their own.",
    did: [
      "Built two-person review as its own package, which kept the main authentication package from growing into a monolith.",
      "Implemented the associate’s approval screen, the manager’s waiting state with polling for the decision, and the deep links that connect the two.",
    ],
    outcome: "The finding closed and demo mode was cleared for the US and 12 EU countries.",
    metrics: [
      { value: "13", label: "countries unlocked" },
      { value: "1", label: "new package, not a bigger one" },
    ],
    stack: ["React Native", "Deep links", "Polling", "iOS", "Android"],
    figure: "two-person",
    caption: "A second person must approve before a demo session starts.",
  },
  {
    id: "alumni",
    title: "Launched Alumni Lite globally, in 27 languages",
    short: "A feature-gated launch with localized email for people leaving Amazon or changing roles.",
    period: "Q3 2025",
    context:
      "People leaving Amazon or moving between roles needed a lighter Alumni account, rolled out gradually and in 27 languages.",
    did: [
      "Put the launch behind a feature gate for a controlled rollout.",
      "Built 4 HTML email templates and shipped each in 27 languages: 108 files.",
      "Updated the trigger that listens for access-revoked events, so people in transition could sign up for Alumni Lite.",
    ],
    outcome: "Launched globally.",
    metrics: [
      { value: "108", label: "email files" },
      { value: "27", label: "languages" },
    ],
    stack: ["Feature gates", "HTML email", "Localization", "Event consumers"],
    figure: "locales",
    caption: "4 templates × 27 languages = 108 files.",
  },
]

export type Role = {
  start: string
  end: string
  title: string
  org: string
  place: string
  current?: boolean
  points: string[]
}

export const roles: Role[] = [
  {
    start: "Nov 2024",
    end: "Present",
    title: "Software Development Engineer",
    org: "Amazon",
    place: "Seattle, WA",
    current: true,
    points: [
      "Leading low-level design of a new external-facing web platform, built from scratch on CloudFront, Lambda@Edge, AWS WAF and a reverse proxy, for a 40x traffic scale-out; chose the WAF rules and ran them in count mode to tune on live traffic, and made tenant onboarding a code-reviewed change.",
      "Kept users signed in across domains without third-party cookies: paired a client-side iframe cookie handoff and redirect with backend account-ID linking and an async session tie on landing, after a deep study of SameSite and storage partitioning.",
      "Cut page-load latency on a 300+ tenant webpack Module Federation micro-frontend platform by consolidating chunks to remove extra requests; mapped share-key resolution and benchmarked every configuration in Playwright, shipping only options proven safe.",
      "Drove dark-mode theming across 89 tenants; designed a Lambda@Edge cookie rotation that cut theme propagation from 15 minutes to seconds and raised CloudFront cache hits from 8% to 9.3%; root-caused a cross-tenant CSS bleed in a legacy Ruby asset gem.",
      "Migrated Amazon A to Z employee sign-in (hundreds of thousands of users) from native iOS/Android to React Native; owned 8 accessible auth screens and a typed wrapper for 100+ metrics; 4x faster releases.",
      "Architected a two-person review (2PR) authorization workflow as an isolated package, choosing polling over push and WebSockets; closed the security finding that blocked rollout to the US and 12 EU countries.",
      "Delivered identity internationalization for a 59-country expansion: email templates in 27 languages (108 files), per-country feature gates and SES delivery proofs, with zero launch incidents.",
      "Primary on-call for SEV-2 incidents; authored 211 code reviews across 46 packages, reviewed 465+ from 30+ engineers, ran 18 production deployments, and led Secrets Manager remediation for 25+ tenants.",
    ],
  },
  {
    start: "May 2024",
    end: "Aug 2024",
    title: "Software Engineer Intern",
    org: "Prognostic Optimization Group",
    place: "Remote",
    points: [
      "Built a responsive marketing site from Figma designs in React and Tailwind CSS, increasing mobile traffic.",
      "Designed the PostgreSQL schema and SQLAlchemy data layer for a Flask backend; added JWT auth.",
    ],
  },
  {
    start: "Jun 2023",
    end: "Oct 2024",
    title: "Software Developer, AI Trainer",
    org: "DataAnnotation",
    place: "Remote · contract",
    points: ["Evaluated and refined LLM-generated backend and data-visualization code for correctness and quality."],
  },
  {
    start: "May 2023",
    end: "Aug 2023",
    title: "Cloud Administrator Intern",
    org: "Arpa-Cloud",
    place: "Remote",
    points: [
      "Supported senior Azure administrators running private and hybrid cloud infrastructure.",
      "Configured virtual networks, subnets and peering; deployed IaaS; managed IAM roles and resource policies.",
    ],
  },
]

export const education = {
  degree: "B.S. Computer Science",
  school: "Purdue University Northwest",
  place: "Hammond, IN",
  start: "Aug 2021",
  end: "May 2024",
  gpa: "3.87",
  honors: "High honors",
  notes: [
    "Coursework in data structures, algorithms, operating systems, databases and software engineering.",
    "Research with a professor on sublinear-time algorithms for summing n integers, in Python with pandas and NumPy.",
  ],
}

export const certificates = [
  { name: "Microsoft Azure Administrator Associate", date: "Jun 2023" },
  { name: "Microsoft Azure Data Fundamentals", date: "Jul 2023" },
]

export const toolbox: { group: string; items: string[]; proof: string }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "Swift", "Objective-C", "SQL", "C++"], proof: "TypeScript daily at Amazon and at home" },
  { group: "Web & platform", items: ["React", "Next.js", "Webpack 5", "Module Federation", "Node.js", "Bun", "Hono", "NestJS"], proof: "300+ tenant micro-frontend platform at Amazon" },
  { group: "Cloud & edge", items: ["CloudFront", "Lambda@Edge", "AWS WAF", "AWS Lambda", "Amplify", "Azure"], proof: "Platform built from scratch at Amazon" },
  { group: "Auth & security", items: ["Sessions", "Cookies & SameSite", "JWT", "Two-person review", "WAF tuning"], proof: "Two years on Amazon sign-in and sessions" },
  { group: "Mobile", items: ["React Native", "iOS", "Android", "GraphQL", "Accessibility"], proof: "A to Z sign-in, rebuilt in React Native" },
  { group: "Data", items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Drizzle", "Prisma"], proof: "Schemas for Azelify, Exva and Loctelli" },
  { group: "Testing & AI", items: ["Playwright", "Vitest", "CI/CD", "LLM agents", "MCP"], proof: "Latency benchmarks at Amazon; AI tooling at home" },
]

export type Project = {
  slug: string
  name: string
  kind: string
  summary: string
  stack: string[]
  status: string
  links?: { label: string; href: string }[]
  flow?: string[]
}

export const featuredProjects: Project[] = [
  {
    slug: "azelify",
    name: "Azelify",
    kind: "AI video editor",
    summary:
      "An AI video editor you direct by talking to it. Describe a short-form video or hand it a reference, and it plans the shots, builds them as editable clips on a real timeline, writes the caption, and publishes to TikTok, Instagram and YouTube.",
    stack: ["React 19", "Vite", "TanStack Router", "Bun", "Hono", "PostgreSQL", "Drizzle", "Stripe"],
    status: "In development · private",
    flow: ["Prompt or reference", "Shot plan", "Editable timeline", "Render", "Publish"],
  },
  {
    slug: "exva",
    name: "Exva",
    kind: "Trading-bot desktop app",
    summary:
      "A desktop app that runs paper-trading bots around the clock and explains itself. At every closed price bar each bot writes a receipt, BUY, SELL, HOLD or SKIP, with the exact numbers it compared, so “why didn’t it trade?” always has an answer. Backtests run the same code as live trading.",
    stack: ["Electron", "React", "TypeScript", "Bun", "SQLite", "Alpaca API"],
    status: "Working · private",
    flow: ["Bar closes", "Strategy runs", "Receipt: RSI(2) 8.4 < 10", "BUY on paper"],
  },
]

export const otherProjects: Project[] = [
  {
    slug: "ai-receptionist",
    name: "@atchonk/ai-receptionist",
    kind: "Open-source SDK on npm",
    summary: "A TypeScript SDK for an AI receptionist that answers calls, texts and email, books appointments and remembers returning customers.",
    stack: ["TypeScript", "OpenAI / OpenRouter", "Twilio", "Postmark", "Google Calendar"],
    status: "Published",
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/@atchonk/ai-receptionist" },
      { label: "GitHub", href: "https://github.com/KennethAtchon/AI-receptionist" },
    ],
  },
  {
    slug: "recall",
    name: "Recall",
    kind: "Desktop learning app",
    summary: "Bite-size interactive lessons in the style of Brilliant, FSRS-5 spaced repetition, and a system-design canvas that grades the design you build.",
    stack: ["Electron", "JavaScript", "FSRS-5"],
    status: "Working",
    links: [{ label: "GitHub", href: "https://github.com/KennethAtchon/Tester" }],
  },
  {
    slug: "second-brain",
    name: "Second Brain",
    kind: "Memory for AI coding agents",
    summary: "A Markdown knowledge base with hybrid keyword and semantic search, served over MCP to Claude Code, Codex, OpenCode and Cursor.",
    stack: ["Python", "SQLite FTS5", "Embeddings", "MCP"],
    status: "Daily driver · private",
  },
  {
    slug: "loctelli",
    name: "Loctelli",
    kind: "CRM for small businesses",
    summary: "Lead tracking, bookings, and AI-assisted chat and sales strategies.",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Redis", "Next.js"],
    status: "Working",
    links: [{ label: "GitHub", href: "https://github.com/KennethAtchon/Loctelli" }],
  },
  {
    slug: "local-llm",
    name: "local-llm",
    kind: "Local inference lab",
    summary: "Running open-weight models locally on Apple silicon with llama.cpp: serving setup, benchmarks and runbooks.",
    stack: ["Python", "llama.cpp", "llama-swap"],
    status: "Ongoing",
    links: [{ label: "GitHub", href: "https://github.com/KennethAtchon/local-llm" }],
  },
]

export const archive = [
  { name: "Trivowear", href: "https://github.com/KennethAtchon/Trivowear" },
  { name: "Broovie", href: "https://github.com/KennethAtchon/Broovie" },
  { name: "E-commerce (CS442)", href: "https://github.com/KennethAtchon/Ecommerce-Website-CS442" },
  { name: "POG AI", href: "https://github.com/KennethAtchon/POGAI" },
  { name: "Unital", href: "https://github.com/KennethAtchon/Unital" },
  { name: "Bug Tracker", href: "https://github.com/KennethAtchon/Bug-Tracker" },
]

// Home page copy transcribed from the editorial mock (Swiss Editorial Software Portfolio.png).
export const hero = {
  headline: ["Thoughtful code.", "Meaningful products."],
  intro: "I’m a software engineer who cares about elegant systems, impactful products, and the people who use them.",
  cta: "See my work",
  role: "Software engineer",
  based: "Based in Seattle, WA",
  tagline: "Building a more human internet",
}

export type CardImage = {
  src: string
  alt: string
  /** "device" shows a real product screenshot in a tilted device frame. */
  frame?: "device"
  credit?: { name: string; url: string }
}

export type Card = {
  slug: string
  category: string
  title: string
  blurb: string
  image: CardImage
}

const unsplash = (name: string, id: string) => ({ name, url: `https://unsplash.com/photos/${id}` })

export const cards: Card[] = [
  {
    slug: "platform",
    category: "Amazon · Platform",
    title: "Edge Platform",
    blurb: "A multi-tenant platform built from scratch. CloudFront, Lambda@Edge and WAF; tenants join with a code review.",
    image: { src: "/images/seattle-dawn.webp", alt: "Seattle skyline and Mount Rainier at dawn", credit: unsplash("Andrew S", "pulhUnQfLpI") },
  },
  {
    slug: "exva",
    category: "Product · Desktop",
    title: "Exva",
    blurb: "Paper-trading bots that explain every decision. Receipts, backtests and live runs in one calm app.",
    image: { src: "/images/exva-home.webp", alt: "Exva home screen in demo mode: equity chart, journal and three bots with their latest receipts", frame: "device" },
  },
  {
    slug: "sessions",
    category: "Amazon · Auth",
    title: "Cross-Site Sessions",
    blurb: "Signed in on one site, signed in on the next, on a web that blocks third-party cookies.",
    image: { src: "/images/seattle-towers-fog.webp", alt: "Looking up at Seattle towers in fog", credit: unsplash("Josh Hild", "EExcDxoVtRs") },
  },
  {
    slug: "federation",
    category: "Amazon · Performance",
    title: "Federated Frontend",
    blurb: "A 300+ tenant micro-frontend platform that loads faster, chosen by measuring every webpack option.",
    image: { src: "/images/misty-forest.webp", alt: "Evergreen forest in fog", credit: unsplash("Hannah Reding", "9FldvW9GQTM") },
  },
  {
    slug: "react-native",
    category: "Amazon · Mobile",
    title: "A to Z Sign-In",
    blurb: "Two native sign-in codebases rebuilt as one React Native package, accessible from day one.",
    image: { src: "/images/misty-trees.webp", alt: "Tall evergreen trees emerging from mist", credit: unsplash("Roberto Shumski", "VJ5k8_oYl_4") },
  },
  {
    slug: "azelify",
    category: "Product · AI",
    title: "Azelify",
    blurb: "An AI video editor you direct by talking to it. Plan, edit, caption and publish in one place.",
    image: { src: "/images/mountain-forest.webp", alt: "Misty mountains above a dense evergreen forest", credit: unsplash("Laura Chouette", "2BI0UWMXxF8") },
  },
  {
    slug: "two-person",
    category: "Amazon · Security",
    title: "Two-Person Review",
    blurb: "A second approval before any demo session, which opened demo mode in 13 countries.",
    image: { src: "/images/seattle-haze.webp", alt: "Seattle skyline and the Space Needle on a hazy day", credit: unsplash("Julian Falk", "q762deczExA") },
  },
  {
    slug: "alumni",
    category: "Amazon · Launch",
    title: "Alumni Lite",
    blurb: "A global, feature-gated launch with email in 27 languages for people leaving or changing roles.",
    image: { src: "/images/foggy-shore.webp", alt: "Rocky shoreline disappearing into fog", credit: unsplash("Brandon Griggs", "Y3PW7OtsmpY") },
  },
]
