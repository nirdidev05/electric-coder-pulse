"use client";

import React, { useEffect, useState } from "react";
import {
  Brain,
  Zap,
  Target,
  TrendingUp,
  Atom,
  Microscope,
  Database,
  Cpu
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection: React.FC = () => {
  const t = useTranslation();

  // dynamic metric index
  const [currentMetric, setCurrentMetric] = useState(0);

  // Source metrics & achievements from translation object
  const metrics = t.Protein.hero.performanceMetrics.metrics;
  const achievements = t.Protein.hero.achievements.items;

  // Model performance (probabilities list)
  const modelPerformance = t.Protein.hero.modelPerformance.models;

  // Provide icon mapping for achievements by title (fallback icons)
  const achievementIconMap: Record<string, any> = {
    "Top 30% Performance": Target,
    "Performance Top 30%": Target,
    "Top 30%": Target,
    "ESM-1b Integration": Brain,
    "ESM-1b Intégration": Brain,
    "Ensemble Method": TrendingUp,
    "Méthode d’ensemble": TrendingUp,
    "Multi-label Classification": Zap,
    "Classification multi‑étiquette": Zap
  };

  const resolvedAchievements = achievements.map((a: any) => ({
    ...a,
    icon:
      achievementIconMap[a.title] ||
      Target // default if not mapped
  }));

  const floatingElements = [
    { icon: Atom, delay: "0s", x: "10%", y: "20%" },
    { icon: Microscope, delay: "1s", x: "85%", y: "15%" },
    { icon: Database, delay: "2s", x: "15%", y: "70%" },
    { icon: Cpu, delay: "3s", x: "80%", y: "75%" }
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentMetric((prev) => (prev + 1) % metrics.length),
      3000
    );
    return () => clearInterval(interval);
  }, [metrics.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      {/* Floating elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20 text-primary"
          style={{
            left: element.x,
            top: element.y,
            animationDelay: element.delay,
            animationDuration: `${4 + index}s`
          }}
        >
          <element.icon size={24} />
        </div>
      ))}

      {/* Decorative DNA dots */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10">
        <div className="relative w-32 h-64">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.sin(i * 0.8) * 30 + 40}px`,
                top: `${i * 32}px`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-fade-in">
              <Brain size={16} className="animate-pulse" />
              <span>{t.Protein.hero.badge.text}</span>
            </div>

            {/* Title */}
            <div className="space-y-4 animate-slide-up">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                <span className="gradient-text">
                  {t.Protein.hero.title.main[0]}
                </span>
                <br />
                <span className="text-foreground">
                  {t.Protein.hero.title.main[1]}
                </span>
                <br />
                <span className="gradient-text">
                  {t.Protein.hero.title.main[2]}
                </span>
              </h1>

              <div className="flex items-center space-x-3">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full" />
                <p className="text-xl text-muted-foreground font-light">
                  {t.Protein.hero.title.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {t.Protein.hero.description}
            </p>

            {/* Metrics */}
            <div
              className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/20 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold gradient-text">
                    {metrics[currentMetric].value}
                    {metrics[currentMetric].suffix && (
                      <span className="text-lg text-muted-foreground ml-1">
                        {metrics[currentMetric].suffix}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metrics[currentMetric].label}
                  </div>
                </div>
                <div className="flex space-x-1">
                  {metrics.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentMetric
                          ? "bg-primary"
                          : "bg-muted/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("abstract")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 active:scale-95"
              >
                <span>{t.Protein.hero.buttons.primary}</span>
                <Zap
                  size={18}
                  className="group-hover:rotate-12 transition-transform"
                />
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://github.com/nirdidev05/HAICK_TSA/blob/main/haick_protein/protein.ipynb",
                    "_blank"
                  )
                }
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-card border border-border text-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-muted/10 hover:border-primary/50 transform hover:scale-105"
              >
                <span>{t.Protein.hero.buttons.secondary}</span>
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              </button>
            </div>

            {/* Author */}
            <div
              className="flex items-center space-x-4 pt-4 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {t.Protein.hero.author.name?.[0] || "A"}
                </span>
              </div>
              <div>
                <div className="font-semibold">
                  {t.Protein.hero.author.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t.Protein.hero.author.role}
                </div>
              </div>
              <div className="h-8 w-px bg-border" />
            </div>
          </div>

          {/* Right Column */}
          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">
                {t.Protein.hero.achievements.title}
              </h2>
              <p className="text-muted-foreground">
                {t.Protein.hero.achievements.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resolvedAchievements.map(
                (
                  achievement: { title: string; description?: string; desc?: string; icon: any },
                  index: number
                ) => (
                  <div
                    key={index}
                    className="glass-card hover-lift p-6 rounded-xl group cursor-pointer"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <achievement.icon
                          size={24}
                          className="text-primary"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {achievement.description || achievement.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Performance */}
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-semibold mb-4 flex items-center space-x-2">
                <TrendingUp size={20} className="text-primary" />
                <span>{t.Protein.hero.modelPerformance.title}</span>
              </h3>
              <div className="space-y-3">
                {modelPerformance.map(
                  (
                    entry: { name: string; score: number; color: string },
                    index: number
                  ) => {
                    // create a relative bar width (lower score → fuller bar if lower=better)
                    const pct = Math.max(
                      0,
                      Math.min(100, 100 - (entry.score - 0.9) * 1000)
                    );
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm font-medium">{entry.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-muted/20 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${entry.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-xs font-technical text-muted-foreground">
                            {entry.score.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;