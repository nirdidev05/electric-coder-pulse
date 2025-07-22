import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Target, Zap, Code2 } from "lucide-react"

export default function CompetitionResults() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            MarketPulse: 1st Place Time Series Forecasting Solution
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            HAICK 2025 TSA Challenge - Comprehensive analysis of the winning solution
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-gold-600" />
                Competition Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">🏆 1st Place</div>
                  <div className="text-sm text-slate-600">Out of 12 competing teams</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">-0.66151</div>
                  <div className="text-sm text-slate-600">Final Competition Score</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">Team U23</div>
                  <div className="text-xs text-slate-600">
                    svoboda18, Sohaib Zouambia, Wassim Haddad, Tobni Mohamed Islam
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Challenge Context
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  • <strong>Objective:</strong> Achieve R² score {">"} 0.44
                </li>
                <li>
                  • <strong>Baseline:</strong> Starting from -0.24
                </li>
                <li>
                  • <strong>Data:</strong> Multimodal time series with prices + news
                </li>
                <li>
                  • <strong>Evaluation:</strong> Weighted R² across three targets
                </li>
                <li>
                  • <strong>Focus:</strong> Innovation in bridging quantitative and sentiment analysis
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-orange-600" />
                Winning Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Advanced Feature Engineering (100+ indicators)</li>
                <li>• Custom News Sentiment Analysis</li>
                <li>• Optuna-powered Hyperparameter Optimization</li>
                <li>• Meta-Ensemble Architecture</li>
                <li>• Cholesky Correlation Engineering</li>
                <li>• Sophisticated Post-Processing Pipeline</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Block-by-Block Implementation Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-purple-600" />
              Block-by-Block Implementation Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h4 className="font-semibold mb-4 text-slate-800">1. Kaggle-Compatible Environment Setup</h4>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
                {`!pip install -q "numpy<2.0" "scipy<1.14" "scikit-learn==1.4.2" "sentence-transformers==2.7.0"`}
              </pre>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Analysis:</strong> Demonstrates production-level dependency management with version
                  constraints ensuring Kaggle ecosystem compatibility. Prevents "works on my machine" problems by
                  explicitly defining computational environment.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-slate-800">2. AdvancedMarketPredictor Class Architecture</h4>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
                {`class AdvancedMarketPredictor:
    def __init__(self):
        print("🚀 MarketPulse: Prédicteur Avancé v3.0")
        # Configuration optimisée basée sur analyse
        self.config = {
            'gap_multipliers': {'price1': 1.28, 'price2': 1.085, 'price3': 1.22},
            'trend_factors': {'price1': 0.8, 'price2': 0.3, 'price3': 0.7},
            'correlation_targets': {'p1_p3': 0.89, 'p1_p2': -0.02, 'p2_p3': -0.25},
            'ensemble_weights': {'lgb': 0.4, 'statistical': 0.4, 'trend': 0.2}
        }`}
              </pre>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Key Innovation:</strong> Configuration dictionary encapsulates domain knowledge discovered
                  through data analysis. Correlation targets (especially p1_p3: 0.89) represent critical relationships
                  the model actively maintains.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-slate-800">3. Advanced Feature Engineering Pipeline</h4>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
                {`# Lags multiples
for lag in [1, 2, 3, 5, 7, 10, 14, 21]:
    features_df[f'{asset}_lag_{lag}'] = prices.shift(lag)

# Moving averages multiples    
for window in [3, 5, 7, 10, 14, 21, 30, 50]:
    features_df[f'{asset}_sma_{window}'] = prices.rolling(window).mean()
    features_df[f'{asset}_ema_{window}'] = prices.ewm(span=window).mean()`}
              </pre>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Technical Depth:</strong> Creates rich temporal feature space with lag features for immediate
                  dependencies, SMA/EMA for multi-horizon trends, RSI for momentum, Bollinger Bands for
                  volatility-adjusted positions, and Z-scores for statistical deviations.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-slate-800">4. Cross-Asset Relationship Features</h4>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
                {`# Ratios et spreads
features_df['p1_p2_ratio'] = features_df['price1'] / features_df['price2']
features_df['p1_p3_spread'] = features_df['price1'] - features_df['price3']

# Corrélations mobiles
for window in [10, 20, 30, 50]:
    features_df[f'p1_p3_corr_{window}'] = features_df['price1'].rolling(window).corr(features_df['price3'])`}
              </pre>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Innovation:</strong> Cross-asset features capture market microstructure, enabling the model to
                  learn how assets influence each other dynamically through ratios, spreads, and rolling correlations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
