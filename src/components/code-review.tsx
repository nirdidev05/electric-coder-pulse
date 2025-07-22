import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function CodeReview() {
  const strengths = [
    {
      title: "Modular Design",
      description:
        "The AdvancedMarketPredictor class encapsulates all major steps with clean separation into methods (create_advanced_features, train_advanced_ensemble, apply_advanced_correlations, etc.).",
      benefit: "Improves readability and reuse, easier to debug and extend",
    },
    {
      title: "Clear Narrative and Logging",
      description:
        "Code includes many print statements with emojis and descriptions delineating each stage, serving as inline documentation.",
      benefit: "Interactive notebook experience with key results printed",
    },
    {
      title: "Time-Series Aware Validation",
      description:
        "TimeSeriesSplit for cross-validation respects temporal order (no future leakage) and time-based train/validation split (85% past vs 15% recent).",
      benefit: "Critical for financial modeling, correctly implemented",
    },
    {
      title: "Rich Feature Engineering",
      description:
        "Extensive and thoughtful feature construction including domain knowledge (technical indicators, financial ratios, calendar effects, sentiment analysis).",
      benefit: "High creativity and domain understanding, diverse feature set",
    },
    {
      title: "Hyperparameter Optimization",
      description:
        "Optuna integration for automated search instead of manual tuning or defaults, demonstrating professional approach.",
      benefit: "Data-driven parameter finding, likely significant accuracy improvement",
    },
    {
      title: "Ensemble & Post-Processing Innovation",
      description:
        "Custom ensemble and correlation adjustment implemented with numpy, showing sound linear algebra knowledge with robust fallbacks.",
      benefit: "Well-integrated custom methods with clear documentation via printouts",
    },
  ]

  const improvements = [
    {
      title: "Unit Tests & Verification",
      description:
        "Given complexity of methods like apply_advanced_correlations, beneficial to include unit tests or assertions. After correlation adjustment, assert new correlation matrix is close to target.",
      warning: "Even manual sanity checks would increase confidence in each component",
    },
    {
      title: "Logging and Monitoring",
      description:
        "Adding logging mechanism to track metrics over time or iterations. Tracking feature importance changes or validation scores across model versions would provide deeper insights.",
      warning: "Use logging library instead of print statements for more control",
    },
    {
      title: "Scalability of Feature Selection",
      description:
        "SelectKBest with F-test doesn't consider feature redundancy. Fixed K=80 might be suboptimal. More scalable: permutation importance or PCA for dimensionality reduction.",
      warning: "Multivariate selection could yield smaller, equally predictive feature set",
    },
    {
      title: "Code Performance",
      description:
        "Triple nested loops for rolling trends with polyfit, Optuna 50 trials can be slow. Opportunities: vectorizing calculations, reducing redundant computations.",
      warning: "Performance tuning needed for larger datasets or feature counts",
    },
    {
      title: "Model Choice and Ensemble Generality",
      description:
        "Current ensemble weights are manually defined (0.6/0.4 based on thresholds). More general: treat blending as learnable parameter or use stacking approach.",
      warning: "Could extend to more diverse models (ARIMA, neural networks) with stacking",
    },
    {
      title: "Documentation and Report Integration",
      description:
        "Complex parts could use in-line comments explaining math (why Cholesky works, what Savitzky-Golay does). Ensure report stays updated with code.",
      warning: "Generate report metrics automatically from code outputs to avoid discrepancies",
    },
  ]

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Code Review and Quality Assessment</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The project's code reflects a structured approach developed in Kaggle Notebook environment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Strengths */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-6 w-6" />
                4.1 Strengths of the Implementation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {strengths.map((strength, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-sm text-slate-800 mb-2">{strength.title}</h4>
                  <p className="text-xs text-slate-600 mb-2">{strength.description}</p>
                  <div className="bg-green-50 p-2 rounded text-xs text-green-800">✓ {strength.benefit}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Improvements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <AlertCircle className="h-6 w-6" />
                4.2 Suggestions for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {improvements.map((improvement, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-sm text-slate-800 mb-2">{improvement.title}</h4>
                  <p className="text-xs text-slate-600 mb-2">{improvement.description}</p>
                  <div className="bg-orange-50 p-2 rounded text-xs text-orange-800">⚠ {improvement.warning}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Overall Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed mb-4">
                The code quality is good for a research-grade notebook, but moving towards a production scenario would
                require refactoring (packaging the code, adding tests, parameterizing the process, etc.). The
                suggestions above aim to guide such a transition, making the solution more maintainable and extensible
                for future users or deployment.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Production Readiness:</strong> Current implementation excels for research and competition
                  environments. For production deployment, focus on modularity, testing, monitoring, and scalability
                  improvements would be essential.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
