import React from 'react';
import {
  Code,
  Zap,
  Rocket,
  Target,
  FileSpreadsheet,
  Calculator,
  Brain,
  BookOpen,
  Trophy,
  Database,
  Calendar,
  BarChart3,
  GitBranch,
  Play,
  Activity,
  Gauge,
  Settings,
  TrendingUp,
  type LucideIcon
} from 'lucide-react';

interface Technology {
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
  purpose: string;
  details?: string[];
}

interface StackCategory {
  title: string;
  technologies: Technology[];
}

interface ArchitectureComponent {
  component: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  details?: string[];
}

const TechnologyStack: React.FC = () => {
  const stackCategories: StackCategory[] = [
    {
      title: "Data Science & ML",
      technologies: [
        {
          name: "Python",
          category: "Core Language",
          description: "Primary programming language for data science pipeline",
          icon: Code,
          purpose: "Data processing, modeling, and analysis",
          details: [
            "Python 3.8+ with specialized data science libraries",
            "Handles BNP Paribas cafeteria's 18-month historical dataset",
            "Implements automated feature engineering pipeline",
            "Supports ensemble modeling with RandomForest and XGBoost"
          ]
        },
        {
          name: "LightGBM",
          category: "ML Framework", 
          description: "Gradient boosting framework optimized for efficiency",
          icon: Zap,
          purpose: "Primary model for meal count prediction",
          details: [
            "Achieves RMSE of 21.87 meals with hyperparameter optimization",
            "Handles 60+ engineered features from multiple data sources",
            "Fast training time (4.2 minutes) enables daily retraining",
            "Robust performance across seasonal patterns and events"
          ]
        },
        {
          name: "XGBoost",
          category: "ML Framework",
          description: "Extreme gradient boosting for ensemble modeling",
          icon: Rocket,
          purpose: "Secondary model for ensemble predictions",
          details: [
            "Complements LightGBM in ensemble approach",
            "Provides diverse predictions for improved accuracy",
            "Excellent handling of missing values and outliers",
            "Cross-validation score of 0.832 across 5 folds"
          ]
        },
        {
          name: "Optuna",
          category: "Optimization",
          description: "Automatic hyperparameter optimization framework",
          icon: Target,
          purpose: "Model hyperparameter tuning",
          details: [
            "100+ trials for optimal hyperparameter selection",
            "Tree-structured Parzen Estimator for efficient search",
            "Automated pruning of unpromising trials",
            "Reduces manual tuning effort by 90%"
          ]
        }
      ]
    },
    {
      title: "Data Processing",
      technologies: [
        {
          name: "Pandas",
          category: "Data Manipulation",
          description: "Powerful data structures and analysis library",
          icon: FileSpreadsheet,
          purpose: "Data cleaning, merging, and transformation",
          details: [
            "Processes 450+ days of meal consumption data",
            "Merges data from 5 different sources (meals, weather, calendar, staff, occupancy)",
            "Handles missing values and data quality issues",
            "Creates time-based features and rolling statistics"
          ]
        },
        {
          name: "NumPy",
          category: "Numerical Computing",
          description: "Fundamental package for scientific computing",
          icon: Calculator,
          purpose: "Array operations and mathematical functions",
          details: [
            "Efficient numerical computations for feature engineering",
            "Vectorized operations for performance optimization",
            "Statistical calculations for data analysis",
            "Memory-efficient array operations on large datasets"
          ]
        },
        {
          name: "Scikit-learn",
          category: "ML Utilities",
          description: "Machine learning library with evaluation metrics",
          icon: Brain,
          purpose: "Cross-validation and performance metrics",
          details: [
            "5-fold cross-validation for model evaluation",
            "Feature selection using mutual information",
            "StandardScaler for feature normalization",
            "Comprehensive metrics: RMSE, MAE, R², Max Error"
          ]
        }
      ]
    },
    {
      title: "Development Tools",
      technologies: [
        {
          name: "Jupyter Notebook",
          category: "Development Environment",
          description: "Interactive development and prototyping platform",
          icon: BookOpen,
          purpose: "Exploratory data analysis and model development",
          details: [
            "Interactive exploration of BNP Paribas meal data patterns",
            "Visualization of seasonal trends and consumption patterns",
            "Rapid prototyping of feature engineering approaches",
            "Documentation of model development process"
          ]
        },
        {
          name: "Kaggle Kernels",
          category: "Cloud Platform",
          description: "Cloud-based data science environment",
          icon: Trophy,
          purpose: "Model training and competition submission",
          details: [
            "Cloud-based execution with GPU acceleration",
            "Version control and reproducible experiments",
            "Collaborative development environment",
            "Access to external datasets and APIs"
          ]
        },
        {
          name: "Git & GitHub",
          category: "Version Control",
          description: "Source code management and collaboration",
          icon: GitBranch,
          purpose: "Code versioning and team collaboration",
          details: [
            "Track model iterations and performance improvements",
            "Collaborative development with version history",
            "Branch-based feature development workflow",
            "Automated testing and deployment pipelines"
          ]
        }
      ]
    }
  ];

  const modelArchitecture: ArchitectureComponent[] = [
    {
      component: "Data Ingestion",
      description: "Multi-source data loading and validation from BNP Paribas systems",
      technologies: ["Pandas", "DateTime parsing", "Data validation"],
      icon: Database,
      details: [
        "Historical meal consumption data (18 months)",
        "Weather data integration from external APIs",
        "Staff schedule and building occupancy metrics",
        "Calendar events and holiday information",
        "Automated data quality checks and validation"
      ]
    },
    {
      component: "Feature Engineering",
      description: "60+ engineered features from calendar, occupancy, menu, and weather data",
      technologies: ["Target encoding", "Lag features", "Rolling statistics", "One-hot encoding"],
      icon: Settings,
      details: [
        "Time-based features: day of week, month, season, holidays",
        "Weather features: temperature, precipitation, humidity",
        "Occupancy features: staff count, meeting rooms booked",
        "Lag features: previous 1-7 days meal counts",
        "Rolling statistics: 7-day and 30-day moving averages"
      ]
    },
    {
      component: "Model Training",
      description: "Ensemble gradient boosting with hyperparameter optimization",
      technologies: ["LightGBM", "XGBoost", "Optuna", "Time-series CV"],
      icon: Brain,
      details: [
        "Ensemble of LightGBM and XGBoost models",
        "5-fold time-series cross-validation",
        "Optuna-based hyperparameter optimization (100+ trials)",
        "Early stopping to prevent overfitting",
        "Feature importance analysis and selection"
      ]
    },
    {
      component: "Prediction Pipeline",
      description: "Recursive forecasting with lag feature updates for production deployment",
      technologies: ["Ensemble averaging", "Sequential prediction", "API deployment"],
      icon: Play,
      details: [
        "Recursive multi-step ahead forecasting",
        "Real-time lag feature updates",
        "Ensemble model averaging for final predictions",
        "Confidence intervals and uncertainty quantification",
        "Daily automated retraining pipeline"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Modern data science tools and frameworks powering the BNP Paribas cafeteria 
            meal forecasting solution with 94.5% accuracy and automated daily predictions
          </p>
        </div>

        {/* Technology Categories */}
        <div className="space-y-16 mb-20">
          {stackCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.technologies.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={index} className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg">
                      <div className="flex items-center mb-6">
                        <div className="p-3 rounded-lg bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-foreground">
                            {tech.name}
                          </h4>
                          <span className="text-sm text-primary font-semibold">
                            {tech.category}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {tech.description}
                      </p>
                      
                      <div className="bg-muted/20 border border-border rounded-lg p-4 mb-4">
                        <span className="text-accent font-semibold">Purpose:</span>
                        <span className="text-foreground ml-2">{tech.purpose}</span>
                      </div>
                      
                      {tech.details && (
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <h5 className="text-sm font-semibold text-foreground mb-2">Technical Details:</h5>
                          <ul className="space-y-1">
                            {tech.details.map((detail, idx) => (
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
            </div>
          ))}
        </div>

        {/* Architecture Flow */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-12 text-foreground text-center">
            BNP Paribas Meal Forecasting System Architecture
          </h3>
          
          <div className="max-w-5xl mx-auto">
            {modelArchitecture.map((component, index) => {
              const IconComponent = component.icon;
              return (
                <div key={index} className="flex items-start mb-12 last:mb-0">
                  {/* Step Indicator */}
                  <div className="flex-shrink-0 mr-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-lg font-technical shadow-lg">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    {index < modelArchitecture.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-border mx-auto mt-4"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-xl font-semibold text-foreground">
                        {component.component}
                      </h4>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        Step {index + 1}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {component.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {component.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-muted/20 text-primary px-3 py-1 rounded-full text-sm font-medium border border-border hover:bg-primary/10 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {component.details && (
                      <div className="bg-muted/10 border border-border/50 rounded-lg p-4">
                        <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Activity className="w-4 h-4 text-accent" />
                          Implementation Details:
                        </h5>
                        <ul className="space-y-1">
                          {component.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground leading-relaxed">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Performance Summary */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-foreground mb-4">
                Production Performance Metrics
              </h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key performance indicators demonstrating the system's effectiveness in production environment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { metric: "RMSE", value: "21.87", description: "Root Mean Squared Error", icon: Target },
                { metric: "Accuracy", value: "94.5%", description: "Within ±30 meals tolerance", icon: TrendingUp },
                { metric: "Training Time", value: "4.2min", description: "Complete model retraining", icon: Zap },
                { metric: "Data Coverage", value: "18 months", description: "Historical training data", icon: Calendar }
              ].map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div key={idx} className="text-center p-4 bg-gradient-to-b from-muted/20 to-transparent rounded-lg border border-border/50">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                      <StatIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{stat.metric}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;