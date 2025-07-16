import { OverviewSection } from "./sections/overview-section"
import { DataAugmentationSection } from "./sections/data-augmentation-section"
import { GANArchitectureSection } from "./sections/gan-architecture-section"
import { MathematicsSection } from "./sections/mathematics-section"
import { ValidationSection } from "./sections/validation-section"
import { ApplicationsSection } from "./sections/applications-section"
import { RoadmapSection } from "./sections/roadmap-section"

interface MainContentProps {
  activeSection: string
  expandedCards: Record<string, boolean>
  toggleCard: (id: string) => void
}

export function MainContent({ activeSection, expandedCards, toggleCard }: MainContentProps) {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {activeSection === "overview" && <OverviewSection expandedCards={expandedCards} toggleCard={toggleCard} />}
      {activeSection === "data-augmentation" && (
        <DataAugmentationSection expandedCards={expandedCards} toggleCard={toggleCard} />
      )}
      {activeSection === "gan-architecture" && (
        <GANArchitectureSection expandedCards={expandedCards} toggleCard={toggleCard} />
      )}
      {activeSection === "mathematics" && <MathematicsSection expandedCards={expandedCards} toggleCard={toggleCard} />}
      {activeSection === "validation" && <ValidationSection expandedCards={expandedCards} toggleCard={toggleCard} />}
      {activeSection === "applications" && (
        <ApplicationsSection expandedCards={expandedCards} toggleCard={toggleCard} />
      )}
      {activeSection === "roadmap" && <RoadmapSection expandedCards={expandedCards} toggleCard={toggleCard} />}
    </main>
  )
}
