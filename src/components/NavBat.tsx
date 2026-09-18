"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Brain,
  ArrowLeft,
  Menu,
  X,
  Dna,
  Microscope,
  BarChart3,
  BookOpen,
  Download,
  ExternalLink
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navigation: React.FC = () => {
  const t = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = useCallback(() => {
    // If you have a root container with an id="top" you could prefer scrollToSection("top")
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Protein Subcellular Localization Prediction.pdf";
    link.download = "Protein_Subcellular_Localization_Prediction.pdf";
    link.click();
  };

  const handleViewCode = () => {
    window.open(
      "https://github.com/nirdidev05/HAICK_TSA/blob/main/haick_protein/protein.ipynb",
      "_blank"
    );
  };

  const navItems = [
    { id: "abstract", label: t.Protein.nav.items.abstract, icon: BookOpen },
    { id: "methodology", label: t.Protein.nav.items.methodology, icon: Microscope },
    { id: "results", label: t.Protein.nav.items.results, icon: BarChart3 },
    { id: "discussion", label: t.Protein.nav.items.discussion, icon: Brain }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Projects</span>
          </a>

          {/* Logo (now clickable to scroll to top) */}
          <button
            type="button"
            onClick={scrollToTop}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                scrollToTop();
              }
            }}
            aria-label="Scroll to top"
            className="flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-md transition-transform active:scale-95"
          >
            <div className="relative">
              <Dna size={28} className="text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-ping" />
            </div>
            <div className="hidden md:block text-left">
              <h1 className="text-lg font-bold gradient-text">
                {t.Protein.nav.logo.brand}
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                {t.Protein.nav.logo.subtitle}
              </p>
            </div>
          </button>

          <LanguageSwitcher />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center space-x-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-md"
              >
                <item.icon
                  size={16}
                  className="group-hover:text-primary transition-colors"
                />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 px-4 py-2 text-sm bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <Download size={16} />
              <span>{t.Protein.nav.buttons.report}</span>
            </button>
            <button
              onClick={handleViewCode}
              className="flex items-center space-x-2 px-4 py-2 text-sm bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
            >
              <ExternalLink size={16} />
              <span>{t.Protein.nav.buttons.code}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-md"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full px-3 py-2 text-left text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
              <div className="pt-3 border-t border-border/30 flex space-x-3">
                <button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  <Download size={16} />
                  <span>{t.Protein.nav.buttons.report}</span>
                </button>
                <button
                  onClick={handleViewCode}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 text-sm bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
                >
                  <ExternalLink size={16} />
                  <span>{t.Protein.nav.buttons.code}</span>
                </button>
              </div>
              <button
                onClick={scrollToTop}
                className="w-full mt-2 text-xs text-muted-foreground hover:text-primary transition-colors underline"
              >
                ↑ {t.Protein.nav.logo.brand} (Top)
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;