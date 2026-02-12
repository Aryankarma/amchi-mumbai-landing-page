import { Scan, Brain, Languages } from "lucide-react"

const features = [
  {
    icon: Scan,
    title: "AI-Driven Procurement",
    description:
      "Staff photograph physical invoices. The AI extracts items, quantities, prices, and GST data instantly. No more manual data entry.",
    detail: "Powered by Gemini 2.0 Flash Lite",
  },
  {
    icon: Brain,
    title: "Intelligent Normalization",
    description:
      'Proprietary logic handles Hinglish, misspellings, and regional variations. "Tamatar," "Tamato," and "Tomato" all resolve to one stock item.',
    detail: "Synonym mapping across vendors",
  },
  {
    icon: Languages,
    title: "Ground-Up Accessibility",
    description:
      "Dual-language support ensures that ground-level kitchen staff can navigate the entire system with minimal training.",
    detail: "English & Hindi natively",
  },
]

export function PlatformSection() {
  return (
    <section id="platform" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header — left aligned, editorial */}
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            The AI Layer
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Invoices go in.
            <br />
            Intelligence comes out.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            The procurement engine is the entry point for all raw materials. A
            single photograph replaces fifteen minutes of manual ledger work.
          </p>
        </div>

        {/* Feature cards — asymmetric grid */}
        <div className="grid gap-px bg-border md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-card md:p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm border border-border bg-card text-primary transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                <feature.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <span className="mt-6 inline-block font-mono text-xs text-primary">
                {feature.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
