"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, CheckCircle, Zap, Target } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation';

export function MetricsGrid() {
  const t = useTranslation();
  
  const metrics = [
    {
      label: t.gan.metrics.validityRate,
      value: "95%",
      icon: CheckCircle,
      trend: "up",
      description: "Positions légales générées (vs 55% GAN classique)",
    },
    {
      label: t.gan.metrics.normalizedEntropy,
      value: "2.8x",
      icon: BarChart3,
      trend: "up",
      description: "Amélioration de la diversité thématique",
    },
    {
      label: t.gan.metrics.generationThroughput,
      value: "1,200/s",
      icon: Zap,
      trend: "up",
      description: "Positions par seconde (GPU RTX 3090)",
    },
    {
      label: t.gan.metrics.thematicCoherence,
      value: "90%",
      icon: Target,
      trend: "up",
      description: "Correspondance thème demandé/généré",
    },
  ]
  
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 size={24} />
          <span>Métriques de Performance Clés</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-background/80 p-4 rounded-lg border group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <metric.icon
                  size={20}
                  className={`text-${metric.trend === "up" ? "primary" : "destructive"} flex-shrink-0`}
                />
                <div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-xl font-bold">{metric.value}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <h4 className="font-semibold mb-2 text-primary">
            {t.gan.metrics.comparison.title}
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium mb-1">{t.gan.metrics.comparison.classical}</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• {t.gan.metrics.comparison.validity}: ~55%</li>
                <li>• {t.gan.metrics.comparison.entropy}: 0.32</li>
                <li>• {t.gan.metrics.comparison.coherence}: ~60%</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1">{t.gan.metrics.comparison.ourApproach}</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• {t.gan.metrics.comparison.validity}: 95% (+73%)</li>
                <li>• {t.gan.metrics.comparison.entropy}: 0.89 (+178%)</li>
                <li>• {t.gan.metrics.comparison.coherence}: 90% (+50%)</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}