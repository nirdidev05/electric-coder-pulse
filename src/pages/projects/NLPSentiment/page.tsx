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
import { ProjectTechShowcase } from "@/components/ProjectTechShowcase"

export default function MarketPulseTechnicalShowcase() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Intelligent Background - Complementary to Hero but Different */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient - similar to hero but inverted flow */}
        <div className="absolute inset-0 bg-gradient-to-tl from-[#1E1E2F] via-[#2D3748] to-[#1A202C]" />
        
        {/* Subtle animated grid - less opacity than hero */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(#646cff15 1px, transparent 1px),
              linear-gradient(90deg, #646cff15 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Flowing gradient overlay - creates depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E1E2F]/20 to-[#1E1E2F]/60" />
        
        {/* Subtle radial gradient for focus */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at center, transparent, rgba(100, 108, 255, 0.05), transparent)'
          }}
        />
      </div>

      {/* Content with proper spacing and background interaction */}
      <div className="relative z-10">
        <HeroSection />
        <ProjectContext />
        <TechnicalMethodology />
        <PortfolioDocumentation />
        <ProjectTechShowcase projectId="nlp-sentiment" className="py-20" />
        <FutureDirections />
        <CompetitionResults />
        <TechnicalInnovations />
        <ConclusionSection />
      </div>
    </div>
  )
}