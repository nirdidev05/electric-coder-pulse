"use client"

import { useState } from "react"
import { Menu, X, Brain, Database, Cpu, BarChart3, CheckCircle, Zap, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from '@/hooks/useTranslation'

interface NavigationBarProps {
  sections: Array<{
    id: string
    title: string
  }>
  activeSection: string
  setActiveSection: (section: string) => void
}

export function NavigationBar({ sections, activeSection, setActiveSection }: NavigationBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const t = useTranslation()

  const getIcon = (sectionId: string) => {
    const iconMap: Record<string, any> = {
      overview: Brain,
      "data-augmentation": Database,
      "gan-architecture": Cpu,
      mathematics: BarChart3,
      validation: CheckCircle,
      applications: Zap,
      roadmap: GitBranch,
    }
    return iconMap[sectionId] || Brain
  }

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  const ActiveIcon = getIcon(activeSection)

  return (
    <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex overflow-x-auto py-4 gap-2">
          {sections.map((section) => {
            const IconComponent = getIcon(section.id)
            return (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors text-sm font-medium ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                <IconComponent size={16} />
                <span>{t.gan.nav[section.id]}</span>
              </button>
            )
          })}
        </div>

        {/* Mobile Navigation Header */}
        <div className="lg:hidden flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <ActiveIcon size={20} />
            <span className="font-medium text-foreground">
              {t.gan.nav[activeSection]}
            </span>
          </div>

          <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X size={20} />
              </Button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-2">
                {sections.map((section) => {
                  const IconComponent = getIcon(section.id)
                  return (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                        activeSection === section.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent/10 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium">{t.gan.nav[section.id]}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
