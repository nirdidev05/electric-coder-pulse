import React from 'react';

const About: React.FC = () => {
  const highlights = [
    {
      title: "Neural Architecture Design",
      description: "Specialized in creating custom GPT architectures with memory-augmented attention mechanisms for complex symbolic reasoning tasks."
    },
    {
      title: "Out-of-Distribution Generalization",
      description: "Proven expertise in developing models that maintain performance on unseen data patterns, crucial for real-world AI applications."
    },
    {
      title: "Neuro-Symbolic Integration",
      description: "Bridging the gap between statistical pattern recognition and deterministic symbolic reasoning through innovative architectural components."
    },
    {
      title: "Research Methodology",
      description: "Systematic approach to AI research with emphasis on reproducibility, theoretical grounding, and practical implementation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              About the Research
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering the intersection of neural networks and symbolic reasoning through 
              systematic research and engineering excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="animate-slide-up">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Research Philosophy
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  My work centers on the fundamental challenge of creating AI systems that can 
                  perform precise, deterministic reasoning while maintaining the flexibility and 
                  generalization capabilities of neural networks.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The <span className="text-primary font-semibold">GPT-based code tracing project</span> represents 
                  a breakthrough in this domain, demonstrating that carefully architected neural systems 
                  can learn and apply symbolic rules with remarkable precision and out-of-distribution robustness.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="glass-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Transformer Layers</div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary">384</div>
                  <div className="text-sm text-muted-foreground">Embedding Dimensions</div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent">256</div>
                  <div className="text-sm text-muted-foreground">Context Window</div>
                </div>
                <div className="glass-card p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-warning">∞</div>
                  <div className="text-sm text-muted-foreground">Memory Range</div>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.title}
                  className="glass-card p-6 rounded-xl hover-lift animate-fade-in"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow" />
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Approach */}
          <div className="mt-16 animate-slide-up">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-center text-foreground mb-6">
                Core Innovation: <span className="gradient-text">Memory-Augmented Architecture</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Execution Step Embedding</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    A novel embedding layer that provides explicit state tracking by encoding 
                    execution steps as numerical vectors, enabling the model to distinguish 
                    between identical code blocks in different loop iterations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-3">Memory-Augmented Attention</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    External dynamic memory that extends beyond the 256-token context window, 
                    allowing for linear complexity scaling and theoretically infinite temporal 
                    range for long sequence processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;