import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, Layers, BarChart3, ArrowRight, MessageSquare, AlertCircle, GitBranch, CheckCircle, Trophy, Brain, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function PortfolioDocumentation() {
  const t = useTranslation();
  const portfolioData = t.MarketPulseContentType.portfolio;

  // Icon mapping for qualitative insights
  const iconMap = {
    [portfolioData.results.insights.items[0]?.title]: MessageSquare,
    [portfolioData.results.insights.items[1]?.title]: AlertCircle,
    [portfolioData.results.insights.items[2]?.title]: Brain,
    [portfolioData.results.insights.items[3]?.title]: GitBranch,
    [portfolioData.results.insights.items[4]?.title]: CheckCircle,
    [portfolioData.results.insights.items[5]?.title]: Zap,
  };

  const architectureSteps = (portfolioData.architecture.steps || []).map((step, index) => ({
    ...step,
    details: step.details.replace(/^Technical Detail:\s*/, ''),
    color: index % 2 !== 0 ? "#61dafb" : "#646cff",
  }));

  const performanceMetrics = (portfolioData.results.metrics || []).map((metric, index) => ({
    ...metric,
    color: index % 2 !== 0 ? "#61dafb" : "#646cff",
  }));

  const qualitativeInsights = (portfolioData.results.insights.items || []).map((insight, index) => ({
    ...insight,
    insight: insight.insight.replace(/^Technical Insight:\s*/, ''),
    icon: iconMap[insight.title] || Brain,
    color: index % 2 !== 0 ? "#61dafb" : "#646cff",
    bgColor: index % 2 !== 0 ? "rgba(97, 218, 251, 0.1)" : "rgba(100, 108, 255, 0.1)",
    borderColor: index % 2 !== 0 ? "rgba(97, 218, 251, 0.2)" : "rgba(100, 108, 255, 0.2)",
  }));

  const teamAchievements = portfolioData.executiveSummary.achievements || [];
  const competitionContextItems = portfolioData.executiveSummary.competitionContext.items || [];
  const keyInnovationsItems = portfolioData.executiveSummary.keyInnovations.items || [];
  const futureEnhancements = portfolioData.results.futureEnhancements;

  return (
    <section className="py-20 relative" id="portfolio">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{portfolioData.title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {portfolioData.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
                    <Trophy className="h-8 w-8" style={{ color: '#646cff' }} />
                  </div>
                  <span className="text-white">{portfolioData.executiveSummary.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed text-lg">{portfolioData.executiveSummary.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-slate-700/30" style={{ background: 'rgba(100, 108, 255, 0.05)' }}>
                      <h4 className="font-semibold text-lg mb-3" style={{ color: '#646cff' }}>{portfolioData.executiveSummary.competitionContext.title}</h4>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {competitionContextItems.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: index % 2 !== 0 ? '#61dafb' : '#646cff' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-700/30" style={{ background: 'rgba(97, 218, 251, 0.05)' }}>
                      <h4 className="font-semibold text-lg mb-3" style={{ color: '#61dafb' }}>{portfolioData.executiveSummary.keyInnovations.title}</h4>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {keyInnovationsItems.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: index % 2 === 0 ? '#61dafb' : '#646cff' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl border-2 border-dashed" style={{ borderColor: '#61dafb40', background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(100, 108, 255, 0.05) 100%)' }}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {teamAchievements.map((achievement, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold mb-1" style={{ color: index % 2 === 0 ? '#646cff' : '#61dafb' }}>
                            {achievement.value}
                          </div>
                          <div className="text-sm text-white font-medium">{achievement.metric}</div>
                          <div className="text-xs text-slate-400">{achievement.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                    <Layers className="h-8 w-8" style={{ color: '#61dafb' }} />
                  </div>
                  <span className="text-white">{portfolioData.architecture.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="p-6 rounded-xl" style={{ background: 'rgba(100, 108, 255, 0.05)', border: '1px solid rgba(100, 108, 255, 0.2)' }}>
                  <h4 className="font-semibold text-xl text-white mb-6">{portfolioData.architecture.philosophyTitle}</h4>
                  <div className="space-y-6">
                    {architectureSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="flex items-start gap-4 p-6 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all duration-300">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                            style={{ backgroundColor: step.color }}
                          >
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-lg text-white mb-2">{step.title}</h5>
                            <p className="text-slate-300 text-sm leading-relaxed mb-3">{step.desc}</p>
                            <div className="p-3 rounded-lg" style={{ background: `rgba(${step.color === '#646cff' ? '100, 108, 255' : '97, 218, 251'}, 0.1)`, border: `1px solid rgba(${step.color === '#646cff' ? '100, 108, 255' : '97, 218, 251'}, 0.2)` }}>
                              <p className="text-xs" style={{ color: step.color }}>
                                <strong>{t.MarketPulseContentType.common.labels.technicalDetail}:</strong> {step.details}
                              </p>
                            </div>
                          </div>
                        </div>
                        {index < architectureSteps.length - 1 && (
                          <div className="flex justify-center my-2">
                            <ArrowRight className="h-5 w-5 text-slate-500 -rotate-90 md:rotate-0" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg" style={{ background: 'rgba(97, 218, 251, 0.1)', border: '1px solid rgba(97, 218, 251, 0.2)' }}>
                  <p className="text-sm" style={{ color: '#61dafb' }}>
                    <strong>{t.MarketPulseContentType.common.labels.productionPhilosophy}:</strong> {portfolioData.architecture.productionNote}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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
                    <BarChart3 className="h-8 w-8" style={{ color: '#646cff' }} />
                  </div>
                  <span className="text-white">{portfolioData.results.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-10">
                <div>
                  <h4 className="font-semibold mb-6 text-xl text-white">{portfolioData.results.performanceTitle}</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {performanceMetrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="p-6 rounded-xl text-center border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all duration-300 hover:scale-105"
                      >
                        <div className="text-3xl font-bold mb-2" style={{ color: metric.color }}>
                          {metric.value}
                        </div>
                        <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                        <div className="text-sm text-slate-400">{metric.sublabel}</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="p-6 rounded-xl" style={{ background: 'rgba(100, 108, 255, 0.05)', border: '1px solid rgba(100, 108, 255, 0.2)' }}>
                    <p className="text-sm text-slate-300">
                      <strong style={{ color: '#646cff' }}>{t.MarketPulseContentType.common.labels.statisticalSignificance}:</strong> {portfolioData.results.significanceNote}
                    </p>
                  </div>
                </div>

                <Separator className="bg-slate-700/50" />

                <div>
                  <h4 className="font-semibold mb-6 text-xl text-white">{portfolioData.results.insights.title}</h4>
                  <div className="space-y-8">
                    {qualitativeInsights.map((insight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="p-6 rounded-xl border hover:scale-[1.02] transition-all duration-300"
                          style={{
                            background: insight.bgColor,
                            borderColor: insight.borderColor
                          }}>
                          <h5 className="font-semibold text-lg mb-4 flex items-center gap-3">
                            <div className="p-2 rounded-lg" style={{ backgroundColor: insight.color + '20' }}>
                              <insight.icon className="h-5 w-5" style={{ color: insight.color }} />
                            </div>
                            <span className="text-white">{insight.title}</span>
                          </h5>
                          <p className="text-sm text-slate-300 mb-4 leading-relaxed">{insight.content}</p>
                          <div className="p-4 rounded-lg border border-slate-700/30" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                            <p className="text-xs" style={{ color: insight.color }}>
                              <strong>{t.MarketPulseContentType.common.labels.technicalInsight}:</strong> {insight.insight}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-slate-700/50" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="p-6 rounded-xl border-2 border-dashed" style={{ borderColor: '#61dafb40', background: 'rgba(97, 218, 251, 0.05)' }}>
                    <h4 className="font-semibold text-lg mb-4 flex items-center gap-3">
                      <Target className="h-6 w-6" style={{ color: '#61dafb' }} />
                      <span className="text-white">{futureEnhancements.title}</span>
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-sm mb-3" style={{ color: '#646cff' }}>{futureEnhancements.deepLearning.title}</h5>
                        <ul className="space-y-1 text-xs text-slate-400">
                          {futureEnhancements.deepLearning.items.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm mb-3" style={{ color: '#61dafb' }}>{futureEnhancements.productionScaling.title}</h5>
                        <ul className="space-y-1 text-xs text-slate-400">
                          {futureEnhancements.productionScaling.items.map((item, i) => <li key={i}>• {item}</li>)}
                        </ul>
                      </div>
                    </div>
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