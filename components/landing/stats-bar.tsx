const stats = [
  { value: "90%", label: "Less data entry", sublabel: "AI replaces manual billing" },
  { value: "0", label: "Communication gaps", sublabel: "Digital queues end verbal chaos" },
  { value: "2", label: "Languages supported", sublabel: "English & Hindi, ground up" },
  { value: "Real-time", label: "Financial audit", sublabel: "Automated GST & price tracking" },
]

export function StatsBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col px-6 py-8 ${
              i < stats.length - 1 ? "border-b border-border lg:border-b-0 lg:border-r" : ""
            } ${i === 1 ? "border-r border-border lg:border-r" : ""} ${i === 0 ? "border-r border-border" : ""} ${i === 2 ? "border-r border-border" : ""}`}
          >
            <span className="font-serif text-3xl font-bold text-primary md:text-4xl">
              {stat.value}
            </span>
            <span className="mt-2 text-sm font-semibold text-foreground">
              {stat.label}
            </span>
            <span className="mt-1 text-xs text-muted-foreground">
              {stat.sublabel}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
