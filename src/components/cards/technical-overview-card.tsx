"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Brain, ChevronDown } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'

interface TechnicalOverviewCardProps {
  expanded: boolean
  toggle: () => void
}

export function TechnicalOverviewCard({ expanded, toggle }: TechnicalOverviewCardProps) {
  const t = useTranslation()

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain size={24} />
          <span>{t.gan.technicalOverview.title}</span>
        </CardTitle>
        <CardDescription>
          {t.gan.technicalOverview.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-destructive">
              {t.gan.technicalOverview.criticalProblems.title}
            </h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>{t.gan.technicalOverview.criticalProblems.modeCollapse}</li>
              <li>{t.gan.technicalOverview.criticalProblems.thematicImbalance}</li>
              <li>{t.gan.technicalOverview.criticalProblems.conditionalControl}</li>
              <li>{t.gan.technicalOverview.criticalProblems.postHocValidation}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-primary">
              {t.gan.technicalOverview.innovations.title}
            </h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>{t.gan.technicalOverview.innovations.templateGuidance}</li>
              <li>{t.gan.technicalOverview.innovations.conditionalACGAN}</li>
              <li>{t.gan.technicalOverview.innovations.targetedAugmentation}</li>
              <li>{t.gan.technicalOverview.innovations.hybridPipeline}</li>
            </ul>
          </div>
        </div>

        {expanded && (
          <div className="mt-6 pt-6 border-t space-y-6">
            <div>
              <h4 className="font-semibold mb-3">
                {t.gan.technicalOverview.theoreticalFoundations.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                {t.gan.technicalOverview.theoreticalFoundations.description}
              </p>

              <div className="bg-background/80 p-4 rounded-lg mb-4">
                <h5 className="font-medium mb-2">
                  {t.gan.technicalOverview.theoreticalFoundations.equation.title}
                </h5>
                <div className="font-mono text-sm bg-muted p-3 rounded">
                  {t.gan.technicalOverview.theoreticalFoundations.equation.description}
                </div>
              </div>
            </div>

            <div className="bg-background/80 p-4 rounded-lg">
              <h5 className="font-medium mb-2">
                {t.gan.technicalOverview.references.title}
              </h5>
              <ul className="text-xs space-y-1 text-muted-foreground">
                {/* Static reference items */}
                <li>• Odena et al. (2017) - Conditional Image Synthesis with Auxiliary Classifier GANs (ICML)</li>
                <li>• Chen et al. (2016) - InfoGAN: Interpretable Representation Learning by Information Maximizing GANs (NeurIPS)</li>
                <li>• Mirza & Osindero (2014) - Conditional Generative Adversarial Nets (arXiv:1411.1784)</li>
                <li>• Lichess Database (2023) - Analyse statistique de 10M+ positions tactiques</li>
                <li>• Stockfish 15 - Moteur d'évaluation pour validation qualitative</li>
              </ul>
            </div>
          </div>
        )}

        <button
          onClick={toggle}
          className="mt-4 text-sm flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
        >
          {expanded ? t.gan.technicalOverview.hideTheory : t.gan.technicalOverview.showTheory}
          <ChevronDown size={16} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </CardContent>
    </Card>
  )
}
