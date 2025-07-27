import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Target,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Award,
  DollarSign,
  Users,
  Calendar,
  Activity,
  Gauge,
  LineChart,
  PieChart,
  Shield,
  Lightbulb,
  Building2,
  Clock,
  ThumbsUp,
  Database,
  type LucideIcon
} from 'lucide-react';

interface MetricCard {
  title: string;
  value: string;
  description: string;
  trend?: 'up' | 'down' | 'stable';
  color: string;
  icon: LucideIcon;
  details?: string[];
}

interface PerformanceBreakdown {
  metric: string;
  training: number;
  validation: number;
  improvement: string;
  description: string;
  icon: LucideIcon;
}

interface BusinessImpact {
  value: string;
  label: string;
  color: string;
  icon: React.ReactNode;
  breakdown: string[];
}

const ResultsMetrics: React.FC = () => {
  const keyMetrics: MetricCard[] = [
    {
      title: "RMSE Score",
      value: "21.87",
      description: "Root Mean Squared Error on cross-validation",
      trend: "down",
      color: "text-accent",
      icon: Target,
      details: [
        "Final RMSE of 21.87 meals achieved through ensemble of RandomForest + XGBoost",
        "Hyperparameter optimization using Optuna framework with 100+ trials",
        "Represents average prediction error of ~22 meals per day"
      ]
    },
    {
      title: "Accuracy Rate",
      value: "94.5%",
      description: "Predictions within acceptable range (±30 meals)",
      trend: "up", 
      color: "text-primary",
      icon: CheckCircle2,
      details: [
        "94.5% of predictions within ±30 meals tolerance",
        "Exceeds business requirement of 90% accuracy for operational planning",
        "Enables reliable food ordering and staff scheduling decisions"
      ]
    },
    {
      title: "Feature Count",
      value: "60+",
      description: "Engineered features from 5 data sources",
      trend: "stable",
      color: "text-secondary",
      icon: Database,
      details: [
        "60+ engineered features from historical meal data and external factors",
        "Weather patterns, calendar events, staff schedules, building occupancy",
        "Automated feature selection using mutual information and correlation analysis"
      ]
    },
    {
      title: "Model Stability",
      value: "±0.5",
      description: "Standard deviation across CV folds",
      trend: "down",
      color: "text-warning",
      icon: BarChart3,
      details: [
        "Low variance (±0.5) across 5-fold cross-validation",
        "Ensures model reliability and generalization to unseen data",
        "Consistent performance across different time periods and seasons"
      ]
    },
    {
      title: "Training Time",
      value: "4.2min",
      description: "Complete model training with hyperparameter tuning",
      trend: "down",
      color: "text-green-600",
      icon: Clock,
      details: [
        "Optimized training pipeline with early stopping and parallel processing",
        "Reduces training time by 65% while maintaining accuracy",
        "Enables daily model retraining for production deployment"
      ]
    },
    {
      title: "Data Coverage",
      value: "18 months",
      description: "Historical data spanning multiple seasons and events",
      trend: "up",
      color: "text-blue-600",
      icon: Calendar,
      details: [
        "18 months of comprehensive meal consumption data",
        "Includes summer/winter patterns, holidays, conferences, and special events",
        "Covers 450+ unique days with complete feature availability"
      ]
    }
  ];

  const performanceBreakdown: PerformanceBreakdown[] = [
    {
      metric: "Mean Absolute Error",
      training: 16.2,
      validation: 17.8,
      improvement: "vs Baseline: -45%",
      description: "Average absolute difference between predicted and actual meal counts",
      icon: Target
    },
    {
      metric: "R² Score",
      training: 0.847,
      validation: 0.831,
      improvement: "Strong correlation",
      description: "Coefficient of determination measuring model's explanatory power",
      icon: LineChart
    },
    {
      metric: "Max Error",
      training: 89.3,
      validation: 95.7,
      improvement: "Outlier handling",
      description: "Maximum deviation in any single prediction across validation set",
      icon: AlertTriangle
    },
    {
      metric: "Cross-Validation Score",
      training: 0.838,
      validation: 0.832,
      improvement: "Consistent performance",
      description: "Average R² score across 5-fold cross-validation splits",
      icon: Gauge
    }
  ];

  const businessImpacts = [
    {
      value: "25-30%",
      label: "Estimated reduction in food waste",
      color: "text-accent",
      icon: Shield,
      details: [
        "Accurate forecasting prevents over-ordering",
        "Reduces spoilage and disposal costs",
        "Supports BNP Paribas sustainability goals"
      ]
    },
    {
      value: "95%+",
      label: "Employee satisfaction rate (meal availability)",
      color: "text-primary",
      icon: ThumbsUp,
      details: [
        "Ensures adequate meal availability during peak times",
        "Improves staff dining experience and satisfaction",
        "Reduces complaints about insufficient food supply"
      ]
    },
    {
      value: "€15K+",
      label: "Annual cost savings potential",
      color: "text-secondary",
      icon: DollarSign,
      details: [
        "Direct savings from reduced food waste",
        "Optimized staff scheduling and resource allocation",
        "Lower procurement and disposal costs"
      ]
    },
    {
      value: "4.2min",
      label: "Model retraining time (daily updates)",
      color: "text-green-600",
      icon: Zap,
      details: [
        "Enables daily model updates with fresh data",
        "Fast adaptation to changing consumption patterns",
        "Minimal computational resource requirements"
      ]
    },
    {
      value: "100%",
      label: "Automation of forecasting process",
      color: "text-blue-600",
      icon: Gauge,
      details: [
        "Eliminates manual estimation and human bias",
        "Provides consistent, data-driven predictions",
        "Reduces operational overhead and planning time"
      ]
    },
    {
      value: "450+",
      label: "Days of historical data analyzed",
      color: "text-purple-600",
      icon: Calendar,
      details: [
        "Comprehensive training dataset spanning 18 months",
        "Captures seasonal patterns and special events",
        "Ensures robust model performance across scenarios"
      ]
    }
  ];

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up': return TrendingUp;
      case 'down': return TrendingDown;
      case 'stable': return ArrowRight;
      default: return BarChart3;
    }
  };

  const getTrendColor = (trend?: string) => {
    switch (trend) {
      case 'up': return 'text-accent';
      case 'down': return 'text-accent'; // Down is good for error metrics
      case 'stable': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="results" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Performance Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive evaluation metrics demonstrating the model's accuracy 
            and reliability for production deployment
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {keyMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            const TrendIcon = getTrendIcon(metric.trend);
            
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-primary/10 ${metric.color.replace('text-', 'text-')}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      {metric.title}
                    </h4>
                  </div>
                  <TrendIcon className={`w-5 h-5 ${getTrendColor(metric.trend)}`} />
                </div>
                
                <div className={`text-4xl font-bold ${metric.color} mb-3 font-technical group-hover:scale-105 transition-transform duration-300`}>
                  {metric.value}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {metric.description}
                </p>
                
                {metric.details && (
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <ul className="space-y-1">
                      {metric.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground/80 leading-relaxed">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Performance Breakdown */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold mb-8 text-foreground text-center">
            Detailed Performance Analysis
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-6 text-foreground font-semibold">
                    Metric
                  </th>
                  <th className="text-center py-4 px-6 text-foreground font-semibold">
                    Training
                  </th>
                  <th className="text-center py-4 px-6 text-foreground font-semibold">
                    Validation
                  </th>
                  <th className="text-center py-4 px-6 text-foreground font-semibold">
                    Improvement
                  </th>
                </tr>
              </thead>
              <tbody>
                {performanceBreakdown.map((row, index) => {
                  const IconComponent = row.icon;
                  return (
                    <tr key={index} className={`border-b border-border/50 ${
                      index % 2 === 0 ? 'bg-muted/10' : 'bg-transparent'
                    } hover:bg-muted/20 transition-colors duration-200 group`}>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <div className="text-foreground font-medium">{row.metric}</div>
                            <div className="text-xs text-muted-foreground mt-1">{row.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center text-muted-foreground font-technical">
                        {row.training}
                      </td>
                      <td className="py-4 px-6 text-center text-muted-foreground font-technical">
                        {row.validation}
                      </td>
                      <td className="py-4 px-6 text-center text-accent font-semibold">
                        {row.improvement}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Business Impact */}
        <div className="bg-gradient-to-r from-card to-muted/20 border border-border rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-12 text-foreground">
            Business Impact Projection
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "25-30%", label: "Estimated reduction in food waste", color: "text-accent" },
              { value: "95%+", label: "Employee satisfaction rate (meal availability)", color: "text-primary" },
              { value: "€15K+", label: "Annual cost savings potential", color: "text-secondary" }
            ].map((impact, index) => (
              <div key={index} className="space-y-4">
                <div className={`text-5xl font-bold ${impact.color} font-technical`}>
                  {impact.value}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {impact.label}
                </p>
              </div>
            ))}
          </div>
          
          <p className="mt-12 text-lg text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
            Accurate forecasting enables optimal resource allocation, reduces waste, 
            and ensures consistent meal availability for all employees
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsMetrics;