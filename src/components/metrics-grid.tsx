import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, CheckCircle, Zap, Target } from "lucide-react"

const metrics = [
  {
    label: "Taux de validité",
    value: "95%",
    icon: CheckCircle,
    trend: "up",
    description: "Positions légales générées (vs 55% GAN classique)",
  },
  {
    label: "Entropie normalisée",
    value: "2.8x",
    icon: BarChart3,
    trend: "up",
    description: "Amélioration de la diversité thématique",
  },
  {
    label: "Débit de génération",
    value: "1,200/s",
    icon: Zap,
    trend: "up",
    description: "Positions par seconde (GPU RTX 3090)",
  },
  {
    label: "Cohérence thématique",
    value: "90%",
    icon: Target,
    trend: "up",
    description: "Correspondance thème demandé/généré",
  },
]

export function MetricsGrid() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 size={24} />
          <span>Métriques de Performance Clés</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-background/80 p-4 rounded-lg border group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <metric.icon size={20} className={`text-${metric.trend === "up" ? "primary" : "destructive"}`} />
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
          <h4 className="font-semibold mb-2 text-primary">Comparaison avec l'État de l'Art</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium mb-1">GAN Classique (Baseline)</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Validité: ~55%</li>
                <li>• Entropie: 0.32</li>
                <li>• Cohérence: ~60%</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1">Notre Approche Hybride</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Validité: 95% (+73%)</li>
                <li>• Entropie: 0.89 (+178%)</li>
                <li>• Cohérence: 90% (+50%)</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
