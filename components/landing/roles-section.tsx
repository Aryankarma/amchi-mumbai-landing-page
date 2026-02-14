"use client";

import { useState } from "react";
import { Shield, Warehouse, ChefHat, Package, Store } from "lucide-react";

const roles = [
  {
    id: "admin",
    icon: Shield,
    title: "Super Admin",
    responsibility:
      "Platform oversight, user management, and global analytics.",
    value: "Strategic visibility into sales trends and system health.",
  },
  {
    id: "inventory",
    icon: Warehouse,
    title: "Inventory Manager",
    responsibility:
      "Raw material sourcing, vendor management, and stock auditing.",
    value: "Reduction in waste and automated stock reconciliation.",
  },
  {
    id: "factory",
    icon: ChefHat,
    title: "Factory / Kitchen",
    responsibility:
      "Large-scale production, cooking queue management, and capacity planning.",
    value: "Streamlined production schedules based on actual demand.",
  },
  {
    id: "packaging",
    icon: Package,
    title: "Packaging Team",
    responsibility: "Quality control, portioning, and dispatch preparation.",
    value: "Error-free fulfillment and granular transit tracking.",
  },
  {
    id: "outlet",
    icon: Store,
    title: "Outlet Manager",
    responsibility:
      "Real-time ordering, inventory requests, and delivery confirmation.",
    value: "One-tap procurement and reduced communication friction.",
  },
];

export function RolesSection() {
  const [activeRole, setActiveRole] = useState(0);

  return (
    <section id="roles" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Multi-Stakeholder
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            One platform.
            <br />
            Five distinct command centers.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Unlike generic ERP systems, IFactory provides tailored interfaces
            for every specific role in the food supply chain.
          </p>
        </div>

        {/* Role tabs — horizontal on desktop, stacked on mobile */}
        <div className="mb-10 flex flex-wrap gap-2">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(i)}
                className={`flex items-center gap-2 rounded-sm border px-4 py-2.5 text-sm font-medium transition-all ${
                  i === activeRole
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                <Icon size={16} />
                {role.title}
              </button>
            );
          })}
        </div>

        {/* Active role detail */}
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          <div className="flex flex-col justify-center bg-background p-8 md:p-12">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Primary Responsibilities
            </span>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {roles[activeRole].responsibility}
            </p>
          </div>
          <div className="flex flex-col justify-center bg-card p-8 md:p-12">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Value Added
            </span>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {roles[activeRole].value}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
