"use client"
import { Brain } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'

export function HeroSection() {
  const t = useTranslation()

  return (
    <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 px-3 sm:px-4 py-2 rounded-full text-primary mb-4 sm:mb-6">
          <Brain size={14} className="sm:size-4" />
          <span className="text-sm sm:text-base">{t.gan.hero.badge}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
          {t.gan.hero.title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-3 sm:mb-4 px-2">
          {t.gan.hero.subtitle}
        </p>
        <div className="text-sm sm:text-base text-muted-foreground max-w-4xl mx-auto px-2">
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
