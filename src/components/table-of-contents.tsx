import { Card, CardContent } from "@/components/ui/card"
import { Target, Settings, Award, Code2, Lightbulb, Activity } from "lucide-react"

export default function TableOfContents() {
  const sections = [
    {
      icon: Target,
      title: "1. Project Context & Goals",
      description: "Challenge overview, objectives, and evaluation criteria",
      color: "text-blue-600",
    },
    {
      icon: Settings,
      title: "2. Technical Analysis & Methodology",
      description: "Data pipeline, feature engineering, modeling approach",
      color: "text-green-600",
    },
    {
      icon: Award,
      title: "3. Portfolio Documentation",
      description: "Executive summary, architecture, results & insights",
      color: "text-purple-600",
    },
    {
      icon: Code2,
      title: "4. Code Review & Quality",
      description: "Implementation strengths and improvement suggestions",
      color: "text-orange-600",
    },
    {
      icon: Lightbulb,
      title: "5. Future Directions",
      description: "Enhancement opportunities and research directions",
      color: "text-yellow-600",
    },
    {
      icon: Activity,
      title: "6. Implementation Analysis",
      description: "Block-by-block code analysis and technical innovations",
      color: "text-red-600",
    },
  ]

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Technical Report Contents</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <section.icon className={`h-4 w-4 ${section.color}`} />
                  <span className="font-medium text-sm">{section.title}</span>
                </div>
                <p className="text-xs text-slate-600">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
