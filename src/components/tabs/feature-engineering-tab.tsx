import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Zap, LineChart, GitBranch, MessageSquare, TrendingUp, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export default function FeatureEngineeringTab() {
  const technicalIndicators = [
    {
      title: "Lagged Prices",
      description: "Previous values at lags of 1, 2, 3, 5, 7, 10, 14, and 21 days capturing short-term momentum or mean reversion patterns."
    },
    {
      title: "Moving Averages", 
      description: "Rolling SMA and EMA over windows of 3, 5, 7, 10, 14, 21, 30, 50 days, capturing trends on different scales."
    },
    {
      title: "Returns",
      description: "Percentage price change over 1, 2, 3, 5, 7, 10, 14, 21 days expressing momentum in percentage terms."
    },
    {
      title: "Volatility",
      description: "Rolling standard deviation of daily returns over 5, 10, 20, 30 days, with annualized version (std * sqrt(252))."
    },
    {
      title: "Momentum & Oscillators",
      description: "Momentum over 7, 14, 21 days and RSI over those windows providing overbought/oversold conditions."
    },
    {
      title: "Bollinger Bands",
      description: "20-day and 30-day bands (±2 std dev) and relative position within bands indicating price extremes."
    },
    {
      title: "Z-scores",
      description: "Standard deviations from mean over 20, 50, 100 days capturing how unusual current price is."
    },
    {
      title: "Trend Slope",
      description: "Linear regression slope over 10, 20, 30 days estimating trend speed with robustness to noise."
    }
  ]

  const crossAssetFeatures = [
    {
      title: "Price Ratios",
      description: "Ratios of each pair (price1/price2, price1/price3, price2/price3) reflecting relative value disparities."
    },
    {
      title: "Spreads",
      description: "Pairwise differences (price1 - price2, etc.) giving absolute spread perspective."
    },
    {
      title: "Rolling Correlations",
      description: "Moving window Pearson correlations between asset pairs over 10, 20, 30, 50-day windows."
    },
    {
      title: "Portfolio Index",
      description: "Synthetic portfolio = 0.4×price1 + 0.3×price2 + 0.3×price3 capturing combined market movement."
    },
    {
      title: "Dominance",
      description: "Fraction of total value contributed by each asset measuring relative size changes over time."
    }
  ]

  const sentimentFeatures = [
    {
      title: "Daily Sentiment Score",
      description: "Average sentiment of headlines, passed through tanh and clipped to [-0.3, 0.3] as proxy for daily news mood."
    },
    {
      title: "News Volume & Urgency",
      description: "Count of news items (capped at 100) and highly polarized news (sentiment magnitude > 0.5, capped at 20)."
    },
    {
      title: "Sentiment Volatility",
      description: "Standard deviation of headline sentiment scores measuring disagreement or mixed news."
    },
    {
      title: "Rolling Averages",
      description: "3-day, 7-day, 14-day moving averages and std dev of sentiment and volume reflecting short-term trends."
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
          background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.08) 0%, rgba(100, 108, 255, 0.08) 100%)',
          border: '1px solid rgba(97, 218, 251, 0.3)'
        }}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="p-3 rounded-xl" style={{ backgroundColor: '#61dafb20' }}>
              <Zap className="h-8 w-8" style={{ color: '#61dafb' }} />
            </div>
            <span className="text-white">2.2 Feature Engineering</span>
          </CardTitle>
          <CardDescription className="text-slate-300 text-lg mt-4">
            The solution invests heavily in feature engineering, constructing over 100 features capturing technical
            trends, cross-asset relations, temporal cycles, and news sentiment signals.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-12">
          {/* Technical Indicators Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                <LineChart className="h-6 w-6" style={{ color: '#646cff' }} />
              </div>
              <h4 className="font-semibold text-xl text-white">Technical Indicators (per asset)</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {technicalIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="p-4 rounded-lg bg-slate-800/20 border border-slate-700/30 hover:bg-slate-800/30 transition-all duration-300"
                >
                  <h5 className="font-medium text-sm mb-2" style={{ color: '#646cff' }}>
                    {indicator.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {indicator.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Separator className="bg-slate-700/50" />

          {/* Cross-Asset Features Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#61dafb20' }}>
                <GitBranch className="h-6 w-6" style={{ color: '#61dafb' }} />
              </div>
              <h4 className="font-semibold text-xl text-white">Cross-Asset Features</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {crossAssetFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="p-4 rounded-lg bg-slate-800/20 border border-slate-700/30 hover:bg-slate-800/30 transition-all duration-300"
                >
                  <h5 className="font-medium text-sm mb-2" style={{ color: '#61dafb' }}>
                    {feature.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Separator className="bg-slate-700/50" />

          {/* News Sentiment Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                <MessageSquare className="h-6 w-6" style={{ color: '#646cff' }} />
              </div>
              <h4 className="font-semibold text-xl text-white">News Sentiment Features</h4>
            </div>
            
            <div className="space-y-6">
              {/* Dictionary-Based Sentiment Scoring */}
              <div className="p-6 rounded-xl border border-slate-700/30" style={{ background: 'rgba(100, 108, 255, 0.05)' }}>
                <h5 className="font-medium text-lg mb-4" style={{ color: '#646cff' }}>
                  Dictionary-Based Sentiment Scoring
                </h5>
                <pre 
                  className="p-6 rounded-lg text-xs overflow-x-auto border border-slate-700/50 mb-4"
                  style={{ backgroundColor: '#1E1E2F', color: '#E2E8F0' }}
                >
{`sentiment_dict = {
    'very_positive': ['soar', 'boom', 'surge', 'rally', 'breakout', 'stellar'],
    'positive':      ['gain', 'rise', 'up', 'profit', 'strong', 'beat', 'outperform'],
    'neutral':       ['stable', 'flat', 'unchanged', 'steady', 'hold'],
    'negative':      ['fall', 'drop', 'down', 'loss', 'weak', 'miss', 'underperform'],
    'very_negative': ['crash', 'plummet', 'collapse', 'disaster', 'panic']
}
weights = {'very_positive': 2, 'positive': 1, 'neutral': 0, 
           'negative': -1, 'very_negative': -2}

for date in sorted(news_df['Date_only'].unique()):
    day_news = news_df[news_df['Date_only'] == date]['News'].astype(str)
    sentiments = []
    for text in day_news.head(200):   # limit to 200 headlines per day
        text_lower = text.lower()
        sentiment_score = 0; word_count = 0
        for category, words in sentiment_dict.items():
            matches = sum(1 for word in words if word in text_lower)
            sentiment_score += matches * weights[category]
            word_count     += matches
        sentiments.append(sentiment_score/word_count if word_count>0 else 0)
    
    # Aggregate daily metrics:
    daily_sentiment = np.tanh(np.mean(sentiments)) if sentiments else 0
    daily_features = {
        'news_sentiment': np.clip(daily_sentiment, -0.3, 0.3),
        'news_volume': min(len(day_news), 100),
        'news_urgency': min(sum(abs(s)>0.5 for s in sentiments), 20),
        'news_sentiment_volatility': np.std(sentiments) if len(sentiments)>1 else 0,
        'news_positive_ratio': len([s for s in sentiments if s>0]) / max(len(sentiments),1)
    }`}
                </pre>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {sentimentFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/30"
                    >
                      <h6 className="font-medium text-sm mb-2" style={{ color: '#61dafb' }}>
                        {feature.title}
                      </h6>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}