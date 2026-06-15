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

  const localeKey =
    t.about.languages.title === "Langues" ? "fr" :
    t.about.languages.title === "Sprachen" ? "de" :
    t.about.languages.title === "Idiomas" ? "es" :
    t.about.languages.title === "اللغات" ? "ar" :
    "en";

  const localizedAboutContent = {
    en: {
      techIntro: "A structured map of the tools, paradigms, and architectures I use to move from data to reliable intelligent systems.",
      featuredBadge: "Algorithmic depth",
      focusAreas: "Focus Areas",
      communication: "Communication",
      languagesCount: "3 Languages",
      levels: { native: "Native", fluent: "Fluent" },
      techSections: [
        {
          title: "Core Languages & Databases",
          index: "01",
          summary: "Programming foundations, relational databases, search, and graph querying.",
          groups: [
            { label: "Programming", items: ["Python", "Multithreading", "OOP", "C++", "Java", "JavaScript"] },
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
            { label: "Agentic AI", items: ["MAS", "BDI", "FIPA-ACL", "Async Routing"] },
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
      ],
      specializations: [
        { title: "Data Engineering & Graph Architecture", score: 4, proof: "Complex ETL pipelines for heterogeneous data, spatial unification, and property graph modeling with Neo4j/Cypher for MCDA decision analysis." },
        { title: "Predictive AI & Data Science", score: 4, proof: "Data cleaning, feature engineering, and advanced regression models such as XGBoost and LightGBM, validated through hackathon podiums including HAICK 2025 and ADC 4.0 BNP Paribas." },
        { title: "Natural Language Processing & LLMs", score: 4.5, proof: "Modern NLP ecosystem: RAG architectures, LLM fine-tuning, entity extraction, word embeddings, and document intelligence workflows." },
        { title: "Agentic AI & Multi-Agent Systems", score: 4.5, proof: "Autonomous BDI agents, negotiation protocols, game theory with Rubinstein/Zeuthen, coalition algorithms, and Shapley-value reasoning." },
        { title: "Deep Learning & Computer Vision", score: 4, proof: "Neural networks with PyTorch and TensorFlow for image analysis, image generation with GANs, and sequential modeling with LSTM-style pipelines." },
        { title: "Full-Stack Software Architecture", score: 3, proof: "End-to-end delivery with React, NextJS, Django, Laravel, VueJS, Flutter, ERP integration, and production-oriented prototyping." },
      ],
    },
    fr: {
      techIntro: "Une cartographie structurée des outils, paradigmes et architectures que j'utilise pour transformer la donnée en systèmes intelligents fiables.",
      featuredBadge: "Profondeur algorithmique",
      focusAreas: "Domaines de spécialisation",
      communication: "Communication",
      languagesCount: "3 langues",
      levels: { native: "Natif", fluent: "Courant" },
      techSections: [
        { title: "Langages, bases de données & graphes", index: "01", summary: "Bases de programmation, bases relationnelles, recherche et requêtage graphe.", groups: [
          { label: "Programmation", items: ["Python", "Multithreading", "OOP", "C++", "Java", "JavaScript"] },
          { label: "Bases de données & graphes", items: ["Cypher", "Neo4j", "SQL", "PostgreSQL", "MySQL", "Elasticsearch"] },
          { label: "Data science & scripting", items: ["R", "Bash"] },
        ]},
        { title: "IA, Machine Learning & Deep Learning", index: "02", summary: "Modèles prédictifs, GenAI, NLP, LLMs, vision par ordinateur et optimisation.", groups: [
          { label: "DL & GenAI", items: ["PyTorch", "TensorFlow", "Keras", "Transformers", "Hugging Face"] },
          { label: "ML prédictif", items: ["XGBoost", "LightGBM", "Scikit-learn", "Séries temporelles"] },
          { label: "NLP & LLM", items: ["RAG", "Fine-tuning LLM", "Word Embeddings", "TF-IDF"] },
          { label: "Vision & image", items: ["Computer Vision", "Analyse d'image", "Génération d'image", "GANs", "C++"] },
        ]},
        { title: "IA algorithmique & agentique avancée", index: "03", summary: "Raisonnement agentique from scratch, protocoles de négociation, coalitions et algorithmes de décision.", featured: true, groups: [
          { label: "IA agentique", items: ["SMA", "BDI", "FIPA-ACL", "Routage asynchrone"] },
          { label: "Théorie des jeux & décision", items: ["Rubinstein/Zeuthen", "Valeur de Shapley", "MCDA"] },
          { label: "Recherche opérationnelle", items: ["Génération IDP de coalitions", "Programmation dynamique", "Élagage"] },
        ]},
        { title: "Data Engineering & architecture", index: "04", summary: "Pipelines automatisés, modélisation graphe, parsing de données hétérogènes et outils de déploiement.", groups: [
          { label: "Big data & pipelines", items: ["ETL automatisé", "Pandas", "NumPy", "Intégration API", "Kafka"] },
          { label: "Modélisation graphe", items: ["Neo4j", "Property Graph", "Data Importer", "Aura", "JSON polymorphe"] },
          { label: "DevOps & déploiement", items: ["Docker", "Git", "Linux", "Postman"] },
        ]},
        { title: "Software Engineering & BI", index: "05", summary: "Développement full-stack, tableaux de bord BI, prototypage, design, modélisation processus et ERP.", groups: [
          { label: "Web & mobile", items: ["React", "NextJS", "Django", "Laravel", "VueJS", "Flutter"] },
          { label: "BI & data viz", items: ["PowerBI", "Streamlit", "Dashboards", "KPI temps réel", "EDA"] },
          { label: "Design & processus", items: ["UI/UX", "Figma", "BPMN", "ERP", "Odoo"] },
        ]},
      ],
      specializations: [
        { title: "Data Engineering & architecture graphe", score: 4, proof: "Conception de pipelines ETL complexes pour données hétérogènes, unification spatiale et modélisation avancée en graphes de propriétés avec Neo4j/Cypher pour l'analyse décisionnelle MCDA." },
        { title: "IA prédictive & Data Science", score: 4, proof: "Nettoyage de données, feature engineering et modèles de régression avancés comme XGBoost et LightGBM, validés par des podiums en hackathons dont HAICK 2025 et ADC 4.0 BNP Paribas." },
        { title: "NLP & LLMs", score: 4.5, proof: "Maîtrise de l'écosystème NLP moderne : architectures RAG, fine-tuning de LLMs, extraction d'entités, embeddings et workflows d'intelligence documentaire." },
        { title: "IA agentique & systèmes multi-agents", score: 4.5, proof: "Agents autonomes BDI, protocoles de négociation, théorie des jeux avec Rubinstein/Zeuthen, algorithmes de coalition et raisonnement par valeur de Shapley." },
        { title: "Deep Learning & Computer Vision", score: 4, proof: "Réseaux de neurones avec PyTorch et TensorFlow pour l'analyse d'image, la génération avec GANs et les pipelines séquentiels de type LSTM." },
        { title: "Architecture logicielle full-stack", score: 3, proof: "Livraison end-to-end avec React, NextJS, Django, Laravel, VueJS, Flutter, intégration ERP et prototypage orienté production." },
      ],
    },
    de: {
      techIntro: "Eine strukturierte Karte der Tools, Paradigmen und Architekturen, mit denen ich Daten in zuverlässige intelligente Systeme verwandle.",
      featuredBadge: "Algorithmische Tiefe",
      focusAreas: "Schwerpunkte",
      communication: "Kommunikation",
      languagesCount: "3 Sprachen",
      levels: { native: "Muttersprache", fluent: "Fließend" },
      techSections: [
        { title: "Kernsprachen & Datenbanken", index: "01", summary: "Programmiergrundlagen, relationale Datenbanken, Suche und Graph-Abfragen.", groups: [
          { label: "Programmierung", items: ["Python", "Multithreading", "OOP", "C++", "Java", "JavaScript"] }, { label: "Datenbanken & Graphen", items: ["Cypher", "Neo4j", "SQL", "PostgreSQL", "MySQL", "Elasticsearch"] }, { label: "Data Science & Scripting", items: ["R", "Bash"] },
        ]},
        { title: "KI, Machine Learning & Deep Learning", index: "02", summary: "Prädiktive Modelle, GenAI, NLP, LLMs, Computer Vision und Optimierung.", groups: [
          { label: "DL & GenAI", items: ["PyTorch", "TensorFlow", "Keras", "Transformers", "Hugging Face"] }, { label: "Prädiktives ML", items: ["XGBoost", "LightGBM", "Scikit-learn", "Zeitreihen"] }, { label: "NLP & LLM", items: ["RAG", "LLM Fine-tuning", "Word Embeddings", "TF-IDF"] }, { label: "Vision & Bild", items: ["Computer Vision", "Bildanalyse", "Bildgenerierung", "GANs", "C++"] },
        ]},
        { title: "Fortgeschrittene algorithmische & agentische KI", index: "03", summary: "Agentisches Reasoning from scratch, Verhandlungsprotokolle, Koalitionen und Entscheidungsalgorithmen.", featured: true, groups: [
          { label: "Agentische KI", items: ["MAS", "BDI", "FIPA-ACL", "Asynchrones Routing"] }, { label: "Spieltheorie & Entscheidung", items: ["Rubinstein/Zeuthen", "Shapley-Wert", "MCDA"] }, { label: "Operations Research", items: ["IDP-Koalitionsgenerierung", "Dynamische Programmierung", "Pruning"] },
        ]},
        { title: "Data Engineering & Architektur", index: "04", summary: "Automatisierte Pipelines, Graphmodellierung, heterogenes Datenparsing und Deployment-Tools.", groups: [
          { label: "Big Data & Pipelines", items: ["Automatisiertes ETL", "Pandas", "NumPy", "API-Integration", "Kafka"] }, { label: "Graphmodellierung", items: ["Neo4j", "Property Graph", "Data Importer", "Aura", "Polymorphes JSON"] }, { label: "DevOps & Deployment", items: ["Docker", "Git", "Linux", "Postman"] },
        ]},
        { title: "Software Engineering & BI", index: "05", summary: "Full-Stack-Entwicklung, BI-Dashboards, Prototyping, Design, Prozessmodellierung und ERP.", groups: [
          { label: "Web & Mobile", items: ["React", "NextJS", "Django", "Laravel", "VueJS", "Flutter"] }, { label: "BI & Data Viz", items: ["PowerBI", "Streamlit", "Dashboards", "Echtzeit-KPIs", "EDA"] }, { label: "Design & Prozess", items: ["UI/UX", "Figma", "BPMN", "ERP", "Odoo"] },
        ]},
      ],
      specializations: [
        { title: "Data Engineering & Grapharchitektur", score: 4, proof: "Komplexe ETL-Pipelines für heterogene Daten, räumliche Vereinheitlichung und Property-Graph-Modellierung mit Neo4j/Cypher für MCDA-Entscheidungsanalysen." },
        { title: "Prädiktive KI & Data Science", score: 4, proof: "Datenbereinigung, Feature Engineering und fortgeschrittene Regressionsmodelle wie XGBoost und LightGBM, validiert durch Hackathon-Podien wie HAICK 2025 und ADC 4.0 BNP Paribas." },
        { title: "NLP & LLMs", score: 4.5, proof: "Modernes NLP-Ökosystem: RAG-Architekturen, LLM-Fine-tuning, Entitätsextraktion, Embeddings und Document-Intelligence-Workflows." },
        { title: "Agentische KI & Multi-Agenten-Systeme", score: 4.5, proof: "Autonome BDI-Agenten, Verhandlungsprotokolle, Spieltheorie mit Rubinstein/Zeuthen, Koalitionsalgorithmen und Shapley-Wert-Reasoning." },
        { title: "Deep Learning & Computer Vision", score: 4, proof: "Neuronale Netze mit PyTorch und TensorFlow für Bildanalyse, Bildgenerierung mit GANs und sequentielle LSTM-artige Pipelines." },
        { title: "Full-Stack-Softwarearchitektur", score: 3, proof: "End-to-End-Umsetzung mit React, NextJS, Django, Laravel, VueJS, Flutter, ERP-Integration und produktionsorientiertem Prototyping." },
      ],
    },
    es: {
      techIntro: "Un mapa estructurado de las herramientas, paradigmas y arquitecturas que uso para convertir datos en sistemas inteligentes fiables.",
      featuredBadge: "Profundidad algorítmica",
      focusAreas: "Áreas de enfoque",
      communication: "Comunicación",
      languagesCount: "3 idiomas",
      levels: { native: "Nativo", fluent: "Fluido" },
      techSections: [
        { title: "Lenguajes principales y bases de datos", index: "01", summary: "Fundamentos de programación, bases relacionales, búsqueda y consultas en grafos.", groups: [
          { label: "Programación", items: ["Python", "Multithreading", "OOP", "C++", "Java", "JavaScript"] }, { label: "Bases de datos y grafos", items: ["Cypher", "Neo4j", "SQL", "PostgreSQL", "MySQL", "Elasticsearch"] }, { label: "Data Science y scripting", items: ["R", "Bash"] },
        ]},
        { title: "IA, Machine Learning y Deep Learning", index: "02", summary: "Modelos predictivos, GenAI, NLP, LLMs, visión por computadora y optimización.", groups: [
          { label: "DL y GenAI", items: ["PyTorch", "TensorFlow", "Keras", "Transformers", "Hugging Face"] }, { label: "ML predictivo", items: ["XGBoost", "LightGBM", "Scikit-learn", "Series temporales"] }, { label: "NLP y LLM", items: ["RAG", "Fine-tuning LLM", "Word Embeddings", "TF-IDF"] }, { label: "Visión e imagen", items: ["Computer Vision", "Análisis de imagen", "Generación de imagen", "GANs", "C++"] },
        ]},
        { title: "IA algorítmica y agéntica avanzada", index: "03", summary: "Razonamiento agéntico desde cero, protocolos de negociación, coaliciones y algoritmos de decisión.", featured: true, groups: [
          { label: "IA agéntica", items: ["SMA", "BDI", "FIPA-ACL", "Enrutamiento asíncrono"] }, { label: "Teoría de juegos y decisión", items: ["Rubinstein/Zeuthen", "Valor de Shapley", "MCDA"] }, { label: "Investigación operativa", items: ["Generación IDP de coaliciones", "Programación dinámica", "Poda"] },
        ]},
        { title: "Ingeniería de datos y arquitectura", index: "04", summary: "Pipelines automatizados, modelado de grafos, parsing de datos heterogéneos y herramientas de despliegue.", groups: [
          { label: "Big Data y pipelines", items: ["ETL automatizado", "Pandas", "NumPy", "Integración API", "Kafka"] }, { label: "Modelado de grafos", items: ["Neo4j", "Property Graph", "Data Importer", "Aura", "JSON polimórfico"] }, { label: "DevOps y despliegue", items: ["Docker", "Git", "Linux", "Postman"] },
        ]},
        { title: "Ingeniería de software y BI", index: "05", summary: "Entrega full-stack, dashboards BI, prototipado, diseño, modelado de procesos y ERP.", groups: [
          { label: "Web y móvil", items: ["React", "NextJS", "Django", "Laravel", "VueJS", "Flutter"] }, { label: "BI y data viz", items: ["PowerBI", "Streamlit", "Dashboards", "KPIs en tiempo real", "EDA"] }, { label: "Diseño y proceso", items: ["UI/UX", "Figma", "BPMN", "ERP", "Odoo"] },
        ]},
      ],
      specializations: [
        { title: "Ingeniería de datos y arquitectura de grafos", score: 4, proof: "Pipelines ETL complejos para datos heterogéneos, unificación espacial y modelado de grafos de propiedades con Neo4j/Cypher para análisis de decisión MCDA." },
        { title: "IA predictiva y Data Science", score: 4, proof: "Limpieza de datos, feature engineering y modelos avanzados de regresión como XGBoost y LightGBM, validados por podios en hackathons como HAICK 2025 y ADC 4.0 BNP Paribas." },
        { title: "NLP y LLMs", score: 4.5, proof: "Ecosistema NLP moderno: arquitecturas RAG, fine-tuning de LLMs, extracción de entidades, embeddings y workflows de inteligencia documental." },
        { title: "IA agéntica y sistemas multiagente", score: 4.5, proof: "Agentes autónomos BDI, protocolos de negociación, teoría de juegos con Rubinstein/Zeuthen, algoritmos de coalición y razonamiento con valor de Shapley." },
        { title: "Deep Learning y Computer Vision", score: 4, proof: "Redes neuronales con PyTorch y TensorFlow para análisis de imagen, generación con GANs y pipelines secuenciales tipo LSTM." },
        { title: "Arquitectura software full-stack", score: 3, proof: "Entrega end-to-end con React, NextJS, Django, Laravel, VueJS, Flutter, integración ERP y prototipado orientado a producción." },
      ],
    },
    ar: {
      techIntro: "خريطة منظمة للأدوات والنماذج المعمارية التي أستخدمها لتحويل البيانات إلى أنظمة ذكية موثوقة.",
      featuredBadge: "عمق خوارزمي",
      focusAreas: "مجالات التخصص",
      communication: "التواصل",
      languagesCount: "3 لغات",
      levels: { native: "لغة أم", fluent: "طلاقة" },
      techSections: [
        { title: "لغات البرمجة وقواعد البيانات", index: "01", summary: "أساسيات البرمجة، قواعد البيانات العلائقية، البحث، والاستعلامات على الرسوم البيانية.", groups: [
          { label: "البرمجة", items: ["Python", "Multithreading", "OOP", "C++", "Java", "JavaScript"] }, { label: "قواعد البيانات والرسوم", items: ["Cypher", "Neo4j", "SQL", "PostgreSQL", "MySQL", "Elasticsearch"] }, { label: "علم البيانات والسكربتات", items: ["R", "Bash"] },
        ]},
        { title: "الذكاء الاصطناعي، التعلم الآلي والتعلم العميق", index: "02", summary: "نماذج تنبؤية، ذكاء اصطناعي توليدي، NLP، LLMs، رؤية حاسوبية وأدوات تحسين.", groups: [
          { label: "DL و GenAI", items: ["PyTorch", "TensorFlow", "Keras", "Transformers", "Hugging Face"] }, { label: "ML تنبؤي", items: ["XGBoost", "LightGBM", "Scikit-learn", "Time Series"] }, { label: "NLP و LLM", items: ["RAG", "LLM Fine-tuning", "Word Embeddings", "TF-IDF"] }, { label: "الرؤية والصورة", items: ["Computer Vision", "تحليل الصور", "توليد الصور", "GANs", "C++"] },
        ]},
        { title: "ذكاء اصطناعي خوارزمي ووكيل متقدم", index: "03", summary: "استدلال وكيل من الصفر، بروتوكولات تفاوض، ائتلافات وخوارزميات قرار.", featured: true, groups: [
          { label: "ذكاء اصطناعي وكيل", items: ["SMA", "BDI", "FIPA-ACL", "توجيه غير متزامن"] }, { label: "نظرية الألعاب والقرار", items: ["Rubinstein/Zeuthen", "قيمة Shapley", "MCDA"] }, { label: "بحوث العمليات", items: ["توليد ائتلافات IDP", "برمجة ديناميكية", "تقليم"] },
        ]},
        { title: "هندسة البيانات والمعمارية", index: "04", summary: "خطوط معالجة آلية، نمذجة رسوم بيانية، تحليل بيانات غير متجانسة وأدوات نشر.", groups: [
          { label: "Big Data و Pipelines", items: ["ETL آلي", "Pandas", "NumPy", "تكامل API", "Kafka"] }, { label: "نمذجة الرسوم", items: ["Neo4j", "Property Graph", "Data Importer", "Aura", "JSON متعدد الأشكال"] }, { label: "DevOps والنشر", items: ["Docker", "Git", "Linux", "Postman"] },
        ]},
        { title: "هندسة البرمجيات وذكاء الأعمال", index: "05", summary: "تطوير full-stack، لوحات BI، نمذجة أولية، تصميم، نمذجة عمليات وأنظمة ERP.", groups: [
          { label: "ويب وموبايل", items: ["React", "NextJS", "Django", "Laravel", "VueJS", "Flutter"] }, { label: "BI وتصور البيانات", items: ["PowerBI", "Streamlit", "Dashboards", "مؤشرات فورية", "EDA"] }, { label: "التصميم والعمليات", items: ["UI/UX", "Figma", "BPMN", "ERP", "Odoo"] },
        ]},
      ],
      specializations: [
        { title: "هندسة البيانات ومعمارية الرسوم", score: 4, proof: "خطوط ETL معقدة لبيانات غير متجانسة، توحيد مكاني، ونمذجة Property Graph باستخدام Neo4j/Cypher لتحليل القرار MCDA." },
        { title: "الذكاء التنبؤي و Data Science", score: 4, proof: "تنظيف البيانات، هندسة الخصائص، ونماذج انحدار متقدمة مثل XGBoost و LightGBM، مع نتائج قوية في مسابقات مثل HAICK 2025 و ADC 4.0 BNP Paribas." },
        { title: "NLP و LLMs", score: 4.5, proof: "إتقان منظومة NLP الحديثة: معماريات RAG، fine-tuning للـ LLMs، استخراج الكيانات، embeddings وسير عمل ذكاء الوثائق." },
        { title: "الذكاء الوكيل والأنظمة متعددة الوكلاء", score: 4.5, proof: "وكلاء BDI مستقلون، بروتوكولات تفاوض، نظرية ألعاب Rubinstein/Zeuthen، خوارزميات ائتلاف واستدلال بقيمة Shapley." },
        { title: "Deep Learning و Computer Vision", score: 4, proof: "شبكات عصبية باستخدام PyTorch و TensorFlow لتحليل الصور، توليد الصور بـ GANs، وخطوط معالجة تسلسلية من نوع LSTM." },
        { title: "معمارية برمجيات Full-Stack", score: 3, proof: "تسليم end-to-end باستخدام React و NextJS و Django و Laravel و VueJS و Flutter، مع تكامل ERP ونمذجة أولية موجهة للإنتاج." },
      ],
    },
  } as const;

  const localizedContent = localizedAboutContent[localeKey];

  const techExpertiseSections = localizedContent.techSections;

  const specializationFocus = localizedContent.specializations;

  const languageLevels = [
    {
      name: t.about.languages.items[0] ?? "Arabic",
      level: localizedContent.levels.native,
      score: 5,
      accent: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      gradient: "from-emerald-500/20 via-cyan-400/10 to-transparent",
    },
    {
      name: t.about.languages.items[1] ?? "French",
      level: localizedContent.levels.fluent,
      score: 4,
      accent: "text-blue-400 border-blue-400/30 bg-blue-400/10",
      gradient: "from-blue-500/20 via-primary/10 to-transparent",
    },
    {
      name: t.about.languages.items[2] ?? "English",
      level: localizedContent.levels.fluent,
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
                                    {localizedContent.featuredBadge}
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
                <p className="text-xs font-black uppercase tracking-[0.22em] text-muted-foreground">{localizedContent.focusAreas}</p>
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
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-muted-foreground">{localizedContent.communication}</p>
                    <h3 className="mt-1 text-2xl font-bold text-secondary">{t.about.languages.title}</h3>
                  </div>
                  <div className="hidden rounded-2xl border border-secondary/30 bg-secondary/10 px-3 py-2 text-sm font-bold text-secondary sm:block">
                    {localizedContent.languagesCount}
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