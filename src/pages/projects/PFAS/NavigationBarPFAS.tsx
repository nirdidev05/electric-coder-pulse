import { motion } from "framer-motion";

interface NavigationBarPFASProps {
  sections: Array<{ id: string; title: string; icon: any }>;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const NavigationBarPFAS = ({ sections, activeSection, setActiveSection }: NavigationBarPFASProps) => {
  return (
    <nav className="sticky top-16 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all
                  ${activeSection === section.id 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{section.title}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
