import React, { useEffect, useState } from 'react';
import { BrainIcon, MemoryIcon, CPUIcon, NeuralIcon, ResultsIcon, CodeIcon } from './CustomIcon';
import { useTranslation } from '@/hooks/useTranslation';

const Hero: React.FC = () => {
  const t = useTranslation();
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState<string[]>(['']);

  const codeLines = [
    'class GPTCodeTracer:',
    '    def __init__(self):',
    '        self.memory_attention = MemoryAugmentedAttention()',
    '        self.step_embedding = ExecutionStepEmbedding()',
    '        self.ood_accuracy = 0.557  # Breakthrough achieved!',
    '',
    '    def symbolic_reasoning(self):',
    '        """Bridge neural and symbolic AI"""',
    '        return self.neural_flow() + self.symbolic_logic()',
    '',
    '# Research Status: VALIDATED ✓',
    '# Date: 2025-08-29 | Author: nirdidev05'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentLine < codeLines.length) {
        const line = codeLines[currentLine];
        if (currentChar < line.length) {
          setDisplayText(prev => {
            const newText = [...prev];
            newText[currentLine] = line.substring(0, currentChar + 1);
            return newText;
          });
          setCurrentChar(prev => prev + 1);
        } else {
          if (currentLine < codeLines.length - 1) {
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);
            setDisplayText(prev => [...prev, '']);
          }
        }
      }
    }, 50);

    return () => clearInterval(timer);
  }, [currentLine, currentChar]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="grid grid-cols-8 grid-rows-6 gap-8 w-full h-full p-8">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 animate-pulse" />
              {i % 8 !== 7 && (
                <div className="absolute left-6 top-3 w-8 h-0.5 bg-gradient-to-r from-primary/20 to-transparent" />
              )}
              {i < 40 && (
                <div className="absolute top-6 left-3 w-0.5 h-8 bg-gradient-to-b from-primary/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm tracking-wider">
                    {t.gptCodeTracer.status.researchStatus}
                  </span>
                  <div className="px-2 py-1 bg-green-400/20 rounded text-xs font-mono text-green-400">
                    {t.gptCodeTracer.status.oodAccuracy}
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="neural-gradient">{t.gptCodeTracer.hero.title.main}</span><br/>
                  <span className="text-foreground">{t.gptCodeTracer.hero.title.secondary}</span><br/>
                  <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">
                    {t.gptCodeTracer.hero.title.subtitle}
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {t.gptCodeTracer.hero.description.intro} <span className="text-primary font-semibold">{t.gptCodeTracer.hero.description.concept}</span> {t.gptCodeTracer.hero.description.achievement} <span className="text-secondary font-semibold">{t.gptCodeTracer.hero.description.accuracy}</span> {t.gptCodeTracer.hero.description.context}
                </p>
              </div>

              {/* Innovation Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="cyber-card p-4 rounded-xl cyber-glow">
                  <div className="flex items-center gap-3 mb-3">
                    <BrainIcon className="text-primary" size={20} />
                    <h3 className="font-semibold text-primary">{t.gptCodeTracer.hero.features.memoryAugmented.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.gptCodeTracer.hero.features.memoryAugmented.description}</p>
                </div>
                
                <div className="cyber-card p-4 rounded-xl cyber-glow">
                  <div className="flex items-center gap-3 mb-3">
                    <CPUIcon className="text-secondary" size={20} />
                    <h3 className="font-semibold text-secondary">{t.gptCodeTracer.hero.features.stepEmbedding.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.gptCodeTracer.hero.features.stepEmbedding.description}</p>
                </div>
                
                <div className="cyber-card p-4 rounded-xl cyber-glow">
                  <div className="flex items-center gap-3 mb-3">
                    <ResultsIcon className="text-accent" size={20} />
                    <h3 className="font-semibold text-accent">{t.gptCodeTracer.hero.features.oodExcellence.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.gptCodeTracer.hero.features.oodExcellence.description}</p>
                </div>
                
                <div className="cyber-card p-4 rounded-xl cyber-glow">
                  <div className="flex items-center gap-3 mb-3">
                    <NeuralIcon className="text-warning" size={20} />
                    <h3 className="font-semibold text-warning">{t.gptCodeTracer.hero.features.fromScratch.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.gptCodeTracer.hero.features.fromScratch.description}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-cyber-primary"
                >
                  <span className="flex items-center gap-2">
                    <BrainIcon size={18} />
                    {t.gptCodeTracer.hero.actions.exploreResearch}
                  </span>
                </button>
                <button 
                  onClick={() => document.getElementById('implementation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-cyber-secondary"
                >
                  <span className="flex items-center gap-2">
                    <CodeIcon size={18} />
                    {t.gptCodeTracer.hero.actions.viewImplementation}
                  </span>
                </button>
              </div>

              {/* Research Metrics */}
              <div className="flex items-center gap-6 pt-6 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">{t.gptCodeTracer.hero.metrics.parameters}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">{t.gptCodeTracer.hero.metrics.training}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">{t.gptCodeTracer.hero.metrics.scaling}</span>
                </div>
              </div>
            </div>

            {/* Right Side - Code Terminal */}
            <div className="cyber-terminal gpu-layer">
              <div className="terminal-dots">
                <div className="dot dot-red"></div>
                <div className="dot dot-yellow"></div>
                <div className="dot dot-green"></div>
                <span className="text-muted-foreground font-mono text-sm ml-4 flex-1">
                  {t.gptCodeTracer.hero.terminal.filename}
                </span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{t.gptCodeTracer.hero.terminal.status}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="p-6 min-h-[500px] font-mono text-sm">
                {displayText.map((line, index) => (
                  <div key={index} className="mb-1 flex">
                    <span className="text-muted-foreground mr-4 select-none w-8 text-right">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span 
                      className={
                        line.includes('class') || line.includes('def') ? 'text-primary font-semibold' :
                        line.includes('self.') ? 'text-secondary' :
                        line.includes('0.557') ? 'text-accent font-bold' :
                        line.includes('#') ? 'text-muted-foreground italic' :
                        line.includes('"""') ? 'text-green-400 italic' :
                        line.includes('return') ? 'text-warning' :
                        line.includes('2025-08-29') ? 'text-blue-400' :
                        line.includes('nirdidev05') ? 'text-purple-400' :
                        ''
                      }
                      dangerouslySetInnerHTML={{ __html: line.replace(/\s/g, '&nbsp;') }}
                    />
                    {index === currentLine && currentChar === codeLines[currentLine]?.length && (
                      <span className="ml-1 animate-pulse text-primary font-bold">|</span>
                    )}
                  </div>
                ))}
                
                {/* Terminal Cursor Animation */}
                <div className="mt-4 flex items-center gap-2 text-green-400">
                  <span>$</span>
                  <span className="animate-pulse">python train.py --breakthrough-mode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-3 text-muted-foreground animate-bounce">
          <span className="text-sm font-mono">{t.gptCodeTracer.hero.terminal.scrollIndicator}</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;