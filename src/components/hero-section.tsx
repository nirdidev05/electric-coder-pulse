"use client"
import { Brain, ArrowLeft, Sparkles, CheckCircle2, Cpu, ShieldCheck, Zap } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'
import { useCallback } from 'react'

export function HeroSection() {
  const t = useTranslation()

  const boardPieces = [
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
  ]
  boardPieces[0] = "♜"
  boardPieces[4] = "♚"
  boardPieces[7] = "♜"
  boardPieces[11] = "♟"
  boardPieces[13] = "♟"
  boardPieces[18] = "♞"
  boardPieces[27] = "♟"
  boardPieces[35] = "♙"
  boardPieces[44] = "♘"
  boardPieces[50] = "♙"
  boardPieces[52] = "♙"
  boardPieces[60] = "♖"
  boardPieces[63] = "♖"

  // Enhanced smooth scrolling function matching Navigation.tsx
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Standard navigation height
      const elementPosition = element.offsetTop - navHeight - 20;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleBackToProjects = useCallback(() => {
    // If we're on a project detail page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = '/';
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection('projects');
      }, 300);
    } else {
      // If we're already on the home page, just scroll to projects
      scrollToSection('projects');
    }
  }, [scrollToSection]);

  return (
    <section className="relative min-h-[720px] overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-background to-primary/10 px-4 pb-16 pt-20 sm:px-6 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(hsl(var(--primary)/0.12)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between gap-4 border-b border-border/50 pb-4">
          <button
            onClick={handleBackToProjects}
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </button>
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Brain className="h-4 w-4" />
            <span className="hidden sm:inline">Hybrid Chess Puzzle Generation</span>
            <span className="sm:hidden">Chess GAN</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="hidden sm:inline">PIPELINE READY</span>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] xl:gap-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>{t.gan.hero.badge}</span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-bold leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
                  {t.gan.hero.title}
                </span>
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-foreground/80 sm:text-2xl">
                {t.gan.hero.subtitle}
              </p>
              <div className="max-w-2xl border-l-2 border-primary/50 pl-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p className="mb-3">{t.gan.hero.keyInnovation}</p>
                <p>{t.gan.hero.performance}</p>
              </div>
            </div>

            <div className="grid max-w-2xl grid-cols-3 gap-3">
              {[
                { value: "AC-GAN", label: "Conditional generator", Icon: Cpu },
                { value: "FEN", label: "Structured input", Icon: Brain },
                { value: "92%", label: "Quality validation", Icon: CheckCircle2 },
              ].map(({ value, label, Icon }) => (
                <div key={label} className="rounded-xl border border-border/70 bg-card/50 p-4 backdrop-blur-sm transition-transform hover:-translate-y-1">
                  <Icon className="mb-3 h-5 w-5 text-primary" />
                  <div className="text-lg font-bold text-foreground sm:text-xl">{value}</div>
                  <div className="mt-1 text-xs leading-tight text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
              {['PyTorch', 'python-chess', 'Stockfish', 'Conditional GAN', 'FEN notation'].map((technology) => (
                <span key={technology} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/80 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-border/70 px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">puzzle_generator.py</span>
                <span className="ml-auto flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> VALIDATED
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Generated candidate</p>
                    <p className="mt-2 text-2xl font-semibold text-foreground">Tactical fork</p>
                    <p className="mt-1 text-sm text-muted-foreground">Conditional board reconstruction</p>
                  </div>
                  <div className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-right">
                    <div className="text-lg font-bold text-accent">0.92</div>
                    <div className="text-[10px] uppercase tracking-wider text-accent/80">Quality score</div>
                  </div>
                </div>

                <div className="mx-auto grid aspect-square max-w-[360px] grid-cols-8 overflow-hidden rounded-lg border-4 border-slate-700/80 shadow-xl">
                  {boardPieces.map((piece, index) => {
                    const isLightSquare = (Math.floor(index / 8) + index) % 2 === 0;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0.45 }}
                        animate={{ opacity: [0.65, 1, 0.65] }}
                        transition={{ delay: (index % 8) * 0.08, duration: 2.4, repeat: Infinity }}
                        className={`flex aspect-square items-center justify-center text-2xl sm:text-3xl ${isLightSquare ? "bg-slate-200 text-slate-800" : "bg-slate-700 text-white"}`}
                      >
                        {piece}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[
                    { label: "GENERATE", Icon: Cpu, color: "text-primary" },
                    { label: "CHECK LEGALITY", Icon: ShieldCheck, color: "text-amber-400" },
                    { label: "STOCKFISH", Icon: Zap, color: "text-emerald-400" },
                  ].map(({ label, Icon, color }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.15 }}
                      className="rounded-lg border border-border/70 bg-background/50 p-3 text-center"
                    >
                      <Icon className={`mx-auto mb-2 h-4 w-4 ${color}`} />
                      <span className="block text-[10px] font-semibold leading-tight text-muted-foreground">{label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
