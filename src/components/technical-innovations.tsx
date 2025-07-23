import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Users, Brain, Zap, Target, Settings, Code, GitBranch, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function TechnicalInnovations() {
  const t = useTranslation();
  const innovationsData = t.MarketPulseContentType.innovations;

  const iconMap = {
    core: {
      "Multimodal Feature Engineering": Brain,
      "Meta-Ensemble Architecture": Zap,
      "Mathematical Correlation Control": Target,
      "Production-Ready Architecture": Settings,
    },
    contributions: {
      "Feature Engineering Innovation": Brain,
      "Ensemble Methodology": Zap,
      "Mathematical Framework": Target,
      "System Architecture": Code,
    }
  };

  const coreInnovations = (innovationsData.coreInnovations || []).map((innovation, index) => ({
    ...innovation,
    icon: iconMap.core[innovation.title] || Brain,
    color: index % 2 === 0 ? "#646cff" : "#61dafb",
    details: (innovation.details || []).map(detail => ({
      ...detail,
      impact: detail.impact.replace(/^Impact:\s*/, '')
    }))
  }));

  const researchContributions = (innovationsData.researchContributions.items || []).map((contribution, index) => ({
    ...contribution,
    icon: iconMap.contributions[contribution.category] || Brain,
    color: index % 2 === 0 ? "#646cff" : "#61dafb",
    validation: contribution.validation.replace(/^Validation Result:\s*/, '')
  }));

  const systemArchitecture = innovationsData.systemArchitecture;
  const developmentProcess = innovationsData.developmentProcess;
  const innovationSummary = innovationsData.innovationSummary;

  return (
    <section className="py-20 relative" id="technical-innovations">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{innovationsData.title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {innovationsData.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {coreInnovations.map((innovation, index) => {
              const Icon = innovation.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card 
                    className="h-full border-0 shadow-2xl backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 100%)',
                      border: '1px solid rgba(100, 108, 255, 0.3)'
                    }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-3 rounded-xl" style={{ backgroundColor: innovation.color + '20' }}>
                          <Icon className="h-6 w-6" style={{ color: innovation.color }} />
                        </div>
                        <span className="text-white">{innovation.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {innovation.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: detailIndex * 0.1, duration: 0.4 }}
                          className="space-y-3"
                        >
                          <h4 className="font-semibold text-sm text-white flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: innovation.color }} />
                            {detail.aspect}
                          </h4>
                          <p className="text-xs text-slate-300 leading-relaxed pl-4">{detail.description}</p>
                          <div className="pl-4">
                            <div className="p-3 rounded-lg border border-slate-700/30" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                              <p className="text-xs" style={{ color: innovation.color }}>
                                <strong>{t.MarketPulseContentType.common.labels.impact}:</strong> {detail.impact}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <Separator className="bg-slate-700/50" />

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
                    <Award className="h-8 w-8" style={{ color: '#61dafb' }} />
                  </div>
                  <span className="text-white">{innovationsData.researchContributions.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {researchContributions.map((contribution, index) => {
                    const Icon = contribution.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="p-6 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg" style={{ backgroundColor: contribution.color + '20' }}>
                            <Icon className="h-5 w-5" style={{ color: contribution.color }} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-sm">{contribution.category}</h4>
                            <h5 className="font-medium text-xs" style={{ color: contribution.color }}>{contribution.contribution}</h5>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h6 className="font-medium text-xs text-slate-300 mb-1">{t.MarketPulseContentType.common.labels.methodology}:</h6>
                            <p className="text-xs text-slate-400 leading-relaxed">{contribution.methodology}</p>
                          </div>
                          
                          <div className="p-3 rounded-lg" style={{ 
                            background: `rgba(${contribution.color === '#646cff' ? '100, 108, 255' : '97, 218, 251'}, 0.1)`,
                            border: `1px solid rgba(${contribution.color === '#646cff' ? '100, 108, 255' : '97, 218, 251'}, 0.2)`
                          }}>
                            <h6 className="font-medium text-xs mb-1" style={{ color: contribution.color }}>{t.MarketPulseContentType.common.labels.validation} Result:</h6>
                            <p className="text-xs" style={{ color: contribution.color }}>{contribution.validation}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card 
                className="h-full border-0 shadow-2xl backdrop-blur-sm"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.08) 0%, rgba(100, 108, 255, 0.08) 100%)',
                  border: '1px solid rgba(97, 218, 251, 0.3)'
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#61dafb20' }}>
                      <Code className="h-6 w-6" style={{ color: '#61dafb' }} />
                    </div>
                    <span className="text-white">{systemArchitecture.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">{systemArchitecture.philosophyName}</h4>
                    <div className="space-y-3">
                      {systemArchitecture.components.map((component, index) => (
                        <div key={index} className="p-4 rounded-lg bg-slate-800/20 border border-slate-700/30">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-medium text-slate-200 text-sm">{component.component}</span>
                            <span className="text-xs text-slate-400">{t.MarketPulseContentType.common.labels.coreModule}</span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed mb-2">{component.responsibility}</p>
                          <div className="p-2 rounded bg-slate-900/30">
                            <p className="text-xs text-slate-300">{component.design}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg" style={{ background: 'rgba(97, 218, 251, 0.1)', border: '1px solid rgba(97, 218, 251, 0.2)' }}>
                    <p className="text-xs" style={{ color: '#61dafb' }}>
                      <strong>{t.MarketPulseContentType.common.labels.architectureImpact}:</strong> {systemArchitecture.impactNote.replace(/^Architecture Impact:\s*/, '')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
       
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card 
                className="h-full border-0 shadow-2xl backdrop-blur-sm"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 100%)',
                  border: '1px solid rgba(100, 108, 255, 0.3)'
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                      <GitBranch className="h-6 w-6" style={{ color: '#646cff' }} />
                    </div>
                    <span className="text-white">{developmentProcess.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-slate-200 text-sm mb-2">{t.MarketPulseContentType.common.labels.methodology}</h5>
                      <p className="text-xs text-slate-300 leading-relaxed">{developmentProcess.methodology.replace(/^Methodology\s*:\s*/, '')}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-slate-200 text-sm mb-2">Version Control</h5>
                      <p className="text-xs text-slate-300 leading-relaxed">{developmentProcess.versionControl.replace(/^Version Control\s*:\s*/, '')}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-slate-200 text-sm mb-2">Coordination Strategy</h5>
                      <p className="text-xs text-slate-300 leading-relaxed">{developmentProcess.coordination.replace(/^Coordination Strategy:\s*/, '')}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-slate-200 text-sm mb-2">{t.MarketPulseContentType.common.labels.validation}</h5>
                      <p className="text-xs text-slate-300 leading-relaxed">{developmentProcess.validation.replace(/^Quality Validation:\s*/, '')}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg" style={{ background: 'rgba(100, 108, 255, 0.1)', border: '1px solid rgba(100, 108, 255, 0.2)' }}>
                    <p className="text-xs" style={{ color: '#646cff' }}>
                      <strong>{t.MarketPulseContentType.common.labels.processExcellence}:</strong> {developmentProcess.excellenceNote.replace(/^Process Excellence:\s*/, '')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 rounded-xl border-2 border-dashed text-center"
            style={{ 
              borderColor: 'rgba(97, 218, 251, 0.4)', 
              background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(100, 108, 255, 0.05) 100%)' 
            }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#646cff20' }}>
                <TrendingUp className="w-10 h-10" style={{ color: '#646cff' }} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{innovationSummary.title}</h3>
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto mb-6">
              {innovationSummary.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {innovationSummary.tags.map((tag, i) => (
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
        </div>
      </div>
    </section>
  )
}