import { Brain } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative py-20 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full text-primary mb-6">
          <Brain size={16} />
          <span>Recherche Avancée en IA Générative</span>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Système Hybride de Génération de Puzzles d'Échecs
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
          Architecture révolutionnaire combinant l'augmentation de données spécialisée et les réseaux antagonistes
          génératifs conditionnels (AC-GAN)
        </p>
        <div className="text-sm text-muted-foreground max-w-4xl mx-auto">
          <p className="mb-2">
            <strong>Innovation Clé:</strong> Résolution du problème de génération de contenu contraint par une approche
            hybride template-GAN
          </p>
          <p>
            <strong>Performance:</strong> 95% de validité des positions générées • 2.8x amélioration de l'entropie
            normalisée • 1,200 positions/seconde
          </p>
        </div>
      </div>
    </div>
  )
}
