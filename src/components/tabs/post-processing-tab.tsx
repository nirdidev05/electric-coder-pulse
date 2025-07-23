import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Settings, Filter, TrendingDown, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function PostProcessingTab() {
  const t = useTranslation();

  const postProcessingData = t.MarketPulseContentType.methodology.postProcessing;

  // Mapping icons to titles for dynamic rendering
  const iconMap = {
    [postProcessingData.steps[0]?.title]: Filter,
    [postProcessingData.steps[1]?.title]: TrendingDown,
  };

  const processingSteps = (postProcessingData.steps || []).map((step, index) => ({
    ...step,
    icon: iconMap[step.title] || Settings, // Fallback icon
    color: index % 2 === 0 ? "#646cff" : "#61dafb",
  }));

  const impactResults = (postProcessingData.impactSummary.results || []).map((result, index) => ({
    ...result,
    color: index % 2 === 0 ? "#646cff" : "#61dafb",
  }));

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
            <span className="text-white">{t.MarketPulseContentType.additionalContent.tabContent.postProcessingTitle}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-10">
          {processingSteps.map((step, stepIndex) => {
            const Icon = step.icon;
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
                      style={{ background: 'rgba(100, 108, 255, 0.1)' }}
                    >
                      <h5 className="font-medium text-sm mb-3" style={{ color: "#646cff" }}>
                        {step.parameters.title}
                      </h5>
                      <ul className="text-xs space-y-1" style={{ color: "#646cff" }}>
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
                      style={{ background: 'rgba(97, 218, 251, 0.1)' }}
                    >
                      <h5 className="font-medium text-sm mb-3" style={{ color: "#61dafb" }}>
                        {step.benefits.title}
                      </h5>
                      <ul className="text-xs space-y-1" style={{ color: "#61dafb" }}>
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
                        {t.MarketPulseContentType.common.labels.volatilityControlProcess}
                      </h5>
                      <pre className="text-xs text-slate-300 whitespace-pre-wrap">
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
                          <strong>{t.MarketPulseContentType.common.labels.tradeOff}:</strong> {step.tradeoff}
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
              <h4 className="font-semibold text-xl text-white">{postProcessingData.impactSummary.title}</h4>
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