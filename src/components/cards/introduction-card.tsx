"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BookOpen, ChevronDown, Target, Database, Zap } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'

interface IntroductionCardProps {
  expanded: boolean
  toggle: () => void
}

export function IntroductionCard({ expanded, toggle }: IntroductionCardProps) {
  const t = useTranslation()

  return (
    <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen size={24} />
          <span>{t.gan.introduction.title}</span>
        </CardTitle>
        <CardDescription className="text-base">
          {t.gan.introduction.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-background/80 p-4 rounded-lg border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Target size={20} className="text-primary" />
              <h4 className="font-semibold text-primary">{t.gan.introduction.objective.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.gan.introduction.objective.description}
            </p>
          </div>

          <div className="bg-background/80 p-4 rounded-lg border border-secondary/20">
            <div className="flex items-center gap-2 mb-2">
              <Database size={20} className="text-secondary" />
              <h4 className="font-semibold text-secondary">{t.gan.introduction.dataSource.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.gan.introduction.dataSource.description}
            </p>
          </div>

          <div className="bg-background/80 p-4 rounded-lg border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={20} className="text-accent" />
              <h4 className="font-semibold text-accent">{t.gan.introduction.innovation.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.gan.introduction.innovation.description}
            </p>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">{t.gan.introduction.fenExample}</h4>
          <div className="font-mono text-sm bg-background p-3 rounded border">
            {t.gan.introduction.fenDescription}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {t.gan.introduction.tensorEncoding.title}: {t.gan.introduction.tensorEncoding.description}
          </p>
        </div>

        {expanded && (
          <div className="mt-6 pt-6 border-t space-y-6">
            <div>
              <h4 className="font-semibold mb-3">{t.gan.introduction.tensorEncoding.structure.whitePieces}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {t.gan.introduction.tensorEncoding.structure.blackPieces}
              </p>

              <div className="bg-background/80 p-4 rounded-lg">
                <h5 className="font-medium mb-2">{t.gan.introduction.challenges.title}</h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>{t.gan.introduction.challenges.problems.thematicImbalance}</li>
                  <li>{t.gan.introduction.challenges.problems.complexValidation}</li>
                  <li>{t.gan.introduction.challenges.problems.strictConstraints}</li>
                  <li>{t.gan.introduction.challenges.problems.uniqueSolutions}</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">{t.gan.introduction.challenges.solutions.targetedAugmentation}</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>{t.gan.introduction.challenges.solutions.automaticValidation}</li>
                <li>{t.gan.introduction.challenges.solutions.hybridArchitecture}</li>
                <li>{t.gan.introduction.challenges.solutions.multiHeadDiscriminator}</li>
              </ul>
            </div>
          </div>
        )}

        <button
          onClick={toggle}
          className="mt-4 text-sm flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
        >
          {expanded ? t.gan.common.showLess : t.gan.common.showMore}
          <ChevronDown size={16} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </CardContent>
    </Card>
  )
}
