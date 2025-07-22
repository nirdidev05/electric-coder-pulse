import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Target, TrendingUp, BarChart3, CheckCircle, Trophy, Calendar, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function ProjectContext() {
  const objectives = [
    {
      title: "Multivariate Time-Series Forecasting",
      description: "Design a model to capture patterns across three asset price series over time",
      color: "#646cff"
    },
    {
      title: "News Sentiment Integration", 
      description: "Incorporate textual news data by extracting sentiment signals to inform price predictions",
      color: "#61dafb"
    },
    {
      title: "Accuracy Target",
      description: "Achieve R² > 0.44, a significant improvement over baseline R² ≈ -0.24",
      color: "#646cff"
    },
    {
      title: "Realism Metrics",
      description: "Maintain realistic market behavior including asset correlations (P1-P3: ~0.89) and reasonable volatility",
      color: "#61dafb"
    }
  ]

  const evaluationMetrics = [
    { percentage: "65%", label: "Performance", description: "Mean R² score across three targets", color: "#646cff" },
    { percentage: "20%", label: "Code Quality", description: "Modularity, innovation, reproducibility", color: "#61dafb" },
    { percentage: "15%", label: "Documentation", description: "Well-documented technical report", color: "#646cff" }
  ]

  return (
    <section className="py-20 relative" id="context">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Project Context & Challenge</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            HAICK 2025 Time Series Analysis Challenge: Multimodal Market Forecasting
          </p>
        </motion.div>

        {/* Challenge Info Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Challenge Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card 
              className="h-full border-0 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.1) 0%, rgba(97, 218, 251, 0.05) 100%)',
                border: '1px solid rgba(100, 108, 255, 0.2)'
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                    <Target className="h-6 w-6" style={{ color: '#646cff' }} />
                  </div>
                  <span className="text-white text-xl">Challenge Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  <strong style={{ color: '#61dafb' }}>"Multimodal Market Forecasting with News"</strong> is a sophisticated 
                  time-series prediction challenge combining quantitative market data with qualitative news sentiment 
                  to simulate real-world financial forecasting complexities.
                </p>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Dataset includes <span style={{ color: '#646cff' }} className="font-semibold">three asset price series</span> alongside 
                    <span style={{ color: '#61dafb' }} className="font-semibold"> timestamped news headlines</span>, 
                    requiring innovative multimodal integration approaches.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#646cff' }}>3</div>
                    <div className="text-xs text-slate-400">Assets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#61dafb' }}>6</div>
                    <div className="text-xs text-slate-400">Weeks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#646cff' }}>12</div>
                    <div className="text-xs text-slate-400">Teams</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Primary Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card 
              className="h-full border-0 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(100, 108, 255, 0.05) 100%)',
                border: '1px solid rgba(97, 218, 251, 0.2)'
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#61dafb20' }}>
                    <TrendingUp className="h-6 w-6" style={{ color: '#61dafb' }} />
                  </div>
                  <span className="text-white text-xl">Primary Objectives</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {objectives.map((objective, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/20 border border-slate-700/30"
                    >
                      <CheckCircle 
                        className="h-5 w-5 mt-0.5 flex-shrink-0" 
                        style={{ color: objective.color }}
                      />
                      <div>
                        <h4 className="font-semibold text-white text-sm mb-1">
                          {objective.title}
                        </h4>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {objective.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Evaluation Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card 
            className="border-0 shadow-2xl backdrop-blur-sm"
            style={{ 
              background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 50%, rgba(100, 108, 255, 0.08) 100%)',
              border: '1px solid rgba(100, 108, 255, 0.3)'
            }}
          >
            <CardHeader className="text-center pb-6">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <div className="p-3 rounded-xl" style={{ backgroundColor: '#646cff20' }}>
                  <BarChart3 className="h-8 w-8" style={{ color: '#646cff' }} />
                </div>
                <span className="text-white">Evaluation Framework</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Metrics Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {evaluationMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="text-center p-6 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all duration-300"
                  >
                    <div 
                      className="text-4xl font-bold mb-3" 
                      style={{ color: metric.color }}
                    >
                      {metric.percentage}
                    </div>
                    <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                    <div className="text-sm text-slate-400 leading-relaxed">{metric.description}</div>
                  </motion.div>
                ))}
              </div>

              <Separator className="my-8 bg-slate-700/50" />

              {/* Achievement Target */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="p-6 rounded-xl border-2 border-dashed"
                style={{ 
                  borderColor: '#61dafb40',
                  background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(100, 108, 255, 0.05) 100%)'
                }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Trophy className="h-6 w-6" style={{ color: '#61dafb' }} />
                  <h3 className="text-xl font-bold text-white">Achievement Target</h3>
                </div>
                <p className="text-center text-slate-300 leading-relaxed">
                  <strong style={{ color: '#61dafb' }}>MarketPulse v3.0</strong> demonstrates a remarkable{' '}
                  <span className="font-bold text-2xl" style={{ color: '#646cff' }}>68% improvement</span> 
                  {' '}(from R²=-0.24 to Mean R² score superior 0.44) using our innovative{' '}
                  <span style={{ color: '#61dafb' }} className="font-semibold">hybrid modeling approach</span> with{' '}
                  <span style={{ color: '#646cff' }} className="font-semibold">dynamic correlation control</span> and{' '}
                  <span style={{ color: '#61dafb' }} className="font-semibold">sentiment-enhanced features</span>.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-6 pt-4 border-t border-slate-700/30">
                  <div className="text-center">
                    <div className="text-lg font-bold" style={{ color: '#646cff' }}>R² superior 0.44</div>
                    <div className="text-sm text-slate-400">Target Achievement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold" style={{ color: '#61dafb' }}>1st Place</div>
                    <div className="text-sm text-slate-400">Final Ranking</div>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}