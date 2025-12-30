import { Card } from "@/components/ui/card"

interface Project {
  name: string
  summary: string
  problem: string
  solution: string
  impact: string
  techStack: string[]
}

const projects: Project[] = [
  {
    name: "Distributed Task Scheduler",
    summary: "High-performance task scheduling system for microservices architecture",
    problem:
      "Legacy monolithic cron jobs were failing silently, causing data inconsistencies and requiring manual intervention.",
    solution:
      "Built a distributed task scheduler with Redis-backed queues, automatic retry logic, and real-time monitoring. Implemented idempotent task handlers and circuit breakers for external service calls.",
    impact:
      "Reduced task failures by 95% and eliminated manual interventions. Processing throughput increased 10x while maintaining sub-second latency.",
    techStack: ["Node.js", "Redis", "PostgreSQL", "Docker", "Prometheus"],
  },
  {
    name: "API Gateway Optimization",
    summary: "Performance overhaul of high-traffic API gateway serving 50M+ daily requests",
    problem:
      "API gateway was experiencing high latency (p95 > 2s) and frequent timeouts during peak traffic, impacting user experience.",
    solution:
      "Profiled and identified bottlenecks in authentication middleware and database queries. Implemented connection pooling, query optimization, and multi-level caching strategy. Added request batching for downstream services.",
    impact:
      "Reduced p95 latency from 2.1s to 180ms. Decreased infrastructure costs by 40% through more efficient resource utilization.",
    techStack: ["Go", "PostgreSQL", "Redis", "Kubernetes", "Grafana"],
  },
  {
    name: "Real-time Analytics Dashboard",
    summary: "Low-latency analytics platform for business intelligence",
    problem:
      "Business stakeholders lacked visibility into real-time metrics, relying on stale reports generated overnight.",
    solution:
      "Designed streaming data pipeline using event sourcing patterns. Built aggregation layer with time-windowed computations and materialized views. Created responsive dashboard with WebSocket updates.",
    impact:
      "Enabled real-time decision making with sub-second data freshness. Adopted by 200+ users across 5 departments within first quarter.",
    techStack: ["React", "TypeScript", "Kafka", "ClickHouse", "WebSockets"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-32 bg-secondary/10">
      <div className="space-y-14">
        <div className="space-y-6">
          <div className="relative inline-block">
            <h2 className="text-5xl font-black tracking-tight text-foreground md:text-7xl uppercase relative z-10">
              Things I've Built
            </h2>
            <div className="absolute -bottom-2 left-0 w-3/4 h-4 bg-accent -z-10" />
          </div>
          <p className="text-xl md:text-2xl text-foreground max-w-2xl leading-relaxed font-bold uppercase">
            A selection of projects that kept me up at night (in a good way, mostly)
          </p>
        </div>

        <div className="grid gap-10">
          {projects.map((project, index) => {
            // Use white background for Real-time Analytics Dashboard for better contrast
            const bgColor = project.name === "Real-time Analytics Dashboard" 
              ? "bg-white" 
              : ["bg-secondary/30", "bg-muted/30", "bg-accent/30"][index % 3]
            const borderColors = ["border-secondary", "border-muted", "border-accent"]
            return (
              <Card
                key={project.name}
                className={`group p-10 md:p-12 ${bgColor} border-4 border-foreground shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200`}
              >
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-tight border-b-4 border-foreground pb-2 inline-block">
                      {project.name}
                    </h3>
                    <p className="text-lg md:text-xl text-foreground font-bold">{project.summary}</p>
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
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
