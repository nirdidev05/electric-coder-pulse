import React, { useState, useEffect } from 'react';
import { WritingText } from './animate-ui/text/writing';
import { 
  TrendingUp, 
  Users, 
  Calendar,
  BarChart3,
  ArrowRight,
  Play,
  Code2,
  Database,
  Zap,
  ChefHat,
  Building,
  Sparkles
} from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const performanceMetrics = [
    { 
      value: "22", 
      suffix: "RMSE",
      label: "Prediction Accuracy", 
      description: "Daily meal forecast precision",
      color: "text-accent"
    },
    { 
      value: "94", 
      suffix: "%",
      label: "Model Confidence", 
      description: "Cross-validation reliability",
      color: "text-primary"
    },
    { 
      value: "30", 
      suffix: "%",
      label: "Waste Reduction", 
      description: "Food cost optimization",
      color: "text-secondary"
    },
    { 
      value: "5", 
      suffix: "min",
      label: "Processing Time", 
      description: "Real-time predictions",
      color: "text-warning"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % performanceMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs using your colors */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:100px_100px] opacity-20"></div>
        
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float ${
              i % 3 === 0 ? 'bg-primary/30' :
              i % 3 === 1 ? 'bg-secondary/30' :
              'bg-accent/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Main Title */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border rounded-full px-6 py-2 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>AI-Powered Business Intelligence</span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>

            {/* Revolutionary Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-none tracking-tight">
              <div className="relative inline-block">
                <span className="gradient-text animate-gradient">
                  FEAST
                </span>
                <div className="absolute inset-0 gradient-text blur-2xl opacity-50 animate-gradient">
                  FEAST
                </div>
              </div>
              <br />
              <span className="text-foreground/90">FORECASTER</span>
            </h1>

            {/* Subtitle */}
            <div className="text-xl md:text-2xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
              <WritingText
                text="Revolutionary machine learning system transforming cafeteria operations through predictive analytics, reducing waste by 30% and optimizing resource allocation with unprecedented accuracy."
                duration={4}
                delay={1}
                className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed"
                cursorClassName="w-1 h-7 bg-accent ml-1"
              />
            </div>
          </div>

          {/* Performance Dashboard */}
          <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-card/40 backdrop-blur-xl border border-border rounded-3xl p-8 max-w-2xl mx-auto">
              <div className="text-muted-foreground text-sm font-medium mb-6 flex items-center justify-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>LIVE PERFORMANCE METRICS</span>
              </div>
              
              <div className="transition-all duration-700">
                <div className={`text-7xl font-black ${performanceMetrics[currentMetric].color} mb-2 font-technical`}>
                  {performanceMetrics[currentMetric].value}
                  <span className="text-4xl ml-2">{performanceMetrics[currentMetric].suffix}</span>
                </div>
                <div className="text-foreground text-xl font-semibold mb-2">
                  {performanceMetrics[currentMetric].label}
                </div>
                <div className="text-muted-foreground">
                  {performanceMetrics[currentMetric].description}
                </div>
              </div>
              
              {/* Metric Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {performanceMetrics.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentMetric ? 'w-8 bg-primary' : 'w-2 bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                { name: "LightGBM", icon: Code2, desc: "Primary ML Engine", color: "from-primary/20 to-secondary/20" },
                { name: "Ensemble", icon: Database, desc: "Model Fusion", color: "from-secondary/20 to-accent/20" },
                { name: "Time Series", icon: TrendingUp, desc: "Temporal Analysis", color: "from-accent/20 to-primary/20" },
                { name: "Real-time", icon: Zap, desc: "Live Processing", color: "from-warning/20 to-primary/20" }
              ].map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div key={index} className="bg-card/30 backdrop-blur-md border border-border rounded-2xl p-6 hover:bg-card/50 hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 bg-gradient-to-r ${tech.color} rounded-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-semibold">{tech.name}</span>
                    </div>
                    <div className="text-muted-foreground text-sm">{tech.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              
              {/* Primary CTA */}
              <button
                onClick={() => document.getElementById('technical')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-bold overflow-hidden hover:scale-105 transition-all duration-300 glow-effect"
              >
                <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  <Play className="w-5 h-5" />
                  <span>Experience the System</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => document.getElementById('data')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-card/40 backdrop-blur-md border border-border rounded-2xl font-bold text-foreground hover:bg-card/60 hover:border-primary/50 transition-all duration-300 flex items-center gap-3 group"
              >
                <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Explore Analytics</span>
              </button>
            </div>
          </div>

          {/* Key Features */}
          <div className={`mt-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: ChefHat,
                  title: "Smart Predictions",
                  description: "AI-driven meal demand forecasting with 94% accuracy",
                  iconBg: "bg-accent/20"
                },
                {
                  icon: Users,
                  title: "Employee Analytics",
                  description: "Real-time occupancy tracking and behavior analysis",
                  iconBg: "bg-primary/20"
                },
                {
                  icon: Building,
                  title: "Business Intelligence",
                  description: "Comprehensive dashboards and optimization insights",
                  iconBg: "bg-secondary/20"
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-card/30 backdrop-blur-xl border border-border rounded-3xl p-8 hover:bg-card/50 hover:border-primary/50 transition-all duration-500 group hover-lift">
                    <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;