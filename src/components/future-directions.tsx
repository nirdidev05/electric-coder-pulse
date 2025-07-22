import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, MessageSquare, LineChart, BarChart3, Settings } from "lucide-react"

export default function FutureDirections() {
  const directions = [
    {
      icon: Brain,
      title: "Deep Learning Models",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-800",
      items: [
        {
          subtitle: "Temporal Fusion Transformers",
          description:
            "Replace or augment LightGBM with TFT architecture designed for multimodal time series. Can handle multivariate series with static covariates, capturing temporal patterns and attention to important features.",
        },
      ],
      potential:
        "TFT could ingest price history and news embeddings end-to-end, learning complex interactions automatically with proven success in time-series competitions.",
    },
    {
      icon: Zap,
      title: "Reinforcement Learning",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-800",
      items: [
        {
          subtitle: "Dynamic Ensemble Weighting",
          description:
            "Current ensemble weights are static rules. Use RL or adaptive algorithms to adjust blend in real-time. Multi-armed bandit could decide daily whether to trust ML model or baseline based on recent performance.",
        },
      ],
      potential:
        "More responsive to regime shifts, leaning on baseline during volatile periods until regime stabilizes.",
    },
    {
      icon: MessageSquare,
      title: "Advanced NLP",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
      items: [
        {
          subtitle: "FinBERT Integration",
          description:
            "Replace dictionary-based sentiment with FinBERT (BERT variant trained on financial news) for more nuanced sentiment scores or topic classification (earnings, macroeconomic, geopolitical).",
        },
        {
          subtitle: "News Event Filtering",
          description:
            "Use NLP to associate news with specific assets or sectors, weighting relevant news more heavily (e.g., commodity prices react more to inventory reports than generic business news).",
        },
      ],
      potential: "Enhanced sentiment accuracy and asset-specific news relevance filtering.",
    },
    {
      icon: LineChart,
      title: "Multi-Horizon Forecasting",
      color: "text-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-800",
      items: [
        {
          subtitle: "Sequence Modeling",
          description:
            "Current setup predicts one day ahead. Extend to multi-step forecasting (week/month ahead) using sequence-to-sequence models or iterative prediction with adjustment.",
        },
        {
          subtitle: "Multivariate Approaches",
          description:
            "Model entire sequence of three asset prices together (Vector Autoregression, multivariate RNN) to intrinsically preserve correlations without post-hoc fixes.",
        },
      ],
      potential: "Extended forecasting horizons with maintained correlation structure.",
    },
    {
      icon: BarChart3,
      title: "Uncertainty Quantification",
      color: "text-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-800",
      items: [
        {
          subtitle: "Prediction Intervals",
          description:
            "Extend model to produce prediction intervals via quantile regression in LightGBM or Bayesian neural networks. Critical for risk management in finance.",
        },
        {
          subtitle: "Monte Carlo Simulation",
          description:
            "Simulate many paths via stochastic baseline with Cholesky method ensuring correct correlation, blending ML forecast with Monte Carlo for variance assessment.",
        },
      ],
      potential: "Risk-aware predictions with confidence intervals for financial decision making.",
    },
    {
      icon: Settings,
      title: "Automated Feature Discovery",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-800",
      items: [
        {
          subtitle: "tsfresh Integration",
          description:
            "Use automated feature extraction libraries or deep learning feature extractors to complement manual technical indicators. Current set is rich but manually crafted.",
        },
        {
          subtitle: "Genetic Algorithms",
          description:
            "Apply search methods to discover novel feature combinations or transformations (e.g., spread between price1 and price3's 10-day moving averages).",
        },
      ],
      potential: "Automated discovery of optimal feature combinations beyond manual engineering.",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Future Directions</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The project opens several avenues for further enhancement and exploration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directions.map((direction, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <direction.icon className={`h-5 w-5 ${direction.color}`} />
                  {direction.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {direction.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h5 className="font-medium text-sm text-slate-700 mb-2">{item.subtitle}</h5>
                    <p className="text-xs text-slate-600">{item.description}</p>
                  </div>
                ))}
                <div className={`${direction.bgColor} p-3 rounded-lg`}>
                  <p className={`text-xs ${direction.textColor}`}>
                    <strong>Potential:</strong> {direction.potential}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Research Impact & Extensibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Extensibility to Other Markets</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  It would be interesting to apply this approach to other datasets (different stock indices, crypto
                  prices with social media sentiment). The modular design allows plugging in different data fairly
                  easily, requiring retraining and hyperparameter tuning but maintaining the overall pipeline structure.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Research Validation</h4>
                <p className="text-slate-700 leading-relaxed">
                  Exploring how well sentiment features transfer to other contexts (Twitter sentiment for crypto, etc.)
                  could be valuable research. The financial world is an ideal playground for multimodal, hybrid
                  approaches – as this project showed, there is great benefit in combining numerical analysis with
                  textual news understanding.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <p className="text-sm text-slate-700 text-center">
                  <strong>Vision:</strong> These directions will further push the performance and reliability of market
                  forecasting systems in research and industry, building on MarketPulse's foundation of successful
                  multimodal integration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
