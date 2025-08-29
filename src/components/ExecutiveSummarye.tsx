import React, { useState, useEffect } from 'react';
import { SummaryIcon, BrainIcon, MemoryIcon, CPUIcon, ResultsIcon } from './CustomIcon';
import { useTranslation } from '@/hooks/useTranslation';

const ExecutiveSummary: React.FC = () => {
  const t = useTranslation();
  const [activeMetric, setActiveMetric] = useState(0);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const metrics = [
    { 
      id: 'ood_accuracy',
      label: t.gptCodeTracer.executiveSummary.metrics.oodAccuracy.label, 
      value: 55,
      suffix: '%+',
      description: t.gptCodeTracer.executiveSummary.metrics.oodAccuracy.description,
      detail: t.gptCodeTracer.executiveSummary.metrics.oodAccuracy.detail,
      icon: ResultsIcon,
      color: 'text-green-400'
    },
    { 
      id: 'architecture',
      label: t.gptCodeTracer.executiveSummary.metrics.architecture.label, 
      value: 100,
      suffix: '% Custom',
      description: t.gptCodeTracer.executiveSummary.metrics.architecture.description,
      detail: t.gptCodeTracer.executiveSummary.metrics.architecture.detail,
      icon: BrainIcon,
      color: 'text-primary'
    },
    { 
      id: 'parameters',
      label: t.gptCodeTracer.executiveSummary.metrics.parameters.label, 
      value: 2.1,
      suffix: 'M',
      description: t.gptCodeTracer.executiveSummary.metrics.parameters.description,
      detail: t.gptCodeTracer.executiveSummary.metrics.parameters.detail,
      icon: CPUIcon,
      color: 'text-purple-400'
    },
    { 
      id: 'memory_scaling',
      label: t.gptCodeTracer.executiveSummary.metrics.memoryScaling.label, 
      value: 100,
      suffix: '% Linear',
      description: t.gptCodeTracer.executiveSummary.metrics.memoryScaling.description,
      detail: t.gptCodeTracer.executiveSummary.metrics.memoryScaling.detail,
      icon: MemoryIcon,
      color: 'text-secondary'
    }
  ];

  const innovations = [
    {
      title: t.gptCodeTracer.executiveSummary.innovations.memoryAugmented.title,
      problem: t.gptCodeTracer.executiveSummary.innovations.memoryAugmented.problem,
      solution: t.gptCodeTracer.executiveSummary.innovations.memoryAugmented.solution,
      impact: t.gptCodeTracer.executiveSummary.innovations.memoryAugmented.impact,
      icon: MemoryIcon,
      gradient: 'from-primary to-secondary'
    },
    {
      title: t.gptCodeTracer.executiveSummary.innovations.executionStep.title,
      problem: t.gptCodeTracer.executiveSummary.innovations.executionStep.problem,
      solution: t.gptCodeTracer.executiveSummary.innovations.executionStep.solution,
      impact: t.gptCodeTracer.executiveSummary.innovations.executionStep.impact,
      icon: CPUIcon,
      gradient: 'from-secondary to-accent'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newValues: Record<string, number> = {};
      metrics.forEach(metric => {
        newValues[metric.id] = metric.value;
      });
      setAnimatedValues(newValues);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <section id="summary" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="cyber-card p-3 rounded-xl">
                <SummaryIcon className="text-primary" size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold neural-gradient">
                {t.gptCodeTracer.executiveSummary.title}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-mono leading-relaxed">
              <span className="text-accent">{`def`}</span> <span className="text-secondary">breakthrough_research</span>():
              <br />
              <span className="ml-4 text-muted-foreground"># {t.gptCodeTracer.executiveSummary.subtitle}</span>
            </p>
          </div>

          {/* Problem Statement */}
          <div className="cyber-card p-8 rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-warning/20 flex items-center justify-center">
                <span className="text-warning font-bold">!</span>
              </div>
              {t.gptCodeTracer.executiveSummary.challenge.title}
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.gptCodeTracer.executiveSummary.challenge.intro} <span className="text-primary font-semibold">{t.gptCodeTracer.executiveSummary.challenge.challengeName}</span> {t.gptCodeTracer.executiveSummary.challenge.description} 
                  {t.gptCodeTracer.executiveSummary.challenge.demand} <span className="text-secondary font-semibold">{t.gptCodeTracer.executiveSummary.challenge.requirement}</span> {t.gptCodeTracer.executiveSummary.challenge.struggle}
                </p>
                
                <div className="cyber-card p-4 rounded-lg bg-warning/5 border border-warning/20">
                  <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-warning rounded-full animate-pulse"></span>
                    {t.gptCodeTracer.executiveSummary.challenge.constraint.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-warning font-semibold">{t.gptCodeTracer.executiveSummary.challenge.constraint.description}</span> 
                    {t.gptCodeTracer.executiveSummary.challenge.constraint.explanation}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground mb-4">{t.gptCodeTracer.executiveSummary.challenge.dimensions.title}</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-red-400 text-sm">{t.gptCodeTracer.executiveSummary.challenge.dimensions.deterministic.title}</div>
                      <div className="text-xs text-muted-foreground">{t.gptCodeTracer.executiveSummary.challenge.dimensions.deterministic.description}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-yellow-400 text-sm">{t.gptCodeTracer.executiveSummary.challenge.dimensions.oodGeneralization.title}</div>
                      <div className="text-xs text-muted-foreground">{t.gptCodeTracer.executiveSummary.challenge.dimensions.oodGeneralization.description}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-400 text-sm">{t.gptCodeTracer.executiveSummary.challenge.dimensions.longSequences.title}</div>
                      <div className="text-xs text-muted-foreground">{t.gptCodeTracer.executiveSummary.challenge.dimensions.longSequences.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div
                  key={metric.id}
                  className={`cyber-card p-6 rounded-xl cursor-pointer transition-all duration-500 cyber-glow ${
                    activeMetric === index
                      ? 'ring-2 ring-primary shadow-lg shadow-primary/25 scale-105'
                      : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveMetric(index)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={metric.color} size={20} />
                    <div className="text-xs font-mono text-muted-foreground">
                      #{String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className={`text-3xl font-bold mb-2 font-mono ${metric.color}`}>
                    {animatedValues[metric.id] || 0}{metric.suffix}
                  </div>
                  
                  <div className="text-sm font-semibold text-foreground mb-2">
                    {metric.label}
                  </div>
                  
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {metric.description}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Metric Detail */}
          <div className="cyber-card p-6 rounded-xl mb-12 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                {React.createElement(metrics[activeMetric].icon, { 
                  className: metrics[activeMetric].color, 
                  size: 20 
                })}
              </div>
              <div>
                <h4 className="font-mono text-lg text-primary font-bold">
                  metrics.{metrics[activeMetric].id}()
                </h4>
                <div className="text-sm text-muted-foreground">
                  {t.gptCodeTracer.executiveSummary.metrics.performanceAnalysis}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {metrics[activeMetric].detail}
            </p>
          </div>

          {/* Innovation Showcase */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center neural-gradient mb-12">
              {t.gptCodeTracer.executiveSummary.innovations.title}
            </h3>
            
            {innovations.map((innovation, index) => {
              const IconComponent = innovation.icon;
              return (
                <div key={innovation.title} className="cyber-card p-8 rounded-2xl relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${innovation.gradient}`}></div>
                  
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${innovation.gradient} flex items-center justify-center text-white shadow-lg`}>
                      <IconComponent size={24} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-foreground mb-6">{innovation.title}</h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="cyber-card p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                          <h5 className="font-semibold text-red-400 mb-3 font-mono flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                            {t.gptCodeTracer.executiveSummary.innovations.labels.problem}
                          </h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">{innovation.problem}</p>
                        </div>
                        
                        <div className="cyber-card p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                          <h5 className="font-semibold text-blue-400 mb-3 font-mono flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                            {t.gptCodeTracer.executiveSummary.innovations.labels.solution}
                          </h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">{innovation.solution}</p>
                        </div>
                        
                        <div className="cyber-card p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                          <h5 className="font-semibold text-green-400 mb-3 font-mono flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            {t.gptCodeTracer.executiveSummary.innovations.labels.impact}
                          </h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">{innovation.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Research Validation */}
          <div className="cyber-card p-8 rounded-2xl mt-12 bg-gradient-to-r from-green-500/5 to-blue-500/5 border border-green-500/20">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BrainIcon className="text-white" size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-6">{t.gptCodeTracer.executiveSummary.validation.title}</h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.gptCodeTracer.executiveSummary.validation.intro} <span className="text-primary font-semibold">{t.gptCodeTracer.executiveSummary.validation.hypothesis}</span>{t.gptCodeTracer.executiveSummary.validation.explanation} 
                  {t.gptCodeTracer.executiveSummary.validation.integration} <span className="text-secondary font-semibold">{t.gptCodeTracer.executiveSummary.validation.elements}</span> {t.gptCodeTracer.executiveSummary.validation.demonstration} 
                  <span className="text-accent font-semibold">{t.gptCodeTracer.executiveSummary.validation.recognition}</span> {t.gptCodeTracer.executiveSummary.validation.and} 
                  <span className="text-warning font-semibold">{t.gptCodeTracer.executiveSummary.validation.reasoning}</span>.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm font-mono">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">{t.gptCodeTracer.executiveSummary.validation.status.confirmed}</span>
                </div>
                <div className="w-1 h-4 bg-border"></div>
                <div className="flex items-center gap-2 text-sm font-mono">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400">{t.gptCodeTracer.executiveSummary.validation.status.validated}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;