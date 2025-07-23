import { Code, BookOpen, Database, BarChart3, Globe, Mail, Linkedin, Github } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function ConclusionSection() {
  const t = useTranslation();
  const conclusionData = t.MarketPulseContentType.conclusion;

  const iconMap = {
    [conclusionData.features[0]?.text]: Database,
    [conclusionData.features[1]?.text]: BarChart3,
    [conclusionData.features[2]?.text]: Globe
  };

  const features = (conclusionData.features || []).map(feature => ({
    ...feature,
    icon: iconMap[feature.text] || Database
  }));

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-8">
          {/* Left: About Project & Developer */}
          <div className="w-full md:w-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {conclusionData.title}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              {conclusionData.description}
            </p>
            
            {/* Project Features */}
            <div className="flex flex-col sm:flex-row items-start gap-6 text-sm text-muted-foreground mb-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{feature.text}</span>
                  </div>
                );
              })}
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
                <span>{conclusionData.actions.documentation}</span>
              </a>
              <a
                href="https://github.com/nirdidev05/HAICK_TSA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors"
              >
                <Code size={16} />
                <span>{conclusionData.actions.sourceCode}</span>
              </a>
            </div>

            {/* Professional Contact */}
           
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="border-t border-border/50 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {conclusionData.attribution.copyright} 
            <span className="font-medium text-foreground ml-1">{conclusionData.attribution.achievement}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {conclusionData.attribution.showcase}
          </p>
        </div>
      </div>
    </footer>
  )
}