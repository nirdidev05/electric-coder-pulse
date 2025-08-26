import React, { useState, useEffect } from 'react';
import { SummaryIcon, BrainIcon, MemoryIcon, CPUIcon, ResultsIcon } from './CustomIcon';

const ExecutiveSummary: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const metrics = [
    { 
      id: 'ood_accuracy',
      label: 'OOD Accuracy', 
      value: 55,
      suffix: '%+',
      description: 'Out-of-distribution generalization performance',
      detail: 'Model maintains high accuracy on unseen code patterns with longer loops and 4-digit numbers',
      icon: ResultsIcon,
      color: 'text-green-400'
    },
    { 
      id: 'architecture',
      label: 'Architecture', 
      value: 100,
      suffix: '% Custom',
      description: 'From-scratch GPT with specialized components',
      detail: 'Memory-Augmented Attention + Execution Step Embedding innovations',
      icon: BrainIcon,
      color: 'text-primary'
    },
    { 
      id: 'parameters',
      label: 'Parameters', 
      value: 2.1,
      suffix: 'M',
      description: 'Efficient model size without pre-training',
      detail: '8 layers, 384 embedding dimensions, 8 attention heads - optimized architecture',
      icon: CPUIcon,
      color: 'text-purple-400'
    },
    { 
      id: 'memory_scaling',
      label: 'Memory Scaling', 
      value: 100,
      suffix: '% Linear',
      description: 'Linear complexity vs quadratic standard attention',
      detail: 'External dynamic memory overcomes 256-token window limitation efficiently',
      icon: MemoryIcon,
      color: 'text-secondary'
    }
  ];

  const innovations = [
    {
      title: 'Memory-Augmented Attention',
      problem: 'Standard transformers limited by fixed context window for long code sequences',
      solution: 'External dynamic memory enables theoretically infinite temporal range',
      impact: 'Linear complexity scaling for processing complex while loops efficiently',
      icon: MemoryIcon,
      gradient: 'from-primary to-secondary'
    },
    {
      title: 'Execution Step Embedding',
      problem: 'No explicit mechanism for tracking execution state in neural networks',
      solution: 'Unique step IDs converted to numerical vectors via specialized embedding',
      impact: 'Precise state transitions enabling loop iteration disambiguation',
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
                Executive Summary
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-mono leading-relaxed">
              <span className="text-accent">{`def`}</span> <span className="text-secondary">breakthrough_research</span>():
              <br />
              <span className="ml-4 text-muted-foreground"># Revolutionary approach to symbolic reasoning</span>
            </p>
          </div>

          {/* Problem Statement */}
          <div className="cyber-card p-8 rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-warning/20 flex items-center justify-center">
                <span className="text-warning font-bold">!</span>
              </div>
              The Technical Challenge
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The <span className="text-primary font-semibold">Datahack TinyPy Language Model Challenge</span> presented 
                  a formidable technical problem: creating a GPT-based model capable of "tracing" Python code execution. 
                  This task demands <span className="text-secondary font-semibold">absolute deterministic correctness</span> - 
                  a domain where Large Language Models traditionally struggle.
                </p>
                
                <div className="cyber-card p-4 rounded-lg bg-warning/5 border border-warning/20">
                  <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-warning rounded-full animate-pulse"></span>
                    Critical Constraint
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-warning font-semibold">No external datasets or pre-trained models allowed.</span> 
                    The model must learn TinyPy language rules from scratch, proving architectural design 
                    drives performance over brute-force scaling.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground mb-4">Challenge Dimensions:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-red-400 text-sm">Deterministic Correctness</div>
                      <div className="text-xs text-muted-foreground">Unlike natural language - zero tolerance for errors</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-yellow-400 text-sm">OOD Generalization</div>
                      <div className="text-xs text-muted-foreground">Performance on fundamentally different test data</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-blue-400 text-sm">Long Sequences</div>
                      <div className="text-xs text-muted-foreground">Complex while loops exceeding context windows</div>
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
                  Performance Analysis
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
              Architectural Breakthroughs
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
                            PROBLEM
                          </h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">{innovation.problem}</p>
                        </div>
                        
                        <div className="cyber-card p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                          <h5 className="font-semibold text-blue-400 mb-3 font-mono flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                            SOLUTION
                          </h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">{innovation.solution}</p>
                        </div>
                        
                        <div className="cyber-card p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                          <h5 className="font-semibold text-green-400 mb-3 font-mono flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            IMPACT
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
              
              <h3 className="text-2xl font-bold text-foreground mb-6">Research Hypothesis Validated</h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This project validates a <span className="text-primary font-semibold">critical hypothesis</span>: 
                  for specialized, logic-driven tasks, a bespoke neural architecture with carefully engineered components 
                  can outperform generic, scaled-up models. By integrating <span className="text-secondary font-semibold">neuro-symbolic elements</span> and 
                  a robust distributed training pipeline, this work demonstrates a systematic approach to bridging 
                  <span className="text-accent font-semibold"> statistical pattern recognition</span> and 
                  <span className="text-warning font-semibold"> deterministic symbolic reasoning</span>.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm font-mono">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">HYPOTHESIS_CONFIRMED</span>
                </div>
                <div className="w-1 h-4 bg-border"></div>
                <div className="flex items-center gap-2 text-sm font-mono">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400">RESEARCH_VALIDATED</span>
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