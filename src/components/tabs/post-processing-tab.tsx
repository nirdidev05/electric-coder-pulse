import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Settings } from "lucide-react"

export default function PostProcessingTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-6 w-6 text-orange-600" />
          2.4 Post-Processing of Predictions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-4 text-slate-800">Smoothening with Savitzky–Golay Filter</h4>
          <p className="text-slate-700 leading-relaxed mb-4">
            Raw predictions might be noisy with day-to-day zig-zags. To reduce high-frequency noise, a Savitzky-Golay
            filter is applied to each predicted series. This filter fits a low-degree polynomial to a sliding window and
            produces smoothed values.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium text-sm text-blue-800 mb-2">Filter Parameters</h5>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• Window: up to 11 days</li>
                <li>• Polynomial degree: 3</li>
                <li>• Blending: 70% smoothed + 30% original</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-medium text-sm text-green-800 mb-2">Benefits</h5>
              <ul className="text-xs text-green-700 space-y-1">
                <li>• Preserves trend features better than simple MA</li>
                <li>• Reduces jagged day-to-day variation</li>
                <li>• Maintains overall shape (peaks and troughs)</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-semibold mb-4 text-slate-800">Volatility Capping</h4>
          <p className="text-slate-700 leading-relaxed mb-4">
            Daily returns of predictions are analyzed for volatility. If predicted series is excessively volatile ({">"}{" "}
            5% standard deviation of daily returns), it is scaled down.
          </p>
          <div className="bg-orange-50 p-4 rounded-lg mb-4">
            <h5 className="font-medium text-sm text-orange-800 mb-2">Volatility Control Process</h5>
            <pre className="bg-slate-900 text-slate-100 p-3 rounded text-xs">
              {`if predicted_volatility > 0.05:  # 5% daily max
    scaling_factor = 0.05 / predicted_volatility
    # Apply factor to return deviations
    # First day price remains same, subsequent days recomputed from scaled returns`}
            </pre>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Trade-off:</strong> Slightly sacrifices some short-term variability (likely unpredictable anyway)
              for cleaner, more credible forecast trajectory. Prevents unrealistic scenarios like stocks doubling in one
              week from pure noise.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-800">Impact Summary</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h5 className="font-medium text-sm text-slate-700 mb-2">Smoothing Results</h5>
              <p className="text-xs text-slate-600">
                Eliminates high-frequency noise while preserving meaningful trend components for evaluation focus.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h5 className="font-medium text-sm text-slate-700 mb-2">Volatility Results</h5>
              <p className="text-xs text-slate-600">
                ~30% volatility reduction for most volatile series, bringing daily vol from ~6% to ~4.2% for realistic
                behavior.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
