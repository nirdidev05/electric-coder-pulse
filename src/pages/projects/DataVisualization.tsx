import { motion } from "framer-motion";
import {
  ArrowLeft, BarChart3, Database,BookOpen, Globe, TrendingUp, Zap, Activity, Code, Users, Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const DataVisualization = () => {
  const t = useTranslation();

  const codeExamples = [
    {
      title: t.renewable.codeExamples.examples.dataScraping.title,
      description: t.renewable.codeExamples.examples.dataScraping.description,
      code: `class DataScraper:
    """Handle web scraping operations for renewable energy data."""
    
    def __init__(self):
        self.session = requests.Session()
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }

    def fetch_irena_data(self, country: str, year: int) -> Dict:
        """Fetch data from IRENA (International Renewable Energy Agency)."""
        base_url = "https://www.irena.org/Statistics/View-Data-by-Topic"
        try:
            response = self.session.get(f"{base_url}?country={country}&year={year}", 
                                      headers=self.headers)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, 'html.parser')
            
            data = {
                'solar_capacity': self._parse_value(soup.find('div', {'id': 'solar-capacity'})),
                'wind_capacity': self._parse_value(soup.find('div', {'id': 'wind-capacity'})),
                'hydro_capacity': self._parse_value(soup.find('div', {'id': 'hydro-capacity'}))
            }
            return data
        except requests.exceptions.RequestException as e:
            logging.error(f"Error fetching IRENA data: {str(e)}")
            return {}`
    },
    
    {
      title: t.renewable.codeExamples.examples.advancedAnalytics.title,
      description: t.renewable.codeExamples.examples.advancedAnalytics.description,
      code: `def analyze_trends(self) -> Tuple[pd.DataFrame, Dict]:
    """Perform advanced trend analysis including statistical tests and clustering."""
    df = pd.DataFrame([vars(item) for item in self.data])
    
    # Basic trend analysis
    df_grouped = df.groupby(['country', 'year']).agg({
        'total_renewable': 'sum',
        'solar_capacity': 'sum',
        'wind_capacity': 'sum',
        'hydro_capacity': 'sum',
        'carbon_offset': 'sum',
        'investment_usd': 'sum',
        'efficiency_ratio': 'mean',
        'implementation_cost': 'mean'
    }).reset_index()

    # Perform clustering analysis
    scaler = StandardScaler()
    features = ['total_renewable', 'efficiency_ratio', 'implementation_cost']
    scaled_features = scaler.fit_transform(df_grouped[features])
    
    kmeans = KMeans(n_clusters=3, random_state=42)
    df_grouped['cluster'] = kmeans.fit_predict(scaled_features)
    
    # Statistical tests
    analysis_results['correlation_matrix'] = df_grouped[features].corr()
    
    return df_grouped, analysis_results`
    },
    {
      title: t.renewable.codeExamples.examples.interactive3DVisualizations.title,
      description: t.renewable.codeExamples.examples.interactive3DVisualizations.description,
       code: `def generate_visualizations(self, df: pd.DataFrame, analysis_results: Dict) -> None:
    """Generate advanced visualizations."""
    os.makedirs('visualizations', exist_ok=True)
    
    # 1. Interactive 3D Scatter Plot
    fig_3d = px.scatter_3d(df, 
                          x='total_renewable', 
                          y='efficiency_ratio', 
                          z='implementation_cost',
                          color='country',
                          size='investment_usd',
                          animation_frame='year',
                          title='Renewable Energy Metrics - 3D View')
    fig_3d.write_html('visualizations/3d_analysis.html')

    # 2. Advanced Heatmap with Multiple Metrics
    fig_heatmap = go.Figure(data=go.Heatmap(
        z=analysis_results['correlation_matrix'],
        x=analysis_results['correlation_matrix'].columns,
        y=analysis_results['correlation_matrix'].columns,
        colorscale='Viridis'))
    fig_heatmap.update_layout(title='Correlation Matrix of Key Metrics')
    fig_heatmap.write_html('visualizations/correlation_heatmap.html')`
    }
  ];

  const features = [
    {
      icon: Database,
      title: t.renewable.features.items.multiSourceDataIntegration.title,
      description: t.renewable.features.items.multiSourceDataIntegration.description,
      metrics: t.renewable.features.items.multiSourceDataIntegration.metrics
    },
    {
      icon: BarChart3,
      title: t.renewable.features.items.advancedAnalyticsEngine.title,
      description: t.renewable.features.items.advancedAnalyticsEngine.description,
      metrics: t.renewable.features.items.advancedAnalyticsEngine.metrics
    },
    {
      icon: Globe,
      title: t.renewable.features.items.interactive3DVisualizations.title,
      description: t.renewable.features.items.interactive3DVisualizations.description,
      metrics: t.renewable.features.items.interactive3DVisualizations.metrics
    },
    {
      icon: TrendingUp,
      title: t.renewable.features.items.businessIntelligenceSuite.title,
      description: t.renewable.features.items.businessIntelligenceSuite.description,
      metrics: t.renewable.features.items.businessIntelligenceSuite.metrics
    }
  ];

  const metrics = [
    { label: t.renewable.hero.metrics.countriesAnalyzed, value: t.renewable.heroMetricValues.countriesAnalyzed, icon: Globe },
    { label: t.renewable.hero.metrics.dataPointsProcessed, value: t.renewable.heroMetricValues.dataPointsProcessed, icon: Database },
    { label: t.renewable.hero.metrics.yearsOfHistoricalData, value: t.renewable.heroMetricValues.yearsOfHistoricalData, icon: Clock },
    { label: t.renewable.hero.metrics.interactiveVisualizations, value: t.renewable.heroMetricValues.interactiveVisualizations, icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.renewable.navigation.backToProjects}
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-green-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <Zap className="w-8 h-8 text-emerald-500" />
              <span className="bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/20">
                {t.renewable.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-clip-text text-transparent mb-8 leading-tight"
            >
              {t.renewable.hero.title}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
            >
              {t.renewable.hero.description}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Overview */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.renewable.projectOverview.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.renewable.projectOverview.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">{t.renewable.projectOverview.missionTitle}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t.renewable.projectOverview.missionDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[t.renewable.projectOverview.tags.dataIntegration, t.renewable.projectOverview.tags.machineLearning, t.renewable.projectOverview.tags.visualization3D, t.renewable.projectOverview.tags.businessIntelligence].map((tag) => (
                    <span key={tag} className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl font-bold text-foreground mb-6">{t.renewable.projectOverview.keyCapabilitiesTitle}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{t.renewable.projectOverview.capabilities.multiSourceIntegration.title}</h4>
                      <p className="text-sm text-muted-foreground">{t.renewable.projectOverview.capabilities.multiSourceIntegration.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{t.renewable.projectOverview.capabilities.advancedAnalytics.title}</h4>
                      <p className="text-sm text-muted-foreground">{t.renewable.projectOverview.capabilities.advancedAnalytics.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{t.renewable.projectOverview.capabilities.interactiveVisualizations.title}</h4>
                      <p className="text-sm text-muted-foreground">{t.renewable.projectOverview.capabilities.interactiveVisualizations.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.renewable.features.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.renewable.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.metrics.map((metric, metricIndex) => (
                    <span key={metricIndex} className="bg-muted/50 text-muted-foreground px-3 py-1 rounded-full text-sm">
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Code Examples */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.renewable.codeExamples.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.renewable.codeExamples.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden"
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="w-5 h-5 text-emerald-500" />
                    <h3 className="text-xl font-bold text-foreground">{example.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{example.description}</p>
                </div>
                <div className="bg-muted/30 p-6 overflow-x-auto">
                  <pre className="text-sm text-muted-foreground">
                    <code className="language-python">{example.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

       {/* Architecture Overview */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.renewable.architecture.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.renewable.architecture.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">{t.renewable.architecture.dataProcessingPipeline.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-500 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{t.renewable.architecture.dataProcessingPipeline.steps.dataCollection.title}</h4>
                      <p className="text-sm text-muted-foreground">{t.renewable.architecture.dataProcessingPipeline.steps.dataCollection.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-purple-500 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{t.renewable.architecture.dataProcessingPipeline.steps.dataProcessing.title}</h4>
                      <p className="text-sm text-muted-foreground">{t.renewable.architecture.dataProcessingPipeline.steps.dataProcessing.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-emerald-500 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{t.renewable.architecture.dataProcessingPipeline.steps.analyticsEngine.title}</h4>
                      <p className="text-sm text-muted-foreground">{t.renewable.architecture.dataProcessingPipeline.steps.analyticsEngine.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-orange-500 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{t.renewable.architecture.dataProcessingPipeline.steps.visualization.title}</h4>
                      <p className="text-sm text-muted-foreground">{t.renewable.architecture.dataProcessingPipeline.steps.visualization.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-500/20">
                <h3 className="text-xl font-bold text-foreground mb-6">{t.renewable.architecture.technologyStack.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.values(t.renewable.architecture.technologyStack.technologies).map((tech, index) => (
                    <div key={index} className="bg-card/50 rounded-lg p-3">
                      <div className="font-semibold text-foreground text-sm">{tech.name}</div>
                      <div className="text-xs text-muted-foreground">{tech.type}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-6">{t.renewable.architecture.performanceMetrics.title}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t.renewable.performanceValues.dataProcessingSpeed}</span>
                    <span className="text-foreground font-semibold">{t.renewable.performanceValues.dataProcessingSpeed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t.renewable.performanceValues.visualizationRendering}</span>
                    <span className="text-foreground font-semibold">{t.renewable.performanceValues.visualizationRendering}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t.renewable.performanceValues.concurrentUsers}</span>
                    <span className="text-foreground font-semibold">{t.renewable.performanceValues.concurrentUsers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{t.renewable.performanceValues.systemUptime}</span>
                    <span className="text-foreground font-semibold">{t.renewable.performanceValues.systemUptime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Results & Impact */}
        {/* Results & Impact */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.renewable.results.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.renewable.results.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t.renewable.results.sections.growthAnalysis.title}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.renewable.growthValues.globalRenewableCapacity}</span>
                  <span className="text-emerald-500 font-semibold">{t.renewable.growthValues.globalRenewableCapacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.renewable.growthValues.solarEnergyExpansion}</span>
                  <span className="text-emerald-500 font-semibold">{t.renewable.growthValues.solarEnergyExpansion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.renewable.growthValues.windPowerGrowth}</span>
                  <span className="text-emerald-500 font-semibold">{t.renewable.growthValues.windPowerGrowth}</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t.renewable.results.sections.userEngagement.title}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.renewable.userEngagementValues.platformUsers}</span>
                  <span className="text-blue-500 font-semibold">{t.renewable.userEngagementValues.platformUsers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.renewable.userEngagementValues.monthlyActiveUsers}</span>
                  <span className="text-blue-500 font-semibold">{t.renewable.userEngagementValues.monthlyActiveUsers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.renewable.userEngagementValues.userSatisfaction}</span>
                  <span className="text-blue-500 font-semibold">{t.renewable.userEngagementValues.userSatisfaction}</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t.renewable.results.sections.carbonImpact.title}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.renewable.carbonImpactValues.co2OffsetTracked}</span>
                  <span className="text-purple-500 font-semibold">{t.renewable.carbonImpactValues.co2OffsetTracked}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.renewable.carbonImpactValues.countriesAnalyzed}</span>
                  <span className="text-purple-500 font-semibold">{t.renewable.carbonImpactValues.countriesAnalyzed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t.renewable.carbonImpactValues.investmentTracked}</span>
                  <span className="text-purple-500 font-semibold">{t.renewable.carbonImpactValues.investmentTracked}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
     <footer className="bg-muted/30 border-t border-border">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-8">
      {/* Left: Text */}
      <div className="w-full md:w-auto">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          {t.renewable.footer.title}
        </h3>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          {t.renewable.footer.description}
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            <span>{t.renewable.footer.features.multiSourceDataIntegration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            <span>{t.renewable.footer.features.advancedAnalyticsEngine}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>{t.renewable.footer.features.globalRenewableEnergyFocus}</span>
          </div>
        </div>
      </div>
      {/* Right: Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-end">
        {/* Documentation button */}
        <a
          href="/public/Renewable Energy Data Portfolio_ Technical, Business, and Environmental Insights.pdf"
          download
          className="text-sm flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
        >
          <BookOpen size={16} />
          <span>{t.gan.footer.documentation}</span>
        </a>
        {/* Code Source button */}
        <a
          href="https://github.com/nirdidev05/data_walid/tree/master"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors"
        >
          <Code size={16} />
          <span>{t.gan.footer.sourceCode}</span>
        </a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default DataVisualization;
