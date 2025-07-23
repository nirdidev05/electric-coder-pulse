import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Brain, TrendingUp, GitMerge, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function ModelingTab() {
  const t = useTranslation();

  const modelingData = t.MarketPulseContentType.methodology.modeling;

  // Mapping icons to titles for dynamic rendering
  const iconMap = {
    [modelingData.sections[0]?.title]: Brain,
    [modelingData.sections[1]?.title]: TrendingUp,
    [modelingData.sections[2]?.title]: GitMerge,
    [modelingData.sections[3]?.title]: Target,
  };

  const modelingSections = (modelingData.sections || []).map((section, index) => ({
    ...section,
    icon: iconMap[section.title] || Brain, // Fallback icon
    color: index % 2 === 0 ? "#646cff" : "#61dafb",
  }));

  // This is the missing code block that will be re-inserted.
  const correlationPreservationCode = `# Ensure predicted series have desired cross-correlations
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
    predictions_corrected = predictions`;

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
            <span className="text-white">{t.MarketPulseContentType.additionalContent.tabContent.modelingTitle}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-12">
          {modelingSections.map((section, sectionIndex) => {
            const Icon = section.icon;
            const isCorrelationSection = section.title === t.MarketPulseContentType.methodology.modeling.sections[3]?.title;

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
                              <strong>{detail.noteType === 'warning' ? t.MarketPulseContentType.common.labels.limitation + ':' : t.MarketPulseContentType.common.labels.advantage + ':'}</strong> {detail.note}
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

                {(section.code || isCorrelationSection) && (
                  <div className="ml-16 space-y-4">
                    <div className="p-4 rounded-lg bg-[#1E1E2F] border border-slate-700/50">
                      <pre className="text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap">
                        {isCorrelationSection ? correlationPreservationCode : section.code}
                      </pre>
                    </div>
                    {section.explanation && (
                      <p className="text-sm text-slate-400">{section.explanation}</p>
                    )}
                    {section.insight && (
                       <div className="p-4 rounded-lg" style={{ background: `rgba(${section.color === '#61dafb' ? '97, 218, 251' : '100, 108, 255'}, 0.1)`, border: `1px solid rgba(${section.color === '#61dafb' ? '97, 218, 251' : '100, 108, 255'}, 0.2)` }}>
                        <p className="text-sm" style={{ color: section.color }}>
                          <strong>{t.MarketPulseContentType.common.labels.whyEnforceCorrelations}</strong> {section.insight.replace(/^¿?Por qué forzar las correlaciones\??\s*/i, '')}
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
  );
}