import React, { useState, useEffect } from 'react';
import { ResultsIcon, BrainIcon, MemoryIcon, CPUIcon, ArchitectureIcon } from './CustomIcon';
import { useTranslation } from '@/hooks/useTranslation';

const Results: React.FC = () => {
  const t = useTranslation();
  const [activeResult, setActiveResult] = useState('ood');
  const [animatedMetrics, setAnimatedMetrics] = useState<Record<string, number>>({});

  const keyMetrics = [
    { 
      id: 'ood_accuracy',
      label: t.gptCodeTracer.results.keyMetrics.oodAccuracy.label, 
      value: 55.7, 
      suffix: '%',
      description: t.gptCodeTracer.results.keyMetrics.oodAccuracy.description,
      color: 'text-green-400',
      benchmark: t.gptCodeTracer.results.keyMetrics.oodAccuracy.benchmark,
      icon: ResultsIcon
    },
    { 
      id: 'training_efficiency',
      label: t.gptCodeTracer.results.keyMetrics.trainingTime.label, 
      value: 12, 
      suffix: 'h',
      description: t.gptCodeTracer.results.keyMetrics.trainingTime.description,
      color: 'text-blue-400',
      benchmark: t.gptCodeTracer.results.keyMetrics.trainingTime.benchmark,
      icon: CPUIcon
    },
    { 
      id: 'parameter_efficiency',
      label: t.gptCodeTracer.results.keyMetrics.parameters.label, 
      value: 2.1, 
      suffix: 'M',
      description: t.gptCodeTracer.results.keyMetrics.parameters.description,
      color: 'text-purple-400',
      benchmark: t.gptCodeTracer.results.keyMetrics.parameters.benchmark,
      icon: ArchitectureIcon
    },
    { 
      id: 'memory_scaling',
      label: t.gptCodeTracer.results.keyMetrics.memoryScaling.label, 
      value: 100, 
      suffix: '% Linear',
      description: t.gptCodeTracer.results.keyMetrics.memoryScaling.description,
      color: 'text-secondary',
      benchmark: t.gptCodeTracer.results.keyMetrics.memoryScaling.benchmark,
      icon: MemoryIcon
    }
  ];

  const oodTestResults = [
    {
      id: 'extended_loops',
      title: t.gptCodeTracer.results.oodTests.extendedLoops.title,
      description: t.gptCodeTracer.results.oodTests.extendedLoops.description,
      challenge: t.gptCodeTracer.results.oodTests.extendedLoops.challenge,
      result: t.gptCodeTracer.results.oodTests.extendedLoops.result,
      accuracy: t.gptCodeTracer.results.oodTests.extendedLoops.accuracy,
      significance: t.gptCodeTracer.results.oodTests.extendedLoops.significance,
      technicalDetail: t.gptCodeTracer.results.oodTests.extendedLoops.technicalDetail,
      example: t.gptCodeTracer.results.oodTests.extendedLoops.example,
      color: 'text-green-400',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'longer_numbers',
      title: t.gptCodeTracer.results.oodTests.fourDigitNumbers.title, 
      description: t.gptCodeTracer.results.oodTests.fourDigitNumbers.description,
      challenge: t.gptCodeTracer.results.oodTests.fourDigitNumbers.challenge,
      result: t.gptCodeTracer.results.oodTests.fourDigitNumbers.result,
      accuracy: t.gptCodeTracer.results.oodTests.fourDigitNumbers.accuracy,
      significance: t.gptCodeTracer.results.oodTests.fourDigitNumbers.significance,
      technicalDetail: t.gptCodeTracer.results.oodTests.fourDigitNumbers.technicalDetail,
      example: t.gptCodeTracer.results.oodTests.fourDigitNumbers.example,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'extended_sequences',
      title: t.gptCodeTracer.results.oodTests.extendedSequences.title,
      description: t.gptCodeTracer.results.oodTests.extendedSequences.description,
      challenge: t.gptCodeTracer.results.oodTests.extendedSequences.challenge,
      result: t.gptCodeTracer.results.oodTests.extendedSequences.result,
      accuracy: t.gptCodeTracer.results.oodTests.extendedSequences.accuracy,
      significance: t.gptCodeTracer.results.oodTests.extendedSequences.significance,
      technicalDetail: t.gptCodeTracer.results.oodTests.extendedSequences.technicalDetail,
      example: t.gptCodeTracer.results.oodTests.extendedSequences.example,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/20'
    }
  ];

  const performanceMetrics = {
    training: {
      total_time: t.gptCodeTracer.results.performanceMetrics.training.totalTime,
      convergence_epoch: t.gptCodeTracer.results.performanceMetrics.training.convergenceEpoch,
      final_loss: t.gptCodeTracer.results.performanceMetrics.training.finalLoss,
      gpu_utilization: t.gptCodeTracer.results.performanceMetrics.training.gpuUtilization,
      memory_efficiency: t.gptCodeTracer.results.performanceMetrics.training.memoryEfficiency,
      throughput: t.gptCodeTracer.results.performanceMetrics.training.throughput
    },
    architecture: {
      total_parameters: t.gptCodeTracer.results.performanceMetrics.architecture.totalParameters,
      embedding_dims: t.gptCodeTracer.results.performanceMetrics.architecture.embeddingDims,
      attention_heads: t.gptCodeTracer.results.performanceMetrics.architecture.attentionHeads, 
      transformer_layers: t.gptCodeTracer.results.performanceMetrics.architecture.transformerLayers,
      context_window: t.gptCodeTracer.results.performanceMetrics.architecture.contextWindow,
      memory_slots: t.gptCodeTracer.results.performanceMetrics.architecture.memorySlots
    },
    innovation: {
      memory_complexity: t.gptCodeTracer.results.performanceMetrics.innovation.memoryComplexity,
      standard_complexity: t.gptCodeTracer.results.performanceMetrics.innovation.standardComplexity,
      efficiency_gain: t.gptCodeTracer.results.performanceMetrics.innovation.efficiencyGain,
      context_extension: t.gptCodeTracer.results.performanceMetrics.innovation.contextExtension,
      state_tracking: t.gptCodeTracer.results.performanceMetrics.innovation.stateTracking,
      breakthrough_metric: t.gptCodeTracer.results.performanceMetrics.innovation.breakthroughMetric
    }
  };

  const resultCategories = [
    { id: 'ood', label: t.gptCodeTracer.results.categories.oodGeneralization.label, icon: ResultsIcon, color: 'text-green-400' },
    { id: 'performance', label: t.gptCodeTracer.results.categories.performanceAnalysis.label, icon: CPUIcon, color: 'text-blue-400' },
    { id: 'efficiency', label: t.gptCodeTracer.results.categories.architecturalEfficiency.label, icon: MemoryIcon, color: 'text-secondary' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newMetrics: Record<string, number> = {};
      keyMetrics.forEach(metric => {
        newMetrics[metric.id] = metric.value;
      });
      setAnimatedMetrics(newMetrics);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderResultContent = () => {
    switch (activeResult) {
      case 'ood':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold neural-gradient mb-6">
                {t.gptCodeTracer.results.categories.oodGeneralization.title}
              </h3>
              <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
                {t.gptCodeTracer.results.categories.oodGeneralization.subtitle}
              </p>
            </div>

            {/* Research Validation Banner */}
            <div className="cyber-card p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                    <ResultsIcon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{t.gptCodeTracer.results.categories.oodGeneralization.validationBanner.title}</h4>
                    <p className="text-sm text-muted-foreground">{t.gptCodeTracer.results.categories.oodGeneralization.validationBanner.author}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">{t.gptCodeTracer.results.categories.oodGeneralization.validationBanner.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* OOD Test Results - FIXED: Removed syntax highlighting */}
            <div className="space-y-8">
              {oodTestResults.map((test, index) => (
                <div key={test.id} className={`cyber-card p-8 rounded-2xl cyber-glow ${test.borderColor} border-l-4`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold font-mono">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground">{test.title}</h4>
                          <p className="text-muted-foreground">{test.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right ml-6">
                      <div className={`px-4 py-2 rounded-lg font-bold font-mono ${
                        test.result === 'BREAKTHROUGH' ? 'bg-green-500/20 text-green-400' :
                        test.result === 'VALIDATED' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {test.result}
                      </div>
                      <div className={`text-3xl font-bold font-mono mt-2 ${test.color}`}>
                        {test.accuracy}
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="cyber-card p-4 rounded-lg bg-warning/5 border border-warning/20">
                        <h5 className="font-semibold text-warning mb-3 font-mono">{t.gptCodeTracer.results.oodTests.labels.challengeParameters}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{test.challenge}</p>
                      </div>
                      
                      <div className="cyber-card p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <h5 className="font-semibold text-primary mb-3 font-mono">{t.gptCodeTracer.results.oodTests.labels.researchSignificance}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{test.significance}</p>
                      </div>
                      
                      <div className="cyber-card p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                        <h5 className="font-semibold text-secondary mb-3 font-mono">{t.gptCodeTracer.results.oodTests.labels.technicalAnalysis}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{test.technicalDetail}</p>
                      </div>
                    </div>
                    
                    <div className="cyber-terminal">
                      <div className="terminal-dots">
                        <div className="dot dot-red"></div>
                        <div className="dot dot-yellow"></div>
                        <div className="dot dot-green"></div>
                        <span className="text-muted-foreground font-mono text-xs ml-4">
                          ood_test_{index + 1}.py
                        </span>
                      </div>
                      <div className="p-4 font-mono text-sm">
                        <pre className="text-foreground whitespace-pre-wrap leading-relaxed">
                          {test.example}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold neural-gradient mb-4">
                {t.gptCodeTracer.results.categories.performanceAnalysis.title}
              </h3>
              <p className="text-muted-foreground">
                {t.gptCodeTracer.results.categories.performanceAnalysis.subtitle}
              </p>
            </div>

            {/* Animated Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {keyMetrics.map((metric) => {
                const IconComponent = metric.icon;
                return (
                  <div key={metric.id} className="cyber-card p-6 rounded-xl text-center cyber-glow">
                    <div className="flex items-center justify-center mb-4">
                      <IconComponent className={metric.color} size={24} />
                    </div>
                    <div className={`text-4xl font-bold mb-2 font-mono ${metric.color}`}>
                      {animatedMetrics[metric.id] || 0}{metric.suffix}
                    </div>
                    <div className="font-semibold text-foreground mb-2">{metric.label}</div>
                    <div className="text-sm text-muted-foreground mb-3">{metric.description}</div>
                    <div className="text-xs text-muted-foreground bg-muted/10 rounded px-2 py-1">
                      {metric.benchmark}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Detailed Performance Breakdown */}
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(performanceMetrics).map(([category, metrics]) => (
                <div key={category} className="cyber-card p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-foreground mb-6 font-mono capitalize">
                    {t.gptCodeTracer.results.performanceMetrics.labels[`${category}Metrics`]}
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-border/30">
                        <span className="text-muted-foreground font-mono text-sm capitalize">
                          {key.replace('_', ' ')}
                        </span>
                        <span className="font-mono font-bold text-primary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Training Evolution Visualization */}
            <div className="cyber-card p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-foreground mb-6 text-center">Training Evolution</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold text-secondary mb-4">{t.gptCodeTracer.results.performanceMetrics.labels.lossConvergence}</h5>
                  <div className="h-48 bg-muted/10 rounded-lg flex items-end justify-between p-4 relative overflow-hidden">
                    {/* Animated bars representing training progress */}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-secondary to-secondary/60 rounded-t transition-all duration-1000"
                        style={{ 
                          height: `${Math.max(20, 95 - i * 7)}%`,
                          width: '6%',
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/10 to-transparent"></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span className="font-mono">Epoch 0</span>
                    <span className="font-mono">Loss: 0.087</span>
                    <span className="font-mono">Epoch 12</span>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-primary mb-4">{t.gptCodeTracer.results.performanceMetrics.labels.accuracyEvolution}</h5>
                  <div className="h-48 bg-muted/10 rounded-lg flex items-end justify-between p-4 relative overflow-hidden">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-primary to-primary/60 rounded-t transition-all duration-1000"
                        style={{ 
                          height: `${Math.min(85, 25 + i * 5)}%`,
                          width: '6%',
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span className="font-mono">25%</span>
                    <span className="font-mono">OOD: 55.7%</span>
                    <span className="font-mono">Final</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'efficiency':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold neural-gradient mb-4">
                {t.gptCodeTracer.results.categories.architecturalEfficiency.title}
              </h3>
              <p className="text-muted-foreground">
                {t.gptCodeTracer.results.categories.architecturalEfficiency.subtitle}
              </p>
            </div>

            {/* Complexity Comparison */}
            <div className="cyber-card p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-foreground mb-6">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.title}</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-mono text-primary font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.headers.component}</th>
                      <th className="text-left py-4 px-4 font-mono text-secondary font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.headers.standardAttention}</th>
                      <th className="text-left py-4 px-4 font-mono text-accent font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.headers.memoryAugmented}</th>
                      <th className="text-left py-4 px-4 font-mono text-warning font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.headers.improvement}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="py-4 px-4 font-semibold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.timeComplexity.component}</td>
                      <td className="py-4 px-4 font-mono text-red-400 font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.timeComplexity.standard}</td>
                      <td className="py-4 px-4 font-mono text-green-400 font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.timeComplexity.memoryAugmented}</td>
                      <td className="py-4 px-4 font-mono text-green-400">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.timeComplexity.improvement}</td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="py-4 px-4 font-semibold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.memoryUsage.component}</td>
                      <td className="py-4 px-4 font-mono text-red-400 font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.memoryUsage.standard}</td>
                      <td className="py-4 px-4 font-mono text-green-400 font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.memoryUsage.memoryAugmented}</td>
                      <td className="py-4 px-4 font-mono text-green-400">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.memoryUsage.improvement}</td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="py-4 px-4 font-semibold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.contextLength.component}</td>
                      <td className="py-4 px-4 font-mono text-red-400 font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.contextLength.standard}</td>
                      <td className="py-4 px-4 font-mono text-green-400 font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.contextLength.memoryAugmented}</td>
                      <td className="py-4 px-4 font-mono text-green-400">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.contextLength.improvement}</td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="py-4 px-4 font-semibold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.longSequencePerformance.component}</td>
                      <td className="py-4 px-4 font-mono text-red-400 font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.longSequencePerformance.standard}</td>
                      <td className="py-4 px-4 font-mono text-green-400 font-bold">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.longSequencePerformance.memoryAugmented}</td>
                      <td className="py-4 px-4 font-mono text-green-400">{t.gptCodeTracer.results.efficiencyAnalysis.complexityComparison.rows.longSequencePerformance.improvement}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Resource Utilization */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 rounded-xl">
                <h5 className="font-semibold text-primary mb-4">{t.gptCodeTracer.results.efficiencyAnalysis.resourceUtilization.gpuUtilization.title}</h5>
                <div className="relative h-32">
                  <div className="absolute inset-0 bg-muted/20 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary to-primary/60 rounded-lg transition-all duration-2000" style={{ height: '89%' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white font-mono">{t.gptCodeTracer.results.efficiencyAnalysis.resourceUtilization.gpuUtilization.value}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center font-mono">{t.gptCodeTracer.results.efficiencyAnalysis.resourceUtilization.gpuUtilization.description}</p>
              </div>

              <div className="cyber-card p-6 rounded-xl">
                <h5 className="font-semibold text-secondary mb-4">{t.gptCodeTracer.results.efficiencyAnalysis.resourceUtilization.memoryEfficiency.title}</h5>
                <div className="relative h-32">
                  <div className="absolute inset-0 bg-muted/20 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-secondary to-secondary/60 rounded-lg transition-all duration-2000" style={{ height: '76%' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white font-mono">{t.gptCodeTracer.results.efficiencyAnalysis.resourceUtilization.memoryEfficiency.value}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center font-mono">{t.gptCodeTracer.results.efficiencyAnalysis.resourceUtilization.memoryEfficiency.description}</p>
              </div>

              <div className="cyber-card p-6 rounded-xl">
                <h5 className="font-semibold text-accent mb-4">{t.gptCodeTracer.results.efficiencyAnalysis.resourceUtilization.speedImprovement.title}</h5>
                <div className="relative h-32">
                  <div className="absolute inset-0 bg-muted/20 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-accent to-accent/60 rounded-lg transition-all duration-2000" style={{ height: '93%' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-black font-mono">{t.gptCodeTracer.results.efficiencyAnalysis.resourceUtilization.speedImprovement.value}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center font-mono">{t.gptCodeTracer.results.efficiencyAnalysis.resourceUtilization.speedImprovement.description}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="results" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="cyber-card p-3 rounded-xl">
                <ResultsIcon className="text-green-400" size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold neural-gradient">
                {t.gptCodeTracer.results.title}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-mono leading-relaxed">
              <span className="text-green-400">{`def`}</span> <span className="text-secondary">validate_breakthrough</span>():
              <br />
              <span className="ml-4 text-muted-foreground"># {t.gptCodeTracer.results.subtitle}</span>
            </p>
          </div>

          {/* Breakthrough Achievement Banner */}
          <div className="cyber-card p-8 rounded-2xl mb-12 text-center bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <ResultsIcon className="text-white" size={32} />
            </div>
            
            <h3 className="text-3xl font-bold neural-gradient mb-6">
              {t.gptCodeTracer.results.breakthroughBanner.title}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-4xl mx-auto text-lg leading-relaxed">
              {t.gptCodeTracer.results.breakthroughBanner.description.replace(
                'specialized neural architectures',
                `<span class="text-primary font-semibold">${t.gptCodeTracer.results.breakthroughBanner.specializedArchitectures}</span>`
              )}
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-green-400 font-mono">55.7%</div>
                <div className="text-sm text-muted-foreground font-mono">{t.gptCodeTracer.results.breakthroughBanner.metrics.oodAccuracy}</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-blue-400 font-mono">O(n)</div>
                <div className="text-sm text-muted-foreground font-mono">{t.gptCodeTracer.results.breakthroughBanner.metrics.linearScaling}</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-purple-400 font-mono">2.1M</div>
                <div className="text-sm text-muted-foreground font-mono">{t.gptCodeTracer.results.breakthroughBanner.metrics.parameters}</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-secondary font-mono">12h</div>
                <div className="text-sm text-muted-foreground font-mono">{t.gptCodeTracer.results.breakthroughBanner.metrics.training}</div>
              </div>
            </div>
          </div>

          {/* Result Category Navigation */}
          <div className="flex justify-center gap-3 mb-12">
            {resultCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveResult(category.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 cyber-glow ${
                    activeResult === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'cyber-card text-muted-foreground hover:text-foreground hover:scale-102'
                  }`}
                >
                  <IconComponent size={20} />
                  <div className="text-left">
                    <div className="font-bold font-mono">{category.label}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Result Content */}
          <div className="animate-fade-in">
            {renderResultContent()}
          </div>

          {/* Research Validation Summary */}
          <div className="cyber-card p-8 rounded-2xl mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{t.gptCodeTracer.results.validationSummary.title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-4 font-mono">{t.gptCodeTracer.results.validationSummary.hypothesisConfirmed.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t.gptCodeTracer.results.validationSummary.hypothesisConfirmed.description.replace(
                    'significantly outperform',
                    `<span class="text-primary font-semibold">${t.gptCodeTracer.results.validationSummary.hypothesisConfirmed.significantlyOutperform}</span>`
                  )}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-4 font-mono">{t.gptCodeTracer.results.validationSummary.researchImpact.title}</h4>
                <div className="space-y-2 text-sm">
                  {t.gptCodeTracer.results.validationSummary.researchImpact.impacts.map((impact, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 animate-pulse"></div>
                      <span className="text-muted-foreground">{impact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-4 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">{t.gptCodeTracer.results.validationSummary.statusLabels.breakthroughValidated}</span>
                </div>
                <div className="w-1 h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400">{t.gptCodeTracer.results.validationSummary.statusLabels.oodAchieved}</span>
                </div>
                <div className="w-1 h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-400">{t.gptCodeTracer.results.validationSummary.statusLabels.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;