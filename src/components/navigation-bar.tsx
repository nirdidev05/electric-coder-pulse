"use client"

import type React from "react"

interface NavigationBarProps {
  sections: Array<{
    id: string
    title: string
    icon: React.ComponentType<{ size?: number }>
  }>
  activeSection: string
  setActiveSection: (section: string) => void
}

export function NavigationBar({ sections, activeSection, setActiveSection }: NavigationBarProps) {
  return (
    <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex overflow-x-auto py-4 gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeSection === section.id ? "bg-primary text-primary-foreground" : "hover:bg-accent/10"
              }`}
            >
              <section.icon size={16} />
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
