import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "./section-heading"

const plans = [
  {
    name: "Starter",
    price: 32,
    description: "Lightweight rituals for focused pods",
    features: ["Up to 8 seats", "Pipeline snapshots", "Calendar sync", "Email support"],
    featured: false,
  },
  {
    name: "Growth",
    price: 74,
    description: "Automation and rituals in one confident toolkit",
    features: [
      "Unlimited workspaces",
      "Approval routing",
      "CRM integrations",
      "Analytics exports",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: 168,
    description: "Security-first controls for layered teams",
    features: [
      "SSO + SCIM",
      "Custom governance",
      "Dedicated CSM",
      "Private rollout playbooks",
      "24/7 coverage",
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-12 px-3 sm:px-4 sm:space-y-14 md:px-6 md:space-y-16 lg:px-8 xl:px-10">
        <SectionHeading
          eyebrow="Plans"
          title="Pick a runway that matches your pace"
          lead="Every plan unlocks the same calm fundamentals. Step up only when your rituals need more orchestration."
        />
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? "rounded-2xl border border-primary bg-card/90 p-6 shadow-lg shadow-primary/15 ring-1 ring-primary/10 sm:rounded-3xl sm:p-8"
                  : "rounded-2xl border border-border/50 bg-card/60 p-6 sm:rounded-3xl sm:p-8"
              }
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="text-xs text-muted-foreground sm:text-sm">{plan.description}</p>
                  <h3 className="mt-1.5 text-xl font-semibold text-foreground sm:mt-2 sm:text-2xl">{plan.name}</h3>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-3xl font-semibold text-foreground sm:text-4xl">${plan.price}</p>
                  <span className="text-xs text-muted-foreground sm:text-sm">per seat</span>
                </div>
              </div>
              <Button
                size="lg"
                className="mt-6 w-full justify-between sm:mt-8"
                variant={plan.featured ? "default" : "outline"}
              >
                Launch workspace
                <ArrowRight className="size-4" />
              </Button>
              <ul className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-xs text-foreground sm:text-sm">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-primary sm:size-4" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="rounded-2xl border border-dashed border-primary/30 bg-secondary/20 px-4 py-8 text-center sm:rounded-3xl sm:px-6 sm:py-10 md:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary sm:text-sm">Need a bespoke rollout?</p>
          <p className="mt-2.5 text-xl font-semibold leading-tight text-foreground sm:mt-3 sm:text-2xl">
            Book time with our solutions team for layered deployments.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            We set up permissions, rituals, and integrations alongside your leads.
          </p>
          <Button size="lg" className="mt-5 sm:mt-6">
            Chat with sales
          </Button>
        </div>
      </div>
    </section>
  )
}