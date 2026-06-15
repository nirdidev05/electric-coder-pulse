import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { GraduationCap, Database, Rocket, Lightbulb, Award, Star, StarHalf } from 'lucide-react';

const journeySteps = [
  {
    icon: <GraduationCap className="w-7 h-7 text-primary" />,
    key: "intro",
    label: "Lyon 1 x ESI",
    accent: "from-primary/25 via-cyan-400/10 to-secondary/20",
    marker: "border-primary/40 bg-primary/15 text-primary",
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-accent" />,
    key: "background",
    label: "Analytical roots",
    accent: "from-accent/25 via-primary/10 to-transparent",
    marker: "border-accent/40 bg-accent/15 text-accent",
  },
  {
    icon: <Database className="w-7 h-7 text-secondary" />,
    key: "foundation",
    label: "Data foundation",
    accent: "from-secondary/25 via-emerald-400/10 to-primary/10",
    marker: "border-secondary/40 bg-secondary/15 text-secondary",
  },
  {
    icon: <Rocket className="w-7 h-7 text-primary" />,
    key: "focus",
    label: "AI pivot",
    highlight: true,
    period: "2025/2026",
    accent: "from-primary/30 via-secondary/20 to-accent/20",
    marker: "border-primary/50 bg-primary/20 text-primary",
  },
  {
    icon: <Award className="w-7 h-7 text-accent" />,
    key: "professional",
    label: "Applied intelligence",
    accent: "from-accent/25 via-secondary/10 to-primary/10",
    marker: "border-accent/40 bg-accent/15 text-accent",
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-primary" />,
    key: "drive",
    label: "Problem solving",
    accent: "from-primary/25 via-cyan-400/10 to-transparent",
    marker: "border-primary/40 bg-primary/15 text-primary",
  },
  {
    icon: <Rocket className="w-7 h-7 text-secondary" />,
    key: "aspiration",
    label: "M2 AI ambition",
    highlight: true,
    accent: "from-secondary/30 via-primary/20 to-accent/15",
    marker: "border-secondary/50 bg-secondary/20 text-secondary",
  },
];

