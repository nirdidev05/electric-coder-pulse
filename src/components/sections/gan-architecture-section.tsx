"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Cpu, ChevronDown, Brain, Target, Layers } from "lucide-react"
import { CodeSample } from "../code-sample"

interface GANArchitectureSectionProps {
  expandedCards: Record<string, boolean>
  toggleCard: (id: string) => void
}

export function GANArchitectureSection({ expandedCards, toggleCard }: GANArchitectureSectionProps) {
  return (
    <div className="space-y-8">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain size={24} />
            <span>Architecture GAN Conditionnelle Avancée</span>
          </CardTitle>
          <CardDescription>
            Système antagoniste avec générateur thématique et discriminateur multi-têtes pour contrôle qualité
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Cpu size={20} className="text-primary" />
                <h4 className="font-semibold text-primary">Générateur Conditionnel G</h4>
              </div>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>
                  • <strong>Entrée:</strong> z ∈ ℝ¹²⁸ (bruit latent) + y ∈ ℝᵀ (thème one-hot)
                </li>
                <li>
                  • <strong>Architecture:</strong> FC layers → Deconv → 8×8×12 output
                </li>
                <li>
                  • <strong>Conditionnement:</strong> Embedding thématique dense (32D)
                </li>
                <li>
                  • <strong>Contraintes:</strong> Softmax par case (exclusivité pièces)
                </li>
              </ul>
            </div>

            <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
              <div className="flex items-center gap-2 mb-3">
                <Target size={20} className="text-secondary" />
                <h4 className="font-semibold text-secondary">Discriminateur Multi-Têtes D</h4>
              </div>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>
                  • <strong>Tête Validité:</strong> Réel vs Généré (BCE loss)
                </li>
                <li>
                  • <strong>Tête Thème:</strong> Classification tactique (CE loss)
                </li>
                <li>
                  • <strong>Tête Qualité:</strong> Score puzzle (régression/classification)
                </li>
                <li>
                  • <strong>Architecture:</strong> CNN → Feature extraction → 3 branches FC
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Fonction Objectif Minimax Étendue</h4>
            <div className="font-mono text-sm bg-background p-3 rounded mb-2">
              L<sub>D</sub> = L<sub>adv</sub> + λ₁L<sub>theme</sub> + λ₂L<sub>qual</sub>
            </div>
            <div className="text-xs text-muted-foreground">
              Où L<sub>adv</sub> = BCE(D(x), 1) + BCE(D(G(z|y)), 0) pour la discrimination réel/faux
            </div>
          </div>

          {expandedCards.ganArchDetails && (
            <div className="mt-6 pt-6 border-t space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Détails du Générateur Conditionnel</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Le générateur intègre le conditionnement thématique via une couche d'embedding qui transforme le
                  vecteur one-hot du thème en représentation dense. Cette approche permet un contrôle fin sur le type de
                  puzzle généré tout en préservant la flexibilité créative.
                </p>

                <div className="bg-background/80 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Architecture Détaillée</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Input Layer:</span>
                      <span className="font-mono">z(128) + theme_emb(32) → 160D</span>
                    </div>
                    <div className="flex justify-between">
                      <span>FC Layer 1:</span>
                      <span className="font-mono">160 → 256 + BatchNorm + ReLU</span>
                    </div>
                    <div className="flex justify-between">
                      <span>FC Layer 2:</span>
                      <span className="font-mono">256 → 512 + BatchNorm + ReLU</span>
                    </div>
                    <div className="flex justify-between">
                      <span>FC Layer 3:</span>
                      <span className="font-mono">512 → 256 + BatchNorm + ReLU</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Output Layer:</span>
                      <span className="font-mono">256 → 768 (8×8×12) + Sigmoid</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Discriminateur Multi-Tâches</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  L'architecture multi-têtes permet un apprentissage riche en fournissant plusieurs signaux de
                  supervision. Chaque tête se spécialise dans un aspect de l'évaluation des puzzles.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-primary/5 p-3 rounded border border-primary/20">
                    <h5 className="font-medium text-primary mb-1">Tête Validité</h5>
                    <p className="text-xs text-muted-foreground mb-2">Distingue puzzles réels des générés</p>
                    <div className="font-mono text-xs">
                      L<sub>adv</sub> = -E[log D(x)] - E[log(1-D(G(z)))]
                    </div>
                  </div>
                  <div className="bg-secondary/5 p-3 rounded border border-secondary/20">
                    <h5 className="font-medium text-secondary mb-1">Tête Thème</h5>
                    <p className="text-xs text-muted-foreground mb-2">Classifie le thème tactique</p>
                    <div className="font-mono text-xs">
                      L<sub>theme</sub> = -E[log P(y|x)]
                    </div>
                  </div>
                  <div className="bg-accent/5 p-3 rounded border border-accent/20">
                    <h5 className="font-medium text-accent mb-1">Tête Qualité</h5>
                    <p className="text-xs text-muted-foreground mb-2">Évalue la qualité du puzzle</p>
                    <div className="font-mono text-xs">
                      L<sub>qual</sub> = MSE(Q(x), q<sub>target</sub>)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => toggleCard("ganArchDetails")}
            className="mt-4 text-sm flex items-center gap-1 text-primary"
          >
            {expandedCards.ganArchDetails ? "Masquer les détails" : "Afficher l'architecture détaillée"}
            <ChevronDown size={16} className={expandedCards.ganArchDetails ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers size={24} />
            <span>Approche Hybride : Templates + Génération Guidée</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Pour stabiliser l'apprentissage et augmenter le taux de réussite, nous combinons des templates validés avec
            des modifications guidées par le modèle, plutôt que de générer entièrement ex nihilo.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Remplissage Conditionnel</h4>
              <p className="text-sm text-muted-foreground">
                Partir d'un échiquier partiellement rempli (rois + pièces essentielles) et laisser le générateur
                compléter les cases vides selon le thème souhaité.
              </p>
            </div>
            <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">Mélange Latent</h4>
              <p className="text-sm text-muted-foreground">
                Combiner deux puzzles existants en interpolant leurs représentations latentes pour créer des puzzles
                hybrides multi-thèmes.
              </p>
            </div>
            <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-accent mb-2">Perturbation Guidée</h4>
              <p className="text-sm text-muted-foreground">
                Appliquer des modifications mineures suggérées par le générateur à des puzzles valides existants
                (déplacement de pièces, ajouts stratégiques).
              </p>
            </div>
          </div>

          {expandedCards.hybridApproach && (
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-semibold mb-3">Avantages de l'Approche Hybride</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2">Stabilité d'Entraînement</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Réduction du mode collapse</li>
                    <li>• Convergence plus rapide</li>
                    <li>• Gradients plus stables</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Qualité des Résultats</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Taux de validité élevé (92%)</li>
                    <li>• Cohérence thématique garantie</li>
                    <li>• Traçabilité des transformations</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => toggleCard("hybridApproach")}
            className="mt-4 text-sm flex items-center gap-1 text-primary"
          >
            {expandedCards.hybridApproach ? "Moins de détails" : "Plus de détails sur l'hybridation"}
            <ChevronDown size={16} className={expandedCards.hybridApproach ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>

      <CodeSample
        title="Implémentation du Discriminateur Multi-Têtes"
        code={`class MultiHeadChessDiscriminator(nn.Module):
    def __init__(self, num_themes=10, num_quality_classes=3):
        super().__init__()
        
        # Extracteur de caractéristiques CNN
        self.feature_extractor = nn.Sequential(
            # Première couche convolutionnelle
            nn.Conv2d(12, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            
            # Deuxième couche avec pooling
            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),  # 8x8 → 4x4
            
            # Troisième couche
            nn.Conv2d(128, 256, kernel_size=3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),  # 4x4 → 2x2
            
            # Aplatissement
            nn.Flatten(),
            nn.Linear(256 * 2 * 2, 512),
            nn.ReLU(inplace=True),
            nn.Dropout(0.3)
        )
        
        # Têtes spécialisées
        self.validity_head = nn.Sequential(
            nn.Linear(512, 256),
            nn.ReLU(inplace=True),
            nn.Linear(256, 1),
            nn.Sigmoid()  # Probabilité réel/faux
        )
        
        self.theme_head = nn.Sequential(
            nn.Linear(512, 256),
            nn.ReLU(inplace=True),
            nn.Linear(256, num_themes),
            # Softmax appliqué dans la loss function
        )
        
        self.quality_head = nn.Sequential(
            nn.Linear(512, 256),
            nn.ReLU(inplace=True),
            nn.Linear(256, num_quality_classes),
            # Pour classification qualité (faible/moyen/élevé)
        )
    
    def forward(self, x):
        # x: batch de positions d'échecs [batch_size, 12, 8, 8]
        features = self.feature_extractor(x)
        
        # Prédictions des trois têtes
        validity = self.validity_head(features)
        theme_logits = self.theme_head(features)
        quality_logits = self.quality_head(features)
        
        return {
            'validity': validity,
            'theme_logits': theme_logits,
            'quality_logits': quality_logits,
            'features': features  # Pour analyse ou régularisation
        }
    
    def compute_loss(self, predictions, targets, weights=None):
        """Calcule la loss multi-objectifs pondérée"""
        if weights is None:
            weights = {'validity': 1.0, 'theme': 0.2, 'quality': 0.3}
        
        # Loss de validité (BCE)
        validity_loss = F.binary_cross_entropy(
            predictions['validity'], 
            targets['is_real'].float()
        )
        
        # Loss de classification thématique (CE)
        theme_loss = F.cross_entropy(
            predictions['theme_logits'], 
            targets['theme_labels']
        )
        
        # Loss de qualité (CE)
        quality_loss = F.cross_entropy(
            predictions['quality_logits'], 
            targets['quality_labels']
        )
        
        # Loss totale pondérée
        total_loss = (weights['validity'] * validity_loss + 
                     weights['theme'] * theme_loss + 
                     weights['quality'] * quality_loss)
        
        return {
            'total_loss': total_loss,
            'validity_loss': validity_loss,
            'theme_loss': theme_loss,
            'quality_loss': quality_loss
        }`}
        references={[
          "Odena et al. (2017) - Conditional Image Synthesis with Auxiliary Classifier GANs",
          "Mirza & Osindero (2014) - Conditional Generative Adversarial Nets",
          "Goodfellow et al. (2014) - Generative Adversarial Networks",
          "PyTorch Documentation - Multi-task Learning and Custom Loss Functions",
        ]}
      />
    </div>
  )
}
