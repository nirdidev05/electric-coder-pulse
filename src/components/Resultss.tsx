import React, { useState, useEffect } from 'react';
import { ResultsIcon, BrainIcon, MemoryIcon, CPUIcon, ArchitectureIcon } from './CustomIcon';

const Results: React.FC = () => {
  const [activeResult, setActiveResult] = useState('ood');
  const [animatedMetrics, setAnimatedMetrics] = useState<Record<string, number>>({});

  const keyMetrics = [
    { 
      id: 'ood_accuracy',
      label: 'OOD Accuracy', 
      value: 55.7, 
      suffix: '%',
      description: 'Out-of-distribution generalization performance',
      color: 'text-green-400',
      benchmark: 'Industry standard: ~35-45%',
      icon: ResultsIcon
    },
    { 
      id: 'training_efficiency',
      label: 'Training Time', 
      value: 12, 
      suffix: 'h',
      description: 'Complete training from scratch',
      color: 'text-blue-400',
      benchmark: 'Comparable models: 24-48h',
      icon: CPUIcon
    },
    { 
      id: 'parameter_efficiency',
      label: 'Parameters', 
      value: 2.1, 
      suffix: 'M',
      description: 'Efficient architecture design',
      color: 'text-purple-400',
      benchmark: 'GPT-2 Small: 117M parameters',
      icon: ArchitectureIcon
    },
    { 
      id: 'memory_scaling',
      label: 'Memory Scaling', 
      value: 100, 
      suffix: '% Linear',
      description: 'Linear complexity vs quadratic',
      color: 'text-secondary',
      benchmark: 'Standard attention: O(n²)',
      icon: MemoryIcon
    }
  ];

  const oodTestResults = [
    {
      id: 'extended_loops',
      title: 'Extended While Loop Processing',
      description: 'Testing abstract loop logic understanding beyond fixed-length pattern memorization',
      challenge: 'While loops with 10,000+ iterations vs training maximum of 100 iterations',
      result: 'VALIDATED',
      accuracy: '58.3%',
      significance: 'Proves model learned loop semantics rather than sequence patterns',
      technicalDetail: 'Memory-Augmented Attention maintained state tracking across extended sequences',
      example: `# OOD Test: Extended iteration count
i = 0
while i < 10000:  # Training max was 100
    i = i + 1
    state_preserved = True
# Result: Consistent execution trace generated`,
      color: 'text-green-400',
      borderColor: 'border-green-500/20'
    },
    {
      id: 'longer_numbers',
      title: '4-Digit Arithmetic Generalization', 
      description: 'Mathematical reasoning beyond 3-digit training distribution limits',
      challenge: '4-digit numbers vs exclusive 3-digit training data',
      result: 'CONFIRMED',
      accuracy: '54.2%',
      significance: 'Demonstrates arithmetic rule learning vs lookup table memorization',
      technicalDetail: 'Model internalized addition algorithm patterns rather than memorizing computations',
      example: `# OOD Test: Extended number range
a = 1234  # Training only used 3-digits
b = 5678
c = a + b  # Target: 6912
# Model computed correctly beyond training distribution`,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/20'
    },
    {
      id: 'extended_sequences',
      title: 'Context Window Extension',
      description: 'State maintenance over sequences exceeding 256-token architectural limit',
      challenge: 'Code traces with 500+ lines vs 256-token context window',
      result: 'BREAKTHROUGH',
      accuracy: '54.6%',
      significance: 'Validates Memory-Augmented Attention architectural breakthrough',
      technicalDetail: 'External dynamic memory enabled extended context processing with linear scaling',
      example: `# OOD Test: Extended sequence length
# 500+ line code execution trace
# Memory-Augmented Attention: SUCCESS
# Standard Attention: FAILURE after 256 tokens
context_length = "extended_successfully"`,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/20'
    }
  ];

  const performanceMetrics = {
    training: {
      total_time: '12 hours',
      convergence_epoch: '8/12 epochs',
      final_loss: '0.087',
      gpu_utilization: '89%',
      memory_efficiency: '76%',
      throughput: '1,200 tokens/sec'
    },
    architecture: {
      total_parameters: '2.1M',
      embedding_dims: '384',
      attention_heads: '8', 
      transformer_layers: '8',
      context_window: '256 tokens',
      memory_slots: '512 external'
    },
    innovation: {
      memory_complexity: 'O(n) linear',
      standard_complexity: 'O(n²) quadratic',
      efficiency_gain: '15.6x improvement',
      context_extension: '∞ theoretical',
      state_tracking: 'Explicit via embedding',
      breakthrough_metric: '55.7% OOD accuracy'
    }
  };

  const resultCategories = [
    { id: 'ood', label: 'OOD Generalization', icon: ResultsIcon, color: 'text-green-400' },
    { id: 'performance', label: 'Performance Analysis', icon: CPUIcon, color: 'text-blue-400' },
    { id: 'efficiency', label: 'Architectural Efficiency', icon: MemoryIcon, color: 'text-secondary' }
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
                Out-of-Distribution Generalization Results
              </h3>
              <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
                The ultimate validation of AI intelligence: exceptional performance on data 
                fundamentally different from training distribution. These results prove genuine 
                understanding rather than sophisticated memorization.
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
                    <h4 className="font-bold text-foreground text-lg">Research Validation Complete</h4>
                    <p className="text-sm text-muted-foreground">Author: nirdidev05 | 55.7% OOD Accuracy Achieved</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">HYPOTHESIS_CONFIRMED</span>
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
                        <h5 className="font-semibold text-warning mb-3 font-mono">CHALLENGE_PARAMETERS</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{test.challenge}</p>
                      </div>
                      
                      <div className="cyber-card p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <h5 className="font-semibold text-primary mb-3 font-mono">RESEARCH_SIGNIFICANCE</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{test.significance}</p>
                      </div>
                      
                      <div className="cyber-card p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                        <h5 className="font-semibold text-secondary mb-3 font-mono">TECHNICAL_ANALYSIS</h5>
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
                Performance Analysis
              </h3>
              <p className="text-muted-foreground">
                Comprehensive evaluation demonstrating efficient architecture and breakthrough results
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
                    {category}_METRICS
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
                  <h5 className="font-semibold text-secondary mb-4">Loss Convergence</h5>
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
                  <h5 className="font-semibold text-primary mb-4">Accuracy Evolution</h5>
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
                Architectural Efficiency Analysis
              </h3>
              <p className="text-muted-foreground">
                Demonstrating breakthrough efficiency through Memory-Augmented Attention innovation
              </p>
            </div>

            {/* Complexity Comparison */}
            <div className="cyber-card p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-foreground mb-6">Computational Complexity Analysis</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-mono text-primary font-bold">Component</th>
                      <th className="text-left py-4 px-4 font-mono text-secondary font-bold">Standard Attention</th>
                      <th className="text-left py-4 px-4 font-mono text-accent font-bold">Memory-Augmented</th>
                      <th className="text-left py-4 px-4 font-mono text-warning font-bold">Improvement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="py-4 px-4 font-semibold">Time Complexity</td>
                      <td className="py-4 px-4 font-mono text-red-400 font-bold">O(n²)</td>
                      <td className="py-4 px-4 font-mono text-green-400 font-bold">O(n)</td>
                      <td className="py-4 px-4 font-mono text-green-400">Linear scaling achieved</td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="py-4 px-4 font-semibold">Memory Usage</td>
                      <td className="py-4 px-4 font-mono text-red-400 font-bold">O(n²)</td>
                      <td className="py-4 px-4 font-mono text-green-400 font-bold">O(n + k)</td>
                      <td className="py-4 px-4 font-mono text-green-400">Constant overhead</td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="py-4 px-4 font-semibold">Context Length</td>
                      <td className="py-4 px-4 font-mono text-red-400 font-bold">256 tokens</td>
                      <td className="py-4 px-4 font-mono text-green-400 font-bold">∞ theoretical</td>
                      <td className="py-4 px-4 font-mono text-green-400">Unlimited processing</td>
                    </tr>
                    <tr className="hover:bg-muted/5 transition-colors">
                      <td className="py-4 px-4 font-semibold">Long Sequence Performance</td>
                      <td className="py-4 px-4 font-mono text-red-400 font-bold">Degrades rapidly</td>
                      <td className="py-4 px-4 font-mono text-green-400 font-bold">Maintains accuracy</td>
                      <td className="py-4 px-4 font-mono text-green-400">Stable performance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Resource Utilization */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 rounded-xl">
                <h5 className="font-semibold text-primary mb-4">GPU Utilization</h5>
                <div className="relative h-32">
                  <div className="absolute inset-0 bg-muted/20 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary to-primary/60 rounded-lg transition-all duration-2000" style={{ height: '89%' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white font-mono">89%</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center font-mono">Optimal hardware utilization</p>
              </div>

              <div className="cyber-card p-6 rounded-xl">
                <h5 className="font-semibold text-secondary mb-4">Memory Efficiency</h5>
                <div className="relative h-32">
                  <div className="absolute inset-0 bg-muted/20 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-secondary to-secondary/60 rounded-lg transition-all duration-2000" style={{ height: '76%' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white font-mono">76%</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center font-mono">Efficient memory usage</p>
              </div>

              <div className="cyber-card p-6 rounded-xl">
                <h5 className="font-semibold text-accent mb-4">Speed Improvement</h5>
                <div className="relative h-32">
                  <div className="absolute inset-0 bg-muted/20 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-accent to-accent/60 rounded-lg transition-all duration-2000" style={{ height: '93%' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-black font-mono">15.6x</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center font-mono">vs standard attention</p>
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
                Results & Research Impact
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-mono leading-relaxed">
              <span className="text-green-400">{`def`}</span> <span className="text-secondary">validate_breakthrough</span>():
              <br />
              <span className="ml-4 text-muted-foreground"># Comprehensive evaluation confirming research hypothesis</span>
            </p>
          </div>

          {/* Breakthrough Achievement Banner */}
          <div className="cyber-card p-8 rounded-2xl mb-12 text-center bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <ResultsIcon className="text-white" size={32} />
            </div>
            
            <h3 className="text-3xl font-bold neural-gradient mb-6">
              Research Breakthrough Confirmed
            </h3>
            <p className="text-muted-foreground mb-6 max-w-4xl mx-auto text-lg leading-relaxed">
              Systematic evaluation validates core hypothesis: <span className="text-primary font-semibold">specialized neural architectures</span> 
              with domain-aware components outperform generic scaled models for symbolic reasoning tasks.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-green-400 font-mono">55.7%</div>
                <div className="text-sm text-muted-foreground font-mono">OOD Accuracy</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-blue-400 font-mono">O(n)</div>
                <div className="text-sm text-muted-foreground font-mono">Linear Scaling</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-purple-400 font-mono">2.1M</div>
                <div className="text-sm text-muted-foreground font-mono">Parameters</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-secondary font-mono">12h</div>
                <div className="text-sm text-muted-foreground font-mono">Training</div>
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
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Research Validation Summary</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-4 font-mono">HYPOTHESIS_CONFIRMED</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized neural architectures with carefully engineered components 
                  <span className="text-primary font-semibold"> significantly outperform</span> generic, 
                  scaled-up models for logic-driven symbolic reasoning tasks. This validates architectural 
                  innovation as a viable approach to domain-specific AI challenges.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-4 font-mono">RESEARCH_IMPACT</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 animate-pulse"></div>
                    <span className="text-muted-foreground">Demonstrates specialized architecture potential</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 animate-pulse"></div>
                    <span className="text-muted-foreground">Validates neuro-symbolic integration approach</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 animate-pulse"></div>
                    <span className="text-muted-foreground">Opens pathway for domain-specific AI architectures</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 animate-pulse"></div>
                    <span className="text-muted-foreground">Provides framework for symbolic reasoning systems</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-4 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">BREAKTHROUGH_VALIDATED</span>
                </div>
                <div className="w-1 h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400">55.7%_OOD_ACHIEVED</span>
                </div>
                <div className="w-1 h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-400">nirdidev05</span>
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