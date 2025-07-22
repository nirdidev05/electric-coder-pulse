import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Zap, LineChart, GitBranch, MessageSquare } from "lucide-react"

export default function FeatureEngineeringTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-green-600" />
          2.2 Feature Engineering
        </CardTitle>
        <CardDescription>
          The solution invests heavily in feature engineering, constructing over 100 features capturing technical
          trends, cross-asset relations, temporal cycles, and news sentiment signals.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h4 className="font-semibold mb-4 text-slate-800 flex items-center gap-2">
            <LineChart className="h-5 w-5 text-blue-600" />
            Technical Indicators (per asset)
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Lagged Prices</h5>
                <p className="text-xs text-slate-600">
                  Previous values at lags of 1, 2, 3, 5, 7, 10, 14, and 21 days capturing short-term momentum or mean
                  reversion patterns.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Moving Averages</h5>
                <p className="text-xs text-slate-600">
                  Rolling SMA and EMA over windows of 3, 5, 7, 10, 14, 21, 30, 50 days, capturing trends on different
                  scales.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Returns</h5>
                <p className="text-xs text-slate-600">
                  Percentage price change over 1, 2, 3, 5, 7, 10, 14, 21 days expressing momentum in percentage terms.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Volatility</h5>
                <p className="text-xs text-slate-600">
                  Rolling standard deviation of daily returns over 5, 10, 20, 30 days, with annualized version (std *
                  sqrt(252)).
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Momentum & Oscillators</h5>
                <p className="text-xs text-slate-600">
                  Momentum over 7, 14, 21 days and RSI over those windows providing overbought/oversold conditions.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Bollinger Bands</h5>
                <p className="text-xs text-slate-600">
                  20-day and 30-day bands (±2 std dev) and relative position within bands indicating price extremes.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Z-scores</h5>
                <p className="text-xs text-slate-600">
                  Standard deviations from mean over 20, 50, 100 days capturing how unusual current price is.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Trend Slope</h5>
                <p className="text-xs text-slate-600">
                  Linear regression slope over 10, 20, 30 days estimating trend speed with robustness to noise.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-semibold mb-4 text-slate-800 flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-purple-600" />
            Cross-Asset Features
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Price Ratios</h5>
                <p className="text-xs text-slate-600">
                  Ratios of each pair (price1/price2, price1/price3, price2/price3) reflecting relative value
                  disparities.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Spreads</h5>
                <p className="text-xs text-slate-600">
                  Pairwise differences (price1 - price2, etc.) giving absolute spread perspective.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Rolling Correlations</h5>
                <p className="text-xs text-slate-600">
                  Moving window Pearson correlations between asset pairs over 10, 20, 30, 50-day windows.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Portfolio Index</h5>
                <p className="text-xs text-slate-600">
                  Synthetic portfolio = 0.4×price1 + 0.3×price2 + 0.3×price3 capturing combined market movement.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Dominance</h5>
                <p className="text-xs text-slate-600">
                  Fraction of total value contributed by each asset measuring relative size changes over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-semibold mb-4 text-slate-800 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-orange-600" />
            News Sentiment Features
          </h4>
          <div className="space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-medium text-sm text-orange-800 mb-2">Dictionary-Based Sentiment Scoring</h5>
              <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg text-xs overflow-x-auto">
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
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Daily Sentiment Score</h5>
                <p className="text-xs text-slate-600">
                  Average sentiment of headlines, passed through tanh and clipped to [-0.3, 0.3] as proxy for daily news
                  mood.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">News Volume & Urgency</h5>
                <p className="text-xs text-slate-600">
                  Count of news items (capped at 100) and highly polarized news (sentiment magnitude {">"} 0.5, capped
                  at 20).
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Sentiment Volatility</h5>
                <p className="text-xs text-slate-600">
                  Standard deviation of headline sentiment scores measuring disagreement or mixed news.
                </p>
              </div>
              <div>
                <h5 className="font-medium text-sm text-slate-700 mb-2">Rolling Averages</h5>
                <p className="text-xs text-slate-600">
                  3-day, 7-day, 14-day moving averages and std dev of sentiment and volume reflecting short-term trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
