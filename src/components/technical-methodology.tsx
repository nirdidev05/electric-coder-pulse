import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import DataPipelineTab from "@/components/tabs/data-pipeline-tab";
import FeatureEngineeringTab from "@/components/tabs/feature-engineering-tab";
import ModelingTab from "@/components/tabs/modeling-tab";
import PostProcessingTab from "@/components/tabs/post-processing-tab";
import { useTranslation } from "@/hooks/useTranslation";

export default function TechnicalMethodology() {
  const t = useTranslation();
  const [activeTab, setActiveTab] = useState("pipeline");

  const tabs = [
    { value: "pipeline", label: t.MarketPulseContentType.methodology.tabs.pipeline },
    { value: "features", label: t.MarketPulseContentType.methodology.tabs.features },
    { value: "modeling", label: t.MarketPulseContentType.methodology.tabs.modeling },
    { value: "postprocess", label: t.MarketPulseContentType.methodology.tabs.postProcessing }
  ];

  return (
    <section className="py-20 relative" id="methodology">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t.MarketPulseContentType.methodology.title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.MarketPulseContentType.methodology.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList 
              className="grid w-full grid-cols-4 mb-12 backdrop-blur-sm border-0 shadow-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.1) 0%, rgba(97, 218, 251, 0.1) 100%)',
                border: '1px solid rgba(100, 108, 255, 0.2)'
              }}
            >
              {tabs.map(tab => (
                <TabsTrigger 
                  key={tab.value}
                  value={tab.value}
                  className="text-slate-300 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                  style={{
                    '--active-gradient': tab.value === 'pipeline' || tab.value === 'modeling' 
                      ? 'linear-gradient(135deg, rgba(100, 108, 255, 0.3) 0%, rgba(97, 218, 251, 0.2) 100%)'
                      : 'linear-gradient(135deg, rgba(97, 218, 251, 0.3) 0%, rgba(100, 108, 255, 0.2) 100%)',
                    background: activeTab === tab.value ? 'var(--active-gradient)' : 'transparent'
                  }}
                  onClick={() => setActiveTab(tab.value)}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="pipeline" className="space-y-6 mt-8">
              <DataPipelineTab />
            </TabsContent>

            <TabsContent value="features" className="space-y-6 mt-8">
              <FeatureEngineeringTab />
            </TabsContent>

            <TabsContent value="modeling" className="space-y-6 mt-8">
              <ModelingTab />
            </TabsContent>

            <TabsContent value="postprocess" className="space-y-6 mt-8">
              <PostProcessingTab />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}