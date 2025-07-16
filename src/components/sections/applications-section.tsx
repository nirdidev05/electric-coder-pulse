"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Layers, ChevronDown } from "lucide-react"

interface ApplicationsSectionProps {
  expandedCards: Record<string, boolean>
  toggleCard: (id: string) => void
}

export function ApplicationsSection({ expandedCards, toggleCard }: ApplicationsSectionProps) {
  return (
    <div className="space-y-8">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap size={24} />
            <span>Cas d'Usage Industriels</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Plateformes d'Entraînement</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Génération de puzzles adaptatifs (ELO-based)</li>
                <li>• Couverture complète des thèmes tactiques</li>
                <li>• Réduction des coûts de curation de 70%</li>
                <li>• Personnalisation automatique du contenu</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Outils Pédagogiques</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Création de plans d'entraînement personnalisés</li>
                <li>• Détection automatique des faiblesses</li>
                <li>• Feedback instantané via Stockfish</li>
                <li>• Progression adaptative intelligente</li>
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
            {expandedCards.applications ? "Moins de détails" : "Plus de détails"}
            <ChevronDown size={16} className={expandedCards.applications ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers size={24} />
            <span>Stack Technologique de Production</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-background/80 p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Core ML</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Python 3.10+</li>
                <li>• PyTorch 2.0 + CUDA 11.7</li>
                <li>• python-chess 3.0</li>
                <li>• NumPy, Pandas optimisés</li>
              </ul>
            </div>
            <div className="bg-background/80 p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Validation & Test</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Stockfish 15 (évaluation)</li>
                <li>• pytest + coverage</li>
                <li>• Great Expectations (data)</li>
                <li>• MLflow (tracking)</li>
              </ul>
            </div>
            <div className="bg-background/80 p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Déploiement</h4>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Docker + Kubernetes</li>
                <li>• FastAPI (serving)</li>
                <li>• Prometheus (monitoring)</li>
                <li>• Redis (cache)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
