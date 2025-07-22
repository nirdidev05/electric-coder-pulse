import HeroSection from "@/components/hero-sectione"
import TableOfContents from "@/components/table-of-contents"
import ProjectContext from "@/components/project-context"
import TechnicalMethodology from "@/components/technical-methodology"
import PortfolioDocumentation from "@/components/portfolio-documentation"
import CodeReview from "@/components/code-review"
import FutureDirections from "@/components/future-directions"
import CompetitionResults from "@/components/competition-results"
import TechnicalInnovations from "@/components/technical-innovations"
import ConclusionSection from "@/components/conclusion-section"

export default function MarketPulseTechnicalShowcase() {
  return (
<div className="min-h-screen bg-gradient-to-br from-[#1E1E2F] to-[#6C757D]">  
      <HeroSection />
      <TableOfContents />
      <ProjectContext />
     < TechnicalMethodology />
      <PortfolioDocumentation />
      <CodeReview />
      <FutureDirections />
      <CompetitionResults />
      <TechnicalInnovations />
      <ConclusionSection />
    </div>
  )
}
