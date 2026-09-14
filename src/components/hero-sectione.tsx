import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, BarChart3, Brain, GitBranch, Lightbulb, Target, TrendingUp, Trophy, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation"; // Assuming this is your translation hook

export default function HeroSection() {
  const t = useTranslation(); // Initialize the translation hook
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const sections = ["home", "context", "methodology", "portfolio", "results", "technical-innovations"];
    const handleSectionScroll = () => {
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleSectionScroll);
    return () => window.removeEventListener("scroll", handleSectionScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Overview", Icon: BarChart3 },
    { id: "context", label: "Context", Icon: Target },
    { id: "methodology", label: "Methodology", Icon: GitBranch },
    { id: "portfolio", label: "Results", Icon: Trophy },
    { id: "technical-innovations", label: "Innovations", Icon: Lightbulb },
    { id: "results", label: "Competition", Icon: Award },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const FloatingDataPoint = ({ delay, x, y, duration = 4 }) => (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{
        left: x,
        top: y,
        backgroundColor: '#646cff40',
      }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
        scale: [1, 1.5, 1],
        y: [-10, 10, -10],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
  
  // Using the technologies array from the translation object
  const technologies = t.MarketPulseContentType.hero.technologies || [];

  // Metrics data from the translation object
  const metrics = [
      { icon: Award, value: t.MarketPulseContentType.hero.metrics.score.value, label: t.MarketPulseContentType.hero.metrics.score.label, color: "#61dafb" },
      { icon: TrendingUp, value: t.MarketPulseContentType.hero.metrics.achievement.value, label: t.MarketPulseContentType.hero.metrics.achievement.label, color: "#646cff" },
      { icon: Brain, value: t.MarketPulseContentType.hero.metrics.features.value, label: t.MarketPulseContentType.hero.metrics.features.label, color: "#61dafb" }
  ];

  const forecastBars = [38, 52, 45, 64, 58, 72, 67, 84, 76, 92];
  const forecastSignals = [
    { label: "Price momentum", value: "+12.8%", color: "#61dafb" },
    { label: "News sentiment", value: "Positive", color: "#34d399" },
    { label: "Model confidence", value: "94.2%", color: "#a78bfa" },
  ];


  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1E1E2F] via-[#2D3748] to-[#1A202C]"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(#646cff20 1px, transparent 1px),
              linear-gradient(90deg, #646cff20 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        />

        {/* Floating Market Data Points */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <FloatingDataPoint
              key={i}
              delay={i * 0.2}
              x={`${Math.random() * 100}%`}
              y={`${Math.random() * 100}%`}
              duration={3 + Math.random() * 2}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F]/90 via-transparent to-[#1E1E2F]/50" />
      </div>

      {/* Sticky Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-700/50 transition-all duration-300"
        style={{
          backgroundColor: `rgba(30, 30, 47, ${Math.min(0.95, 0.7 + scrollY * 0.001)})`,
          boxShadow: scrollY > 50 ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-6 min-h-8">
            <div className="flex items-center gap-4 min-w-0">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-slate-400 transition-all duration-300 font-medium group shrink-0 hover:text-[#646cff]"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="hidden sm:inline">{t.MarketPulseContentType.navigation.backToProjects}</span>
              </Link>
              <div className="w-px h-6 bg-slate-700 hidden sm:block" />
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#646cff] to-[#61dafb] flex items-center justify-center shrink-0">
                  <BarChart3 size={16} className="text-white" />
                </div>
                <span className="font-mono text-lg font-bold text-[#61dafb] truncate">MarketPulse</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === id
                      ? "bg-[#646cff]/20 text-[#61dafb] border border-[#646cff]/40"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={14} />
                  <span className="hidden xl:inline">{label}</span>
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
            <div className="py-2 px-2 bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700/50">
              {navItems.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-md text-sm transition-all duration-200 ${
                    activeSection === id
                      ? "text-[#61dafb] bg-[#646cff]/10 border border-[#646cff]/30"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div id="home" className="relative z-10 max-w-7xl mx-auto flex-1 px-4 pt-28 pb-16 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] gap-12 xl:gap-20 items-center">
          {/* Achievement Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 justify-self-start"
          >
            <Badge
              className="px-5 py-2.5 text-sm font-semibold backdrop-blur-sm"
              style={{
                background: 'linear-gradient(to right, #646cff20, #61dafb20)',
                color: '#61dafb',
                border: '1px solid #61dafb50',
              }}
            >
              <Award className="w-5 h-5 mr-2" />
              {t.MarketPulseContentType.hero.achievement.badge}
            </Badge>
          </motion.div>

          <div className="space-y-8">
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.98]"
            >
              <span
                className="bg-clip-text text-transparent drop-shadow-2xl"
                style={{ backgroundImage: `linear-gradient(to right, #646cff, #61dafb, #646cff)` }}
              >
                {t.MarketPulseContentType.hero.title.main}
              </span>
              <span className="block text-slate-200 text-2xl sm:text-3xl lg:text-4xl mt-5 font-light leading-tight">
                {t.MarketPulseContentType.hero.title.subtitle}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
                {t.MarketPulseContentType.hero.description.primary}
              </p>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                {t.MarketPulseContentType.hero.description.secondary}
              </p>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 max-w-2xl"
            >
              {metrics.map(({ icon: Icon, value, label, color }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="p-4 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: 'rgba(100, 108, 255, 0.1)', borderColor: 'rgba(100, 108, 255, 0.3)' }}
                >
                  <Icon className="w-5 h-5 mb-3" style={{ color }} />
                  <div className="text-xl font-bold mb-1" style={{ color }}>{value}</div>
                  <div className="text-slate-400 text-xs leading-tight">{label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Technical Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-2 text-sm"
            >
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-slate-300 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: index % 2 === 0 ? '#646cff20' : '#61dafb20', borderColor: index % 2 === 0 ? '#646cff40' : '#61dafb40' }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Animated Forecast Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-[#646cff]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-[#111827]/85 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-slate-700/70 px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-xs text-slate-400">marketpulse_forecast.py</span>
                <span className="ml-auto flex items-center gap-2 font-mono text-xs text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> LIVE MODEL
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <div className="mb-7 flex items-start justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Multimodal signal</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Forecast horizon</p>
                    <p className="mt-1 text-sm text-slate-400">Price + news sentiment + technical features</p>
                  </div>
                  <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-right">
                    <div className="text-lg font-bold text-emerald-300">+8.6%</div>
                    <div className="text-[10px] uppercase tracking-wider text-emerald-400/70">Expected move</div>
                  </div>
                </div>

                <div className="relative mb-7 flex h-44 items-end gap-2 border-b border-l border-slate-700/70 px-3 pb-0 pt-5">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(100,108,255,0.12)_50%,transparent_51%)] bg-[length:100%_33.33%]" />
                  {forecastBars.map((barValue, index) => (
                    <motion.div
                      key={`${barValue}-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: `${barValue}%`, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.08, duration: 0.7, ease: "easeOut" }}
                      className={`relative flex-1 rounded-t-sm ${index > 6 ? "bg-gradient-to-t from-[#646cff] to-[#61dafb]" : "bg-slate-600/80"}`}
                    >
                      {index === forecastBars.length - 1 && (
                        <motion.span
                          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 1.8, repeat: Infinity }}
                          className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#61dafb] shadow-[0_0_14px_#61dafb]"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {forecastSignals.map((signal, index) => (
                    <motion.div
                      key={signal.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + index * 0.12 }}
                      className="rounded-lg border border-slate-700/70 bg-slate-900/60 p-3"
                    >
                      <span className="block text-xs text-slate-500">{signal.label}</span>
                      <span className="mt-1 block text-sm font-semibold" style={{ color: signal.color }}>{signal.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center backdrop-blur-sm" style={{ borderColor: '#646cff80' }}>
            <motion.div
              className="w-1 h-3 rounded-full mt-2"
              style={{ backgroundColor: '#646cff' }}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}