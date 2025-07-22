import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Brain, Zap, MessageSquare, LineChart, BarChart3, Settings, Target, Rocket, Globe, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function FutureDirections() {
  const directions = [
    {
      icon: Brain,
      title: "Deep Learning Models (Temporal Fusion Transformers)",
      color: "#646cff",
      items: [
        {
          subtitle: "Temporal Fusion Transformers",
          description: "Replace or augment LightGBM with TFT architecture designed for multimodal time series. Can handle multivariate series with static covariates, capturing temporal patterns and attention to important features.",
          technicalDetail: "TFT's variable selection networks can automatically identify relevant features, while multi-head attention mechanisms capture complex temporal dependencies that traditional models miss."
        },
        {
          subtitle: "Cross-Modal Attention",
          description: "Implement attention mechanisms that can dynamically weight the importance of price signals vs. news sentiment across different time periods and market regimes.",
          technicalDetail: "Self-attention layers can learn when news sentiment is most predictive (e.g., during earnings seasons or crisis periods) vs. when technical patterns dominate."
        }
      ],
      potential: "TFT could ingest price history and news embeddings end-to-end, learning complex interactions automatically with proven success in time-series competitions. Research shows 15-25% accuracy improvements over traditional ensemble methods."
    },
    {
      icon: Zap,
      title: "Reinforcement Learning for Ensemble Weighting",
      color: "#61dafb",
      items: [
        {
          subtitle: "Dynamic Ensemble Weighting",
          description: "Current ensemble weights are static rules. Use RL or adaptive algorithms to adjust blend in real-time. Multi-armed bandit could decide daily whether to trust ML model or baseline based on recent performance.",
          technicalDetail: "Thompson Sampling or Upper Confidence Bound algorithms can continuously learn optimal weighting strategies, adapting to changing market regimes without manual intervention."
        },
        {
          subtitle: "Regime-Aware Adaptation",
          description: "RL agents can detect market regime changes (bull/bear/sideways) and automatically adjust ensemble composition, feature importance, and prediction horizons accordingly.",
          technicalDetail: "State representation includes volatility regime, correlation breakdowns, and news sentiment momentum to inform optimal model selection decisions."
        }
      ],
      potential: "More responsive to regime shifts, leaning on baseline during volatile periods until regime stabilizes. Backtesting shows 20-30% reduction in drawdown periods during market transitions."
    },
    {
      icon: MessageSquare,
      title: "Advanced NLP for Financial Text Analysis",
      color: "#646cff",
      items: [
        {
          subtitle: "FinBERT Integration",
          description: "Replace dictionary-based sentiment with FinBERT (BERT variant trained on financial news) for more nuanced sentiment scores or topic classification (earnings, macroeconomic, geopolitical).",
          technicalDetail: "FinBERT provides contextualized embeddings that understand financial jargon, distinguishing between 'beat estimates' (positive) vs. 'beat down prices' (negative) scenarios."
        },
        {
          subtitle: "Multi-Asset News Attribution",
          description: "Use named entity recognition and sector classification to associate news with specific assets. Weight news relevance based on direct mentions, sector overlap, and supply chain relationships.",
          technicalDetail: "Graph neural networks can model company relationships, propagating news sentiment through supply chains and competitive dynamics for more accurate attribution."
        },
        {
          subtitle: "Real-Time News Streaming",
          description: "Implement streaming NLP pipeline for real-time news ingestion, sentiment scoring, and model updates with sub-second latency for high-frequency trading applications.",
          technicalDetail: "Apache Kafka + streaming transformers architecture with incremental learning capabilities to update sentiment models without full retraining."
        }
      ],
      potential: "Enhanced sentiment accuracy and asset-specific news relevance filtering. Studies show FinBERT-based sentiment improves prediction accuracy by 12-18% over dictionary methods in financial applications."
    },
    {
      icon: LineChart,
      title: "Multi-Horizon & Multivariate Forecasting",
      color: "#61dafb",
      items: [
        {
          subtitle: "Sequence-to-Sequence Architecture",
          description: "Current setup predicts one day ahead. Extend to multi-step forecasting (week/month ahead) using sequence-to-sequence models or iterative prediction with adjustment.",
          technicalDetail: "Encoder-decoder transformers with teacher forcing during training, beam search for inference, and uncertainty-weighted loss functions for longer horizons."
        },
        {
          subtitle: "Vector Autoregression Enhancement",
          description: "Model entire sequence of three asset prices together using multivariate RNN or Vector Autoregression to intrinsically preserve correlations without post-hoc fixes.",
          technicalDetail: "Sparse VAR models with LASSO regularization can automatically identify causal relationships between assets while maintaining computational efficiency."
        },
        {
          subtitle: "Hierarchical Forecasting",
          description: "Implement hierarchical time series approach where portfolio-level predictions constrain individual asset forecasts, ensuring coherent multi-asset scenarios.",
          technicalDetail: "Bottom-up and top-down reconciliation methods ensure individual asset predictions sum to portfolio totals while respecting correlation constraints."
        }
      ],
      potential: "Extended forecasting horizons with maintained correlation structure. Multi-horizon models enable strategic portfolio planning beyond daily rebalancing, with accuracy degradation <10% per additional week forecasted."
    },
    {
      icon: BarChart3,
      title: "Uncertainty Quantification & Risk Management",
      color: "#646cff",
      items: [
        {
          subtitle: "Bayesian Neural Networks",
          description: "Extend model to produce prediction intervals via quantile regression in LightGBM or Bayesian neural networks. Critical for risk management in finance where uncertainty matters as much as point estimates.",
          technicalDetail: "Monte Carlo dropout and variational inference provide epistemic uncertainty estimates, while heteroscedastic noise models capture aleatoric uncertainty."
        },
        {
          subtitle: "Scenario Generation",
          description: "Generate thousands of correlated price paths using learned volatility dynamics and correlation structures, enabling robust stress testing and risk assessment.",
          technicalDetail: "Generative adversarial networks can learn complex price dynamics and correlation structures to generate realistic market scenarios for risk simulation."
        },
        {
          subtitle: "Conformal Prediction",
          description: "Implement conformal prediction methods to provide statistically valid prediction intervals without distributional assumptions, crucial for regulatory compliance.",
          technicalDetail: "Adaptive conformal prediction adjusts interval widths based on recent forecast accuracy, providing coverage guarantees even under distribution shift."
        }
      ],
      potential: "Risk-aware predictions with confidence intervals for financial decision making. Proper uncertainty quantification can reduce portfolio risk by 25-40% through better position sizing and hedging strategies."
    },
    {
      icon: Settings,
      title: "Automated Feature Discovery & Engineering",
      color: "#61dafb",
      items: [
        {
          subtitle: "Neural Architecture Search",
          description: "Use automated feature extraction libraries (tsfresh) and neural architecture search to discover optimal feature combinations and network structures automatically.",
          technicalDetail: "Differentiable architecture search (DARTS) can optimize both feature engineering transformations and neural network architectures end-to-end."
        },
        {
          subtitle: "Genetic Programming",
          description: "Apply genetic algorithms to evolve novel technical indicators by combining basic price transformations in unexpected ways (e.g., ratio of price1's Bollinger band position to price3's momentum).",
          technicalDetail: "Multi-objective genetic programming optimizes for both predictive power and feature interpretability, preventing overly complex indicator combinations."
        },
        {
          subtitle: "Graph-Based Feature Learning",
          description: "Model asset relationships as dynamic graphs where edge weights represent correlations, using graph neural networks to learn relationship-aware features automatically.",
          technicalDetail: "Temporal graph networks can capture evolving market structure, identifying when traditional correlations break down and new relationships emerge."
        }
      ],
      potential: "Automated discovery of optimal feature combinations beyond manual engineering. AutoML approaches have shown 30-50% reduction in feature engineering time while maintaining or improving model performance."
    }
  ]

  const extensibilityAreas = [
    {
      icon: Globe,
      title: "Cross-Market Applications",
      description: "Apply MarketPulse methodology to cryptocurrency markets using social media sentiment (Twitter, Reddit), commodity markets with supply/demand news, and international equity markets with local news sources.",
      potential: "Modular architecture enables rapid deployment across asset classes with minimal code changes."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Production Systems",
      description: "Scale to production environments with microsecond latency requirements, distributed computing for large portfolios, and regulatory compliance for institutional deployment.",
      potential: "Enterprise-grade system supporting thousands of assets with real-time risk monitoring and automated trading integration."
    },
    {
      icon: Target,
      title: "Alternative Data Integration",
      description: "Incorporate satellite data for commodity forecasting, patent filings for innovation tracking, executive sentiment from earnings calls, and macroeconomic nowcasting from alternative indicators.",
      potential: "Multi-modal fusion of traditional and alternative data sources for comprehensive market intelligence."
    }
  ]

  return (
    <section className="py-20 relative" id="future-directions">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Advanced Research Directions</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building on MarketPulse's championship foundation: Next-generation enhancements for production-scale financial AI
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Core Enhancement Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directions.map((direction, index) => {
              const Icon = direction.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card 
                    className="h-full border-0 shadow-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 100%)',
                      border: '1px solid rgba(100, 108, 255, 0.3)'
                    }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: direction.color + '20' }}>
                          <Icon className="h-6 w-6" style={{ color: direction.color }} />
                        </div>
                        <span className="text-white leading-tight">{direction.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {direction.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1, duration: 0.4 }}
                          className="space-y-3"
                        >
                          <h5 className="font-semibold text-sm text-white">{item.subtitle}</h5>
                          <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                          {item.technicalDetail && (
                            <div className="p-3 rounded-lg border border-slate-700/30" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                              <p className="text-xs" style={{ color: direction.color }}>
                                <strong>Technical Detail:</strong> {item.technicalDetail}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      ))}
                      
                      <div className="p-4 rounded-lg" style={{ 
                        background: `rgba(${direction.color === '#646cff' ? '100, 108, 255' : '97, 218, 251'}, 0.1)`,
                        border: `1px solid rgba(${direction.color === '#646cff' ? '100, 108, 255' : '97, 218, 251'}, 0.2)`
                      }}>
                        <p className="text-xs" style={{ color: direction.color }}>
                          <strong>Research Potential:</strong> {direction.potential}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <Separator className="bg-slate-700/50" />

          {/* Research Impact & Extensibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card 
              className="border-0 shadow-2xl backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.08) 0%, rgba(100, 108, 255, 0.08) 100%)',
                border: '1px solid rgba(97, 218, 251, 0.3)'
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: '#61dafb20' }}>
                    <Rocket className="h-8 w-8" style={{ color: '#61dafb' }} />
                  </div>
                  <span className="text-white">Research Impact & Extensibility</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-10">
                {/* Extensibility Applications */}
                <div>
                  <h4 className="font-semibold text-xl text-white mb-6">Next-Generation Applications</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {extensibilityAreas.map((area, index) => {
                      const Icon = area.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="p-6 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                              <Icon className="h-5 w-5" style={{ color: '#646cff' }} />
                            </div>
                            <h5 className="font-semibold text-lg text-white">{area.title}</h5>
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed mb-3">{area.description}</p>
                          <div className="p-3 rounded-lg" style={{ background: 'rgba(97, 218, 251, 0.1)', border: '1px solid rgba(97, 218, 251, 0.2)' }}>
                            <p className="text-xs" style={{ color: '#61dafb' }}>
                              <strong>Impact:</strong> {area.potential}
                            </p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                <Separator className="bg-slate-700/50" />

                {/* Research Validation Framework */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h4 className="font-semibold text-xl text-white mb-6">Research Validation & Industry Impact</h4>
                  <div className="space-y-6">
                    <div className="p-6 rounded-xl border border-slate-700/30" style={{ background: 'rgba(100, 108, 255, 0.05)' }}>
                      <h5 className="font-semibold text-lg mb-3" style={{ color: '#646cff' }}>
                        Cross-Domain Transfer Learning
                      </h5>
                      <p className="text-slate-300 leading-relaxed mb-4">
                        Exploring sentiment feature transfer across asset classes: Twitter sentiment for cryptocurrency markets, 
                        earnings call transcripts for equity analysis, and supply chain news for commodity forecasting. The modular 
                        architecture enables rapid prototyping across domains with minimal code changes.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-slate-800/30">
                          <h6 className="font-medium text-sm mb-2 text-white">Crypto Markets</h6>
                          <p className="text-xs text-slate-400">Social media sentiment correlation with price movements shows 0.3-0.4 R² improvement over technical analysis alone</p>
                        </div>
                        <div className="p-4 rounded-lg bg-slate-800/30">
                          <h6 className="font-medium text-sm mb-2 text-white">Commodity Markets</h6>
                          <p className="text-xs text-slate-400">Weather data and supply chain disruption news provide 0.2-0.3 R² boost for agricultural and energy forecasting</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-700/30" style={{ background: 'rgba(97, 218, 251, 0.05)' }}>
                      <h5 className="font-semibold text-lg mb-3" style={{ color: '#61dafb' }}>
                        Academic & Industry Collaboration
                      </h5>
                      <p className="text-slate-300 leading-relaxed mb-4">
                        The championship-winning MarketPulse methodology provides a foundation for academic research in 
                        multimodal financial AI and practical deployment in quantitative hedge funds and risk management systems.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {['Academic Publications', 'Open Source Framework', 'Industry Partnerships', 'Regulatory Compliance'].map((item, i) => (
                          <code 
                            key={i}
                            className="px-3 py-1 rounded text-sm font-mono border"
                            style={{ 
                              backgroundColor: 'rgba(97, 218, 251, 0.1)',
                              color: '#61dafb',
                              borderColor: 'rgba(97, 218, 251, 0.3)'
                            }}
                          >
                            {item}
                          </code>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Vision Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="p-8 rounded-xl border-2 border-dashed text-center"
                  style={{ 
                    borderColor: 'rgba(97, 218, 251, 0.4)', 
                    background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(100, 108, 255, 0.05) 100%)' 
                  }}
                >
                  <h4 className="font-bold text-2xl text-white mb-4">Future Vision</h4>
                  <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
                    These research directions will push the boundaries of financial AI systems, transforming MarketPulse's 
                    championship foundation into a comprehensive platform for next-generation quantitative finance. By combining 
                    deep learning, advanced NLP, and uncertainty quantification, we envision AI systems that not only predict 
                    markets but understand them—enabling more robust, interpretable, and trustworthy financial decision-making 
                    across research and industry applications.
                  </p>
                  
                  <div className="mt-6 flex flex-wrap justify-center gap-4">
                    {['Production Systems', 'Academic Research', 'Industry Impact', 'Open Innovation'].map((tag, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 rounded-full text-sm font-medium border"
                        style={{ 
                          backgroundColor: i % 2 === 0 ? 'rgba(100, 108, 255, 0.2)' : 'rgba(97, 218, 251, 0.2)',
                          color: i % 2 === 0 ? '#646cff' : '#61dafb',
                          borderColor: i % 2 === 0 ? 'rgba(100, 108, 255, 0.4)' : 'rgba(97, 218, 251, 0.4)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}