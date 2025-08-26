import React, { useState, useEffect } from 'react';
import { BrainIcon, SummaryIcon, ProblemIcon, ArchitectureIcon, InnovationIcon, ResultsIcon, CodeIcon } from './CustomIcon';

// ArrowLeft icon component
const ArrowLeft: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'summary', 'problem', 'architecture', 'innovation', 'results', 'implementation'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Research', Icon: BrainIcon },
    { id: 'summary', label: 'Summary', Icon: SummaryIcon },
    { id: 'problem', label: 'Problem', Icon: ProblemIcon },
    { id: 'architecture', label: 'Architecture', Icon: ArchitectureIcon },
    { id: 'innovation', label: 'Innovation', Icon: InnovationIcon },
    { id: 'results', label: 'Results', Icon: ResultsIcon },
    { id: 'implementation', label: 'Code', Icon: CodeIcon }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left Side: Back to Projects + Title */}
          <div className="flex items-center gap-6">
            {/* Back to Projects Button */}
            <a
              href="/" // Replace with your actual projects page URL
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="hidden sm:inline">Back to Projects</span>
              <span className="sm:hidden">Projects</span>
            </a>

            {/* Separator */}
            <div className="w-px h-6 bg-border hidden sm:block"></div>

            {/* Project Title */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <BrainIcon size={16} className="text-white" />
              </div>
              <div>
                <div className="font-mono text-lg font-bold neural-gradient">
                  GPT_CodeTracer.ai
                </div>
              </div>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const { Icon } = item;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/10'
                  }`}
                >
                  <Icon size={14} />
                  <span className="hidden xl:inline">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Side: Research Status + Mobile Menu */}
          <div className="flex items-center gap-4">
          
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-muted/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}>
          <div className="py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => {
                const { Icon } = item;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-md transition-all duration-200 ${
                        activeSection === item.id 
                          ? 'text-primary bg-primary/10 border border-primary/20' 
                          : 'text-muted-foreground hover:bg-muted/10 hover:text-foreground'
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Status */}
            <div className="mt-3 px-4 py-2 border-t border-border/50">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-mono">Status:</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono font-medium">VALIDATED</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs mt-1">
                <span className="text-muted-foreground font-mono">Author:</span>
                <span className="text-foreground font-mono">nirdidev05</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;