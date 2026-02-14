export function CtaSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-sm border border-border bg-card p-10 md:p-16 lg:p-20">
          {/* Decorative corner marks */}
          <div className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-primary opacity-40" />
          <div className="absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-primary opacity-40" />
          <div className="absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-primary opacity-40" />
          <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-primary opacity-40" />

          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Early Access
            </span>
            <h2 className="mt-4 text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Turn your supply chain into a competitive advantage.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              IFactory is not just an application — it is a comprehensive
              operational operating system designed for the modern food
              industry.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@amchimumbai.com"
                className="w-full rounded-sm bg-primary px-10 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
              >
                Request a Demo
              </a>
              <a
                href="#platform"
                className="w-full rounded-sm border border-border px-10 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary sm:w-auto"
              >
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
