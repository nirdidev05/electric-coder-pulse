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
  Zap,
  LineChart,
  ScatterChart,
  TrendingDown,
  Sunrise,
  MapPin,
  Globe
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

interface TimeSeriesInsight {
  title: string;
  description: string;
  findings: string[];
  icon: string;
}

const DataInsights: React.FC = () => {
  // Helper function to render icons
  const renderIcon = (iconName: string, size: number = 24) => {
    const iconProps = { size, className: "text-current" };
    
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp {...iconProps} />;
      case 'TrendingDown': return <TrendingDown {...iconProps} />;
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
      case 'LineChart': return <LineChart {...iconProps} />;
      case 'Scatter3D': return <ScatterChart {...iconProps} />;
      case 'Sunrise': return <Sunrise {...iconProps} />;
      case 'MapPin': return <MapPin {...iconProps} />;
      case 'Globe': return <Globe {...iconProps} />;
      default: return <BarChart3 {...iconProps} />;
    }
  };

  // New: Time Series Analysis Insights from the text
  const timeSeriesInsights: TimeSeriesInsight[] = [
    {
      title: "Overall Trend and Seasonality",
      description: "Daily meals served over time (May 2022 – Dec 2024) showing strong weekly seasonality with minimal long-term trend",
      findings: [
        "Strong weekly seasonality with regular dips to near-zero on weekends (Fridays/Saturdays)",
        "No dramatic long-term trend, but slight increase from mid-2023 into 2024",
        "Significant drops during August each year due to summer vacations",
        "Prolonged zero-meal periods during Ramadan when cafeteria was effectively closed",
        "Series is relatively stationary aside from seasonal effects"
      ],
      icon: "LineChart"
    },
    {
      title: "Weekday vs Weekend Patterns",
      description: "Clear day-of-week effects within the Sunday-Thursday workweek pattern in Algeria",
      findings: [
        "Thursday has the highest average number of meals (peak demand day)",
        "Sunday shows above-average demand despite being first workday",
        "Monday tends to have the lowest average among workdays",
        "Friday and Saturday show near-zero meals (weekend in Algeria)",
        "End-of-week meetings or traditions drive Thursday peak attendance"
      ],
      icon: "Calendar"
    },
    {
      title: "Occupancy Correlation Analysis",
      description: "Office attendance vs meals correlation revealing 50-70% conversion rate with daily variability",
      findings: [
        "Correlation coefficient of 0.61 between office headcount and meals",
        "Peaks on workdays (~500-600 staff present, ~300-400 meals served)",
        "Roughly 50-70% of employees present end up dining at cafeteria",
        "Conversion rate varies daily based on contextual factors",
        "Scatter plot shows positive trend but significant variability around trend line"
      ],
      icon: "Scatter3D"
    }
  ];

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
      value: "Thursday",
      description: "Highest average meals per day within workweek",
      icon: "Calendar",
      color: "secondary"
    },
    {
      label: "Weather Impact",
      value: "313 vs 307",
      description: "Average meals on rainy vs clear days",
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
      value: "Lower",
      description: "Summer vacation period demand reduction",
      icon: "Thermometer",
      color: "accent"
    },
    {
      label: "Weekend Pattern",
      value: "Fri-Sat",
      description: "Algerian weekend showing near-zero demand",
      icon: "AlertTriangle",
      color: "warning"
    }
  ];

  const keyInsights: Insight[] = [
    {
      title: "Weekly Seasonality Dominance",
      finding: "Thursday emerges as peak demand day within the Sunday-Thursday workweek, possibly due to end-of-week meetings or tradition of more staff being on-site",
      implication: "Strong day-of-week effects necessitate calendar-based features with Thursday requiring enhanced preparation capacity",
      metric: "Thursday peak",
      icon: "Calendar",
      category: "Temporal Patterns"
    },
    {
      title: "Office Occupancy as Primary Driver",
      finding: "50-70% of employees present typically dine at cafeteria, creating correlation (r=0.61) between daily headcount and meal demand",
      implication: "Office attendance serves as primary predictor, but conversion rate varies daily requiring additional contextual features",
      metric: "r = 0.61",
      icon: "Users", 
      category: "Behavioral Insights"
    },
    {
      title: "Weather-Driven Behavioral Shifts",
      finding: "Rainy days consistently show higher cafeteria usage (313 vs 307 meals average), as employees are less inclined to leave building",
      implication: "Weather data provides meaningful signal for daily demand adjustments, especially for indoor dining preference",
      metric: "313 vs 307 meals",
      icon: "CloudRain",
      category: "Environmental Factors"
    },
    {
      title: "Seasonal Vacation Impact",
      finding: "August shows much lower cafeteria usage as many employees take summer holidays, resulting in fewer people at office",
      implication: "Calendar features must account for seasonal patterns with August flagged as known slow period",
      metric: "August dip",
      icon: "Thermometer",
      category: "Seasonal Variations"
    },
    {
      title: "Menu Popularity Influence",
      finding: "Certain dishes like pizza or couscous had higher average turnout (higher popularity index) compared to ordinary menu days",
      implication: "Popularity metrics as features enable model to predict higher counts on days with historically popular dishes",
      metric: "Dish variance",
      icon: "Coffee",
      category: "Menu Analytics"
    },
    {
      title: "Weekend & Holiday Behavior",
      finding: "Friday-Saturday (Algeria weekend) and public holidays show near-zero demand, confirming cafeteria closure patterns",
      implication: "Weekend/holiday indicators essential for accurate baseline prediction of near-zero meal expectations",
      metric: "~0 meals",
      icon: "AlertTriangle",
      category: "Calendar Effects"
    },
    {
      title: "Temperature Effects",
      finding: "Extremely hot or cold days could discourage going out, with cold + rain combinations amplifying cafeteria preference",
      implication: "Temperature as continuous feature allows model to learn non-linear effects and weather interactions",
      metric: "Temperature effect",
      icon: "Thermometer",
      category: "Weather Patterns"
    },
    {
      title: "Menu Diversity Impact",
      finding: "Two main choices daily - similar options (both red meat) might appeal to same group vs variety (meat + vegetarian) attracting wider crowd",
      implication: "Menu diversity features capture whether varied offerings increase overall appeal and turnout",
      metric: "Diversity effect",
      icon: "PieChart",
      category: "Menu Strategy"
    },
    {
      title: "Special Event Recognition",
      finding: "When both main dishes were particularly enticing or special dessert/event meals offered, there were noticeable bumps in sales",
      implication: "Historical turnout serves as best indicator of menu appeal, enabling popularity-based predictions",
      metric: "Event bumps",
      icon: "Target",
      category: "Special Events"
    }
  ];

  const dataPatterns: Pattern[] = [
    {
      category: "Calendar & Temporal Effects",
      description: "Strong weekly periodicity with Friday-Saturday weekends and Islamic holidays requiring special handling in Algerian business context",
      impact: "Binary features for non-working days essential, plus Ramadan period detection and August vacation flagging",
      correlation: 0.85,
      icon: "Calendar",
      details: [
        "Sunday-Thursday workweek pattern confirmed by zero meals on Fridays/Saturdays",
        "Public holidays (May 1, Eid) correspond to near-zero meal counts",
        "Ramadan periods show almost zero meals, effectively cafeteria closure",
        "Late December dips around Christmas/New Year despite Algeria context"
      ]
    },
    {
      category: "Office Attendance Dynamics", 
      description: "Daily headcount serves as strongest single predictor with 0.61 correlation, but conversion rate fluctuates between 50-70%",
      impact: "Primary feature requiring weather, menu, and calendar interactions for optimal accuracy in conversion prediction",
      correlation: 0.61,
      icon: "Users",
      details: [
        "Badge-in records provide accurate daily potential diner population",
        "Not all employees present eat at cafeteria (some bring lunch/go out)",
        "Occasionally more meals than unique people (multiple meals, visitors)",
        "Scatter plot shows positive trend but significant variability around trend"
      ]
    },
    {
      category: "Menu Popularity & Appeal",
      description: "Dish-specific appeal drives significant turnout variations with popularity scores calculated as average meals when dish was served",
      impact: "Target-encoded popularity indices enable prediction of higher counts on historically popular dish days",
      correlation: 0.42,
      icon: "Coffee",
      details: [
        "Pizza and couscous identified as crowd-pleasers with higher popularity indices",
        "Ordinary menu days see slightly lower counts vs special dishes",
        "Menu diversity affects appeal (similar vs varied offerings)",
        "Special dessert or event meals create noticeable sales bumps"
      ]
    },
    {
      category: "Weather & Environmental",
      description: "Rain increases cafeteria usage (313 vs 307 average) as employees less inclined to leave building for lunch",
      impact: "Weather features provide meaningful daily adjustment signals, especially rain indicators and temperature interactions",
      correlation: 0.23,
      icon: "CloudRain",
      details: [
        "Rainy days show modest but consistent +6 meals increase",
        "Temperature effects suspected but not strongly monotonic alone",
        "Cold + rain combinations potentially amplify indoor dining preference",
        "Cloud cover and wind included but expected minor effects"
      ]
    },
    {
      category: "Seasonal & Holiday Patterns",
      description: "Beyond weekly cycles, seasonal patterns show August vacation impact and special date recognition for accurate baseline prediction",
      impact: "Month/season features essential, particularly August flagging and public holiday detection for near-zero expectations",
      correlation: 0.68,
      icon: "Sunrise",
      details: [
        "August consistently shows much lower cafeteria usage (summer vacation)",
        "Late December shows dips around Christmas/New Year period",
        "Ramadan periods require special span detection (effectively cafeteria closure)",
        "Public holiday flagging prevents model confusion about low-demand days"
      ]
    },
    {
      category: "Time Series & Lag Features",
      description: "Historical meal count patterns through lag features (lag7 for weekly seasonality) and rolling averages for trend smoothing",
      impact: "Lag features transform time series forecasting into supervised learning with recent history context",
      correlation: 0.38,
      icon: "Activity",
      details: [
        "Lag7 (same day last week) captures weekly seasonality directly",
        "7-day and 14-day moving averages provide smoothed trend values",
        "Rolling standard deviation measures recent demand volatility",
        "Sequential prediction approach prevents future data leakage"
      ]
    }
  ];

  const getCorrelationColor = (correlation: number) => {
    if (correlation > 0.6) return 'bg-accent text-accent-foreground';
    if (correlation > 0.4) return 'bg-warning text-warning-foreground';
    if (correlation > 0.2) return 'bg-secondary text-secondary-foreground';
    return 'bg-primary text-primary-foreground';
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

  return (
    <section id="data" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-card/40 backdrop-blur-sm text-primary px-6 py-3 rounded-full text-sm font-medium mb-8">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="font-technical">EXPLORATORY DATA ANALYSIS</span>
            <div className="h-4 w-px bg-border"></div>
            <span className="text-muted-foreground">Pattern Discovery & Insights</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Data-Driven Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive exploratory analysis revealing behavioral patterns, demand drivers, and 
            critical relationships in cafeteria usage across 2.5 years of operational data
          </p>
        </div>

        {/* NEW: Time Series Analysis Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Time Series Analysis & Patterns
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {timeSeriesInsights.map((insight, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-4">
                    {renderIcon(insight.icon, 28)}
                  </div>
                  <h4 className="text-xl font-bold text-foreground">
                    {insight.title}
                  </h4>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {insight.description}
                </p>
                
                <div className="space-y-3">
                  {insight.findings.map((finding, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground text-sm leading-relaxed">{finding}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {keyStatistics.map((stat, index) => (
            <div key={index} className={`bg-gradient-to-br ${getStatColor(stat.color)} border rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300`}>
              <div className="w-12 h-12 mx-auto mb-4 bg-card/60 rounded-xl flex items-center justify-center">
                {renderIcon(stat.icon, 24)}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Key Insights by Category */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Critical Pattern Discovery
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {keyInsights.map((insight, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 group hover-lift">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(insight.icon, 28)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {insight.title}
                      </h4>
                      {insight.metric && (
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold font-technical flex-shrink-0 ml-4">
                          {insight.metric}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-accent font-semibold mb-3 uppercase tracking-wide">
                      {insight.category}
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/20 border border-border rounded-lg p-4 mb-4">
                  <p className="text-primary font-semibold mb-2 flex items-center gap-2">
                    {renderIcon('Target', 16)}
                    Key Finding:
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {insight.finding}
                  </p>
                </div>
                
                <div className="bg-background/50 border border-border rounded-lg p-4">
                  <p className="text-secondary font-semibold mb-2 flex items-center gap-2">
                    {renderIcon('Zap', 16)}
                    Strategic Implication:
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {insight.implication}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Pattern Analysis */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Feature Correlation & Impact Analysis
          </h3>
          
          <div className="space-y-8">
            {dataPatterns.map((pattern, index) => (
              <div key={index} className="bg-background border border-border rounded-2xl p-8 hover:bg-muted/5 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      {renderIcon(pattern.icon, 24)}
                    </div>
                    <h4 className="text-2xl font-bold text-foreground">
                      {pattern.category}
                    </h4>
                  </div>
                  
                  {/* Enhanced Correlation Indicator */}
                  <div className="flex items-center gap-4 bg-muted/30 rounded-xl p-4">
                    <span className="text-sm text-muted-foreground font-medium">
                      Correlation Strength:
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getCorrelationColor(pattern.correlation).split(' ')[0]} transition-all duration-500`}
                          style={{ width: `${pattern.correlation * 100}%` }}
                        />
                      </div>
                      <span className={`text-sm font-bold ${getCorrelationColor(pattern.correlation)} px-2 py-1 rounded-full font-technical`}>
                        {pattern.correlation.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {pattern.description}
                </p>
                
                <div className="bg-muted/20 border border-border rounded-xl p-6 mb-6">
                  <span className="text-accent font-semibold flex items-center gap-2 mb-3">
                    {renderIcon('CheckCircle2', 18)}
                    Implementation Impact:
                  </span>
                  <span className="text-foreground font-medium">{pattern.impact}</span>
                </div>

                {/* Detailed Insights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pattern.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-background/80 rounded-lg p-4 hover:bg-background transition-colors duration-200">
                      {renderIcon('ChevronRight', 16)}
                      <span className="text-foreground text-sm font-medium leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EDA Summary with Enhanced Insights */}
        <div className="bg-gradient-to-r from-card via-muted/20 to-card border border-border rounded-3xl p-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            {renderIcon('BarChart3', 32)}
            <h3 className="text-3xl font-bold text-foreground">
              EDA Findings Summary
            </h3>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
            Our exploratory analysis confirmed that <span className="text-primary font-semibold">date patterns</span>, 
            <span className="text-secondary font-semibold"> office occupancy</span>, 
            <span className="text-accent font-semibold"> menu choice</span>, and 
            <span className="text-orange-500 font-semibold"> weather conditions</span> are the primary drivers 
            of cafeteria demand, forming the foundation for our feature engineering strategy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                {renderIcon('Calendar', 20)}
              </div>
              <div className="text-primary font-bold text-sm">Weekday Patterns</div>
              <div className="text-xs text-muted-foreground mt-1">Set general baseline</div>
            </div>
            
            <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                {renderIcon('Users', 20)}
              </div>
              <div className="text-secondary font-bold text-sm">Office Occupancy</div>
              <div className="text-xs text-muted-foreground mt-1">Drives main volume</div>
            </div>
            
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                {renderIcon('Coffee', 20)}
              </div>
              <div className="text-accent font-bold text-sm">Menu Choice</div>
              <div className="text-xs text-muted-foreground mt-1">Day-to-day variability</div>
            </div>
            
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                {renderIcon('CloudRain', 20)}
              </div>
              <div className="text-orange-500 font-bold text-sm">Weather Effects</div>
              <div className="text-xs text-muted-foreground mt-1">Behavioral modulation</div>
            </div>
          </div>
          
          <p className="text-base text-muted-foreground mt-8 max-w-3xl mx-auto">
            These insights directly informed our feature engineering approach, enabling the gradient boosting ensemble 
            to capture the important effects: <span className="text-primary font-semibold">who is at work</span>, 
            <span className="text-accent font-semibold">what's for lunch</span>, and 
            <span className="text-orange-500 font-semibold">what's the weather</span> – 
            all key drivers of lunch decisions plus the innate weekly rhythm of the workplace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataInsights;