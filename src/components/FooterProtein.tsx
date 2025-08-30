"use client";

import React from "react";
import { Brain, BookOpen, Code, ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Internationalized FooterProtein component using schema:
 * t.Protein.footer = {
 *   headings: { brand },
 *   description,
 *   researchLine,
 *   buttons: { downloadReport, viewNotebook },
 *   download: { href, filename },
 *   ... (other metadata ignored in UI)
 * }
 */
const FooterProtein: React.FC = () => {
  const t = useTranslation();
  const f = t.Protein.footer;

  const handleDocumentationDownload = () => {
    const link = document.createElement("a");
    link.href = f.download.href;
    link.download = f.download.filename;
    link.click();
  };

  const handleCodeView = () => {
    window.open(
      "https://github.com/nirdidev05/HAICK_TSA/tree/protein/haick_protein",
      "_blank"
    );
  };

  return (
    <footer className="border-t border-border/40 py-8 mt-16 bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand / Description */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold flex items-center justify-center md:justify-start gap-3">
              <Brain size={24} className="text-primary animate-pulse" />
              <span className="gradient-text">{f.headings.brand}</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              {f.description}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-xs text-muted-foreground">
                {f.researchLine}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
            <button
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/20 text-primary rounded-xl hover:from-primary/20 hover:to-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              onClick={handleDocumentationDownload}
            >
              <BookOpen
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">
                {f.buttons.downloadReport}
              </span>
            </button>

            <button
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary/10 to-secondary/20 text-secondary rounded-xl hover:from-secondary/20 hover:to-secondary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/25"
              onClick={handleCodeView}
            >
              <Code
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <ExternalLink
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
              <span className="font-medium">
                {f.buttons.viewNotebook}
              </span>
            </button>
          </div>
        </div>

        {/* Footer Line */}
        <div className="mt-6 pt-4 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground">
            {f.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterProtein;