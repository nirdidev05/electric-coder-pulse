import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Zap, LineChart, GitBranch, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function FeatureEngineeringTab() {
  const t = useTranslation();

  const featureEngineeringData = t.MarketPulseContentType.methodology.featureEngineering;

  const technicalIndicators = featureEngineeringData.technicalIndicators.items || [];
  const crossAssetFeatures = featureEngineeringData.crossAssetFeatures.items || [];
  const sentimentFeatures = featureEngineeringData.sentimentFeatures.items || [];
  const sentimentCodeBlock = featureEngineeringData.sentimentFeatures.codeBlock || '';

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
              <Zap className="h-8 w-8" style={{ color: '#61dafb' }} />
            </div>
            <span className="text-white">{t.MarketPulseContentType.additionalContent.tabContent.featureEngineeringTitle}</span>
          </CardTitle>
          <CardDescription className="text-slate-300 text-lg mt-4">
            {featureEngineeringData.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-12">
          {/* Technical Indicators Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                <LineChart className="h-6 w-6" style={{ color: '#646cff' }} />
              </div>
              <h4 className="font-semibold text-xl text-white">{featureEngineeringData.technicalIndicators.title}</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {technicalIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="p-4 rounded-lg bg-slate-800/20 border border-slate-700/30 hover:bg-slate-800/30 transition-all duration-300"
                >
                  <h5 className="font-medium text-sm mb-2" style={{ color: '#646cff' }}>
                    {indicator.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {indicator.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Separator className="bg-slate-700/50" />

          {/* Cross-Asset Features Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#61dafb20' }}>
                <GitBranch className="h-6 w-6" style={{ color: '#61dafb' }} />
              </div>
              <h4 className="font-semibold text-xl text-white">{featureEngineeringData.crossAssetFeatures.title}</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {crossAssetFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="p-4 rounded-lg bg-slate-800/20 border border-slate-700/30 hover:bg-slate-800/30 transition-all duration-300"
                >
                  <h5 className="font-medium text-sm mb-2" style={{ color: '#61dafb' }}>
                    {feature.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Separator className="bg-slate-700/50" />

          {/* News Sentiment Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                <MessageSquare className="h-6 w-6" style={{ color: '#646cff' }} />
              </div>
              <h4 className="font-semibold text-xl text-white">{featureEngineeringData.sentimentFeatures.title}</h4>
            </div>
            
            <div className="space-y-6">
              {/* Dictionary-Based Sentiment Scoring */}
              <div className="p-6 rounded-xl border border-slate-700/30" style={{ background: 'rgba(100, 108, 255, 0.05)' }}>
                <h5 className="font-medium text-lg mb-4" style={{ color: '#646cff' }}>
                  {featureEngineeringData.sentimentFeatures.scoringTitle}
                </h5>
                <pre 
                  className="p-6 rounded-lg text-xs overflow-x-auto border border-slate-700/50 mb-4"
                  style={{ backgroundColor: '#1E1E2F', color: '#E2E8F0' }}
                >
                  {sentimentCodeBlock}
                </pre>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {sentimentFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/30"
                    >
                      <h6 className="font-medium text-sm mb-2" style={{ color: '#61dafb' }}>
                        {feature.title}
                      </h6>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}