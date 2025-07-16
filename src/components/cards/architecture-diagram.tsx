"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Layout, ChevronDown } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'

interface ArchitectureDiagramProps {
  expanded: boolean
  toggle: () => void
}

export function ArchitectureDiagram({ expanded, toggle }: ArchitectureDiagramProps) {
  const t = useTranslation()

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layout size={24} />
          <span>{t.gan.ganArchitecture.title}</span>
        </CardTitle>
        <CardDescription>
          {t.gan.ganArchitecture.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src="/architecture_diagram.png"
          alt={t.gan.ganArchitecture.title}
          className="w-full rounded-md"
        />

        {expanded && (
          <div className="mt-6 pt-6 border-t space-y-4">
            <h4 className="font-semibold mb-3">{t.gan.common.details}</h4>
            <p className="text-sm text-muted-foreground">
              {t.gan.ganArchitecture.hybridApproach.description}
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>{t.gan.ganArchitecture.conditionalGenerator.title}</li>
              <li>{t.gan.ganArchitecture.multiHeadDiscriminator.title}</li>
              <li>{t.gan.ganArchitecture.hybridApproach.advantages.stability.title}</li>
              <li>{t.gan.ganArchitecture.hybridApproach.advantages.quality.title}</li>
            </ul>
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