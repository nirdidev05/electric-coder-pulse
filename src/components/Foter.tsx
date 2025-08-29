import React from 'react';
import { BrainIcon, CodeIcon } from './CustomIcon';
import { useTranslation } from '@/hooks/useTranslation';

const Footer: React.FC = () => {
  const t = useTranslation();

  const handleDocumentationClick = () => {
    // Create a temporary link element for downloading
    const link = document.createElement('a');
    link.href = '/A GPT-Based Approach to Code Tracing.pdf';
    link.download = t.gptCodeTracer.footer.actions.downloadPdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSourceCodeClick = () => {
    window.open(t.gptCodeTracer.footer.actions.viewRepository, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="border-t py-8 mt-12 bg-background/95">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <BrainIcon size={20} className="text-primary" />
              <span>{t.gptCodeTracer.footer.title}</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.gptCodeTracer.footer.description}
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-4">
              <span>{t.gptCodeTracer.footer.metadata.oodAccuracy}</span>
              <span>•</span>
              <span>{t.gptCodeTracer.footer.metadata.memoryAugmentedAttention}</span>
              <span>•</span>
              <span>{t.gptCodeTracer.footer.metadata.executionStepEmbedding}</span>
              <span>•</span>
              <span>{t.gptCodeTracer.footer.metadata.author}</span>
              <span>•</span>
              <span>{t.gptCodeTracer.footer.metadata.timestamp}</span>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleDocumentationClick}
              className="text-sm flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors cursor-pointer border-none outline-none focus:ring-2 focus:ring-primary/50"
            >
              <svg 
                width={16} 
                height={16} 
                viewBox="0 0 24 24" 
                fill="none" 
                className="stroke-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{t.gptCodeTracer.footer.buttons.documentation}</span>
            </button>
            <button
              onClick={handleSourceCodeClick}
              className="text-sm flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors cursor-pointer border-none outline-none focus:ring-2 focus:ring-secondary/50"
            >
              <CodeIcon size={16} />
              <span>{t.gptCodeTracer.footer.buttons.sourceCode}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;