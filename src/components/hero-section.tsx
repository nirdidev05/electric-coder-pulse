"use client"
import { Brain, ArrowLeft, Sparkles } from "lucide-react" // Updated imports
import { useTranslation } from '@/hooks/useTranslation'
import { useCallback } from 'react'

export function HeroSection() {
  const t = useTranslation()

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
    <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
      {/* Back to Projects Button - Top Left Corner */}
      <button
        onClick={handleBackToProjects}
        className="absolute top-4 left-4 group flex items-center gap-2 px-4 py-2 text-muted-foreground rounded-lg font-medium hover:text-cyan-400 transition-all duration-300 z-10"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Projects</span>
      </button>

      <div className="max-w-6xl mx-auto text-center">
        {/* Badge Section */}
        <div className="inline-flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border rounded-full px-6 py-2 text-primary text-sm font-medium mb-4 sm:mb-6">
          <Brain size={14} className="sm:size-4 text-accent" />
          <span className="text-sm sm:text-base">{t.gan.hero.badge}</span>
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>

        {/* Title Section */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
          {t.gan.hero.title}
        </h1>

        {/* Subtitle Section */}
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-3 sm:mb-4 px-2">
          {t.gan.hero.subtitle}
        </p>
        <div className="text-sm sm:text-base text-muted-foreground max-w-4xl mx-auto px-2 mb-16">
          <p className="mb-2">
            {t.gan.hero.keyInnovation}
          </p>
          <p>
            {t.gan.hero.performance}
          </p>
        </div>
      </div>
    </div>
  )
}
