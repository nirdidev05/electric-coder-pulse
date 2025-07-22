import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Brain } from "lucide-react"

export default function ModelingTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-purple-600" />
          2.3 Modeling Approach and Ensemble Strategy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h4 className="font-semibold mb-4 text-slate-800">Base Learner – LightGBM Models</h4>
          <p className="text-slate-700 leading-relaxed mb-4">
            Rather than a single unified model, the solution trains three separate LightGBM gradient boosting models,
            one for each price target. LightGBM was chosen for its speed and ability to handle large feature sets with
            regularization.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-sm text-slate-700 mb-3">Feature Selection</h5>
              <p className="text-xs text-slate-600 mb-3">
                For each target, univariate selection (ANOVA F-score via SelectKBest) picks the top 80 features most
                correlated with that target's movements. This trims away less relevant features, reducing noise and
                computational cost.
              </p>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-xs text-yellow-800">
                  <strong>Limitation:</strong> This method looks at features individually and may not capture
                  interactions or be fooled by highly correlated features.
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-sm text-slate-700 mb-3">Hyperparameter Tuning</h5>
              <p className="text-xs text-slate-600 mb-3">
                Optuna runs 50 trials using 3-fold rolling TimeSeriesSplit cross-validation. Tuned parameters include
                n_estimators, learning rate, max depth, num_leaves, subsample ratio, colsample_bytree, and L1/L2
                regularization.
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-xs text-green-800">
                  <strong>Advantage:</strong> Time-series CV ensures parameters generalize to later periods, mimicking
                  real-world performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-semibold mb-4 text-slate-800">Statistical Baseline Model</h4>
          <p className="text-slate-700 leading-relaxed mb-4">
            A statistical baseline forecast is generated with domain-inspired heuristics:
          </p>
          <ul className="space-y-2 text-sm text-slate-600 mb-4">
            <li>• Starts from last known price of each asset</li>
            <li>• Adds small linear trend (e.g., price1 +2.8% per day, price2 +0.1% per day)</li>
            <li>• Superimposes cyclical oscillation (sinusoidal with 60-day period)</li>
            <li>• Adds random noise with specified volatility (e.g., 1.2% daily std for price1)</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              This baseline acts like a combination of mild upward trend, seasonal cycle, and random noise, roughly
              calibrated to each asset's historical behavior. It provides a reference level and ensures forecasts don't
              drift into unrealistic territory.
            </p>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-semibold mb-4 text-slate-800">Ensemble Combination</h4>
          <p className="text-slate-700 leading-relaxed mb-4">
            The final prediction is a meta-ensemble combining LightGBM predictions and statistical baseline, weighted
            based on confidence:
          </p>
          <div className="bg-slate-50 p-4 rounded-lg mb-4">
            <pre className="text-xs text-slate-700">
              {`ml_score = (R²_model + 1) / 2  # Normalize R² to [0,1] range

if ml_score > 0.3:
    weights = 60% ML prediction, 40% baseline
elif 0 < ml_score <= 0.3:
    weights = 40% ML, 60% baseline  
else:  # ml_score == 0
    weights = 20% ML, 80% baseline`}
            </pre>
          </div>
          <p className="text-sm text-slate-600">
            This adaptive weighting acknowledges that sometimes a simple trend model might outperform a complex model on
            certain assets, so it hedges by keeping weight on the baseline while allowing ML to dominate when reliable.
          </p>
        </div>

        <Separator />

        <div>
          <h4 className="font-semibold mb-4 text-slate-800">Correlation Preservation</h4>
          <p className="text-slate-700 leading-relaxed mb-4">
            A notable innovation is post-hoc correlation adjustment. Financial assets often move with correlation, and
            predicting each independently risks unrealistic joint predictions.
          </p>
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h5 className="font-medium text-sm text-purple-800 mb-2">Cholesky Decomposition Method</h5>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs overflow-x-auto">
              {`# Ensure predicted series have desired cross-correlations
current_corr = np.corrcoef(predictions.T)          # current 3x3 corr matrix
target_corr = np.array([[1.0, -0.02, 0.89],        # desired corr: e.g. corr(p1,p3)=0.89
                        [-0.02, 1.0, -0.25], 
                        [0.89, -0.25, 1.0]])

try:
    L_cur    = np.linalg.cholesky(current_corr)    # Cholesky factor of current corr
    L_target = np.linalg.cholesky(target_corr)     # Cholesky factor of desired corr
    
    # Whiten predictions (remove current correlation)
    standardized = (predictions - predictions.mean(axis=0)) / predictions.std(axis=0)
    
    # Impose target correlation by transforming via Cholesky matrices
    adjusted = standardized @ np.linalg.inv(L_cur) @ L_target
    
    # Rescale back to original mean and std
    predictions_corrected = adjusted * predictions.std(axis=0) + predictions.mean(axis=0)
    
except np.linalg.LinAlgError:
    # Fallback: directly adjust p3 to have target corr with p1 if matrix not PD
    p1_norm = (predictions[:,0] - predictions[:,0].mean())/predictions[:,0].std()
    predictions[:,2] = predictions[:,2].mean() + target_corr[0,2] * p1_norm * predictions[:,2].std()
    predictions_corrected = predictions`}
            </pre>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Why enforce correlations?</strong> In multi-output forecasting for financial indices, maintaining
              realistic correlations is important for downstream uses like portfolio risk management. This
              post-processing trick ensures consistency with known relationships.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
