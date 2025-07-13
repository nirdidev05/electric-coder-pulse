import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { GraduationCap, Database, Rocket, Lightbulb, Award } from 'lucide-react';

const journeySteps = [
  {
    icon: <GraduationCap className="w-7 h-7 text-primary" />,
    key: "intro",
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-accent" />,
    key: "background",
  },
  {
    icon: <Database className="w-7 h-7 text-secondary" />,
    key: "foundation",
  },
  {
    icon: <Rocket className="w-7 h-7 text-primary" />,
    key: "focus",
    highlight: true,
  },
  {
    icon: <Award className="w-7 h-7 text-accent" />,
    key: "professional",
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-primary" />,
    key: "drive",
  },
  {
    icon: <Rocket className="w-7 h-7 text-secondary" />,
    key: "aspiration",
    highlight: true,
  },
];

const About = () => {
  const t = useTranslation();

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.about.title} <span className="gradient-text">{t.about.me}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            {t.about.subtitle}
          </p>
        </motion.div>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
          {/* My Journey (Left) - Modern Redesign */}
          <div className="relative">
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-12 text-primary flex items-center gap-2"
            >
              {t.about.journey.title}
            </motion.h3>
            
            {/* Floating Timeline Container */}
            <div className="relative">
              {/* Animated Background Grid */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="grid grid-cols-6 gap-4 h-full">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{
                        duration: 3,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      className="w-1 h-1 bg-primary rounded-full"
                    />
                  ))}
                </div>
              </div>

              {/* Journey Steps */}
              <div className="space-y-8">
                {journeySteps.map((step, idx) => {
                  const isLeft = idx % 2 === 0;
                  
                  return (
                    <motion.div
                      key={step.key}
                      initial={{ 
                        opacity: 0, 
                        x: isLeft ? -100 : 100,
                        scale: 0.8 
                      }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0,
                        scale: 1 
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6,
                        delay: idx * 0.15,
                        type: "spring",
                        stiffness: 100 
                      }}
                      className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                    >
                      {/* Connection Line to Next Item */}
                      {idx < journeySteps.length - 1 && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.15 + 0.3 }}
                          className={`absolute top-full ${isLeft ? 'left-36' : 'right-36'} w-0.5 h-8 bg-gradient-to-b from-primary/40 to-secondary/30 origin-top z-10`}
                        />
                      )}
                      
                      {/* Floating Card */}
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          rotateY: isLeft ? 2 : -2,
                          rotateX: -1
                        }}
                        className="relative group cursor-pointer w-80 max-w-full"
                      >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
                          step.highlight 
                            ? 'bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30' 
                            : 'bg-primary/10 group-hover:bg-primary/20'
                        }`} />
                        
                        {/* Card Content */}
                        <div className={`relative backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                          step.highlight
                            ? 'bg-gradient-to-br from-primary/15 to-secondary/15 border-primary/30 shadow-lg shadow-primary/10'
                            : 'bg-background/80 border-border/50 hover:bg-background/90 hover:border-primary/20'
                        }`}>
                          {/* Icon Bubble */}
                          <motion.div 
                            className={`absolute ${
                              isLeft ? '-right-6' : '-left-6'
                            } top-6 w-12 h-12 rounded-full border-2 border-primary/20 bg-background flex items-center justify-center shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.icon}
                          </motion.div>
                          
                          {/* Content */}
                          <div className={isLeft ? 'pr-4' : 'pl-4'}>
                            <motion.p 
                              className={`text-base leading-relaxed ${
                                step.highlight
                                  ? 'font-semibold text-primary'
                                  : 'text-muted-foreground'
                              }`}
                            >
                              {t.about.journey[step.key as keyof typeof t.about.journey]}
                            </motion.p>
                          </div>
                          
                          {/* Accent Line */}
                          <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                            step.highlight
                              ? 'bg-gradient-to-r from-primary to-secondary'
                              : 'bg-primary/20 group-hover:bg-primary/40'
                          }`} />
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tech Stack, Specializations, Languages (Right) */}
          <div className="space-y-8">
            {/* Tech Stack - Modern AI-Focused Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-background/80 to-background/60 border border-border/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl backdrop-blur-sm overflow-hidden"
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 gap-2 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.4, 0] }}
                      transition={{
                        duration: 4,
                        delay: i * 0.05,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      className="w-1 h-1 bg-primary rounded-full"
                    />
                  ))}
                </div>
              </div>

              <div className="relative">
                <motion.h3 
                  className="text-2xl font-bold mb-8 text-primary flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {t.about.techStack.title}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full"
                  />
                </motion.h3>

                {/* Tech Categories */}
                <div className="space-y-8">
                  {/* Core Languages & Tools - Green to Light Blue */}
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-4 uppercase tracking-wider">Core Languages & Tools</h4>
                    <div className="flex flex-wrap gap-3">
                      {["Python", "R", "SQL", "Bash"].map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="relative group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-400/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
                          <span className="relative bg-gradient-to-r from-emerald-500/15 to-cyan-400/15 border border-emerald-500/30 px-4 py-2 rounded-xl font-semibold text-emerald-400 backdrop-blur-sm">
                            {tech}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* AI/ML Frameworks - Blue to White */}
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">AI/ML Frameworks</h4>
                    <div className="flex flex-wrap gap-3">
                      {["PyTorch", "TensorFlow", "Optuna", "transformers"].map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + 0.2 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="relative group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-white/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
                          <span className="relative bg-gradient-to-r from-blue-500/15 to-white/15 border border-blue-500/30 px-4 py-2 rounded-xl font-semibold text-blue-400 backdrop-blur-sm">
                            {tech}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* AI Specializations - Green to Blue */}
                  <div>
                    <h4 className="text-sm font-semibold text-teal-400 mb-4 uppercase tracking-wider">AI Specializations</h4>
                    <div className="flex flex-wrap gap-3">
                      {["GAN", "NLP", "TIME SERIES", "LLM"].map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + 0.4 }}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className="relative group"
                        >
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-xl blur-lg transition-all duration-300"
                            animate={{ 
                              scale: [1, 1.05, 1],
                              opacity: [0.3, 0.5, 0.3] 
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              delay: idx * 0.5 
                            }}
                          />
                          <span className="relative bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border-2 border-teal-400/40 px-4 py-2 rounded-xl font-bold text-teal-400 backdrop-blur-sm shadow-lg">
                            {tech}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* ML Libraries - Blue to White */}
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">ML Libraries</h4>
                    <div className="flex flex-wrap gap-3 gap-y-6 m-2">  
  {["xgboost", "lightgbm", "catboost", "scikit-learn", "hyperopt", "hyperopt"].map((tech, idx) => (
    <motion.div
      key={tech}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 + 0.6 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-white/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
      <span className="relative bg-gradient-to-r from-blue-500/15 to-white/15 border border-blue-500/30 px-4 py-2 rounded-xl font-semibold text-blue-400 backdrop-blur-sm">
        {tech}
      </span>
    </motion.div>
  ))}
</div>
                  </div>

                  {/* Tools & Platforms - Green to Light Blue */}
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-4 uppercase tracking-wider">Tools & Platforms</h4>
                    <div className="flex flex-wrap gap-3">
                      {["Apache Kafka", "PyCharm", "Streamlit"].map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + 0.8 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="relative group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-400/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
                          <span className="relative bg-gradient-to-r from-emerald-500/15 to-cyan-400/15 border border-emerald-500/30 px-4 py-2 rounded-xl font-semibold text-emerald-400 backdrop-blur-sm">
                            {tech}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="mt-8 pt-6 border-t border-border/50"
                >
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Expertise Level</span>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <motion.div
                          key={level}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: level * 0.1 + 1.2 }}
                          className={`w-2 h-2 rounded-full ${
                            level <= 3 ? 'bg-primary' : 'bg-primary/30'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-primary font-semibold">Medium -always want for more-</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">{t.about.specializations.title}</h3>
              <ul className="space-y-3 text-muted-foreground">
                {t.about.specializations.items.map((spec, idx) => (
                  <li key={spec} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      idx === 0 ? "bg-primary" :
                      idx === 1 ? "bg-secondary" :
                      idx === 2 ? "bg-accent" : "bg-primary"
                    }`}></div>
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background/70 border border-border rounded-2xl p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary">{t.about.languages.title}</h3>
              <div className="flex flex-wrap gap-3">
                {t.about.languages.items.map((lang, index) => (
                  <span
                    key={lang}
                    className="bg-accent/20 text-accent px-4 py-2 rounded-full font-semibold"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;