"use client"

import { useState } from "react"
import {
  ShoppingCart,
  ClipboardCheck,
  ChefHat,
  Package,
  Truck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const stages = [
  {
    id: "request",
    label: "Outlet Request",
    icon: ShoppingCart,
    description:
      "Outlets monitor local stock and place item requests to their linked factory. Only items the factory can produce are visible.",
    color: "text-primary",
  },
  {
    id: "approval",
    label: "Factory Approval",
    icon: ClipboardCheck,
    description:
      "Admins or factory managers accept or decline multiple requests in a single bulk action. No phone calls. No WhatsApp.",
    color: "text-primary",
  },
  {
    id: "production",
    label: "Production Queue",
    icon: ChefHat,
    description:
      "The kitchen sees a prioritized list of items to cook. Staff mark items as produced, moving them instantly to the next stage.",
    color: "text-primary",
  },
  {
    id: "packaging",
    label: "Packaging",
    icon: Package,
    description:
      "Packaging staff see exactly what has been cooked and for which outlet. They mark items as packed and ready for dispatch.",
    color: "text-primary",
  },
  {
    id: "transit",
    label: "In Transit",
    icon: Truck,
    description:
      "Granular transit tracking with instant notifications. Every stakeholder knows exactly where every item is at all times.",
    color: "text-primary",
  },
  {
    id: "delivered",
    label: "Delivered",
    icon: CheckCircle2,
    description:
      "Delivery confirmation with full audit trail. Which user packed which item, when it was dispatched, when it arrived.",
    color: "text-primary",
  },
]

export function WorkflowSection() {
  const [activeStage, setActiveStage] = useState(0)

  return (
    <section id="workflow" className="border-y border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            The State Machine
          </span>
          <h2 className="mt-4 text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Every item has a lifecycle.
            <br />
            Every lifecycle is tracked.
          </h2>
        </div>

        {/* Workflow visualization */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left: stage selector pipeline */}
          <div className="flex-1">
            <div className="relative">
              {stages.map((stage, i) => {
                const Icon = stage.icon
                const isActive = i === activeStage
                const isPast = i < activeStage

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(i)}
                    className={`group relative flex w-full items-start gap-4 py-4 text-left transition-all ${
                      i < stages.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    {/* Vertical connector line */}
                    {i < stages.length - 1 && (
                      <div
                        className={`absolute left-5 top-14 h-[calc(100%-2rem)] w-px transition-colors ${
                          isPast ? "bg-primary" : "bg-border"
                        }`}
                      />
                    )}

                    {/* Icon */}
                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border transition-all ${
                        isActive
                          ? "border-primary bg-primary text-primary-foreground"
                          : isPast
                          ? "border-primary/50 bg-primary/20 text-primary"
                          : "border-border bg-background text-muted-foreground group-hover:border-primary/30"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    {/* Label */}
                    <div className="flex flex-1 items-center justify-between">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {"Phase "}
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p
                          className={`text-sm font-semibold transition-colors ${
                            isActive ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {stage.label}
                        </p>
                      </div>
                      {isActive && (
                        <ArrowRight size={16} className="text-primary" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: active stage detail */}
          <div className="flex flex-1 items-center">
            <div className="w-full rounded-sm border border-border bg-background p-8 md:p-12">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-sm bg-primary/10 text-primary">
                {(() => {
                  const ActiveIcon = stages[activeStage].icon
                  return <ActiveIcon size={28} />
                })()}
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {"Phase "}
                {String(activeStage + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl">
                {stages[activeStage].label}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {stages[activeStage].description}
              </p>

              {/* Status badge */}
              <div className="mt-8 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse-glow rounded-full bg-primary" />
                <span className="font-mono text-xs text-primary">
                  Live sync active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
