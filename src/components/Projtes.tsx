import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const projectSections = [
    { id: 'overview', label: 'Overview', icon: '🎯' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'innovations', label: 'Key Innovations', icon: '💡' },
    { id: 'results', label: 'Results & Impact', icon: '📊' },
    { id: 'technical', label: 'Technical Details', icon: '⚙️' }
  ];

  const keyMetrics = [
    { label: 'OOD Accuracy', value: '95%+', color: 'text-green-400', description: 'Out-of-distribution generalization performance' },
    { label: 'Context Extension', value: '∞', color: 'text-blue-400', description: 'Theoretically infinite memory through Memory-Augmented Attention' },
    { label: 'Model Parameters', value: '2.1M', color: 'text-purple-400', description: 'Efficient custom architecture' },
    { label: 'Training Time', value: '12h', color: 'text-yellow-400', description: 'From scratch without pre-trained models' }
  ];

  const architecturalInnovations = [
    {
      title: 'Memory-Augmented Attention',
      description: 'External dynamic memory that extends beyond the 256-token context window, enabling linear complexity scaling and theoretically infinite temporal range.',
      problem: 'Standard Transformers limited by fixed context window for long sequences',
      solution: 'External fixed-size dynamic memory acts as high-level cache for past states',
      impact: 'Handles complex while loops with thousands of iterations',
      technical: 'Inspired by Memformer, incorporates self.memory parameter in attention mechanism'
    },
    {
      title: 'Execution Step Embedding',
      description: 'A separate embedding layer that encodes execution steps as numerical vectors, providing explicit state tracking capability.',
      problem: 'Identical code blocks in loops appear multiple times with different variable values',
      solution: 'Unique step IDs (#STEP {step_counter}) converted to numerical vectors via nn.Embedding',
      impact: 'Enables precise state transitions and loop iteration tracking',
      technical: 'Neuro-symbolic bridge between discrete step count and neural processing'
    }
  ];

  const technicalSpecs = {
    'Model Architecture': {
      'Type': 'Decoder-only Transformer',
      'Layers': '8 transformer blocks',
      'Embedding Dimensions': '384',
      'Attention Heads': '8 multi-head attention',
      'Context Window': '256 tokens',
      'Activation Function': 'GELU',
      'Normalization': 'Pre-normalized LayerNorm'
    },
    'Training Configuration': {
      'Optimizer': 'AdamW with weight decay',
      'Learning Rate': '1e-3 with cosine decay',
      'Batch Size': '190 samples',
      'Gradient Clipping': '1.0',
      'Training Time': '12 hours',
      'Hardware': 'Multi-GPU distributed training'
    },
    'Dataset Characteristics': {
      'Language': 'TinyPy (Python subset)',
      'Training Examples': '1M code traces',
      'Validation Set': '10K examples',
      'Test Set': '100 examples',
      'Complexity Levels': 'Arithmetics → Conditionals → While loops',
      'OOD Challenges': 'Longer loops, 4-digit numbers, extended code'
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                GPT-Based Approach to Code Tracing
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Datahack TinyPy Language Model Challenge presented a formidable technical problem: 
                creating a GPT-based model capable of "tracing" the execution of Python code. This task 
                requires absolute, deterministic correctness in symbolic reasoning—a domain where 
                traditional LLMs often struggle.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">The Challenge</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      Deterministic state tracking across execution steps
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      Out-of-distribution generalization requirement
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      No external datasets or pre-trained models allowed
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      Complex while loops with variable-length sequences
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">The Solution</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      Custom GPT architecture with specialized components
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      Memory-Augmented Attention mechanism
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      Execution Step Embedding for state tracking
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      Distributed training pipeline optimization
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-3">Research Significance</h4>
                <p className="text-sm text-muted-foreground">
                  This project validates a critical hypothesis: for specialized, logic-driven tasks, 
                  a bespoke neural architecture with carefully engineered components can outperform 
                  generic, scaled-up models. It demonstrates a systematic approach to bridging statistical 
                  pattern recognition and deterministic symbolic reasoning.
                </p>
              </div>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Custom GPT Architecture</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                A decoder-only Transformer enhanced with domain-specific components for precise code execution tracking
              </p>
            </div>

            {/* Architecture Diagram */}
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-6">Architecture Flow</h4>
              <div className="space-y-6">
                {/* Input Layer */}
                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center font-technical text-sm">
                    Input
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-foreground">Token + Position + Step Embeddings</h5>
                    <p className="text-sm text-muted-foreground">TinyPy tokens, positional encoding, and execution step IDs</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-secondary"></div>
                </div>

                {/* Transformer Blocks */}
                <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center font-technical text-sm">
                    8x
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-foreground">Memory-Augmented Transformer Blocks</h5>
                    <p className="text-sm text-muted-foreground">LayerNorm → Memory-Augmented Attention → LayerNorm → FeedForward</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-accent"></div>
                </div>

                {/* Output Layer */}
                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center font-technical text-sm">
                    Out
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-foreground">Language Model Head</h5>
                    <p className="text-sm text-muted-foreground">Final LayerNorm → Linear layer → Next token prediction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold text-foreground mb-4">Core Components</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transformer Layers</span>
                    <span className="text-primary font-technical">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Embedding Dimensions</span>
                    <span className="text-primary font-technical">384</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Attention Heads</span>
                    <span className="text-primary font-technical">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Context Window</span>
                    <span className="text-primary font-technical">256</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Vocabulary Size</span>
                    <span className="text-primary font-technical">Custom</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold text-foreground mb-4">Innovation Highlights</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Memory-Augmented Attention</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Execution Step Embedding</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">GELU Activation Functions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Pre-normalized Architecture</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Scaled Residual Connections</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'innovations':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Architectural Innovations</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Two key innovations that enable precise symbolic reasoning and state tracking
              </p>
            </div>

            {architecturalInnovations.map((innovation, index) => (
              <div key={innovation.title} className="glass-card p-8 rounded-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{innovation.title}</h4>
                    <p className="text-muted-foreground">{innovation.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h5 className="font-semibold text-red-400 mb-2">Problem Addressed</h5>
                      <p className="text-sm text-muted-foreground">{innovation.problem}</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h5 className="font-semibold text-green-400 mb-2">Solution Approach</h5>
                      <p className="text-sm text-muted-foreground">{innovation.solution}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-400 mb-2">Performance Impact</h5>
                      <p className="text-sm text-muted-foreground">{innovation.impact}</p>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-400 mb-2">Technical Implementation</h5>
                      <p className="text-sm text-muted-foreground">{innovation.technical}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Comparative Analysis */}
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-foreground mb-6">Architecture Comparison</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Architecture</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">State Tracking</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Parallelization</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Code Tracing Suitability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-primary">Custom GPT</td>
                      <td className="py-3 px-4 text-muted-foreground">Memory-Augmented Attention + Step Embedding</td>
                      <td className="py-3 px-4 text-green-400">High</td>
                      <td className="py-3 px-4 text-green-400">Excellent</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">RNNs</td>
                      <td className="py-3 px-4 text-muted-foreground">Internal hidden state</td>
                      <td className="py-3 px-4 text-red-400">Low</td>
                      <td className="py-3 px-4 text-yellow-400">Moderate</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">GNNs</td>
                      <td className="py-3 px-4 text-muted-foreground">Node embeddings</td>
                      <td className="py-3 px-4 text-green-400">High</td>
                      <td className="py-3 px-4 text-yellow-400">Static analysis only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'results':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Results & Impact</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Breakthrough performance in out-of-distribution generalization and symbolic reasoning
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {keyMetrics.map((metric) => (
                <div key={metric.label} className="glass-card p-6 rounded-xl text-center hover-lift">
                  <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-2">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>

            {/* OOD Generalization Results */}
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-foreground mb-6">Out-of-Distribution Generalization</h4>
              <p className="text-muted-foreground mb-6">
                The model was evaluated on data fundamentally different from training, testing genuine understanding 
                of TinyPy language rules rather than memorization.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h5 className="font-semibold text-blue-400 mb-3">More While Iterations</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Testing abstract loop logic understanding beyond fixed-length memorization
                  </p>
                  <div className="text-2xl font-bold text-blue-400">✓ Passed</div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <h5 className="font-semibold text-green-400 mb-3">Longer Numbers (4-digits)</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    Arithmetic generalization beyond 3-digit training examples
                  </p>
                  <div className="text-2xl font-bold text-green-400">✓ Passed</div>
                </div>
                
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                  <h5 className="font-semibold text-purple-400 mb-3">Extended Code Sequences</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    State maintenance over longer instruction sequences
                  </p>
                  <div className="text-2xl font-bold text-purple-400">✓ Passed</div>
                </div>
              </div>
            </div>

            {/* Research Impact */}
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-foreground mb-6">Research Contributions</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold text-primary mb-4">Theoretical Contributions</h5>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      Validated that bespoke architectures can outperform scaled generic models for specialized tasks
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      Demonstrated effective neuro-symbolic integration approach
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      Showed that architectural design drives performance more than pre-training
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-secondary mb-4">Practical Applications</h5>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      Code debugging and verification systems
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      Educational programming tools
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      Automated program analysis frameworks
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'technical':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Technical Implementation</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Detailed technical specifications and implementation details
              </p>
            </div>

            {Object.entries(technicalSpecs).map(([category, specs]) => (
              <div key={category} className="glass-card p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-foreground mb-6">{category}</h4>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {Object.entries(specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-border/30">
                      <span className="text-muted-foreground">{key}</span>
                      <span className="font-technical text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Code Implementation Preview */}
            <div className="glass-card p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-foreground mb-6">Key Implementation Highlights</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-secondary mb-3">Custom TinyPy Tokenizer</h5>
                  <div className="bg-muted/10 rounded-lg p-4 font-technical text-sm">
                    <code className="text-green-400">class TinypyTokenizer():</code><br/>
                    <code className="text-muted-foreground ml-4"># Custom tokenizer for TinyPy syntax</code><br/>
                    <code className="text-muted-foreground ml-4"># Handles execution step markers</code><br/>
                    <code className="text-blue-400 ml-4">def encode(self, input_string):</code><br/>
                    <code className="text-muted-foreground ml-8"># Convert to token IDs</code>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-secondary mb-3">Memory-Augmented Attention</h5>
                  <div className="bg-muted/10 rounded-lg p-4 font-technical text-sm">
                    <code className="text-green-400">class MemoryAugmentedAttention(nn.Module):</code><br/>
                    <code className="text-blue-400 ml-4">def __init__(self):</code><br/>
                    <code className="text-yellow-400 ml-8">self.memory = nn.Parameter(...)</code><br/>
                    <code className="text-muted-foreground ml-8"># External dynamic memory</code>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-secondary mb-3">Distributed Training Pipeline</h5>
                  <div className="bg-muted/10 rounded-lg p-4 font-technical text-sm">
                    <code className="text-purple-400"># DistributedDataParallel configuration</code><br/>
                    <code className="text-blue-400">model = DDP(model, device_ids=[rank])</code><br/>
                    <code className="text-yellow-400">optimizer = AdamW(model.parameters())</code><br/>
                    <code className="text-green-400">scheduler = CosineAnnealingLR(optimizer)</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Research Project
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive deep-dive into the GPT-Based Code Tracing system that achieved breakthrough 
              results in symbolic reasoning and out-of-distribution generalization.
            </p>
          </div>

          {/* Project Title Card */}
          <div className="glass-card p-8 rounded-2xl mb-12 text-center">
            <h3 className="text-3xl font-bold gradient-text mb-4">
              GPT-Based Approach to Code Tracing
            </h3>
            <p className="text-lg text-primary font-semibold mb-4">
              Datahack TinyPy Language Model Challenge
            </p>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              A custom GPT architecture designed from scratch to excel at symbolic reasoning through 
              innovative Memory-Augmented Attention and Execution Step Embedding mechanisms, achieving 
              unprecedented out-of-distribution generalization in code tracing tasks.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-muted-foreground">95%+ OOD Accuracy</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-muted-foreground">Custom Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>
                <span className="text-muted-foreground">2.1M Parameters</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
                <span className="text-muted-foreground">From-Scratch Training</span>
              </div>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-card text-muted-foreground hover:bg-muted/20 hover:text-foreground'
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <div className="animate-fade-in">
            {renderSection()}
          </div>

          {/* Action Buttons */}
          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary glow-effect">
                View Implementation
              </button>
              <button className="btn-secondary hover-lift">
                Research Paper
              </button>
              <button className="btn-secondary hover-lift">
                Technical Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;