import { BarChart3, Zap, FileSpreadsheet, ShieldCheck } from "lucide-react"
import { SectionHeading } from "./section-heading"

const featureList = [
  {
    icon: BarChart3,
    title: "Live revenue visibility",
    description: "Roll up every pipeline, forecast, and renewal signal into one dependable view your team trusts.",
  },
  {
    icon: Zap,
    title: "Workflow automation",
    description: "Route approvals, reminders, and handoffs automatically so deals never idle in review queues.",
  },
  {
    icon: FileSpreadsheet,
    title: "Client-ready reporting",
    description: "Share branded status docs generated in seconds with context, blockers, and next steps already framed.",
  },
  {
    icon: ShieldCheck,
    title: "Granular controls",
    description: "SOC 2-ready permissions keep finance, sales, and leadership aligned without exposing sensitive work.",
  },
]

const rituals = [
  {
    title: "Forecast standup",
    detail: "Ops leads drop in once a week to check progression, variance, and risk notes.",
    status: "12 min avg",
  },
  {
    title: "Deal desk",
    detail: "Structured workflow keeps procurement, legal, and sales in the same doc.",
    status: "9 touchpoints",
  },
  {
    title: "Quarterly brief",
    detail: "Auto-generated decks condense insights for exec readouts in under five clicks.",
    status: "< 5 slides",
  },
]

export default function Features() {
  return (
    <section id="product" className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
          <SectionHeading
            eyebrow="Product"
            title="Run revenue operations without duct tape"
            lead="Forma keeps your rituals, documentation, and approvals stitched together so the business can move quietly but decisively."
            align="left"
          />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 xl:gap-16">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {featureList.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-xl border border-border/60 bg-card/70 p-5 shadow-sm sm:rounded-2xl sm:p-6"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary sm:mb-4 sm:h-10 sm:w-10">
                    <Icon className="size-4 sm:size-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{description}</p>
                </article>
              ))}
            </div>
            <aside className="rounded-2xl border border-primary/15 bg-gradient-to-b from-card to-secondary/30 p-6 shadow-sm sm:rounded-[32px] sm:p-8">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-primary sm:text-sm">Ops rituals, documented</p>
                <p className="text-xl font-semibold leading-tight text-foreground sm:text-2xl">
                  Every recurring review prepped before the meeting starts.
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Drop any ritual into the right-hand panel to see the latest context, owners, and confident next steps.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
                {rituals.map((ritual) => (
                  <div
                    key={ritual.title}
                    className="rounded-xl border border-border/60 bg-background/70 p-4 sm:rounded-2xl sm:p-5"
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-medium text-foreground sm:text-base">{ritual.title}</p>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
                        {ritual.status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{ritual.detail}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}