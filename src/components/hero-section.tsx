"use client"
import { Brain } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'

export function HeroSection() {
  const t = useTranslation()

  return (
    <div className="relative py-20 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full text-primary mb-6">
          <Brain size={16} />
          <span>{t.gan.hero.badge}</span>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t.gan.hero.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
          {t.gan.hero.subtitle}
        </p>
        <div className="text-sm text-muted-foreground max-w-4xl mx-auto">
          <p className="mb-2">
            {t.gan.hero.keyInnovation}
          </p>
          <p>
            {t.gan.hero.performance}
          </p>
        </div>
      </div>
    </div>
  )
}
