import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Settings, Filter, TrendingDown, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export default function PostProcessingTab() {
  const processingSteps = [
    {
      icon: Filter,
      title: "Smoothening with Savitzky–Golay Filter",
      color: "#646cff",
      content: `Raw predictions might be noisy with day-to-day zig-zags. To reduce high-frequency noise, a Savitzky-Golay filter is applied to each predicted series. This filter fits a low-degree polynomial to a sliding window and produces smoothed values.`,
      parameters: {
        title: "Filter Parameters",
        items: ["Window: up to 11 days", "Polynomial degree: 3", "Blending: 70% smoothed + 30% original"],
        color: "#646cff"
      },
      benefits: {
        title: "Benefits",
        items: ["Preserves trend features better than simple MA", "Reduces jagged day-to-day variation", "Maintains overall shape (peaks and troughs)"],
        color: "#61dafb"
      }
    },
    {
      icon: TrendingDown,
      title: "Volatility Capping",
      color: "#61dafb",
      content: `Daily returns of predictions are analyzed for volatility. If predicted series is excessively volatile (> 5% standard deviation of daily returns), it is scaled down.`,
      code: `if predicted_volatility > 0.05:  # 5% daily max
    scaling_factor = 0.05 / predicted_volatility
    # Apply factor to return deviations
    # First day price remains same, subsequent days recomputed from scaled returns`,
      tradeoff: "Slightly sacrifices some short-term variability (likely unpredictable anyway) for cleaner, more credible forecast trajectory. Prevents unrealistic scenarios like stocks doubling in one week from pure noise."
    }
  ]

  const impactResults = [
    {
      title: "Smoothing Results",
      description: "Eliminates high-frequency noise while preserving meaningful trend components for evaluation focus.",
      color: "#646cff"
    },
    {
      title: "Volatility Results", 
      description: "~30% volatility reduction for most volatile series, bringing daily vol from ~6% to ~4.2% for realistic behavior.",
      color: "#61dafb"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
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
              <Settings className="h-8 w-8" style={{ color: '#61dafb' }} />
            </div>
            <span className="text-white">2.4 Post-Processing of Predictions</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-10">
          {processingSteps.map((step, stepIndex) => {
            const Icon = step.icon
            return (
              <motion.div
                key={stepIndex}
                initial={{ opacity: 0, x: stepIndex % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: stepIndex * 0.2, duration: 0.6 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: step.color + '20' }}>
                    <Icon className="h-6 w-6" style={{ color: step.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-white mb-3">{step.title}</h4>
                    <p className="text-slate-300 leading-relaxed">{step.content}</p>
                  </div>
                </div>

                {/* Parameters and Benefits for Savitzky-Golay */}
                {step.parameters && step.benefits && (
                  <div className="grid md:grid-cols-2 gap-6 ml-16">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="p-4 rounded-lg border border-slate-700/30"
                      style={{ background: `rgba(${step.parameters.color === '#646cff' ? '100, 108, 255' : '97, 218, 251'}, 0.1)` }}
                    >
                      <h5 className="font-medium text-sm mb-3" style={{ color: step.parameters.color }}>
                        {step.parameters.title}
                      </h5>
                      <ul className="text-xs space-y-1" style={{ color: step.parameters.color }}>
                        {step.parameters.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="p-4 rounded-lg border border-slate-700/30"
                      style={{ background: `rgba(${step.benefits.color === '#61dafb' ? '97, 218, 251' : '100, 108, 255'}, 0.1)` }}
                    >
                      <h5 className="font-medium text-sm mb-3" style={{ color: step.benefits.color }}>
                        {step.benefits.title}
                      </h5>
                      <ul className="text-xs space-y-1" style={{ color: step.benefits.color }}>
                        {step.benefits.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <span>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                )}

                {/* Code and Tradeoff for Volatility Capping */}
                {step.code && (
                  <div className="ml-16 space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="p-4 rounded-lg bg-[#1E1E2F] border border-slate-700/50"
                    >
                      <h5 className="font-medium text-sm mb-3" style={{ color: step.color }}>
                        Volatility Control Process
                      </h5>
                      <pre className="text-xs text-slate-300">
                        {step.code}
                      </pre>
                    </motion.div>
                    
                    {step.tradeoff && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="p-4 rounded-lg border border-yellow-500/20"
                        style={{ background: 'rgba(255, 193, 7, 0.1)' }}
                      >
                        <p className="text-sm text-yellow-300">
                          <strong>Trade-off:</strong> {step.tradeoff}
                        </p>
                      </motion.div>
                    )}
                  </div>
                )}

                {stepIndex < processingSteps.length - 1 && (
                  <Separator className="bg-slate-700/50 mt-8" />
                )}
              </motion.div>
            )
          })}

          <Separator className="bg-slate-700/50" />

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                <BarChart3 className="h-6 w-6" style={{ color: '#646cff' }} />
              </div>
              <h4 className="font-semibold text-xl text-white">Impact Summary</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {impactResults.map((result, resultIndex) => (
                <motion.div
                  key={resultIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: resultIndex * 0.1, duration: 0.4 }}
                  className="p-6 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all duration-300"
                >
                  <h5 className="font-medium text-lg mb-3" style={{ color: result.color }}>
                    {result.title}
                  </h5>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {result.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}