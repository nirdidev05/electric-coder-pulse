import React from 'react';
import Navigation from '@/components/navigatione';
import HeroSection from '@/components/HeroSectionn';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import TechnicalOverview from '@/components/TechnicalOverview';
import DataInsights from '@/components/DataInsights';
import ModelShowcase from '@/components/ModelShowcase';
import CodeExamples from '@/components/CodeExamples';
import ResultsMetrics from '@/components/ResultsMetrics';
import TechnologyStack from '@/components/TechnologyStack';
import Footer from '@/components/Footere';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <ExecutiveSummary />
        <TechnicalOverview />
        <DataInsights />
        <ModelShowcase />
        <CodeExamples />
        <ResultsMetrics />
        <TechnologyStack />
      </main>
      <Footer />
    </div>
  );
};

export default App;