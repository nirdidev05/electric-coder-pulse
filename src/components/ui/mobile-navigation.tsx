"use client"

import { useState } from 'react'
import { Menu, X, LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

interface MobileNavigationProps {
  sections: Array<{
    id: string
    title: string
    icon: LucideIcon
  }>
  activeSection: string
  setActiveSection: (section: string) => void
}

export function MobileNavigation({ sections, activeSection, setActiveSection }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Menu size={24} />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <div className="flex flex-col space-y-4 mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </Button>
            </div>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeSection === section.id 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent/10"
                }`}
              >
                <section.icon size={20} />
                <span className="text-sm font-medium">{section.title}</span>
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}