const About = () => {
  const t = useTranslation();

  const techExpertiseSections = [
    {
      title: "Core Languages & Databases",
      index: "01",
      summary: "Programming foundations, relational databases, search, and graph querying.",
      groups: [
        { label: "Programmation", items: ["Python", "Multithreading", "OOP", "C++", "Java", "JavaScript"] },
        { label: "Databases & Graphs", items: ["Cypher", "Neo4j", "SQL", "PostgreSQL", "MySQL", "Elasticsearch"] },
        { label: "Data Science & Scripting", items: ["R", "Bash"] },
      ],
    },
    {
      title: "AI, Machine Learning & Deep Learning",
      index: "02",
      summary: "Predictive models, GenAI, NLP, LLMs, computer vision, and optimization tooling.",
      groups: [
        { label: "DL & GenAI", items: ["PyTorch", "TensorFlow", "Keras", "Transformers", "Hugging Face"] },
        { label: "Predictive ML", items: ["XGBoost", "LightGBM", "Scikit-learn", "Time Series"] },
        { label: "NLP & LLM", items: ["RAG", "LLM Fine-tuning", "Word Embeddings", "TF-IDF"] },
        { label: "Vision & Image", items: ["Computer Vision", "Image Analysis", "Image Generation", "GANs", "C++"] },
      ],
    },
    {
      title: "Advanced Algorithmic & Agentic AI",
      index: "03",
      summary: "From-scratch agentic reasoning, negotiation protocols, coalitions, and decision algorithms.",
      featured: true,
      groups: [
        { label: "IA Agentique", items: ["SMA", "BDI", "FIPA-ACL", "Async Routing"] },
        { label: "Game Theory & Decision", items: ["Rubinstein/Zeuthen", "Shapley Value", "MCDA"] },
        { label: "Operations Research", items: ["IDP Coalition Generation", "Dynamic Programming", "Pruning"] },
      ],
    },
    {
      title: "Data Engineering & Architecture",
      index: "04",
      summary: "Automated pipelines, graph modeling, heterogeneous data parsing, and deployment tooling.",
      groups: [
        { label: "Big Data & Pipelines", items: ["Automated ETL", "Pandas", "NumPy", "API Integration", "Kafka"] },
        { label: "Graph Modeling", items: ["Neo4j", "Property Graph", "Data Importer", "Aura", "Polymorphic JSON"] },
        { label: "DevOps & Deployment", items: ["Docker", "Git", "Linux", "Postman"] },
      ],
    },
    {
      title: "Software Engineering & BI",
      index: "05",
      summary: "Full-stack delivery, BI dashboards, prototyping, design, process modeling, and ERP systems.",
      groups: [
        { label: "Web & Mobile", items: ["React", "NextJS", "Django", "Laravel", "VueJS", "Flutter"] },
        { label: "BI & Data Viz", items: ["PowerBI", "Streamlit", "Dashboards", "Real-time KPIs", "EDA"] },
        { label: "Design & Process", items: ["UI/UX", "Figma", "BPMN", "ERP", "Odoo"] },
      ],
    },
  ];

  const specializationFocus = [
    {
      title: "Data Engineering & Graph Architecture",
      score: 4,
      proof: "Complex ETL pipelines for heterogeneous data, spatial unification, and property graph modeling with Neo4j/Cypher for MCDA decision analysis.",
    },
    {
      title: "Predictive AI & Data Science",
      score: 4,
      proof: "Data cleaning, feature engineering, and advanced regression models such as XGBoost and LightGBM, validated through hackathon podiums including HAICK 2025 and ADC 4.0 BNP Paribas.",
    },
    {
      title: "Natural Language Processing & LLMs",
      score: 4.5,
      proof: "Modern NLP ecosystem: RAG architectures, LLM fine-tuning, entity extraction, word embeddings, and document intelligence workflows.",
    },
    {
      title: "Agentic AI & Multi-Agent Systems",
      score: 4.5,
      proof: "Autonomous BDI agents, negotiation protocols, game theory with Rubinstein/Zeuthen, coalition algorithms, and Shapley-value reasoning.",
    },
    {
      title: "Deep Learning & Computer Vision",
      score: 4,
      proof: "Neural networks with PyTorch and TensorFlow for image analysis, image generation with GANs, and sequential modeling with LSTM-style pipelines.",
    },
    {
      title: "Full-Stack Software Architecture",
      score: 3,
      proof: "End-to-end delivery with React, NextJS, Django, Laravel, VueJS, Flutter, ERP integration, and production-oriented prototyping.",
    },
  ];

  const languageLevels = [
    {
      name: t.about.languages.items[0] ?? "Arabic",
      level: t.about.languages.items[0] === "Arabe" ? "Natif" : t.about.languages.items[0] === "Árabe" ? "Nativo" : t.about.languages.items[0] === "Arabisch" ? "Muttersprache" : t.about.languages.items[0] === "العربية" ? "لغة أم" : "Native",
      score: 5,
      accent: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      gradient: "from-emerald-500/20 via-cyan-400/10 to-transparent",
    },
    {
      name: t.about.languages.items[1] ?? "French",
      level: t.about.languages.items[1] === "Français" ? "Courant" : t.about.languages.items[1] === "Francés" ? "Fluido" : t.about.languages.items[1] === "Französisch" ? "Fließend" : t.about.languages.items[1] === "الفرنسية" ? "طلاقة" : "Fluent",
      score: 4,
      accent: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      gradient: "from-blue-500/20 via-primary/10 to-transparent",
    },
    {
      name: t.about.languages.items[2] ?? "English",
      level: t.about.languages.items[2] === "Anglais" ? "Courant" : t.about.languages.items[2] === "Inglés" ? "Fluido" : t.about.languages.items[2] === "Englisch" ? "Fließend" : t.about.languages.items[2] === "الإنجليزية" ? "طلاقة" : "Fluent",
      score: 4,
      accent: "text-violet-300 border-violet-400/30 bg-violet-400/10",
      gradient: "from-violet-500/20 via-secondary/10 to-transparent",
    },
  ];

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

            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 max-w-7xl mx-auto items-start">
          {/* My Journey (Left) - Bento Redesign */}
          <div className="relative">
            <motion.h3 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-12 text-primary flex items-center gap-2"
            >
              {t.about.journey.title}
            </motion.h3>
            
            {/* Bento Journey Container */}
            <div className="relative rounded-[2rem] border border-border/40 bg-background/40 p-4 sm:p-6 shadow-2xl shadow-primary/5 backdrop-blur-md overflow-hidden">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute -left-24 top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -right-24 bottom-20 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

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

              {/* Journey Bento Grid */}
              <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[minmax(190px,auto)]">
                {journeySteps.map((step, idx) => {
                  const index = String(idx + 1).padStart(2, '0');
                  const bentoSpan =
                    idx === 0 ? 'sm:col-span-2 min-h-[230px]' :
                    idx === 3 ? 'sm:col-span-2 min-h-[250px]' :
                    idx === 4 ? 'min-h-[230px]' :
                    idx === 6 ? 'sm:col-span-2 min-h-[220px]' :
                    'min-h-[210px]';
                  
                  return (
                    <motion.div
                      key={step.key}
                      initial={{ 
                        opacity: 0, 
                        y: 28,
                        scale: 0.8 
                      }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        scale: 1 
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6,
                        delay: idx * 0.15,
                        type: "spring",
                        stiffness: 100 
                      }}
                      className={`relative ${bentoSpan}`}
                    >
                      {/* Bento Card */}
                      <motion.div
                        whileHover={{ 
                          scale: 1.02,
                          y: -4,
                          rotateX: -1,
                        }}
                        className="relative group h-full w-full cursor-pointer"
                      >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.accent} opacity-60 blur-2xl transition-all duration-500 group-hover:opacity-100`} />
                        
                        {/* Card Content */}
                        <div className={`relative flex h-full overflow-hidden rounded-3xl border p-5 sm:p-6 transition-all duration-300 ${
                          step.highlight
                            ? 'bg-gradient-to-br from-primary/18 via-background/90 to-secondary/15 border-primary/40 shadow-2xl shadow-primary/15'
                            : 'bg-background/85 border-border/50 hover:bg-background/95 hover:border-primary/25'
                        }`}>
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                          <div className={`absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br ${step.accent} opacity-50`} />
                          <div className="absolute bottom-4 right-5 font-mono text-6xl font-black text-white/[0.035] sm:text-7xl">
                            {index}
                          </div>

                          {/* Icon Bubble */}
                          <motion.div 
                            className={`absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border shadow-lg backdrop-blur-sm ${step.marker}`}
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.icon}
                          </motion.div>
                          
                          {/* Content */}
                          <div className="relative flex h-full flex-col justify-between pr-12">
                            <div className="mb-4 flex flex-wrap items-center gap-2">
                              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-black text-muted-foreground">
                                {index}
                              </span>
                              <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${step.marker}`}>
                                {step.label}
                              </span>
                              {'period' in step && step.period && (
                                <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                  {step.period}
                                </span>
                              )}
                            </div>
                            <motion.p 
                              className={`relative text-sm leading-relaxed sm:text-base ${
                                step.highlight
                                  ? 'font-semibold text-primary'
                                  : 'text-muted-foreground'
                              }`}
                            >
                              {t.about.journey[step.key as keyof typeof t.about.journey]}
                            </motion.p>
                          </div>
                          
                          {/* Accent Line */}
                          <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-full bg-gradient-to-r ${step.accent} transition-all duration-300 group-hover:h-1.5`} />
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
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-5 shadow-xl backdrop-blur-sm sm:p-6 lg:p-7"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-primary/[0.04]" />

              <div className="relative">
                <motion.h3 
                  className="mb-2 text-2xl font-bold text-primary"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {t.about.techStack.title}
                </motion.h3>
                <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  A structured map of the tools, paradigms, and architectures I use to move from data to reliable intelligent systems.
                </p>

                <div className="space-y-4">
                  {techExpertiseSections.map((section, sectionIndex) => {
                    return (
                      <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: sectionIndex * 0.08, duration: 0.45 }}
                        className={`relative rounded-2xl border p-4 transition-colors duration-300 ${
                          section.featured
                            ? 'border-primary/35 bg-primary/[0.055]'
                            : 'border-border/50 bg-card/35 hover:border-border'
                        }`}
                      >
                        <div className="relative">
                          <div className="mb-4 flex items-start justify-between gap-4">
                            <div>
                              <div className="mb-2 flex flex-wrap items-center gap-2">
                                <span className="font-mono text-xs font-bold text-primary/80">{section.index}</span>
                                {section.featured && (
                                  <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                                    Algorithmic depth
                                  </span>
                                )}
                              </div>
                              <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{section.summary}</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            {section.groups.map((group) => (
                              <div key={group.label} className="grid gap-2 border-t border-border/40 pt-3 sm:grid-cols-[150px_1fr]">
                                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                  {group.label}
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {group.items.map((skill) => (
                                    <span
                                      key={skill}
                                      className="rounded-md border border-border/60 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground/85"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-border/60 bg-background/80 p-5 shadow-xl backdrop-blur-sm sm:p-6 lg:p-7"
            >
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-muted-foreground">Focus Areas</p>
                <h3 className="mt-1 text-2xl font-bold gradient-text">{t.about.specializations.title}</h3>
              </div>

              <div className="space-y-4">
                {specializationFocus.map((spec, index) => (
                  <motion.div
                    key={spec.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-2xl border border-border/50 bg-card/35 p-4"
                  >
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h4 className="font-semibold text-white">{spec.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{spec.proof}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-1">
                        {Array.from({ length: 5 }).map((_, starIndex) => {
                          const full = starIndex + 1 <= Math.floor(spec.score);
                          const half = !full && spec.score % 1 !== 0 && starIndex === Math.floor(spec.score);

                          return half ? (
                            <StarHalf key={starIndex} className="h-4 w-4 fill-amber-300 text-amber-300" />
                          ) : (
                            <Star
                              key={starIndex}
                              className={`h-4 w-4 ${full ? 'fill-amber-300 text-amber-300' : 'text-muted-foreground/30'}`}
                            />
                          );
                        })}
                        <span className="ml-2 font-mono text-xs font-bold text-muted-foreground">{spec.score}/5</span>
                      </div>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted/30">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(spec.score / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.06 + 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl border border-border/50 bg-background/75 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="absolute inset-0 opacity-60">
                <div className="absolute -left-20 top-8 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
                <div className="absolute -right-16 bottom-0 h-36 w-36 rounded-full bg-accent/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-muted-foreground">Communication</p>
                    <h3 className="mt-1 text-2xl font-bold text-secondary">{t.about.languages.title}</h3>
                  </div>
                  <div className="hidden rounded-2xl border border-secondary/30 bg-secondary/10 px-3 py-2 text-sm font-bold text-secondary sm:block">
                    3 Languages
                  </div>
                </div>

                <div className="grid gap-4">
                  {languageLevels.map((language, index) => (
                    <motion.div
                      key={language.name}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 }}
                      whileHover={{ y: -3 }}
                      className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/70 p-4 transition-all duration-300 hover:border-secondary/30 hover:bg-background/90"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${language.gradient} opacity-80 transition-opacity duration-300 group-hover:opacity-100`} />
                      <div className="relative">
                        <div className="mb-3 flex items-center justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-bold text-white">{language.name}</h4>
                            <span className={`mt-1 inline-flex rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${language.accent}`}>
                              {language.level}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                              <motion.div
                                key={starIndex}
                                initial={{ scale: 0, rotate: -45 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + starIndex * 0.04, type: "spring", stiffness: 180 }}
                              >
                                <Star
                                  className={`h-4 w-4 ${
                                    starIndex < language.score
                                      ? 'fill-amber-300 text-amber-300'
                                      : 'text-muted-foreground/30'
                                  }`}
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-muted/30">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(language.score / 5) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: index * 0.12 + 0.2 }}
                            className="h-full rounded-full bg-gradient-to-r from-secondary via-primary to-accent"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;