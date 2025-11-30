import { Quote } from "lucide-react"
import { SectionHeading } from "./section-heading"

const reviews = [
  {
    name: "Nora Patel",
    role: "Revenue Ops, Ledgerly",
    content:
      "Our approvals used to stall every other day. Forma helped us capture context once and reuse it everywhere, so we close the loop before the next standup.",
  },
  {
    name: "Luis Romero",
    role: "COO, Harbor",
    content:
      "The team finally trusts the forecast again. The shared ritual panel keeps every exec looking at the same notes instead of a dozen tabs.",
  },
  {
    name: "Amelia Boyd",
    role: "Head of Finance, Northwind",
    content:
      "We sized a new regional launch in a week because Forma stitched actuals, demand signals, and procurement statuses into one lightweight workspace.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary/30 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-10 px-3 sm:px-4 sm:space-y-12 md:px-6 md:space-y-14 lg:px-8 xl:px-10">
        <SectionHeading
          eyebrow="Proof"
          title="Quiet confidence from revenue teams"
          lead="Leaders across ops, finance, and sales lean on Forma when they need answers faster than another meeting invite."
        />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col gap-4 rounded-xl border border-border/60 bg-card/70 p-6 shadow-sm sm:rounded-2xl sm:gap-6 sm:p-8"
            >
              <Quote className="size-5 text-primary sm:size-6" />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">{review.content}</p>
              <div>
                <p className="text-sm font-semibold text-foreground sm:text-base">{review.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}