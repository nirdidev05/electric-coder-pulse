import React, { useState } from 'react';
import { ArchitectureIcon, BrainIcon, MemoryIcon, CPUIcon } from './CustomIcon';

const Architecture: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState('transformer');

  const architectureSpecs = {
    transformer: {
      title: 'Decoder-Only Transformer Core',
      description: 'Foundation architecture optimized for autoregressive code generation',
      specs: {
        'Model Type': 'Autoregressive Language Model',
        'Architecture': 'Decoder-Only Transformer',
        'Layers': '8 Transformer Blocks',
        'Parameters': '2.1M total parameters',
        'Context Window': '256 tokens',
        'Vocabulary': 'Custom TinyPy tokenizer'
      },
      code: `class GPTModel(nn.Module):
    def __init__(self, vocab_size: int):
        super().__init__()
        self.token_embedding = nn.Embedding(vocab_size, n_embd)
        self.position_embedding = nn.Embedding(block_size, n_embd)
        self.blocks = nn.Sequential(*[
            TransformerBlock(n_embd, n_head) 
            for _ in range(n_layer)
        ])
        self.ln_f = nn.LayerNorm(n_embd)
        self.lm_head = nn.Linear(n_embd, vocab_size)
        
    def forward(self, idx, targets=None):
        B, T = idx.shape
        
        # Create embeddings
        token_emb = self.token_embedding(idx)
        pos_emb = self.position_embedding(torch.arange(T))
        
        # Forward through transformer
        x = token_emb + pos_emb
        x = self.blocks(x)
        x = self.ln_f(x)
        logits = self.lm_head(x)
        
        return logits`,
      icon: ArchitectureIcon
    },
    attention: {
      title: 'Memory-Augmented Attention',
      description: 'External dynamic memory enabling infinite context extension',
      specs: {
        'Innovation': 'External Fixed-Size Dynamic Memory',
        'Context Extension': 'Theoretically Infinite',
        'Complexity': 'Linear time O(n) vs O(n²)',
        'Memory Size': 'Fixed external cache (512 slots)',
        'Inspiration': 'Memformer architecture research',
        'Benefit': 'Long sequence processing capability'
      },
      code: `class MemoryAugmentedAttention(nn.Module):
    def __init__(self, n_embd: int, n_head: int, memory_size: int = 512):
        super().__init__()
        self.n_embd = n_embd
        self.n_head = n_head
        self.memory_size = memory_size
        
        # Standard attention components
        self.c_attn = nn.Linear(n_embd, 3 * n_embd, bias=False)
        self.c_proj = nn.Linear(n_embd, n_embd)
        
        # INNOVATION: External memory
        self.memory = nn.Parameter(torch.randn(memory_size, n_embd) * 0.02)
        self.memory_attention = nn.MultiheadAttention(
            embed_dim=n_embd, 
            num_heads=n_head, 
            batch_first=True
        )
        
    def forward(self, x: torch.Tensor, memory_state=None):
        B, T, C = x.shape
        
        # Standard self-attention
        qkv = self.c_attn(x)
        q, k, v = qkv.split(self.n_embd, dim=2)
        
        # Memory interaction - THE KEY INNOVATION
        if memory_state is None:
            memory_state = self.memory.unsqueeze(0).expand(B, -1, -1)
        
        # Cross-attention with external memory
        memory_out, _ = self.memory_attention(
            query=x, key=memory_state, value=memory_state
        )
        
        return memory_out + x, memory_state`,
      icon: MemoryIcon
    },
    embedding: {
      title: 'Execution Step Embedding',
      description: 'Explicit state tracking through temporal step identification',
      specs: {
        'Purpose': 'Execution State Tracking',
        'Method': 'Unique Step ID Embedding',
        'Format': '#STEP {step_counter} markers',
        'Integration': 'Added to token + position embeddings',
        'Type': 'Neuro-Symbolic Bridge',
        'Benefit': 'Loop iteration disambiguation'
      },
      code: `class ExecutionStepEmbedding(nn.Module):
    def __init__(self, max_steps: int = 10000, n_embd: int = 384):
        super().__init__()
        self.max_steps = max_steps
        self.n_embd = n_embd
        
        # Core innovation: Step embedding layer
        self.step_embedding = nn.Embedding(max_steps, n_embd)
        
        # Learnable positional encoding for step relationships
        self.step_position_encoding = nn.Parameter(
            torch.randn(max_steps, n_embd) * 0.02
        )
    
    def forward(self, step_ids: torch.Tensor):
        # Clamp step IDs to valid range
        step_ids = torch.clamp(step_ids, 0, self.max_steps - 1)
        
        # Core step embedding
        step_emb = self.step_embedding(step_ids)
        
        # Add positional encoding
        pos_emb = self.step_position_encoding[step_ids]
        
        return step_emb + pos_emb

# Usage in main model forward pass:
def forward(self, token_ids, step_ids=None):
    token_emb = self.token_embedding(token_ids)
    pos_emb = self.position_embedding(positions)
    
    # THE INNOVATION: Step embedding integration
    if step_ids is not None:
        step_emb = self.step_embedding(step_ids)
        combined_emb = token_emb + pos_emb + step_emb
    else:
        combined_emb = token_emb + pos_emb
    
    return combined_emb`,
      icon: CPUIcon
    }
  };

  const hyperparameters = [
    { name: 'block_size', value: '256', rationale: 'Context length balanced with memory efficiency', impact: 'Enables Memory-Augmented Attention necessity' },
    { name: 'n_embd', value: '384', rationale: 'Embedding dimensions for rich feature representation', impact: 'Model expressiveness vs computational cost' },
    { name: 'n_head', value: '8', rationale: 'Multi-head attention for parallel relationship capture', impact: 'Attention mechanism diversity' },
    { name: 'n_layer', value: '8', rationale: 'Transformer depth for hierarchical feature learning', impact: 'Model capacity and training stability' },
    { name: 'learning_rate', value: '1e-3', rationale: 'AdamW optimizer with cosine decay scheduling', impact: 'Training convergence optimization' },
    { name: 'batch_size', value: '190', rationale: 'GPU memory optimization with gradient stability', impact: 'Training throughput efficiency' }
  ];

  const components = [
    { id: 'transformer', label: 'Core Architecture', icon: ArchitectureIcon },
    { id: 'attention', label: 'Memory Attention', icon: MemoryIcon },
    { id: 'embedding', label: 'Step Embedding', icon: CPUIcon }
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
                Neural Architecture Design
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-mono leading-relaxed">
              <span className="text-accent">{`class`}</span> <span className="text-secondary">CustomGPT</span>(<span className="text-primary">SymbolicReasoning</span>):
              <br />
              <span className="ml-4 text-muted-foreground"># Bridging neural networks and symbolic logic</span>
            </p>
          </div>

          {/* Research Context Banner */}
          <div className="cyber-card p-6 rounded-xl mb-12 bg-gradient-to-r from-accent/10 to-warning/10 border border-accent/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent to-warning flex items-center justify-center text-white shadow-lg">
                <BrainIcon size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3">Architecture Innovation Framework</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our custom GPT architecture introduces <span className="text-accent font-semibold">Memory-Augmented Attention</span> 
                  and <span className="text-warning font-semibold">Execution Step Embedding</span> to bridge the gap between 
                  statistical pattern recognition and deterministic symbolic reasoning required for code execution tracing.
                </p>
                <div className="flex items-center gap-4 text-sm font-mono">
                  <div className="flex items-center gap-2">
                  
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                    <span className="text-warning">Researcher: nirdidev05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Flow Visualization */}
          <div className="cyber-card p-8 rounded-2xl mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Architecture Data Flow</h3>
            <div className="space-y-8">
              {/* Input Layer */}
              <div className="flex items-center justify-center">
                <div className="cyber-card p-6 rounded-xl min-w-[280px] text-center bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <div className="text-primary font-mono font-bold mb-2 text-lg">INPUT_LAYER</div>
                  <div className="text-sm text-muted-foreground">TinyPy Code + Execution Context</div>
                  <div className="flex items-center justify-center gap-2 mt-2 text-xs">
                    <span className="px-2 py-1 bg-primary/20 rounded font-mono">tokens</span>
                    <span className="px-2 py-1 bg-secondary/20 rounded font-mono">positions</span>
                    <span className="px-2 py-1 bg-accent/20 rounded font-mono">steps</span>
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
                  <div className="text-secondary font-mono font-bold mb-2">TOKEN</div>
                  <div className="text-xs text-muted-foreground">vocab → 384d</div>
                </div>
                <div className="text-2xl text-accent">+</div>
                <div className="cyber-card p-4 rounded-lg text-center min-w-[120px]">
                  <div className="text-secondary font-mono font-bold mb-2">POSITION</div>
                  <div className="text-xs text-muted-foreground">seq → 384d</div>
                </div>
                <div className="text-2xl text-accent">+</div>
                <div className="cyber-card p-4 rounded-lg text-center min-w-[120px] cyber-glow bg-gradient-to-r from-accent/10 to-warning/10 border border-accent/30">
                  <div className="text-accent font-mono font-bold mb-2">STEP</div>
                  <div className="text-xs text-muted-foreground">exec → 384d</div>
                  <div className="text-xs text-accent font-bold mt-1">INNOVATION</div>
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
                  <div className="text-accent font-mono font-bold mb-2 text-lg">8x TRANSFORMER_BLOCKS</div>
                  <div className="text-sm text-muted-foreground mb-4">
                    LayerNorm → Memory-Augmented Attention → LayerNorm → FeedForward
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <MemoryIcon className="text-primary" size={16} />
                    <div className="text-xs font-mono text-primary font-bold">MEMORY_ENHANCED</div>
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
                  <div className="text-warning font-mono font-bold mb-2 text-lg">OUTPUT_LAYER</div>
                  <div className="text-sm text-muted-foreground">LayerNorm → Linear(vocab_size) → Next Token</div>
                  <div className="text-xs text-warning font-bold mt-2">SYMBOLIC PREDICTION</div>
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
                <h4 className="font-semibold text-primary font-mono text-lg">SPECIFICATIONS</h4>
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
                  Research Code
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
              Hyperparameter Configuration
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-mono text-primary font-bold">Parameter</th>
                    <th className="text-left py-4 px-4 font-mono text-secondary font-bold">Value</th>
                    <th className="text-left py-4 px-4 font-mono text-accent font-bold">Rationale</th>
                    <th className="text-left py-4 px-4 font-mono text-warning font-bold">Impact</th>
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
                These hyperparameters were systematically tuned through extensive experimentation, 
                balancing model expressiveness with computational efficiency for the TinyPy domain.
              </p>
            </div>
            
            {/* Research Attribution */}
            <div className="mt-6 flex items-center justify-center gap-4 text-sm font-mono">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary">RESEARCH_COMPLETE</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-secondary">nirdidev05</span>
              </div>
              <div className="w-1 h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;