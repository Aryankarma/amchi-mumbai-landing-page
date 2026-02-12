const footerLinks = {
  Platform: ["AI Procurement", "Production Queues", "Multi-Unit Sync", "Role Management"],
  Company: ["About", "Careers", "Contact", "Press"],
  Resources: ["Documentation", "API Reference", "Changelog", "Status"],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary">
                <span className="text-sm font-bold text-primary-foreground font-mono">AM</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Amchi Mumbai
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The operating system for food supply chains. Built in Mumbai, for
              the world.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {category}
                </span>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-foreground/70 transition-colors hover:text-primary"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <span className="text-xs text-muted-foreground">
            {"2026 Amchi Mumbai. All rights reserved."}
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
