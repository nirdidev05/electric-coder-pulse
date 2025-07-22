import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, TrendingUp, Users, Clock, BarChart3, Award, Brain, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function CompetitionResults() {
  const keyMetrics = [
    { 
      label: "Final Score", 
      value: "-0.66151", 
      description: "Competition evaluation metric", 
      icon: Trophy, 
      color: "#646cff",
      highlight: true
    },
    { 
      label: "Final Rank", 
      value: "1st", 
      description: "Out of 12 participating teams", 
      icon: Award, 
      color: "#61dafb",
      highlight: true
    },
    { 
      label: "R² Achievement", 
      value: "0.44+", 
      description: "Target objective met", 
      icon: TrendingUp, 
      color: "#646cff",
      highlight: false
    },
    { 
      label: "Improvement", 
      value: "68%", 
      description: "From baseline performance", 
      icon: BarChart3, 
      color: "#61dafb",
      highlight: false
    }
  ]

  const technicalAchievements = [
    {
      category: "Feature Engineering",
      achievement: "100+ Multi-Modal Features",
      impact: "Technical indicators, cross-asset relationships, and news sentiment integration",
      metrics: "Comprehensive signal capture",
      icon: Brain
    },
    {
      category: "Ensemble Architecture", 
      achievement: "Hybrid ML + Statistical Approach",
      impact: "Adaptive weighting between LightGBM models and statistical baselines",
      metrics: "Robust prediction stability",
      icon: Zap
    },
    {
      category: "Correlation Engineering",
      achievement: "Mathematical Precision",
      impact: "Cholesky decomposition for maintaining realistic asset relationships",
      metrics: "0.89 P1-P3 correlation achieved",
      icon: Target
    },
    {
      category: "Optimization Framework",
      achievement: "Bayesian Hyperparameter Tuning",
      impact: "Optuna-powered search across parameter space with time-series validation",
      metrics: "Systematic performance optimization",
      icon: BarChart3
    }
  ]

  const teamCollaboration = {
    teamName: "Team U23",
    members: [
      { name: "Sohaib Zouambia", role: "Lead Developer" },
      { name: "ME", role: "ML Engineer" },
      { name: "Wassim Haddad", role: "Data Scientist" },
      { name: "Tobni Mohamed Islam", role: "AI Engineer" }
    ]
  }

  return (
    <section className="py-20 relative" id="results">
      {/* Section Background */}
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
          <h2 className="text-4xl font-bold text-white mb-4">HAICK 2025 TSA Challenge Results</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            MarketPulse v3.0 performance summary and technical achievements
          </p>
        </motion.div>

        {/* Key Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => {
            const Icon = metric.icon
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
          {/* Technical Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                    <Brain className="h-6 w-6" style={{ color: '#646cff' }} />
                  </div>
                  <span className="text-white">Technical Implementation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {technicalAchievements.map((achievement, index) => {
                    const Icon = achievement.icon
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

          {/* Team Collaboration & Challenge Context */}
          <div className="space-y-6">
            {/* Team Information */}
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
                    <span className="text-white">Team Collaboration</span>
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
                      <strong>Collaboration Note:</strong> Effective teamwork combining diverse expertise in machine learning, 
                      data science, and feature engineering contributed to the solution's comprehensive approach and final success.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Challenge Context */}
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
                    <span className="text-white">Challenge Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-slate-800/20">
                      <Target className="w-6 h-6 mx-auto mb-2" style={{ color: '#646cff' }} />
                      <div className="font-semibold text-white text-sm">Objective</div>
                      <div className="text-xs text-slate-300 mt-1">Achieve R² more than 0.44 with multimodal forecasting</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-slate-800/20">
                      <Users className="w-6 h-6 mx-auto mb-2" style={{ color: '#61dafb' }} />
                      <div className="font-semibold text-white text-sm">Competition</div>
                      <div className="text-xs text-slate-300 mt-1">12 participating teams</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-slate-800/20">
                      <Clock className="w-6 h-6 mx-auto mb-2" style={{ color: '#646cff' }} />
                      <div className="font-semibold text-white text-sm">Duration</div>
                      <div className="text-xs text-slate-300 mt-1">6-week development cycle</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 rounded-lg" style={{ background: 'rgba(100, 108, 255, 0.1)', border: '1px solid rgba(100, 108, 255, 0.2)' }}>
                    <p className="text-xs text-slate-300">
                      <strong style={{ color: '#646cff' }}>Challenge Focus:</strong> The competition emphasized 
                      innovative approaches to combining quantitative market data with qualitative news information, 
                      requiring both technical excellence and creative problem-solving in multimodal AI systems.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Project Impact Summary */}
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
              <h3 className="text-2xl font-bold text-white mb-4">Project Summary</h3>
              <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto mb-6">
                MarketPulse v3.0 successfully demonstrated the effectiveness of multimodal approaches to financial 
                forecasting by integrating advanced feature engineering, ensemble methods, and mathematical correlation 
                control. The solution achieved the competition objectives while maintaining realistic market behavior 
                and providing a solid foundation for future research and development.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Multimodal Integration', 'Feature Engineering', 'Ensemble Methods', 'Mathematical Precision'].map((tag, i) => (
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