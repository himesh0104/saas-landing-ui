import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const links = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "#product" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Docs", href: "#" },
      { label: "Status", href: "#" },
      { label: "Contact", href: "mailto:hello@forma.com" },
    ],
  },
]

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@forma.com" },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-3 py-12 sm:px-4 sm:py-14 md:px-6 md:py-16 lg:px-8 xl:px-10">
        <div className="flex flex-col gap-8 border-b border-border/60 pb-8 sm:gap-10 sm:pb-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 sm:space-y-3">
            <p className="text-lg font-semibold text-foreground sm:text-xl">Forma</p>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Calm operating system for revenue teams building momentum without more meetings.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-10"
              >
                <Icon className="size-4 sm:size-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          {links.map((section) => (
            <div key={section.title} className="space-y-3 sm:space-y-4">
              <p className="text-xs font-semibold text-foreground sm:text-sm">{section.title}</p>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm sm:text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-3 rounded-xl border border-border/60 bg-secondary/20 p-4 sm:rounded-2xl sm:space-y-4 sm:p-6">
            <p className="text-xs font-semibold text-foreground sm:text-sm">Keep up with releases</p>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Monthly notes on new rituals, integrations, and launch playbooks.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-input bg-transparent px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 text-xs text-muted-foreground sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>© {new Date().getFullYear()} Forma Labs. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#" className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}