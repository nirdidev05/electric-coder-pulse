import React from 'react';
import { 
  Database, 
  Users, 
  MenuSquare, 
  CloudSun, 
  Calendar,
  GitMerge,
  Search,
  Wrench,
  Brain,
  CheckCircle,
  TrendingUp,
  Target,
  Zap,
  Shield,
  Clock,
  BarChart3
} from 'lucide-react';

interface DataSource {
  name: string;
  description: string;
  keyFeatures: string[];
  icon: string;
}

interface Methodology {
  phase: string;
  description: string;
  techniques: string[];
}

const TechnicalOverview: React.FC = () => {
  // Helper function to render icons
  const renderIcon = (iconName: string, size: number = 24) => {
    const iconProps = { size, className: "text-current" };
    
    switch (iconName) {
      case 'Database': return <Database {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      case 'MenuSquare': return <MenuSquare {...iconProps} />;
      case 'CloudSun': return <CloudSun {...iconProps} />;
      case 'Calendar': return <Calendar {...iconProps} />;
      case 'GitMerge': return <GitMerge {...iconProps} />;
      case 'Search': return <Search {...iconProps} />;
      case 'Wrench': return <Wrench {...iconProps} />;
      case 'Brain': return <Brain {...iconProps} />;
      case 'CheckCircle': return <CheckCircle {...iconProps} />;
      case 'TrendingUp': return <TrendingUp {...iconProps} />;
      case 'Target': return <Target {...iconProps} />;
      case 'Zap': return <Zap {...iconProps} />;
      case 'Shield': return <Shield {...iconProps} />;
      case 'Clock': return <Clock {...iconProps} />;
      case 'BarChart3': return <BarChart3 {...iconProps} />;
      default: return <Database {...iconProps} />;
    }
  };
  const dataSources: DataSource[] = [
    {
      name: "Cafeteria Transaction Logs",
      description: "Individual meal transaction records with employee ID tracking for comprehensive daily aggregation",
      keyFeatures: [
        "Daily meal counts (Nb_meals) derived from transaction aggregation using kaggle_cantine.csv",
        "Employee ID tracking with duplicate handling for multiple meals (~0.4% occurrence rate)",
        "Temporal patterns analysis across May 2022 - December 2024 (2.5 years coverage)",
        "Target variable construction with sequential day-by-day prediction for test forecasting"
      ],
      icon: "Database"
    },
    {
      name: "Head Office Attendance Data", 
      description: "Badge-in records tracking daily employee presence as key predictor of cafeteria demand",
      keyFeatures: [
        "Daily headcount (Nb_acces) from kaggle_head_office.csv of unique employees in building",
        "Department mapping and organizational structure analysis (considered but not implemented)",
        "Crucial exogenous feature with 0.61 correlation to meal demand (top feature importance)",
        "Potential diner population indicator constraining maximum daily capacity (0-400+ meals range)"
      ],
      icon: "Users"
    },
    {
      name: "Daily Menu System",
      description: "Comprehensive menu offerings including entrée types and dual main dish options with popularity analytics",
      keyFeatures: [
        "Entrée and two main dishes per day from kaggle_menu.csv with categorical classification",
        "Historical dish popularity indices: average Nb_meals per dish (e.g., Pizza=350 vs Quiche=280)",
        "Menu diversity analysis (same-type vs varied offerings) and vegetarian option detection",
        "Cross-validation protected target encoding preventing overfitting to historical preferences"
      ],
      icon: "MenuSquare"
    },
    {
      name: "Weather Data Integration",
      description: "External meteorological conditions affecting employee dining behavior and lunch decisions", 
      keyFeatures: [
        "Temperature, precipitation, wind speed, and cloud cover from kaggle_meteo.csv",
        "Rain indicator (Is_Rain) showing ~6 additional meals on rainy days (313 vs 307 baseline)",
        "Weather-attendance interaction effects (Rain_x_Occupancy) for compounded behavioral shifts",
        "Missing weather data imputation with domain-specific strategies for model robustness"
      ],
      icon: "CloudSun"
    },
    {
      name: "Algerian Calendar & Cultural Context",
      description: "Cultural and calendar-based features accounting for local business patterns and religious observances",
      keyFeatures: [
        "Sunday-Thursday workweek pattern recognition",
        "Islamic holiday detection (Ramadan, Eid periods)",
        "Public holiday flagging with near-zero meal expectations",
        "Seasonal variations including August vacation periods"
      ],
      icon: "Calendar"
    }
  ];

  const methodology: Methodology[] = [
    {
      phase: "Data Integration & Preprocessing",
      description: "Comprehensive ETL pipeline merging five heterogeneous data sources with rigorous cleaning and validation procedures",
      techniques: [
        "Date parsing and alignment across all datasets with format standardization",
        "Inner join merging ensuring temporal consistency across sources",
        "Missing data imputation with domain-specific strategies",
        "Duplicate handling in transaction logs (~0.4% occurrence rate)",
        "Weekend/holiday alignment for Algerian business calendar (Fri-Sat weekends)",
        "Ramadan period detection with special event flagging"
      ]
    },
    {
      phase: "Exploratory Data Analysis & Pattern Discovery",
      description: "Statistical analysis revealing key demand drivers and behavioral patterns in cafeteria usage",
      techniques: [
        "Weekly seasonality analysis showing Thursday peak demand",
        "Office occupancy correlation analysis (r=0.61 with meal demand)",
        "Menu influence quantification with popularity scoring",
        "Weather effect validation (+6 meals average on rainy days)",
        "Seasonal variation identification (August vacation impacts)",
        "Holiday pattern recognition with zero-demand periods"
      ]
    },
    {
      phase: "Advanced Feature Engineering",
      description: "Creation of 60+ predictive features from raw data incorporating temporal, behavioral, and environmental signals",
      techniques: [
        "Calendar features: day-of-week, holiday flags, month encoding",
        "Lag features: lag7 (same day last week) for weekly seasonality",
        "Rolling statistics: 7-day and 14-day moving averages",
        "Menu popularity indices with cross-validation encoding",
        "Weather interaction features (rain × occupancy effects)",
        "Target encoding for categorical menu items with leakage prevention"
      ]
    },
    {
      phase: "Model Development & Ensemble Training",
      description: "Gradient boosting ensemble with rigorous time-aware validation and hyperparameter optimization",
      techniques: [
        "LightGBM and XGBoost ensemble architecture with 70-30 weighted averaging for optimal performance balance",
        "5-fold TimeSeriesSplit cross-validation preventing future leakage (train 2022-2023, validate 2024)",
        "Optuna Bayesian hyperparameter optimization (60 trials): learning_rate ~0.05-0.1, num_leaves ~400-500, max_depth 8-12",
        "Early stopping with 50-round patience preventing overfitting, ensemble averaging across CV folds for robustness",
        "Feature importance validation: Nb_acces (35%), day-of-week indicators (25%), menu popularity (20%), weather effects (15%)",
        "Residual analysis revealed Monday under-prediction bias, resolved through enhanced day-of-week encoding and interaction terms"
      ]
    },
    {
      phase: "Validation & Production Deployment",
      description: "Comprehensive model validation and deployment pipeline for operational forecasting",
      techniques: [
        "Forward-in-time validation simulating real-world forecasting scenarios without lookahead bias",
        "Residual analysis ensuring unbiased predictions across all conditions and day-of-week patterns",
        "Sequential prediction pipeline for test_kaggle_finale.csv: day-by-day forecasting with recursive lag updates",
        "Ensemble averaging across 5 fold-trained models for robust uncertainty quantification and prediction intervals",
        "Production-ready recursive prediction using previous day forecasts as dynamic lag features",
        "Performance monitoring achieving ~22 RMSE (5-7% of 0-400+ meal range) with MAE ~16 meals average deviation",
        "Deployment considerations: daily forecast pipeline, real-time feature updates, and prediction confidence intervals"
      ]
    }
  ];

  return (
    <section id="technical" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-card/40 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="font-technical">TECHNICAL DEEP DIVE</span>
            <div className="h-4 w-px bg-border"></div>
            <span className="text-muted-foreground">BNP Paribas Meal Forecasting System</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Advanced ML Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            End-to-end machine learning pipeline combining five heterogeneous data sources with 
            sophisticated feature engineering and ensemble gradient boosting to achieve ~20 RMSE accuracy 
            in daily meal count forecasting for BNP Paribas El Djazaïr's cafeteria operations
          </p>
        </div>

        {/* Data Sources */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Multi-Source Data Integration Pipeline
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 group hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(source.icon, 32)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {source.name}
                    </h4>
                    <div className="text-sm text-primary font-technical">
                      Data Source {index + 1}/5
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {source.description}
                </p>
                
                <div className="space-y-3">
                  {source.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Data Integration Summary */}
          <div className="bg-gradient-to-r from-card/40 to-muted/10 backdrop-blur-sm border border-border rounded-3xl p-8">
            <h4 className="text-2xl font-bold text-center mb-8 text-foreground">
              Integration Architecture Summary
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {renderIcon('BarChart3', 32)}
                </div>
                <div className="text-3xl font-bold text-accent mb-2">5</div>
                <div className="text-foreground font-semibold mb-1">Data Sources</div>
                <div className="text-sm text-muted-foreground">Integrated via date-based merging</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {renderIcon('Clock', 32)}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">2.5</div>
                <div className="text-foreground font-semibold mb-1">Years Coverage</div>
                <div className="text-sm text-muted-foreground">May 2022 - December 2024</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {renderIcon('TrendingUp', 32)}
                </div>
                <div className="text-3xl font-bold text-secondary mb-2">0.61</div>
                <div className="text-foreground font-semibold mb-1">Key Correlation</div>
                <div className="text-sm text-muted-foreground">Attendance vs Meal Demand</div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology Pipeline */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            End-to-End ML Pipeline Methodology
          </h3>
          
          <div className="relative max-w-6xl mx-auto">
            {methodology.map((phase, index) => (
              <div key={index} className="flex items-start mb-16 last:mb-0">
                {/* Timeline Indicator */}
                <div className="flex-shrink-0 mr-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-xl font-technical shadow-lg">
                    {index + 1}
                  </div>
                  {index < methodology.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-border to-transparent mx-auto mt-6"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-muted/5 rounded-2xl p-8 hover:bg-muted/10 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <h4 className="text-2xl font-bold text-foreground">
                      {phase.phase}
                    </h4>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-technical">
                      Phase {index + 1}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {phase.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {phase.techniques.map((technique, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-background/50 rounded-lg p-3 hover:bg-background/80 transition-colors duration-200">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground text-sm font-medium">{technique}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technical Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-accent/50 transition-all duration-300">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {renderIcon('Target', 32)}
            </div>
            <div className="text-4xl font-bold text-accent mb-3">~22</div>
            <div className="text-foreground font-semibold mb-2">RMSE Validation</div>
            <div className="text-sm text-muted-foreground">
              Cross-validation RMSE in low 20s (5-7% of 0-400+ daily meal range), hitting target performance threshold
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {renderIcon('Zap', 32)}
            </div>
            <div className="text-4xl font-bold text-primary mb-3">60+</div>
            <div className="text-foreground font-semibold mb-2">Engineered Features</div>
            <div className="text-sm text-muted-foreground">
              Sophisticated feature creation from raw data including temporal, behavioral, and environmental signals
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-secondary/50 transition-all duration-300">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {renderIcon('CheckCircle', 32)}
            </div>
            <div className="text-4xl font-bold text-secondary mb-3">5-Fold</div>
            <div className="text-foreground font-semibold mb-2">Time-Series CV</div>
            <div className="text-sm text-muted-foreground">
              Rigorous validation preventing future leakage with forward-in-time prediction simulation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalOverview;