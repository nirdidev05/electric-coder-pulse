import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Target, TrendingUp, BarChart3, CheckCircle, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function ProjectContext() {
  const t = useTranslation();

  // Data is now sourced from the translation object
  const objectives = (t.MarketPulseContentType.context.objectives.items || []).map((item, index) => ({
    ...item,
    color: index % 2 === 0 ? "#646cff" : "#61dafb"
  }));

  const evaluationMetrics = (t.MarketPulseContentType.context.evaluation.metrics || []).map((metric, index) => ({
    ...metric,
    color: index % 2 === 0 ? "#646cff" : "#61dafb"
  }));
  
  const challengeStats = {
    assets: (t.MarketPulseContentType.context.challenge.stats.assets || "0 Assets").split(' '),
    duration: (t.MarketPulseContentType.context.challenge.stats.duration || "0 hours").split(' '),
    teams: (t.MarketPulseContentType.context.challenge.stats.teams || "0 Teams").split(' ')
  };

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
          <h2 className="text-4xl font-bold text-white mb-4">{t.MarketPulseContentType.context.title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.MarketPulseContentType.context.subtitle}
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
                  <span className="text-white text-xl">{t.MarketPulseContentType.context.challenge.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  {t.MarketPulseContentType.context.challenge.description}
                </p>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t.MarketPulseContentType.context.challenge.details}
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#646cff' }}>{challengeStats.assets[0]}</div>
                    <div className="text-xs text-slate-400">{challengeStats.assets.slice(1).join(' ')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#61dafb' }}>{challengeStats.duration[0]}</div>
                    <div className="text-xs text-slate-400">{challengeStats.duration.slice(1).join(' ')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#646cff' }}>{challengeStats.teams[0]}</div>
                    <div className="text-xs text-slate-400">{challengeStats.teams.slice(1).join(' ')}</div>
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
                  <span className="text-white text-xl">{t.MarketPulseContentType.context.objectives.title}</span>
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
                <span className="text-white">{t.MarketPulseContentType.context.evaluation.title}</span>
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
                  <h3 className="text-xl font-bold text-white">{t.MarketPulseContentType.context.evaluation.achievement.title}</h3>
                </div>
                <p className="text-center text-slate-300 leading-relaxed">
                  {t.MarketPulseContentType.context.evaluation.achievement.description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-6 pt-4 border-t border-slate-700/30">
                  <div className="text-center">
                    <div className="text-lg font-bold" style={{ color: '#646cff' }}>{t.MarketPulseContentType.context.evaluation.achievement.targetMetrics.improvement}</div>
                    <div className="text-sm text-slate-400">Target Achievement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold" style={{ color: '#61dafb' }}>{t.MarketPulseContentType.context.evaluation.achievement.targetMetrics.ranking}</div>
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