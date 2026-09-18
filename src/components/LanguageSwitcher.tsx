import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const languages: Array<{ code: Language; name: string; flag: string }> = [
  { code: "en", name: "English", flag: "US" },
  { code: "fr", name: "Francais", flag: "FR" },
  { code: "de", name: "Deutsch", flag: "DE" },
  { code: "es", name: "Espanol", flag: "ES" },
  { code: "ar", name: "العربية", flag: "AR" },
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
        className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background/60 px-3 py-2 text-xs font-semibold text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-foreground"
      >
        <Globe className="h-4 w-4" />
        <span>{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div role="listbox" className="absolute right-0 top-full z-[70] mt-2 w-40 overflow-hidden rounded-lg border border-border bg-background/95 p-1 shadow-xl backdrop-blur-xl">
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
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-primary/10 ${language === item.code ? "text-primary" : "text-muted-foreground"}`}
            >
              <span className="w-6 font-mono text-[10px] opacity-70">{item.flag}</span>
              <span className="flex-1">{item.name}</span>
              {language === item.code && <Check className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
