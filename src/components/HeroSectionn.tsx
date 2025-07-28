import React, { useState, useEffect } from 'react';
import { WritingText } from './animate-ui/text/writing'; // Assuming this path is correct and component exists
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
  Sparkles,
  Target, // New icon for accuracy
  Percent, // New icon for confidence
  Utensils, // New icon for waste reduction
  Clock, // New icon for processing time
  Activity, // For data stream (though not directly used as an icon here, concept applies)
  GitFork, // For ensemble
  Clock4 // For time series
} from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Performance metrics derived from the BNP Paribas Cafeteria forecasting model PDF
  const performanceMetrics = [
    {
      value: "22",
      suffix: "RMSE",
      label: "Prediction Accuracy",
      description: "Daily meal forecast precision (on average)",
      color: "text-accent",
      icon: Target // Icon representing accuracy/target
    },
    {
      value: "94",
      suffix: "%",
      label: "Model Confidence",
      description: "Robustness validated through time-aware cross-validation",
      color: "text-primary",
      icon: Percent // Icon representing percentage/confidence
    },
    {
      value: "30",
      suffix: "%",
      label: "Waste Reduction",
      description: "Optimizing food preparation and cost efficiency",
      color: "text-secondary",
      icon: Utensils // Icon representing food/waste
    },
    {
      value: "5",
      suffix: "min",
      label: "Processing Time",
      description: "Real-time insights for dynamic decision-making",
      color: "text-warning",
      icon: Clock // Icon representing time/speed
    }
  ];

  // Technology stack and methodologies mentioned or implied in the PDF
  const technologyStack = [
    { name: "LightGBM", icon: Code2, desc: "High-performance ML engine for rapid insights", color: "from-primary/20 to-secondary/20" },
    { name: "Ensemble Models", icon: GitFork, desc: "Combined predictive power for superior accuracy", color: "from-secondary/20 to-accent/20" },
    { name: "Time Series Analysis", icon: Clock4, desc: "Advanced temporal patterns for future forecasting", color: "from-accent/20 to-primary/20" },
    { name: "Real-time Data", icon: Zap, desc: "Instantaneous updates for agile decision support", color: "from-warning/20 to-primary/20" }
  ];

  // Key features highlighting the project's impact and capabilities
  const keyFeatures = [
    {
      icon: ChefHat,
      title: "Intelligent Forecasting",
      description: "AI-driven meal demand predictions, ensuring optimal food preparation and minimizing waste.",
      iconBg: "bg-accent/20"
    },
    {
      icon: Users,
      title: "Dynamic Occupancy Insights",
      description: "Real-time tracking of employee presence and cafeteria usage for adaptive planning.",
      iconBg: "bg-primary/20"
    },
    {
      icon: Building,
      title: "Strategic Business Intelligence",
      description: "Comprehensive dashboards and actionable insights for cost savings and operational excellence.",
      iconBg: "bg-secondary/20"
    }
  ];

  // Effect for animating visibility and cycling through performance metrics
  useEffect(() => {
    setIsVisible(true); // Trigger initial fade-in and slide-up animations
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % performanceMetrics.length); // Cycle metrics every 3 seconds
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs for a soft, pulsating background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Subtle Grid Pattern for a technical feel */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:100px_100px] opacity-10"></div>

        {/* Dynamic Data Stream Lines for a modern, data-driven aesthetic */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute bg-primary/20 h-px w-full animate-data-line"
              style={{
                top: `${Math.random() * 100}%`, // Random vertical position
                animationDelay: `${i * 0.5}s`, // Staggered animation start
                animationDuration: `${5 + Math.random() * 5}s` // Random duration for variety
              }}
            ></div>
          ))}
        </div>

        {/* Floating Particles for subtle movement */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`particle-${i}`}
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

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Hero Section Title and Subtitle */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* AI-Powered Badge */}
          <div className="inline-flex items-center gap-2 bg-card/40 backdrop-blur-md border border-border rounded-full px-6 py-2 text-primary text-sm font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Sparkles className="w-4 h-4 text-accent" />
            <span>AI-Powered Business Intelligence</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
          </div>

          {/* Main Title with Gradient and Glow */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-none tracking-tight animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative inline-block">
              <span className="gradient-text animate-gradient-slow drop-shadow-lg">
                FEAST
              </span>
              <div className="absolute inset-0 gradient-text blur-2xl opacity-50 animate-gradient-slow">
                FEAST
              </div>
            </div>
            {/* Line break for desktop, hidden on mobile for better flow */}
            <br className="hidden md:block"/>
            <span className="text-foreground/90 block mt-4 md:inline">FORECASTER</span>
          </h1>

          {/* Subtitle with Writing Animation */}
          <div className="text-xl md:text-2xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <WritingText
              text="Revolutionary machine learning system transforming BNP Paribas cafeteria operations through predictive analytics, reducing waste and optimizing resource allocation with unprecedented accuracy."
              duration={4}
              delay={1}
              className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed"
              cursorClassName="w-1 h-7 bg-accent ml-1"
            />
          </div>
        </div>

        {/* Performance Dashboard Section */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card/40 backdrop-blur-xl border border-border rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl glass-card">
            <div className="text-muted-foreground text-sm font-medium mb-6 flex items-center justify-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>LIVE PERFORMANCE METRICS</span>
            </div>

            {/* Dynamic Metric Display */}
            <div className="transition-all duration-700 ease-in-out transform scale-100">
              <div className={`text-7xl font-black ${performanceMetrics[currentMetric].color} mb-2 font-technical flex items-center justify-center`}>
                {/* Current Metric Icon */}
                {React.createElement(performanceMetrics[currentMetric].icon, { className: "w-10 h-10 mr-4 opacity-70" })}
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

            {/* Metric Indicators (dots) */}
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

        {/* Technology Stack Section */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologyStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="bg-card/30 backdrop-blur-md border border-border rounded-2xl p-6 hover:bg-card/50 hover:border-primary/50 transition-all duration-300 group hover-lift shadow-lg">
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

        {/* Action Buttons Section */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            {/* Primary Call to Action Button */}
            <button
              onClick={() => document.getElementById('technical')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-bold overflow-hidden hover:scale-105 transition-all duration-300 glow-effect btn-primary"
            >
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3">
                <Play className="w-5 h-5" />
                <span>Experience the System</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Secondary Call to Action Button */}
            <button
              onClick={() => document.getElementById('data')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-card/40 backdrop-blur-md border border-border rounded-2xl font-bold text-foreground hover:bg-card/60 hover:border-primary/50 transition-all duration-300 flex items-center gap-3 group btn-secondary"
            >
              <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Explore Analytics</span>
            </button>
          </div>
        </div>

        {/* Key Features Section */}
        <div className={`mt-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-card/30 backdrop-blur-xl border border-border rounded-3xl p-8 hover:bg-card/50 hover:border-primary/50 transition-all duration-500 group hover-lift shadow-2xl glass-card">
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

      {/* Custom CSS for animations and responsive adjustments */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }

        @keyframes data-line {
          0% { transform: translateX(-100%); opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite; /* Slower gradient animation for subtlety */
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite; /* Slower pulse for background orbs */
        }

        .animate-data-line {
          animation: data-line linear infinite;
        }

        /* Responsive adjustments for text sizes */
        @media (max-width: 768px) {
          h1 {
            font-size: 3.5rem !important; /* Adjust for mobile */
          }
          .text-xl.md\\:text-2xl { /* Escaped colon for Tailwind class in CSS */
            font-size: 1.125rem !important; /* Adjust for mobile */
          }
          .performance-dashboard .text-7xl {
            font-size: 4rem !important; /* Adjust for mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
