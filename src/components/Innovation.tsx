import React, { useState } from 'react';
import { InnovationIcon, MemoryIcon, CPUIcon, BrainIcon, ArchitectureIcon } from './CustomIcon';
import { useTranslation } from '@/hooks/useTranslation';

const Innovation: React.FC = () => {
  const t = useTranslation();
  const [activeInnovation, setActiveInnovation] = useState(0);

  const innovations = [
    {
      id: 'memory_attention',
      title: t.gptCodeTracer.innovation.innovations.memoryAttention.title,
      subtitle: t.gptCodeTracer.innovation.innovations.memoryAttention.subtitle,
      researchContext: t.gptCodeTracer.innovation.innovations.memoryAttention.researchContext,
      problem: {
        title: t.gptCodeTracer.innovation.innovations.memoryAttention.problem.title,
        description: t.gptCodeTracer.innovation.innovations.memoryAttention.problem.description,
        technicalIssue: t.gptCodeTracer.innovation.innovations.memoryAttention.problem.technicalIssue,
        codeExample: t.gptCodeTracer.innovation.innovations.memoryAttention.problem.codeExample,
        impact: t.gptCodeTracer.innovation.innovations.memoryAttention.problem.impact
      },
      solution: {
        title: t.gptCodeTracer.innovation.innovations.memoryAttention.solution.title,
        description: t.gptCodeTracer.innovation.innovations.memoryAttention.solution.description,
        technicalSolution: t.gptCodeTracer.innovation.innovations.memoryAttention.solution.technicalSolution,
        codeExample: t.gptCodeTracer.innovation.innovations.memoryAttention.solution.codeExample,
        breakthrough: t.gptCodeTracer.innovation.innovations.memoryAttention.solution.breakthrough
      },
      impact: {
        title: t.gptCodeTracer.innovation.innovations.memoryAttention.impact.title,
        description: t.gptCodeTracer.innovation.innovations.memoryAttention.impact.description,
        metrics: t.gptCodeTracer.innovation.innovations.memoryAttention.impact.metrics,
        researchSignificance: t.gptCodeTracer.innovation.innovations.memoryAttention.impact.researchSignificance
      },
      icon: MemoryIcon,
      color: 'text-primary',
      gradient: 'from-primary to-secondary'
    },
    {
      id: 'step_embedding',
      title: t.gptCodeTracer.innovation.innovations.stepEmbedding.title,
      subtitle: t.gptCodeTracer.innovation.innovations.stepEmbedding.subtitle,
      researchContext: t.gptCodeTracer.innovation.innovations.stepEmbedding.researchContext,
      problem: {
        title: t.gptCodeTracer.innovation.innovations.stepEmbedding.problem.title,
        description: t.gptCodeTracer.innovation.innovations.stepEmbedding.problem.description,
        technicalIssue: t.gptCodeTracer.innovation.innovations.stepEmbedding.problem.technicalIssue,
        codeExample: t.gptCodeTracer.innovation.innovations.stepEmbedding.problem.codeExample,
        impact: t.gptCodeTracer.innovation.innovations.stepEmbedding.problem.impact
      },
      solution: {
        title: t.gptCodeTracer.innovation.innovations.stepEmbedding.solution.title,
        description: t.gptCodeTracer.innovation.innovations.stepEmbedding.solution.description,
        technicalSolution: t.gptCodeTracer.innovation.innovations.stepEmbedding.solution.technicalSolution,
        codeExample: t.gptCodeTracer.innovation.innovations.stepEmbedding.solution.codeExample,
        breakthrough: t.gptCodeTracer.innovation.innovations.stepEmbedding.solution.breakthrough
      },
      impact: {
        title: t.gptCodeTracer.innovation.innovations.stepEmbedding.impact.title,
        description: t.gptCodeTracer.innovation.innovations.stepEmbedding.impact.description,
        metrics: t.gptCodeTracer.innovation.innovations.stepEmbedding.impact.metrics,
        researchSignificance: t.gptCodeTracer.innovation.innovations.stepEmbedding.impact.researchSignificance
      },
      icon: CPUIcon,
      color: 'text-secondary', 
      gradient: 'from-secondary to-accent'
    }
  ];

  const architectureComparison = [
    {
      architecture: t.gptCodeTracer.innovation.architectureComparison.customGPT.architecture,
      suitability: t.gptCodeTracer.innovation.architectureComparison.customGPT.suitability,
      stateTracking: t.gptCodeTracer.innovation.architectureComparison.customGPT.stateTracking,
      parallelization: t.gptCodeTracer.innovation.architectureComparison.customGPT.parallelization, 
      complexity: t.gptCodeTracer.innovation.architectureComparison.customGPT.complexity,
      strengths: t.gptCodeTracer.innovation.architectureComparison.customGPT.strengths,
      weaknesses: t.gptCodeTracer.innovation.architectureComparison.customGPT.weaknesses,
      performance: t.gptCodeTracer.innovation.architectureComparison.customGPT.performance,
      color: 'text-green-400',
      borderColor: 'border-green-500/20'
    },
    {
      architecture: t.gptCodeTracer.innovation.architectureComparison.standardGPT.architecture,
      suitability: t.gptCodeTracer.innovation.architectureComparison.standardGPT.suitability,
      stateTracking: t.gptCodeTracer.innovation.architectureComparison.standardGPT.stateTracking,
      parallelization: t.gptCodeTracer.innovation.architectureComparison.standardGPT.parallelization,
      complexity: t.gptCodeTracer.innovation.architectureComparison.standardGPT.complexity, 
      strengths: t.gptCodeTracer.innovation.architectureComparison.standardGPT.strengths,
      weaknesses: t.gptCodeTracer.innovation.architectureComparison.standardGPT.weaknesses,
      performance: t.gptCodeTracer.innovation.architectureComparison.standardGPT.performance,
      color: 'text-yellow-400',
      borderColor: 'border-yellow-500/20'
    },
    {
      architecture: t.gptCodeTracer.innovation.architectureComparison.rnnLstm.architecture,
      suitability: t.gptCodeTracer.innovation.architectureComparison.rnnLstm.suitability,
      stateTracking: t.gptCodeTracer.innovation.architectureComparison.rnnLstm.stateTracking,
      parallelization: t.gptCodeTracer.innovation.architectureComparison.rnnLstm.parallelization,
      complexity: t.gptCodeTracer.innovation.architectureComparison.rnnLstm.complexity,
      strengths: t.gptCodeTracer.innovation.architectureComparison.rnnLstm.strengths,
      weaknesses: t.gptCodeTracer.innovation.architectureComparison.rnnLstm.weaknesses,
      performance: t.gptCodeTracer.innovation.architectureComparison.rnnLstm.performance,
      color: 'text-orange-400',
      borderColor: 'border-orange-500/20'
    },
    {
      architecture: t.gptCodeTracer.innovation.architectureComparison.graphNeural.architecture,
      suitability: t.gptCodeTracer.innovation.architectureComparison.graphNeural.suitability,
      stateTracking: t.gptCodeTracer.innovation.architectureComparison.graphNeural.stateTracking,
      parallelization: t.gptCodeTracer.innovation.architectureComparison.graphNeural.parallelization,
      complexity: t.gptCodeTracer.innovation.architectureComparison.graphNeural.complexity,
      strengths: t.gptCodeTracer.innovation.architectureComparison.graphNeural.strengths,
      weaknesses: t.gptCodeTracer.innovation.architectureComparison.graphNeural.weaknesses,
      performance: t.gptCodeTracer.innovation.architectureComparison.graphNeural.performance,
      color: 'text-red-400', 
      borderColor: 'border-red-500/20'
    }
  ];

  return (
    <section id="innovation" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="cyber-card p-3 rounded-xl">
                <InnovationIcon className="text-warning" size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold neural-gradient">
                {t.gptCodeTracer.innovation.title}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-mono leading-relaxed">
              <span className="text-warning">{`class`}</span> <span className="text-secondary">BreakthroughInnovations</span>(<span className="text-primary">SymbolicReasoning</span>):
              <br />
              <span className="ml-4 text-muted-foreground"># {t.gptCodeTracer.innovation.subtitle}</span>
            </p>
          </div>

          {/* Research Context Banner */}
          <div className="cyber-card p-6 rounded-xl mb-12 bg-gradient-to-r from-warning/10 to-primary/10 border border-warning/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-warning to-primary flex items-center justify-center text-white shadow-lg">
                <BrainIcon size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3">{t.gptCodeTracer.innovation.contextBanner.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t.gptCodeTracer.innovation.contextBanner.description}
                </p>
                <div className="flex items-center gap-4 text-sm font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                    <span className="text-warning">{t.gptCodeTracer.innovation.contextBanner.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary">{t.gptCodeTracer.innovation.contextBanner.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {innovations.map((innovation, index) => {
              const IconComponent = innovation.icon;
              return (
                <button
                  key={innovation.id}
                  onClick={() => setActiveInnovation(index)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl font-medium transition-all duration-500 cyber-glow ${
                    activeInnovation === index
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'cyber-card text-muted-foreground hover:text-foreground hover:scale-102'
                  }`}
                >
                  <IconComponent size={20} />
                  <div className="text-left">
                    <div className="font-bold font-mono">{innovation.title}</div>
                    <div className="text-xs opacity-75">{innovation.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Innovation Deep Dive */}
          <div className="space-y-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                {React.createElement(innovations[activeInnovation].icon, { 
                  className: innovations[activeInnovation].color, 
                  size: 32 
                })}
                <h3 className="text-3xl font-bold neural-gradient">
                  {innovations[activeInnovation].title}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                {innovations[activeInnovation].subtitle}
              </p>
              <div className="cyber-card px-4 py-2 rounded-full bg-accent/10 border border-accent/20 inline-block">
                <span className="text-accent font-mono text-sm">
                  {innovations[activeInnovation].researchContext}
                </span>
              </div>
            </div>

            {/* Three-Stage Innovation Breakdown */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* PROBLEM */}
              <div className="cyber-card p-8 rounded-2xl border-l-4 border-red-500 bg-gradient-to-br from-red-500/5 to-red-500/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-400 font-bold text-xl">!</span>
                  </div>
                  <h4 className="text-xl font-bold text-red-400 font-mono">{t.gptCodeTracer.innovation.labels.problem}</h4>
                </div>
                
                <h5 className="font-bold text-foreground mb-4">
                  {innovations[activeInnovation].problem.title}
                </h5>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {innovations[activeInnovation].problem.description}
                </p>
                
                <div className="cyber-card p-4 rounded-lg bg-red-500/10 border border-red-500/20 mb-4">
                  <h6 className="font-semibold text-red-400 mb-2 font-mono text-sm">{t.gptCodeTracer.innovation.labels.technicalIssue}</h6>
                  <p className="text-sm text-muted-foreground">
                    {innovations[activeInnovation].problem.technicalIssue}
                  </p>
                </div>
                
                <div className="cyber-terminal">
                  <div className="terminal-dots">
                    <div className="dot dot-red"></div>
                    <div className="dot dot-yellow"></div>
                    <div className="dot dot-green"></div>
                    <span className="text-muted-foreground font-mono text-xs ml-4">problem.py</span>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <pre className="text-foreground whitespace-pre-wrap leading-relaxed">
                      {innovations[activeInnovation].problem.codeExample}
                    </pre>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-red-500/20 rounded border border-red-500/30">
                  <span className="text-red-400 font-mono text-sm font-bold">IMPACT: </span>
                  <span className="text-muted-foreground text-sm">
                    {innovations[activeInnovation].problem.impact}
                  </span>
                </div>
              </div>

              {/* SOLUTION */}
              <div className="cyber-card p-8 rounded-2xl border-l-4 border-blue-500 bg-gradient-to-br from-blue-500/5 to-blue-500/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <BrainIcon className="text-blue-400" size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-blue-400 font-mono">{t.gptCodeTracer.innovation.labels.solution}</h4>
                </div>
                
                <h5 className="font-bold text-foreground mb-4">
                  {innovations[activeInnovation].solution.title}
                </h5>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {innovations[activeInnovation].solution.description}
                </p>
                
                <div className="cyber-card p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 mb-4">
                  <h6 className="font-semibold text-blue-400 mb-2 font-mono text-sm">{t.gptCodeTracer.innovation.labels.approach}</h6>
                  <p className="text-sm text-muted-foreground">
                    {innovations[activeInnovation].solution.technicalSolution}
                  </p>
                </div>
                
                <div className="cyber-terminal">
                  <div className="terminal-dots">
                    <div className="dot dot-red"></div>
                    <div className="dot dot-yellow"></div>
                    <div className="dot dot-green"></div>
                    <span className="text-muted-foreground font-mono text-xs ml-4">solution.py</span>
                  </div>
                  <div className="p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-foreground whitespace-pre-wrap leading-relaxed">
                      {innovations[activeInnovation].solution.codeExample}
                    </pre>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-500/20 rounded border border-blue-500/30">
                  <span className="text-blue-400 font-mono text-sm font-bold">{t.gptCodeTracer.innovation.labels.breakthrough}: </span>
                  <span className="text-muted-foreground text-sm">
                    {innovations[activeInnovation].solution.breakthrough}
                  </span>
                </div>
              </div>

              {/* IMPACT */}
              <div className="cyber-card p-8 rounded-2xl border-l-4 border-green-500 bg-gradient-to-br from-green-500/5 to-green-500/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-bold text-xl">✓</span>
                  </div>
                  <h4 className="text-xl font-bold text-green-400 font-mono">{t.gptCodeTracer.innovation.labels.impact}</h4>
                </div>
                
                <h5 className="font-bold text-foreground mb-4">
                  {innovations[activeInnovation].impact.title}
                </h5>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {innovations[activeInnovation].impact.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h6 className="font-semibold text-green-400 font-mono text-sm">{t.gptCodeTracer.innovation.labels.performanceMetrics}</h6>
                  {innovations[activeInnovation].impact.metrics.map((metric, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-sm text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
                
                <div className="cyber-card p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <h6 className="font-semibold text-green-400 mb-2 font-mono text-sm">{t.gptCodeTracer.innovation.labels.researchSignificance}</h6>
                  <p className="text-sm text-muted-foreground">
                    {innovations[activeInnovation].impact.researchSignificance}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Comparison Matrix */}
          <div className="cyber-card p-8 rounded-2xl mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              {t.gptCodeTracer.innovation.architectureComparison.title}
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              {t.gptCodeTracer.innovation.architectureComparison.subtitle}
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-mono text-primary font-bold">{t.gptCodeTracer.innovation.architectureComparison.tableHeaders.architecture}</th>
                    <th className="text-left py-4 px-4 font-mono text-secondary font-bold">{t.gptCodeTracer.innovation.architectureComparison.tableHeaders.suitability}</th>
                    <th className="text-left py-4 px-4 font-mono text-accent font-bold">{t.gptCodeTracer.innovation.architectureComparison.tableHeaders.stateTracking}</th>
                    <th className="text-left py-4 px-4 font-mono text-warning font-bold">{t.gptCodeTracer.innovation.architectureComparison.tableHeaders.complexity}</th>
                    <th className="text-left py-4 px-4 font-mono text-foreground font-bold">{t.gptCodeTracer.innovation.architectureComparison.tableHeaders.performance}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {architectureComparison.map((arch, index) => (
                    <tr key={arch.architecture} className={`hover:bg-muted/5 transition-colors ${arch.borderColor} border-l-4 border-l-transparent hover:border-l-current`}>
                      <td className="py-6 px-4">
                        <div className="font-semibold text-foreground">{arch.architecture}</div>
                        {index === 0 && (
                          <div className="text-xs text-primary font-mono mt-1">{t.gptCodeTracer.innovation.architectureComparison.customGPT.thisWork}</div>
                        )}
                      </td>
                      <td className="py-6 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${
                          arch.suitability === t.gptCodeTracer.innovation.labels.excellent ? 'bg-green-500/20 text-green-400' :
                          arch.suitability === t.gptCodeTracer.innovation.labels.moderate ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {arch.suitability}
                        </span>
                      </td>
                      <td className="py-6 px-4 text-muted-foreground leading-relaxed text-xs">
                        {arch.stateTracking}
                      </td>
                      <td className="py-6 px-4">
                        <div className={`font-mono font-bold ${arch.color}`}>
                          {arch.complexity}
                        </div>
                      </td>
                      <td className="py-6 px-4">
                        <div className={`font-bold ${arch.color}`}>
                          {arch.performance}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          <div className="text-green-400">✓ {arch.strengths}</div>
                          <div className="text-red-400 mt-1">✗ {arch.weaknesses}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Innovation Summary */}
          <div className="cyber-card p-8 rounded-2xl mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-lg">
              <InnovationIcon className="text-white" size={24} />
            </div>
            
            <h3 className="text-2xl font-bold neural-gradient mb-4">
              {t.gptCodeTracer.innovation.innovationSummary.title}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
              {t.gptCodeTracer.innovation.innovationSummary.description.replace(
                'context window limitation',
                `<span class="text-primary font-semibold">${t.gptCodeTracer.innovation.innovationSummary.contextWindow}</span>`
              ).replace(
                'explicit state tracking',
                `<span class="text-secondary font-semibold">${t.gptCodeTracer.innovation.innovationSummary.explicitState}</span>`
              )}
            </p>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm font-mono">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary">{t.gptCodeTracer.innovation.innovationSummary.statusLabels.innovationValidated}</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary">{t.gptCodeTracer.innovation.innovationSummary.statusLabels.oodAchieved}</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent">{t.gptCodeTracer.innovation.innovationSummary.statusLabels.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;