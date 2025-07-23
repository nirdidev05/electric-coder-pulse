import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, TrendingUp, Users, Clock, BarChart3, Award, Brain, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function CompetitionResults() {
  const t = useTranslation();
  const resultsData = t.MarketPulseContentType.results;

  const iconMap = {
    keyMetrics: {
      "Final Score": Trophy,
      "Final Rank": Award,
      "R² Achievement": TrendingUp,
      "Improvement": BarChart3
    },
    technicalAchievements: {
      "Feature Engineering": Brain,
      "Ensemble Architecture": Zap,
      "Correlation Engineering": Target,
      "Optimization Framework": BarChart3
    },
    challengeContext: {
      "Objective": Target,
      "Competition": Users,
      "Duration": Clock
    }
  };

  const keyMetrics = (resultsData.keyMetrics || []).map(metric => ({
    ...metric,
    icon: iconMap.keyMetrics[metric.label] || Trophy,
    color: metric.highlight ? "#646cff" : "#61dafb"
  }));

  const technicalAchievements = (resultsData.technicalAchievements.items || []).map(item => ({
    ...item,
    icon: iconMap.technicalAchievements[item.category] || Brain
  }));

  const teamCollaboration = resultsData.teamCollaboration;
  const challengeContext = resultsData.challengeContext;
  const projectSummary = resultsData.projectSummary;

  return (
    <section className="py-20 relative" id="results">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full" style={{ backgroundColor: '#646cff20' }}>
              <Trophy className="w-12 h-12" style={{ color: '#646cff' }} />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{resultsData.title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {resultsData.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card 
                  className={`border-0 shadow-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
                    metric.highlight ? 'ring-2' : ''
                  }`}
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 100%)',
                    border: '1px solid rgba(100, 108, 255, 0.3)',
                    ...(metric.highlight && { 
                      ringColor: 'rgba(100, 108, 255, 0.4)' 
                    })
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="p-3 rounded-xl mb-4 inline-flex" style={{ backgroundColor: metric.color + '20' }}>
                      <Icon className="w-6 h-6" style={{ color: metric.color }} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-slate-300 font-medium mb-1">{metric.label}</div>
                    <div className="text-sm text-slate-400">{metric.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card 
              className="border-0 shadow-2xl backdrop-blur-sm h-full"
              style={{ 
                background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 100%)',
                border: '1px solid rgba(100, 108, 255, 0.3)'
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                    <Brain className="h-6 w-6" style={{ color: '#646cff' }} />
                  </div>
                  <span className="text-white">{resultsData.technicalAchievements.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {technicalAchievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="p-4 rounded-lg border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4 mb-3">
                          <div className="p-2 rounded-lg" style={{ backgroundColor: '#61dafb20' }}>
                            <Icon className="h-4 w-4" style={{ color: '#61dafb' }} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="font-semibold text-white text-sm">{achievement.category}</h4>
                                <h5 className="font-medium text-sm" style={{ color: '#61dafb' }}>{achievement.achievement}</h5>
                              </div>
                              <Badge 
                                variant="outline" 
                                className="text-xs border-slate-600 text-slate-300"
                              >
                                {achievement.metrics}
                              </Badge>
                            </div>
                            <p className="text-slate-400 text-xs leading-relaxed">{achievement.impact}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#61dafb20' }}>
                      <Users className="h-6 w-6" style={{ color: '#61dafb' }} />
                    </div>
                    <span className="text-white">{teamCollaboration.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 rounded-lg border border-slate-700/30 bg-slate-800/20">
                    <h4 className="font-semibold text-white mb-3">{teamCollaboration.teamName}</h4>
                    <div className="space-y-2">
                      {teamCollaboration.members.map((member, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm">{member.name}</span>
                          <span className="text-xs text-slate-400">{member.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 p-3 rounded-lg" style={{ background: 'rgba(97, 218, 251, 0.1)', border: '1px solid rgba(97, 218, 251, 0.2)' }}>
                    <p className="text-xs" style={{ color: '#61dafb' }}>
                      <strong>{t.MarketPulseContentType.common.labels.collaborationNote}:</strong> {teamCollaboration.collaborationNote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card 
                className="border-0 shadow-2xl backdrop-blur-sm"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 100%)',
                  border: '1px solid rgba(100, 108, 255, 0.3)'
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                      <Target className="h-6 w-6" style={{ color: '#646cff' }} />
                    </div>
                    <span className="text-white">{challengeContext.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {challengeContext.overview.map((item, index) => {
                      const Icon = iconMap.challengeContext[item.title] || Target;
                      return (
                        <div key={index} className="text-center p-4 rounded-lg bg-slate-800/20">
                          <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: index % 2 === 0 ? '#646cff' : '#61dafb' }} />
                          <div className="font-semibold text-white text-sm">{item.title}</div>
                          <div className="text-xs text-slate-300 mt-1">{item.description}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-4 p-3 rounded-lg" style={{ background: 'rgba(100, 108, 255, 0.1)', border: '1px solid rgba(100, 108, 255, 0.2)' }}>
                    <p className="text-xs text-slate-300">
                      <strong style={{ color: '#646cff' }}>{t.MarketPulseContentType.common.labels.challengeFocus}:</strong> {challengeContext.focusNote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card 
            className="border-2 border-dashed text-center backdrop-blur-sm"
            style={{ 
              borderColor: 'rgba(97, 218, 251, 0.4)', 
              background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(100, 108, 255, 0.05) 100%)' 
            }}
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{projectSummary.title}</h3>
              <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto mb-6">
                {projectSummary.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {projectSummary.tags.map((tag, i) => (
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
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}