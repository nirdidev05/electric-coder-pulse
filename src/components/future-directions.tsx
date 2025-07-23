import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Brain, Zap, MessageSquare, LineChart, BarChart3, Settings, Target, Rocket, Globe, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function FutureDirections() {
  const t = useTranslation();
  const futureData = t.MarketPulseContentType.future;

  // Icon mapping for main directions
  const directionIconMap = {
    [futureData.directions[0]?.title]: Brain,
    [futureData.directions[1]?.title]: Zap,
    [futureData.directions[2]?.title]: MessageSquare,
    [futureData.directions[3]?.title]: LineChart,
    [futureData.directions[4]?.title]: BarChart3,
    [futureData.directions[5]?.title]: Settings,
  };

  // Icon mapping for extensibility areas
  const extensibilityIconMap = {
    [futureData.extensibility.areas[0]?.title]: Globe,
    [futureData.extensibility.areas[1]?.title]: TrendingUp,
    [futureData.extensibility.areas[2]?.title]: Target,
  };

  const directions = (futureData.directions || []).map((dir, index) => ({
    ...dir,
    icon: directionIconMap[dir.title] || Brain,
    color: index % 2 === 0 ? "#646cff" : "#61dafb",
    items: (dir.items || []).map(item => ({
      ...item,
      technicalDetail: item.technicalDetail.replace(/^Technical Detail:\s*/, ''),
    })),
    potential: dir.potential.replace(/^Research Potential:\s*/, ''),
  }));

  const extensibilityAreas = (futureData.extensibility.areas || []).map(area => ({
    ...area,
    icon: extensibilityIconMap[area.title] || Globe,
    potential: area.potential.replace(/^impact:\s*/, ''),
  }));

  const researchValidation = futureData.researchValidation;
  const vision = futureData.vision;

  return (
    <section className="py-20 relative" id="future-directions">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{futureData.title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {futureData.subtitle}
          </p>
        </motion.div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directions.map((direction, index) => {
              const Icon = direction.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card 
                    className="h-full border-0 shadow-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 100%)',
                      border: '1px solid rgba(100, 108, 255, 0.3)'
                    }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: direction.color + '20' }}>
                          <Icon className="h-6 w-6" style={{ color: direction.color }} />
                        </div>
                        <span className="text-white leading-tight">{direction.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {direction.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1, duration: 0.4 }}
                          className="space-y-3"
                        >
                          <h5 className="font-semibold text-sm text-white">{item.subtitle}</h5>
                          <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                          {item.technicalDetail && (
                            <div className="p-3 rounded-lg border border-slate-700/30" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                              <p className="text-xs" style={{ color: direction.color }}>
                                <strong>{t.MarketPulseContentType.common.labels.technicalDetail}:</strong> {item.technicalDetail}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      ))}
                      
                      <div className="p-4 rounded-lg" style={{ 
                        background: `rgba(${direction.color === '#646cff' ? '100, 108, 255' : '97, 218, 251'}, 0.1)`,
                        border: `1px solid rgba(${direction.color === '#646cff' ? '100, 108, 255' : '97, 218, 251'}, 0.2)`
                      }}>
                        <p className="text-xs" style={{ color: direction.color }}>
                          <strong>{t.MarketPulseContentType.common.labels.researchPotential}:</strong> {direction.potential}
                        </p>
                      </div>
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
            transition={{ duration: 0.6, delay: 0.4 }}
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
                    <Rocket className="h-8 w-8" style={{ color: '#61dafb' }} />
                  </div>
                  <span className="text-white">{futureData.extensibility.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-10">
                <div>
                  <h4 className="font-semibold text-xl text-white mb-6">{futureData.extensibility.subtitle}</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {extensibilityAreas.map((area, index) => {
                      const Icon = area.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="p-6 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                              <Icon className="h-5 w-5" style={{ color: '#646cff' }} />
                            </div>
                            <h5 className="font-semibold text-lg text-white">{area.title}</h5>
                          </div>
                          <p className="text-sm text-slate-300 leading-relaxed mb-3">{area.description}</p>
                          <div className="p-3 rounded-lg" style={{ background: 'rgba(97, 218, 251, 0.1)', border: '1px solid rgba(97, 218, 251, 0.2)' }}>
                            <p className="text-xs" style={{ color: '#61dafb' }}>
                              <strong>{t.MarketPulseContentType.common.labels.impact}:</strong> {area.potential}
                            </p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                <Separator className="bg-slate-700/50" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h4 className="font-semibold text-xl text-white mb-6">{researchValidation.title}</h4>
                  <div className="space-y-6">
                    <div className="p-6 rounded-xl border border-slate-700/30" style={{ background: 'rgba(100, 108, 255, 0.05)' }}>
                      <h5 className="font-semibold text-lg mb-3" style={{ color: '#646cff' }}>
                        {researchValidation.crossDomain.title}
                      </h5>
                      <p className="text-slate-300 leading-relaxed mb-4">
                        {researchValidation.crossDomain.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {researchValidation.crossDomain.examples.map((example, index) => (
                           <div key={index} className="p-4 rounded-lg bg-slate-800/30">
                            <h6 className="font-medium text-sm mb-2 text-white">{example.title}</h6>
                            <p className="text-xs text-slate-400">{example.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 rounded-xl border border-slate-700/30" style={{ background: 'rgba(97, 218, 251, 0.05)' }}>
                      <h5 className="font-semibold text-lg mb-3" style={{ color: '#61dafb' }}>
                        {researchValidation.academicCollaboration.title}
                      </h5>
                      <p className="text-slate-300 leading-relaxed mb-4">
                        {researchValidation.academicCollaboration.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {researchValidation.academicCollaboration.tags.map((item, i) => (
                          <code 
                            key={i}
                            className="px-3 py-1 rounded text-sm font-mono border"
                            style={{ 
                              backgroundColor: 'rgba(97, 218, 251, 0.1)',
                              color: '#61dafb',
                              borderColor: 'rgba(97, 218, 251, 0.3)'
                            }}
                          >
                            {item}
                          </code>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="p-8 rounded-xl border-2 border-dashed text-center"
                  style={{ 
                    borderColor: 'rgba(97, 218, 251, 0.4)', 
                    background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(100, 108, 255, 0.05) 100%)' 
                  }}
                >
                  <h4 className="font-bold text-2xl text-white mb-4">{vision.title}</h4>
                  <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
                    {vision.description}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap justify-center gap-4">
                    {vision.tags.map((tag, i) => (
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
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}