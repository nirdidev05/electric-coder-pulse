import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const languages: Array<{ code: Language; name: string; flag: string }> = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentLanguage = languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Choose language"
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center space-x-2 rounded-lg border border-slate-700/50 bg-slate-800/50 px-3 py-2 text-slate-300 transition-all duration-300 hover:bg-slate-700/50 hover:text-white"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden text-sm font-medium lg:inline">{currentLanguage.flag}</span>
        <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div role="listbox" className="absolute right-0 top-full z-[70] mt-2 w-48 overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900/95 p-0 shadow-xl backdrop-blur-md">
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              role="option"
              aria-selected={language === item.code}
              onClick={() => {
                setLanguage(item.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center space-x-3 px-4 py-3 text-left transition-colors first:rounded-t-lg last:rounded-b-lg hover:bg-slate-800/50 ${language === item.code ? "bg-blue-500/10 text-blue-400" : "text-slate-300"}`}
            >
              <span className="text-lg">{item.flag}</span>
              <span className="flex-1 font-medium">{item.name}</span>
              {language === item.code && <Check className="ml-auto h-3.5 w-3.5 text-blue-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
