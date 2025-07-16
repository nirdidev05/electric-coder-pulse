"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Target, ChevronDown } from "lucide-react"

interface MathematicsSectionProps {
  expandedCards: Record<string, boolean>
  toggleCard: (id: string) => void
}

export function MathematicsSection({ expandedCards, toggleCard }: MathematicsSectionProps) {
  return (
    <div className="space-y-8">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 size={24} />
            <span>Fonction Objectif Multi-Critères</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-background/80 p-6 rounded-lg mb-6">
            <div className="text-center space-y-4">
              <p className="font-technical text-lg">
                <strong>Fonction de Perte Hybride AC-GAN:</strong>
              </p>
              <div className="font-mono text-base bg-muted p-4 rounded">
                ℒ<sub>total</sub> = ℒ<sub>adversarial</sub> + λ<sub>1</sub>ℒ<sub>thématique</sub> + λ<sub>2</sub>ℒ
                <sub>qualité</sub> + λ<sub>3</sub>ℒ<sub>diversité</sub>
              </div>
              <div className="text-sm space-y-2">
                <div className="font-mono bg-muted p-3 rounded">
                  ℒ<sub>adversarial</sub> = 𝔼
                  <sub>
                    x~p<sub>data</sub>
                  </sub>
                  [log D(x)] + 𝔼
                  <sub>
                    z~p<sub>z</sub>
                  </sub>
                  [log(1-D(G(z|c)))]
                </div>
                <div className="font-mono bg-muted p-3 rounded">
                  ℒ<sub>thématique</sub> = 𝔼
                  <sub>
                    x~p<sub>data</sub>
                  </sub>
                  [ℓ<sub>CE</sub>(C(x), c)] + 𝔼
                  <sub>
                    z~p<sub>z</sub>
                  </sub>
                  [ℓ<sub>CE</sub>(C(G(z|c)), c)]
                </div>
                <div className="font-mono bg-muted p-3 rounded">
                  ℒ<sub>qualité</sub> = 𝔼
                  <sub>
                    z~p<sub>z</sub>
                  </sub>
                  [||Q(G(z|c)) - q<sub>target</sub>||²]
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Composantes Mathématiques</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • <strong>D(x):</strong> Discriminateur - probabilité que x soit réel
                </li>
                <li>
                  • <strong>G(z|c):</strong> Générateur conditionnel sur thème c
                </li>
                <li>
                  • <strong>C(x):</strong> Classificateur auxiliaire de thèmes
                </li>
                <li>
                  • <strong>Q(x):</strong> Estimateur de qualité (basé Stockfish)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Hyperparamètres Optimisés</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • <strong>λ₁ = 0.2:</strong> Poids classification thématique
                </li>
                <li>
                  • <strong>λ₂ = 0.3:</strong> Poids qualité tactique
                </li>
                <li>
                  • <strong>λ₃ = 0.1:</strong> Poids diversité (anti-mode collapse)
                </li>
                <li>
                  • <strong>Learning rates:</strong> G: 2×10⁻⁴, D: 1×10⁻⁴
                </li>
              </ul>
            </div>
          </div>

          {expandedCards.objective && (
            <div className="mt-6 pt-6 border-t space-y-4">
              <h4 className="font-semibold mb-3">Dérivation Théorique Complète</h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">1. Terme Adversarial (Goodfellow et al., 2014)</h5>
                  <p className="text-muted-foreground text-sm mb-2">
                    Le jeu minimax classique entre générateur et discriminateur, étendu au cas conditionnel:
                  </p>
                  <div className="font-mono text-sm bg-muted p-3 rounded">
                    min<sub>G</sub> max<sub>D</sub> V(D,G) = 𝔼
                    <sub>
                      x~p<sub>data</sub>(x)
                    </sub>
                    [log D(x)] + 𝔼
                    <sub>
                      z~p<sub>z</sub>(z),c~p<sub>c</sub>(c)
                    </sub>
                    [log(1-D(G(z,c)))]
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">2. Classification Auxiliaire (AC-GAN Extension)</h5>
                  <p className="text-muted-foreground text-sm mb-2">
                    Assure la cohérence thématique via un classificateur partagé:
                  </p>
                  <div className="font-mono text-sm bg-muted p-3 rounded">
                    ℒ<sub>C</sub> = 𝔼
                    <sub>
                      (x,c)~p<sub>data</sub>
                    </sub>
                    [-log P(C=c|x)] + 𝔼
                    <sub>
                      z~p<sub>z</sub>,c~p<sub>c</sub>
                    </sub>
                    [-log P(C=c|G(z,c))]
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-2">3. Régularisation par Diversité</h5>
                  <p className="text-muted-foreground text-sm mb-2">
                    Prévient le mode collapse en maximisant la variance des features générées:
                  </p>
                  <div className="font-mono text-sm bg-muted p-3 rounded">
                    ℒ<sub>div</sub> = -𝔼
                    <sub>
                      z₁,z₂~p<sub>z</sub>
                    </sub>
                    [||G(z₁,c) - G(z₂,c)||₂] + β·Var(φ(G(z,c)))
                  </div>
                </div>
              </div>
            </div>
          )}

          <button onClick={() => toggleCard("objective")} className="mt-4 text-sm flex items-center gap-1 text-primary">
            {expandedCards.objective ? "Masquer la dérivation" : "Afficher la dérivation complète"}
            <ChevronDown size={16} className={expandedCards.objective ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target size={24} />
            <span>Métriques d'Évaluation Avancées</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-background/80 p-4 rounded-lg border">
              <h4 className="font-semibold mb-1">FID Score</h4>
              <p className="text-2xl font-bold text-primary">18.7</p>
              <p className="text-sm text-muted-foreground">↓34% vs baseline GAN</p>
            </div>
            <div className="bg-background/80 p-4 rounded-lg border">
              <h4 className="font-semibold mb-1">Entropie Shannon</h4>
              <p className="text-2xl font-bold text-primary">0.89</p>
              <p className="text-sm text-muted-foreground">Diversité thématique</p>
            </div>
            <div className="bg-background/80 p-4 rounded-lg border">
              <h4 className="font-semibold mb-1">Inception Score</h4>
              <p className="text-2xl font-bold text-primary">7.2</p>
              <p className="text-sm text-muted-foreground">Qualité + Diversité</p>
            </div>
          </div>

          {expandedCards.metrics && (
            <div className="mt-6 pt-6 border-t space-y-6">
              <h4 className="font-semibold mb-3">Formulations Mathématiques des Métriques</h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Fréchet Inception Distance (FID)</h5>
                  <div className="font-mono text-sm bg-muted p-3 rounded mb-2">
                    FID = ||μ<sub>r</sub> - μ<sub>g</sub>||² + Tr(Σ<sub>r</sub> + Σ<sub>g</sub> - 2(Σ<sub>r</sub>Σ
                    <sub>g</sub>)^(1/2))
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Mesure la distance entre les distributions des positions réelles (r) et générées (g) dans l'espace
                    des features d'un réseau pré-entraîné. Notre score de 18.7 surpasse significativement les GANs
                    classiques (≥30) selon Zhang et al. (2021).
                  </p>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Entropie de Shannon Normalisée</h5>
                  <div className="font-mono text-sm bg-muted p-3 rounded mb-2">
                    H(X) = -Σ<sub>i</sub> p<sub>i</sub> log₂(p<sub>i</sub>) / log₂(n)
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Calculée sur la distribution des thèmes tactiques. Une valeur proche de 1 indique une parfaite
                    diversité. Notre score de 0.89 démontre un équilibrage quasi-optimal des classes, comparé aux
                    méthodes basées sur les règles (0.3-0.5).
                  </p>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Inception Score Adapté</h5>
                  <div className="font-mono text-sm bg-muted p-3 rounded mb-2">
                    IS = exp(𝔼<sub>x</sub>[KL(p(y|x) || p(y))])
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Adapté pour les échecs: p(y|x) est la distribution des thèmes prédite par notre classificateur pour
                    la position x. Un score élevé indique des positions distinctes et bien classifiées thématiquement.
                  </p>
                </div>
              </div>
            </div>
          )}

          <button onClick={() => toggleCard("metrics")} className="mt-4 text-sm flex items-center gap-1 text-primary">
            {expandedCards.metrics ? "Masquer les formulations" : "Afficher les formulations mathématiques"}
            <ChevronDown size={16} className={expandedCards.metrics ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
