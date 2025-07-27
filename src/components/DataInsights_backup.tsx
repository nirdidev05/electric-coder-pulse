import React from 'react';
import { 
  TrendingUp, 
  Users, 
  CloudRain, 
  Calendar,
  PieChart,
  Target,
  BarChart3,
  Clock,
  Thermometer,
  Coffee,
  Building2,
  Activity,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Zap
} from 'lucide-react';

interface Insight {
  title: string;
  finding: string;
  implication: string;
  metric?: string;
  icon: string;
  category: string;
}

interface Pattern {
  category: string;
  description: string;
  impact: string;
  correlation: number;
  icon: string;
  details: string[];
}

interface StatCard {
  label: string;
  value: string;
  description: string;
  icon: string;
  color: string;
}

const DataInsights: React.FC = () => {
  // Helper function to render icons
  const renderIcon = (iconName: string, size: number = 24) => {
    const iconProps = { size, className: "text-current" };
    
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      case 'CloudRain': return <CloudRain {...iconProps} />;
      case 'Calendar': return <Calendar {...iconProps} />;
      case 'PieChart': return <PieChart {...iconProps} />;
      case 'Target': return <Target {...iconProps} />;
      case 'BarChart3': return <BarChart3 {...iconProps} />;
      case 'Clock': return <Clock {...iconProps} />;
      case 'Thermometer': return <Thermometer {...iconProps} />;
      case 'Coffee': return <Coffee {...iconProps} />;
      case 'Building2': return <Building2 {...iconProps} />;
      case 'Activity': return <Activity {...iconProps} />;
      case 'ChevronRight': return <ChevronRight {...iconProps} />;
      case 'AlertTriangle': return <AlertTriangle {...iconProps} />;
      case 'CheckCircle2': return <CheckCircle2 {...iconProps} />;
      case 'Zap': return <Zap {...iconProps} />;
      default: return <BarChart3 {...iconProps} />;
    }
  };

  const keyStatistics: StatCard[] = [
    {
      label: "Correlation Strength",
      value: "0.61",
      description: "Office attendance vs meal demand correlation coefficient",
      icon: "TrendingUp",
      color: "primary"
    },
    {
      label: "Peak Day Effect",
      value: "+15%",
      description: "Thursday shows highest demand vs weekly average",
      icon: "Calendar",
      color: "secondary"
    },
    {
      label: "Weather Impact",
      value: "+6 meals",
      description: "Average increase on rainy days (313 vs 307 meals)",
      icon: "CloudRain",
      color: "accent"
    },
    {
      label: "Conversion Rate",
      value: "50-70%",
      description: "Employees present who dine at cafeteria",
      icon: "Users",
      color: "warning"
    },
    {
      label: "Data Coverage",
      value: "2.5 years",
      description: "May 2022 - December 2024 operational data",
      icon: "Clock",
      color: "primary"
    },
    {
      label: "Duplicate Rate",
      value: "0.4%",
      description: "Multiple meal transactions per employee per day",
      icon: "Target",
      color: "secondary"
    },
    {
      label: "August Impact",
      value: "-40%",
      description: "Summer vacation period demand reduction",
      icon: "Thermometer",
      color: "accent"
    },
    {
      label: "Feature Count",
      value: "60+",
      description: "Engineered features from 5 raw data sources",
      icon: "Zap",
      color: "warning"
    },
    {
      label: "Model Accuracy",
      value: "MAE ~16",
      description: "Mean Absolute Error representing average prediction deviation",
      icon: "Target",
      color: "primary"
    },
    {
      label: "Ensemble Weight", 
      value: "70-30",
      description: "LightGBM-XGBoost optimal weighting for ensemble predictions",
      icon: "BarChart3",
      color: "secondary"
    }
  ];

  return (
    <section id="data" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-card/40 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="font-technical">DATA INSIGHTS & PATTERN ANALYSIS</span>
            <div className="h-4 w-px bg-border"></div>
            <span className="text-muted-foreground">BNP Paribas Meal Forecasting</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Comprehensive Data Analysis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive exploratory analysis revealing behavioral patterns, demand drivers, and 
            critical relationships in cafeteria usage across 2.5 years of operational data
          </p>
        </div>

        {/* Key Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-20">
          {keyStatistics.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${getStatColor(stat.color)} backdrop-blur-sm border rounded-2xl p-6 hover:scale-105 transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(stat.icon, 24)}
                </div>
              </div>
              
              <div className="text-3xl font-bold mb-2 text-foreground">
                {stat.value}
              </div>
              <div className="text-sm font-semibold mb-2 text-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getStatColor = (color: string) => {
  switch (color) {
    case 'primary': return 'from-primary/20 to-primary/10 border-primary/30';
    case 'secondary': return 'from-secondary/20 to-secondary/10 border-secondary/30';
    case 'accent': return 'from-accent/20 to-accent/10 border-accent/30';
    case 'warning': return 'from-orange-500/20 to-orange-500/10 border-orange-500/30';
    default: return 'from-primary/20 to-primary/10 border-primary/30';
  }
};

export default DataInsights;
