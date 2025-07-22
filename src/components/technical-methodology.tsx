import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DataPipelineTab from "@/components/tabs/data-pipeline-tab"
import FeatureEngineeringTab from "@/components/tabs/feature-engineering-tab"
import ModelingTab from "@/components/tabs/modeling-tab"
import PostProcessingTab from "@/components/tabs/post-processing-tab"

export default function TechnicalMethodology() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Analysis & Methodology</h2>
        </div>

        <Tabs defaultValue="pipeline" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pipeline">Data Pipeline</TabsTrigger>
            <TabsTrigger value="features">Feature Engineering</TabsTrigger>
            <TabsTrigger value="modeling">Modeling & Ensemble</TabsTrigger>
            <TabsTrigger value="postprocess">Post-Processing</TabsTrigger>
          </TabsList>

          <TabsContent value="pipeline" className="space-y-6">
            <DataPipelineTab />
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <FeatureEngineeringTab />
          </TabsContent>

          <TabsContent value="modeling" className="space-y-6">
            <ModelingTab />
          </TabsContent>

          <TabsContent value="postprocess" className="space-y-6">
            <PostProcessingTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
