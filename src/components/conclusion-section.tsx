import { Code, BookOpen, Database, BarChart3, Globe, Mail, Linkedin, Github } from "lucide-react"

export default function ConclusionSection() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-8">
          {/* Left: About Project & Developer */}
          <div className="w-full md:w-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              MarketPulse v3.0: AI-Driven Financial Forecasting
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Championship-winning multimodal AI system combining advanced machine learning with financial domain expertise. 
              Developed as part of my AI/ML portfolio, demonstrating production-ready architecture and research innovation.
            </p>
            
            {/* Project Features */}
            <div className="flex flex-col sm:flex-row items-start gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span>Multimodal Feature Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>Advanced Ensemble Methods</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Production-Ready System</span>
              </div>
            </div>

            {/* Developer Info */}
            
          </div>

          {/* Right: Actions & Contact */}
          <div className="flex flex-col gap-6 w-full md:w-auto justify-end">
            {/* Project Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/MarketPulse Report.pdf"
                download
                className="text-sm flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
              >
                <BookOpen size={16} />
                <span>Technical Documentation</span>
              </a>
              <a
                href="https://github.com/nirdidev05/HAICK_TSA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors"
              >
                <Code size={16} />
                <span>View Source Code</span>
              </a>
            </div>

            {/* Professional Contact */}
           
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="border-t border-border/50 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 AI/ML Portfolio Project • MarketPulse v3.0 • 
            <span className="font-medium text-foreground ml-1">HAICK 2025 TSA Challenge Winner</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Showcasing advanced financial AI research and production ML engineering capabilities
          </p>
        </div>
      </div>
    </footer>
  )
}