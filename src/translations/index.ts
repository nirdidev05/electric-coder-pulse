import { GanttChart } from "lucide-react";

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
    centerOrbText: string;
    subtitle: string;
    methods: {
      email: string;
      github: string;
      linkedin: string;
    };
    getInTouch: string;
    opportunities: {
      title: string;
      aiEngineering: string;
      researchProjects: string;
      freelance: string;
      speaking: string;
    };
  };
  // Footer
  footer: {
    brandName: string; // "Mr. Benbouta Walid"
    tagline: string;
    sectionTitles: {
      projects: string;
      resources: string;
      contact: string;
    };
    links: {
      projects: {
        viewProjects: string;
        achievements: string;
        resume: string;
      };
      resources: {
        aboutMe: string;
        techStack: string;
        experience: string;
      };
      contact: {
        getInTouch: string;
        github: string;
        linkedin: string;
      };
    };
    copyrightName: string; // "BENBOUTA Walid" for copyright
    roleEngineer: string;
    roleGraduate: string;
  };
  gan:{
nav: {
    overview: string
    dataAugmentation: string
    ganArchitecture: string
    mathematics: string
    validation: string
    applications: string
    roadmap: string
  }

  // Hero Section
  hero: {
    badge: string
    title: string
    subtitle: string
    keyInnovation: string
    performance: string
  }

  // Introduction Card
  introduction: {
    title: string
    subtitle: string
    objective: {
      title: string
      description: string
    }
    dataSource: {
      title: string
      description: string
    }
    innovation: {
      title: string
      description: string
    }
    fenExample: string
    fenDescription: string
    tensorEncoding: {
      title: string
      description: string
      structure: {
        whitePieces: string
        blackPieces: string
        turn: string
        emptyCells: string
      }
    }
    challenges: {
      title: string
      problems: {
        thematicImbalance: string
        complexValidation: string
        strictConstraints: string
        uniqueSolutions: string
      }
      solutions: {
        targetedAugmentation: string
        automaticValidation: string
        hybridArchitecture: string
        multiHeadDiscriminator: string
      }
    }
    showDetails: string
    hideDetails: string
  }

  // Technical Overview
  technicalOverview: {
    title: string
    subtitle: string
    criticalProblems: {
      title: string
      modeCollapse: string
      thematicImbalance: string
      conditionalControl: string
      postHocValidation: string
    }
    innovations: {
      title: string
      templateGuidance: string
      conditionalACGAN: string
      targetedAugmentation: string
      hybridPipeline: string
    }
    theoreticalFoundations: {
      title: string
      description: string
      equation: {
        title: string
        description: string
      }
    }
    references: {
      title: string
    }
    showTheory: string
    hideTheory: string
  }

  // Data Augmentation
  dataAugmentation: {
    title: string
    subtitle: string
    geometric: {
      title: string
      horizontalMirror: string
      rotation180: string
      advantage: string
      complexity: string
    }
    parametric: {
      title: string
      thematicGenerators: string
      materialAnalysis: string
      advantage: string
      successRate: string
    }
    results: {
      puzzlesPerTheme: string
      rareClassMultiplication: string
      thematicCoherence: string
      entropyImprovement: string
    }
    materialBalance: {
      title: string
      description: string
    }
    implementation: {
      title: string
      description: string
    }
    thematicGeneration: {
      title: string
      mateIn1: {
        title: string
        steps: string[]
      }
      fork: {
        title: string
        steps: string[]
      }
      pin: {
        title: string
        steps: string[]
      }
    }
    showImplementation: string
    hideImplementation: string
  }

  // GAN Architecture
  ganArchitecture: {
    title: string
    subtitle: string
    conditionalGenerator: {
      title: string
      input: string
      architecture: string
      conditioning: string
      constraints: string
    }
    multiHeadDiscriminator: {
      title: string
      validityHead: string
      themeHead: string
      qualityHead: string
      architecture: string
    }
    objectiveFunction: {
      title: string
      description: string
    }
    hybridApproach: {
      title: string
      description: string
      conditionalFilling: {
        title: string
        description: string
      }
      latentMixing: {
        title: string
        description: string
      }
      guidedPerturbation: {
        title: string
        description: string
      }
      advantages: {
        stability: {
          title: string
          items: string[]
        }
        quality: {
          title: string
          items: string[]
        }
      }
    }
    showDetails: string
    hideDetails: string
  }

  // Mathematics
  mathematics: {
    title: string
    subtitle: string
    components: {
      title: string
      discriminator: string
      generator: string
      classifier: string
      qualityEstimator: string
    }
    hyperparameters: {
      title: string
      lambda1: string
      lambda2: string
      lambda3: string
      learningRates: string
    }
    derivation: {
      title: string
      adversarial: {
        title: string
        description: string
      }
      auxiliary: {
        title: string
        description: string
      }
      diversity: {
        title: string
        description: string
      }
    }
    metrics: {
      title: string
      fid: {
        title: string
        description: string
      }
      entropy: {
        title: string
        description: string
      }
      inception: {
        title: string
        description: string
      }
    }
    showDerivation: string
    hideDerivation: string
    showFormulations: string
    hideFormulations: string
  }

  // Validation
  validation: {
    title: string
    subtitle: string
    legalityPosition: {
      title: string
      items: string[]
    }
    tacticalSolution: {
      title: string
      items: string[]
    }
    qualityFiltering: {
      title: string
      items: string[]
    }
    successRates: {
      geometric: string
      parametric: string
    }
    specialized: {
      title: string
      mateIn1: {
        title: string
        description: string
      }
      materialGain: {
        title: string
        description: string
      }
    }
    qualityMetrics: {
      thematicCoherence: {
        title: string
        description: string
      }
      originality: {
        title: string
        description: string
      }
      realism: {
        title: string
        description: string
      }
    }
    showMetrics: string
    hideMetrics: string
  }

  // Applications
  applications: {
    title: string
    trainingPlatforms: {
      title: string
      items: string[]
    }
    pedagogicalTools: {
      title: string
      items: string[]
    }
    technicalStack: {
      title: string
      coreML: {
        title: string
        items: string[]
      }
      validation: {
        title: string
        items: string[]
      }
      deployment: {
        title: string
        items: string[]
      }
    }
    showDetails: string
    hideDetails: string
  }

  // Roadmap
  roadmap: {
    title: string
    q3_2024: {
      title: string
      items: string[]
    }
    q4_2024: {
      title: string
      items: string[]
    }
    year_2025: {
      title: string
      items: string[]
    }
    contributions: {
      title: string
      neurips: {
        title: string
        subtitle: string
        description: string
      }
      openSource: {
        title: string
        description: string
        items: string[]
      }
    }
    showDetails: string
    hideDetails: string
  }

  // Footer
  footer: {
    title: string
    subtitle: string
    author: string
    documentation: string
    sourceCode: string
  }

  // Common
  common: {
    showMore: string
    showLess: string
    references: string
    example: string
    implementation: string
    results: string
    details: string
    loading: string
    error: string
  }

  // Metrics
  metrics: {
    validityRate: string
    normalizedEntropy: string
    generationThroughput: string
    thematicCoherence: string
    comparison: {
      title: string
      classical: string
      ourApproach: string
      validity: string
      entropy: string
      coherence: string
    }
  }
}
};

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
      description: "Final-year student at ESI Algiers, majoring in Information Systems and data-driven technologies.",
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
      title: "Featured Projects",
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
    title: "Let's Connect",
    centerOrbText: "Connect",
    subtitle: "Ready to collaborate on innovative AI projects or discuss opportunities in data science",
    methods: {
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    getInTouch: "Get In Touch",
    opportunities: {
      title: "Open to Opportunities",
      aiEngineering: "AI Engineering Positions",
      researchProjects: "Collaborative Research Projects",
      freelance: "Consulting & Freelance Work",
      speaking: "Speaking & Workshop Opportunities",
    },
  },
    footer: {
    brandName: "Mr. Benbouta Walid",
    tagline: "Pioneering AI solutions with a focus on responsible innovation and real-world impact in North Africa and beyond.",
    sectionTitles: {
      projects: "Projects",
      resources: "Resources",
      contact: "Contact",
    },
    links: {
      projects: {
        viewProjects: "View Projects",
        achievements: "Achievements",
        resume: "Resume",
      },
      resources: {
        aboutMe: "About Me",
        techStack: "Tech Stack",
        experience: "Experience",
      },
      contact: {
        getInTouch: "Get in Touch",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    copyrightName: "BENBOUTA Walid",
    roleEngineer: "AI Engineer",
    roleGraduate: "futur State Engineer in Computer Science",
  },
  gan: {
    nav: {
      overview: "Overview",
      dataAugmentation: "Data Augmentation",
      ganArchitecture: "GAN Architecture",
      mathematics: "Mathematical Foundations",
      validation: "Automatic Validation",
      applications: "Industrial Applications",
      roadmap: "Technical Roadmap",
    },
    hero: {
      badge: "Advanced Generative AI Research",
      title: "Hybrid Chess Puzzle Generation System",
      subtitle:
        "Revolutionary architecture combining specialized data augmentation and conditional adversarial generative networks (AC-GAN)",
      keyInnovation: "Key Innovation: Solving constrained content generation through hybrid template-GAN approach",
      performance: "Performance: 95% position validity • 2.8x normalized entropy improvement • 1,200 positions/second",
    },
    introduction: {
      title: "Automatic Chess Puzzle Generation",
      subtitle:
        "Revolutionary system combining specialized data augmentation and conditional GANs for automatic tactical puzzle creation",
      objective: {
        title: "Main Objective",
        description:
          "Automatically generate novel but plausible chess puzzles, respecting game rules and presenting targeted tactical themes (mate in 1, forks, pins)",
      },
      dataSource: {
        title: "Data Source",
        description:
          "Lichess database of 5+ million puzzles extracted from 300+ million games analyzed by Stockfish, encoded in FEN notation",
      },
      innovation: {
        title: "Technical Innovation",
        description: "Hybrid architecture templates + AC-GAN with multi-head discriminator (validity, theme, quality)",
      },
      fenExample: "FEN Notation Example",
      fenDescription:
        "This notation completely encodes a position: piece placement, turn, castling rights, en passant, move counters",
      tensorEncoding: {
        title: "Tensor Encoding of Positions",
        description:
          "Each FEN position is converted to a binary tensor 8×8×N for neural network training. Typically N=12 layers for 6 piece types × 2 colors, plus additional layers for turn and special rules.",
        structure: {
          whitePieces: "Layers 0-5: White pieces (P, N, B, R, Q, K)",
          blackPieces: "Layers 6-11: Black pieces (p, n, b, r, q, k)",
          turn: "Layer 12: Turn (1 if White, 0 if Black)",
          emptyCells: "Empty squares: Represented by zeros on all layers",
        },
      },
      challenges: {
        title: "Technical Challenges Resolved",
        problems: {
          thematicImbalance: "Some themes (forks) 10x more frequent",
          complexValidation: "Complex validation of generated positions",
          strictConstraints: "Strict chess rule constraints",
          uniqueSolutions: "Need for unique tactical solutions",
        },
        solutions: {
          targetedAugmentation: "Targeted augmentation for rare classes",
          automaticValidation: "Automatic validation pipeline (python-chess + Stockfish)",
          hybridArchitecture: "Hybrid templates + generation architecture",
          multiHeadDiscriminator: "Multi-head discriminator for quality control",
        },
      },
      showDetails: "Show encoding and technical challenges",
      hideDetails: "Hide details",
    },
    technicalOverview: {
      title: "Fundamental Technical Innovation",
      subtitle: "Revolutionary hybrid architecture resolving limitations of purely neural or symbolic approaches",
      criticalProblems: {
        title: "Critical Problems Resolved",
        modeCollapse: "Mode Collapse: Classical GANs generate 45% invalid positions",
        thematicImbalance: "Thematic Imbalance: 1:10 ratio between rare/frequent classes",
        conditionalControl: "Conditional Control: Inability to specify difficulty and theme",
        postHocValidation: "Post-Hoc Validation: Costly filtering of illegal positions",
      },
      innovations: {
        title: "Innovative Architectural Solutions",
        templateGuidance: "Template Guidance: 92% validity guaranteed structurally",
        conditionalACGAN: "Conditional AC-GAN: Precise theme + difficulty control",
        targetedAugmentation: "Targeted Augmentation: Intelligent balancing of rare classes",
        hybridPipeline: "Hybrid Pipeline: 50% templates + 35% GAN + 15% creative fusion",
      },
      theoreticalFoundations: {
        title: "Advanced Theoretical Foundations",
        description:
          "Our approach draws from recent work on symbolic-neural hybridization, notably AlphaGeometry (DeepMind, 2024) and Neuro-Symbolic Systems. The combination of formal constraints (chess templates) and deep learning (AC-GAN) allows overcoming the classic dilemma between expressivity and controllability.",
        equation: {
          title: "Fundamental Equation of the Hybrid System",
          description: "Where α=0.5, β=0.35, γ=0.15 are empirically optimized to maximize validity and creativity",
        },
      },
      references: {
        title: "Key Scientific References",
      },
      showTheory: "Show theoretical foundations",
      hideTheory: "Hide technical details",
    },
    dataAugmentation: {
      title: "Advanced Augmentation Strategies",
      subtitle: "Complementary approaches to enrich the corpus and balance rare tactical themes",
      geometric: {
        title: "Geometric Augmentations",
        horizontalMirror: "Horizontal Mirror: 98% preservation of tactical relations",
        rotation180: "180° Rotation: Generates valid spatial variants",
        advantage: "Advantage: +40% diversity (Shannon metric)",
        complexity: "Complexity: O(1) per transformation",
      },
      parametric: {
        title: "Parametric Augmentation",
        thematicGenerators: "Thematic Generators: Mates, forks, pins",
        materialAnalysis: "Material Analysis: Piece balance ±3 points",
        advantage: "Advantage: Specifically targets rare classes",
        successRate: "Success Rate: 85% valid positions",
      },
      results: {
        puzzlesPerTheme: "Puzzles/theme",
        rareClassMultiplication: "Rare class multiplication",
        thematicCoherence: "Thematic coherence",
        entropyImprovement: "Entropy improvement",
      },
      materialBalance: {
        title: "Material Balance",
        description: "Diversification of global parameters: material balance, piece activity, mobility",
      },
      implementation: {
        title: "Implementation of Geometric Transformations",
        description:
          "Transformations are applied directly at the 8×8×N tensor level. For horizontal mirror, column index inversion (0↦7, 1↦6, ...). For 180° rotation, vertical+horizontal flip combination + white/black piece channel exchange.",
      },
      thematicGeneration: {
        title: "Specialized Thematic Generation",
        mateIn1: {
          title: "Mate in 1 Move",
          steps: ["Identify enemy king", "Analyze attack squares", "Place offensive piece", "Verify unstoppable mate"],
        },
        fork: {
          title: "Fork",
          steps: [
            "Place Knight on empty square",
            "Verify attack ≥2 pieces",
            "Prioritize King + heavy piece",
            "Validate no defense",
          ],
        },
        pin: {
          title: "Pin",
          steps: [
            "Locate enemy king",
            "Place aligned Rook/Bishop",
            "Insert intermediate piece",
            "Verify immobilization",
          ],
        },
      },
      showImplementation: "Show detailed implementation",
      hideImplementation: "Hide implementation",
    },
    ganArchitecture: {
      title: "Advanced Conditional GAN Architecture",
      subtitle: "Adversarial system with thematic generator and multi-head discriminator for quality control",
      conditionalGenerator: {
        title: "Conditional Generator G",
        input: "Input: z ∈ ℝ¹²⁸ (latent noise) + y ∈ ℝᵀ (theme one-hot)",
        architecture: "Architecture: FC layers → Deconv → 8×8×12 output",
        conditioning: "Conditioning: Dense thematic embedding (32D)",
        constraints: "Constraints: Softmax per square (piece exclusivity)",
      },
      multiHeadDiscriminator: {
        title: "Multi-Head Discriminator D",
        validityHead: "Validity Head: Real vs Generated (BCE loss)",
        themeHead: "Theme Head: Tactical classification (CE loss)",
        qualityHead: "Quality Head: Puzzle score (regression/classification)",
        architecture: "Architecture: CNN → Feature extraction → 3 FC branches",
      },
      objectiveFunction: {
        title: "Extended Minimax Objective Function",
        description: "Where L_adv = BCE(D(x), 1) + BCE(D(G(z|y)), 0) for real/fake discrimination",
      },
      hybridApproach: {
        title: "Hybrid Approach: Templates + Guided Generation",
        description:
          "To stabilize learning and increase success rate, we combine validated templates with model-guided modifications, rather than generating entirely ex nihilo.",
        conditionalFilling: {
          title: "Conditional Filling",
          description:
            "Start from a partially filled chessboard (kings + essential pieces) and let the generator complete empty squares according to desired theme.",
        },
        latentMixing: {
          title: "Latent Mixing",
          description:
            "Combine two existing puzzles by interpolating their latent representations to create hybrid multi-theme puzzles.",
        },
        guidedPerturbation: {
          title: "Guided Perturbation",
          description:
            "Apply minor modifications suggested by the generator to existing valid puzzles (piece movements, strategic additions).",
        },
        advantages: {
          stability: {
            title: "Training Stability",
            items: ["Mode collapse reduction", "Faster convergence", "More stable gradients"],
          },
          quality: {
            title: "Result Quality",
            items: ["High validity rate (92%)", "Guaranteed thematic coherence", "Transformation traceability"],
          },
        },
      },
      showDetails: "Show detailed architecture",
      hideDetails: "Hide details",
    },
    mathematics: {
      title: "Multi-Criteria Objective Function",
      subtitle: "Advanced mathematical formulations for hybrid AC-GAN loss",
      components: {
        title: "Mathematical Components",
        discriminator: "D(x): Discriminator - probability that x is real",
        generator: "G(z|c): Conditional generator on theme c",
        classifier: "C(x): Auxiliary theme classifier",
        qualityEstimator: "Q(x): Quality estimator (Stockfish-based)",
      },
      hyperparameters: {
        title: "Optimized Hyperparameters",
        lambda1: "λ₁ = 0.2: Thematic classification weight",
        lambda2: "λ₂ = 0.3: Tactical quality weight",
        lambda3: "λ₃ = 0.1: Diversity weight (anti-mode collapse)",
        learningRates: "Learning rates: G: 2×10⁻⁴, D: 1×10⁻⁴",
      },
      derivation: {
        title: "Complete Theoretical Derivation",
        adversarial: {
          title: "1. Adversarial Term (Goodfellow et al., 2014)",
          description:
            "The classic minimax game between generator and discriminator, extended to the conditional case:",
        },
        auxiliary: {
          title: "2. Auxiliary Classification (AC-GAN Extension)",
          description: "Ensures thematic coherence via a shared classifier:",
        },
        diversity: {
          title: "3. Diversity Regularization",
          description: "Prevents mode collapse by maximizing variance of generated features:",
        },
      },
      metrics: {
        title: "Advanced Evaluation Metrics",
        fid: {
          title: "Fréchet Inception Distance (FID)",
          description:
            "Measures distance between distributions of real (r) and generated (g) positions in pre-trained network feature space. Our score of 18.7 significantly outperforms classical GANs (≥30) according to Zhang et al. (2021).",
        },
        entropy: {
          title: "Normalized Shannon Entropy",
          description:
            "Calculated on tactical theme distribution. A value close to 1 indicates perfect diversity. Our score of 0.89 demonstrates near-optimal class balancing, compared to rule-based methods (0.3-0.5).",
        },
        inception: {
          title: "Adapted Inception Score",
          description:
            "Adapted for chess: p(y|x) is the theme distribution predicted by our classifier for position x. A high score indicates distinct and well-classified thematic positions.",
        },
      },
      showDerivation: "Show complete derivation",
      hideDerivation: "Hide derivation",
      showFormulations: "Show mathematical formulations",
      hideFormulations: "Hide formulations",
    },
    validation: {
      title: "Automatic Validation Pipeline",
      subtitle: "Multi-stage system ensuring legality and tactical quality of generated puzzles",
      legalityPosition: {
        title: "1. Position Legality",
        items: [
          "python-chess validation",
          "King count control",
          "Pawn/promotion verification",
          "Material consistency test",
        ],
      },
      tacticalSolution: {
        title: "2. Tactical Solution",
        items: [
          "Stockfish analysis depth 12",
          "Solution uniqueness verification",
          "Decisive advantage test (+3 points)",
          "Specific theme validation",
        ],
      },
      qualityFiltering: {
        title: "3. Quality Filtering",
        items: [
          "Duplicate detection (Zobrist)",
          "Trivial position elimination",
          "Realism control (discriminator)",
          "Thematic coherence validation",
        ],
      },
      successRates: {
        geometric: "Geometric Augmentations:",
        parametric: "Parametric Augmentations:",
      },
      specialized: {
        title: "Specialized Validation by Theme",
        mateIn1: {
          title: "Mate in 1 Move",
          description:
            "Simple verification: generate all legal moves and test board.is_checkmate() for each. Accept multiple solutions if all lead to immediate mate.",
        },
        materialGain: {
          title: "Material Gain",
          description:
            "Stockfish analysis for each possible move. Valid puzzle if one move gets ≥+3 points higher score than alternatives.",
        },
      },
      qualityMetrics: {
        thematicCoherence: {
          title: "Thematic Coherence",
          description: "Generated puzzles respecting intended theme (discriminator + manual validation)",
        },
        originality: {
          title: "Originality",
          description: "Unique puzzles not present in original dataset (Zobrist detection)",
        },
        realism: {
          title: "Realism",
          description: "Positions judged plausible by discriminator (high quality score)",
        },
      },
      showMetrics: "Show detailed metrics",
      hideMetrics: "Hide metrics",
    },
    applications: {
      title: "Industrial Use Cases",
      trainingPlatforms: {
        title: "Training Platforms",
        items: [
          "Adaptive puzzle generation (ELO-based)",
          "Complete tactical theme coverage",
          "70% curation cost reduction",
          "Automatic content personalization",
        ],
      },
      pedagogicalTools: {
        title: "Pedagogical Tools",
        items: [
          "Personalized training plan creation",
          "Automatic weakness detection",
          "Instant feedback via Stockfish",
          "Intelligent adaptive progression",
        ],
      },
      technicalStack: {
        title: "Production Technical Stack",
        coreML: {
          title: "Core ML",
          items: ["Python 3.10+", "PyTorch 2.0 + CUDA 11.7", "python-chess 3.0", "Optimized NumPy, Pandas"],
        },
        validation: {
          title: "Validation & Test",
          items: ["Stockfish 15 (evaluation)", "pytest + coverage", "Great Expectations (data)", "MLflow (tracking)"],
        },
        deployment: {
          title: "Deployment",
          items: ["Docker + Kubernetes", "FastAPI (serving)", "Prometheus (monitoring)", "Redis (cache)"],
        },
      },
      showDetails: "Show details",
      hideDetails: "Hide details",
    },
    roadmap: {
      title: "Research & Development Roadmap",
      q3_2024: {
        title: "Q3 2024 - Tactical Extensions",
        items: [
          "Integration of complex 2-3 move mates",
          "GPU optimization with Mixed Precision Training",
          "Theoretical endgame support (R+P vs R)",
          "High-performance REST API (FastAPI)",
        ],
      },
      q4_2024: {
        title: "Q4 2024 - Publication & Integration",
        items: [
          "NeurIPS 2024 submission (October deadline)",
          "Leela Chess Zero integration for evaluation",
          "Benchmark against AlphaZero on tactical positions",
          "Framework open-source (MIT license)",
        ],
      },
      year_2025: {
        title: "2025 - Advanced Research",
        items: [
          "Extension to complex endgames (6+ pieces)",
          "Multimodal model (vision + algebraic notation)",
          "Transfer learning to other games (Go, Shogi)",
          "Transformer architecture for move sequences",
        ],
      },
      contributions: {
        title: "Planned Scientific Contributions",
        neurips: {
          title: "NeurIPS 2024 Publication",
          subtitle:
            'Title: "Hybrid Template-GAN Architecture for Constrained Content Generation: Application to Chess Tactical Puzzles"',
          description:
            "Key innovations: Creative guidance mechanism, integrated structural validation, mode collapse resolution in constrained domains",
        },
        openSource: {
          title: "Dataset & Open Source Code",
          description: "Publication planned Q2 2024 under MIT license",
          items: [
            "Dataset of 1M+ generated and validated positions",
            "Complete data augmentation framework",
            "Pre-trained models for 10 tactical themes",
            "Benchmarks and evaluation metrics",
          ],
        },
      },
      showDetails: "Show details",
      hideDetails: "Hide details",
    },
    footer: {
      title: "ChessGAN Research Project",
      subtitle: "Hybrid architecture for constrained content generation • National Higher School of Computer Science",
      author: "BENBOUTA Walid • 2CS SIT • Generative AI Research",
      documentation: "Complete Documentation",
      sourceCode: "Source Code & Notebook",
    },
    common: {
      showMore: "Show more",
      showLess: "Show less",
      references: "References",
      example: "Example",
      implementation: "Implementation",
      results: "Results",
      details: "Details",
      loading: "Loading...",
      error: "Error",
    },
    metrics: {
      validityRate: "Validity Rate",
      normalizedEntropy: "Normalized Entropy",
      generationThroughput: "Generation Throughput",
      thematicCoherence: "Thematic Coherence",
      comparison: {
        title: "Comparison with State of the Art",
        classical: "Classical GAN (Baseline)",
        ourApproach: "Our Hybrid Approach",
        validity: "Validity",
        entropy: "Entropy",
        coherence: "Coherence",
      },
    },
  },

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
      description: "Étudiant en dernière année à l'ESI Alger, spécialisé en Systèmes d'Information et technologies axées sur les données.",
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
      title: "Mes Projets",
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
    title: "Connectons-nous",
    centerOrbText: "Connecter",
    subtitle: "Prêt à collaborer sur des projets d'IA innovants ou à discuter d'opportunités en science des données",
    methods: {
      email: "E-mail",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    getInTouch: "Contactez-moi",
    opportunities: {
      title: "Ouvert aux Opportunités",
      aiEngineering: "Postes d'Ingénierie IA",
      researchProjects: "Projets de Recherche Collaboratifs",
      freelance: "Travail de Consulting & Freelance",
      speaking: "Opportunités de Conférences & Ateliers",
    },
  },
   footer: {
    brandName: "M. Benbouta Walid",
    tagline: "Pionnier des solutions d'IA, axé sur l'innovation responsable et l'impact réel en Afrique du Nord et au-delà.",
    sectionTitles: {
      projects: "Projets",
      resources: "Ressources",
      contact: "Contact",
    },
    links: {
      projects: {
        viewProjects: "Voir les Projets",
        achievements: "Réalisations",
        resume: "CV",
      },
      resources: {
        aboutMe: "À propos de moi",
        techStack: "Pile Technologique",
        experience: "Expérience",
      },
      contact: {
        getInTouch: "Contactez-moi",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    copyrightName: "BENBOUTA Walid",
    roleEngineer: "Ingénieur IA",
    roleGraduate: "Futur ingénieur d'État en informatique",
  },
  gan:  {
     nav: {
      overview: "Vue d'Ensemble",
      dataAugmentation: "Augmentation de Données",
      ganArchitecture: "Architecture GAN",
      mathematics: "Fondements Mathématiques",
      validation: "Validation Automatique",
      applications: "Applications Industrielles",
      roadmap: "Roadmap Technique",
    },
    hero: {
      badge: "Recherche Avancée en IA Générative",
      title: "Système Hybride de Génération de Puzzles d'Échecs",
      subtitle:
        "Architecture révolutionnaire combinant l'augmentation de données spécialisée et les réseaux antagonistes génératifs conditionnels (AC-GAN)",
      keyInnovation:
        "Innovation Clé: Résolution du problème de génération de contenu contraint par une approche hybride template-GAN",
      performance:
        "Performance: 95% de validité des positions générées • 2.8x amélioration de l'entropie normalisée • 1,200 positions/seconde",
    },
    introduction: {
      title: "Génération Automatique de Puzzles d'Échecs",
      subtitle:
        "Système révolutionnaire combinant augmentation de données spécialisée et GANs conditionnels pour la création automatique de puzzles tactiques",
      objective: {
        title: "Objectif Principal",
        description:
          "Générer automatiquement des puzzles d'échecs inédits mais plausibles, respectant les règles et présentant des thèmes tactiques ciblés (mats en 1, fourchettes, clouages)",
      },
      dataSource: {
        title: "Source de Données",
        description:
          "Base Lichess de 5+ millions de puzzles extraits de 300+ millions de parties analysées par Stockfish, encodés en notation FEN",
      },
      innovation: {
        title: "Innovation Technique",
        description:
          "Architecture hybride templates + AC-GAN avec discriminateur multi-têtes (validité, thème, qualité)",
      },
      fenExample: "Exemple de Notation FEN",
      fenDescription:
        "Cette notation encode complètement une position : disposition des pièces, trait, droits de roque, prise en passant, compteurs de coups",
      tensorEncoding: {
        title: "Encodage Tensoriel des Positions",
        description:
          "Chaque position FEN est convertie en tenseur binaire 8×8×N pour l'entraînement des réseaux de neurones. Typiquement N=12 couches pour les 6 types de pièces × 2 couleurs, plus des couches additionnelles pour le trait et les règles spéciales.",
        structure: {
          whitePieces: "Couches 0-5: Pièces blanches (P, N, B, R, Q, K)",
          blackPieces: "Couches 6-11: Pièces noires (p, n, b, r, q, k)",
          turn: "Couche 12: Trait (1 si Blancs, 0 si Noirs)",
          emptyCells: "Cases vides: Représentées par des zéros sur toutes les couches",
        },
      },
      challenges: {
        title: "Défis Techniques Résolus",
        problems: {
          thematicImbalance: "Certains thèmes (fourchettes) 10x plus fréquents",
          complexValidation: "Validation complexe des positions générées",
          strictConstraints: "Contraintes strictes des règles d'échecs",
          uniqueSolutions: "Nécessité de solutions tactiques uniques",
        },
        solutions: {
          targetedAugmentation: "Augmentation ciblée des classes rares",
          automaticValidation: "Pipeline de validation automatique (python-chess + Stockfish)",
          hybridArchitecture: "Architecture hybride templates + génération",
          multiHeadDiscriminator: "Discriminateur multi-têtes pour contrôle qualité",
        },
      },
      showDetails: "Afficher l'encodage et les défis techniques",
      hideDetails: "Masquer les détails",
    },
    technicalOverview: {
      title: "Innovation Technique Fondamentale",
      subtitle:
        "Architecture hybride révolutionnaire résolvant les limitations des approches purement neuronales ou symboliques",
      criticalProblems: {
        title: "Problématiques Critiques Résolues",
        modeCollapse: "Mode Collapse: GAN classiques génèrent 45% de positions invalides",
        thematicImbalance: "Déséquilibre Thématique: Ratio 1:10 entre classes rares/fréquentes",
        conditionalControl: "Contrôle Conditionnel: Impossibilité de spécifier difficulté et thème",
        postHocValidation: "Validation Post-Hoc: Filtrage coûteux des positions illégales",
      },
      innovations: {
        title: "Solutions Architecturales Innovantes",
        templateGuidance: "Guidance par Templates: 92% de validité garantie structurellement",
        conditionalACGAN: "AC-GAN Conditionnel: Contrôle précis thème + difficulté",
        targetedAugmentation: "Augmentation Ciblée: Équilibrage intelligent des classes rares",
        hybridPipeline: "Pipeline Hybride: 50% templates + 35% GAN + 15% fusion créative",
      },
      theoreticalFoundations: {
        title: "Fondements Théoriques Avancés",
        description:
          "Notre approche s'inspire des travaux récents sur l'hybridation symbolique-neuronale, notamment AlphaGeometry (DeepMind, 2024) et les Neuro-Symbolic Systems. La combinaison de contraintes formelles (templates d'échecs) et d'apprentissage profond (AC-GAN) permet de dépasser le dilemme classique entre expressivité et contrôlabilité.",
        equation: {
          title: "Équation Fondamentale du Système Hybride",
          description: "Où α=0.5, β=0.35, γ=0.15 sont optimisés empiriquement pour maximiser validité et créativité",
        },
      },
      references: {
        title: "Références Scientifiques Clés",
      },
      showTheory: "Afficher les fondements théoriques",
      hideTheory: "Masquer les détails techniques",
    },
    dataAugmentation: {
      title: "Stratégies d'Augmentation Avancées",
      subtitle: "Approches complémentaires pour enrichir le corpus et équilibrer les thèmes tactiques rares",
      geometric: {
        title: "Augmentations Géométriques",
        horizontalMirror: "Miroir Horizontal: Préservation à 98% des relations tactiques",
        rotation180: "Rotation 180°: Génère des variantes spatiales valides",
        advantage: "Avantage: +40% de diversité (métrique Shannon)",
        complexity: "Complexité: O(1) par transformation",
      },
      parametric: {
        title: "Augmentation Paramétrique",
        thematicGenerators: "Générateurs Thématiques: Mats, fourchettes, clouages",
        materialAnalysis: "Analyse Matérielle: Balance des pièces ±3 points",
        advantage: "Avantage: Cible spécifiquement les classes rares",
        successRate: "Taux de Réussite: 85% de positions valides",
      },
      results: {
        puzzlesPerTheme: "Puzzles/thème",
        rareClassMultiplication: "Multiplication classes rares",
        thematicCoherence: "Cohérence thématique",
        entropyImprovement: "Amélioration entropie",
      },
      materialBalance: {
        title: "Équilibrage Matériel",
        description: "Diversification des paramètres globaux : équilibre matériel, activité des pièces, mobilité",
      },
      implementation: {
        title: "Implémentation des Transformations Géométriques",
        description:
          "Les transformations sont appliquées directement au niveau du tenseur 8×8×N. Pour le miroir horizontal, inversion des indices de colonnes (0↦7, 1↦6, ...). Pour la rotation 180°, combinaison flip vertical+horizontal + échange des canaux pièces blanches/noires.",
      },
      thematicGeneration: {
        title: "Génération Thématique Spécialisée",
        mateIn1: {
          title: "Mat en 1 Coup",
          steps: [
            "Identifier roi ennemi",
            "Analyser cases d'attaque",
            "Placer pièce offensive",
            "Vérifier mat imparable",
          ],
        },
        fork: {
          title: "Fourchette",
          steps: [
            "Placer Cavalier case vide",
            "Vérifier attaque ≥2 pièces",
            "Privilégier Roi + pièce lourde",
            "Valider absence défense",
          ],
        },
        pin: {
          title: "Clouage",
          steps: [
            "Localiser roi adverse",
            "Placer Tour/Fou aligné",
            "Insérer pièce intermédiaire",
            "Vérifier immobilisation",
          ],
        },
      },
      showImplementation: "Afficher l'implémentation détaillée",
      hideImplementation: "Masquer l'implémentation",
    },
    ganArchitecture: {
      title: "Architecture GAN Conditionnelle Avancée",
      subtitle: "Système antagoniste avec générateur thématique et discriminateur multi-têtes pour contrôle qualité",
      conditionalGenerator: {
        title: "Générateur Conditionnel G",
        input: "Entrée: z ∈ ℝ¹²⁸ (bruit latent) + y ∈ ℝᵀ (thème one-hot)",
        architecture: "Architecture: Couches FC → Deconv → sortie 8×8×12",
        conditioning: "Conditionnement: Embedding thématique dense (32D)",
        constraints: "Contraintes: Softmax par case (exclusivité pièces)",
      },
      multiHeadDiscriminator: {
        title: "Discriminateur Multi-Têtes D",
        validityHead: "Tête Validité: Réel vs Généré (perte BCE)",
        themeHead: "Tête Thème: Classification tactique (perte CE)",
        qualityHead: "Tête Qualité: Score puzzle (régression/classification)",
        architecture: "Architecture: CNN → Extraction features → 3 branches FC",
      },
      objectiveFunction: {
        title: "Fonction Objectif Minimax Étendue",
        description: "Où L_adv = BCE(D(x), 1) + BCE(D(G(z|y)), 0) pour la discrimination réel/faux",
      },
      hybridApproach: {
        title: "Approche Hybride : Templates + Génération Guidée",
        description:
          "Pour stabiliser l'apprentissage et augmenter le taux de réussite, nous combinons des templates validés avec des modifications guidées par le modèle, plutôt que de générer entièrement ex nihilo.",
        conditionalFilling: {
          title: "Remplissage Conditionnel",
          description:
            "Partir d'un échiquier partiellement rempli (rois + pièces essentielles) et laisser le générateur compléter les cases vides selon le thème souhaité.",
        },
        latentMixing: {
          title: "Mélange Latent",
          description:
            "Combiner deux puzzles existants en interpolant leurs représentations latentes pour créer des puzzles hybrides multi-thèmes.",
        },
        guidedPerturbation: {
          title: "Perturbation Guidée",
          description:
            "Appliquer des modifications mineures suggérées par le générateur à des puzzles valides existants (déplacements de pièces, ajouts stratégiques).",
        },
        advantages: {
          stability: {
            title: "Stabilité d'Entraînement",
            items: ["Réduction du mode collapse", "Convergence plus rapide", "Gradients plus stables"],
          },
          quality: {
            title: "Qualité des Résultats",
            items: ["Taux de validité élevé (92%)", "Cohérence thématique garantie", "Traçabilité des transformations"],
          },
        },
      },
      showDetails: "Afficher l'architecture détaillée",
      hideDetails: "Masquer les détails",
    },
    mathematics: {
      title: "Fonction Objectif Multi-Critères",
      subtitle: "Formulations mathématiques avancées pour la perte AC-GAN hybride",
      components: {
        title: "Composantes Mathématiques",
        discriminator: "D(x): Discriminateur - probabilité que x soit réel",
        generator: "G(z|c): Générateur conditionnel sur thème c",
        classifier: "C(x): Classificateur auxiliaire de thèmes",
        qualityEstimator: "Q(x): Estimateur de qualité (basé Stockfish)",
      },
      hyperparameters: {
        title: "Hyperparamètres Optimisés",
        lambda1: "λ₁ = 0.2: Poids classification thématique",
        lambda2: "λ₂ = 0.3: Poids qualité tactique",
        lambda3: "λ₃ = 0.1: Poids diversité (anti-mode collapse)",
        learningRates: "Taux d'apprentissage: G: 2×10⁻⁴, D: 1×10⁻⁴",
      },
      derivation: {
        title: "Dérivation Théorique Complète",
        adversarial: {
          title: "1. Terme Adversarial (Goodfellow et al., 2014)",
          description: "Le jeu minimax classique entre générateur et discriminateur, étendu au cas conditionnel:",
        },
        auxiliary: {
          title: "2. Classification Auxiliaire (Extension AC-GAN)",
          description: "Assure la cohérence thématique via un classificateur partagé:",
        },
        diversity: {
          title: "3. Régularisation par Diversité",
          description: "Prévient le mode collapse en maximisant la variance des features générées:",
        },
      },
      metrics: {
        title: "Métriques d'Évaluation Avancées",
        fid: {
          title: "Distance de Fréchet Inception (FID)",
          description:
            "Mesure la distance entre les distributions des positions réelles (r) et générées (g) dans l'espace des features d'un réseau pré-entraîné. Notre score de 18.7 surpasse significativement les GANs classiques (≥30) selon Zhang et al. (2021).",
        },
        entropy: {
          title: "Entropie de Shannon Normalisée",
          description:
            "Calculée sur la distribution des thèmes tactiques. Une valeur proche de 1 indique une parfaite diversité. Notre score de 0.89 démontre un équilibrage quasi-optimal des classes, comparé aux méthodes basées sur les règles (0.3-0.5).",
        },
        inception: {
          title: "Score d'Inception Adapté",
          description:
            "Adapté pour les échecs: p(y|x) est la distribution des thèmes prédite par notre classificateur pour la position x. Un score élevé indique des positions distinctes et bien classifiées thématiquement.",
        },
      },
      showDerivation: "Afficher la dérivation complète",
      hideDerivation: "Masquer la dérivation",
      showFormulations: "Afficher les formulations mathématiques",
      hideFormulations: "Masquer les formulations",
    },
    validation: {
      title: "Pipeline de Validation Automatique",
      subtitle: "Système multi-étapes garantissant la légalité et la qualité tactique des puzzles générés",
      legalityPosition: {
        title: "1. Légalité Position",
        items: [
          "Validation python-chess",
          "Contrôle nombre de rois",
          "Vérification pions/promotion",
          "Test cohérence matérielle",
        ],
      },
      tacticalSolution: {
        title: "2. Solution Tactique",
        items: [
          "Analyse Stockfish profondeur 12",
          "Vérification unicité solution",
          "Test avantage décisif (+3 points)",
          "Validation thème spécifique",
        ],
      },
      qualityFiltering: {
        title: "3. Filtrage Qualité",
        items: [
          "Détection doublons (Zobrist)",
          "Élimination positions triviales",
          "Contrôle réalisme (discriminateur)",
          "Validation cohérence thématique",
        ],
      },
      successRates: {
        geometric: "Augmentations Géométriques:",
        parametric: "Augmentations Paramétriques:",
      },
      specialized: {
        title: "Validation Spécialisée par Thème",
        mateIn1: {
          title: "Mat en 1 Coup",
          description:
            "Vérification simple : génération de tous les coups légaux et test board.is_checkmate() pour chacun. Acceptation de solutions multiples si toutes mènent au mat immédiat.",
        },
        materialGain: {
          title: "Gain Matériel",
          description:
            "Analyse Stockfish pour chaque coup possible. Puzzle valide si un coup obtient un score ≥+3 points supérieur aux alternatives.",
        },
      },
      qualityMetrics: {
        thematicCoherence: {
          title: "Cohérence Thématique",
          description: "Puzzles générés respectant le thème prévu (validation discriminateur + manuelle)",
        },
        originality: {
          title: "Originalité",
          description: "Puzzles uniques non présents dans le dataset original (détection Zobrist)",
        },
        realism: {
          title: "Réalisme",
          description: "Positions jugées plausibles par le discriminateur (score qualité élevé)",
        },
      },
      showMetrics: "Afficher les métriques détaillées",
      hideMetrics: "Masquer les métriques",
    },
    applications: {
      title: "Cas d'Usage Industriels",
      trainingPlatforms: {
        title: "Plateformes d'Entraînement",
        items: [
          "Génération de puzzles adaptatifs (ELO-based)",
          "Couverture complète des thèmes tactiques",
          "Réduction des coûts de curation de 70%",
          "Personnalisation automatique du contenu",
        ],
      },
      pedagogicalTools: {
        title: "Outils Pédagogiques",
        items: [
          "Création de plans d'entraînement personnalisés",
          "Détection automatique des faiblesses",
          "Feedback instantané via Stockfish",
          "Progression adaptative intelligente",
        ],
      },
      technicalStack: {
        title: "Stack Technologique de Production",
        coreML: {
          title: "Core ML",
          items: ["Python 3.10+", "PyTorch 2.0 + CUDA 11.7", "python-chess 3.0", "NumPy, Pandas optimisés"],
        },
        validation: {
          title: "Validation & Test",
          items: ["Stockfish 15 (évaluation)", "pytest + coverage", "Great Expectations (data)", "MLflow (tracking)"],
        },
        deployment: {
          title: "Déploiement",
          items: ["Docker + Kubernetes", "FastAPI (serving)", "Prometheus (monitoring)", "Redis (cache)"],
        },
      },
      showDetails: "Afficher les détails",
      hideDetails: "Masquer les détails",
    },
    roadmap: {
      title: "Feuille de Route Recherche & Développement",
      q3_2024: {
        title: "Q3 2024 - Extensions Tactiques",
        items: [
          "Intégration des mats en 2-3 coups complexes",
          "Optimisation GPU avec Mixed Precision Training",
          "Support des finales théoriques (R+P vs R)",
          "API REST haute performance (FastAPI)",
        ],
      },
      q4_2024: {
        title: "Q4 2024 - Publication & Intégration",
        items: [
          "Soumission NeurIPS 2024 (deadline octobre)",
          "Intégration Leela Chess Zero pour évaluation",
          "Benchmark contre AlphaZero sur positions tactiques",
          "Open-source du framework (licence MIT)",
        ],
      },
      year_2025: {
        title: "2025 - Recherche Avancée",
        items: [
          "Extension aux finales complexes (6+ pièces)",
          "Modèle multimodal (vision + notation algébrique)",
          "Transfer learning vers autres jeux (Go, Shogi)",
          "Architecture Transformer pour séquences de coups",
        ],
      },
      contributions: {
        title: "Contributions Scientifiques Prévues",
        neurips: {
          title: "Publication NeurIPS 2024",
          subtitle:
            'Titre: "Architecture Hybride Template-GAN pour la Génération de Contenu Contraint: Application aux Puzzles Tactiques d\'Échecs"',
          description:
            "Innovations clés: Mécanisme de guidance créative, validation structurelle intégrée, résolution du mode collapse dans les domaines contraints",
        },
        openSource: {
          title: "Dataset & Code Open Source",
          description: "Publication prévue Q2 2024 sous licence MIT",
          items: [
            "Dataset de 1M+ positions générées et validées",
            "Framework complet d'augmentation de données",
            "Modèles pré-entraînés pour 10 thèmes tactiques",
            "Benchmarks et métriques d'évaluation",
          ],
        },
      },
      showDetails: "Afficher les détails",
      hideDetails: "Masquer les détails",
    },
    footer: {
      title: "Projet de Recherche ChessGAN",
      subtitle:
        "Architecture hybride pour la génération de contenu contraint • École Nationale Supérieure d'Informatique",
      author: "BENBOUTA Walid • 2CS SIT • Recherche en IA Générative",
      documentation: "Documentation Complète",
      sourceCode: "Code Source & Notebook",
    },
    common: {
      showMore: "Afficher plus",
      showLess: "Afficher moins",
      references: "Références",
      example: "Exemple",
      implementation: "Implémentation",
      results: "Résultats",
      details: "Détails",
      loading: "Chargement...",
      error: "Erreur",
    },
    metrics: {
      validityRate: "Taux de validité",
      normalizedEntropy: "Entropie normalisée",
      generationThroughput: "Débit de génération",
      thematicCoherence: "Cohérence thématique",
      comparison: {
        title: "Comparaison avec l'État de l'Art",
        classical: "GAN Classique (Baseline)",
        ourApproach: "Notre Approche Hybride",
        validity: "Validité",
        entropy: "Entropie",
        coherence: "Cohérence",
      },
    },
},
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
      description: "Student im letzten Jahr an der ESI Algier mit Schwerpunkt auf Informationssysteme und datengetriebene Technologien.",
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
      title: "Ausgewählte Projekte", 
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
    title: "Lass verbinden",
    centerOrbText: "Verbinden",
    subtitle: "Bereit zur Zusammenarbeit an innovativen KI-Projekten oder zur Diskussion von Möglichkeiten im Bereich Data Science",
    methods: {
      email: "E-Mail",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    getInTouch: "Kontakt aufnehmen",
    opportunities: {
      title: "Offen für Gelegenheiten",
      aiEngineering: "KI-Ingenieurpositionen",
      researchProjects: "Kollaborative Forschungsprojekte",
      freelance: "Beratung & Freiberufliche Arbeit",
      speaking: "Vortrags- & Workshop-Möglichkeiten",
    },
  },
    footer: {
    brandName: "Herr Benbouta Walid",
    tagline: "Pionier für KI-Lösungen mit Schwerpunkt auf verantwortungsvoller Innovation und realer Wirkung in Nordafrika und darüber hinaus.",
    sectionTitles: {
      projects: "Projekte",
      resources: "Ressourcen",
      contact: "Kontakt",
    },
    links: {
      projects: {
        viewProjects: "Projekte ansehen",
        achievements: "Erfolge",
        resume: "Lebenslauf",
      },
      resources: {
        aboutMe: "Über mich",
        techStack: "Tech Stack",
        experience: "Erfahrung",
      },
      contact: {
        getInTouch: "Kontakt aufnehmen",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    copyrightName: "BENBOUTA Walid",
    roleEngineer: "KI-Ingenieur",
    roleGraduate: "ESI-Absolvent",
  },
  gan : {
        nav: {
      overview: "Überblick",
      dataAugmentation: "Datenaugmentation",
      ganArchitecture: "GAN-Architektur",
      mathematics: "Mathematische Grundlagen",
      validation: "Automatische Validierung",
      applications: "Industrielle Anwendungen",
      roadmap: "Technische Roadmap",
    },
    hero: {
      badge: "Fortgeschrittene Generative KI-Forschung",
      title: "Hybrides Schachpuzzle-Generierungssystem",
      subtitle:
        "Revolutionäre Architektur, die spezialisierte Datenaugmentation und bedingte adversarielle generative Netzwerke (AC-GAN) kombiniert",
      keyInnovation:
        "Schlüsselinnovation: Lösung des Problems der eingeschränkten Inhaltsgenerierung durch hybriden Template-GAN-Ansatz",
      performance:
        "Leistung: 95% Positionsgültigkeit • 2.8x normalisierte Entropie-Verbesserung • 1,200 Positionen/Sekunde",
    },
    introduction: {
      title: "Automatische Schachpuzzle-Generierung",
      subtitle:
        "Revolutionäres System, das spezialisierte Datenaugmentation und bedingte GANs für die automatische Erstellung taktischer Puzzles kombiniert",
      objective: {
        title: "Hauptziel",
        description:
          "Automatische Generierung neuartiger aber plausibler Schachpuzzles unter Beachtung der Spielregeln und mit gezielten taktischen Themen (Matt in 1, Gabeln, Fesselungen)",
      },
      dataSource: {
        title: "Datenquelle",
        description:
          "Lichess-Datenbank mit 5+ Millionen Puzzles aus 300+ Millionen von Stockfish analysierten Partien, kodiert in FEN-Notation",
      },
      innovation: {
        title: "Technische Innovation",
        description:
          "Hybride Architektur Templates + AC-GAN mit Multi-Head-Diskriminator (Gültigkeit, Thema, Qualität)",
      },
      fenExample: "FEN-Notations-Beispiel",
      fenDescription:
        "Diese Notation kodiert vollständig eine Position: Figurenplatzierung, Zug, Rochaderechte, En passant, Zugzähler",
      tensorEncoding: {
        title: "Tensor-Kodierung von Positionen",
        description:
          "Jede FEN-Position wird in einen binären Tensor 8×8×N für das Training neuronaler Netzwerke umgewandelt. Typischerweise N=12 Schichten für 6 Figurentypen × 2 Farben, plus zusätzliche Schichten für Zug und Sonderregeln.",
        structure: {
          whitePieces: "Schichten 0-5: Weiße Figuren (P, N, B, R, Q, K)",
          blackPieces: "Schichten 6-11: Schwarze Figuren (p, n, b, r, q, k)",
          turn: "Schicht 12: Zug (1 wenn Weiß, 0 wenn Schwarz)",
          emptyCells: "Leere Felder: Dargestellt durch Nullen auf allen Schichten",
        },
      },
      challenges: {
        title: "Gelöste technische Herausforderungen",
        problems: {
          thematicImbalance: "Einige Themen (Gabeln) 10x häufiger",
          complexValidation: "Komplexe Validierung generierter Positionen",
          strictConstraints: "Strenge Schachregelbeschränkungen",
          uniqueSolutions: "Bedarf an einzigartigen taktischen Lösungen",
        },
        solutions: {
          targetedAugmentation: "Gezielte Augmentation für seltene Klassen",
          automaticValidation: "Automatische Validierungspipeline (python-chess + Stockfish)",
          hybridArchitecture: "Hybride Templates + Generierungsarchitektur",
          multiHeadDiscriminator: "Multi-Head-Diskriminator für Qualitätskontrolle",
        },
      },
      showDetails: "Kodierung und technische Herausforderungen anzeigen",
      hideDetails: "Details ausblenden",
    },
    technicalOverview: {
      title: "Fundamentale technische Innovation",
      subtitle: "Revolutionäre hybride Architektur, die Beschränkungen rein neuronaler oder symbolischer Ansätze löst",
      criticalProblems: {
        title: "Gelöste kritische Probleme",
        modeCollapse: "Mode Collapse: Klassische GANs generieren 45% ungültige Positionen",
        thematicImbalance: "Thematisches Ungleichgewicht: 1:10 Verhältnis zwischen seltenen/häufigen Klassen",
        conditionalControl: "Bedingte Kontrolle: Unfähigkeit, Schwierigkeit und Thema zu spezifizieren",
        postHocValidation: "Post-Hoc-Validierung: Kostspielige Filterung illegaler Positionen",
      },
      innovations: {
        title: "Innovative architektonische Lösungen",
        templateGuidance: "Template-Führung: 92% strukturell garantierte Gültigkeit",
        conditionalACGAN: "Bedingtes AC-GAN: Präzise Thema + Schwierigkeitskontrolle",
        targetedAugmentation: "Gezielte Augmentation: Intelligente Ausbalancierung seltener Klassen",
        hybridPipeline: "Hybride Pipeline: 50% Templates + 35% GAN + 15% kreative Fusion",
      },
      theoreticalFoundations: {
        title: "Fortgeschrittene theoretische Grundlagen",
        description:
          "Unser Ansatz ist von jüngsten Arbeiten zur symbolisch-neuronalen Hybridisierung inspiriert, insbesondere AlphaGeometry (DeepMind, 2024) und Neuro-Symbolic Systems. Die Kombination formaler Beschränkungen (Schach-Templates) und Deep Learning (AC-GAN) ermöglicht es, das klassische Dilemma zwischen Expressivität und Kontrollierbarkeit zu überwinden.",
        equation: {
          title: "Grundgleichung des hybriden Systems",
          description:
            "Wobei α=0.5, β=0.35, γ=0.15 empirisch optimiert sind, um Gültigkeit und Kreativität zu maximieren",
        },
      },
      references: {
        title: "Wichtige wissenschaftliche Referenzen",
      },
      showTheory: "Theoretische Grundlagen anzeigen",
      hideTheory: "Technische Details ausblenden",
    },
    dataAugmentation: {
      title: "Fortgeschrittene Augmentationsstrategien",
      subtitle: "Komplementäre Ansätze zur Bereicherung des Korpus und Ausbalancierung seltener taktischer Themen",
      geometric: {
        title: "Geometrische Augmentationen",
        horizontalMirror: "Horizontaler Spiegel: 98% Erhaltung taktischer Beziehungen",
        rotation180: "180°-Rotation: Erzeugt gültige räumliche Varianten",
        advantage: "Vorteil: +40% Diversität (Shannon-Metrik)",
        complexity: "Komplexität: O(1) pro Transformation",
      },
      parametric: {
        title: "Parametrische Augmentation",
        thematicGenerators: "Thematische Generatoren: Matts, Gabeln, Fesselungen",
        materialAnalysis: "Materialanalyse: Figurenbalance ±3 Punkte",
        advantage: "Vorteil: Zielt spezifisch auf seltene Klassen",
        successRate: "Erfolgsrate: 85% gültige Positionen",
      },
      results: {
        puzzlesPerTheme: "Puzzles/Thema",
        rareClassMultiplication: "Seltene Klassenmultiplikation",
        thematicCoherence: "Thematische Kohärenz",
        entropyImprovement: "Entropie-Verbesserung",
      },
      materialBalance: {
        title: "Materialbalance",
        description: "Diversifizierung globaler Parameter: Materialbalance, Figurenaktivität, Mobilität",
      },
      implementation: {
        title: "Implementierung geometrischer Transformationen",
        description:
          "Transformationen werden direkt auf Tensor-Ebene 8×8×N angewendet. Für horizontalen Spiegel, Spaltenindex-Umkehrung (0↦7, 1↦6, ...). Für 180°-Rotation, Kombination aus vertikalem+horizontalem Flip + Austausch weißer/schwarzer Figurenkanäle.",
      },
      thematicGeneration: {
        title: "Spezialisierte thematische Generierung",
        mateIn1: {
          title: "Matt in 1 Zug",
          steps: [
            "Feindlichen König identifizieren",
            "Angriffsfelder analysieren",
            "Angriffsfigur platzieren",
            "Unaufhaltsames Matt verifizieren",
          ],
        },
        fork: {
          title: "Gabel",
          steps: [
            "Springer auf leeres Feld platzieren",
            "Angriff auf ≥2 Figuren verifizieren",
            "König + schwere Figur bevorzugen",
            "Keine Verteidigung validieren",
          ],
        },
        pin: {
          title: "Fesselung",
          steps: [
            "Feindlichen König lokalisieren",
            "Turm/Läufer ausgerichtet platzieren",
            "Zwischenfigur einfügen",
            "Immobilisierung verifizieren",
          ],
        },
      },
      showImplementation: "Detaillierte Implementierung anzeigen",
      hideImplementation: "Implementierung ausblenden",
    },
    ganArchitecture: {
      title: "Fortgeschrittene bedingte GAN-Architektur",
      subtitle: "Adversariales System mit thematischem Generator und Multi-Head-Diskriminator für Qualitätskontrolle",
      conditionalGenerator: {
        title: "Bedingter Generator G",
        input: "Eingabe: z ∈ ℝ¹²⁸ (latentes Rauschen) + y ∈ ℝᵀ (Thema One-Hot)",
        architecture: "Architektur: FC-Schichten → Deconv → 8×8×12 Ausgabe",
        conditioning: "Konditionierung: Dichtes thematisches Embedding (32D)",
        constraints: "Beschränkungen: Softmax pro Feld (Figurenexklusivität)",
      },
      multiHeadDiscriminator: {
        title: "Multi-Head-Diskriminator D",
        validityHead: "Gültigkeitskopf: Real vs Generiert (BCE-Verlust)",
        themeHead: "Themenkopf: Taktische Klassifikation (CE-Verlust)",
        qualityHead: "Qualitätskopf: Puzzle-Score (Regression/Klassifikation)",
        architecture: "Architektur: CNN → Feature-Extraktion → 3 FC-Zweige",
      },
      objectiveFunction: {
        title: "Erweiterte Minimax-Zielfunktion",
        description: "Wobei L_adv = BCE(D(x), 1) + BCE(D(G(z|y)), 0) für Real/Fake-Diskriminierung",
      },
      hybridApproach: {
        title: "Hybrider Ansatz: Templates + Geführte Generierung",
        description:
          "Um das Lernen zu stabilisieren und die Erfolgsrate zu erhöhen, kombinieren wir validierte Templates mit modellgeführten Modifikationen, anstatt vollständig ex nihilo zu generieren.",
        conditionalFilling: {
          title: "Bedingte Füllung",
          description:
            "Von einem teilweise gefüllten Schachbrett (Könige + wesentliche Figuren) ausgehen und den Generator die leeren Felder entsprechend dem gewünschten Thema vervollständigen lassen.",
        },
        latentMixing: {
          title: "Latente Mischung",
          description:
            "Zwei bestehende Puzzles durch Interpolation ihrer latenten Repräsentationen kombinieren, um hybride Multi-Themen-Puzzles zu erstellen.",
        },
        guidedPerturbation: {
          title: "Geführte Störung",
          description:
            "Geringfügige vom Generator vorgeschlagene Modifikationen auf bestehende gültige Puzzles anwenden (Figurenbewegungen, strategische Ergänzungen).",
        },
        advantages: {
          stability: {
            title: "Trainingsstabilität",
            items: ["Mode-Collapse-Reduktion", "Schnellere Konvergenz", "Stabilere Gradienten"],
          },
          quality: {
            title: "Ergebnisqualität",
            items: [
              "Hohe Gültigkeitsrate (92%)",
              "Garantierte thematische Kohärenz",
              "Transformationsnachverfolgbarkeit",
            ],
          },
        },
      },
      showDetails: "Detaillierte Architektur anzeigen",
      hideDetails: "Details ausblenden",
    },
    mathematics: {
      title: "Multi-Kriterien-Zielfunktion",
      subtitle: "Fortgeschrittene mathematische Formulierungen für hybriden AC-GAN-Verlust",
      components: {
        title: "Mathematische Komponenten",
        discriminator: "D(x): Diskriminator - Wahrscheinlichkeit, dass x real ist",
        generator: "G(z|c): Bedingter Generator auf Thema c",
        classifier: "C(x): Hilfsthemen-Klassifikator",
        qualityEstimator: "Q(x): Qualitätsschätzer (Stockfish-basiert)",
      },
      hyperparameters: {
        title: "Optimierte Hyperparameter",
        lambda1: "λ₁ = 0.2: Thematisches Klassifikationsgewicht",
        lambda2: "λ₂ = 0.3: Taktisches Qualitätsgewicht",
        lambda3: "λ₃ = 0.1: Diversitätsgewicht (Anti-Mode-Collapse)",
        learningRates: "Lernraten: G: 2×10⁻⁴, D: 1×10⁻⁴",
      },
      derivation: {
        title: "Vollständige theoretische Ableitung",
        adversarial: {
          title: "1. Adversarialer Term (Goodfellow et al., 2014)",
          description:
            "Das klassische Minimax-Spiel zwischen Generator und Diskriminator, erweitert auf den bedingten Fall:",
        },
        auxiliary: {
          title: "2. Hilfsklassifikation (AC-GAN-Erweiterung)",
          description: "Gewährleistet thematische Kohärenz über einen geteilten Klassifikator:",
        },
        diversity: {
          title: "3. Diversitätsregularisierung",
          description: "Verhindert Mode Collapse durch Maximierung der Varianz generierter Features:",
        },
      },
      metrics: {
        title: "Fortgeschrittene Bewertungsmetriken",
        fid: {
          title: "Fréchet Inception Distance (FID)",
          description:
            "Misst die Distanz zwischen Verteilungen realer (r) und generierter (g) Positionen im Feature-Raum eines vortrainierten Netzwerks. Unser Score von 18.7 übertrifft klassische GANs (≥30) signifikant laut Zhang et al. (2021).",
        },
        entropy: {
          title: "Normalisierte Shannon-Entropie",
          description:
            "Berechnet auf der Verteilung taktischer Themen. Ein Wert nahe 1 zeigt perfekte Diversität an. Unser Score von 0.89 demonstriert nahezu optimale Klassenausbalancierung, verglichen mit regelbasierten Methoden (0.3-0.5).",
        },
        inception: {
          title: "Angepasster Inception Score",
          description:
            "Für Schach angepasst: p(y|x) ist die von unserem Klassifikator für Position x vorhergesagte Themenverteilung. Ein hoher Score zeigt distinkte und gut thematisch klassifizierte Positionen an.",
        },
      },
      showDerivation: "Vollständige Ableitung anzeigen",
      hideDerivation: "Ableitung ausblenden",
      showFormulations: "Mathematische Formulierungen anzeigen",
      hideFormulations: "Formulierungen ausblenden",
    },
    validation: {
      title: "Automatische Validierungspipeline",
      subtitle: "Mehrstufiges System zur Gewährleistung der Legalität und taktischen Qualität generierter Puzzles",
      legalityPosition: {
        title: "1. Positionslegalität",
        items: [
          "python-chess Validierung",
          "Königsanzahl-Kontrolle",
          "Bauern/Umwandlungs-Verifikation",
          "Materialkonsistenz-Test",
        ],
      },
      tacticalSolution: {
        title: "2. Taktische Lösung",
        items: [
          "Stockfish-Analyse Tiefe 12",
          "Lösungseinzigartigkeit-Verifikation",
          "Entscheidender Vorteil-Test (+3 Punkte)",
          "Spezifische Themen-Validierung",
        ],
      },
      qualityFiltering: {
        title: "3. Qualitätsfilterung",
        items: [
          "Duplikatserkennung (Zobrist)",
          "Triviale Positionselimination",
          "Realismus-Kontrolle (Diskriminator)",
          "Thematische Kohärenz-Validierung",
        ],
      },
      successRates: {
        geometric: "Geometrische Augmentationen:",
        parametric: "Parametrische Augmentationen:",
      },
      specialized: {
        title: "Spezialisierte Validierung nach Thema",
        mateIn1: {
          title: "Matt in 1 Zug",
          description:
            "Einfache Verifikation: Alle legalen Züge generieren und board.is_checkmate() für jeden testen. Mehrere Lösungen akzeptieren, wenn alle zu sofortigem Matt führen.",
        },
        materialGain: {
          title: "Materialgewinn",
          description:
            "Stockfish-Analyse für jeden möglichen Zug. Gültiges Puzzle, wenn ein Zug ≥+3 Punkte höheren Score als Alternativen erhält.",
        },
      },
      qualityMetrics: {
        thematicCoherence: {
          title: "Thematische Kohärenz",
          description: "Generierte Puzzles respektieren beabsichtigtes Thema (Diskriminator + manuelle Validierung)",
        },
        originality: {
          title: "Originalität",
          description: "Einzigartige Puzzles nicht im ursprünglichen Datensatz vorhanden (Zobrist-Erkennung)",
        },
        realism: {
          title: "Realismus",
          description: "Positionen vom Diskriminator als plausibel beurteilt (hoher Qualitätsscore)",
        },
      },
      showMetrics: "Detaillierte Metriken anzeigen",
      hideMetrics: "Metriken ausblenden",
    },
    applications: {
      title: "Industrielle Anwendungsfälle",
      trainingPlatforms: {
        title: "Trainingsplattformen",
        items: [
          "Adaptive Puzzle-Generierung (ELO-basiert)",
          "Vollständige taktische Themenabdeckung",
          "70% Kurations-Kostenreduktion",
          "Automatische Inhalts-Personalisierung",
        ],
      },
      pedagogicalTools: {
        title: "Pädagogische Werkzeuge",
        items: [
          "Personalisierte Trainingsplan-Erstellung",
          "Automatische Schwächen-Erkennung",
          "Sofortiges Feedback via Stockfish",
          "Intelligente adaptive Progression",
        ],
      },
      technicalStack: {
        title: "Produktions-Tech-Stack",
        coreML: {
          title: "Core ML",
          items: ["Python 3.10+", "PyTorch 2.0 + CUDA 11.7", "python-chess 3.0", "Optimierte NumPy, Pandas"],
        },
        validation: {
          title: "Validierung & Test",
          items: ["Stockfish 15 (Bewertung)", "pytest + coverage", "Great Expectations (Daten)", "MLflow (Tracking)"],
        },
        deployment: {
          title: "Deployment",
          items: ["Docker + Kubernetes", "FastAPI (Serving)", "Prometheus (Monitoring)", "Redis (Cache)"],
        },
      },
      showDetails: "Details anzeigen",
      hideDetails: "Details ausblenden",
    },
    roadmap: {
      title: "Forschungs- & Entwicklungs-Roadmap",
      q3_2024: {
        title: "Q3 2024 - Taktische Erweiterungen",
        items: [
          "Integration komplexer 2-3-Zug-Matts",
          "GPU-Optimierung mit Mixed Precision Training",
          "Theoretische Endspiel-Unterstützung (R+P vs R)",
          "Hochleistungs-REST-API (FastAPI)",
        ],
      },
      q4_2024: {
        title: "Q4 2024 - Publikation & Integration",
        items: [
          "NeurIPS 2024 Einreichung (Oktober Deadline)",
          "Leela Chess Zero Integration für Bewertung",
          "Benchmark gegen AlphaZero auf taktischen Positionen",
          "Framework Open-Source (MIT-Lizenz)",
        ],
      },
      year_2025: {
        title: "2025 - Fortgeschrittene Forschung",
        items: [
          "Erweiterung auf komplexe Endspiele (6+ Figuren)",
          "Multimodales Modell (Vision + algebraische Notation)",
          "Transfer Learning zu anderen Spielen (Go, Shogi)",
          "Transformer-Architektur für Zugsequenzen",
        ],
      },
      contributions: {
        title: "Geplante wissenschaftliche Beiträge",
        neurips: {
          title: "NeurIPS 2024 Publikation",
          subtitle:
            'Titel: "Hybride Template-GAN-Architektur für eingeschränkte Inhaltsgenerierung: Anwendung auf Schach-Taktikpuzzles"',
          description:
            "Schlüsselinnovationen: Kreativer Führungsmechanismus, integrierte strukturelle Validierung, Mode-Collapse-Lösung in eingeschränkten Domänen",
        },
        openSource: {
          title: "Datensatz & Open Source Code",
          description: "Publikation geplant Q2 2024 unter MIT-Lizenz",
          items: [
            "Datensatz von 1M+ generierten und validierten Positionen",
            "Vollständiges Datenaugmentations-Framework",
            "Vortrainierte Modelle für 10 taktische Themen",
            "Benchmarks und Bewertungsmetriken",
          ],
        },
      },
      showDetails: "Details anzeigen",
      hideDetails: "Details ausblenden",
    },
    footer: {
      title: "ChessGAN Forschungsprojekt",
      subtitle: "Hybride Architektur für eingeschränkte Inhaltsgenerierung • Nationale Hochschule für Informatik",
      author: "BENBOUTA Walid • 2CS SIT • Generative KI-Forschung",
      documentation: "Vollständige Dokumentation",
      sourceCode: "Quellcode & Notebook",
    },
    common: {
      showMore: "Mehr anzeigen",
      showLess: "Weniger anzeigen",
      references: "Referenzen",
      example: "Beispiel",
      implementation: "Implementierung",
      results: "Ergebnisse",
      details: "Details",
      loading: "Laden...",
      error: "Fehler",
    },
    metrics: {
      validityRate: "Gültigkeitsrate",
      normalizedEntropy: "Normalisierte Entropie",
      generationThroughput: "Generierungsdurchsatz",
      thematicCoherence: "Thematische Kohärenz",
      comparison: {
        title: "Vergleich mit dem Stand der Technik",
        classical: "Klassisches GAN (Baseline)",
        ourApproach: "Unser hybrider Ansatz",
        validity: "Gültigkeit",
        entropy: "Entropie",
        coherence: "Kohärenz",
      },
    },
  },
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
      description: "Estudiante de último año en ESI Argel, especializado en Sistemas de Información y tecnologías basadas en datos.",
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
      title: "Proyectos destacados",
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
    title: "Conectemos",
    centerOrbText: "Conectar",
    subtitle: "Listo para colaborar en proyectos innovadores de IA o discutir oportunidades en ciencia de datos",
    methods: {
      email: "Correo electrónico",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    getInTouch: "Ponerse en contacto",
    opportunities: {
      title: "Abierto a Oportunidades",
      aiEngineering: "Puestos de Ingeniería de IA",
      researchProjects: "Proyectos de Investigación Colaborativos",
      freelance: "Trabajo de Consultoría y Freelance",
      speaking: "Oportunidades para Charlas y Talleres",
    },
  },
   footer: {
    brandName: "Sr. Benbouta Walid",
    tagline: "Pionero en soluciones de IA con un enfoque en la innovación responsable y el impacto en el mundo real en el norte de África y más allá.",
    sectionTitles: {
      projects: "Proyectos",
      resources: "Recursos",
      contact: "Contacto",
    },
    links: {
      projects: {
        viewProjects: "Ver Proyectos",
        achievements: "Logros",
        resume: "Currículum",
      },
      resources: {
        aboutMe: "Acerca de mí",
        techStack: "Pila Tecnológica",
        experience: "Experiencia",
      },
      contact: {
        getInTouch: "Ponerse en contacto",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    copyrightName: "BENBOUTA Walid",
    roleEngineer: "Ingeniero de IA",
    roleGraduate: "Futurus Ingeniarius Publicus in Scientia Computatrali",
  },
  gan: {
    nav: {
      overview: "Visión General",
      dataAugmentation: "Aumento de Datos",
      ganArchitecture: "Arquitectura GAN",
      mathematics: "Fundamentos Matemáticos",
      validation: "Validación Automática",
      applications: "Aplicaciones Industriales",
      roadmap: "Hoja de Ruta Técnica",
    },
    hero: {
      badge: "Investigación Avanzada en IA Generativa",
      title: "Sistema Híbrido de Generación de Puzzles de Ajedrez",
      subtitle:
        "Arquitectura revolucionaria que combina aumento de datos especializado y redes generativas adversariales condicionales (AC-GAN)",
      keyInnovation:
        "Innovación Clave: Resolución del problema de generación de contenido restringido mediante enfoque híbrido template-GAN",
      performance:
        "Rendimiento: 95% validez de posiciones generadas • 2.8x mejora entropía normalizada • 1,200 posiciones/segundo",
    },
    introduction: {
      title: "Generación Automática de Puzzles de Ajedrez",
      subtitle:
        "Sistema revolucionario que combina aumento de datos especializado y GANs condicionales para la creación automática de puzzles tácticos",
      objective: {
        title: "Objetivo Principal",
        description:
          "Generar automáticamente puzzles de ajedrez novedosos pero plausibles, respetando las reglas del juego y presentando temas tácticos específicos (mate en 1, horquillas, clavadas)",
      },
      dataSource: {
        title: "Fuente de Datos",
        description:
          "Base de datos Lichess de 5+ millones de puzzles extraídos de 300+ millones de partidas analizadas por Stockfish, codificados en notación FEN",
      },
      innovation: {
        title: "Innovación Técnica",
        description: "Arquitectura híbrida templates + AC-GAN con discriminador multi-cabeza (validez, tema, calidad)",
      },
      fenExample: "Ejemplo de Notación FEN",
      fenDescription:
        "Esta notación codifica completamente una posición: colocación de piezas, turno, derechos de enroque, captura al paso, contadores de movimientos",
      tensorEncoding: {
        title: "Codificación Tensorial de Posiciones",
        description:
          "Cada posición FEN se convierte en un tensor binario 8×8×N para el entrenamiento de redes neuronales. Típicamente N=12 capas para 6 tipos de piezas × 2 colores, más capas adicionales para turno y reglas especiales.",
        structure: {
          whitePieces: "Capas 0-5: Piezas blancas (P, N, B, R, Q, K)",
          blackPieces: "Capas 6-11: Piezas negras (p, n, b, r, q, k)",
          turn: "Capa 12: Turno (1 si Blancas, 0 si Negras)",
          emptyCells: "Casillas vacías: Representadas por ceros en todas las capas",
        },
      },
      challenges: {
        title: "Desafíos Técnicos Resueltos",
        problems: {
          thematicImbalance: "Algunos temas (horquillas) 10x más frecuentes",
          complexValidation: "Validación compleja de posiciones generadas",
          strictConstraints: "Restricciones estrictas de reglas de ajedrez",
          uniqueSolutions: "Necesidad de soluciones tácticas únicas",
        },
        solutions: {
          targetedAugmentation: "Aumento dirigido para clases raras",
          automaticValidation: "Pipeline de validación automática (python-chess + Stockfish)",
          hybridArchitecture: "Arquitectura híbrida templates + generación",
          multiHeadDiscriminator: "Discriminador multi-cabeza para control de calidad",
        },
      },
      showDetails: "Mostrar codificación y desafíos técnicos",
      hideDetails: "Ocultar detalles",
    },
    technicalOverview: {
      title: "Innovación Técnica Fundamental",
      subtitle:
        "Arquitectura híbrida revolucionaria que resuelve limitaciones de enfoques puramente neuronales o simbólicos",
      criticalProblems: {
        title: "Problemas Críticos Resueltos",
        modeCollapse: "Colapso de Modo: GANs clásicas generan 45% posiciones inválidas",
        thematicImbalance: "Desequilibrio Temático: Ratio 1:10 entre clases raras/frecuentes",
        conditionalControl: "Control Condicional: Imposibilidad de especificar dificultad y tema",
        postHocValidation: "Validación Post-Hoc: Filtrado costoso de posiciones ilegales",
      },
      innovations: {
        title: "Soluciones Arquitectónicas Innovadoras",
        templateGuidance: "Guía por Templates: 92% validez garantizada estructuralmente",
        conditionalACGAN: "AC-GAN Condicional: Control preciso tema + dificultad",
        targetedAugmentation: "Aumento Dirigido: Equilibrado inteligente de clases raras",
        hybridPipeline: "Pipeline Híbrido: 50% templates + 35% GAN + 15% fusión creativa",
      },
      theoreticalFoundations: {
        title: "Fundamentos Teóricos Avanzados",
        description:
          "Nuestro enfoque se inspira en trabajos recientes sobre hibridación simbólico-neuronal, notablemente AlphaGeometry (DeepMind, 2024) y Sistemas Neuro-Simbólicos. La combinación de restricciones formales (templates de ajedrez) y aprendizaje profundo (AC-GAN) permite superar el dilema clásico entre expresividad y controlabilidad.",
        equation: {
          title: "Ecuación Fundamental del Sistema Híbrido",
          description:
            "Donde α=0.5, β=0.35, γ=0.15 están optimizados empíricamente para maximizar validez y creatividad",
        },
      },
      references: {
        title: "Referencias Científicas Clave",
      },
      showTheory: "Mostrar fundamentos teóricos",
      hideTheory: "Ocultar detalles técnicos",
    },
    dataAugmentation: {
      title: "Estrategias de Aumento Avanzadas",
      subtitle: "Enfoques complementarios para enriquecer el corpus y equilibrar temas tácticos raros",
      geometric: {
        title: "Aumentos Geométricos",
        horizontalMirror: "Espejo Horizontal: Preservación 98% relaciones tácticas",
        rotation180: "Rotación 180°: Genera variantes espaciales válidas",
        advantage: "Ventaja: +40% diversidad (métrica Shannon)",
        complexity: "Complejidad: O(1) por transformación",
      },
      parametric: {
        title: "Aumento Paramétrico",
        thematicGenerators: "Generadores Temáticos: Mates, horquillas, clavadas",
        materialAnalysis: "Análisis Material: Balance piezas ±3 puntos",
        advantage: "Ventaja: Apunta específicamente a clases raras",
        successRate: "Tasa de Éxito: 85% posiciones válidas",
      },
      results: {
        puzzlesPerTheme: "Puzzles/tema",
        rareClassMultiplication: "Multiplicación clases raras",
        thematicCoherence: "Coherencia temática",
        entropyImprovement: "Mejora entropía",
      },
      materialBalance: {
        title: "Balance Material",
        description: "Diversificación de parámetros globales: balance material, actividad de piezas, movilidad",
      },
      implementation: {
        title: "Implementación de Transformaciones Geométricas",
        description:
          "Las transformaciones se aplican directamente a nivel de tensor 8×8×N. Para espejo horizontal, inversión de índices de columnas (0↦7, 1↦6, ...). Para rotación 180°, combinación de flip vertical+horizontal + intercambio de canales de piezas blancas/negras.",
      },
      thematicGeneration: {
        title: "Generación Temática Especializada",
        mateIn1: {
          title: "Mate en 1 Jugada",
          steps: [
            "Identificar rey enemigo",
            "Analizar casillas de ataque",
            "Colocar pieza ofensiva",
            "Verificar mate imparable",
          ],
        },
        fork: {
          title: "Horquilla",
          steps: [
            "Colocar Caballo en casilla vacía",
            "Verificar ataque ≥2 piezas",
            "Priorizar Rey + pieza pesada",
            "Validar ausencia de defensa",
          ],
        },
        pin: {
          title: "Clavada",
          steps: [
            "Localizar rey adversario",
            "Colocar Torre/Alfil alineado",
            "Insertar pieza intermedia",
            "Verificar inmovilización",
          ],
        },
      },
      showImplementation: "Mostrar implementación detallada",
      hideImplementation: "Ocultar implementación",
    },
    ganArchitecture: {
      title: "Arquitectura GAN Condicional Avanzada",
      subtitle: "Sistema adversarial con generador temático y discriminador multi-cabeza para control de calidad",
      conditionalGenerator: {
        title: "Generador Condicional G",
        input: "Entrada: z ∈ ℝ¹²⁸ (ruido latente) + y ∈ ℝᵀ (tema one-hot)",
        architecture: "Arquitectura: Capas FC → Deconv → salida 8×8×12",
        conditioning: "Condicionamiento: Embedding temático denso (32D)",
        constraints: "Restricciones: Softmax por casilla (exclusividad piezas)",
      },
      multiHeadDiscriminator: {
        title: "Discriminador Multi-Cabeza D",
        validityHead: "Cabeza Validez: Real vs Generado (pérdida BCE)",
        themeHead: "Cabeza Tema: Clasificación táctica (pérdida CE)",
        qualityHead: "Cabeza Calidad: Puntuación puzzle (regresión/clasificación)",
        architecture: "Arquitectura: CNN → Extracción características → 3 ramas FC",
      },
      objectiveFunction: {
        title: "Función Objetivo Minimax Extendida",
        description: "Donde L_adv = BCE(D(x), 1) + BCE(D(G(z|y)), 0) para discriminación real/falso",
      },
      hybridApproach: {
        title: "Enfoque Híbrido: Templates + Generación Guiada",
        description:
          "Para estabilizar el aprendizaje y aumentar la tasa de éxito, combinamos templates validados con modificaciones guiadas por el modelo, en lugar de generar completamente ex nihilo.",
        conditionalFilling: {
          title: "Llenado Condicional",
          description:
            "Partir de un tablero parcialmente lleno (reyes + piezas esenciales) y dejar que el generador complete las casillas vacías según el tema deseado.",
        },
        latentMixing: {
          title: "Mezcla Latente",
          description:
            "Combinar dos puzzles existentes interpolando sus representaciones latentes para crear puzzles híbridos multi-tema.",
        },
        guidedPerturbation: {
          title: "Perturbación Guiada",
          description:
            "Aplicar modificaciones menores sugeridas por el generador a puzzles válidos existentes (movimientos de piezas, adiciones estratégicas).",
        },
        advantages: {
          stability: {
            title: "Estabilidad de Entrenamiento",
            items: ["Reducción de colapso de modo", "Convergencia más rápida", "Gradientes más estables"],
          },
          quality: {
            title: "Calidad de Resultados",
            items: [
              "Alta tasa de validez (92%)",
              "Coherencia temática garantizada",
              "Trazabilidad de transformaciones",
            ],
          },
        },
      },
      showDetails: "Mostrar arquitectura detallada",
      hideDetails: "Ocultar detalles",
    },
    mathematics: {
      title: "Función Objetivo Multi-Criterio",
      subtitle: "Formulaciones matemáticas avanzadas para pérdida AC-GAN híbrida",
      components: {
        title: "Componentes Matemáticos",
        discriminator: "D(x): Discriminador - probabilidad de que x sea real",
        generator: "G(z|c): Generador condicional en tema c",
        classifier: "C(x): Clasificador auxiliar de temas",
        qualityEstimator: "Q(x): Estimador de calidad (basado en Stockfish)",
      },
      hyperparameters: {
        title: "Hiperparámetros Optimizados",
        lambda1: "λ₁ = 0.2: Peso clasificación temática",
        lambda2: "λ₂ = 0.3: Peso calidad táctica",
        lambda3: "λ₃ = 0.1: Peso diversidad (anti-colapso modo)",
        learningRates: "Tasas de aprendizaje: G: 2×10⁻⁴, D: 1×10⁻⁴",
      },
      derivation: {
        title: "Derivación Teórica Completa",
        adversarial: {
          title: "1. Término Adversarial (Goodfellow et al., 2014)",
          description: "El juego minimax clásico entre generador y discriminador, extendido al caso condicional:",
        },
        auxiliary: {
          title: "2. Clasificación Auxiliar (Extensión AC-GAN)",
          description: "Asegura coherencia temática vía clasificador compartido:",
        },
        diversity: {
          title: "3. Regularización de Diversidad",
          description: "Previene colapso de modo maximizando varianza de características generadas:",
        },
      },
      metrics: {
        title: "Métricas de Evaluación Avanzadas",
        fid: {
          title: "Distancia Fréchet Inception (FID)",
          description:
            "Mide la distancia entre distribuciones de posiciones reales (r) y generadas (g) en el espacio de características de una red preentrenada. Nuestro puntaje de 18.7 supera significativamente a GANs clásicas (≥30) según Zhang et al. (2021).",
        },
        entropy: {
          title: "Entropía Shannon Normalizada",
          description:
            "Calculada en la distribución de temas tácticos. Un valor cercano a 1 indica diversidad perfecta. Nuestro puntaje de 0.89 demuestra equilibrado casi óptimo de clases, comparado con métodos basados en reglas (0.3-0.5).",
        },
        inception: {
          title: "Puntuación Inception Adaptada",
          description:
            "Adaptada para ajedrez: p(y|x) es la distribución de temas predicha por nuestro clasificador para la posición x. Un puntaje alto indica posiciones distintas y bien clasificadas temáticamente.",
        },
      },
      showDerivation: "Mostrar derivación completa",
      hideDerivation: "Ocultar derivación",
      showFormulations: "Mostrar formulaciones matemáticas",
      hideFormulations: "Ocultar formulaciones",
    },
    validation: {
      title: "Pipeline de Validación Automática",
      subtitle: "Sistema multi-etapa que garantiza legalidad y calidad táctica de puzzles generados",
      legalityPosition: {
        title: "1. Legalidad de Posición",
        items: [
          "Validación python-chess",
          "Control número de reyes",
          "Verificación peones/promoción",
          "Test consistencia material",
        ],
      },
      tacticalSolution: {
        title: "2. Solución Táctica",
        items: [
          "Análisis Stockfish profundidad 12",
          "Verificación unicidad solución",
          "Test ventaja decisiva (+3 puntos)",
          "Validación tema específico",
        ],
      },
      qualityFiltering: {
        title: "3. Filtrado de Calidad",
        items: [
          "Detección duplicados (Zobrist)",
          "Eliminación posiciones triviales",
          "Control realismo (discriminador)",
          "Validación coherencia temática",
        ],
      },
      successRates: {
        geometric: "Aumentos Geométricos:",
        parametric: "Aumentos Paramétricos:",
      },
      specialized: {
        title: "Validación Especializada por Tema",
        mateIn1: {
          title: "Mate en 1 Jugada",
          description:
            "Verificación simple: generar todas las jugadas legales y probar board.is_checkmate() para cada una. Aceptar múltiples soluciones si todas llevan a mate inmediato.",
        },
        materialGain: {
          title: "Ganancia Material",
          description:
            "Análisis Stockfish para cada jugada posible. Puzzle válido si una jugada obtiene puntuación ≥+3 puntos superior a alternativas.",
        },
      },
      qualityMetrics: {
        thematicCoherence: {
          title: "Coherencia Temática",
          description: "Puzzles generados respetando tema previsto (validación discriminador + manual)",
        },
        originality: {
          title: "Originalidad",
          description: "Puzzles únicos no presentes en dataset original (detección Zobrist)",
        },
        realism: {
          title: "Realismo",
          description: "Posiciones juzgadas plausibles por discriminador (puntuación calidad alta)",
        },
      },
      showMetrics: "Mostrar métricas detalladas",
      hideMetrics: "Ocultar métricas",
    },
    applications: {
      title: "Casos de Uso Industriales",
      trainingPlatforms: {
        title: "Plataformas de Entrenamiento",
        items: [
          "Generación puzzles adaptativos (basado en ELO)",
          "Cobertura completa temas tácticos",
          "Reducción 70% costos curación",
          "Personalización automática contenido",
        ],
      },
      pedagogicalTools: {
        title: "Herramientas Pedagógicas",
        items: [
          "Creación planes entrenamiento personalizados",
          "Detección automática debilidades",
          "Retroalimentación instantánea vía Stockfish",
          "Progresión adaptativa inteligente",
        ],
      },
      technicalStack: {
        title: "Stack Tecnológico de Producción",
        coreML: {
          title: "Core ML",
          items: ["Python 3.10+", "PyTorch 2.0 + CUDA 11.7", "python-chess 3.0", "NumPy, Pandas optimizados"],
        },
        validation: {
          title: "Validación y Test",
          items: [
            "Stockfish 15 (evaluación)",
            "pytest + coverage",
            "Great Expectations (datos)",
            "MLflow (seguimiento)",
          ],
        },
        deployment: {
          title: "Despliegue",
          items: ["Docker + Kubernetes", "FastAPI (servicio)", "Prometheus (monitoreo)", "Redis (caché)"],
        },
      },
      showDetails: "Mostrar detalles",
      hideDetails: "Ocultar detalles",
    },
    roadmap: {
      title: "Hoja de Ruta Investigación y Desarrollo",
      q3_2024: {
        title: "Q3 2024 - Extensiones Tácticas",
        items: [
          "Integración mates complejos 2-3 jugadas",
          "Optimización GPU con Mixed Precision Training",
          "Soporte finales teóricos (R+P vs R)",
          "API REST alto rendimiento (FastAPI)",
        ],
      },
      q4_2024: {
        title: "Q4 2024 - Publicación e Integración",
        items: [
          "Envío NeurIPS 2024 (fecha límite octubre)",
          "Integración Leela Chess Zero para evaluación",
          "Benchmark contra AlphaZero en posiciones tácticas",
          "Framework código abierto (licencia MIT)",
        ],
      },
      year_2025: {
        title: "2025 - Investigación Avanzada",
        items: [
          "Extensión a finales complejos (6+ piezas)",
          "Modelo multimodal (visión + notación algebraica)",
          "Transfer learning a otros juegos (Go, Shogi)",
          "Arquitectura Transformer para secuencias jugadas",
        ],
      },
      contributions: {
        title: "Contribuciones Científicas Planificadas",
        neurips: {
          title: "Publicación NeurIPS 2024",
          subtitle:
            'Título: "Arquitectura Template-GAN Híbrida para Generación Contenido Restringido: Aplicación a Puzzles Tácticos Ajedrez"',
          description:
            "Innovaciones clave: Mecanismo guía creativa, validación estructural integrada, resolución colapso modo en dominios restringidos",
        },
        openSource: {
          title: "Dataset y Código Abierto",
          description: "Publicación planificada Q2 2024 bajo licencia MIT",
          items: [
            "Dataset 1M+ posiciones generadas y validadas",
            "Framework completo aumento datos",
            "Modelos preentrenados para 10 temas tácticos",
            "Benchmarks y métricas evaluación",
          ],
        },
      },
      showDetails: "Mostrar detalles",
      hideDetails: "Ocultar detalles",
    },
    footer: {
      title: "Proyecto Investigación ChessGAN",
      subtitle: "Arquitectura híbrida para generación contenido restringido • Escuela Nacional Superior de Informática",
      author: "BENBOUTA Walid • 2CS SIT • Investigación IA Generativa",
      documentation: "Documentación Completa",
      sourceCode: "Código Fuente y Notebook",
    },
    common: {
      showMore: "Mostrar más",
      showLess: "Mostrar menos",
      references: "Referencias",
      example: "Ejemplo",
      implementation: "Implementación",
      results: "Resultados",
      details: "Detalles",
      loading: "Cargando...",
      error: "Error",
    },
    metrics: {
      validityRate: "Tasa de validez",
      normalizedEntropy: "Entropía normalizada",
      generationThroughput: "Rendimiento generación",
      thematicCoherence: "Coherencia temática",
      comparison: {
        title: "Comparación con Estado del Arte",
        classical: "GAN Clásica (Baseline)",
        ourApproach: "Nuestro Enfoque Híbrido",
        validity: "Validez",
        entropy: "Entropía",
        coherence: "Coherencia",
      },
    },
  },
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
      description: "طالب في السنة النهائية بالمدرسة العليا للإعلام الآلي بالجزائر، متخصص في نظم المعلومات والتقنيات القائمة على البيانات.",
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
      title: "المشاريع المميزة",
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
    title: "دعنا نتواصل",
    centerOrbText: "تواصل",
    subtitle: "مستعد للتعاون في مشاريع الذكاء الاصطناعي المبتكرة أو لمناقشة الفرص في علم البيانات",
    methods: {
      email: "البريد الإلكتروني",
      github: "جيت هاب",
      linkedin: "لينكد إن",
    },
    getInTouch: "تواصل معي",
    opportunities: {
      title: "متاح للفرص",
      aiEngineering: "مناصب هندسة الذكاء الاصطناعي",
      researchProjects: "مشاريع بحثية تعاونية",
      freelance: "استشارات وعمل حر",
      speaking: "فرص التحدث وورش العمل",
    },
  },
    footer: {
    brandName: "السيد بن بوتة وليد",
    tagline: "رواد حلول الذكاء الاصطناعي مع التركيز على الابتكار المسؤول والتأثير الفعلي في شمال إفريقيا وما بعدها.",
    sectionTitles: {
      projects: "المشاريع",
      resources: "الموارد",
      contact: "التواصل",
    },
    links: {
      projects: {
        viewProjects: "عرض المشاريع",
        achievements: "الإنجازات",
        resume: "السيرة الذاتية",
      },
      resources: {
        aboutMe: "نبذة عني",
        techStack: "المكدس التقني",
        experience: "الخبرة",
      },
      contact: {
        getInTouch: "تواصل معي",
        github: "جيت هاب",
        linkedin: "لينكد إن",
      },
    },
    copyrightName: "بن بوتة وليد",
    roleEngineer: "مهندس ذكاء اصطناعي",
    roleGraduate: "مهندس دولة مستقبلي في علوم الحاسوب",
  },
gan: {
  nav: {
      overview: "نظرة عامة",
      dataAugmentation: "تعزيز البيانات",
      ganArchitecture: "هندسة GAN",
      mathematics: "الأسس الرياضية",
      validation: "التحقق التلقائي",
      applications: "التطبيقات الصناعية",
      roadmap: "خارطة الطريق التقنية",
    },
    hero: {
      badge: "بحث متقدم في الذكاء الاصطناعي التوليدي",
      title: "نظام هجين لتوليد ألغاز الشطرنج",
      subtitle: "هندسة ثورية تجمع بين تعزيز البيانات المتخصص والشبكات التوليدية التنافسية المشروطة (AC-GAN)",
      keyInnovation: "الابتكار الرئيسي: حل مشكلة توليد المحتوى المقيد من خلال نهج هجين template-GAN",
      performance: "الأداء: 95% صحة المواضع المولدة • تحسن 2.8x في الإنتروبيا المعيارية • 1,200 موضع/ثانية",
    },
    introduction: {
      title: "التوليد التلقائي لألغاز الشطرنج",
      subtitle: "نظام ثوري يجمع بين تعزيز البيانات المتخصص و GANs المشروطة للإنشاء التلقائي للألغاز التكتيكية",
      objective: {
        title: "الهدف الرئيسي",
        description:
          "توليد ألغاز شطرنج جديدة ولكن معقولة تلقائياً، مع احترام قواعد اللعبة وتقديم مواضيع تكتيكية مستهدفة (كش مات في حركة واحدة، الشوكة، التثبيت)",
      },
      dataSource: {
        title: "مصدر البيانات",
        description:
          "قاعدة بيانات Lichess تحتوي على 5+ مليون لغز مستخرج من 300+ مليون لعبة تم تحليلها بواسطة Stockfish، مُرمزة بتدوين FEN",
      },
      innovation: {
        title: "الابتكار التقني",
        description: "هندسة هجينة templates + AC-GAN مع مميز متعدد الرؤوس (الصحة، الموضوع، الجودة)",
      },
      fenExample: "مثال على تدوين FEN",
      fenDescription: "هذا التدوين يُرمز موضعاً كاملاً: ترتيب القطع، الدور، حقوق التبييت، الأخذ بالمرور، عدادات الحركات",
      tensorEncoding: {
        title: "الترميز التنسوري للمواضع",
        description:
          "كل موضع FEN يتم تحويله إلى تنسور ثنائي 8×8×N لتدريب الشبكات العصبية. عادة N=12 طبقة لـ 6 أنواع قطع × 2 لون، بالإضافة إلى طبقات إضافية للدور والقواعد الخاصة.",
        structure: {
          whitePieces: "الطبقات 0-5: القطع البيضاء (P, N, B, R, Q, K)",
          blackPieces: "الطبقات 6-11: القطع السوداء (p, n, b, r, q, k)",
          turn: "الطبقة 12: الدور (1 إذا أبيض، 0 إذا أسود)",
          emptyCells: "المربعات الفارغة: ممثلة بأصفار على جميع الطبقات",
        },
      },
      challenges: {
        title: "التحديات التقنية المحلولة",
        problems: {
          thematicImbalance: "بعض المواضيع (الشوك) أكثر تكراراً بـ 10 مرات",
          complexValidation: "التحقق المعقد من المواضع المولدة",
          strictConstraints: "قيود صارمة لقواعد الشطرنج",
          uniqueSolutions: "الحاجة لحلول تكتيكية فريدة",
        },
        solutions: {
          targetedAugmentation: "تعزيز مستهدف للفئات النادرة",
          automaticValidation: "خط أنابيب التحقق التلقائي (python-chess + Stockfish)",
          hybridArchitecture: "هندسة هجينة templates + توليد",
          multiHeadDiscriminator: "مميز متعدد الرؤوس لمراقبة الجودة",
        },
      },
      showDetails: "إظهار الترميز والتحديات التقنية",
      hideDetails: "إخفاء التفاصيل",
    },
    technicalOverview: {
      title: "الابتكار التقني الأساسي",
      subtitle: "هندسة هجينة ثورية تحل قيود الأساليب العصبية أو الرمزية البحتة",
      criticalProblems: {
        title: "المشاكل الحرجة المحلولة",
        modeCollapse: "انهيار النمط: GANs الكلاسيكية تولد 45% مواضع غير صحيحة",
        thematicImbalance: "عدم التوازن الموضوعي: نسبة 1:10 بين الفئات النادرة/المتكررة",
        conditionalControl: "التحكم المشروط: عدم القدرة على تحديد الصعوبة والموضوع",
        postHocValidation: "التحقق اللاحق: تصفية مكلفة للمواضع غير القانونية",
      },
      innovations: {
        title: "الحلول المعمارية المبتكرة",
        templateGuidance: "التوجيه بالقوالب: 92% صحة مضمونة هيكلياً",
        conditionalACGAN: "AC-GAN المشروط: تحكم دقيق في الموضوع + الصعوبة",
        targetedAugmentation: "التعزيز المستهدف: توازن ذكي للفئات النادرة",
        hybridPipeline: "خط الأنابيب الهجين: 50% قوالب + 35% GAN + 15% دمج إبداعي",
      },
      theoreticalFoundations: {
        title: "الأسس النظرية المتقدمة",
        description:
          "نهجنا مستوحى من الأعمال الحديثة في الهجين الرمزي-العصبي، خاصة AlphaGeometry (DeepMind, 2024) والأنظمة العصبية-الرمزية. الجمع بين القيود الرسمية (قوالب الشطرنج) والتعلم العميق (AC-GAN) يسمح بتجاوز المعضلة الكلاسيكية بين التعبيرية والقابلية للتحكم.",
        equation: {
          title: "المعادلة الأساسية للنظام الهجين",
          description: "حيث α=0.5, β=0.35, γ=0.15 محسنة تجريبياً لتعظيم الصحة والإبداع",
        },
      },
      references: {
        title: "المراجع العلمية الرئيسية",
      },
      showTheory: "إظهار الأسس النظرية",
      hideTheory: "إخفاء التفاصيل التقنية",
    },
    dataAugmentation: {
      title: "استراتيجيات التعزيز المتقدمة",
      subtitle: "أساليب متكاملة لإثراء المجموعة وتوازن المواضيع التكتيكية النادرة",
      geometric: {
        title: "التعزيزات الهندسية",
        horizontalMirror: "المرآة الأفقية: حفظ 98% من العلاقات التكتيكية",
        rotation180: "دوران 180°: ينتج متغيرات مكانية صحيحة",
        advantage: "الميزة: +40% تنوع (مقياس Shannon)",
        complexity: "التعقيد: O(1) لكل تحويل",
      },
      parametric: {
        title: "التعزيز البارامتري",
        thematicGenerators: "المولدات الموضوعية: كش مات، شوك، تثبيت",
        materialAnalysis: "تحليل المواد: توازن القطع ±3 نقاط",
        advantage: "الميزة: يستهدف الفئات النادرة تحديداً",
        successRate: "معدل النجاح: 85% مواضع صحيحة",
      },
      results: {
        puzzlesPerTheme: "ألغاز/موضوع",
        rareClassMultiplication: "مضاعفة الفئات النادرة",
        thematicCoherence: "التماسك الموضوعي",
        entropyImprovement: "تحسن الإنترو بيا",
      },
      materialBalance: {
        title: "التوازن المادي",
        description: "تنويع المعاملات العامة: توازن المواد، نشاط القطع، الحركة",
      },
      implementation: {
        title: "تنفيذ التحويلات الهندسية",
        description:
          "التحويلات تُطبق مباشرة على مستوى التنسور 8×8×N. للمرآة الأفقية، عكس فهارس الأعمدة (0↦7, 1↦6, ...). للدوران 180°، مزيج من القلب العمودي+الأفقي + تبديل قنوات القطع البيضاء/السوداء.",
      },
      thematicGeneration: {
        title: "التوليد الموضوعي المتخصص",
        mateIn1: {
          title: "كش مات في حركة واحدة",
          steps: ["تحديد الملك العدو", "تحليل مربعات الهجوم", "وضع القطعة الهجومية", "التحقق من كش مات لا يُوقف"],
        },
        fork: {
          title: "الشوكة",
          steps: [
            "وضع الحصان في مربع فارغ",
            "التحقق من مهاجمة ≥2 قطعة",
            "تفضيل الملك + قطعة ثقيلة",
            "التحقق من عدم وجود دفاع",
          ],
        },
        pin: {
          title: "التثبيت",
          steps: ["تحديد موقع الملك المعادي", "وضع القلعة/الفيل محاذياً", "إدراج قطعة وسطية", "التحقق من الشلل"],
        },
      },
      showImplementation: "إظهار التنفيذ المفصل",
      hideImplementation: "إخفاء التنفيذ",
    },
    ganArchitecture: {
      title: "هندسة GAN المشروطة المتقدمة",
      subtitle: "نظام تنافسي مع مولد موضوعي ومميز متعدد الرؤوس لمراقبة الجودة",
      conditionalGenerator: {
        title: "المولد المشروط G",
        input: "المدخل: z ∈ ℝ¹²⁸ (ضوضاء كامنة) + y ∈ ℝᵀ (موضوع one-hot)",
        architecture: "الهندسة: طبقات FC → Deconv → مخرج 8×8×12",
        conditioning: "التكييف: تضمين موضوعي كثيف (32D)",
        constraints: "القيود: Softmax لكل مربع (حصرية القطع)",
      },
      multiHeadDiscriminator: {
        title: "المميز متعدد الرؤوس D",
        validityHead: "رأس الصحة: حقيقي مقابل مولد (خسارة BCE)",
        themeHead: "رأس الموضوع: تصنيف تكتيكي (خسارة CE)",
        qualityHead: "رأس الجودة: نقاط اللغز (انحدار/تصنيف)",
        architecture: "الهندسة: CNN → استخراج الميزات → 3 فروع FC",
      },
      objectiveFunction: {
        title: "دالة الهدف Minimax الموسعة",
        description: "حيث L_adv = BCE(D(x), 1) + BCE(D(G(z|y)), 0) للتمييز حقيقي/مزيف",
      },
      hybridApproach: {
        title: "النهج الهجين: القوالب + التوليد الموجه",
        description:
          "لتثبيت التعلم وزيادة معدل النجاح، نجمع بين القوالب المتحققة والتعديلات الموجهة بالنموذج، بدلاً من التوليد الكامل من العدم.",
        conditionalFilling: {
          title: "الملء المشروط",
          description:
            "البدء من رقعة شطرنج مملوءة جزئياً (ملوك + قطع أساسية) وترك المولد يكمل المربعات الفارغة حسب الموضوع المطلوب.",
        },
        latentMixing: {
          title: "الخلط الكامن",
          description: "دمج لغزين موجودين بتداخل تمثيلاتهما الكامنة لإنشاء ألغاز هجينة متعددة المواضيع.",
        },
        guidedPerturbation: {
          title: "الاضطراب الموجه",
          description: "تطبيق تعديلات طفيفة يقترحها المولد على ألغاز صحيحة موجودة (حركات القطع، إضافات استراتيجية).",
        },
        advantages: {
          stability: {
            title: "استقرار التدريب",
            items: ["تقليل انهيار النمط", "تقارب أسرع", "تدرجات أكثر استقراراً"],
          },
          quality: {
            title: "جودة النتائج",
            items: ["معدل صحة عالي (92%)", "تماسك موضوعي مضمون", "قابلية تتبع التحويلات"],
          },
        },
      },
      showDetails: "إظهار الهندسة المفصلة",
      hideDetails: "إخفاء التفاصيل",
    },
    mathematics: {
      title: "دالة الهدف متعددة المعايير",
      subtitle: "صيغ رياضية متقدمة لخسارة AC-GAN الهجينة",
      components: {
        title: "المكونات الرياضية",
        discriminator: "D(x): المميز - احتمال أن x حقيقي",
        generator: "G(z|c): المولد المشروط على الموضوع c",
        classifier: "C(x): مصنف المواضيع المساعد",
        qualityEstimator: "Q(x): مقدر الجودة (مبني على Stockfish)",
      },
      hyperparameters: {
        title: "المعاملات الفائقة المحسنة",
        lambda1: "λ₁ = 0.2: وزن التصنيف الموضوعي",
        lambda2: "λ₂ = 0.3: وزن الجودة التكتيكية",
        lambda3: "λ₃ = 0.1: وزن التنوع (مضاد انهيار النمط)",
        learningRates: "معدلات التعلم: G: 2×10⁻⁴, D: 1×10⁻⁴",
      },
      derivation: {
        title: "الاشتقاق النظري الكامل",
        adversarial: {
          title: "1. المصطلح التنافسي (Goodfellow et al., 2014)",
          description: "لعبة minimax الكلاسيكية بين المولد والمميز، موسعة للحالة المشروطة:",
        },
        auxiliary: {
          title: "2. التصنيف المساعد (امتداد AC-GAN)",
          description: "يضمن التماسك الموضوعي عبر مصنف مشترك:",
        },
        diversity: {
          title: "3. تنظيم التنوع",
          description: "يمنع انهيار النمط بتعظيم تباين الميزات المولدة:",
        },
      },
      metrics: {
        title: "مقاييس التقييم المتقدمة",
        fid: {
          title: "مسافة Fréchet Inception (FID)",
          description:
            "تقيس المسافة بين توزيعات المواضع الحقيقية (r) والمولدة (g) في مساحة ميزات الشبكة المدربة مسبقاً. نقاطنا 18.7 تتفوق بشكل كبير على GANs الكلاسيكية (≥30) حسب Zhang et al. (2021).",
        },
        entropy: {
          title: "إنتروبيا Shannon المعيارية",
          description:
            "محسوبة على توزيع المواضيع التكتيكية. قيمة قريبة من 1 تشير لتنوع مثالي. نقاطنا 0.89 تظهر توازن شبه مثالي للفئات، مقارنة بالطرق المبنية على القواعد (0.3-0.5).",
        },
        inception: {
          title: "نقاط Inception المكيفة",
          description:
            "مكيفة للشطرنج: p(y|x) هو توزيع المواضيع المتنبأ به بواسطة مصنفنا للموضع x. نقاط عالية تشير لمواضع متميزة ومصنفة جيداً موضوعياً.",
        },
      },
      showDerivation: "إظهار الاشتقاق الكامل",
      hideDerivation: "إخفاء الاشتقاق",
      showFormulations: "إظهار الصيغ الرياضية",
      hideFormulations: "إخفاء الصيغ",
    },
    validation: {
      title: "خط أنابيب التحقق التلقائي",
      subtitle: "نظام متعدد المراحل يضمن قانونية وجودة تكتيكية للألغاز المولدة",
      legalityPosition: {
        title: "1. قانونية الموضع",
        items: ["تحقق python-chess", "مراقبة عدد الملوك", "تحقق البيادق/الترقية", "اختبار تماسك المواد"],
      },
      tacticalSolution: {
        title: "2. الحل التكتيكي",
        items: [
          "تحليل Stockfish عمق 12",
          "تحقق وحدانية الحل",
          "اختبار الميزة الحاسمة (+3 نقاط)",
          "تحقق الموضوع المحدد",
        ],
      },
      qualityFiltering: {
        title: "3. تصفية الجودة",
        items: ["كشف المكررات (Zobrist)", "إزالة المواضع التافهة", "مراقبة الواقعية (المميز)", "تحقق التماسك الموضوعي"],
      },
      successRates: {
        geometric: "التعزيزات الهندسية:",
        parametric: "التعزيزات البارامترية:",
      },
      specialized: {
        title: "التحقق المتخصص حسب الموضوع",
        mateIn1: {
          title: "كش مات في حركة واحدة",
          description:
            "تحقق بسيط: توليد جميع الحركات القانونية واختبار board.is_checkmate() لكل منها. قبول حلول متعددة إذا كانت جميعها تؤدي لكش مات فوري.",
        },
        materialGain: {
          title: "كسب مادي",
          description: "تحليل Stockfish لكل حركة ممكنة. لغز صحيح إذا حصلت حركة على نقاط ≥+3 أعلى من البدائل.",
        },
      },
      qualityMetrics: {
        thematicCoherence: {
          title: "التماسك الموضوعي",
          description: "ألغاز مولدة تحترم الموضوع المقصود (تحقق المميز + يدوي)",
        },
        originality: {
          title: "الأصالة",
          description: "ألغاز فريدة غير موجودة في مجموعة البيانات الأصلية (كشف Zobrist)",
        },
        realism: {
          title: "الواقعية",
          description: "مواضع يحكم عليها المميز كمعقولة (نقاط جودة عالية)",
        },
      },
      showMetrics: "إظهار المقاييس المفصلة",
      hideMetrics: "إخفاء المقاييس",
    },
    applications: {
      title: "حالات الاستخدام الصناعية",
      trainingPlatforms: {
        title: "منصات التدريب",
        items: [
          "توليد ألغاز تكيفية (مبنية على ELO)",
          "تغطية كاملة للمواضيع التكتيكية",
          "تقليل تكاليف التنسيق بـ 70%",
          "تخصيص المحتوى التلقائي",
        ],
      },
      pedagogicalTools: {
        title: "الأدوات التعليمية",
        items: [
          "إنشاء خطط تدريب شخصية",
          "كشف نقاط الضعف التلقائي",
          "تغذية راجعة فورية عبر Stockfish",
          "تقدم تكيفي ذكي",
        ],
      },
      technicalStack: {
        title: "المكدس التقني للإنتاج",
        coreML: {
          title: "Core ML",
          items: ["Python 3.10+", "PyTorch 2.0 + CUDA 11.7", "python-chess 3.0", "NumPy, Pandas محسنة"],
        },
        validation: {
          title: "التحقق والاختبار",
          items: ["Stockfish 15 (تقييم)", "pytest + coverage", "Great Expectations (بيانات)", "MLflow (تتبع)"],
        },
        deployment: {
          title: "النشر",
          items: ["Docker + Kubernetes", "FastAPI (خدمة)", "Prometheus (مراقبة)", "Redis (تخزين مؤقت)"],
        },
      },
      showDetails: "إظهار التفاصيل",
      hideDetails: "إخفاء التفاصيل",
    },
    roadmap: {
      title: "خارطة طريق البحث والتطوير",
      q3_2024: {
        title: "الربع الثالث 2024 - التوسعات التكتيكية",
        items: [
          "دمج كش مات معقد في 2-3 حركات",
          "تحسين GPU مع Mixed Precision Training",
          "دعم النهايات النظرية (R+P vs R)",
          "API REST عالي الأداء (FastAPI)",
        ],
      },
      q4_2024: {
        title: "الربع الرابع 2024 - النشر والتكامل",
        items: [
          "تقديم NeurIPS 2024 (موعد أكتوبر)",
          "تكامل Leela Chess Zero للتقييم",
          "مقارنة مع AlphaZero على المواضع التكتيكية",
          "مصدر مفتوح للإطار (رخصة MIT)",
        ],
      },
      year_2025: {
        title: "2025 - البحث المتقدم",
        items: [
          "توسع للنهايات المعقدة (6+ قطع)",
          "نموذج متعدد الوسائط (رؤية + تدوين جبري)",
          "نقل التعلم لألعاب أخرى (Go, Shogi)",
          "هندسة Transformer لتسلسلات الحركات",
        ],
      },
      contributions: {
        title: "المساهمات العلمية المخططة",
        neurips: {
          title: "نشر NeurIPS 2024",
          subtitle: 'العنوان: "هندسة Template-GAN الهجينة لتوليد المحتوى المقيد: تطبيق على ألغاز الشطرنج التكتيكية"',
          description:
            "الابتكارات الرئيسية: آلية التوجيه الإبداعي، التحقق الهيكلي المتكامل، حل انهيار النمط في المجالات المقيدة",
        },
        openSource: {
          title: "مجموعة البيانات والكود المفتوح",
          description: "النشر مخطط للربع الثاني 2024 تحت رخصة MIT",
          items: [
            "مجموعة بيانات 1M+ موضع مولد ومتحقق",
            "إطار تعزيز بيانات كامل",
            "نماذج مدربة مسبقاً لـ 10 مواضيع تكتيكية",
            "معايير ومقاييس تقييم",
          ],
        },
      },
      showDetails: "إظهار التفاصيل",
      hideDetails: "إخفاء التفاصيل",
    },
    footer: {
      title: "مشروع بحث ChessGAN",
      subtitle: "هندسة هجينة لتوليد المحتوى المقيد • المدرسة الوطنية العليا للإعلام الآلي",
      author: "بن بوطة وليد • 2CS SIT • بحث في الذكاء الاصطناعي التوليدي",
      documentation: "الوثائق الكاملة",
      sourceCode: "الكود المصدري والدفتر",
    },
    common: {
      showMore: "إظهار المزيد",
      showLess: "إظهار أقل",
      references: "المراجع",
      example: "مثال",
      implementation: "التنفيذ",
      results: "النتائج",
      details: "التفاصيل",
      loading: "جاري التحميل...",
      error: "خطأ",
    },
    metrics: {
      validityRate: "معدل الصحة",
      normalizedEntropy: "الإنتروبيا المعيارية",
      generationThroughput: "إنتاجية التوليد",
      thematicCoherence: "التماسك الموضوعي",
      comparison: {
        title: "مقارنة مع أحدث التقنيات",
        classical: "GAN الكلاسيكي (خط الأساس)",
        ourApproach: "نهجنا الهجين",
        validity: "الصحة",
        entropy: "الإنتروبيا",
        coherence: "التماسك",
      },
    },

  },
  },
  
};

export { translations };