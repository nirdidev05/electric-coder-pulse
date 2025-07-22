import { Button } from "@/components/ui/button"
import { Mail, GitBranch } from "lucide-react"

export default function ConclusionSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          The MarketPulse v3.0 solution demonstrates how combining domain expertise, advanced feature engineering, and
          sophisticated ensemble methods can achieve superior performance in financial time series forecasting. Our 1st
          place finish with a score of -0.66151 validates the effectiveness of multimodal approaches to market
          prediction.
        </p>
        <p className="text-slate-400 mb-8">
          This comprehensive technical analysis showcases the intersection of AI, finance, and multimodal learning,
          pushing the boundaries of what's possible in market forecasting through innovative methodology and rigorous
          implementation.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            <Mail className="mr-2 h-5 w-5" />
            Contact for Collaboration
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-400 text-purple-300 hover:bg-purple-500/10 bg-transparent"
          >
            <GitBranch className="mr-2 h-5 w-5" />
            View Implementation
          </Button>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-400 text-sm">
            MarketPulse: Multimodal Market Forecasting with News | 1st Place HAICK 2025 TSA Challenge
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Technical Analysis & Implementation | Team U23 | Advanced AI/ML Portfolio Showcase
          </p>
        </div>
      </div>
    </section>
  )
}
