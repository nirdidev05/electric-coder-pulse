"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BookOpen, ChevronDown, Target, Database, Zap } from "lucide-react"

interface IntroductionCardProps {
  expanded: boolean
  toggle: () => void
}

export function IntroductionCard({ expanded, toggle }: IntroductionCardProps) {
  return (
    <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen size={24} />
          <span>Génération Automatique de Puzzles d'Échecs</span>
        </CardTitle>
        <CardDescription className="text-base">
          Système révolutionnaire combinant augmentation de données spécialisée et GANs conditionnels pour la création
          automatique de puzzles tactiques
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-background/80 p-4 rounded-lg border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Target size={20} className="text-primary" />
              <h4 className="font-semibold text-primary">Objectif Principal</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Générer automatiquement des puzzles d'échecs inédits mais plausibles, respectant les règles et présentant
              des thèmes tactiques ciblés (mats en 1, fourchettes, clouages)
            </p>
          </div>

          <div className="bg-background/80 p-4 rounded-lg border border-secondary/20">
            <div className="flex items-center gap-2 mb-2">
              <Database size={20} className="text-secondary" />
              <h4 className="font-semibold text-secondary">Source de Données</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Base Lichess de 5+ millions de puzzles extraits de 300+ millions de parties analysées par Stockfish,
              encodés en notation FEN
            </p>
          </div>

          <div className="bg-background/80 p-4 rounded-lg border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={20} className="text-accent" />
              <h4 className="font-semibold text-accent">Innovation Technique</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Architecture hybride templates + AC-GAN avec discriminateur multi-têtes (validité, thème, qualité)
            </p>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold mb-2">Exemple de Notation FEN</h4>
          <div className="font-mono text-sm bg-background p-3 rounded border">
            r2qr1k1/b1p2ppp/pp4n1/P1P1p3/4P1n1/B2P2Pb/3NBP1P/RN1QR1K1 b - - 1 16
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Cette notation encode complètement une position : disposition des pièces, trait, droits de roque, prise en
            passant, compteurs de coups
          </p>
        </div>

        {expanded && (
          <div className="mt-6 pt-6 border-t space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Encodage Tensoriel des Positions</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Chaque position FEN est convertie en tenseur binaire 8×8×N pour l'entraînement des réseaux de neurones.
                Typiquement N=12 couches pour les 6 types de pièces × 2 couleurs, plus des couches additionnelles pour
                le trait et les règles spéciales.
              </p>

              <div className="bg-background/80 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Structure du Tenseur</h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>
                    • <strong>Couches 0-5:</strong> Pièces blanches (P, N, B, R, Q, K)
                  </li>
                  <li>
                    • <strong>Couches 6-11:</strong> Pièces noires (p, n, b, r, q, k)
                  </li>
                  <li>
                    • <strong>Couche 12:</strong> Trait (1 si Blancs, 0 si Noirs)
                  </li>
                  <li>
                    • <strong>Cases vides:</strong> Représentées par des zéros sur toutes les couches
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Défis Techniques Résolus</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2 text-destructive">Problèmes Identifiés</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Déséquilibre thématique (certains motifs 10x plus rares)</li>
                    <li>• Validation complexe des positions générées</li>
                    <li>• Contraintes strictes des règles d'échecs</li>
                    <li>• Nécessité de solutions tactiques uniques</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2 text-primary">Solutions Apportées</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Augmentation ciblée par thème tactique</li>
                    <li>• Pipeline de validation automatique (python-chess + Stockfish)</li>
                    <li>• Architecture hybride templates + génération</li>
                    <li>• Discriminateur multi-têtes pour contrôle qualité</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={toggle}
          className="mt-4 text-sm flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
        >
          {expanded ? "Masquer les détails" : "Afficher l'encodage et les défis techniques"}
          <ChevronDown size={16} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </CardContent>
    </Card>
  )
}
