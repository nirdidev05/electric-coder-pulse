import React, { useState } from 'react';
import { ArchitectureIcon, BrainIcon, MemoryIcon, CPUIcon } from './CustomIcon';
import { useTranslation } from '@/hooks/useTranslation';

const Architecture: React.FC = () => {
  const t = useTranslation();
  const [activeComponent, setActiveComponent] = useState('transformer');

  const architectureSpecs = {
    transformer: {
      title: t.gptCodeTracer.architecture.components.transformer.title,
      description: t.gptCodeTracer.architecture.components.transformer.description,
      specs: {
        [t.gptCodeTracer.architecture.components.transformer.specs.modelType]: t.gptCodeTracer.architecture.components.transformer.specs.modelType,
        [t.gptCodeTracer.architecture.components.transformer.specs.architecture]: t.gptCodeTracer.architecture.components.transformer.specs.architecture,
        [t.gptCodeTracer.architecture.components.transformer.specs.layers]: t.gptCodeTracer.architecture.components.transformer.specs.layers,
        [t.gptCodeTracer.architecture.components.transformer.specs.parameters]: t.gptCodeTracer.architecture.components.transformer.specs.parameters,
        [t.gptCodeTracer.architecture.components.transformer.specs.contextWindow]: t.gptCodeTracer.architecture.components.transformer.specs.contextWindow,
        [t.gptCodeTracer.architecture.components.transformer.specs.vocabulary]: t.gptCodeTracer.architecture.components.transformer.specs.vocabulary
      },
      code: t.gptCodeTracer.architecture.components.transformer.code,
      icon: ArchitectureIcon
    },
    attention: {
      title: t.gptCodeTracer.architecture.components.attention.title,
      description: t.gptCodeTracer.architecture.components.attention.description,
      specs: {
        [t.gptCodeTracer.architecture.components.attention.specs.innovation]: t.gptCodeTracer.architecture.components.attention.specs.innovation,
        [t.gptCodeTracer.architecture.components.attention.specs.contextExtension]: t.gptCodeTracer.architecture.components.attention.specs.contextExtension,
        [t.gptCodeTracer.architecture.components.attention.specs.complexity]: t.gptCodeTracer.architecture.components.attention.specs.complexity,
        [t.gptCodeTracer.architecture.components.attention.specs.memorySize]: t.gptCodeTracer.architecture.components.attention.specs.memorySize,
        [t.gptCodeTracer.architecture.components.attention.specs.inspiration]: t.gptCodeTracer.architecture.components.attention.specs.inspiration,
        [t.gptCodeTracer.architecture.components.attention.specs.benefit]: t.gptCodeTracer.architecture.components.attention.specs.benefit
      },
      code: t.gptCodeTracer.architecture.components.attention.code,
      icon: MemoryIcon
    },
    embedding: {
      title: t.gptCodeTracer.architecture.components.embedding.title,
      description: t.gptCodeTracer.architecture.components.embedding.description,
      specs: {
        [t.gptCodeTracer.architecture.components.embedding.specs.purpose]: t.gptCodeTracer.architecture.components.embedding.specs.purpose,
        [t.gptCodeTracer.architecture.components.embedding.specs.method]: t.gptCodeTracer.architecture.components.embedding.specs.method,
        [t.gptCodeTracer.architecture.components.embedding.specs.format]: t.gptCodeTracer.architecture.components.embedding.specs.format,
        [t.gptCodeTracer.architecture.components.embedding.specs.integration]: t.gptCodeTracer.architecture.components.embedding.specs.integration,
        [t.gptCodeTracer.architecture.components.embedding.specs.type]: t.gptCodeTracer.architecture.components.embedding.specs.type,
        [t.gptCodeTracer.architecture.components.embedding.specs.benefit]: t.gptCodeTracer.architecture.components.embedding.specs.benefit
      },
      code: t.gptCodeTracer.architecture.components.embedding.code,
      icon: CPUIcon
    }
  };

  const hyperparameters = [
    { 
      name: t.gptCodeTracer.architecture.hyperparameters.parameters.blockSize.name, 
      value: t.gptCodeTracer.architecture.hyperparameters.parameters.blockSize.value, 
      rationale: t.gptCodeTracer.architecture.hyperparameters.parameters.blockSize.rationale, 
      impact: t.gptCodeTracer.architecture.hyperparameters.parameters.blockSize.impact 
    },
    { 
      name: t.gptCodeTracer.architecture.hyperparameters.parameters.nEmbd.name, 
      value: t.gptCodeTracer.architecture.hyperparameters.parameters.nEmbd.value, 
      rationale: t.gptCodeTracer.architecture.hyperparameters.parameters.nEmbd.rationale, 
      impact: t.gptCodeTracer.architecture.hyperparameters.parameters.nEmbd.impact 
    },
    { 
      name: t.gptCodeTracer.architecture.hyperparameters.parameters.nHead.name, 
      value: t.gptCodeTracer.architecture.hyperparameters.parameters.nHead.value, 
      rationale: t.gptCodeTracer.architecture.hyperparameters.parameters.nHead.rationale, 
      impact: t.gptCodeTracer.architecture.hyperparameters.parameters.nHead.impact 
    },
    { 
      name: t.gptCodeTracer.architecture.hyperparameters.parameters.nLayer.name, 
      value: t.gptCodeTracer.architecture.hyperparameters.parameters.nLayer.value, 
      rationale: t.gptCodeTracer.architecture.hyperparameters.parameters.nLayer.rationale, 
      impact: t.gptCodeTracer.architecture.hyperparameters.parameters.nLayer.impact 
    },
    { 
      name: t.gptCodeTracer.architecture.hyperparameters.parameters.learningRate.name, 
      value: t.gptCodeTracer.architecture.hyperparameters.parameters.learningRate.value, 
      rationale: t.gptCodeTracer.architecture.hyperparameters.parameters.learningRate.rationale, 
      impact: t.gptCodeTracer.architecture.hyperparameters.parameters.learningRate.impact 
    },
    { 
      name: t.gptCodeTracer.architecture.hyperparameters.parameters.batchSize.name, 
      value: t.gptCodeTracer.architecture.hyperparameters.parameters.batchSize.value, 
      rationale: t.gptCodeTracer.architecture.hyperparameters.parameters.batchSize.rationale, 
      impact: t.gptCodeTracer.architecture.hyperparameters.parameters.batchSize.impact 
    }
  ];

  const components = [
    { id: 'transformer', label: t.gptCodeTracer.architecture.components.transformer.label, icon: ArchitectureIcon },
    { id: 'attention', label: t.gptCodeTracer.architecture.components.attention.label, icon: MemoryIcon },
    { id: 'embedding', label: t.gptCodeTracer.architecture.components.embedding.label, icon: CPUIcon }
  ];

  return (
    <section id="architecture" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="cyber-card p-3 rounded-xl">
                <ArchitectureIcon className="text-accent" size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold neural-gradient">
                {t.gptCodeTracer.architecture.title}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-mono leading-relaxed">
              <span className="text-accent">{`class`}</span> <span className="text-secondary">CustomGPT</span>(<span className="text-primary">SymbolicReasoning</span>):
              <br />
              <span className="ml-4 text-muted-foreground"># {t.gptCodeTracer.architecture.subtitle}</span>
            </p>
          </div>

          {/* Research Context Banner */}
          <div className="cyber-card p-6 rounded-xl mb-12 bg-gradient-to-r from-accent/10 to-warning/10 border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent to-warning flex items-center justify-center text-white shadow-lg">
                <BrainIcon size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3">{t.gptCodeTracer.architecture.contextBanner.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t.gptCodeTracer.architecture.contextBanner.description}
                </p>
                <div className="flex items-center gap-4 text-sm font-mono">
                  <div className="flex items-center gap-2">
                  
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                    <span className="text-warning">{t.gptCodeTracer.architecture.contextBanner.researcher}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Flow Visualization */}
          <div className="cyber-card p-8 rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{t.gptCodeTracer.architecture.dataFlow.title}</h3>
            <div className="space-y-8">
              {/* Input Layer */}
              <div className="flex items-center justify-center">
                <div className="cyber-card p-6 rounded-xl min-w-[280px] text-center bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <div className="text-primary font-mono font-bold mb-2 text-lg">{t.gptCodeTracer.architecture.dataFlow.inputLayer.title}</div>
                  <div className="text-sm text-muted-foreground">{t.gptCodeTracer.architecture.dataFlow.inputLayer.description}</div>
                  <div className="flex items-center justify-center gap-2 mt-2 text-xs">
                    <span className="px-2 py-1 bg-primary/20 rounded font-mono">{t.gptCodeTracer.architecture.dataFlow.inputLayer.tokens.tokens}</span>
                    <span className="px-2 py-1 bg-secondary/20 rounded font-mono">{t.gptCodeTracer.architecture.dataFlow.inputLayer.tokens.positions}</span>
                    <span className="px-2 py-1 bg-accent/20 rounded font-mono">{t.gptCodeTracer.architecture.dataFlow.inputLayer.tokens.steps}</span>
                  </div>
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-secondary relative">
                  <div className="absolute top-0 w-2 h-2 bg-primary rounded-full -translate-x-0.5 animate-pulse"></div>
                </div>
              </div>

              {/* Embedding Fusion */}
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="cyber-card p-4 rounded-lg text-center min-w-[120px]">
                  <div className="text-secondary font-mono font-bold mb-2">{t.gptCodeTracer.architecture.dataFlow.embeddingFusion.token.title}</div>
                  <div className="text-xs text-muted-foreground">{t.gptCodeTracer.architecture.dataFlow.embeddingFusion.token.description}</div>
                </div>
                <div className="text-2xl text-accent">+</div>
                <div className="cyber-card p-4 rounded-lg text-center min-w-[120px]">
                  <div className="text-secondary font-mono font-bold mb-2">{t.gptCodeTracer.architecture.dataFlow.embeddingFusion.position.title}</div>
                  <div className="text-xs text-muted-foreground">{t.gptCodeTracer.architecture.dataFlow.embeddingFusion.position.description}</div>
                </div>
                <div className="text-2xl text-accent">+</div>
                <div className="cyber-card p-4 rounded-lg text-center min-w-[120px] cyber-glow bg-gradient-to-r from-accent/10 to-warning/10 border border-accent/30">
                  <div className="text-accent font-mono font-bold mb-2">{t.gptCodeTracer.architecture.dataFlow.embeddingFusion.step.title}</div>
                  <div className="text-xs text-muted-foreground">{t.gptCodeTracer.architecture.dataFlow.embeddingFusion.step.description}</div>
                  <div className="text-xs text-accent font-bold mt-1">{t.gptCodeTracer.architecture.dataFlow.embeddingFusion.step.innovation}</div>
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-12 bg-gradient-to-b from-secondary to-accent relative">
                  <div className="absolute top-6 w-2 h-2 bg-secondary rounded-full -translate-x-0.5 animate-pulse"></div>
                </div>
              </div>

              {/* Transformer Stack */}
              <div className="flex items-center justify-center">
                <div className="cyber-card p-6 rounded-xl text-center bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20">
                  <div className="text-accent font-mono font-bold mb-2 text-lg">{t.gptCodeTracer.architecture.dataFlow.transformerStack.title}</div>
                  <div className="text-sm text-muted-foreground mb-4">
                    {t.gptCodeTracer.architecture.dataFlow.transformerStack.description}
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <MemoryIcon className="text-primary" size={16} />
                    <div className="text-xs font-mono text-primary font-bold">{t.gptCodeTracer.architecture.dataFlow.transformerStack.memoryEnhanced}</div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Flow Arrow */}
              <div className="flex justify-center">
                <div className="w-0.5 h-12 bg-gradient-to-b from-accent to-warning relative">
                  <div className="absolute bottom-0 w-2 h-2 bg-warning rounded-full -translate-x-0.5 animate-pulse"></div>
                </div>
              </div>

              {/* Output Layer */}
              <div className="flex items-center justify-center">
                <div className="cyber-card p-6 rounded-xl text-center bg-gradient-to-r from-accent/10 to-warning/10 border border-warning/20">
                  <div className="text-warning font-mono font-bold mb-2 text-lg">{t.gptCodeTracer.architecture.dataFlow.outputLayer.title}</div>
                  <div className="text-sm text-muted-foreground">{t.gptCodeTracer.architecture.dataFlow.outputLayer.description}</div>
                  <div className="text-xs text-warning font-bold mt-2">{t.gptCodeTracer.architecture.dataFlow.outputLayer.symbolicPrediction}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Component Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {components.map((component) => {
              const IconComponent = component.icon;
              return (
                <button
                  key={component.id}
                  onClick={() => setActiveComponent(component.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 cyber-glow ${
                    activeComponent === component.id
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'cyber-card text-muted-foreground hover:text-foreground hover:scale-102'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="font-mono">{component.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Component Detail */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Component Description */}
            <div className="cyber-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              
              <div className="flex items-center gap-4 mb-6">
                {React.createElement(architectureSpecs[activeComponent].icon, { 
                  className: "text-primary", 
                  size: 24 
                })}
                <h3 className="text-2xl font-bold text-foreground">
                  {architectureSpecs[activeComponent].title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {architectureSpecs[activeComponent].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-primary font-mono text-lg">{t.gptCodeTracer.architecture.labels.specifications}</h4>
                {Object.entries(architectureSpecs[activeComponent].specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-border/30">
                    <span className="text-muted-foreground font-mono text-sm">{key}</span>
                    <span className="text-foreground font-semibold text-sm font-mono">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Implementation - FIXED: No syntax highlighting */}
            <div className="cyber-terminal">
              <div className="terminal-dots">
                <div className="dot dot-red"></div>
                <div className="dot dot-yellow"></div>
                <div className="dot dot-green"></div>
                <span className="text-muted-foreground font-mono text-sm ml-4 flex-1">
                  {activeComponent}_implementation.py
                </span>
                <div className="text-xs text-muted-foreground font-mono">
                  {t.gptCodeTracer.architecture.labels.researchCode}
                </div>
              </div>
              <div className="p-6 min-h-[500px] font-mono text-sm overflow-x-auto">
                <pre className="text-foreground whitespace-pre-wrap leading-relaxed">
                  {architectureSpecs[activeComponent].code}
                </pre>
              </div>
            </div>
          </div>

          {/* Hyperparameters Configuration */}
          <div className="cyber-card p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-warning"></div>
            
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <CPUIcon className="text-accent" size={24} />
              {t.gptCodeTracer.architecture.hyperparameters.title}
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-mono text-primary font-bold">{t.gptCodeTracer.architecture.hyperparameters.tableHeaders.parameter}</th>
                    <th className="text-left py-4 px-4 font-mono text-secondary font-bold">{t.gptCodeTracer.architecture.hyperparameters.tableHeaders.value}</th>
                    <th className="text-left py-4 px-4 font-mono text-accent font-bold">{t.gptCodeTracer.architecture.hyperparameters.tableHeaders.rationale}</th>
                    <th className="text-left py-4 px-4 font-mono text-warning font-bold">{t.gptCodeTracer.architecture.hyperparameters.tableHeaders.impact}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30">
                  {hyperparameters.map((param, index) => (
                    <tr key={param.name} className="hover:bg-muted/5 transition-colors">
                      <td className="py-4 px-4 font-mono text-primary font-semibold">{param.name}</td>
                      <td className="py-4 px-4 font-mono text-secondary font-bold text-lg">{param.value}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground leading-relaxed">{param.rationale}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground leading-relaxed">{param.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold font-mono">OPTIMIZATION_NOTE:</span> 
                {t.gptCodeTracer.architecture.hyperparameters.optimizationNote}
              </p>
            </div>
            
            {/* Research Attribution */}
            <div className="mt-6 flex items-center justify-center gap-4 text-sm font-mono">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary">{t.gptCodeTracer.architecture.labels.researchComplete}</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary">nirdidev05</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent">2025-08-29</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;