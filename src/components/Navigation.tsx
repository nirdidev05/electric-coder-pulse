import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Globe, Menu, X, Zap, Code, Brain } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage, type Language } from '@/contexts/LanguageContext';
const DropdownMenu = ({ children }) => {
  return <div className="relative">{children}</div>;
};

const DropdownMenuTrigger = ({ children, asChild }) => {
  return children;
};

const DropdownMenuContent = ({ children, align, className }) => {
  return (
    <div className={`absolute ${align === 'end' ? 'right-0' : 'left-0'} mt-2 ${className}`}>
      {children}
    </div>
  );
};

const DropdownMenuItem = ({ children, onClick, className }) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

  
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isHovered, setIsHovered] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
 const { language, setLanguage } = useLanguage();
  const t = useTranslation();  
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.9, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 20]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const navItems = [
    { key: 'about', label: t.nav.about, icon: Brain },
    { key: 'projects', label: t.nav.projects, icon: Code },
    { key: 'achievements', label: t.nav.achievements, icon: Zap },
    { key: 'contact', label: t.nav.contact, icon: Globe }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  // Enhanced scroll detection with throttling
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
    
    // Update active section based on scroll position
    const sections = navItems.map(item => item.key);
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
  }, [navItems]);

  useEffect(() => {
    let timeoutId;
    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 16); // 60fps throttling
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Enhanced smooth scrolling with offset
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = navRef.current?.offsetHeight || 80;
      const elementPosition = element.offsetTop - navHeight - 20;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
        if (isLanguageDropdownOpen) {
          setIsLanguageDropdownOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, isLanguageDropdownOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl' 
            : 'bg-transparent'
        }`}
        style={{
          backdropFilter: isScrolled ? `blur(${navBlur}px)` : 'blur(8px)',
          opacity: navOpacity
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center space-x-2 z-50 relative"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  WALID BENBOUTA
                </span>
                <span className="text-xs text-slate-400 -mt-1 hidden sm:block">
                  AI Portfolio
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.key;
                
                return (
                  <motion.button
                    key={item.key}
                    onClick={() => scrollToSection(item.key)}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                      isActive 
                        ? 'text-blue-400 bg-blue-500/10' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-400 rounded-full"
                        layoutId="activeIndicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.button>
                );
              })}
              
              {/* Language Dropdown */}
              <div className="relative ml-4" ref={dropdownRef}>
                <motion.button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium hidden lg:inline">{currentLanguage.flag}</span>
                  <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
                  <motion.div
                    animate={{ rotate: isLanguageDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-3 h-3" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {isLanguageDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-xl z-50"
                    >
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLanguageDropdownOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-slate-800/50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                            language === lang.code ? 'bg-blue-500/10 text-blue-400' : 'text-slate-300'
                          }`}
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="font-medium">{lang.name}</span>
                          {language === lang.code && (
                            <motion.div
                              className="ml-auto w-2 h-2 bg-blue-400 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.1 }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden z-50 relative w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 shadow-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-slate-900/98 backdrop-blur-2xl border-l border-slate-700/50 shadow-2xl z-40 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200,
                mass: 1
              }}
            >
              <div className="flex flex-col h-full pt-24 px-6">
                
                {/* Mobile Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.key;
                    
                    return (
                      <motion.button
                        key={item.key}
                        onClick={() => scrollToSection(item.key)}
                        className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-lg font-medium">{item.label}</span>
                        {isActive && (
                          <motion.div
                            className="ml-auto w-2 h-2 bg-blue-400 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Mobile Language Selection */}
                <motion.div
                  className="mt-8 pt-6 border-t border-slate-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                    Language
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center space-x-2 p-3 rounded-lg border transition-all duration-300 ${
                          language === lang.code
                            ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                            : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-700/50'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.code.toUpperCase()}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Mobile Footer */}
                <motion.div
                  className="mt-auto pb-6 pt-4 border-t border-slate-700/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Brain className="w-4 h-4" />
                    <span className="text-sm">AI Portfolio • 2025</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;