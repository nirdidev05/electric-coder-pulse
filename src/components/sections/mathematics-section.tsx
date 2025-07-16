"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Target, ChevronDown } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation';

interface MathematicsSectionProps {
  expandedCards: Record<string, boolean>
  toggleCard: (id: string) => void
}

export function MathematicsSection({ expandedCards, toggleCard }: MathematicsSectionProps) {
  const t = useTranslation();

  return (
    <div className="space-y-8">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 size={24} />
            <span>{t.gan.mathematics.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-background/80 p-4 sm:p-6 rounded-lg mb-6">
            <div className="text-center space-y-4">
              <p className="font-technical text-base sm:text-lg">
              </p>
              <div className="font-mono text-sm sm:text-base bg-muted p-3 sm:p-4 rounded overflow-x-auto">
                <div className="min-w-max">
                  ℒ<sub>total</sub> = ℒ<sub>adversarial</sub> + λ<sub>1</sub>ℒ<sub>thématique</sub> + λ<sub>2</sub>ℒ
                  <sub>qualité</sub> + λ<sub>3</sub>ℒ<sub>diversité</sub>
                </div>
              </div>
              <div className="text-xs sm:text-sm space-y-2">
                <div className="font-mono bg-muted p-2 sm:p-3 rounded overflow-x-auto">
                  <div className="min-w-max">
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
                </div>
                <div className="font-mono bg-muted p-2 sm:p-3 rounded overflow-x-auto">
                  <div className="min-w-max">
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
                </div>
                <div className="font-mono bg-muted p-2 sm:p-3 rounded overflow-x-auto">
                  <div className="min-w-max">
                    ℒ<sub>qualité</sub> = 𝔼
                    <sub>
                      z~p<sub>z</sub>
                    </sub>
                    [||Q(G(z|c)) - q<sub>target</sub>||²]
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-3">{t.gan.mathematics.components.title}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • <strong>D(x):</strong> {t.gan.mathematics.components.discriminator}
                </li>
                <li>
                  • <strong>G(z|c):</strong> {t.gan.mathematics.components.generator}
                </li>
                <li>
                  • <strong>C(x):</strong> {t.gan.mathematics.components.classifier}
                </li>
                <li>
                  • <strong>Q(x):</strong> {t.gan.mathematics.components.qualityEstimator}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">{t.gan.mathematics.hyperparameters.title}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • <strong>λ₁ = 0.2:</strong> {t.gan.mathematics.hyperparameters.lambda1}
                </li>
                <li>
                  • <strong>λ₂ = 0.3:</strong> {t.gan.mathematics.hyperparameters.lambda2}
                </li>
                <li>
                  • <strong>λ₃ = 0.1:</strong> {t.gan.mathematics.hyperparameters.lambda3}
                </li>
                <li>
                  • <strong>Learning rates:</strong> {t.gan.mathematics.hyperparameters.learningRates}
                </li>
              </ul>
            </div>
          </div>

          {expandedCards.objective && (
            <div className="mt-6 pt-6 border-t space-y-4">
              <h4 className="font-semibold mb-3">{t.gan.mathematics.derivation.title}</h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">{t.gan.mathematics.derivation.adversarial.title}</h5>
                  <p className="text-muted-foreground text-sm mb-2">
                    {t.gan.mathematics.derivation.adversarial.description}
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
                  <h5 className="font-medium mb-2">{t.gan.mathematics.derivation.auxiliary.title}</h5>
                  <p className="text-muted-foreground text-sm mb-2">
                    {t.gan.mathematics.derivation.auxiliary.description}
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
                  <h5 className="font-medium mb-2">{t.gan.mathematics.derivation.diversity.title}</h5>
                  <p className="text-muted-foreground text-sm mb-2">
                    {t.gan.mathematics.derivation.diversity.description}
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
            {expandedCards.objective ? t.gan.mathematics.hideDerivation : t.gan.mathematics.showDerivation}
            <ChevronDown size={16} className={expandedCards.objective ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target size={24} />
            <span>{t.gan.mathematics.metrics.title}</span>
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
              <h4 className="font-semibold mb-3">{t.gan.mathematics.metrics.title}</h4>

              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">{t.gan.mathematics.metrics.fid.title}</h5>
                  <div className="font-mono text-sm bg-muted p-3 rounded mb-2">
                    FID = ||μ<sub>r</sub> - μ<sub>g</sub>||² + Tr(Σ<sub>r</sub> + Σ<sub>g</sub> - 2(Σ<sub>r</sub>Σ
                    <sub>g</sub>)^(1/2))
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t.gan.mathematics.metrics.fid.description}
                  </p>
                </div>

                <div>
                  <h5 className="font-medium mb-2">{t.gan.mathematics.metrics.entropy.title}</h5>
                  <div className="font-mono text-sm bg-muted p-3 rounded mb-2">
                    H(X) = -Σ<sub>i</sub> p<sub>i</sub> log₂(p<sub>i</sub>) / log₂(n)
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t.gan.mathematics.metrics.entropy.description}
                  </p>
                </div>

                <div>
                  <h5 className="font-medium mb-2">{t.gan.mathematics.metrics.inception.title}</h5>
                  <div className="font-mono text-sm bg-muted p-3 rounded mb-2">
                    IS = exp(𝔼<sub>x</sub>[KL(p(y|x) || p(y))])
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t.gan.mathematics.metrics.inception.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          <button onClick={() => toggleCard("metrics")} className="mt-4 text-sm flex items-center gap-1 text-primary">
            {expandedCards.metrics ? t.gan.mathematics.hideFormulations : t.gan.mathematics.showFormulations}
            <ChevronDown size={16} className={expandedCards.metrics ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>
    </div>
  )
}