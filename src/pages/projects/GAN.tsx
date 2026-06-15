"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { NavigationBar } from "@/components/navigation-bar"
import { MainContent } from "@/components/main-content"
import { Footer } from "@/components/footer-copy"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { ProjectTechShowcase } from "@/components/ProjectTechShowcase"
import { sections } from "@/lib/constants"

export default function ChessGANProject() {
  const [activeSection, setActiveSection] = useState("overview")
  const [expandedCards, setExpandedCards] = useState({})

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/90">
      <HeroSection />
      <NavigationBar sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent activeSection={activeSection} expandedCards={expandedCards} toggleCard={toggleCard} />
      <ProjectTechShowcase projectId="computer-vision" className="py-16" />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
