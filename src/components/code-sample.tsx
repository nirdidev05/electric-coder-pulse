"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'

interface CodeSampleProps {
  title: string
  code: string
  references?: string[]
}

export function CodeSample({ title, code, references }: CodeSampleProps) {
  const t = useTranslation()

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <Code size={18} className="sm:size-5" />
          <span className="truncate">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-background/90 p-3 sm:p-4 rounded-lg mb-4 overflow-x-auto">
          <pre className="text-[10px] sm:text-xs lg:text-sm font-mono whitespace-pre-wrap sm:whitespace-pre">
            <code>{code}</code>
          </pre>
        </div>
        {references && (
          <div className="mt-4 pt-4 border-t">
            <h4 className="text-sm font-medium mb-2">{t.gan.common.references}</h4>
            <ul className="text-xs space-y-1 text-muted-foreground">
              {references.map((ref, index) => (
                <li key={index} className="break-words">• {ref}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
