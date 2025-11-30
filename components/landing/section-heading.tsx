import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  lead?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({ eyebrow, title, lead, align = "center", className }: SectionHeadingProps) {
  const centered = align === "center"
  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:gap-3",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  )
}