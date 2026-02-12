import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { StatsBar } from "@/components/landing/stats-bar"
import { PlatformSection } from "@/components/landing/platform-section"
import { WorkflowSection } from "@/components/landing/workflow-section"
import { RolesSection } from "@/components/landing/roles-section"
import { StackSection } from "@/components/landing/stack-section"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <PlatformSection />
      <WorkflowSection />
      <RolesSection />
      <StackSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
