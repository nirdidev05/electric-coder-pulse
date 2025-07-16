import { TechnicalOverviewCard } from "../cards/technical-overview-card"
import { MetricsGrid } from "../metrics-grid"
import { ArchitectureDiagram } from "../cards/architecture-diagram"
import { IntroductionCard } from "../cards/introduction-card"

interface OverviewSectionProps {
  expandedCards: Record<string, boolean>
  toggleCard: (id: string) => void
}

export function OverviewSection({ expandedCards, toggleCard }: OverviewSectionProps) {
  return (
    <div className="space-y-8">
      <IntroductionCard expanded={expandedCards.introduction} toggle={() => toggleCard("introduction")} />
      <TechnicalOverviewCard expanded={expandedCards.overview} toggle={() => toggleCard("overview")} />
      <MetricsGrid />
      <ArchitectureDiagram expanded={expandedCards.architecture} toggle={() => toggleCard("architecture")} />
    </div>
  )
}
