"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GitBranch, ChevronDown } from "lucide-react"

interface RoadmapSectionProps {
  expandedCards: Record<string, boolean>
  toggleCard: (id: string) => void
}

export function RoadmapSection({ expandedCards, toggleCard }: RoadmapSectionProps) {
  return (
    <div className="space-y-8">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch size={24} />
            <span>Feuille de Route Recherche & Développement</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-primary">Q3 2024 - Extensions Tactiques</h4>
              <ul className="text-sm space-y-2 text-muted-foreground mt-2">
                <li>• Intégration des mats en 2-3 coups complexes</li>
                <li>• Optimisation GPU avec Mixed Precision Training</li>
                <li>• Support des finales théoriques (R+P vs R)</li>
                <li>• API REST haute performance (FastAPI)</li>
              </ul>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h4 className="font-semibold text-secondary">Q4 2024 - Publication & Intégration</h4>
              <ul className="text-sm space-y-2 text-muted-foreground mt-2">
                <li>• Soumission NeurIPS 2024 (deadline octobre)</li>
                <li>• Intégration Leela Chess Zero pour évaluation</li>
                <li>• Benchmark contre AlphaZero sur positions tactiques</li>
                <li>• Open-source du framework (licence MIT)</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-6">
              <h4 className="font-semibold text-accent">2025 - Recherche Avancée</h4>
              <ul className="text-sm space-y-2 text-muted-foreground mt-2">
                <li>• Extension aux finales complexes (6+ pièces)</li>
                <li>• Modèle multimodal (vision + notation algébrique)</li>
                <li>• Transfer learning vers autres jeux (Go, Shogi)</li>
                <li>• Architecture Transformer pour séquences de coups</li>
              </ul>
            </div>
          </div>

          {expandedCards.roadmap && (
            <div className="mt-6 pt-6 border-t space-y-4">
              <h4 className="font-semibold mb-3">Contributions Scientifiques Prévues</h4>

              <div className="space-y-4">
                <div className="bg-primary/5 p-4 rounded border border-primary/20">
                  <h5 className="font-medium mb-1 text-primary">Publication NeurIPS 2024</h5>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Titre:</strong> "Hybrid Template-GAN Architecture for Constrained Content Generation:
                    Application to Chess Tactical Puzzles"
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Innovations clés: Mécanisme de guidance créative, validation structurelle intégrée, résolution du
                    mode collapse dans les domaines contraints
                  </p>
                </div>

                <div className="bg-secondary/5 p-4 rounded border border-secondary/20">
                  <h5 className="font-medium mb-1 text-secondary">Dataset & Code Open Source</h5>
                  <p className="text-sm text-muted-foreground mb-2">Publication prévue Q2 2024 sous licence MIT</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Dataset de 1M+ positions générées et validées</li>
                    <li>• Framework complet d'augmentation de données</li>
                    <li>• Modèles pré-entraînés pour 10 thèmes tactiques</li>
                    <li>• Benchmarks et métriques d'évaluation</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <button onClick={() => toggleCard("roadmap")} className="mt-4 text-sm flex items-center gap-1 text-primary">
            {expandedCards.roadmap ? "Moins de détails" : "Plus de détails"}
            <ChevronDown size={16} className={expandedCards.roadmap ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
