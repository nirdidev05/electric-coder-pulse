"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Layers, ChevronDown } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation';

interface ApplicationsSectionProps {
  expandedCards: Record<string, boolean>
  toggleCard: (id: string) => void
}

export function ApplicationsSection({ expandedCards, toggleCard }: ApplicationsSectionProps) {
  const t = useTranslation();
  
  return (
    <div className="space-y-8">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap size={24} />
            <span>{t.gan.applications.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">{t.gan.applications.trainingPlatforms.title}</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                {t.gan.applications.trainingPlatforms.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{t.gan.applications.pedagogicalTools.title}</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                {t.gan.applications.pedagogicalTools.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {expandedCards.applications && (
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-semibold mb-3">Exemple d'Intégration API</h4>
              <div className="bg-background/80 p-4 rounded-lg overflow-x-auto">
                <pre className="text-xs font-mono">
                  {`// Intégration avec plateforme d'échecs
async function generateAdaptivePuzzle(userId, targetRating) {
  const userProfile = await getUserWeaknesses(userId);
  
  const response = await fetch('/api/chess-gan/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      theme: userProfile.weakestTheme,
      difficulty_range: [targetRating - 100, targetRating + 100],
      style_preference: userProfile.preferredStyle,
      count: 5
    })
  });
  
  const puzzles = await response.json();
  return puzzles.filter(p => p.validity_score > 0.95);
}`}
                </pre>
              </div>
            </div>
          )}

          <button
            onClick={() => toggleCard("applications")}
            className="mt-4 text-sm flex items-center gap-1 text-primary"
          >
            {expandedCards.applications ? t.gan.applications.showDetails : t.gan.applications.showDetails}
            <ChevronDown size={16} className={expandedCards.applications ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers size={24} />
            <span>{t.gan.applications.technicalStack.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-background/80 p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">{t.gan.applications.technicalStack.coreML.title}</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                {t.gan.applications.technicalStack.coreML.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-background/80 p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">{t.gan.applications.technicalStack.validation.title}</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                {t.gan.applications.technicalStack.validation.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-background/80 p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">{t.gan.applications.technicalStack.deployment.title}</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                {t.gan.applications.technicalStack.deployment.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}