import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 min-h-[60vh] flex flex-col">
      {/* BACK TO PROJECTS NAV */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-blue-400 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex-1 px-4 py-16 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="text-center">
          {/* Modern badge, blue/gray theme */}
          <Badge className="mb-4 bg-blue-700/10 text-blue-300 border-blue-400/30 px-4 py-2 font-medium text-base">
            {/* Optionally, place something else here or remove */}
            MarketPulse | AI Market Forecasting
          </Badge>
          {/* GRADIENT TITLE with motion */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-slate-300 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
            style={{
              letterSpacing: "-0.03em"
            }}
          >
            MarketPulse: Multimodal Market Forecasting with News
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-lg md:text-2xl text-blue-200 mb-4"
          >
            Technical Analysis & Implementation
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-base md:text-lg text-slate-300 max-w-4xl mx-auto mb-8"
          >
            A comprehensive analysis of the MarketPulse system combining advanced feature engineering, ensemble methods, and news sentiment analysis to achieve <span className="font-semibold text-blue-400">R² improvement to the best one</span>.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
