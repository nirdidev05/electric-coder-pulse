import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { 
  Database, 
  Network, 
  AlertTriangle, 
  GitBranch, 
  Microscope,
  MapPin,
  Activity,
  Layers,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Binary,
  Globe2,
  FlaskConical,
  Zap,
  Droplets,
  Search,
  FileCode2,
  GraduationCap
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Composant pour les nœuds du graphe animé en arrière-plan
const GraphNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      connections: number[];
    }> = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const createParticles = () => {
      particles = [];
      const colors = ['#0080FF', '#00BFFF', '#16A34A', '#F59E0B'];
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          connections: []
        });
      }
    };
    
    const draw = () => {
      ctx.fillStyle = 'rgba(11, 15, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Dessiner les connexions
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2, j) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 128, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      
      // Dessiner les particules
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Glow effect
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3);
        gradient.addColorStop(0, p.color + '40');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Mise à jour position
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    resize();
    createParticles();
    draw();
    
    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{ background: 'transparent' }}
    />
  );
};

// Composant pour les statistiques avec compteur animé
const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isVisible, value]);
  
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Badge technique avec effet de scan
const TechBadge = ({ children, variant = "blue", icon: Icon }: { 
  children: React.ReactNode; 
  variant?: "blue" | "cyan" | "green" | "orange";
  icon?: any;
}) => {
  const colors = {
    blue: "from-[#0080FF]/20 to-[#0080FF]/5 border-[#0080FF]/30 text-[#0080FF]",
    cyan: "from-[#00BFFF]/20 to-[#00BFFF]/5 border-[#00BFFF]/30 text-[#00BFFF]",
    green: "from-[#16A34A]/20 to-[#16A34A]/5 border-[#16A34A]/30 text-[#16A34A]",
    orange: "from-[#F59E0B]/20 to-[#F59E0B]/5 border-[#F59E0B]/30 text-[#F59E0B]",
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className={`relative overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-br ${colors[variant]} border backdrop-blur-sm flex items-center gap-2 group cursor-default`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      {Icon && <Icon className="w-4 h-4" />}
      <span className="text-sm font-semibold tracking-wide">{children}</span>
    </motion.div>
  );
};

// Carte de découverte (Salindres)
const DiscoveryCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#F59E0B] via-[#EF4444] to-[#F59E0B] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500 animate-pulse" />
      <div className="relative bg-[#0B0F1A]/90 backdrop-blur-xl rounded-2xl p-6 border border-[#F59E0B]/20 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/10 rounded-full blur-3xl -mr-16 -mt-16" />
        
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 animate-pulse">
            <Zap className="w-6 h-6 text-[#F59E0B]" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
              Critical Discovery
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              17,500,000 <span className="text-sm text-[#F59E0B]">ng/L</span>
            </div>
            <div className="text-sm text-slate-400">GIE Chimie Salindres Hotspot</div>
            <div className="mt-3 text-xs text-slate-500 leading-relaxed">
              Détecté par l'algorithme MCDA malgré une faible fréquence d'échantillonnage
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const HeroSectionPFAS = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Mouse tracking pour l'effet parallax subtil
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 50);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 50);
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#0B0F1A] overflow-hidden selection:bg-[#0080FF]/30"
    >
      {/* Couches d'arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0080FF]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#16A34A]/5 via-transparent to-transparent" />
        <GraphNetwork />
        
        {/* Grille technique */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        {/* Navigation subtile */}
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-0 left-0 right-0 p-6 flex items-center gap-6"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Projects</span>
          </a>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0080FF] to-[#00BFFF] flex items-center justify-center">
              <Database className="w-4 h-4 text-white" />
            </div>
            <span className="text-slate-400 text-sm font-medium">PFAS Knowledge Graph</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Master 1 — LIRIS</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>2025/2026</span>
          </div>
        </motion.nav>

        {/* Contenu principal - Layout asymétrique */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Colonne gauche - Contenu principal */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Badge de contexte */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 text-[#0080FF] text-sm font-medium"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0080FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0080FF]" />
                </span>
                The Forever Pollution Project — CNRS Data Hub
              </motion.div>

              {/* Titre principal - Style editorial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                  <span className="block text-slate-500 font-light italic mb-2 text-3xl md:text-4xl">
                    Tracking
                  </span>
                  <span className="block text-white">
                    Forever
                  </span>
                  <span className="block bg-gradient-to-r from-[#0080FF] via-[#00BFFF] to-[#16A34A] bg-clip-text text-transparent">
                    Pollution
                  </span>
                </h1>
                
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed border-l-2 border-[#0080FF]/30 pl-6 mt-6">
                  De <span className="text-white font-semibold">104 datasets fragmentés</span> à un système unifié 
                  qui détecte les <span className="text-[#0080FF] font-semibold">signaux faibles</span> de contamination. 
                  Une architecture de Property Graphs couplée à l'algorithme MCDA pour transformer 
                  le chaos informationnel en <span className="text-white font-semibold">décisions éclairées</span>.
                </p>
              </motion.div>

              {/* Stack technique */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3 pt-4"
              >
                <TechBadge variant="blue" icon={Network}>Neo4j Property Graph</TechBadge>
                <TechBadge variant="cyan" icon={Binary}>MCDA Scoring</TechBadge>
                <TechBadge variant="green" icon={GitBranch}>DiscoPG Schema</TechBadge>
                <TechBadge variant="orange" icon={Microscope}>PFAS Analytics</TechBadge>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 pt-6"
              >
                <motion.a
                  href="https://github.com/rayanMELZI/Conversion-de-donnees-PFAS-du-CNRS"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0080FF] rounded-xl font-semibold text-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0080FF] to-[#00BFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FileCode2 className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Explorer le code</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0080FF] to-[#16A34A] flex items-center justify-center text-xs font-bold text-white border-2 border-[#0B0F1A]">
                      W
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#0080FF] flex items-center justify-center text-xs font-bold text-white border-2 border-[#0B0F1A]">
                      R
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-300 font-medium">Benbouta & Melzi</div>
                    <div className="text-slate-500 text-xs">Sous la dir. Prof. Angela Bonifati</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Colonne droite - Visualisations et stats */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Carte de découverte critique */}
              <DiscoveryCard />

              {/* Stats grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/30 hover:border-[#0080FF]/30 transition-colors group">
                  <div className="flex items-center gap-2 mb-2 text-[#0080FF]">
                    <Database className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Sources</span>
                  </div>
                  <div className="text-3xl font-bold text-white group-hover:text-[#0080FF] transition-colors">
                    <AnimatedCounter value={104} />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Datasets unifiés</div>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/30 hover:border-[#16A34A]/30 transition-colors group">
                  <div className="flex items-center gap-2 mb-2 text-[#16A34A]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Sites</span>
                  </div>
                  <div className="text-3xl font-bold text-white group-hover:text-[#16A34A] transition-colors">
                    <AnimatedCounter value={287431} />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Sites uniques</div>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/30 hover:border-[#00BFFF]/30 transition-colors group">
                  <div className="flex items-center gap-2 mb-2 text-[#00BFFF]">
                    <Activity className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Observations</span>
                  </div>
                  <div className="text-3xl font-bold text-white group-hover:text-[#00BFFF] transition-colors">
                    <AnimatedCounter value={952727} />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Points de données</div>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/30 hover:border-[#F59E0B]/30 transition-colors group">
                  <div className="flex items-center gap-2 mb-2 text-[#F59E0B]">
                    <Search className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Précision</span>
                  </div>
                  <div className="text-3xl font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                    97.9%
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Géolocalisation</div>
                </div>
              </motion.div>

              {/* Visualisation du graphe simplifiée */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="relative bg-slate-800/20 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/5 to-[#16A34A]/5" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Architecture du Graphe</span>
                    <Layers className="w-4 h-4 text-[#0080FF]" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                      <span className="text-sm text-slate-300">Site (ProductionFacility, PresumptiveSite)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                      <span className="text-sm text-slate-300">Measurement (Événements temporels)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                      <span className="text-sm text-slate-300">Substance (127 molécules PFAS)</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-700/30 text-xs text-slate-500">
                    Relations: DETECTED • PRODUCED • LOCATED_IN • HAS_MEASUREMENT
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bandeau institutionnel - Style minimaliste */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-20 pt-8 border-t border-slate-800"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                    <GraduationCap className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-300">Université Lyon 1</div>
                    <div className="text-xs text-slate-500">Master Informatique</div>
                  </div>
                </div>
                
                               <div className="hidden md:block w-px h-8 bg-slate-800" />
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                    <Microscope className="w-5 h-5 text-[#0080FF]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-300">LIRIS</div>
                    <div className="text-xs text-slate-500">UMR 5205 CNRS</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5" />
                  Auvergne-Rhône-Alpes, France
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span>Encadré par Prof. Angela Bonifati</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Découvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Effet de vignette aux bords */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0B0F1A_100%)] opacity-50" />
    </section>
  );
};