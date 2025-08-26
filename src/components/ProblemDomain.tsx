import React, { useState } from 'react';
import { ProblemIcon, BrainIcon, CPUIcon, MemoryIcon, ArchitectureIcon } from './CustomIcon';

const ProblemDomain: React.FC = () => {
  const [activeProblem, setActiveProblem] = useState(0);

  const technicalChallenges = [
    {
      id: 'deterministic',
      title: 'Deterministic Correctness Requirement',
      description: 'Unlike natural language where probabilistic plausibility suffices, code execution demands absolute precision with zero tolerance for errors.',
      impact: 'CRITICAL',
      example: 'a = a + 1  # Must be mathematically exact',
      consequence: 'Single arithmetic error cascades through entire trace',
      icon: BrainIcon,
      color: 'text-red-400',
      gradient: 'from-red-500 to-red-600'
    },
    {
      id: 'state_transitions',
      title: 'Complex State Transition Learning',
      description: 'Model must implicitly learn transition function δ mapping current state and action to new state, analogous to finite automaton simulation.',
      impact: 'HIGH', 
      example: 'while condition: # Dynamic state evolution',
      consequence: 'Requires understanding of program semantics, not just syntax',
      icon: CPUIcon,
      color: 'text-orange-400',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 'long_dependencies',
      title: 'Extreme Long-Range Dependencies',
      description: 'Code execution involves sequences far exceeding standard context windows, especially with complex iterative structures.',
      impact: 'HIGH',
      example: 'for i in range(10000): # Exceeds 256-token limit',
      consequence: 'Standard attention mechanisms fail on extended sequences',
      icon: MemoryIcon,
      color: 'text-yellow-400',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'no_pretraining',
      title: 'From-Scratch Learning Constraint',
      description: 'Challenge prohibition of external datasets and pre-trained models forces architectural innovation over scaling.',
      impact: 'CRITICAL',
      example: '# No GPT-4, BERT, or external data allowed',
      consequence: 'Architecture design becomes primary performance driver',
      icon: ArchitectureIcon,
      color: 'text-blue-400',
      gradient: 'from-blue-500 to-blue-600'
    }
  ];

 const tinyPyProgression = [
    {
      level: 'Level 1: Arithmetics',
      description: 'Foundation layer introducing basic symbolic logic operations',
      complexity: 'BASIC',
      operations: ['Variable assignment', 'Addition operations', 'Basic I/O'],
      example: `# LEVEL 1 - Arithmetics
a = 5
b = 3  
c = a + b
print(c)`,
      learningGoal: 'Master deterministic mathematical operations',
      color: 'text-green-400',
      progress: 25
    },
    {
      level: 'Level 2: Conditionals', 
      description: 'Control flow complexity with branching logic pathways',
      complexity: 'MODERATE',
      operations: ['If/elif/else branches', 'Comparison operators', 'Boolean logic'],
      example: `# LEVEL 2 - Conditionals
if a > b:
    result = a
elif a < b:
    result = b
else:
    result = "equal"`,
      learningGoal: 'Handle non-linear execution paths',
      color: 'text-yellow-400',
      progress: 60
    },
    {
      level: 'Level 3: While Loops',
      description: 'Maximum complexity with iterative state tracking over variable-length sequences',
      complexity: 'EXTREME',
      operations: ['While loop iteration', 'Dynamic state updates', 'Memory persistence'],
      example: `# LEVEL 3 - While Loops  
i = 0
while i < 10:
    i = i + 1
    print(f"Step: {i}")
    # State must persist across iterations`,
      learningGoal: 'Achieve perfect state tracking across unbounded sequences',
      color: 'text-red-400', 
      progress: 95
    }
];

  const oodGeneralizationTests = [
    {
      test: 'Extended While Iterations',
      challenge: 'More loop iterations than maximum seen in training data',
      example: 'while i < 10000:  # vs training max: 100',
      evaluation: 'Tests abstract loop logic vs pattern memorization'
    },
    {
      test: '4-Digit Number Arithmetic',
      challenge: 'Numerical values exceeding 3-digit training distribution',
      example: 'a = 1234; b = 5678; c = a + b  # = 6912',
      evaluation: 'Validates arithmetic rule learning vs lookup tables'
    },
    {
      test: 'Extended Code Sequences',
      challenge: 'Program traces exceeding 256-token context window',
      example: '# 500+ line execution requiring memory persistence',
      evaluation: 'Proves Memory-Augmented Attention effectiveness'
    }
  ];

  return (
    <section id="problem" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="cyber-card p-3 rounded-xl">
                <ProblemIcon className="text-secondary" size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold neural-gradient">
                Problem Domain Analysis
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-mono leading-relaxed">
              <span className="text-secondary">{`def`}</span> <span className="text-primary">symbolic_reasoning_challenge</span>():
              <br />
              <span className="ml-4 text-muted-foreground"># From statistical patterns to deterministic logic</span>
            </p>
          </div>

          {/* Research Context Banner */}
          <div className="cyber-card p-6 rounded-xl mb-12 bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-white shadow-lg">
                <BrainIcon size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3">Code Tracing as Foundational AI Task</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Code tracing represents a <span className="text-primary font-semibold">quintessential symbolic reasoning challenge</span>. 
                  Unlike natural language processing where probabilistic plausibility often suffices, code execution 
                  demands <span className="text-secondary font-semibold">absolute deterministic correctness</span>. 
                  This task bridges the gap between statistical pattern recognition and formal logic systems.
                </p>
                <div className="flex items-center gap-4 text-sm font-mono">
                  <div className="flex items-center gap-2">
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-primary">Researcher: nirdidev05</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Challenges Grid */}
          <div className="space-y-8 mb-12">
            <h3 className="text-3xl font-bold text-center neural-gradient mb-8">
              Core Technical Challenges
            </h3>
            
            <div className="grid gap-6">
              {technicalChallenges.map((challenge, index) => {
                const IconComponent = challenge.icon;
                const isActive = activeProblem === index;
                
                return (
                  <div
                    key={challenge.id}
                    className={`cyber-card p-8 rounded-2xl cursor-pointer transition-all duration-500 ${
                      isActive ? 'scale-102 border-primary/50' : 'hover:scale-101'
                    }`}
                    onClick={() => setActiveProblem(index)}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${challenge.gradient} flex items-center justify-center text-white shadow-lg cyber-glow`}>
                        <IconComponent size={24} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h4 className="text-xl font-bold text-foreground">{challenge.title}</h4>
                          <div className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${
                            challenge.impact === 'CRITICAL' 
                              ? 'bg-red-500/20 text-red-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {challenge.impact}_IMPACT
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {challenge.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="cyber-card p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <h5 className="font-semibold text-primary mb-3 font-mono">CODE_EXAMPLE</h5>
                            <div className="font-mono text-sm bg-muted/20 rounded p-3 border border-border">
                              <code className="text-foreground">{challenge.example}</code>
                            </div>
                          </div>
                          
                          <div className="cyber-card p-4 rounded-lg bg-warning/5 border border-warning/20">
                            <h5 className="font-semibold text-warning mb-3 font-mono">CONSEQUENCE</h5>
                            <p className="text-sm text-muted-foreground">{challenge.consequence}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TinyPy Curriculum Progression */}
          <div className="cyber-card p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              TinyPy Learning Curriculum
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Progressive complexity design forcing comprehensive rule learning
            </p>
            
            <div className="space-y-8">
              {tinyPyProgression.map((level, index) => (
                <div key={level.level} className="relative">
                  {/* Progress Connection Line */}
                  {index < tinyPyProgression.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-secondary/50"></div>
                  )}
                  
                  <div className="flex items-start gap-8">
                    {/* Level Indicator */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full border-4 border-current ${level.color} flex items-center justify-center bg-background shadow-lg`}>
                        <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h4 className="text-xl font-bold text-foreground">{level.level}</h4>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${
                          level.complexity === 'BASIC' ? 'bg-green-500/20 text-green-400' :
                          level.complexity === 'MODERATE' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {level.complexity}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{level.description}</p>
                      
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          {/* Operations List */}
                          <h5 className="font-semibold text-secondary mb-3 font-mono">OPERATIONS</h5>
                          <div className="space-y-2 mb-4">
                            {level.operations.map((op) => (
                              <div key={op} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
                                <span className="text-muted-foreground">{op}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="cyber-card p-3 rounded-lg bg-accent/5 border border-accent/20">
                            <h6 className="font-semibold text-accent mb-2 font-mono text-sm">LEARNING_GOAL</h6>
                            <p className="text-xs text-muted-foreground">{level.learningGoal}</p>
                          </div>
                        </div>
                        
                        <div>
                          {/* Code Example - FIXED: No syntax highlighting */}
                          <h5 className="font-semibold text-primary mb-3 font-mono">CODE_SAMPLE</h5>
                          <div className="cyber-terminal">
                            <div className="terminal-dots">
                              <div className="dot dot-red"></div>
                              <div className="dot dot-yellow"></div>
                              <div className="dot dot-green"></div>
                              <span className="text-muted-foreground font-mono text-xs ml-4">
                                level_{index + 1}.py
                              </span>
                            </div>
                            <div className="p-4 font-mono text-sm">
                              <pre className="text-foreground whitespace-pre-wrap leading-relaxed">
                                {level.example}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* OOD Generalization Challenge */}
          <div className="cyber-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Out-of-Distribution Generalization Tests
            </h3>
            <div className="text-center mb-8">
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The ultimate measure of AI intelligence: performance on fundamentally different data 
                than seen during training. These tests probe for genuine understanding vs memorization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {oodGeneralizationTests.map((test, index) => (
                <div key={test.test} className="cyber-card p-6 rounded-xl cyber-glow">
                  <div className="text-center mb-4">
                    <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg ${
                      index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      index === 1 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                      'bg-gradient-to-r from-purple-500 to-purple-600'
                    }`}>
                      {index + 1}
                    </div>
                    <h4 className="font-bold text-foreground">{test.test}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-warning mb-2 font-mono text-sm">CHALLENGE</h5>
                      <p className="text-sm text-muted-foreground">{test.challenge}</p>
                    </div>
                    
                    <div className="cyber-card p-3 rounded bg-muted/20 border border-border">
                      <code className="text-foreground text-xs font-mono">{test.example}</code>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-primary mb-2 font-mono text-sm">EVALUATION</h5>
                      <p className="text-xs text-muted-foreground">{test.evaluation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Constraint Highlight */}
          <div className="cyber-card p-8 rounded-2xl mt-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white text-2xl font-bold">!</span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Critical Research Constraint</h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <span className="text-red-400 font-bold font-mono">CONSTRAINT_VIOLATED = FALSE</span><br/>
                  No external datasets or pre-trained models permitted. The model must learn 
                  TinyPy language rules from a controlled corpus, proving that 
                  <span className="text-primary font-semibold"> architectural innovation</span>, 
                  not massive pre-training, drives performance.
                </p>
                
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 font-mono text-sm">
                  <div className="text-red-400 font-bold mb-2">RESEARCH_VALIDATION:</div>
                  <div className="text-muted-foreground">
                    • No GPT-4, BERT, or foundation model usage<br/>
                    • No external code repositories or datasets<br/>
                    • Architecture-first approach to AI breakthrough<br/>
                    • Proves specialized design beats brute force scaling
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-6 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">CONSTRAINT_SATISFIED</span>
                </div>
                <div className="w-1 h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400">BREAKTHROUGH_ACHIEVED</span>
                </div>
                <div className="w-1 h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-400">nirdidev05</span>
                </div>
                <div className="w-1 h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemDomain;