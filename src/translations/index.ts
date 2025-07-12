export interface Translation {
  // Navigation
  nav: {
    about: string;
    projects: string;
    achievements: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    greeting: string;
    name: string;
    title: string;
    me:string;
    description: string;
    getInTouch: string;
    downloadResume: string;
  };
  
  // About Section
  about: {
    title: string;
    me:string;
    subtitle: string;
    journey: {
      title: string;
      intro: string;
      background: string;
      foundation: string;
      focus: string;
      professional: string;
      drive: string;
      aspiration: string;
    };
    languages: {
      title: string;
      items: string[];
    };
    techStack: {
      title: string;
    };
    specializations: {
      title: string;
      items: string[];
    };
  };
  
  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    readMore: string;
    backToProjects: string;
    projectDetails: {
      overview: string;
      technologies: string;
      challenges: string;
      results: string;
      keyFeatures: string;
    };
    items: {
      dataAnalytics: {
        title: string;
        description: string;
        overview: string;
        challenges: string;
        results: string;
        keyFeatures: string[];
      };
      nlpSentiment: {
        title: string;
        description: string;
        overview: string;
        challenges: string;
        results: string;
        keyFeatures: string[];
      };
      computerVision: {
        title: string;
        description: string;
        overview: string;
        challenges: string;
        results: string;
        keyFeatures: string[];
      };
      dataVisualization: {
        title: string;
        description: string;
        overview: string;
        challenges: string;
        results: string;
        keyFeatures: string[];
      };
    };
  };
  
  // Achievements Section
 achievements: {
    title: string;
    subtitle: string;
    stats: {
      competitionWins: string;
      dataScienceProjects: string;
      yearsExperience: string;
    };
    competitions: {
      place3rd: string;
      place2nd: string;
      place1st: string;
      ingehack: {
        event: string;
        description: string;
      };
      algeriaDataCup: {
        event: string;
        description: string;
      };
      haickAiChallenge: {
        event: string;
        description: string;
      };
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
  
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    resources: string;
    contact: string;
    copyright: string;
  };
}

const translations: Record<string, Translation> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects", 
      achievements: "Achievements",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Walid BENBOUTA",
      title: "AI Engineer & Data Scientist",
      me:"Crafting bold, responsible AI from raw data to real-world impact. With humble expertise in AI, Data Science, and Deep Learning, I turn data into insight through exploration, modeling, and deployment. Awarded in top Algerian competitions, I build intelligent systems that speak, think, and solve.",
      description: "Transforming data into intelligent solutions that drive innovation and solve real-world problems.",
      getInTouch: "Get In Touch",
      downloadResume: "Download Resume"
    },
    about: {
      title: "About ",
      me:"Me",
      subtitle: "Passionate about creating intelligent solutions that make a difference",
      journey: {
        title: "My Journey",
        intro: "As a final-year student at the National Higher School of Computer Science (ESI Algiers), specializing in Information Systems, I've cultivated a passion for data that goes beyond theory.",
        background: "From my early years, a strong background in mathematics and computer science shaped my analytical mindset — and ESI gave me the perfect playground to turn that curiosity into skill.",
        foundation: "Over the years, I've built a solid foundation in databases, algorithms, and software engineering, reinforced by hands-on experience in data engineering and business intelligence. I've designed automated ETL pipelines, modeled data warehouses, built interactive dashboards with real-time KPIs, and integrated APIs to streamline decision-making across complex systems.",
        focus: "My focus has always been clear: turn raw data into meaningful insight.",
        professional: "Professionally, I contributed to impactful projects such as RNA — a platform enhancing commune management in Algeria — where I tackled large-scale data analysis and full-stack development. I've also led academic projects, including a zero-paper e-commerce solution, a hotel management system, and an e-tourism prototype, often working as a full-stack developer and data analyst.",
        drive: "What drives me is the thrill of solving real-world problems with elegant, data-driven solutions. I don't just write code — I build intelligent systems that empower people to make smarter decisions. Whether it's optimizing queries for massive datasets or transforming scattered business data into clear visual stories, I bring rigor, creativity, and a commitment to excellence.",
        aspiration: "I aspire to bridge the gap between traditional information systems and the transformative power of AI. With a hybrid profile in data engineering, machine learning, and system integration, I'm ready to help shape the next generation of intelligent organizations."
      },
      languages: {
        title: "Languages",
        items: ["Arabic", "French", "English"]
      },
      techStack: {
        title: "Tech Stack"
      },
      specializations: {
        title: "Specializations",
        items: [
          "Deep Learning & Neural Networks",
          "Natural Language Processing", 
          "Generative AI & GANs",
          "Data Science & Visualization"
        ]
      }
    },
    projects: {
      title: "Projects",
      subtitle: "Showcasing innovative solutions and technical expertise",
      readMore: "Read More",
      backToProjects: "Back to Projects",
      projectDetails: {
        overview: "Project Overview",
        technologies: "Technologies Used",
        challenges: "Challenges Faced",
        results: "Results & Impact",
        keyFeatures: "Key Features"
      },
      items: {
        dataAnalytics: {
          title: "AI-Powered Data Analytics Platform",
          description: "Advanced analytics platform using PyTorch and React for real-time data insights and predictive modeling.",
          overview: "This comprehensive data analytics platform leverages the power of artificial intelligence to transform raw data into actionable insights. Built with cutting-edge technologies, it provides real-time analytics, predictive modeling, and interactive visualizations that enable businesses to make data-driven decisions with confidence. The platform integrates seamlessly with existing data sources and provides a user-friendly interface for both technical and non-technical users.",
          challenges: "The main challenges included handling large-scale data processing in real-time, ensuring accurate predictive models across diverse datasets, and creating an intuitive interface that could serve both data scientists and business users. Additionally, optimizing performance while maintaining data security and implementing scalable architecture for growing data volumes required careful planning and execution.",
          results: "Successfully deployed a platform that processes over 10TB of data daily, providing 99.9% uptime and reducing analysis time by 75%. The predictive models achieved 94% accuracy, leading to improved business outcomes and strategic decision-making. User adoption exceeded expectations with 89% satisfaction rate.",
          keyFeatures: [
            "Real-time data processing and analytics",
            "Advanced machine learning algorithms for predictive modeling", 
            "Interactive dashboards with customizable visualizations",
            "Automated report generation and scheduling",
            "API integration for seamless data connectivity",
            "Role-based access control and data security"
          ]
        },
        nlpSentiment: {
          title: "NLP Sentiment Analysis Engine",
          description: "Multi-language sentiment analysis system optimized for North African dialects and languages.",
          overview: "A sophisticated natural language processing engine specifically designed to understand and analyze sentiment in North African dialects and languages. This project addresses the unique linguistic challenges of the region, incorporating cultural context and colloquial expressions to provide accurate sentiment analysis for Arabic, Berber, and French texts commonly used in North Africa.",
          challenges: "Developing accurate sentiment analysis for North African dialects required extensive linguistic research and custom model training. The scarcity of labeled datasets for regional dialects, handling code-switching between languages, and understanding cultural context in sentiment expression posed significant technical and research challenges.",
          results: "Achieved 87% accuracy for Algerian dialect sentiment analysis, 92% for standard Arabic, and 89% for French text analysis. The system successfully processes mixed-language content and has been adopted by 3 major social media monitoring companies in the region.",
          keyFeatures: [
            "Multi-language support for Arabic, French, and Berber",
            "Dialect-specific sentiment analysis for North African variants",
            "Real-time processing with API integration",
            "Cultural context understanding for accurate interpretation",
            "Batch processing capabilities for large datasets",
            "Confidence scoring and uncertainty handling"
          ]
        },
        computerVision: {
          title: "Computer Vision GAN Project",
          description: "Generative Adversarial Network for creating high-quality synthetic images with custom conditioning.",
          overview: "An advanced computer vision project utilizing Generative Adversarial Networks (GANs) to create photorealistic synthetic images with precise control over various attributes. The system enables users to generate high-quality images based on specific conditions, making it valuable for data augmentation, creative applications, and research purposes.",
          challenges: "Training stable GANs required extensive experimentation with architectures and hyperparameters. Ensuring mode collapse prevention, achieving consistent quality across different image categories, and implementing effective conditioning mechanisms while maintaining generation speed were primary technical hurdles.",
          results: "Successfully generated images with 256x256 resolution achieving FID score of 15.2, surpassing baseline models by 23%. The system can generate diverse, high-quality images across 50+ categories with controllable attributes, reducing synthetic data generation time by 60%.",
          keyFeatures: [
            "High-resolution image generation (up to 1024x1024)",
            "Conditional generation with attribute control",
            "Style transfer and image-to-image translation",
            "Data augmentation for training dataset enhancement",
            "Real-time generation with optimized inference",
            "Quality assessment and automatic filtering"
          ]
        },
        dataVisualization: {
          title: "Interactive Data Visualization Suite",
          description: "Comprehensive data visualization toolkit built with modern web technologies and advanced charting libraries.",
          overview: "A powerful and flexible data visualization suite that transforms complex datasets into intuitive, interactive visual representations. Built with modern web technologies, this platform provides a comprehensive set of tools for creating stunning visualizations, from simple charts to complex multi-dimensional data explorations.",
          challenges: "Creating a balance between powerful functionality and user-friendly interface required extensive UX research. Handling large datasets efficiently while maintaining smooth interactions, ensuring cross-browser compatibility, and providing real-time collaboration features presented significant technical challenges.",
          results: "Delivered a platform serving 500+ daily active users, supporting datasets up to 1M records with sub-second rendering. Improved data comprehension by 68% according to user studies, and reduced time-to-insight by 45% compared to traditional tools.",
          keyFeatures: [
            "20+ chart types with customization options",
            "Real-time data binding and live updates",
            "Interactive filtering and drill-down capabilities",
            "Collaborative sharing and commenting features",
            "Export capabilities for various formats",
            "Responsive design for mobile and desktop"
          ]
        }
      }
    },
   achievements: {
    title: "Competition Achievements",
    subtitle: "Recognition for excellence in AI innovation, data science mastery, and competitive programming across Algeria's tech landscape",
    stats: {
      competitionWins: "Competition Wins",
      dataScienceProjects: "DataScience Projects",
      yearsExperience: "Years Experience",
    },
    competitions: {
      place3rd: "3rd Place",
      place2nd: "2nd Place",
      place1st: "1st Place",
      ingehack: {
        event: "IngeHack",
        description: "A hybrid between hackathon and datathon focused on building AI agents. I developed an intelligent system for parsing, extracting, and classifying resume data using NLP techniques such as entity recognition and skill matching. The solution was optimized for deployment in a competitive environment.",
      },
      algeriaDataCup: {
        event: "Algeria Data Cup (ADC)",
        description: "A national AI competition organized by the École Nationale Polytechnique in Algiers, focused on solving real-world challenges. I worked on building a predictive model for daily meal forecasting at BNP Paribas, handling data cleaning, integration, exploratory analysis, feature engineering, and training advanced regression models. The experience also strengthened my teamwork and stress management skills in a high-pressure environment.",
      },
      haickAiChallenge: {
        event: "HAiCK AI Challenge",
        description: "An elite competition held at ESI Algiers by the School of AI, spotlighting cutting-edge machine learning and AI research. I developed a high-performance financial prediction system that combined advanced news processing with TF-IDF embeddings, PCA-based dimensionality reduction, and a custom sentiment lexicon to capture market trends. The model featured multi-asset correlation modeling, news impact differentiation, and stability constraints to ensure robust, accurate forecasts across diverse market scenarios—leading our team to outperform 12 others in the TSA Challenge.",
      },
    },
  },

    contact: {
      title: "Contact",
      subtitle: "Let's connect and build something amazing together",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message"
      }
    },
    footer: {
      description: "AI Engineer & Data Scientist passionate about creating intelligent solutions.",
      quickLinks: "Quick Links",
      resources: "Resources",
      contact: "Contact",
      copyright: "All rights reserved."
    }
  },
  
  fr: {
    nav: {
      about: "À propos Moi",
      projects: "Projets",
      achievements: "Réalisations", 
      contact: "Contact"
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Walid BENBOUTA",
      title: "Ingénieur IA & Data Scientist",
      me:"Je crée une IA audacieuse et responsable, à partir de données brutes et pour un impact concret. Fort de mon expertise en IA, science des données et apprentissage profond, je transforme les données en informations par l'exploration, la modélisation et le déploiement. Récompensé lors des plus grands concours algériens, je construis des systèmes intelligents qui parlent, pensent et résolvent des problèmes.",
      description: "Transformer les données en solutions intelligentes qui stimulent l'innovation et résolvent les problèmes du monde réel.",
      getInTouch: "Contactez-moi",
      downloadResume: "Télécharger CV"
    },
    about: {
      title: "À propos ",
      me:"Moi",
      subtitle: "Passionné par la création de solutions intelligentes qui font la différence",
      journey: {
        title: "Mon Parcours",
        intro: "En tant qu'étudiant en dernière année à l'École Nationale Supérieure d'Informatique (ESI Alger), spécialisé en Systèmes d'Information, j'ai cultivé une passion pour les données qui va au-delà de la théorie.",
        background: "Depuis mes premières années, une solide formation en mathématiques et informatique a façonné mon esprit analytique — et ESI m'a donné le terrain de jeu parfait pour transformer cette curiosité en compétence.",
        foundation: "Au fil des années, j'ai construit une base solide en bases de données, algorithmes et génie logiciel, renforcée par une expérience pratique en ingénierie des données et intelligence d'affaires. J'ai conçu des pipelines ETL automatisés, modélisé des entrepôts de données, créé des tableaux de bord interactifs avec des KPI en temps réel, et intégré des API pour rationaliser la prise de décision dans des systèmes complexes.",
        focus: "Mon objectif a toujours été clair : transformer les données brutes en insights significatifs.",
        professional: "Professionnellement, j'ai contribué à des projets impactants comme RNA — une plateforme améliorant la gestion communale en Algérie — où j'ai abordé l'analyse de données à grande échelle et le développement full-stack. J'ai également dirigé des projets académiques, notamment une solution e-commerce zéro papier, un système de gestion hôtelière et un prototype e-tourisme, travaillant souvent comme développeur full-stack et analyste de données.",
        drive: "Ce qui me motive, c'est le frisson de résoudre des problèmes du monde réel avec des solutions élégantes basées sur les données. Je n'écris pas seulement du code — je construis des systèmes intelligents qui permettent aux gens de prendre des décisions plus intelligentes. Qu'il s'agisse d'optimiser des requêtes pour des jeux de données massifs ou de transformer des données d'entreprise dispersées en histoires visuelles claires, j'apporte rigueur, créativité et engagement envers l'excellence.",
        aspiration: "J'aspire à combler le fossé entre les systèmes d'information traditionnels et le pouvoir transformateur de l'IA. Avec un profil hybride en ingénierie des données, apprentissage automatique et intégration de systèmes, je suis prêt à aider à façonner la prochaine génération d'organisations intelligentes."
      },
      languages: {
        title: "Langues",
        items: ["Arabe", "Français", "Anglais"]
      },
      techStack: {
        title: "Stack Technique"
      },
      specializations: {
        title: "Spécialisations",
        items: [
          "Deep Learning & Réseaux de Neurones",
          "Traitement du Langage Naturel",
          "IA Générative & GANs", 
          "Data Science & Visualisation"
        ]
      }
    },
    projects: {
      title: "Projets",
      subtitle: "Présentation de solutions innovantes et d'expertise technique",
      readMore: "Lire la Suite",
      backToProjects: "Retour aux Projets",
      projectDetails: {
        overview: "Aperçu du Projet",
        technologies: "Technologies Utilisées",
        challenges: "Défis Rencontrés",
        results: "Résultats et Impact",
        keyFeatures: "Caractéristiques Clés"
      },
      items: {
        dataAnalytics: {
          title: "Plateforme d'Analyse de Données IA",
          description: "Plateforme d'analyse avancée utilisant PyTorch et React pour des insights de données en temps réel et la modélisation prédictive.",
          overview: "Cette plateforme complète d'analyse de données exploite la puissance de l'intelligence artificielle pour transformer les données brutes en insights exploitables. Construite avec des technologies de pointe, elle fournit des analyses en temps réel, de la modélisation prédictive et des visualisations interactives qui permettent aux entreprises de prendre des décisions basées sur les données avec confiance.",
          challenges: "Les principaux défis incluaient le traitement de données à grande échelle en temps réel, assurer des modèles prédictifs précis sur des jeux de données divers, et créer une interface intuitive pouvant servir à la fois les data scientists et les utilisateurs métier.",
          results: "Déploiement réussi d'une plateforme qui traite plus de 10 To de données quotidiennement, avec 99,9% de disponibilité et réduction du temps d'analyse de 75%. Les modèles prédictifs atteignent 94% de précision.",
          keyFeatures: [
            "Traitement et analyse de données en temps réel",
            "Algorithmes d'apprentissage automatique avancés",
            "Tableaux de bord interactifs avec visualisations personnalisables",
            "Génération automatique de rapports",
            "Intégration API pour connectivité de données",
            "Contrôle d'accès basé sur les rôles"
          ]
        },
        nlpSentiment: {
          title: "Moteur d'Analyse de Sentiment NLP",
          description: "Système d'analyse de sentiment multilingue optimisé pour les dialectes et langues d'Afrique du Nord.",
          overview: "Un moteur sophistiqué de traitement du langage naturel spécialement conçu pour comprendre et analyser le sentiment dans les dialectes et langues d'Afrique du Nord, incorporant le contexte culturel et les expressions colloquiales.",
          challenges: "Développer une analyse de sentiment précise pour les dialectes nord-africains nécessitait une recherche linguistique extensive et un entraînement de modèles personnalisés. La rareté des jeux de données étiquetés pour les dialectes régionaux posait des défis techniques importants.",
          results: "Atteint 87% de précision pour l'analyse de sentiment en dialecte algérien, 92% pour l'arabe standard, et 89% pour l'analyse de texte français. Le système traite avec succès le contenu multilingue.",
          keyFeatures: [
            "Support multilingue pour arabe, français et berbère",
            "Analyse de sentiment spécifique aux dialectes",
            "Traitement en temps réel avec intégration API",
            "Compréhension du contexte culturel",
            "Capacités de traitement par lots",
            "Notation de confiance et gestion d'incertitude"
          ]
        },
        computerVision: {
          title: "Projet GAN de Vision par Ordinateur",
          description: "Réseau Antagoniste Génératif pour créer des images synthétiques de haute qualité avec conditionnement personnalisé.",
          overview: "Un projet avancé de vision par ordinateur utilisant des Réseaux Antagonistes Génératifs (GANs) pour créer des images synthétiques photoréalistes avec un contrôle précis sur divers attributs.",
          challenges: "L'entraînement de GANs stables nécessitait une expérimentation extensive avec les architectures et hyperparamètres. Prévenir l'effondrement de mode et maintenir une qualité constante était un défi technique majeur.",
          results: "Génération réussie d'images avec résolution 256x256 atteignant un score FID de 15,2, surpassant les modèles de référence de 23%. Le système peut générer des images diverses et de haute qualité.",
          keyFeatures: [
            "Génération d'images haute résolution (jusqu'à 1024x1024)",
            "Génération conditionnelle avec contrôle d'attributs",
            "Transfert de style et traduction image-à-image",
            "Augmentation de données pour amélioration des jeux d'entraînement",
            "Génération en temps réel avec inférence optimisée",
            "Évaluation de qualité et filtrage automatique"
          ]
        },
        dataVisualization: {
          title: "Suite de Visualisation de Données Interactive",
          description: "Boîte à outils complète de visualisation de données construite avec des technologies web modernes et des bibliothèques de graphiques avancées.",
          overview: "Une suite puissante et flexible de visualisation de données qui transforme des jeux de données complexes en représentations visuelles intuitives et interactives.",
          challenges: "Créer un équilibre entre fonctionnalité puissante et interface conviviale nécessitait une recherche UX extensive. Gérer efficacement de gros jeux de données tout en maintenant des interactions fluides présentait des défis techniques significatifs.",
          results: "Livraison d'une plateforme servant 500+ utilisateurs actifs quotidiens, supportant des jeux de données jusqu'à 1M d'enregistrements avec rendu sub-seconde. Amélioration de la compréhension des données de 68%.",
          keyFeatures: [
            "20+ types de graphiques avec options de personnalisation",
            "Liaison de données en temps réel et mises à jour en direct",
            "Capacités de filtrage interactif et exploration",
            "Fonctionnalités de partage collaboratif",
            "Capacités d'export pour divers formats",
            "Design responsive pour mobile et bureau"
          ]
        }
      }
    },
   achievements: {
    title: "Réalisations Compétition",
    subtitle: "Reconnaissance pour l'excellence en innovation IA, maîtrise de la science des données et programmation compétitive à travers le paysage technologique algérien",
    stats: {
      competitionWins: "Compétitions Gagnées",
      dataScienceProjects: "Projets de Science des Données",
      yearsExperience: "Années d'Expérience",
    },
    competitions: {
      place3rd: "3ème Place",
      place2nd: "2ème Place",
      place1st: "1ère Place",
      ingehack: {
        event: "IngeHack",
        description: "Un hybride entre hackathon et datathon axé sur la construction d'agents IA. J'ai développé un système intelligent pour l'analyse, l'extraction et la classification de données de CV en utilisant des techniques de PNL telles que la reconnaissance d'entités et la correspondance de compétences. La solution a été optimisée pour un déploiement dans un environnement compétitif.",
      },
      algeriaDataCup: {
        event: "Algeria Data Cup (ADC)",
        description: "Une compétition nationale d'IA organisée par l'École Nationale Polytechnique d'Alger, axée sur la résolution de défis du monde réel. J'ai travaillé sur la construction d'un modèle prédictif pour la prévision quotidienne des repas chez BNP Paribas, gérant le nettoyage des données, l'intégration, l'analyse exploratoire, l'ingénierie des fonctionnalités et l'entraînement de modèles de régression avancés. L'expérience a également renforcé mes compétences en travail d'équipe et en gestion du stress dans un environnement sous pression.",
      },
      haickAiChallenge: {
        event: "HAiCK AI Challenge",
        description: "Une compétition d'élite tenue à l'ESI Alger par la School of AI, mettant en lumière la recherche de pointe en apprentissage automatique et en IA. J'ai développé un système de prédiction financière haute performance combinant un traitement avancé des nouvelles avec des embeddings TF-IDF, une réduction de dimensionnalité basée sur la PCA et un lexique de sentiment personnalisé pour capturer les tendances du marché. Le modèle comportait une modélisation de corrélation multi-actifs, une différenciation de l'impact des nouvelles et des contraintes de stabilité pour assurer des prévisions robustes et précises dans divers scénarios de marché — menant notre équipe à surpasser 12 autres dans le défi TSA.",
      },
    },
  },
    contact: {
      title: "Contact",
      subtitle: "Connectons-nous et construisons quelque chose d'incroyable ensemble",
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        send: "Envoyer"
      }
    },
    footer: {
      description: "Ingénieur IA & Data Scientist passionné par la création de solutions intelligentes.",
      quickLinks: "Liens Rapides",
      resources: "Ressources",
      contact: "Contact",
      copyright: "Tous droits réservés."
    }
  },
  
  de: {
    nav: {
      about: "Über mich",
      projects: "Projekte",
      achievements: "Erfolge",
      contact: "Kontakt"
    },
    hero: {
      greeting: "Hallo, ich bin",
      name: "Walid BENBOUTA", 
      title: "KI-Ingenieur & Data Scientist",
      me:"Ich habe eine kühne und verantwortungsbewusste IA geschaffen, die aus rohen Menschen besteht und einen stoßfesten Beton ausgießt. Ich verfüge über mein Fachwissen in IA, die Wissensvermittlung und die umfassende Ausbildung, ich wandele die Daten in Informationen für die Erkundung, die Modellierung und den Einsatz um. Für mehr als 100.000 Teilnehmer in Algerien wurden die intelligenten Systeme, mit denen ich gesprochen habe, konstruiert, nachgedacht und die Probleme gelöst.",
      description: "Daten in intelligente Lösungen transformieren, die Innovation vorantreiben und reale Probleme lösen.",
      getInTouch: "Kontakt aufnehmen",
      downloadResume: "Lebenslauf herunterladen"
    },
    about: {
      title: "Über ",
      me:"Mich",
      subtitle: "Leidenschaftlich über die Erschaffung intelligenter Lösungen, die einen Unterschied machen",
      journey: {
        title: "Mein Werdegang",
        intro: "Als Absolvent der Nationalen Höheren Schule für Informatik (ESI Algier) mit Spezialisierung auf Informationssysteme habe ich eine Leidenschaft für Daten entwickelt, die über die Theorie hinausgeht.",
        background: "Von frühen Jahren an prägten eine starke Grundlage in Mathematik und Informatik meine analytische Denkweise — und ESI gab mir den perfekten Spielplatz, um diese Neugier in Fähigkeiten umzuwandeln.",
        foundation: "Über die Jahre habe ich eine solide Grundlage in Datenbanken, Algorithmen und Software-Engineering aufgebaut, verstärkt durch praktische Erfahrung in Data Engineering und Business Intelligence. Ich habe automatisierte ETL-Pipelines entworfen, Data Warehouses modelliert, interaktive Dashboards mit Echtzeit-KPIs erstellt und APIs integriert, um die Entscheidungsfindung in komplexen Systemen zu rationalisieren.",
        focus: "Mein Fokus war immer klar: rohe Daten in bedeutungsvolle Erkenntnisse umwandeln.",
        professional: "Beruflich habe ich zu wirkungsvollen Projekten wie RNA beigetragen — einer Plattform zur Verbesserung der Gemeindeverwaltung in Algerien — wo ich großskalige Datenanalyse und Full-Stack-Entwicklung anging. Ich habe auch akademische Projekte geleitet, einschließlich einer papierlosen E-Commerce-Lösung, eines Hotelmanagementsystems und eines E-Tourismus-Prototyps, oft als Full-Stack-Entwickler und Datenanalyst arbeitend.",
        drive: "Was mich antreibt, ist der Nervenkitzel, reale Probleme mit eleganten, datengetriebenen Lösungen zu lösen. Ich schreibe nicht nur Code — ich baue intelligente Systeme, die Menschen befähigen, intelligentere Entscheidungen zu treffen. Ob es um die Optimierung von Abfragen für massive Datensätze oder die Transformation verstreuter Geschäftsdaten in klare visuelle Geschichten geht, ich bringe Rigorosität, Kreativität und ein Engagement für Exzellenz mit.",
        aspiration: "Ich strebe danach, die Lücke zwischen traditionellen Informationssystemen und der transformativen Kraft der KI zu schließen. Mit einem hybriden Profil in Data Engineering, maschinellem Lernen und Systemintegration bin ich bereit, dabei zu helfen, die nächste Generation intelligenter Organisationen zu formen."
      },
      languages: {
        title: "Sprachen",
        items: ["Arabisch", "Französisch", "Englisch"]
      },
      techStack: {
        title: "Tech Stack"
      },
      specializations: {
        title: "Spezialisierungen",
        items: [
          "Deep Learning & Neuronale Netze",
          "Natürliche Sprachverarbeitung",
          "Generative KI & GANs",
          "Data Science & Visualisierung"
        ]
      }
    },
    projects: {
      title: "Projekte", 
      subtitle: "Innovative Lösungen und technische Expertise präsentieren",
      readMore: "Mehr Lesen",
      backToProjects: "Zurück zu Projekten",
      projectDetails: {
        overview: "Projektübersicht",
        technologies: "Verwendete Technologien",
        challenges: "Herausforderungen",
        results: "Ergebnisse & Auswirkungen",
        keyFeatures: "Hauptmerkmale"
      },
      items: {
        dataAnalytics: {
          title: "KI-gestützte Datenanalyseplattform",
          description: "Erweiterte Analyseplattform mit PyTorch und React für Echtzeit-Dateneinblicke und prädiktive Modellierung.",
          overview: "Diese umfassende Datenanalyseplattform nutzt die Kraft der künstlichen Intelligenz, um rohe Daten in verwertbare Erkenntnisse zu transformieren. Mit modernsten Technologien gebaut, bietet sie Echtzeitanalysen, prädiktive Modellierung und interaktive Visualisierungen.",
          challenges: "Die Hauptherausforderungen umfassten die Handhabung großflächiger Datenverarbeitung in Echtzeit, die Gewährleistung präziser prädiktiver Modelle über diverse Datensätze hinweg und die Schaffung einer intuitiven Benutzeroberfläche.",
          results: "Erfolgreiche Bereitstellung einer Plattform, die täglich über 10TB Daten verarbeitet, 99,9% Verfügbarkeit bietet und die Analysezeit um 75% reduziert. Die prädiktiven Modelle erreichen 94% Genauigkeit.",
          keyFeatures: [
            "Echtzeit-Datenverarbeitung und -analyse",
            "Erweiterte maschinelle Lernalgorithmen",
            "Interaktive Dashboards mit anpassbaren Visualisierungen",
            "Automatisierte Berichtserstellung",
            "API-Integration für nahtlose Datenkonnektivität",
            "Rollenbasierte Zugriffskontrolle"
          ]
        },
        nlpSentiment: {
          title: "NLP-Sentiment-Analyse-Engine",
          description: "Mehrsprachiges Sentiment-Analysesystem, optimiert für nordafrikanische Dialekte und Sprachen.",
          overview: "Eine hochentwickelte Natural Language Processing-Engine, speziell entwickelt, um Sentiment in nordafrikanischen Dialekten und Sprachen zu verstehen und zu analysieren.",
          challenges: "Die Entwicklung präziser Sentiment-Analyse für nordafrikanische Dialekte erforderte umfangreiche linguistische Forschung und benutzerdefiniertes Modelltraining.",
          results: "87% Genauigkeit für algerische Dialekt-Sentiment-Analyse erreicht, 92% für Standardarabisch und 89% für französische Textanalyse.",
          keyFeatures: [
            "Mehrsprachige Unterstützung für Arabisch, Französisch und Berber",
            "Dialektspezifische Sentiment-Analyse",
            "Echtzeitverarbeitung mit API-Integration",
            "Kulturelles Kontextverständnis",
            "Batch-Verarbeitungsfähigkeiten",
            "Vertrauensbewertung und Unsicherheitsbehandlung"
          ]
        },
        computerVision: {
          title: "Computer Vision GAN Projekt",
          description: "Generative Adversarial Network zur Erstellung hochwertiger synthetischer Bilder mit benutzerdefinierter Konditionierung.",
          overview: "Ein fortgeschrittenes Computer Vision Projekt, das Generative Adversarial Networks (GANs) nutzt, um fotorealistische synthetische Bilder mit präziser Kontrolle über verschiedene Attribute zu erstellen.",
          challenges: "Das Training stabiler GANs erforderte umfangreiche Experimente mit Architekturen und Hyperparametern. Die Verhinderung von Mode-Kollaps war eine primäre technische Hürde.",
          results: "Erfolgreiche Generierung von Bildern mit 256x256 Auflösung, die einen FID-Score von 15,2 erreichen und Baseline-Modelle um 23% übertreffen.",
          keyFeatures: [
            "Hochauflösende Bildgenerierung (bis zu 1024x1024)",
            "Bedingte Generierung mit Attributkontrolle",
            "Stiltransfer und Bild-zu-Bild-Übersetzung",
            "Datenaugmentation für Trainingsdatensatz-Verbesserung",
            "Echtzeitgenerierung mit optimierter Inferenz",
            "Qualitätsbewertung und automatische Filterung"
          ]
        },
        dataVisualization: {
          title: "Interaktive Datenvisualisierungs-Suite",
          description: "Umfassendes Datenvisualisierungs-Toolkit mit modernen Webtechnologien und erweiterten Diagrammbibliotheken.",
          overview: "Eine mächtige und flexible Datenvisualisierungs-Suite, die komplexe Datensätze in intuitive, interaktive visuelle Darstellungen transformiert.",
          challenges: "Das Schaffen eines Gleichgewichts zwischen mächtiger Funktionalität und benutzerfreundlicher Oberfläche erforderte umfangreiche UX-Forschung.",
          results: "Lieferung einer Plattform mit 500+ täglichen aktiven Nutzern, die Datensätze bis zu 1M Datensätzen mit Sub-Sekunden-Rendering unterstützt.",
          keyFeatures: [
            "20+ Diagrammtypen mit Anpassungsoptionen",
            "Echtzeit-Datenbindung und Live-Updates",
            "Interaktive Filter- und Drill-Down-Fähigkeiten",
            "Kollaborative Sharing- und Kommentarfunktionen",
            "Export-Funktionen für verschiedene Formate",
            "Responsive Design für Mobil und Desktop"
          ]
        }
      }
    },
   achievements: {
    title: "Wettbewerbserfolge",
    subtitle: "Anerkennung für Exzellenz in KI-Innovation, Datenwissenschaft und wettbewerbsorientierter Programmierung in Algeriens Technologielandschaft",
    stats: {
      competitionWins: "Wettbewerbserfolge",
      dataScienceProjects: "Data-Science-Projekte",
      yearsExperience: "Jahre Erfahrung",
    },
    competitions: {
      place3rd: "3. Platz",
      place2nd: "2. Platz",
      place1st: "1. Platz",
      ingehack: {
        event: "IngeHack",
        description: "Ein Hybrid aus Hackathon und Datathon, der sich auf die Entwicklung von KI-Agenten konzentrierte. Ich entwickelte ein intelligentes System zum Parsen, Extrahieren und Klassifizieren von Lebenslaufdaten unter Verwendung von NLP-Techniken wie Entitätserkennung und Fähigkeitenabgleich. Die Lösung wurde für den Einsatz in einer Wettbewerbsumgebung optimiert.",
      },
      algeriaDataCup: {
        event: "Algeria Data Cup (ADC)",
        description: "Ein nationaler KI-Wettbewerb, organisiert von der École Nationale Polytechnique in Algier, der sich auf die Lösung realer Herausforderungen konzentrierte. Ich arbeitete an der Entwicklung eines prädiktiven Modells für die tägliche Essensprognose bei BNP Paribas, kümmerte mich um Datenbereinigung, Integration, explorative Analyse, Feature-Engineering und das Training fortschrittlicher Regressionsmodelle. Die Erfahrung stärkte auch meine Teamfähigkeit und Stressbewältigung in einem Hochdruckumfeld.",
      },
      haickAiChallenge: {
        event: "HAiCK AI Challenge",
        description: "Ein Elite-Wettbewerb, der an der ESI Algier von der School of AI veranstaltet wurde und Spitzenforschung im Bereich des maschinellen Lernens und der KI beleuchtete. Ich entwickelte ein leistungsstarkes Finanzvorhersagesystem, das fortschrittliche Nachrichtenverarbeitung mit TF-IDF-Einbettungen, PCA-basierter Dimensionsreduktion und einem benutzerdefinierten Stimmungslexikon kombinierte, um Markttrends zu erfassen. Das Modell umfasste Multi-Asset-Korrelationsmodellierung, Differenzierung der Nachrichtenwirkung und Stabilitätsbeschränkungen, um robuste, genaue Prognosen in verschiedenen Marktszenarien zu gewährleisten – was unser Team dazu brachte, 12 andere im TSA-Challenge zu übertreffen.",
      },
    },
  },
    contact: {
      title: "Kontakt",
      subtitle: "Lassen Sie uns verbinden und gemeinsam etwas Erstaunliches schaffen",
      form: {
        name: "Name",
        email: "E-Mail",
        message: "Nachricht", 
        send: "Nachricht senden"
      }
    },
    footer: {
      description: "KI-Ingenieur & Data Scientist mit Leidenschaft für intelligente Lösungen.",
      quickLinks: "Quick Links",
      resources: "Ressourcen",
      contact: "Kontakt",
      copyright: "Alle Rechte vorbehalten."
    }
  },
  
  es: {
    nav: {
      about: "Acerca de",
      projects: "Proyectos",
      achievements: "Logros",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, soy",
      name: "Walid BENBOUTA",
      title: "Ingeniero de IA & Científico de Datos",
      me:"Creo IA audaz y responsable a partir de datos sin procesar para lograr un impacto concreto. Basándome en mi experiencia en IA, ciencia de datos y aprendizaje profundo, transformo los datos en conocimiento mediante la exploración, el modelado y la implementación. Tras haber ganado premios en importantes competiciones argelinas, construyo sistemas inteligentes que hablan, piensan y resuelven problemas.",
      description: "Transformando datos en soluciones inteligentes que impulsan la innovación y resuelven problemas del mundo real.",
      getInTouch: "Contactar",
      downloadResume: "Descargar CV"
    },
    about: {
      title: "Acerca de ",
      me:"mí",
      subtitle: "Apasionado por crear soluciones inteligentes que marcan la diferencia",
      journey: {
        title: "Mi Trayectoria",
        intro: "Como estudiante de último año en la Escuela Nacional Superior de Informática (ESI Argel), especializándome en Sistemas de Información, he cultivado una pasión por los datos que va más allá de la teoría.",
        background: "Desde mis primeros años, una sólida formación en matemáticas e informática moldeó mi mentalidad analítica — y ESI me dio el campo de juego perfecto para convertir esa curiosidad en habilidad.",
        foundation: "A lo largo de los años, he construido una base sólida en bases de datos, algoritmos e ingeniería de software, reforzada por experiencia práctica en ingeniería de datos e inteligencia de negocios. He diseñado pipelines ETL automatizados, modelado almacenes de datos, construido dashboards interactivos con KPIs en tiempo real, e integrado APIs para optimizar la toma de decisiones en sistemas complejos.",
        focus: "Mi enfoque siempre ha sido claro: convertir datos en bruto en insights significativos.",
        professional: "Profesionalmente, contribuí a proyectos impactantes como RNA — una plataforma que mejora la gestión comunal en Argelia — donde abordé análisis de datos a gran escala y desarrollo full-stack. También he liderado proyectos académicos, incluyendo una solución de comercio electrónico sin papel, un sistema de gestión hotelera y un prototipo de e-turismo, trabajando a menudo como desarrollador full-stack y analista de datos.",
        drive: "Lo que me impulsa es la emoción de resolver problemas del mundo real con soluciones elegantes basadas en datos. No solo escribo código — construyo sistemas inteligentes que empoderan a las personas para tomar decisiones más inteligentes. Ya sea optimizando consultas para conjuntos de datos masivos o transformando datos empresariales dispersos en historias visuales claras, aporto rigor, creatividad y compromiso con la excelencia.",
        aspiration: "Aspiro a cerrar la brecha entre los sistemas de información tradicionales y el poder transformador de la IA. Con un perfil híbrido en ingeniería de datos, aprendizaje automático e integración de sistemas, estoy listo para ayudar a dar forma a la próxima generación de organizaciones inteligentes."
      },
      languages: {
        title: "Idiomas",
        items: ["Árabe", "Francés", "Inglés"]
      },
      techStack: {
        title: "Stack Técnico"
      },
      specializations: {
        title: "Especializaciones",
        items: [
          "Deep Learning & Redes Neuronales",
          "Procesamiento de Lenguaje Natural",
          "IA Generativa & GANs",
          "Ciencia de Datos & Visualización"
        ]
      }
    },
    projects: {
      title: "Proyectos",
      subtitle: "Mostrando soluciones innovadoras y experiencia técnica",
      readMore: "Leer Más",
      backToProjects: "Volver a Proyectos",
      projectDetails: {
        overview: "Resumen del Proyecto",
        technologies: "Tecnologías Utilizadas",
        challenges: "Desafíos Enfrentados",
        results: "Resultados e Impacto",
        keyFeatures: "Características Clave"
      },
      items: {
        dataAnalytics: {
          title: "Plataforma de Análisis de Datos con IA",
          description: "Plataforma de análisis avanzada que utiliza PyTorch y React para insights de datos en tiempo real y modelado predictivo.",
          overview: "Esta plataforma integral de análisis de datos aprovecha el poder de la inteligencia artificial para transformar datos sin procesar en insights accionables. Construida con tecnologías de vanguardia, proporciona análisis en tiempo real, modelado predictivo y visualizaciones interactivas.",
          challenges: "Los principales desafíos incluyeron manejar el procesamiento de datos a gran escala en tiempo real, asegurar modelos predictivos precisos en conjuntos de datos diversos, y crear una interfaz intuitiva.",
          results: "Implementación exitosa de una plataforma que procesa más de 10TB de datos diariamente, proporcionando 99.9% de tiempo de actividad y reduciendo el tiempo de análisis en 75%.",
          keyFeatures: [
            "Procesamiento y análisis de datos en tiempo real",
            "Algoritmos avanzados de aprendizaje automático",
            "Paneles interactivos con visualizaciones personalizables",
            "Generación automática de informes",
            "Integración API para conectividad de datos",
            "Control de acceso basado en roles"
          ]
        },
        nlpSentiment: {
          title: "Motor de Análisis de Sentimientos NLP",
          description: "Sistema de análisis de sentimientos multiidioma optimizado para dialectos y lenguas del Norte de África.",
          overview: "Un motor sofisticado de procesamiento de lenguaje natural diseñado específicamente para entender y analizar sentimientos en dialectos y lenguas del Norte de África.",
          challenges: "Desarrollar análisis de sentimientos preciso para dialectos norteafricanos requería investigación lingüística extensa y entrenamiento de modelos personalizados.",
          results: "Logró 87% de precisión para análisis de sentimientos en dialecto argelino, 92% para árabe estándar, y 89% para análisis de texto francés.",
          keyFeatures: [
            "Soporte multiidioma para árabe, francés y bereber",
            "Análisis de sentimientos específico para dialectos",
            "Procesamiento en tiempo real con integración API",
            "Comprensión del contexto cultural",
            "Capacidades de procesamiento por lotes",
            "Puntuación de confianza y manejo de incertidumbre"
          ]
        },
        computerVision: {
          title: "Proyecto GAN de Visión por Computadora",
          description: "Red Generativa Adversarial para crear imágenes sintéticas de alta calidad con condicionamiento personalizado.",
          overview: "Un proyecto avanzado de visión por computadora que utiliza Redes Generativas Adversariales (GANs) para crear imágenes sintéticas fotorrealistas con control preciso sobre varios atributos.",
          challenges: "Entrenar GANs estables requería experimentación extensa con arquitecturas e hiperparámetros. Prevenir el colapso de modo era un obstáculo técnico primario.",
          results: "Generación exitosa de imágenes con resolución 256x256 logrando puntaje FID de 15.2, superando modelos base por 23%.",
          keyFeatures: [
            "Generación de imágenes de alta resolución (hasta 1024x1024)",
            "Generación condicional con control de atributos",
            "Transferencia de estilo y traducción imagen-a-imagen",
            "Aumento de datos para mejora de conjuntos de entrenamiento",
            "Generación en tiempo real con inferencia optimizada",
            "Evaluación de calidad y filtrado automático"
          ]
        },
        dataVisualization: {
          title: "Suite de Visualización de Datos Interactiva",
          description: "Kit de herramientas integral de visualización de datos construido con tecnologías web modernas y bibliotecas de gráficos avanzadas.",
          overview: "Una suite poderosa y flexible de visualización de datos que transforma conjuntos de datos complejos en representaciones visuales intuitivas e interactivas.",
          challenges: "Crear un equilibrio entre funcionalidad poderosa e interfaz amigable requería investigación UX extensa.",
          results: "Entrega de una plataforma sirviendo 500+ usuarios activos diarios, soportando conjuntos de datos hasta 1M registros con renderizado sub-segundo.",
          keyFeatures: [
            "20+ tipos de gráficos con opciones de personalización",
            "Enlace de datos en tiempo real y actualizaciones en vivo",
            "Capacidades de filtrado interactivo y exploración",
            "Funciones de compartir colaborativo",
            "Capacidades de exportación para varios formatos",
            "Diseño responsivo para móvil y escritorio"
          ]
        }
      }
    },
   achievements: {
    title: "Logros Competiciones",
    subtitle: "Reconocimiento por la excelencia en innovación de IA, dominio de la ciencia de datos y programación competitiva en el panorama tecnológico de Argelia",
    stats: {
      competitionWins: "Victorias en Competiciones",
      dataScienceProjects: "Proyectos de Ciencia de Datos",
      yearsExperience: "Años de Experiencia",
    },
    competitions: {
      place3rd: "3er Lugar",
      place2nd: "2do Lugar",
      place1st: "1er Lugar",
      ingehack: {
        event: "IngeHack",
        description: "Un híbrido entre hackathon y datathon centrado en la construcción de agentes de IA. Desarrollé un sistema inteligente para analizar, extraer y clasificar datos de currículums utilizando técnicas de PNL como el reconocimiento de entidades y la coincidencia de habilidades. La solución se optimizó para su implementación en un entorno competitivo.",
      },
      algeriaDataCup: {
        event: "Algeria Data Cup (ADC)",
        description: "Una competición nacional de IA organizada por la École Nationale Polytechnique de Argel, centrada en la resolución de desafíos del mundo real. Trabajé en la construcción de un modelo predictivo para la previsión diaria de comidas en BNP Paribas, gestionando la limpieza de datos, la integración, el análisis exploratorio, la ingeniería de características y el entrenamiento de modelos de regresión avanzados. La experiencia también fortaleció mis habilidades de trabajo en equipo y gestión del estrés en un entorno de alta presión.",
      },
      haickAiChallenge: {
        event: "HAiCK AI Challenge",
        description: "Una competición de élite celebrada en ESI Argel por la School of AI, destacando la investigación de vanguardia en aprendizaje automático e IA. Desarrollé un sistema de predicción financiera de alto rendimiento que combinaba el procesamiento avanzado de noticias con incrustaciones TF-IDF, reducción de dimensionalidad basada en PCA y un léxico de sentimiento personalizado para capturar las tendencias del mercado. El modelo presentaba modelado de correlación multi-activo, diferenciación del impacto de las noticias y restricciones de estabilidad para garantizar pronósticos robustos y precisos en diversos escenarios de mercado, lo que llevó a nuestro equipo a superar a otros 12 en el TSA Challenge.",
      },
    },
  },

    contact: {
      title: "Contacto",
      subtitle: "Conectemos y construyamos algo increíble juntos",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar Mensaje"
      }
    },
    footer: {
      description: "Ingeniero de IA & Científico de Datos apasionado por crear soluciones inteligentes.",
      quickLinks: "Enlaces Rápidos",
      resources: "Recursos",
      contact: "Contacto",
      copyright: "Todos los derechos reservados."
    }
  },
  
  ar: {
    nav: {
      about: "نبذة عني",
      projects: "المشاريع",
      achievements: "الإنجازات",
      contact: "التواصل"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "وليد بن بوتة",
      title: "مهندس ذكاء اصطناعي وعالم بيانات",
      me:"أُنشئ ذكاءً اصطناعيًا جريئًا ومسؤولًا من البيانات الخام لتحقيق تأثير ملموس. بالاعتماد على خبرتي في الذكاء الاصطناعي وعلوم البيانات والتعلم العميق، أُحوّل البيانات إلى معرفة من خلال الاستكشاف والنمذجة والتطبيق. بعد فوزي بجوائز في مسابقات جزائرية كبرى، أبني أنظمة ذكية تتحدث وتفكر وتحل المشكلات.",
      description: "تحويل البيانات إلى حلول ذكية تقود الابتكار وتحل مشاكل العالم الحقيقي.",
      getInTouch: "تواصل معي",
      downloadResume: "تحميل السيرة الذاتية"
    },
    about: {
      title: "نبذة  ",
      me:"عني",
      subtitle: "شغوف بإنشاء حلول ذكية تحدث فرقاً",
      journey: {
        title: "رحلتي",
        intro: "كطالب في السنة الأخيرة في المدرسة العليا الوطنية للإعلام الآلي (ESI الجزائر)، متخصص في أنظمة المعلومات، طورت شغفاً بالبيانات يتجاوز النظرية.",
        background: "منذ سنواتي الأولى، شكلت خلفية قوية في الرياضيات وعلوم الحاسوب عقليتي التحليلية — و ESI أعطتني الساحة المثالية لتحويل هذا الفضول إلى مهارة.",
        foundation: "على مر السنين، بنيت أساساً قوياً في قواعد البيانات والخوارزميات وهندسة البرمجيات، معززاً بخبرة عملية في هندسة البيانات وذكاء الأعمال. صممت خطوط أنابيب ETL آلية، ونمذجت مستودعات البيانات، وبنيت لوحات تحكم تفاعلية مع مؤشرات الأداء الرئيسية في الوقت الفعلي، ودمجت واجهات برمجة التطبيقات لتبسيط اتخاذ القرارات عبر الأنظمة المعقدة.",
        focus: "تركيزي كان واضحاً دائماً: تحويل البيانات الخام إلى رؤى ذات معنى.",
        professional: "مهنياً، ساهمت في مشاريع مؤثرة مثل RNA — منصة تعزز إدارة البلديات في الجزائر — حيث تعاملت مع تحليل البيانات على نطاق واسع والتطوير الشامل. كما قدت مشاريع أكاديمية، بما في ذلك حل التجارة الإلكترونية بدون ورق، ونظام إدارة الفنادق، ونموذج أولي للسياحة الإلكترونية، غالباً ما أعمل كمطور شامل ومحلل بيانات.",
        drive: "ما يحفزني هو إثارة حل مشاكل العالم الحقيقي بحلول أنيقة مدفوعة بالبيانات. لا أكتب الكود فقط — أبني أنظمة ذكية تمكن الناس من اتخاذ قرارات أذكى. سواء كان الأمر يتعلق بتحسين الاستعلامات لمجموعات البيانات الضخمة أو تحويل بيانات الأعمال المتناثرة إلى قصص بصرية واضحة، أحضر الصرامة والإبداع والالتزام بالتميز.",
        aspiration: "أطمح إلى سد الفجوة بين أنظمة المعلومات التقليدية والقوة التحويلية للذكاء الاصطناعي. مع ملف شخصي مختلط في هندسة البيانات والتعلم الآلي وتكامل الأنظمة، أنا مستعد للمساعدة في تشكيل الجيل القادم من المنظمات الذكية."
      },
      languages: {
        title: "اللغات",
        items: ["العربية", "الفرنسية", "الإنجليزية"]
      },
      techStack: {
        title: "المكدس التقني"
      },
      specializations: {
        title: "التخصصات",
        items: [
          "التعلم العميق والشبكات العصبية",
          "معالجة اللغة الطبيعية",
          "الذكاء الاصطناعي التوليدي و GANs",
          "علم البيانات والتصور"
        ]
      }
    },
    projects: {
      title: "المشاريع",
      subtitle: "عرض الحلول المبتكرة والخبرة التقنية",
      readMore: "اقرأ المزيد",
      backToProjects: "العودة للمشاريع",
      projectDetails: {
        overview: "نظرة عامة على المشروع",
        technologies: "التقنيات المستخدمة",
        challenges: "التحديات المواجهة",
        results: "النتائج والتأثير",
        keyFeatures: "الميزات الرئيسية"
      },
      items: {
        dataAnalytics: {
          title: "منصة تحليل البيانات بالذكاء الاصطناعي",
          description: "منصة تحليل متقدمة تستخدم PyTorch و React للحصول على رؤى البيانات في الوقت الفعلي والنمذجة التنبؤية.",
          overview: "تستفيد منصة تحليل البيانات الشاملة هذه من قوة الذكاء الاصطناعي لتحويل البيانات الخام إلى رؤى قابلة للتنفيذ. مبنية بتقنيات متطورة، توفر تحليلات في الوقت الفعلي ونمذجة تنبؤية وتصورات تفاعلية.",
          challenges: "تضمنت التحديات الرئيسية التعامل مع معالجة البيانات واسعة النطاق في الوقت الفعلي، وضمان نماذج تنبؤية دقيقة عبر مجموعات بيانات متنوعة، وإنشاء واجهة بديهية.",
          results: "نشر ناجح لمنصة تعالج أكثر من 10 تيرابايت من البيانات يومياً، توفر 99.9% من وقت التشغيل وتقلل وقت التحليل بنسبة 75%. النماذج التنبؤية حققت 94% دقة.",
          keyFeatures: [
            "معالجة وتحليل البيانات في الوقت الفعلي",
            "خوارزميات تعلم آلي متقدمة",
            "لوحات معلومات تفاعلية مع تصورات قابلة للتخصيص",
            "إنشاء تقارير آلية",
            "تكامل API للاتصال السلس بالبيانات",
            "التحكم في الوصول القائم على الأدوار"
          ]
        },
        nlpSentiment: {
          title: "محرك تحليل المشاعر NLP",
          description: "نظام تحليل مشاعر متعدد اللغات محسن للهجات واللغات الشمال أفريقية.",
          overview: "محرك متطور لمعالجة اللغات الطبيعية مصمم خصيصاً لفهم وتحليل المشاعر في اللهجات واللغات الشمال أفريقية.",
          challenges: "تطوير تحليل مشاعر دقيق للهجات الشمال أفريقية تطلب بحثاً لغوياً مكثفاً وتدريب نماذج مخصصة.",
          results: "حقق 87% دقة لتحليل مشاعر اللهجة الجزائرية، 92% للعربية المعيارية، و89% لتحليل النص الفرنسي.",
          keyFeatures: [
            "دعم متعدد اللغات للعربية والفرنسية والأمازيغية",
            "تحليل مشاعر خاص باللهجات",
            "معالجة في الوقت الفعلي مع تكامل API",
            "فهم السياق الثقافي",
            "قدرات المعالجة المجمعة",
            "تسجيل الثقة والتعامل مع عدم اليقين"
          ]
        },
        computerVision: {
          title: "مشروع GAN للرؤية الحاسوبية",
          description: "الشبكة التنافسية التوليدية لإنشاء صور اصطناعية عالية الجودة مع تكييف مخصص.",
          overview: "مشروع رؤية حاسوبية متقدم يستخدم الشبكات التنافسية التوليدية (GANs) لإنشاء صور اصطناعية واقعية مع تحكم دقيق في مختلف السمات.",
          challenges: "تدريب GANs مستقرة تطلب تجريب مكثف مع الهياكل والمعاملات الفائقة. منع انهيار الوضع كان عقبة تقنية أساسية.",
          results: "إنشاء ناجح للصور بدقة 256x256 محققة نتيجة FID 15.2، متفوقة على النماذج الأساسية بنسبة 23%.",
          keyFeatures: [
            "إنشاء صور عالية الدقة (حتى 1024x1024)",
            "إنشاء مشروط مع تحكم في السمات",
            "نقل الأسلوب والترجمة من صورة إلى صورة",
            "زيادة البيانات لتحسين مجموعات التدريب",
            "إنشاء في الوقت الفعلي مع استنتاج محسن",
            "تقييم الجودة والتصفية التلقائية"
          ]
        },
        dataVisualization: {
          title: "مجموعة تصور البيانات التفاعلية",
          description: "مجموعة أدوات شاملة لتصور البيانات مبنية بتقنيات الويب الحديثة ومكتبات الرسوم البيانية المتقدمة.",
          overview: "مجموعة قوية ومرنة لتصور البيانات تحول مجموعات البيانات المعقدة إلى تمثيلات بصرية بديهية وتفاعلية.",
          challenges: "إنشاء توازن بين الوظائف القوية والواجهة سهلة الاستخدام تطلب بحث UX مكثف.",
          results: "تسليم منصة تخدم 500+ مستخدم نشط يومياً، تدعم مجموعات البيانات حتى مليون سجل مع عرض أقل من الثانية.",
          keyFeatures: [
            "20+ نوع من الرسوم البيانية مع خيارات التخصيص",
            "ربط البيانات في الوقت الفعلي والتحديثات المباشرة",
            "قدرات التصفية التفاعلية والاستكشاف",
            "ميزات المشاركة التعاونية",
            "قدرات التصدير لصيغ مختلفة",
            "تصميم متجاوب للجوال وسطح المكتب"
          ]
        }
      }
    },
   achievements: {
    title: "إنجازات المسابقات",
    subtitle: "تقدير التميز في ابتكار الذكاء الاصطناعي، وإتقان علم البيانات، والبرمجة التنافسية في المشهد التكنولوجي الجزائري",
    stats: {
      competitionWins: "عدد المسابقات الفائزة",
      dataScienceProjects: "مشاريع علم البيانات",
      yearsExperience: "سنوات الخبرة",
    },
    competitions: {
      place3rd: "المركز الثالث",
      place2nd: "المركز الثاني",
      place1st: "المركز الأول",
      ingehack: {
        event: "إنجيه هاك",
        description: "مزيج بين هاكاثون وداتاثون يركز على بناء وكلاء الذكاء الاصطناعي. لقد طوّرت نظامًا ذكيًا لتحليل واستخراج وتصنيف بيانات السيرة الذاتية باستخدام تقنيات معالجة اللغة الطبيعية مثل التعرف على الكيانات ومطابقة المهارات. تم تحسين الحل للنشر في بيئة تنافسية.",
      },
      algeriaDataCup: {
        event: "كأس الجزائر للبيانات (ADC)",
        description: "مسابقة وطنية للذكاء الاصطناعي نظمتها المدرسة الوطنية متعددة التقنيات بالجزائر العاصمة، تركز على حل تحديات العالم الحقيقي. لقد عملت على بناء نموذج تنبؤي لتوقعات الوجبات اليومية في BNP Paribas، وتوليت تنظيف البيانات، ودمجها، والتحليل الاستكشافي، وهندسة الميزات، وتدريب نماذج الانحدار المتقدمة. كما عززت التجربة مهاراتي في العمل الجماعي وإدارة الإجهاد في بيئة عالية الضغط.",
      },
      haickAiChallenge: {
        event: "تحدي هايك للذكاء الاصطناعي",
        description: "مسابقة نخبوية أقيمت في المدرسة العليا للمعلوماتية بالجزائر العاصمة من قبل مدرسة الذكاء الاصطناعي، تسلط الضوء على أحدث أبحاث التعلم الآلي والذكاء الاصطناعي. لقد طوّرت نظامًا عالي الأداء للتنبؤ المالي يجمع بين معالجة الأخبار المتقدمة مع تضمينات TF-IDF، وتقليل الأبعاد القائم على PCA، ومعجم مشاعر مخصص لالتقاط اتجاهات السوق. يتميز النموذج بنمذجة الارتباط متعدد الأصول، وتمايز تأثير الأخبار، وقيود الاستقرار لضمان توقعات قوية ودقيقة عبر سيناريوهات السوق المتنوعة – مما أدى إلى تفوق فريقنا على 12 فريقًا آخر في تحدي TSA.",
      },
    },
  },

    contact: {
      title: "التواصل",
      subtitle: "لنتواصل ونبني شيئاً مذهلاً معاً",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال الرسالة"
      }
    },
    footer: {
      description: "مهندس ذكاء اصطناعي وعالم بيانات شغوف بإنشاء حلول ذكية.",
      quickLinks: "روابط سريعة",
      resources: "الموارد",
      contact: "التواصل",
      copyright: "جميع الحقوق محفوظة."
    }
  }
};

export { translations };