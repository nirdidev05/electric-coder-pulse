import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Award, Layers, BarChart3, ArrowRight, MessageSquare, AlertCircle, GitBranch, CheckCircle } from "lucide-react"

export default function PortfolioDocumentation() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Portfolio Documentation & Case Study Highlights</h2>
        </div>

        <div className="space-y-12">
          {/* 3.1 Executive Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-purple-600" />
                3.1 Executive Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed mb-4">
                MarketPulse is a multimodal forecasting solution that combines market price trends with news sentiment
                signals to predict future asset prices. By integrating quantitative and qualitative data, MarketPulse
                outperforms traditional single-modality models, achieving a significant accuracy boost – from a baseline
                of R² ≈ -0.24 to about R² ≈ 0.44 on average (a ~0.68 improvement, reaching the competition's target).
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                Key innovations include a hybrid modeling ensemble (machine learning + statistical model) and a novel
                correlation preservation technique that together ensure both accuracy and realism in forecasts. The
                model captures not just individual price movements, but also the interplay between assets and the
                influence of daily news on market behavior.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-3">Key Achievement Summary</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">0.44</div>
                    <div className="text-sm text-slate-600">Final R² Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">0.89</div>
                    <div className="text-sm text-slate-600">Target Correlation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">68%</div>
                    <div className="text-sm text-slate-600">Improvement</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3.2 Architecture & Workflow Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-6 w-6 text-blue-600" />
                3.2 Architecture & Workflow Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-4">Modular Pipeline Architecture</h4>
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Data Layer (Inputs)",
                      desc: "Historical price data and news data, cleaned and aligned by date",
                      color: "bg-blue-600",
                    },
                    {
                      step: 2,
                      title: "Feature Engineering Layer",
                      desc: "Price-derived, cross-series, time, and news-derived features merged into unified table",
                      color: "bg-green-600",
                    },
                    {
                      step: 3,
                      title: "Modeling Layer (ML Models)",
                      desc: "Three LightGBM regression models operating in parallel, sharing feature generation",
                      color: "bg-purple-600",
                    },
                    {
                      step: 4,
                      title: "Statistical Model & Adjustment",
                      desc: "Baseline predictions and correlation adjustment module for desired correlation structure",
                      color: "bg-orange-600",
                    },
                    {
                      step: 5,
                      title: "Ensemble Layer",
                      desc: "Weighted blend with weights depending on model confidence, leveraging both ML and baseline",
                      color: "bg-red-600",
                    },
                    {
                      step: 6,
                      title: "Output Layer (Post-Processing)",
                      desc: "Smoothing filters and volatility clipping for final predicted price trajectories",
                      color: "bg-teal-600",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                        <div
                          className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold`}
                        >
                          {item.step}
                        </div>
                        <div>
                          <div className="font-medium text-slate-800">{item.title}</div>
                          <div className="text-sm text-slate-600">{item.desc}</div>
                        </div>
                      </div>
                      {index < 5 && <ArrowRight className="mx-auto h-5 w-5 text-slate-400" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Design Philosophy:</strong> This architecture emphasizes modularity – components can be
                  swapped (e.g., BERT-based sentiment, LSTM networks) without altering the whole pipeline, thanks to
                  clear separation of concerns.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 3.3 Results and Key Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-green-600" />
                3.3 Results and Key Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h4 className="font-semibold mb-4 text-slate-800">Quantitative Performance</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-800">0.44-0.45</div>
                    <div className="text-sm text-green-600">Mean R² Score</div>
                    <div className="text-xs text-slate-600 mt-1">Meeting challenge target</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-800">0.88-0.90</div>
                    <div className="text-sm text-blue-600">P1-P3 Correlation</div>
                    <div className="text-xs text-slate-600 mt-1">Target: 0.89</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-800">44%</div>
                    <div className="text-sm text-purple-600">Variance Explained</div>
                    <div className="text-xs text-slate-600 mt-1">Meaningful in finance</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-orange-800">30%</div>
                    <div className="text-sm text-orange-600">Volatility Reduction</div>
                    <div className="text-xs text-slate-600 mt-1">6% → 4.2% daily vol</div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong>Significance:</strong> An R² of 0.44 means the model explains about 44% of variance in price
                    movements when averaged across all assets – a meaningful achievement in financial time-series where
                    much movement is unpredictable noise.
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-4 text-slate-800">Qualitative Insights</h4>
                <div className="space-y-6">
                  {[
                    {
                      icon: MessageSquare,
                      title: "Impact of News Sentiment",
                      content:
                        "News sentiment features were particularly influential for price1 (and to a lesser extent price3). In feature importance rankings, daily news sentiment and 7-day sentiment average often appeared as important predictors for price1.",
                      insight:
                        "This suggests price1 is likely a stock index or large-cap stock sensitive to news cycles, while price2 (perhaps commodity) follows more fundamental patterns.",
                      color: "text-blue-600",
                      bgColor: "bg-blue-50",
                      textColor: "text-blue-800",
                    },
                    {
                      icon: AlertCircle,
                      title: "Overfitting Mitigation",
                      content:
                        "With 100+ features and limited daily data, overfitting was a concern. Addressed through aggressive cross-validation and feature selection. Time-series CV ensured testing on forward-looking splits, discouraging spurious time-specific patterns.",
                      insight:
                        "Validation R² scores remained positive and reasonably close to training scores, indicating successful generalization.",
                      color: "text-yellow-600",
                      bgColor: "bg-yellow-50",
                      textColor: "text-yellow-800",
                    },
                    {
                      icon: GitBranch,
                      title: "Ensemble Effectiveness",
                      content:
                        "The hybrid ensemble (ML + baseline) proved beneficial. For assets with erratic ML predictions or negative validation R², blending with baseline maintained modest positive R², essentially never doing worse than baseline while allowing upside when ML caught genuine signals.",
                      insight:
                        "Combining models yielded results more robust than any single model, handling regime changes better through complementary strengths.",
                      color: "text-purple-600",
                      bgColor: "bg-purple-50",
                      textColor: "text-purple-800",
                    },
                    {
                      icon: CheckCircle,
                      title: "Challenge Objective Fulfillment",
                      content:
                        "The project achieved the main metric goal (mean R² > 0.44) and delivered on ancillary goals: multimodal inputs, simultaneous prediction of all targets, and dynamic correlation control as an innovative twist beyond standard approaches.",
                      insight:
                        "Careful documentation and interpretability aligned with competition's emphasis on clarity, demonstrating that sentiment features and correlation adjustments tangibly boost performance.",
                      color: "text-green-600",
                      bgColor: "bg-green-50",
                      textColor: "text-green-800",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <h5 className="font-medium text-slate-700 mb-3 flex items-center gap-2">
                        <item.icon className={`h-4 w-4 ${item.color}`} />
                        {item.title}
                      </h5>
                      <p className="text-sm text-slate-600 mb-3">{item.content}</p>
                      <div className={`${item.bgColor} p-3 rounded-lg`}>
                        <p className={`text-xs ${item.textColor}`}>
                          <strong>
                            {item.title === "Impact of News Sentiment"
                              ? "Domain Insight:"
                              : item.title === "Overfitting Mitigation"
                                ? "Validation:"
                                : item.title === "Ensemble Effectiveness"
                                  ? "Robustness:"
                                  : "Innovation:"}
                          </strong>{" "}
                          {item.insight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
