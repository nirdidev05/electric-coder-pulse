import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Users } from "lucide-react"

export default function TechnicalInnovations() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Innovations & Contributions</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
                Core Innovations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm text-slate-800 mb-2">1. Multimodal Feature Engineering</h4>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• 100+ technical indicators across multiple timeframes</li>
                  <li>• Cross-asset relationship modeling with rolling correlations</li>
                  <li>• Custom news sentiment lexicon for financial domain</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-slate-800 mb-2">2. Meta-Ensemble Architecture</h4>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Adaptive weighting based on individual model performance</li>
                  <li>• Statistical baseline integration for robustness</li>
                  <li>• Dynamic scaling to align prediction scales</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-slate-800 mb-2">3. Mathematical Correlation Control</h4>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Cholesky decomposition for exact correlation implementation</li>
                  <li>• Fallback mechanisms for numerical stability</li>
                  <li>• Multi-asset coherence preservation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-slate-800 mb-2">4. Production-Ready Pipeline</h4>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Kaggle-compatible dependency management</li>
                  <li>• Robust error handling throughout pipeline</li>
                  <li>• Modular architecture for easy maintenance and extension</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                Project Evolution & Collaboration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-slate-800 mb-2">Team Collaboration</h4>
                <p className="text-xs text-slate-600 mb-3">
                  This solution represents extensive collaboration with Team U23: svoboda18 (lead), Sohaib Zouambia,
                  Wassim Haddad, Tobni Mohamed Islam. The development process involved iterative refinement through
                  multiple submissions with version control managing conflicts and coordinating contributions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-slate-800 mb-2">Development Process</h4>
                <ul className="text-xs text-slate-600 space-y-1 mb-3">
                  <li>• GitHub Repository: HAICK_TSA</li>
                  <li>• Iterative refinement through multiple submissions</li>
                  <li>• Coordinated team contributions via version control</li>
                  <li>• Managed conflicts in competitive ML environment</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Achievement:</strong> The project showcases not only technical excellence but also effective
                  teamwork in competitive machine learning environments, demonstrating both individual expertise and
                  collaborative problem-solving skills.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
