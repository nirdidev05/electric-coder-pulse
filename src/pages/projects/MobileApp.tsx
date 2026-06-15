import React from "react";
import Abstract from "@/components/Abstract";
import Introduction from "@/components/Introduction";
import Dataset from "@/components/Dataset";
import ExploratoryAnalysis from "@/components/ExploratoryAnalysis";
import FeatureEngineering from "@/components/FeatureEngineering";
import Modeling from "@/components/Modeling";
import Results from "@/components/Results";
import Discussion from "@/components/Discussion";
import Conclusion from "@/components/Conclusion";
import References from "@/components/References";
import Appendix from "@/components/Appendix";
import FooterProtein from "@/components/FooterProtein";
import Navigation from "@/components/NavBat";
import HeroSection from "@/components/HS";
import { ProjectTechShowcase } from "@/components/ProjectTechShowcase";
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      <main className="relative">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="space-y-12">
            <div id="abstract">
              <Abstract />
            </div>
            <div id="methodology">
              <Introduction />
              <Dataset />
              <ExploratoryAnalysis />
              <FeatureEngineering />
              <Modeling />
            </div>
            <div id="results">
              <Results />
            </div>
            <div id="discussion">
              <Discussion />
              <Conclusion />
              <References />
              <Appendix />
            </div>
          </div>
        </div>
        
        <ProjectTechShowcase projectId="Protein" className="py-16" />
        <FooterProtein />
      </main>
    </div>
  );
}

export default App;