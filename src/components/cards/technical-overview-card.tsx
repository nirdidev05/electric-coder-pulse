"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Brain, ChevronDown } from "lucide-react"

interface TechnicalOverviewCardProps {
  expanded: boolean
  toggle: () => void
}

export function TechnicalOverviewCard({ expanded, toggle }: TechnicalOverviewCardProps) {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain size={24} />
          <span>Innovation Technique Fondamentale</span>
        </CardTitle>
        <CardDescription>
          Architecture hybride révolutionnaire résolvant les limitations des approches purement neuronales ou
          symboliques
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-destructive">Problématiques Critiques Résolues</h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>
                • <strong>Mode Collapse:</strong> GAN classiques génèrent 45% de positions invalides
              </li>
              <li>
                • <strong>Déséquilibre Thématique:</strong> Ratio 1:10 entre classes rares/fréquentes
              </li>
              <li>
                • <strong>Contrôle Conditionnel:</strong> Impossibilité de spécifier difficulté et thème
              </li>
              <li>
                • <strong>Validation Post-Hoc:</strong> Filtrage coûteux des positions illégales
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-primary">Solutions Architecturales Innovantes</h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>
                • <strong>Guidance par Templates:</strong> 92% de validité garantie structurellement
              </li>
              <li>
                • <strong>AC-GAN Conditionnel:</strong> Contrôle précis thème + difficulté
              </li>
              <li>
                • <strong>Augmentation Ciblée:</strong> Équilibrage intelligent des classes rares
              </li>
              <li>
                • <strong>Pipeline Hybride:</strong> 50% templates + 35% GAN + 15% fusion créative
              </li>
            </ul>
          </div>
        </div>

        {expanded && (
          <div className="mt-6 pt-6 border-t space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Fondements Théoriques Avancés</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Notre approche s'inspire des travaux récents sur l'hybridation symbolique-neuronale, notamment
                <strong> AlphaGeometry (DeepMind, 2024)</strong> et les <strong>Neuro-Symbolic Systems</strong>. La
                combinaison de contraintes formelles (templates d'échecs) et d'apprentissage profond (AC-GAN) permet de
                dépasser le dilemme classique entre <em>expressivité</em> et <em>contrôlabilité</em>.
              </p>

              <div className="bg-background/80 p-4 rounded-lg mb-4">
                <h5 className="font-medium mb-2">Équation Fondamentale du Système Hybride</h5>
                <div className="font-mono text-sm bg-muted p-3 rounded">
                  P(position_valide | thème, difficulté) = α·P_template + β·P_GAN + γ·P_hybride
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Où α=0.5, β=0.35, γ=0.15 sont optimisés empiriquement pour maximiser validité et créativité
                </p>
              </div>
            </div>

            <div className="bg-background/80 p-4 rounded-lg">
              <h5 className="font-medium mb-2">Références Scientifiques Clés</h5>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>
                  • <strong>Odena et al. (2017)</strong> - "Conditional Image Synthesis with Auxiliary Classifier GANs"
                  (ICML)
                </li>
                <li>
                  • <strong>Chen et al. (2016)</strong> - "InfoGAN: Interpretable Representation Learning by Information
                  Maximizing GANs" (NeurIPS)
                </li>
                <li>
                  • <strong>Mirza & Osindero (2014)</strong> - "Conditional Generative Adversarial Nets"
                  (arXiv:1411.1784)
                </li>
                <li>
                  • <strong>Lichess Database (2023)</strong> - Analyse statistique de 10M+ positions tactiques
                </li>
                <li>
                  • <strong>Stockfish 15</strong> - Moteur d'évaluation pour validation qualitative
                </li>
              </ul>
            </div>
          </div>
        )}

        <button
          onClick={toggle}
          className="mt-4 text-sm flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
        >
          {expanded ? "Masquer les détails techniques" : "Afficher les fondements théoriques"}
          <ChevronDown size={16} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </CardContent>
    </Card>
  )
}
