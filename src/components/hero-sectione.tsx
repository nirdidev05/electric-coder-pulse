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
      <div id="home" className="relative z-10 max-w-7xl mx-auto flex-1 px-4 pt-24 pb-16 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="text-center">
          {/* Achievement Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <Badge
              className="mb-4 px-6 py-3 text-lg font-semibold backdrop-blur-sm"
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

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span
              className="bg-clip-text text-transparent drop-shadow-2xl"
              style={{
                backgroundImage: `linear-gradient(to right, #646cff, #61dafb, #646cff)`,
              }}
            >
              {t.MarketPulseContentType.hero.title.main}
            </span>
            <span className="block text-slate-200 text-2xl sm:text-3xl lg:text-4xl mt-4 font-light">
              {t.MarketPulseContentType.hero.title.subtitle}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-xl sm:text-2xl text-slate-300 mb-4">
              {t.MarketPulseContentType.hero.description.primary}
            </p>
            {/* Note: The secondary description is a single string in the object. For complex styling, you might need a component that handles HTML or interpolation. */}
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              {t.MarketPulseContentType.hero.description.secondary}
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            {metrics.map(({ icon: Icon, value, label, color }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="p-6 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(100, 108, 255, 0.1)',
                  borderColor: 'rgba(100, 108, 255, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color + '80';
                  e.currentTarget.style.boxShadow = `0 0 20px ${color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(100, 108, 255, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3" style={{ color }} />
                <div className="text-2xl font-bold mb-1" style={{ color }}>{value}</div>
                <div className="text-slate-300 text-sm">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technical Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 text-sm"
          >
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 text-slate-300 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: index % 2 === 0 ? '#646cff20' : '#61dafb20',
                  borderColor: index % 2 === 0 ? '#646cff40' : '#61dafb40',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = index % 2 === 0 ? '#646cff' : '#61dafb';
                  e.currentTarget.style.borderColor = index % 2 === 0 ? '#646cff' : '#61dafb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.borderColor = index % 2 === 0 ? '#646cff40' : '#61dafb40';
                }}
              >
                {tech}
              </span>
            ))}
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