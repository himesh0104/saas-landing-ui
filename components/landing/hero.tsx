import { ArrowRight, Play, SignalHigh } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { label: "Product", href: "#product" },
  { label: "Stories", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
]

const stats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "12k+", label: "Weekly automations" },
  { value: "48hrs", label: "Faster approvals" },
]

const signals = [
  { label: "Forecast", time: "Now", progress: "w-3/4" },
  { label: "Approvals", time: "5m ago", progress: "w-1/2" },
  { label: "Escalations", time: "Today", progress: "w-1/3" },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
      <div className="absolute inset-x-0 -top-16 flex justify-center opacity-30" aria-hidden="true">
        <div className="h-64 w-full max-w-[28rem] rounded-full bg-primary/15 blur-[100px] sm:h-80 sm:max-w-[32rem]" />
      </div>
      <div className="mx-auto max-w-7xl px-3 py-12 sm:px-4 sm:py-16 md:px-6 lg:px-8 lg:py-24 xl:px-10">
        <header className="mb-12 flex flex-col gap-4 text-sm text-muted-foreground sm:mb-16 sm:flex-row sm:items-center sm:justify-between lg:mb-20">
          <p className="text-base font-semibold text-foreground sm:text-lg">Forma</p>
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap gap-4 sm:gap-6">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
              Log in
            </Button>
            <Button size="sm" className="text-xs sm:text-sm">Join the beta</Button>
          </div>
        </header>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 xl:gap-20">
          <div className="space-y-8 sm:space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:px-4 sm:text-xs">
              Live status
              <SignalHigh className="size-2.5 sm:size-3" />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] xl:leading-[1.1]">
                Calm, confident operations for modern revenue teams
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl lg:leading-relaxed">
                Forma weaves revenue insights, approvals, and team rituals into one quiet interface so you can ship decisions faster than the market moves.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Start free workspace
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Watch demo
                <Play className="size-4" />
              </Button>
            </div>
            <dl className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs text-muted-foreground sm:text-sm">{stat.label}</dt>
                  <dd className="mt-1 text-xl font-semibold text-foreground sm:text-2xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-2xl border border-primary/15 bg-card/70 p-6 shadow-lg shadow-primary/10 ring-1 ring-primary/5 backdrop-blur-sm sm:rounded-3xl sm:p-8 md:p-10">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <p className="text-xs font-medium text-muted-foreground sm:text-sm">Pipeline pulse</p>
                <p className="mt-1 text-3xl font-semibold text-foreground sm:text-4xl">$4.2M</p>
                <p className="mt-1 text-xs text-emerald-600 sm:text-sm">+18% vs last quarter</p>
              </div>
              <div className="grid gap-3 sm:gap-4">
                {signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-xl border border-border/60 bg-background/50 p-3 sm:rounded-2xl sm:p-4"
                  >
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <p className="font-medium text-foreground">{signal.label}</p>
                      <span className="text-muted-foreground">{signal.time}</span>
                    </div>
                    <div className="mt-2.5 h-1.5 rounded-full bg-secondary sm:mt-3 sm:h-2">
                      <div className={`h-full rounded-full bg-primary transition-all ${signal.progress}`} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 rounded-xl border border-border/60 bg-background/50 p-4 sm:flex-row sm:items-center sm:justify-between sm:rounded-2xl sm:p-5">
                <div>
                  <p className="text-xs text-muted-foreground sm:text-sm">Next review</p>
                  <p className="mt-0.5 text-base font-semibold text-foreground sm:text-lg">Friday, 10:00 AM</p>
                </div>
                <Button size="sm" variant="outline" className="w-full sm:w-auto">
                  Add to calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}