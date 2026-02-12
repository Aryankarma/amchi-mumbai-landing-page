const stackItems = [
  {
    category: "Frontend",
    items: ["Next.js 15", "React 19", "App Router"],
    note: "Leading-edge performance with server components",
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Radix UI"],
    note: "Premium, responsive interfaces",
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Drizzle ORM"],
    note: "Complex relational mapping for supply chain logic",
  },
  {
    category: "Auth",
    items: ["Session-Based", "RBAC"],
    note: "Granular role-based access control",
  },
  {
    category: "AI",
    items: ["Gemini 2.0", "OCR Engine"],
    note: "Real-time data extraction from invoices",
  },
  {
    category: "State",
    items: ["React Query"],
    note: "Efficient server-state sync and caching",
  },
]

export function StackSection() {
  return (
    <section id="stack" className="border-y border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Technical Foundation
            </span>
            <h2 className="mt-4 text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Built on a hardened
              <br />
              modern stack.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every technology choice is deliberate — optimized for the speed,
            reliability, and complexity that food supply chains demand.
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {stackItems.map((stack) => (
            <div
              key={stack.category}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-background/80"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                {stack.category}
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-border bg-card px-3 py-1 font-mono text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {stack.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
