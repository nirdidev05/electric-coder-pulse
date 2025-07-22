import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Brain, Settings, TrendingUp, GitMerge, Target, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function ModelingTab() {
  const modelingSections = [
    {
      icon: Brain,
      title: "Base Learner – LightGBM Models",
      color: "#646cff",
      content: `Rather than a single unified model, the solution trains three separate LightGBM gradient boosting models, one for each price target. LightGBM was chosen for its speed and ability to handle large feature sets with regularization.`,
      details: [
        {
          subtitle: "Feature Selection",
          description: `For each target, univariate selection (ANOVA F-score via SelectKBest) picks the top 80 features most correlated with that target's movements. This trims away less relevant features, reducing noise and computational cost.`,
          note: "Limitation: This method looks at features individually and may not capture interactions or be fooled by highly correlated features.",
          noteType: "warning"
        },
        {
          subtitle: "Hyperparameter Tuning", 
          description: `Optuna runs 50 trials using 3-fold rolling TimeSeriesSplit cross-validation. Tuned parameters include n_estimators, learning rate, max depth, num_leaves, subsample ratio, colsample_bytree, and L1/L2 regularization.`,
          note: "Advantage: Time-series CV ensures parameters generalize to later periods, mimicking real-world performance.",
          noteType: "success"
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Statistical Baseline Model",
      color: "#61dafb",
      content: `A statistical baseline forecast is generated with domain-inspired heuristics:`,
      points: [
        "Starts from last known price of each asset",
        "Adds small linear trend (e.g., price1 +2.8% per day, price2 +0.1% per day)",
        "Superimposes cyclical oscillation (sinusoidal with 60-day period)",
        "Adds random noise with specified volatility (e.g., 1.2% daily std for price1)"
      ],
      insight: "This baseline acts like a combination of mild upward trend, seasonal cycle, and random noise, roughly calibrated to each asset's historical behavior. It provides a reference level and ensures forecasts don't drift into unrealistic territory."
    },
    {
      icon: GitMerge,
      title: "Ensemble Combination",
      color: "#646cff", 
      content: `The final prediction is a meta-ensemble combining LightGBM predictions and statistical baseline, weighted based on confidence:`,
      code: `ml_score = (R²_model + 1) / 2  # Normalize R² to [0,1] range

if ml_score > 0.3:
    weights = 60% ML prediction, 40% baseline
elif 0 < ml_score <= 0.3:
    weights = 40% ML, 60% baseline  
else:  # ml_score == 0
    weights = 20% ML, 80% baseline`,
      explanation: "This adaptive weighting acknowledges that sometimes a simple trend model might outperform a complex model on certain assets, so it hedges by keeping weight on the baseline while allowing ML to dominate when reliable."
    },
    {
      icon: Target,
      title: "Correlation Preservation",
      color: "#61dafb",
      content: `A notable innovation is post-hoc correlation adjustment. Financial assets often move with correlation, and predicting each independently risks unrealistic joint predictions.`,
      code: `# Ensure predicted series have desired cross-correlations
current_corr = np.corrcoef(predictions.T)          # current 3x3 corr matrix
target_corr = np.array([[1.0, -0.02, 0.89],        # desired corr: e.g. corr(p1,p3)=0.89
                        [-0.02, 1.0, -0.25], 
                        [0.89, -0.25, 1.0]])

try:
    L_cur    = np.linalg.cholesky(current_corr)    # Cholesky factor of current corr
    L_target = np.linalg.cholesky(target_corr)     # Cholesky factor of desired corr
    
    # Whiten predictions (remove current correlation)
    standardized = (predictions - predictions.mean(axis=0)) / predictions.std(axis=0)
    
    # Impose target correlation by transforming via Cholesky matrices
    adjusted = standardized @ np.linalg.inv(L_cur) @ L_target
    
    # Rescale back to original mean and std
    predictions_corrected = adjusted * predictions.std(axis=0) + predictions.mean(axis=0)
    
except np.linalg.LinAlgError:
    # Fallback: directly adjust p3 to have target corr with p1 if matrix not PD
    p1_norm = (predictions[:,0] - predictions[:,0].mean())/predictions[:,0].std()
    predictions[:,2] = predictions[:,2].mean() + target_corr[0,2] * p1_norm * predictions[:,2].std()
    predictions_corrected = predictions`,
      insight: "Why enforce correlations? In multi-output forecasting for financial indices, maintaining realistic correlations is important for downstream uses like portfolio risk management. This post-processing trick ensures consistency with known relationships."
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
          background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 100%)',
          border: '1px solid rgba(100, 108, 255, 0.3)'
        }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-3 rounded-xl" style={{ backgroundColor: '#646cff20' }}>
              <Brain className="h-8 w-8" style={{ color: '#646cff' }} />
            </div>
            <span className="text-white">2.3 Modeling Approach and Ensemble Strategy</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-12">
          {modelingSections.map((section, sectionIndex) => {
            const Icon = section.icon
            return (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, x: sectionIndex % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: sectionIndex * 0.2, duration: 0.6 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: section.color + '20' }}>
                    <Icon className="h-6 w-6" style={{ color: section.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-white mb-3">{section.title}</h4>
                    <p className="text-slate-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>

                {/* Section-specific content */}
                {section.details && (
                  <div className="grid md:grid-cols-2 gap-6 ml-16">
                    {section.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + detailIndex * 0.1, duration: 0.4 }}
                        className="space-y-4"
                      >
                        <div>
                          <h5 className="font-medium text-sm mb-3" style={{ color: section.color }}>
                            {detail.subtitle}
                          </h5>
                          <p className="text-xs text-slate-400 leading-relaxed mb-3">
                            {detail.description}
                          </p>
                          <div className={`p-3 rounded-lg ${
                            detail.noteType === 'warning' 
                              ? 'bg-yellow-500/10 border border-yellow-500/20' 
                              : 'bg-green-500/10 border border-green-500/20'
                          }`}>
                            <p className={`text-xs ${
                              detail.noteType === 'warning' ? 'text-yellow-300' : 'text-green-300'
                            }`}>
                              <strong>{detail.noteType === 'warning' ? 'Limitation:' : 'Advantage:'}</strong> {detail.note}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {section.points && (
                  <div className="ml-16">
                    <ul className="space-y-2 text-sm text-slate-300 mb-4">
                      {section.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: pointIndex * 0.05, duration: 0.3 }}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: section.color }} />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                    {section.insight && (
                      <div className="p-4 rounded-lg" style={{ background: `rgba(${section.color === '#61dafb' ? '97, 218, 251' : '100, 108, 255'}, 0.1)`, border: `1px solid rgba(${section.color === '#61dafb' ? '97, 218, 251' : '100, 108, 255'}, 0.2)` }}>
                        <p className="text-sm text-slate-300">{section.insight}</p>
                      </div>
                    )}
                  </div>
                )}

                {section.code && (
                  <div className="ml-16 space-y-4">
                    <div className="p-4 rounded-lg bg-[#1E1E2F] border border-slate-700/50">
                      <pre className="text-xs text-slate-300 overflow-x-auto">
                        {section.code}
                      </pre>
                    </div>
                    {section.explanation && (
                      <p className="text-sm text-slate-400">{section.explanation}</p>
                    )}
                    {section.insight && (
                      <div className="p-4 rounded-lg" style={{ background: `rgba(${section.color === '#61dafb' ? '97, 218, 251' : '100, 108, 255'}, 0.1)`, border: `1px solid rgba(${section.color === '#61dafb' ? '97, 218, 251' : '100, 108, 255'}, 0.2)` }}>
                        <p className="text-sm" style={{ color: section.color }}>
                          <strong>Why enforce correlations?</strong> {section.insight}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {sectionIndex < modelingSections.length - 1 && (
                  <Separator className="bg-slate-700/50 mt-8" />
                )}
              </motion.div>
            )
          })}
        </CardContent>
      </Card>
    </motion.div>
  )
}