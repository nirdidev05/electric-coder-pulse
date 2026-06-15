import React from 'react';
import Header from '@/components/Head';
import Hero from '@/components/Heroo'
import ExecutiveSummary from '@/components/ExecutiveSummarye';
import ProblemDomain from '@/components/ProblemDomain';
import Architecture from '@/components/Architecture';
import Innovation from '@/components/Innovation';
import Results from '@/components/Resultss';
import Implementation from '@/components/Implementation';
import Footer from '@/components/Foter';
import MatrixBackground from '@/components/MatrixBackground';
import { ProjectTechShowcase } from '@/components/ProjectTechShowcase';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Cyber Grid Background - Completely non-interactive */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-[-1]">
        <div 
          className="w-full h-full pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(10, 122, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(10, 122, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Header - Ensure all interactive elements work */}
      <header className="relative z-20 pointer-events-auto">
        <Header />
      </header>
      
      {/* Main content - Each section gets proper layering */}
      <main className="relative z-10 pointer-events-auto">
        <section className="relative z-10">
          <Hero />
        </section>
        <section className="relative z-10">
          <ExecutiveSummary />
        </section>
        <section className="relative z-10">
          <ProblemDomain />
        </section>
        <section className="relative z-10">
          <Architecture />
        </section>
        <section className="relative z-10">
          <Innovation />
        </section>
        <section className="relative z-10">
          <Results />
        </section>
        <section className="relative z-10">
          <Implementation />
        </section>
        <ProjectTechShowcase projectId="gpt-app" className="py-20" />
      </main>
      
      {/* Footer - Highest z-index to ensure all buttons are clickable */}
      <footer className="relative z-30 pointer-events-auto" style={{ isolation: 'isolate' }}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;