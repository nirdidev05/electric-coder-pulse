import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database } from "lucide-react"

export default function DataPipelineTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-6 w-6 text-blue-600" />
          2.1 Data Pipeline and Preprocessing
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3 text-slate-800">Data Sources</h4>
          <p className="text-slate-700 leading-relaxed mb-4">
            The model ingests two data files:{" "}
            <code className="bg-slate-100 px-2 py-1 rounded text-sm">train_prices.csv</code>
            (historical prices of the 3 assets over time) and{" "}
            <code className="bg-slate-100 px-2 py-1 rounded text-sm">train_news.csv</code>
            (news headlines with timestamps). Similarly,{" "}
            <code className="bg-slate-100 px-2 py-1 rounded text-sm">test_prices.csv</code>
            and <code className="bg-slate-100 px-2 py-1 rounded text-sm">test_news.csv</code> are used for generating
            final predictions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-800">Temporal Alignment</h4>
          <p className="text-slate-700 leading-relaxed mb-4">
            A crucial preprocessing step is aligning intraday news with daily price data. The approach simplifies this
            by aggregating news by date. All news events are truncated to their date (ignoring intra-day time) and
            grouped so that each trading day is associated with the news headlines of that day.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Technical Note:</strong> This means the model operates at a daily frequency for both prices and
              news-derived features. While this loses intraday nuance, it ensures clear alignment where each day's price
              change relates to that day's news sentiment.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-800">Missing Data Handling</h4>
          <p className="text-slate-700 leading-relaxed mb-4">
            The price data may contain missing values (non-trading days, etc.), which are handled via forward-fill (
            <code className="bg-slate-100 px-2 py-1 rounded text-sm">fillna(method='ffill')</code>) to propagate the
            last known price. This is done for each asset series to maintain continuity.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Trade-off:</strong> Forward-filling assumes no drastic change during short gaps, introducing
              slight bias but preferable to leaving holes or dropping data.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-800">Feature Matrix Assembly</h4>
          <p className="text-slate-700 leading-relaxed">
            After filling missing prices, the code constructs a comprehensive feature DataFrame indexed by date. News
            data is merged on the date, meaning each day's row contains both technical features (from prices) and
            aggregated news features for that day. Any days with no news default to neutral values (e.g. sentiment = 0).
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
