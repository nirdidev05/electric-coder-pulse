import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, FileText, Calendar, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"

export default function DataPipelineTab() {
  const dataSteps = [
    {
      icon: FileText,
      title: "Data Sources",
      color: "#646cff",
      content: `The model ingests two data files: train_prices.csv (historical prices of the 3 assets over time) and train_news.csv (news headlines with timestamps). Similarly, test_prices.csv and test_news.csv are used for generating final predictions.`
    },
    {
      icon: Calendar,
      title: "Temporal Alignment", 
      color: "#61dafb",
      content: `A crucial preprocessing step is aligning intraday news with daily price data. The approach simplifies this by aggregating news by date. All news events are truncated to their date (ignoring intra-day time) and grouped so that each trading day is associated with the news headlines of that day.`
    },
    {
      icon: TrendingDown,
      title: "Missing Data Handling",
      color: "#646cff", 
      content: `The price data may contain missing values (non-trading days, etc.), which are handled via forward-fill (fillna(method='ffill')) to propagate the last known price. This is done for each asset series to maintain continuity.`
    },
    {
      icon: Database,
      title: "Feature Matrix Assembly",
      color: "#61dafb",
      content: `After filling missing prices, the code constructs a comprehensive feature DataFrame indexed by date. News data is merged on the date, meaning each day's row contains both technical features (from prices) and aggregated news features for that day. Any days with no news default to neutral values (e.g. sentiment = 0).`
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card 
        className="border-0 shadow-2xl backdrop-blur-sm"
        style={{ 
          background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 100%)',
          border: '1px solid rgba(100, 108, 255, 0.3)'
        }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-3 rounded-xl" style={{ backgroundColor: '#646cff20' }}>
              <Database className="h-8 w-8" style={{ color: '#646cff' }} />
            </div>
            <span className="text-white">2.1 Data Pipeline and Preprocessing</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {dataSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: step.color + '20' }}>
                    <Icon className="h-6 w-6" style={{ color: step.color }} />
                  </div>
                  <h4 className="font-semibold text-xl text-white">{step.title}</h4>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-4">
                  {step.content}
                </p>
                
                {/* Special content for each step */}
                {step.title === "Temporal Alignment" && (
                  <div className="p-4 rounded-lg" style={{ background: 'rgba(97, 218, 251, 0.1)', border: '1px solid rgba(97, 218, 251, 0.2)' }}>
                    <p className="text-sm" style={{ color: '#61dafb' }}>
                      <strong>Technical Note:</strong> This means the model operates at a daily frequency for both prices and
                      news-derived features. While this loses intraday nuance, it ensures clear alignment where each day's price
                      change relates to that day's news sentiment.
                    </p>
                  </div>
                )}
                
                {step.title === "Missing Data Handling" && (
                  <div className="p-4 rounded-lg" style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid rgba(255, 193, 7, 0.2)' }}>
                    <p className="text-sm text-yellow-300">
                      <strong>Trade-off:</strong> Forward-filling assumes no drastic change during short gaps, introducing
                      slight bias but preferable to leaving holes or dropping data.
                    </p>
                  </div>
                )}
                
                {index === 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {['train_prices.csv', 'train_news.csv', 'test_prices.csv', 'test_news.csv'].map((file, i) => (
                      <code 
                        key={i}
                        className="px-3 py-1 rounded text-sm font-mono border"
                        style={{ 
                          backgroundColor: 'rgba(100, 108, 255, 0.1)',
                          color: '#646cff',
                          borderColor: 'rgba(100, 108, 255, 0.3)'
                        }}
                      >
                        {file}
                      </code>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </CardContent>
      </Card>
    </motion.div>
  )
}