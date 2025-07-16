"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Layout, ChevronDown } from "lucide-react"

interface ArchitectureDiagramProps {
  expanded: boolean
  toggle: () => void
}

export function ArchitectureDiagram({ expanded, toggle }: ArchitectureDiagramProps) {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layout size={24} />
          <span>Schéma de l'Architecture Hybride</span>
        </CardTitle>
        <CardDescription>
          Visualisation des interactions entre les templates, l'AC-GAN et le système de validation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img src="/architecture_diagram.png" alt="Architecture Diagram" className="w-full rounded-md" />

        {expanded && (
          <div className="mt-6 pt-6 border-t space-y-4">
            <h4 className="font-semibold mb-3">Détails Techniques Avancés</h4>
            <p className="text-sm text-muted-foreground">
              Le diagramme illustre le flux de données entre les différents modules du système. Les templates
              fournissent une base structurelle, tandis que l'AC-GAN génère des variations créatives. Le système de
              validation garantit la cohérence et la légalité des positions générées.
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Templates d'échecs (positions initiales)</li>
              <li>AC-GAN (génération conditionnelle)</li>
              <li>Système de validation (Stockfish + règles)</li>
              <li>Sortie: positions tactiques valides</li>
            </ul>
          </div>
        )}

        <button
          onClick={toggle}
          className="mt-4 text-sm flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
        >
          {expanded ? "Masquer les détails" : "Afficher les détails techniques"}
          <ChevronDown size={16} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </CardContent>
    </Card>
  )
}
