import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Target, TrendingUp, BarChart3, CheckCircle } from "lucide-react"

export default function ProjectContext() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Context & Goals</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Challenge Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                "Multimodal Market Forecasting with News" is a time-series prediction challenge that combines
                quantitative market data and qualitative news data to simulate real-world financial forecasting
                complexities. The dataset includes three asset price series (price1, price2, price3) alongside a stream
                of news headlines with timestamps.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The goal is to leverage both modalities to improve predictive performance beyond traditional
                single-source approaches.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                Primary Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Multivariate Time-Series Forecasting:</strong> Design a model to capture patterns across
                    three asset price series over time
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>News Sentiment Integration:</strong> Incorporate textual news data by extracting sentiment
                    signals to inform price predictions
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Accuracy Target:</strong> Achieve R² {">"} 0.44, a significant improvement over baseline R²
                    ≈ -0.24
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Realism Metrics:</strong> Maintain realistic market behavior including asset correlations
                    (P1-P3: ~0.89) and reasonable volatility
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-purple-600" />
              Evaluation Framework
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">65%</div>
                <div className="text-sm font-medium text-slate-700">Performance</div>
                <div className="text-xs text-slate-600">Mean R² score across three targets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
                <div className="text-sm font-medium text-slate-700">Code Quality</div>
                <div className="text-xs text-slate-600">Modularity, innovation, reproducibility</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15%</div>
                <div className="text-sm font-medium text-slate-700">Documentation</div>
                <div className="text-xs text-slate-600">Well-documented technical report</div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm text-slate-700 text-center">
                <strong>Target Achievement:</strong> MarketPulse aims to demonstrate a ~68% improvement (from R²=-0.24
                to Mean R² score {">"} 0.44) using hybrid modeling with dynamic correlation control and
                sentiment-enhanced features.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
