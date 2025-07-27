// components/Footer.tsx
"use client"
import React from 'react';
import { Brain, BookOpen, Code, Target } from "lucide-react"

const Footer: React.FC = () => {
  const handleDocumentationDownload = () => {
    const link = document.createElement("a")
    link.href = "/Meal Count Forecasting Model for BNP Paribas Cafeteria.pdf"
    link.download = "BNP_Paribas_Meal_Forecasting_Report.pdf"
    link.click()
  }

  const handleCodeNavigation = () => {
    window.open("https://github.com/nirdidev05/ADC_timeseriesRegression", "_blank")
  }

  return (
    <footer className="border-t py-8 mt-12 bg-background/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Brain size={20} className="text-primary" />
              <span>BNP Paribas Meal Forecasting</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Advanced machine learning solution achieving 94.5% accuracy for cafeteria demand forecasting
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-4">
              <span>RMSE: 21.87 meals</span>
              <span>•</span>
              <span>18 months training data</span>
              <span>•</span>
              <span>60+ engineered features</span>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="text-sm flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
              onClick={handleDocumentationDownload}
            >
              <BookOpen size={16} />
              <span>Documentation</span>
            </button>
            <button
              className="text-sm flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors"
              onClick={handleCodeNavigation}
            >
              <Code size={16} />
              <span>Source Code</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;