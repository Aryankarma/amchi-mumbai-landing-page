import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-kitchen.jpg"
          alt="A busy commercial kitchen during service"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32">
        {/* Overline tag */}
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-block h-px w-12 bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Supply Chain OS
          </span>
        </div>

        {/* Main headline — asymmetric, large */}
        <h1 className="max-w-4xl text-balance font-serif text-5xl font-bold leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
          Your kitchen runs on instinct.{" "}
          <span className="text-primary">Your supply chain shouldn{"'"}t.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Amchi Mumbai replaces verbal orders, paper invoices, and guesswork
          with AI-powered procurement, real-time production queues, and instant
          multi-unit sync.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request Early Access
          </a>
          <a
            href="#platform"
            className="rounded-sm border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Explore the Platform
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex items-center gap-3 text-muted-foreground">
          <ArrowDown size={16} className="animate-bounce" />
          <span className="font-mono text-xs uppercase tracking-widest">
            Scroll to discover
          </span>
        </div>
      </div>
    </section>
  )
}
