"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Cpu, ChevronDown, Brain, Target, Layers } from "lucide-react"
import { CodeSample } from "../code-sample"
import { useTranslation } from '@/hooks/useTranslation';

interface GANArchitectureSectionProps {
  expandedCards: Record<string, boolean>
  toggleCard: (id: string) => void
}

export function GANArchitectureSection({ expandedCards, toggleCard }: GANArchitectureSectionProps) {
  const t = useTranslation();
  
  return (
    <div className="space-y-8">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain size={24} />
            <span>{t.gan.ganArchitecture.title}</span>
          </CardTitle>
          <CardDescription>
            {t.gan.ganArchitecture.subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <Cpu size={20} className="text-primary" />
                <h4 className="font-semibold text-primary">{t.gan.ganArchitecture.conditionalGenerator.title}</h4>
              </div>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• <strong>{t.gan.ganArchitecture.conditionalGenerator.input.split(':')[0]}:</strong> {t.gan.ganArchitecture.conditionalGenerator.input.split(':')[1]}</li>
                <li>• <strong>{t.gan.ganArchitecture.conditionalGenerator.architecture.split(':')[0]}:</strong> {t.gan.ganArchitecture.conditionalGenerator.architecture.split(':')[1]}</li>
                <li>• <strong>{t.gan.ganArchitecture.conditionalGenerator.conditioning.split(':')[0]}:</strong> {t.gan.ganArchitecture.conditionalGenerator.conditioning.split(':')[1]}</li>
                <li>• <strong>{t.gan.ganArchitecture.conditionalGenerator.constraints.split(':')[0]}:</strong> {t.gan.ganArchitecture.conditionalGenerator.constraints.split(':')[1]}</li>
              </ul>
            </div>

            <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
              <div className="flex items-center gap-2 mb-3">
                <Target size={20} className="text-secondary" />
                <h4 className="font-semibold text-secondary">{t.gan.ganArchitecture.multiHeadDiscriminator.title}</h4>
              </div>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• <strong>{t.gan.ganArchitecture.multiHeadDiscriminator.validityHead.split(':')[0]}:</strong> {t.gan.ganArchitecture.multiHeadDiscriminator.validityHead.split(':')[1]}</li>
                <li>• <strong>{t.gan.ganArchitecture.multiHeadDiscriminator.themeHead.split(':')[0]}:</strong> {t.gan.ganArchitecture.multiHeadDiscriminator.themeHead.split(':')[1]}</li>
                <li>• <strong>{t.gan.ganArchitecture.multiHeadDiscriminator.qualityHead.split(':')[0]}:</strong> {t.gan.ganArchitecture.multiHeadDiscriminator.qualityHead.split(':')[1]}</li>
                <li>• <strong>{t.gan.ganArchitecture.multiHeadDiscriminator.architecture.split(':')[0]}:</strong> {t.gan.ganArchitecture.multiHeadDiscriminator.architecture.split(':')[1]}</li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">{t.gan.ganArchitecture.objectiveFunction.title}</h4>
            <div className="font-mono text-sm bg-background p-3 rounded mb-2">
              L<sub>D</sub> = L<sub>adv</sub> + λ₁L<sub>theme</sub> + λ₂L<sub>qual</sub>
            </div>
            <div className="text-xs text-muted-foreground">
              {t.gan.ganArchitecture.objectiveFunction.description}
            </div>
          </div>

          {expandedCards.ganArchDetails && (
            <div className="mt-6 pt-6 border-t space-y-6">
              <div>
                <h4 className="font-semibold mb-3">{t.gan.ganArchitecture.conditionalGenerator.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {t.gan.ganArchitecture.hybridApproach.conditionalFilling.description}
                </p>

                <div className="bg-background/80 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">{t.gan.common.details}</h5>
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
                <h4 className="font-semibold mb-3">{t.gan.ganArchitecture.multiHeadDiscriminator.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {t.gan.ganArchitecture.hybridApproach.description}
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-primary/5 p-3 rounded border border-primary/20">
                    <h5 className="font-medium text-primary mb-1">{t.gan.ganArchitecture.multiHeadDiscriminator.validityHead.split(':')[0]}</h5>
                    <p className="text-xs text-muted-foreground mb-2">{t.gan.ganArchitecture.multiHeadDiscriminator.validityHead.split(':')[1]}</p>
                    <div className="font-mono text-xs">
                      L<sub>adv</sub> = -E[log D(x)] - E[log(1-D(G(z)))]
                    </div>
                  </div>
                  <div className="bg-secondary/5 p-3 rounded border border-secondary/20">
                    <h5 className="font-medium text-secondary mb-1">{t.gan.ganArchitecture.multiHeadDiscriminator.themeHead.split(':')[0]}</h5>
                    <p className="text-xs text-muted-foreground mb-2">{t.gan.ganArchitecture.multiHeadDiscriminator.themeHead.split(':')[1]}</p>
                    <div className="font-mono text-xs">
                      L<sub>theme</sub> = -E[log P(y|x)]
                    </div>
                  </div>
                  <div className="bg-accent/5 p-3 rounded border border-accent/20">
                    <h5 className="font-medium text-accent mb-1">{t.gan.ganArchitecture.multiHeadDiscriminator.qualityHead.split(':')[0]}</h5>
                    <p className="text-xs text-muted-foreground mb-2">{t.gan.ganArchitecture.multiHeadDiscriminator.qualityHead.split(':')[1]}</p>
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
            {expandedCards.ganArchDetails ? t.gan.ganArchitecture.hideDetails : t.gan.ganArchitecture.showDetails}
            <ChevronDown size={16} className={expandedCards.ganArchDetails ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers size={24} />
            <span>{t.gan.ganArchitecture.hybridApproach.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            {t.gan.ganArchitecture.hybridApproach.description}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">{t.gan.ganArchitecture.hybridApproach.conditionalFilling.title}</h4>
              <p className="text-sm text-muted-foreground">
                {t.gan.ganArchitecture.hybridApproach.conditionalFilling.description}
              </p>
            </div>
            <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
              <h4 className="font-semibold text-secondary mb-2">{t.gan.ganArchitecture.hybridApproach.latentMixing.title}</h4>
              <p className="text-sm text-muted-foreground">
                {t.gan.ganArchitecture.hybridApproach.latentMixing.description}
              </p>
            </div>
            <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-accent mb-2">{t.gan.ganArchitecture.hybridApproach.guidedPerturbation.title}</h4>
              <p className="text-sm text-muted-foreground">
                {t.gan.ganArchitecture.hybridApproach.guidedPerturbation.description}
              </p>
            </div>
          </div>

          {expandedCards.hybridApproach && (
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-semibold mb-3">{t.gan.ganArchitecture.hybridApproach.advantages.stability.title}</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2">{t.gan.ganArchitecture.hybridApproach.advantages.stability.title}</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    {t.gan.ganArchitecture.hybridApproach.advantages.stability.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">{t.gan.ganArchitecture.hybridApproach.advantages.quality.title}</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    {t.gan.ganArchitecture.hybridApproach.advantages.quality.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => toggleCard("hybridApproach")}
            className="mt-4 text-sm flex items-center gap-1 text-primary"
          >
            {expandedCards.hybridApproach ? t.gan.ganArchitecture.hideDetails : t.gan.ganArchitecture.showDetails}
            <ChevronDown size={16} className={expandedCards.hybridApproach ? "rotate-180" : ""} />
          </button>
        </CardContent>
      </Card>

      <CodeSample
        title={t.gan.ganArchitecture.multiHeadDiscriminator.title}
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