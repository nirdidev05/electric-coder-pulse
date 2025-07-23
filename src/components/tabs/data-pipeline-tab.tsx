import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileText, Calendar, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function DataPipelineTab() {
  const t = useTranslation();

  // Mapping icons to step titles for dynamic rendering
  const iconMap = {
    [t.MarketPulseContentType.methodology.dataPipeline.steps[0]?.title]: FileText,
    [t.MarketPulseContentType.methodology.dataPipeline.steps[1]?.title]: Calendar,
    [t.MarketPulseContentType.methodology.dataPipeline.steps[2]?.title]: TrendingDown,
    [t.MarketPulseContentType.methodology.dataPipeline.steps[3]?.title]: Database,
  };
  
  const dataSteps = (t.MarketPulseContentType.methodology.dataPipeline.steps || []).map((step, index) => ({
    ...step,
    icon: iconMap[step.title] || Database, // Fallback icon
    color: index % 2 === 0 ? "#646cff" : "#61dafb",
  }));

  const fileTypes = t.MarketPulseContentType.methodology.dataPipeline.fileTypes || [];

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
              <Database className="h-8 w-8" style={{ color: '#646cff' }} />
            </div>
            <span className="text-white">{t.MarketPulseContentType.additionalContent.tabContent.dataPipelineTitle}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {dataSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: step.color + '20' }}>
                    <Icon className="h-6 w-6" style={{ color: step.color }} />
                  </div>
                  <h4 className="font-semibold text-xl text-white">{step.title}</h4>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-4">
                  {step.content}
                </p>
                
                {/* Special content for each step */}
                {step.technicalNote && (
                  <div className="p-4 rounded-lg" style={{ background: 'rgba(97, 218, 251, 0.1)', border: '1px solid rgba(97, 218, 251, 0.2)' }}>
                    <p className="text-sm" style={{ color: '#61dafb' }}>
                      <strong>{t.MarketPulseContentType.common.labels.technicalNote}:</strong> {step.technicalNote}
                    </p>
                  </div>
                )}
                
                {step.tradeOff && (
                  <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid rgba(255, 193, 7, 0.2)' }}>
                    <p className="text-sm text-yellow-300">
                      <strong>{t.MarketPulseContentType.common.labels.tradeOff}:</strong> {step.tradeOff}
                    </p>
                  </div>
                )}
                
                {index === 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {fileTypes.map((file, i) => (
                      <code 
                        key={i}
                        className="px-3 py-1 rounded text-sm font-mono border"
                        style={{ 
                          backgroundColor: 'rgba(100, 108, 255, 0.1)',
                          color: '#646cff',
                          borderColor: 'rgba(100, 108, 255, 0.3)'
                        }}
                      >
                        {file}
                      </code>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </CardContent>
      </Card>
    </motion.div>
  )
}