"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitBranch, ChevronDown } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation';

interface RoadmapSectionProps {
  expandedCards: Record<string, boolean>
  toggleCard: (id: string) => void
}

export function RoadmapSection({ expandedCards, toggleCard }: RoadmapSectionProps) {
  const t = useTranslation();

  return (
    <div className="space-y-8">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch size={24} />
            <span>{t.gan.roadmap.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-primary">{t.gan.roadmap.q3_2024.title}</h4>
              <ul className="text-sm space-y-2 text-muted-foreground mt-2">
                {t.gan.roadmap.q3_2024.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h4 className="font-semibold text-secondary">{t.gan.roadmap.q4_2024.title}</h4>
              <ul className="text-sm space-y-2 text-muted-foreground mt-2">
                {t.gan.roadmap.q4_2024.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h4 className="font-semibold text-accent">{t.gan.roadmap.year_2025.title}</h4>
              <ul className="text-sm space-y-2 text-muted-foreground mt-2">
                {t.gan.roadmap.year_2025.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {expandedCards.roadmap && (
            <div className="mt-6 pt-6 border-t space-y-4">
              <h4 className="font-semibold mb-3">{t.gan.roadmap.contributions.title}</h4>

              <div className="space-y-4">
                <div className="bg-primary/5 p-4 rounded border border-primary/20">
                  <h5 className="font-medium mb-1 text-primary">{t.gan.roadmap.contributions.neurips.title}</h5>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>{t.gan.roadmap.contributions.neurips.subtitle}</strong> {t.gan.roadmap.contributions.neurips.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.gan.roadmap.contributions.neurips.description}
                  </p>
                </div>

                <div className="bg-secondary/5 p-4 rounded border border-secondary/20">
                  <h5 className="font-medium mb-1 text-secondary">{t.gan.roadmap.contributions.openSource.title}</h5>
                  <p className="text-sm text-muted-foreground mb-2">{t.gan.roadmap.contributions.openSource.description}</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {t.gan.roadmap.contributions.openSource.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <button onClick={() => toggleCard("roadmap")} className="mt-4 text-sm flex items-center gap-1 text-primary">
            {expandedCards.roadmap ? t.gan.roadmap.hideDetails : t.gan.roadmap.showDetails}
            <ChevronDown size={16} className={expandedCards.roadmap ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>
    </div>
  )
}