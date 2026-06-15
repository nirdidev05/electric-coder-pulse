import { useState } from "react";
import { HeroSectionPFAS } from "./HeroSectionPFAS";
import { NavigationBarPFAS } from "./NavigationBarPFAS";
import { MainContentPFAS } from "./MainContentPFAS";
import { pfasSections } from "./constants";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Footer } from "@/components/footer-copy";
import { ProjectTechShowcase } from "@/components/ProjectTechShowcase";

export default function PFASTracking() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <HeroSectionPFAS />
      <NavigationBarPFAS 
        sections={pfasSections}
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      <MainContentPFAS activeSection={activeSection} />
      <ProjectTechShowcase projectId="pfas-tracking" className="py-16" />
      <Footer project="pfas" />
    </div>
  );
}
