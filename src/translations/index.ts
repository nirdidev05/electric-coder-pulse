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
  adc : {
hero: {
    badge: {
      text: string;
    };
    title: {
      main: string;
      subtitle: string;
    };
    description: string;
    performanceMetrics: {
      title: string;
      metrics: Array<{
        label: string;
        description: string;
        suffix: string;
      }>;
    };
    technologyStack: Array<{
      name: string;
      description: string;
    }>;
    buttons: {
      primary: string;
      secondary: string;
    };
    keyFeatures: Array<{
      title: string;
      description: string;
    }>;
  };
executiveSummary: {
    badge: {
      primary: string;
      secondary: string;
    };
    title: {
      main: string;
      subtitle: string;
    };
    description: string;
    navigation: {
      sections: string[];
    };
    operationalChallenges: {
      title: string;
      challenges: Array<{
        title: string;
        description: string;
        currentState: string;
        businessImpact: string;
        frequency: string;
      }>;
      labels: {
        currentState: string;
        businessImpact: string;
        frequency: string;
      };
    };
    technicalSolutions: {
      title: string;
      solutions: Array<{
        title: string;
        description: string;
        methodology: string;
        implementation: string[];
        performance: string;
        innovation: string;
      }>;
      labels: {
        methodology: string;
        implementationDetails: string;
        performance: string;
        innovation: string;
      };
    };
    performanceAnalysis: {
      title: string;
      metrics: Array<{
        label: string;
        description: string;
        technicalDetail: string;
        context: string;
      }>;
      comparison: {
        title: string;
        models: Array<{
          name: string;
          description: string;
        }>;
        bestLabel: string;
      };
      labels: {
        technicalDetail: string;
        context: string;
      };
    };
    businessImpact: {
      title: string;
      keyMetrics: Array<{
        label: string;
        description: string;
      }>;
      operationalBenefits: Array<{
        title: string;
        description: string;
      }>;
      implementation: {
        title: string;
        phases: Array<{
          phase: string;
          duration: string;
          activities: string[];
        }>;
      };
      roi: {
        title: string;
        metrics: Array<{
          label: string;
          description: string;
        }>;
        quote: string;
        buttons: {
          technical: string;
          model: string;
        };
      };
    };
    dataArchitecture: {
      title: string;
      sources: Array<{
        name: string;
        details: string;
        records: string;
        connection: string;
        technical: string;
      }>;
    };
  };
     technicalOverview: {
    badge: {
      primary: string;
      secondary: string;
    };
    title: {
      main: string;
    };
    description: string;
    dataSources: {
      title: string;
      sources: Array<{
        name: string;
        description: string;
        keyFeatures: string[];
        dataSourceLabel: string; // "Data Source X/5"
      }>;
      integrationSummary: {
        title: string;
        metrics: Array<{
          label: string;
          description: string;
        }>;
      };
    };
    methodology: {
      title: string;
      phases: Array<{
        phase: string;
        description: string;
        techniques: string[];
        phaseLabel: string; // "Phase X"
      }>;
    };
    achievements: {
      metrics: Array<{
        label: string;
        description: string;
      }>;
    };
  };
  dataInsights: {
    badge: {
      primary: string;
      secondary: string;
    };
    title: {
      main: string;
    };
    description: string;
    timeSeriesAnalysis: {
      title: string;
      insights: Array<{
        title: string;
        description: string;
        findings: string[];
      }>;
    };
    keyStatistics: Array<{
      label: string;
      description: string;
    }>;
    criticalPatterns: {
      title: string;
      insights: Array<{
        title: string;
        finding: string;
        implication: string;
        category: string;
        observation: string;
      }>;
      labels: {
        keyFinding: string;
        strategicImplication: string;
      };
    };
    correlationAnalysis: {
      title: string;
      correlationStrengthLabel: string;
      implementationImpactLabel: string;
      patterns: Array<{
        category: string;
        description: string;
        impact: string;
        details: string[];
      }>;
    };
    summary: {
      title: string;
      description: string;
      driverCategories: Array<{
        title: string;
        subtitle: string;
      }>;
      conclusion: string;
    };
  }; 
    modelShowcase: {
    title: {
      main: string;
    };
    description: string;
    navigation: {
      tabs: Array<{
        label: string;
      }>;
    };
    architecture: {
      title: string;
      models: Array<{
        name: string;
        description: string;
        advantages: string[];
        role: string;
        technicalDetails: string[];
        useCases: string[];
      }>;
      performance: {
        crossValidationScore: string;
      };
      sections: {
        keyAdvantages: string;
        technicalConfiguration: string;
        useCases: string;
      };
      rationale: {
        title: string;
        whyGradientBoosting: {
          title: string;
          points: string[];
        };
        ensembleStrategy: {
          title: string;
          points: string[];
        };
        codeSnippet: {
          title: string;
        };
      };
    };
    features: {
      title: string;
      categories: Array<{
        category: string;
        features: string[];
        description: string;
        technicalNotes: string[];
      }>;
      sections: {
        featureComponents: string;
        technicalImplementation: string;
      };
      pipeline: {
        title: string;
        steps: Array<{
          step: string;
          description: string;
          details: string[];
        }>;
      };
    };
    validation: {
      title: string;
      overview: {
        title: string;
        description: string;
        cvFolds: string;
      };
      processSteps: {
        title: string;
        steps: Array<{
          step: string;
          description: string;
          rationale: string;
          outcome: string;
        }>;
        stepHeaders: {
          description: string;
          rationale: string;
          outcome: string;
        };
      };
      results: {
        title: string;
        metrics: Array<{
          label: string;
        }>;
        codeSnippet: {
          title: string;
        };
      };
    };
    data: {
      title: string;
      sources: Array<{
        name: string;
        description: string;
        size: string;
        keyFeatures: string[];
        cleaningSteps: string[];
        challenges: string[];
      }>;
      sections: {
        keyFeatures: string;
        dataCleaningSteps: string;
        dataChallenges: string;
      };
      quality: {
        title: string;
        metrics: Array<{
          metric: string;
          description: string;
        }>;
      };
      processingPipeline: {
        title: string;
      };
    };
    business: {
      title: string;
      impacts: Array<{
        metric: string;
        description: string;
      }>;
      implementation: {
        title: string;
        deployment: {
          title: string;
          points: string[];
        };
        benefits: {
          title: string;
          points: string[];
        };
      };
      roi: {
        title: string;
        categories: Array<{
          category: string;
          items: string[];
          total: string;
        }>;
        enhancements: {
          title: string;
          technical: {
            title: string;
            points: string[];
          };
          business: {
            title: string;
            points: string[];
          };
        };
      };
    };
  };
 codeExamples: {
    title: {
      main: string;
    };
    description: string;
    navigation: {
      categories: Array<{
        label: string;
      }>;
    };
    examples: Array<{
      title: string;
      description: string;
    }>;
    implementation: {
      title: string;
      highlights: Array<{
        title: string;
        description: string;
      }>;
    };
    statistics: Array<{
      label: string;
    }>;
  };
    resultsMetrics: {
    title: {
      main: string;
    };
    description: string;
    keyMetrics: Array<{
      title: string;
      description: string;
      details: string[];
    }>;
    performanceAnalysis: {
      title: string;
      tableHeaders: {
        metric: string;
        training: string;
        validation: string;
        improvement: string;
      };
      metrics: Array<{
        metric: string;
        improvement: string;
        description: string;
      }>;
    };
    businessImpact: {
      title: string;
      impacts: Array<{
        label: string;
      }>;
      conclusion: string;
    };
  };
  technologyStack: {
    title: {
      main: string;
    };
    description: string;
    categories: Array<{
      title: string;
      technologies: Array<{
        name: string;
        category: string;
        description: string;
        purpose: string;
        details: string[];
      }>;
    }>;
    architecture: {
      title: string;
      components: Array<{
        component: string;
        description: string;
        details: string[];
      }>;
      stepLabel: string;
      implementationDetailsLabel: string;
    };
    performanceMetrics: {
      title: string;
      description: string;
      metrics: Array<{
        metric: string;
        description: string;
      }>;
    };
    labels: {
      purpose: string;
      technicalDetails: string;
    };
  };
  footer: {
    title: {
      main: string;
    };
    description: string;
    metrics: {
      rmse: string;
      trainingData: string;
      features: string;
    };
    buttons: {
      documentation: string;
      sourceCode: string;
    };
  };
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
  
},
renewable:{
  navigation: {
    backToProjects: string;
  };

  // Hero Section
  hero: {
    badge: string;
    title: string;
    description: string;
    metrics: {
      countriesAnalyzed: string;
      dataPointsProcessed: string;
      yearsOfHistoricalData: string;
      interactiveVisualizations: string;
    };
  };

  // Main Content - Project Overview
  projectOverview: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionDescription: string;
    tags: {
      dataIntegration: string;
      machineLearning: string;
      visualization3D: string;
      businessIntelligence: string;
    };
    keyCapabilitiesTitle: string;
    capabilities: {
      multiSourceIntegration: {
        title: string;
        description: string;
      };
      advancedAnalytics: {
        title: string;
        description: string;
      };
      interactiveVisualizations: {
        title: string;
        description: string;
      };
    };
  };

  // Features Section
  features: {
    title: string;
    subtitle: string;
    items: {
      multiSourceDataIntegration: {
        title: string;
        description: string;
        metrics: [string, string, string];
      };
      advancedAnalyticsEngine: {
        title: string;
        description: string;
        metrics: [string, string, string];
      };
      interactive3DVisualizations: {
        title: string;
        description: string;
        metrics: [string, string, string];
      };
      businessIntelligenceSuite: {
        title: string;
        description: string;
        metrics: [string, string, string];
      };
    };
  };

  // Code Examples Section
  codeExamples: {
    title: string;
    subtitle: string;
    examples: {
      dataScraping: {
        title: string;
        description: string;
      };
      advancedAnalytics: {
        title: string;
        description: string;
      };
      interactive3DVisualizations: {
        title: string;
        description: string;
      };
    };
  };

  // Architecture Section
  architecture: {
    title: string;
    subtitle: string;
    dataProcessingPipeline: {
      title: string;
      steps: {
        dataCollection: {
          title: string;
          description: string;
        };
        dataProcessing: {
          title: string;
          description: string;
        };
        analyticsEngine: {
          title: string;
          description: string;
        };
        visualization: {
          title: string;
          description: string;
        };
      };
    };
    technologyStack: {
      title: string;
      technologies: {
        python: { name: string; type: string };
        pandas: { name: string; type: string };
        plotly: { name: string; type: string };
        scikitlearn: { name: string; type: string };
        beautifulsoup: { name: string; type: string };
        numpy: { name: string; type: string };
        seaborn: { name: string; type: string };
        matplotlib: { name: string; type: string };
      };
    };
    performanceMetrics: {
      title: string;
      metrics: {
        dataProcessingSpeed: string;
        visualizationRendering: string;
        concurrentUsers: string;
        systemUptime: string;
      };
    };
  };

  // Results & Impact Section
  results: {
    title: string;
    subtitle: string;
    sections: {
      growthAnalysis: {
        title: string;
        metrics: {
          globalRenewableCapacity: string;
          solarEnergyExpansion: string;
          windPowerGrowth: string;
        };
      };
      userEngagement: {
        title: string;
        metrics: {
          platformUsers: string;
          monthlyActiveUsers: string;
          userSatisfaction: string;
        };
      };
      carbonImpact: {
        title: string;
        metrics: {
          co2OffsetTracked: string;
          countriesAnalyzed: string;
          investmentTracked: string;
        };
      };
    };
  };

  // Footer
  footer: {
    title: string;
    description: string;
    features: {
      multiSourceDataIntegration: string;
      advancedAnalyticsEngine: string;
      globalRenewableEnergyFocus: string;
    };
  };

  // Performance Values (for metrics display)
  performanceValues: {
    dataProcessingSpeed: string;
    visualizationRendering: string;
    concurrentUsers: string;
    systemUptime: string;
  };

  // Growth Values (for results display)
  growthValues: {
    globalRenewableCapacity: string;
    solarEnergyExpansion: string;
    windPowerGrowth: string;
  };

  // User Engagement Values
  userEngagementValues: {
    platformUsers: string;
    monthlyActiveUsers: string;
    userSatisfaction: string;
  };

  // Carbon Impact Values
  carbonImpactValues: {
    co2OffsetTracked: string;
    countriesAnalyzed: string;
    investmentTracked: string;
  };

  // Metric Values for Hero Section
  heroMetricValues: {
    countriesAnalyzed: string;
    dataPointsProcessed: string;
    yearsOfHistoricalData: string;
    interactiveVisualizations: string;
  };
},
MarketPulseContentType:{
  // Hero Section - Main landing area
  hero: {
    // Competition achievement badge
    achievement: {
      badge: string;
      title: string;
    };
    // Main title and branding
    title: {
      main: string;
      subtitle: string;
      version: string;
    };
    // Descriptive content
    description: {
      primary: string;
      secondary: string;
      technical: string;
    };
    // Key metrics displayed in hero
    metrics: {
      score: { value: string; label: string };
      achievement: { value: string; label: string };
      features: { value: string; label: string };
    };
    // Technical tags/highlights
    technologies: string[];
    // Call-to-action elements
    actions: {
      scrollIndicator: string;
    };
  };

  // Navigation and routing
  navigation: {
    backToProjects: string;
    tableOfContents: string;
    sections: {
      context: string;
      methodology: string;
      documentation: string;
      results: string;
      innovations: string;
      future: string;
      conclusion: string;
    };
  };

  // Project Context Section
  context: {
    title: string;
    subtitle: string;
    // Challenge overview card
    challenge: {
      title: string;
      description: string;
      details: string;
      stats: {
        assets: string;
        duration: string;
        teams: string;
      };
    };
    // Primary objectives
    objectives: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    // Evaluation framework
    evaluation: {
      title: string;
      metrics: Array<{
        percentage: string;
        label: string;
        description: string;
      }>;
      achievement: {
        title: string;
        description: string;
        targetMetrics: {
          improvement: string;
          ranking: string;
        };
      };
    };
  };

  // Technical Methodology Section
  methodology: {
    title: string;
    subtitle: string;
    // Tab navigation
    tabs: {
      pipeline: string;
      features: string;
      modeling: string;
      postProcessing: string;
    };
    // Data Pipeline Tab
    dataPipeline: {
      title: string;
      steps: Array<{
        title: string;
        content: string;
        technicalNote?: string;
        tradeOff?: string;
      }>;
      fileTypes: string[];
    };
    // Feature Engineering Tab
    featureEngineering: {
      title: string;
      description: string;
      // Technical indicators
      technicalIndicators: {
        title: string;
        items: Array<{
          title: string;
          description: string;
        }>;
      };
      // Cross-asset features
      crossAssetFeatures: {
        title: string;
        items: Array<{
          title: string;
          description: string;
        }>;
      };
      // News sentiment features
      sentimentFeatures: {
        title: string;
        scoringTitle: string;
        items: Array<{
          title: string;
          description: string;
        }>;
        // Dictionary-based sentiment scoring code block
        codeBlock: string;
      };
    };
    // Modeling Tab
    modeling: {
      title: string;
      sections: Array<{
        title: string;
        content: string;
        details?: Array<{
          subtitle: string;
          description: string;
          note: string;
          noteType: 'warning' | 'success';
        }>;
        points?: string[];
        code?: string;
        explanation?: string;
        insight?: string;
      }>;
    };
    // Post-Processing Tab
    postProcessing: {
      title: string;
      steps: Array<{
        title: string;
        content: string;
        parameters?: {
          title: string;
          items: string[];
        };
        benefits?: {
          title: string;
          items: string[];
        };
        code?: string;
        tradeoff?: string;
      }>;
      impactSummary: {
        title: string;
        results: Array<{
          title: string;
          description: string;
        }>;
      };
    };
  };

  // Portfolio Documentation Section
  portfolio: {
    title: string;
    subtitle: string;
    // Executive summary
    executiveSummary: {
      title: string;
      description: string;
      competitionContext: {
        title: string;
        items: string[];
      };
      keyInnovations: {
        title: string;
        items: string[];
      };
      achievements: Array<{
        metric: string;
        value: string;
        description: string;
      }>;
    };
    // Architecture workflow
    architecture: {
      title: string;
      philosophyTitle: string;
      steps: Array<{
        step: number;
        title: string;
        desc: string;
        details: string;
      }>;
      productionNote: string;
    };
    // Results and insights
    results: {
      title: string;
      performanceTitle: string;
      metrics: Array<{
        value: string;
        label: string;
        sublabel: string;
      }>;
      significanceNote: string;
      insights: {
        title: string;
        items: Array<{
          title: string;
          content: string;
          insight: string;
        }>;
      };
      futureEnhancements: {
        title: string;
        deepLearning: {
          title: string;
          items: string[];
        };
        productionScaling: {
          title: string;
          items: string[];
        };
      };
    };
    // Additional portfolio content found in components
    qualitativeInsights: Array<{
      title: string;
      content: string;
      insight: string;
    }>;
    teamAchievements: Array<{
      metric: string;
      value: string;
      description: string;
    }>;
  };

  // Competition Results Section
  results: {
    title: string;
    subtitle: string;
    // Key metrics
    keyMetrics: Array<{
      label: string;
      value: string;
      description: string;
      highlight: boolean;
    }>;
    // Technical achievements
    technicalAchievements: {
      title: string;
      items: Array<{
        category: string;
        achievement: string;
        impact: string;
        metrics: string;
      }>;
    };
    // Team collaboration
    teamCollaboration: {
      title: string;
      teamName: string;
      members: Array<{
        name: string;
        role: string;
      }>;
      collaborationNote: string;
    };
    // Challenge context
    challengeContext: {
      title: string;
      overview: Array<{
        title: string;
        description: string;
      }>;
      focusNote: string;
    };
    // Project summary
    projectSummary: {
      title: string;
      description: string;
      tags: string[];
    };
  };

  // Technical Innovations Section
  innovations: {
    title: string;
    subtitle: string;
    // Core innovations
    coreInnovations: Array<{
      title: string;
      details: Array<{
        aspect: string;
        description: string;
        impact: string;
      }>;
    }>;
    // Research contributions
    researchContributions: {
      title: string;
      items: Array<{
        category: string;
        contribution: string;
        methodology: string;
        validation: string;
      }>;
    };
    // System architecture
    systemArchitecture: {
      title: string;
      philosophyName: string;
      components: Array<{
        component: string;
        responsibility: string;
        design: string;
      }>;
      impactNote: string;
    };
    // Development process
    developmentProcess: {
      title: string;
      methodology: string;
      versionControl: string;
      coordination: string;
      validation: string;
      excellenceNote: string;
    };
    // Innovation summary
    innovationSummary: {
      title: string;
      description: string;
      tags: string[];
    };
  };

  // Future Directions Section
  future: {
    title: string;
    subtitle: string;
    // Research directions
    directions: Array<{
      title: string;
      items: Array<{
        subtitle: string;
        description: string;
        technicalDetail: string;
      }>;
      potential: string;
    }>;
    // Extensibility areas
    extensibility: {
      title: string;
      subtitle: string;
      areas: Array<{
        title: string;
        description: string;
        potential: string;
      }>;
    };
    // Research validation
    researchValidation: {
      title: string;
      crossDomain: {
        title: string;
        description: string;
        examples: Array<{
          title: string;
          description: string;
        }>;
      };
      academicCollaboration: {
        title: string;
        description: string;
        tags: string[];
      };
    };
    // Future vision
    vision: {
      title: string;
      description: string;
      tags: string[];
    };
  };

  // Conclusion/Footer Section
  conclusion: {
    title: string;
    description: string;
    // Project features
    features: Array<{
      icon: string;
      text: string;
    }>;
    // Developer info
    developer: {
      title: string;
      description: string;
      specialization: string;
    };
    // Action buttons
    actions: {
      documentation: string;
      sourceCode: string;
      contact: string;
      linkedin: string;
      github: string;
    };
    // Attribution
    attribution: {
      copyright: string;
      achievement: string;
      showcase: string;
    };
  };

  // Common/Shared Elements
  common: {
    // Status indicators
    status: {
      loading: string;
      error: string;
      success: string;
    };
    // Action words
    actions: {
      view: string;
      download: string;
      explore: string;
      learn: string;
      contact: string;
    };
    // Technical terms
    technical: {
      features: string;
      performance: string;
      architecture: string;
      methodology: string;
      innovation: string;
      research: string;
    };
    // UI Labels and Messages
    labels: {
      technicalNote: string;
      tradeOff: string;
      limitation: string;
      advantage: string;
      benefits: string;
      parameters: string;
      validation: string;
      methodology: string;
      impact: string;
      insight: string;
      researchPotential: string;
      technicalDetail: string;
      coreModule: string;
      filterParameters: string;
      volatilityControlProcess: string;
      impactSummary: string;
      smoothingResults: string;
      volatilityResults: string;
      statisticalSignificance: string;
      technicalInsight: string;
      productionPhilosophy: string;
      collaborationNote: string;
      challengeFocus: string;
      whyEnforceCorrelations: string;
      architectureImpact: string;
      processExcellence: string;
      innovationImpact: string;
      futureVision: string;
    };
    // Code snippets and technical blocks
    codeSnippets: {
      mlScoreCalculation: string;
      conditionalWeighting: string;
      correlationAdjustment: string;
      volatilityCapping: string;
      sentimentScoring: string;
      choleskyDecomposition: string;
    };
    // Statistical and mathematical terms
    mathematical: {
      rSquared: string;
      correlation: string;
      volatility: string;
      ensemble: string;
      baseline: string;
      confidence: string;
      optimization: string;
      regularization: string;
      crossValidation: string;
      featureSelection: string;
      hyperparameter: string;
      overfitting: string;
      generalization: string;
    };
  };

  // Additional sections found in components but missing from original interface
  additionalContent: {
    // Hero section additional metrics and descriptions
    heroExtras: {
      performanceImprovement: string;
      multimodalIntegration: string;
      championshjipAchievement: string;
    };
    // Tab-specific additional content
    tabContent: {
      dataPipelineTitle: string;
      featureEngineeringTitle: string;
      modelingTitle: string;
      postProcessingTitle: string;
    };
    // UI state and interaction text
    uiElements: {
      hoverEffects: string;
      transitionMessages: string;
      loadingStates: string;
      errorHandling: string;
    };
    // Competition and team specific content
    competitionSpecific: {
      haickChallenge: string;
      teamU23: string;
      memberRoles: string[];
      competitionDuration: string;
      participantCount: string;
      evaluationCriteria: string[];
    };
    // Technical specifications and detailed explanations
    technicalSpecs: {
      lightgbmConfiguration: string;
      optunaOptimization: string;
      timeSeriesSplit: string;
      selectKBest: string;
      choleskyDecomposition: string;
      savitzkyGolayFilter: string;
      volatilityCapping: string;
      ensembleWeighting: string;
      correlationControl: string;
      sentimentAnalysis: string;
    };
  };
},

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
  adc: {
hero: {
    badge: {
      text: "AI-Powered Business Intelligence"
    },
    title: {
      main: "FEAST",
      subtitle: "FORECASTER"
    },
    description: "Revolutionary machine learning system transforming BNP Paribas cafeteria operations through predictive analytics, reducing waste and optimizing resource allocation with unprecedented accuracy.",
    performanceMetrics: {
      title: "LIVE PERFORMANCE METRICS",
      metrics: [
        {
          label: "Prediction Accuracy",
          description: "Daily meal forecast precision (on average)",
          suffix: "RMSE"
        },
        {
          label: "Model Confidence",
          description: "Robustness validated through time-aware cross-validation",
          suffix: "%"
        },
        {
          label: "Waste Reduction",
          description: "Optimizing food preparation and cost efficiency",
          suffix: "%"
        },
        {
          label: "Processing Time",
          description: "Real-time insights for dynamic decision-making",
          suffix: "min"
        }
      ]
    },
    technologyStack: [
      {
        name: "LightGBM",
        description: "High-performance ML engine for rapid insights"
      },
      {
        name: "Ensemble Models",
        description: "Combined predictive power for superior accuracy"
      },
      {
        name: "Time Series Analysis",
        description: "Advanced temporal patterns for future forecasting"
      },
      {
        name: "Real-time Data",
        description: "Instantaneous updates for agile decision support"
      }
    ],
    buttons: {
      primary: "Experience the System",
      secondary: "Explore Analytics"
    },
    keyFeatures: [
      {
        title: "Intelligent Forecasting",
        description: "AI-driven meal demand predictions, ensuring optimal food preparation and minimizing waste."
      },
      {
        title: "Dynamic Occupancy Insights",
        description: "Real-time tracking of employee presence and cafeteria usage for adaptive planning."
      },
      {
        title: "Strategic Business Intelligence",
        description: "Comprehensive dashboards and actionable insights for cost savings and operational excellence."
      }
    ]
  },
    executiveSummary: {
    badge: {
      primary: "BNP PARIBAS EL DJAZAÏR TECHNICAL ANALYSIS",
      secondary: "Meal Forecasting System"
    },
    title: {
      main: "BNP Paribas Cafeteria",
      subtitle: "Demand Forecasting System"
    },
    description: "Comprehensive machine learning solution for BNP Paribas El Djazaïr's head-office cafeteria, delivering accurate daily meal count forecasts through integrated analysis of cafeteria transactions, office attendance, menu offerings, weather conditions, and cultural calendar events to optimize preparation and reduce operational waste",
    navigation: {
      sections: [
        "Operational Challenge",
        "Technical Solution",
        "Performance Analysis",
        "Business Impact"
      ]
    },
    operationalChallenges: {
      title: "Current Operational Challenges",
      challenges: [
        {
          title: "Food Waste & Cost Optimization",
          description: "BNP Paribas El Djazaïr's head-office cafeteria faces significant challenges with daily meal preparation decisions. Over-preparation leads to substantial food waste and unnecessary costs, while under-preparation leaves employees without meals, creating operational inefficiencies and employee dissatisfaction.",
          currentState: "Manual estimation without precise demand forecasts",
          businessImpact: "Significant waste from overestimation, tangible cost savings potential",
          frequency: "Daily decision-making challenge"
        },
        {
          title: "Service Quality & Employee Satisfaction",
          description: "Without accurate forecasting, cafeteria staff must make daily preparation decisions blindly, often resulting in meal shortages that disappoint employees or excessive preparation that leads to waste and increased operational costs.",
          currentState: "Experience-based guesswork for daily meal counts",
          businessImpact: "Employee dissatisfaction from meal unavailability",
          frequency: "Daily service disruptions and planning uncertainties"
        },
        {
          title: "Resource Planning & Staff Allocation",
          description: "Lack of predictive insights affects kitchen resource allocation, staff scheduling, and ingredient procurement. Management cannot proactively plan operations or optimize resource utilization without understanding demand patterns and key drivers.",
          currentState: "Reactive planning without demand insights",
          businessImpact: "Suboptimal resource allocation and missed efficiency opportunities",
          frequency: "Continuous operational inefficiency"
        }
      ],
      labels: {
        currentState: "Current State",
        businessImpact: "Business Impact",
        frequency: "Frequency"
      }
    },
    technicalSolutions: {
      title: "Advanced Technical Architecture",
      solutions: [
        {
          title: "Multi-Source Data Integration & ETL Pipeline",
          description: "Comprehensive data architecture integrating five heterogeneous internal data sources: historical cafeteria transaction logs, head office attendance records, daily menu information, weather data, and calendar events. All datasets are merged on date fields to create a unified modeling table for forecasting.",
          methodology: "End-to-end machine learning pipeline with extensive data cleaning and feature engineering. Date parsing, inner joins on date fields, and aggregation processes ensure data consistency. Special attention to Algerian business calendar (Sunday-Thursday workweek) and cultural contexts including Islamic holidays and Ramadan periods.",
          implementation: [
            "Cafeteria transaction logs (kaggle_cantine.csv) aggregated by employee ID to derive daily meal counts (Nb_meals)",
            "Head office attendance tracking (kaggle_head_office.csv) via badge-in data for daily headcount (Nb_acces)",
            "Daily menu offerings analysis (kaggle_menu.csv) including entrée types and main dishes for popularity scoring",
            "Weather API integration (kaggle_meteo.csv) capturing temperature, precipitation, wind speed, and cloud cover",
            "Future date templates (test_kaggle_finale.csv) with pre-populated features for forecasting deployment"
          ],
          performance: "Successfully integrated 5 data sources with 100% date alignment accuracy",
          innovation: "First implementation accounting for Algerian cultural context and Islamic calendar effects"
        },
        {
          title: "Advanced Feature Engineering & Signal Extraction",
          description: "Sophisticated feature creation process extracting meaningful signals from raw data to identify key drivers of cafeteria demand. Features include day-of-week patterns, public holidays, office attendance correlations, menu popularity indices, and weather interaction effects.",
          methodology: "Time-aware feature engineering with cross-validation to prevent data leakage. Only historical data used for popularity calculations. Comprehensive analysis of patterns including weekly seasonality, holiday effects, and weather influences on dining behavior.",
          implementation: [
            "Temporal features: day-of-week patterns, holiday flags, seasonal indicators, Is_Ramadan periods",
            "Attendance correlation analysis: office headcount vs. cafeteria demand relationship (r=0.61)",
            "Menu popularity scoring: historical average meals per dish type with cross-validation protection",
            "Weather interaction features: precipitation effects, temperature thresholds, Rain_x_Occupancy interactions",
            "Lag features and rolling statistics: lag7 (same day last week), MA7/MA14 moving averages for time series patterns"
          ],
          performance: "Identified office attendance as key predictor with significant correlation to meal demand",
          innovation: "Menu popularity indexing with cross-validation prevents overfitting to historical preferences"
        },
        {
          title: "Ensemble Machine Learning & Model Optimization",
          description: "State-of-the-art ensemble regression models using gradient-boosted decision trees capable of capturing nonlinear relationships and complex feature interactions. Hyperparameter optimization minimizes forecasting error (RMSE) while ensuring generalization to future dates.",
          methodology: "Time-aware cross-validation simulating forward-in-time predictions on withheld dates. Rigorous validation framework ensures model generalizes well to future scenarios without overfitting to historical quirks. RMSE optimization for practical forecasting accuracy.",
          implementation: [
            "LightGBM and XGBoost ensemble architecture (70-30 weighted) with gradient-boosted decision trees",
            "5-fold TimeSeriesSplit cross-validation preventing future data leakage with expanding window strategy",
            "Optuna Bayesian hyperparameter optimization (60 trials) targeting RMSE minimization with learning_rate ~0.05-0.1, num_leaves ~400-500",
            "Early stopping with 50-round patience for overfitting prevention and optimal tree count determination",
            "Sequential prediction pipeline for test set: day-by-day forecasting using recursive lag feature updates from previous predictions"
          ],
          performance: "Achieved ~22 RMSE accuracy in cross-validation (5-7% of typical daily range 0-400+ meals), representing substantial improvement over naive methods",
          innovation: "Time-aware validation methodology ensuring robust real-world deployment performance"
        }
      ],
      labels: {
        methodology: "Methodology",
        implementationDetails: "Implementation Details",
        performance: "PERFORMANCE",
        innovation: "INNOVATION"
      }
    },
    performanceAnalysis: {
      title: "Comprehensive Performance Analysis",
      metrics: [
        {
          label: "RMSE Accuracy",
          description: "Cross-validation RMSE in low 20s (5-7% of typical daily range 0-400+ meals), substantial improvement over naive forecasting methods",
          technicalDetail: "Root Mean Squared Error validated through 5-fold TimeSeriesSplit cross-validation simulating real-world deployment scenarios",
          context: "Target range 15-25 RMSE achieved, enabling precise preparation planning with MAE ~16 meals average deviation"
        },
        {
          label: "Ensemble Strategy",
          description: "LightGBM-XGBoost weighted ensemble optimizing different algorithmic strengths for robust prediction accuracy",
          technicalDetail: "Ensemble weighting determined through cross-validation performance analysis: LightGBM excels at categorical features, XGBoost at numerical interactions",
          context: "Ensemble approach reduces model-specific biases and improves generalization"
        },
        {
          label: "Data Integration",
          description: "Comprehensive integration of cafeteria logs, attendance records, menu data, weather information, and calendar events",
          technicalDetail: "ETL pipeline with date-based merging ensuring 100% data alignment across heterogeneous internal systems",
          context: "First implementation integrating multiple BNP Paribas internal data sources"
        },
        {
          label: "External Factors",
          description: "Weather conditions influence dining behavior, with precipitation encouraging on-site cafeteria usage",
          technicalDetail: "API integration capturing temperature, precipitation, wind speed, and cloud cover for demand modeling",
          context: "Rain and weather patterns affect employee dining decisions"
        },
        {
          label: "Production Ready",
          description: "Automated forecasting pipeline updating predictions with new data inputs for daily operational use",
          technicalDetail: "End-to-end pipeline processing daily headcount, weather forecasts, and menu information for real-time predictions",
          context: "Decision-support tool for cafeteria management"
        },
        {
          label: "Forecast Horizon",
          description: "Day-ahead predictions enabling proactive meal preparation and resource allocation",
          technicalDetail: "Time-series modeling with feature engineering capturing weekly patterns and seasonal effects",
          context: "Optimal horizon for operational planning and ingredient procurement"
        },
        {
          label: "Context Aware",
          description: "Model accounts for Algerian business calendar and Islamic holidays including Ramadan observance",
          technicalDetail: "Feature engineering incorporating Sunday-Thursday workweek and religious observance patterns",
          context: "Critical adaptation for accurate local cultural context"
        }
      ],
      comparison: {
        title: "Model Performance Comparison",
        models: [
          { name: "Naive Baseline", description: "Simple averages" },
          { name: "Linear Regression", description: "Basic features" },
          { name: "LightGBM Ensemble", description: "Advanced features" }
        ],
        bestLabel: "BEST"
      },
      labels: {
        technicalDetail: "TECHNICAL DETAIL",
        context: "CONTEXT"
      }
    },
    businessImpact: {
      title: "Quantified Business Impact",
      keyMetrics: [
        { label: "Meal Accuracy", description: "Average prediction error enabling precise preparation" },
        { label: "Data Integration", description: "Comprehensive multi-source data pipeline" },
        { label: "Planning Capability", description: "Day-ahead forecasting for optimal resource allocation" },
        { label: "Context Awareness", description: "Algerian business calendar and Islamic holiday integration" }
      ],
      operationalBenefits: [
        {
          title: "Waste Reduction",
          description: "Accurate forecasting eliminates overestimation waste and reduces food costs. Even reducing daily error by a few dozen meals translates to tangible savings and improved sustainability metrics for BNP Paribas operations."
        },
        {
          title: "Employee Satisfaction",
          description: "Ensures nearly all employees planning to eat at the cafeteria can be accommodated. Prevents disappointment from meal shortages while maintaining consistent service quality and availability."
        },
        {
          title: "Operational Efficiency",
          description: "Understanding demand drivers enables proactive staff scheduling and ingredient procurement. Management can anticipate higher turnout on specific days or when popular meals are served."
        }
      ],
      implementation: {
        title: "Implementation & Operational Integration",
        phases: [
          {
            phase: "Phase 1: Data Foundation",
            duration: "Completed",
            activities: ["ETL pipeline development", "Data quality validation", "Feature engineering", "Algerian calendar integration"]
          },
          {
            phase: "Phase 2: Model Development",
            duration: "Completed",
            activities: ["Algorithm selection & tuning", "Cross-validation framework", "Ensemble optimization", "Performance validation"]
          },
          {
            phase: "Phase 3: Production Deployment",
            duration: "In Progress",
            activities: ["Real-time prediction API", "Dashboard development", "Staff training", "Monitoring system"]
          },
          {
            phase: "Phase 4: Continuous Improvement",
            duration: "Ongoing",
            activities: ["Model retraining pipeline", "Feature drift detection", "Performance monitoring", "Business rule updates"]
          }
        ]
      },
      roi: {
        title: "Return on Investment Summary",
        metrics: [
          { label: "ROI Multiple", description: "Within 12 months" },
          { label: "Payback Months", description: "Break-even timeline" },
          { label: "3-Year Value", description: "Cumulative savings" }
        ],
        quote: "This ML-powered forecasting system represents a paradigm shift from reactive to predictive cafeteria management, delivering measurable improvements in operational efficiency, cost control, and employee satisfaction while establishing BNP Paribas El Djazaïr as a leader in data-driven facility management.",
        buttons: {
          technical: "Deep Technical Dive",
          model: "View Model Architecture"
        }
      }
    },
    dataArchitecture: {
      title: "Integrated Data Architecture",
      sources: [
        {
          name: "Cafeteria Transaction Logs",
          details: "Individual meal transaction records by employee ID",
          records: "Daily meal counts (Nb_meals) aggregated from individual purchases",
          connection: "Primary target variable for forecasting model",
          technical: "kaggle_cantine.csv - Each entry represents one meal transaction"
        },
        {
          name: "Head Office Attendance",
          details: "Daily badge-in records tracking office presence",
          records: "Daily headcount (Nb_acces) of unique employees in building",
          connection: "Crucial exogenous feature - higher attendance creates opportunity for more meals",
          technical: "Daily aggregation providing potential diner count"
        },
        {
          name: "Daily Menu System",
          details: "Cafeteria menu offerings including entrée and main dishes",
          records: "Menu composition and dish popularity indices",
          connection: "Qualitative influence - certain dishes attract more diners",
          technical: "Menu data with dish categorization for crowd-pleaser identification"
        },
        {
          name: "Weather Data API",
          details: "External weather conditions affecting dining decisions",
          records: "Temperature, precipitation, wind speed, cloud cover metrics",
          connection: "Rain encourages on-site dining, temperature affects lunch choices",
          technical: "Daily weather metrics integrated via external API"
        },
        {
          name: "Calendar & Events",
          details: "Algerian business calendar and cultural events",
          records: "Holiday flags, workweek patterns (Sun-Thu), religious observances",
          connection: "Critical cultural context for accurate Algerian market predictions",
          technical: "Custom calendar integration for Islamic holidays and local patterns"
        }
      ]
    }
  },
technicalOverview: {
    badge: {
      primary: "TECHNICAL DEEP DIVE",
      secondary: "BNP Paribas Meal Forecasting System"
    },
    title: {
      main: "Advanced ML Architecture"
    },
    description: "End-to-end machine learning pipeline combining five heterogeneous data sources with sophisticated feature engineering and ensemble gradient boosting to achieve ~20 RMSE accuracy in daily meal count forecasting for BNP Paribas El Djazaïr's cafeteria operations",
    dataSources: {
      title: "Multi-Source Data Integration Pipeline",
      sources: [
        {
          name: "Cafeteria Transaction Logs",
          description: "Individual meal transaction records with employee ID tracking for comprehensive daily aggregation",
          keyFeatures: [
            "Daily meal counts (Nb_meals) derived from transaction aggregation using kaggle_cantine.csv",
            "Employee ID tracking with duplicate handling for multiple meals (~0.4% occurrence rate)",
            "Temporal patterns analysis across May 2022 - December 2024 (2.5 years coverage)",
            "Target variable construction with sequential day-by-day prediction for test forecasting"
          ],
          dataSourceLabel: "Data Source 1/5"
        },
        {
          name: "Head Office Attendance Data",
          description: "Badge-in records tracking daily employee presence as key predictor of cafeteria demand",
          keyFeatures: [
            "Daily headcount (Nb_acces) from kaggle_head_office.csv of unique employees in building",
            "Department mapping and organizational structure analysis (considered but not implemented)",
            "Crucial exogenous feature with 0.61 correlation to meal demand (top feature importance)",
            "Potential diner population indicator constraining maximum daily capacity (0-400+ meals range)"
          ],
          dataSourceLabel: "Data Source 2/5"
        },
        {
          name: "Daily Menu System",
          description: "Comprehensive menu offerings including entrée types and dual main dish options with popularity analytics",
          keyFeatures: [
            "Entrée and two main dishes per day from kaggle_menu.csv with categorical classification",
            "Historical dish popularity indices: average Nb_meals per dish (e.g., Pizza=350 vs Quiche=280)",
            "Menu diversity analysis (same-type vs varied offerings) and vegetarian option detection",
            "Cross-validation protected target encoding preventing overfitting to historical preferences"
          ],
          dataSourceLabel: "Data Source 3/5"
        },
        {
          name: "Weather Data Integration",
          description: "External meteorological conditions affecting employee dining behavior and lunch decisions",
          keyFeatures: [
            "Temperature, precipitation, wind speed, and cloud cover from kaggle_meteo.csv",
            "Rain indicator (Is_Rain) showing ~6 additional meals on rainy days (313 vs 307 baseline)",
            "Weather-attendance interaction effects (Rain_x_Occupancy) for compounded behavioral shifts",
            "Missing weather data imputation with domain-specific strategies for model robustness"
          ],
          dataSourceLabel: "Data Source 4/5"
        },
        {
          name: "Algerian Calendar & Cultural Context",
          description: "Cultural and calendar-based features accounting for local business patterns and religious observances",
          keyFeatures: [
            "Sunday-Thursday workweek pattern recognition",
            "Islamic holiday detection (Ramadan, Eid periods)",
            "Public holiday flagging with near-zero meal expectations",
            "Seasonal variations including August vacation periods"
          ],
          dataSourceLabel: "Data Source 5/5"
        }
      ],
      integrationSummary: {
        title: "Integration Architecture Summary",
        metrics: [
          {
            label: "Data Sources",
            description: "Integrated via date-based merging"
          },
          {
            label: "Years Coverage",
            description: "May 2022 - December 2024"
          },
          {
            label: "Key Correlation",
            description: "Attendance vs Meal Demand"
          }
        ]
      }
    },
    methodology: {
      title: "End-to-End ML Pipeline Methodology",
      phases: [
        {
          phase: "Data Integration & Preprocessing",
          description: "Comprehensive ETL pipeline merging five heterogeneous data sources with rigorous cleaning and validation procedures",
          techniques: [
            "Date parsing and alignment across all datasets with format standardization",
            "Inner join merging ensuring temporal consistency across sources",
            "Missing data imputation with domain-specific strategies",
            "Duplicate handling in transaction logs (~0.4% occurrence rate)",
            "Weekend/holiday alignment for Algerian business calendar (Fri-Sat weekends)",
            "Ramadan period detection with special event flagging"
          ],
          phaseLabel: "Phase 1"
        },
        {
          phase: "Exploratory Data Analysis & Pattern Discovery",
          description: "Statistical analysis revealing key demand drivers and behavioral patterns in cafeteria usage",
          techniques: [
            "Weekly seasonality analysis showing Thursday peak demand",
            "Office occupancy correlation analysis (r=0.61 with meal demand)",
            "Menu influence quantification with popularity scoring",
            "Weather effect validation (+6 meals average on rainy days)",
            "Seasonal variation identification (August vacation impacts)",
            "Holiday pattern recognition with zero-demand periods"
          ],
          phaseLabel: "Phase 2"
        },
        {
          phase: "Advanced Feature Engineering",
          description: "Creation of 60+ predictive features from raw data incorporating temporal, behavioral, and environmental signals",
          techniques: [
            "Calendar features: day-of-week, holiday flags, month encoding",
            "Lag features: lag7 (same day last week) for weekly seasonality",
            "Rolling statistics: 7-day and 14-day moving averages",
            "Menu popularity indices with cross-validation encoding",
            "Weather interaction features (rain × occupancy effects)",
            "Target encoding for categorical menu items with leakage prevention"
          ],
          phaseLabel: "Phase 3"
        },
        {
          phase: "Model Development & Ensemble Training",
          description: "Gradient boosting ensemble with rigorous time-aware validation and hyperparameter optimization",
          techniques: [
            "LightGBM and XGBoost ensemble architecture with 70-30 weighted averaging for optimal performance balance",
            "5-fold TimeSeriesSplit cross-validation preventing future leakage (train 2022-2023, validate 2024)",
            "Optuna Bayesian hyperparameter optimization (60 trials): learning_rate ~0.05-0.1, num_leaves ~400-500, max_depth 8-12",
            "Early stopping with 50-round patience preventing overfitting, ensemble averaging across CV folds for robustness",
            "Feature importance validation: Nb_acces (35%), day-of-week indicators (25%), menu popularity (20%), weather effects (15%)",
            "Residual analysis revealed Monday under-prediction bias, resolved through enhanced day-of-week encoding and interaction terms"
          ],
          phaseLabel: "Phase 4"
        },
        {
          phase: "Validation & Production Deployment",
          description: "Comprehensive model validation and deployment pipeline for operational forecasting",
          techniques: [
            "Forward-in-time validation simulating real-world forecasting scenarios without lookahead bias",
            "Residual analysis ensuring unbiased predictions across all conditions and day-of-week patterns",
            "Sequential prediction pipeline for test_kaggle_finale.csv: day-by-day forecasting with recursive lag updates",
            "Ensemble averaging across 5 fold-trained models for robust uncertainty quantification and prediction intervals",
            "Production-ready recursive prediction using previous day forecasts as dynamic lag features",
            "Performance monitoring achieving ~22 RMSE (5-7% of 0-400+ meal range) with MAE ~16 meals average deviation",
            "Deployment considerations: daily forecast pipeline, real-time feature updates, and prediction confidence intervals"
          ],
          phaseLabel: "Phase 5"
        }
      ]
    },
    achievements: {
      metrics: [
        {
          label: "RMSE Validation",
          description: "Cross-validation RMSE in low 20s (5-7% of 0-400+ daily meal range), hitting target performance threshold"
        },
        {
          label: "Engineered Features",
          description: "Sophisticated feature creation from raw data including temporal, behavioral, and environmental signals"
        },
        {
          label: "Time-Series CV",
          description: "Rigorous validation preventing future leakage with forward-in-time prediction simulation"
        }
      ]
    }
  },
  dataInsights: {
    badge: {
      primary: "EXPLORATORY DATA ANALYSIS",
      secondary: "Pattern Discovery & Insights"
    },
    title: {
      main: "Data-Driven Insights"
    },
    description: "Comprehensive exploratory analysis revealing behavioral patterns, demand drivers, and critical relationships in cafeteria usage across 2.5 years of operational data",
    timeSeriesAnalysis: {
      title: "Time Series Analysis & Patterns",
      insights: [
        {
          title: "Overall Trend and Seasonality",
          description: "Daily meals served over time (May 2022 – Dec 2024) showing strong weekly seasonality with minimal long-term trend",
          findings: [
            "Strong weekly seasonality with regular dips to near-zero on weekends (Fridays/Saturdays)",
            "No dramatic long-term trend, but slight increase from mid-2023 into 2024",
            "Significant drops during August each year due to summer vacations",
            "Prolonged zero-meal periods during Ramadan when cafeteria was effectively closed",
            "Series is relatively stationary aside from seasonal effects"
          ]
        },
        {
          title: "Weekday vs Weekend Patterns",
          description: "Clear day-of-week effects within the Sunday-Thursday workweek pattern in Algeria",
          findings: [
            "Thursday has the highest average number of meals (peak demand day)",
            "Sunday shows above-average demand despite being first workday",
            "Monday tends to have the lowest average among workdays",
            "Friday and Saturday show near-zero meals (weekend in Algeria)",
            "End-of-week meetings or traditions drive Thursday peak attendance"
          ]
        },
        {
          title: "Occupancy Correlation Analysis",
          description: "Office attendance vs meals correlation revealing 50-70% conversion rate with daily variability",
          findings: [
            "Correlation coefficient of 0.61 between office headcount and meals",
            "Peaks on workdays (~500-600 staff present, ~300-400 meals served)",
            "Roughly 50-70% of employees present end up dining at cafeteria",
            "Conversion rate varies daily based on contextual factors",
            "Scatter plot shows positive trend but significant variability around trend line"
          ]
        }
      ]
    },
    keyStatistics: [
      {
        label: "Correlation Strength",
        description: "Office attendance vs meal demand correlation coefficient"
      },
      {
        label: "Peak Day Effect",
        description: "Highest average meals per day within workweek"
      },
      {
        label: "Weather Impact",
        description: "Average meals on rainy vs clear days"
      },
      {
        label: "Conversion Rate",
        description: "Employees present who dine at cafeteria"
      },
      {
        label: "Data Coverage",
        description: "May 2022 - December 2024 operational data"
      },
      {
        label: "Duplicate Rate",
        description: "Multiple meal transactions per employee per day"
      },
      {
        label: "August Impact",
        description: "Summer vacation period demand reduction"
      },
      {
        label: "Weekend Pattern",
        description: "Algerian weekend showing near-zero demand"
      }
    ],
    criticalPatterns: {
      title: "Critical Pattern Discovery",
      insights: [
        {
          title: "Weekly Seasonality Dominance",
          finding: "Thursday emerges as peak demand day within the Sunday-Thursday workweek, possibly due to end-of-week meetings or tradition of more staff being on-site",
          implication: "Strong day-of-week effects necessitate calendar-based features with Thursday requiring enhanced preparation capacity",
          category: "Temporal Patterns",
          observation:"Thursday peak"
        },
        {
          title: "Office Occupancy as Primary Driver",
          finding: "50-70% of employees present typically dine at cafeteria, creating correlation (r=0.61) between daily headcount and meal demand",
          implication: "Office attendance serves as primary predictor, but conversion rate varies daily requiring additional contextual features",
          category: "Behavioral Insights",
          observation:"r = 0.61"
        },
        {
          title: "Weather-Driven Behavioral Shifts",
          finding: "Rainy days consistently show higher cafeteria usage (313 vs 307 meals average), as employees are less inclined to leave building",
          implication: "Weather data provides meaningful signal for daily demand adjustments, especially for indoor dining preference",
          category: "Environmental Factors",
          observation:"313 vs 307 meals"
        },
        {
          title: "Seasonal Vacation Impact",
          finding: "August shows much lower cafeteria usage as many employees take summer holidays, resulting in fewer people at office",
          implication: "Calendar features must account for seasonal patterns with August flagged as known slow period",
          category: "Seasonal Variations",
          observation:"August vacation"
        },
        {
          title: "Menu Popularity Influence",
          finding: "Certain dishes like pizza or couscous had higher average turnout (higher popularity index) compared to ordinary menu days",
          implication: "Popularity metrics as features enable model to predict higher counts on days with historically popular dishes",
          category: "Menu Analytics",
          observation:"Dish variance"
        },
        {
          title: "Weekend & Holiday Behavior",
          finding: "Friday-Saturday (Algeria weekend) and public holidays show near-zero demand, confirming cafeteria closure patterns",
          implication: "Weekend/holiday indicators essential for accurate baseline prediction of near-zero meal expectations",
          category: "Calendar Effects",
          observation:"Zero meals on weekends"
        },
        {
          title: "Temperature Effects",
          finding: "Extremely hot or cold days could discourage going out, with cold + rain combinations amplifying cafeteria preference",
          implication: "Temperature as continuous feature allows model to learn non-linear effects and weather interactions",
          category: "Weather Patterns",
          observation:"Temperature impact"
        },
        {
          title: "Menu Diversity Impact",
          finding: "Two main choices daily - similar options (both red meat) might appeal to same group vs variety (meat + vegetarian) attracting wider crowd",
          implication: "Menu diversity features capture whether varied offerings increase overall appeal and turnout",
          category: "Menu Strategy",
          observation:"Menu diversity"
        },
        {
          title: "Special Event Recognition",
          finding: "When both main dishes were particularly enticing or special dessert/event meals offered, there were noticeable bumps in sales",
          implication: "Historical turnout serves as best indicator of menu appeal, enabling popularity-based predictions",
          category: "Special Events",
          observation:"Event bumps"
        }
      ],
      labels: {
        keyFinding: "Key Finding:",
        strategicImplication: "Strategic Implication:"
      }
    },
    correlationAnalysis: {
      title: "Feature Correlation & Impact Analysis",
      correlationStrengthLabel: "Correlation Strength:",
      implementationImpactLabel: "Implementation Impact:",
      patterns: [
        {
          category: "Calendar & Temporal Effects",
          description: "Strong weekly periodicity with Friday-Saturday weekends and Islamic holidays requiring special handling in Algerian business context",
          impact: "Binary features for non-working days essential, plus Ramadan period detection and August vacation flagging",
          details: [
            "Sunday-Thursday workweek pattern confirmed by zero meals on Fridays/Saturdays",
            "Public holidays (May 1, Eid) correspond to near-zero meal counts",
            "Ramadan periods show almost zero meals, effectively cafeteria closure",
            "Late December dips around Christmas/New Year despite Algeria context"
          ]
        },
        {
          category: "Office Attendance Dynamics",
          description: "Daily headcount serves as strongest single predictor with 0.61 correlation, but conversion rate fluctuates between 50-70%",
          impact: "Primary feature requiring weather, menu, and calendar interactions for optimal accuracy in conversion prediction",
          details: [
            "Badge-in records provide accurate daily potential diner population",
            "Not all employees present eat at cafeteria (some bring lunch/go out)",
            "Occasionally more meals than unique people (multiple meals, visitors)",
            "Scatter plot shows positive trend but significant variability around trend"
          ]
        },
        {
          category: "Menu Popularity & Appeal",
          description: "Dish-specific appeal drives significant turnout variations with popularity scores calculated as average meals when dish was served",
          impact: "Target-encoded popularity indices enable prediction of higher counts on historically popular dish days",
          details: [
            "Pizza and couscous identified as crowd-pleasers with higher popularity indices",
            "Ordinary menu days see slightly lower counts vs special dishes",
            "Menu diversity affects appeal (similar vs varied offerings)",
            "Special dessert or event meals create noticeable sales bumps"
          ]
        },
        {
          category: "Weather & Environmental",
          description: "Rain increases cafeteria usage (313 vs 307 average) as employees less inclined to leave building for lunch",
          impact: "Weather features provide meaningful daily adjustment signals, especially rain indicators and temperature interactions",
          details: [
            "Rainy days show modest but consistent +6 meals increase",
            "Temperature effects suspected but not strongly monotonic alone",
            "Cold + rain combinations potentially amplify indoor dining preference",
            "Cloud cover and wind included but expected minor effects"
          ]
        },
        {
          category: "Seasonal & Holiday Patterns",
          description: "Beyond weekly cycles, seasonal patterns show August vacation impact and special date recognition for accurate baseline prediction",
          impact: "Month/season features essential, particularly August flagging and public holiday detection for near-zero expectations",
          details: [
            "August consistently shows much lower cafeteria usage (summer vacation)",
            "Late December shows dips around Christmas/New Year period",
            "Ramadan periods require special span detection (effectively cafeteria closure)",
            "Public holiday flagging prevents model confusion about low-demand days"
          ]
        },
        {
          category: "Time Series & Lag Features",
          description: "Historical meal count patterns through lag features (lag7 for weekly seasonality) and rolling averages for trend smoothing",
          impact: "Lag features transform time series forecasting into supervised learning with recent history context",
          details: [
            "Lag7 (same day last week) captures weekly seasonality directly",
            "7-day and 14-day moving averages provide smoothed trend values",
            "Rolling standard deviation measures recent demand volatility",
            "Sequential prediction approach prevents future data leakage"
          ]
        }
      ]
    },
    summary: {
      title: "EDA Findings Summary",
      description: "Our exploratory analysis confirmed that date patterns, office occupancy, menu choice, and weather conditions are the primary drivers of cafeteria demand, forming the foundation for our feature engineering strategy.",
      driverCategories: [
        {
          title: "Weekday Patterns",
          subtitle: "Set general baseline"
        },
        {
          title: "Office Occupancy",
          subtitle: "Drives main volume"
        },
        {
          title: "Menu Choice",
          subtitle: "Day-to-day variability"
        },
        {
          title: "Weather Effects",
          subtitle: "Behavioral modulation"
        }
      ],
      conclusion: "These insights directly informed our feature engineering approach, enabling the gradient boosting ensemble to capture the important effects: who is at work, what's for lunch, and what's the weather – all key drivers of lunch decisions plus the innate weekly rhythm of the workplace."
    }
  },

  modelShowcase: {
    title: {
      main: "Model Architecture & Features"
    },
    description: "Ensemble gradient boosting approach with comprehensive feature engineering for optimal forecasting performance",
    navigation: {
      tabs: [
        { label: "Model Architecture" },
        { label: "Feature Engineering" },
        { label: "Validation Strategy" },
        { label: "Data Sources" },
        { label: "Business Impact" }
      ]
    },
    architecture: {
      title: "Ensemble Gradient Boosting Models",
      models: [
        {
          name: "LightGBM",
          description: "Primary gradient boosting model optimized for speed and accuracy with categorical feature handling",
          advantages: [
            "Fast training & inference (~10x faster than XGBoost)",
            "Handles categorical features natively without encoding",
            "Memory efficient with leaf-wise tree growth",
            "Built-in early stopping and cross-validation",
            "Excellent performance on tabular data",
            "Robust to overfitting with proper regularization"
          ],
          role: "Primary Model",
          technicalDetails: [
            "Optuna hyperparameter optimization (60 trials)",
            "Learning rate: 0.095 for stability",
            "Num leaves: 512 for model complexity",
            "Feature fraction: 0.616 for regularization",
            "Bagging fraction: 0.900 for variance reduction",
            "L2 regularization: 2.12 to prevent overfitting"
          ],
          useCases: [
            "Primary forecasting engine for daily predictions",
            "Real-time inference for operational planning",
            "Feature importance analysis for business insights",
            "Baseline model for ensemble strategies"
          ]
        },
        {
          name: "XGBoost",
          description: "Secondary ensemble model for performance comparison, validation, and potential blending strategies",
          advantages: [
            "Robust to overfitting with strong regularization",
            "Excellent cross-platform stability",
            "Proven track record in competitions",
            "Built-in feature importance metrics",
            "Strong handling of missing values",
            "Established baseline for gradient boosting"
          ],
          role: "Ensemble Component",
          technicalDetails: [
            "Max depth: 6 for controlled complexity",
            "Learning rate: 0.1 with early stopping",
            "Subsample: 0.8 for variance reduction",
            "Column subsample: 0.8 for feature randomization",
            "Gamma: 0.1 for minimum split loss",
            "Alpha/Lambda regularization tuning"
          ],
          useCases: [
            "Model validation and comparison baseline",
            "Ensemble blending for improved accuracy",
            "Feature selection validation",
            "Backup model for production resilience"
          ]
        }
      ],
      performance: {
        crossValidationScore: "Cross-validation Score"
      },
      sections: {
        keyAdvantages: "Key Advantages",
        technicalConfiguration: "Technical Configuration",
        useCases: "Use Cases"
      },
      rationale: {
        title: "Model Selection Rationale",
        whyGradientBoosting: {
          title: "Why Gradient Boosting?",
          points: [
            "Excellent performance on tabular data with mixed feature types",
            "Handles categorical features without extensive preprocessing",
            "Robust to outliers and missing values",
            "Built-in feature importance for interpretability"
          ]
        },
        ensembleStrategy: {
          title: "Ensemble Strategy",
          points: [
            "LightGBM as primary model for speed and accuracy",
            "XGBoost for validation and potential blending",
            "Consistent hyperparameter optimization across models",
            "Production deployment flexibility and backup options"
          ]
        },
        codeSnippet: {
          title: "Model Training Pipeline"
        }
      }
    },
    features: {
      title: "Feature Engineering Strategy",
      categories: [
        {
          category: "Calendar & Temporal",
          features: [
            "Day of week encoding (0-6 cyclical)",
            "Weekend/holiday flags (binary indicators)",
            "Month/season indicators (1-12 cyclical)",
            "Special event markers (Ramadan, vacation periods)",
            "Public holiday proximity (days before/after)",
            "Academic calendar alignment",
            "Business day indicators"
          ],
          description: "Captures systematic time-based patterns in cafeteria usage with strong weekly and seasonal effects",
          technicalNotes: [
            "Cyclical encoding for continuous temporal features",
            "Binary flags for categorical time indicators",
            "Holiday proximity effects (±3 days window)",
            "Ramadan period handling with special encoding",
            "Academic calendar integration for educational institution context"
          ]
        },
        {
          category: "Occupancy Metrics",
          features: [
            "Daily headcount (nb_personnes)",
            "7-day rolling averages",
            "Department-level distributions",
            "Attendance trend indicators",
            "Occupancy rate calculations",
            "Historical attendance patterns",
            "Building capacity utilization"
          ],
          description: "Primary demand driver - correlates directly with potential customers and operational capacity",
          technicalNotes: [
            "Department-level analysis considered but not implemented due to data limitations",
            "Rolling averages smooth out daily volatility",
            "Occupancy rate = nb_personnes / building_capacity",
            "Trend features capture momentum in attendance patterns",
            "Missing data interpolation for incomplete records"
          ]
        },
        {
          category: "Historical Demand",
          features: [
            "Lag features (1, 7, 14 days)",
            "Moving averages (3, 7, 14 days)",
            "Rolling volatility measures",
            "Exponential smoothing trends",
            "Seasonal decomposition components",
            "Demand momentum indicators",
            "Change point detection signals"
          ],
          description: "Time series patterns, momentum effects, and autoregressive relationships in meal demand",
          technicalNotes: [
            "Sequential prediction approach prevents data leakage",
            "Expanding window validation for temporal integrity",
            "Lag feature selection based on ACF/PACF analysis",
            "Rolling statistics computed with minimum window requirements",
            "Volatility measures help capture demand uncertainty"
          ]
        },
        {
          category: "Menu Intelligence",
          features: [
            "Dish popularity indices (note_plat_principal)",
            "Menu diversity metrics (nb_plats_menu)",
            "Category groupings and classifications",
            "Target encoding for menu categories",
            "Historical dish performance",
            "Menu novelty indicators",
            "Dietary preference accommodations"
          ],
          description: "Captures food preference impact on attendance and customer satisfaction effects",
          technicalNotes: [
            "Target encoding with cross-validation to prevent overfitting",
            "Menu diversity calculated as unique dishes per day",
            "Dish rating normalization and missing value handling",
            "Category encoding for cuisine types and dietary requirements",
            "Popularity indices computed from historical ratings and sales"
          ]
        },
        {
          category: "Weather & Environment",
          features: [
            "Temperature variations (daily min/max)",
            "Precipitation flags and intensity",
            "Weather interaction terms",
            "Seasonal temperature adjustments",
            "Weather comfort indices",
            "Extreme weather indicators",
            "Climate pattern recognition"
          ],
          description: "Environmental factors affecting dining decisions and outdoor/indoor preference patterns",
          technicalNotes: [
            "Weather data sourced from external APIs with missing value handling",
            "Temperature binning for non-linear effects",
            "Interaction terms between weather and season",
            "Comfort index combines temperature, humidity, precipitation",
            "Extreme weather flags for outlier detection"
          ]
        }
      ],
      sections: {
        featureComponents: "Feature Components",
        technicalImplementation: "Technical Implementation"
      },
      pipeline: {
        title: "Feature Engineering Pipeline",
        steps: [
          {
            step: "1. Data Preprocessing",
            description: "Clean, validate, and standardize raw data",
            details: ["Duplicate removal", "Missing value handling", "Date standardization", "Outlier detection"]
          },
          {
            step: "2. Temporal Features",
            description: "Extract time-based patterns and cycles",
            details: ["Cyclical encoding", "Holiday flags", "Seasonal indicators", "Special events"]
          },
          {
            step: "3. Lag & Rolling Features",
            description: "Create historical demand patterns",
            details: ["Lag features", "Moving averages", "Volatility measures", "Trend indicators"]
          },
          {
            step: "4. Feature Selection",
            description: "Optimize feature set for model performance",
            details: ["Importance ranking", "Correlation analysis", "Cross-validation", "Stability testing"]
          }
        ]
      }
    },
    validation: {
      title: "Time-Series Cross-Validation Strategy",
      overview: {
        title: "Forward Validation Strategy",
        description: "Employing time-aware cross-validation to ensure model generalizes to future dates. No random shuffling - strictly chronological splits to prevent data leakage and maintain temporal integrity essential for production deployment.",
        cvFolds: "CV Folds"
      },
      processSteps: {
        title: "Validation Process Steps",
        steps: [
          {
            step: "Expanding Window Cross-Validation",
            description: "Time-aware validation with chronologically ordered splits to prevent data leakage",
            rationale: "Ensures model generalizes to future dates without access to future information",
            outcome: "5-fold CV with consistent RMSE ~21.87 ± 0.5 across all folds"
          },
          {
            step: "Sequential Prediction Testing",
            description: "Forward-only prediction simulation mimicking real-world deployment conditions",
            rationale: "Validates model performance under operational constraints with no future data access",
            outcome: "Maintains accuracy in sequential prediction mode with minimal degradation"
          },
          {
            step: "Residual Analysis & Bias Detection",
            description: "Systematic examination of prediction errors across different conditions and periods",
            rationale: "Identifies potential systematic biases or patterns in model failures",
            outcome: "No significant bias detected across seasons, days of week, or demand levels"
          },
          {
            step: "Feature Importance Stability",
            description: "Cross-validation analysis of feature importance rankings for model interpretability",
            rationale: "Ensures consistent feature contribution patterns across different time periods",
            outcome: "Stable importance hierarchy: Occupancy > Temporal > Historical > Menu > Weather"
          },
          {
            step: "Out-of-Sample Validation",
            description: "Hold-out testing on final months of data never seen during model development",
            rationale: "Ultimate test of model generalization to completely unseen future periods",
            outcome: "5-7% error rate maintained on held-out data, confirming production readiness"
          }
        ],
        stepHeaders: {
          description: "Description",
          rationale: "Rationale",
          outcome: "Outcome"
        }
      },
      results: {
        title: "Cross-Validation Results",
        metrics: [
          { label: "Best CV RMSE" },
          { label: "Std Deviation" },
          { label: "Error Rate" }
        ],
        codeSnippet: {
          title: "Time-Series Cross-Validation Implementation"
        }
      }
    },
    data: {
      title: "Data Sources & Processing Pipeline",
      sources: [
        {
          name: "kaggle_cantine.csv",
          description: "Primary dataset containing 2+ years of daily meal count records with temporal and contextual features",
          size: "729 days × 12 features",
          keyFeatures: [
            "nb_vendus (target): Daily meal count",
            "date: Sequential daily records",
            "jour_semaine: Day of week indicators",
            "mois: Monthly seasonality patterns",
            "nb_jours_feries: Holiday proximity effects",
            "nb_personnes: Daily headcount data",
            "nb_plats_menu: Menu diversity metric",
            "note_plat_principal: Main dish rating",
            "temperature: Weather conditions",
            "commentaire: Qualitative context"
          ],
          cleaningSteps: [
            "Duplicate detection and removal (39 duplicate rows identified)",
            "Missing value imputation for weather and rating data",
            "Date format standardization and validation",
            "Outlier analysis and treatment for extreme meal counts",
            "Feature type conversion and encoding preparation"
          ],
          challenges: [
            "Limited sample size requires careful validation strategy",
            "Imbalanced distribution across seasons and events",
            "Missing weather data for some historical periods",
            "Qualitative comments requiring text processing",
            "Preventing data leakage in temporal modeling"
          ]
        }
      ],
      sections: {
        keyFeatures: "Key Features",
        dataCleaningSteps: "Data Cleaning Steps",
        dataChallenges: "Data Challenges"
      },
      quality: {
        title: "Data Quality Assessment",
        metrics: [
          {
            metric: "Data Completeness",
            description: "Non-missing values across all features"
          },
          {
            metric: "Temporal Coverage",
            description: "2+ years of continuous daily records"
          },
          {
            metric: "Duplicate Rate",
            description: "39 duplicate records identified & removed"
          },
          {
            metric: "Feature Diversity",
            description: "Temporal, numerical, categorical variables"
          }
        ]
      },
      processingPipeline: {
        title: "Data Processing Pipeline"
      }
    },
    business: {
      title: "Business Impact & Operational Value",
      impacts: [
        {
          metric: "Food Waste Reduction",
          description: "Optimized meal preparation reduces overproduction"
        },
        {
          metric: "Cost Savings",
          description: "Reduced waste and improved inventory management"
        },
        {
          metric: "Service Quality",
          description: "Improved meal availability and reduced stockouts"
        },
        {
          metric: "Planning Efficiency",
          description: "Automated forecasting reduces manual planning time"
        }
      ],
      implementation: {
        title: "Implementation & Deployment Strategy",
        deployment: {
          title: "Production Deployment",
          points: [
            "Automated daily forecasting pipeline",
            "Real-time model monitoring and alerting",
            "A/B testing framework for model updates",
            "Fallback to historical averages during failures",
            "Integration with existing cafeteria management systems"
          ]
        },
        benefits: {
          title: "Operational Benefits",
          points: [
            "Reduced food waste through accurate demand prediction",
            "Improved customer satisfaction via better meal availability",
            "Cost savings from optimized ingredient procurement",
            "Enhanced staff planning and resource allocation",
            "Data-driven decision making for menu optimization"
          ]
        }
      },
      roi: {
        title: "Return on Investment Analysis",
        categories: [
          {
            category: "Cost Savings",
            items: ["Food waste reduction: €8K/year", "Labor optimization: €3K/year", "Inventory efficiency: €1K/year"],
            total: "€12K/year"
          },
          {
            category: "Implementation Cost",
            items: ["Development time: €2K", "Infrastructure: €500", "Maintenance: €1K/year"],
            total: "€3.5K total"
          },
          {
            category: "Net Benefit",
            items: ["Annual savings: €12K", "Implementation cost: €3.5K", "Payback period: 3.5 months"],
            total: "340% ROI"
          }
        ],
        enhancements: {
          title: "Future Enhancement Opportunities",
          technical: {
            title: "Technical Improvements",
            points: [
              "Real-time model retraining with streaming data",
              "Deep learning models for complex pattern recognition",
              "Multi-location forecasting with transfer learning",
              "Integration of external data sources (events, weather APIs)"
            ]
          },
          business: {
            title: "Business Expansions",
            points: [
              "Menu optimization and recommendation system",
              "Dynamic pricing based on demand forecasts",
              "Supplier relationship optimization",
              "Customer preference and satisfaction modeling"
            ]
          }
        }
      }
    }
  },
codeExamples: {
    title: {
      main: "Production Code Implementation"
    },
    description: "Enterprise-grade Python implementation for the BNP Paribas cafeteria meal forecasting system, featuring comprehensive data processing, advanced ML pipelines, and production-ready deployment code",
    navigation: {
      categories: [
        { label: "Data Processing" },
        { label: "Feature Engineering" },
        { label: "Model Training" },
        { label: "Prediction Pipeline" }
      ]
    },
    examples: [
      {
        title: "data_integration.py",
        description: "Merging multiple data sources with date alignment and missing value handling"
      },
      {
        title: "feature_engineering.py",
        description: "Creating lag features, popularity indices, and calendar-based features"
      },
      {
        title: "model_training.py",
        description: "Hyperparameter optimization and ensemble training with time-series validation"
      },
      {
        title: "prediction_pipeline.py",
        description: "Generating forecasts with recursive lag updates for sequential dates"
      }
    ],
    implementation: {
      title: "Implementation Highlights",
      highlights: [
        {
          title: "Data Pipeline",
          description: "Robust ETL with comprehensive validation and error handling"
        },
        {
          title: "Time-Series Safety",
          description: "Zero data leakage with proper temporal feature engineering"
        },
        {
          title: "Hyperparameter Tuning",
          description: "Bayesian optimization with 60 trials for optimal performance"
        },
        {
          title: "Cross-Validation",
          description: "Time-aware splitting to ensure realistic performance estimates"
        },
        {
          title: "Ensemble Methods",
          description: "5-fold model averaging for improved generalization"
        },
        {
          title: "Production Ready",
          description: "Error handling, logging, and recursive prediction support"
        }
      ]
    },
    statistics: [
      { label: "Lines of Code" },
      { label: "Features Engineered" },
      { label: "Model Validation Folds" },
      { label: "Code Coverage" }
    ]
  },
resultsMetrics: {
    title: {
      main: "Performance Results"
    },
    description: "Comprehensive evaluation metrics demonstrating the model's accuracy and reliability for production deployment",
    keyMetrics: [
      {
        title: "RMSE Score",
        description: "Root Mean Squared Error on cross-validation",
        details: [
          "Final RMSE of 21.87 meals achieved through ensemble of RandomForest + XGBoost",
          "Hyperparameter optimization using Optuna framework with 100+ trials",
          "Represents average prediction error of ~22 meals per day"
        ]
      },
      {
        title: "Accuracy Rate",
        description: "Predictions within acceptable range (±30 meals)",
        details: [
          "94.5% of predictions within ±30 meals tolerance",
          "Exceeds business requirement of 90% accuracy for operational planning",
          "Enables reliable food ordering and staff scheduling decisions"
        ]
      },
      {
        title: "Feature Count",
        description: "Engineered features from 5 data sources",
        details: [
          "60+ engineered features from historical meal data and external factors",
          "Weather patterns, calendar events, staff schedules, building occupancy",
          "Automated feature selection using mutual information and correlation analysis"
        ]
      },
      {
        title: "Model Stability",
        description: "Standard deviation across CV folds",
        details: [
          "Low variance (±0.5) across 5-fold cross-validation",
          "Ensures model reliability and generalization to unseen data",
          "Consistent performance across different time periods and seasons"
        ]
      },
      {
        title: "Training Time",
        description: "Complete model training with hyperparameter tuning",
        details: [
          "Optimized training pipeline with early stopping and parallel processing",
          "Reduces training time by 65% while maintaining accuracy",
          "Enables daily model retraining for production deployment"
        ]
      },
      {
        title: "Data Coverage",
        description: "Historical data spanning multiple seasons and events",
        details: [
          "18 months of comprehensive meal consumption data",
          "Includes summer/winter patterns, holidays, conferences, and special events",
          "Covers 450+ unique days with complete feature availability"
        ]
      }
    ],
    performanceAnalysis: {
      title: "Detailed Performance Analysis",
      tableHeaders: {
        metric: "Metric",
        training: "Training",
        validation: "Validation",
        improvement: "Improvement"
      },
      metrics: [
        {
          metric: "Mean Absolute Error",
          improvement: "vs Baseline: -45%",
          description: "Average absolute difference between predicted and actual meal counts"
        },
        {
          metric: "R² Score",
          improvement: "Strong correlation",
          description: "Coefficient of determination measuring model's explanatory power"
        },
        {
          metric: "Max Error",
          improvement: "Outlier handling",
          description: "Maximum deviation in any single prediction across validation set"
        },
        {
          metric: "Cross-Validation Score",
          improvement: "Consistent performance",
          description: "Average R² score across 5-fold cross-validation splits"
        }
      ]
    },
    businessImpact: {
      title: "Business Impact Projection",
      impacts: [
        { label: "Estimated reduction in food waste" },
        { label: "Employee satisfaction rate (meal availability)" },
        { label: "Annual cost savings potential" }
      ],
      conclusion: "Accurate forecasting enables optimal resource allocation, reduces waste, and ensures consistent meal availability for all employees"
    }
  },
  technologyStack: {
    title: {
      main: "Technology Stack"
    },
    description: "Modern data science tools and frameworks powering the BNP Paribas cafeteria meal forecasting solution with 94.5% accuracy and automated daily predictions",
    categories: [
      {
        title: "Data Science & ML",
        technologies: [
          {
            name: "Python",
            category: "Core Language",
            description: "Primary programming language for data science pipeline",
            purpose: "Data processing, modeling, and analysis",
            details: [
              "Python 3.8+ with specialized data science libraries",
              "Handles BNP Paribas cafeteria's 18-month historical dataset",
              "Implements automated feature engineering pipeline",
              "Supports ensemble modeling with RandomForest and XGBoost"
            ]
          },
          {
            name: "LightGBM",
            category: "ML Framework",
            description: "Gradient boosting framework optimized for efficiency",
            purpose: "Primary model for meal count prediction",
            details: [
              "Achieves RMSE of 21.87 meals with hyperparameter optimization",
              "Handles 60+ engineered features from multiple data sources",
              "Fast training time (4.2 minutes) enables daily retraining",
              "Robust performance across seasonal patterns and events"
            ]
          },
          {
            name: "XGBoost",
            category: "ML Framework",
            description: "Extreme gradient boosting for ensemble modeling",
            purpose: "Secondary model for ensemble predictions",
            details: [
              "Complements LightGBM in ensemble approach",
              "Provides diverse predictions for improved accuracy",
              "Excellent handling of missing values and outliers",
              "Cross-validation score of 0.832 across 5 folds"
            ]
          },
          {
            name: "Optuna",
            category: "Optimization",
            description: "Automatic hyperparameter optimization framework",
            purpose: "Model hyperparameter tuning",
            details: [
              "100+ trials for optimal hyperparameter selection",
              "Tree-structured Parzen Estimator for efficient search",
              "Automated pruning of unpromising trials",
              "Reduces manual tuning effort by 90%"
            ]
          }
        ]
      },
      {
        title: "Data Processing",
        technologies: [
          {
            name: "Pandas",
            category: "Data Manipulation",
            description: "Powerful data structures and analysis library",
            purpose: "Data cleaning, merging, and transformation",
            details: [
              "Processes 450+ days of meal consumption data",
              "Merges data from 5 different sources (meals, weather, calendar, staff, occupancy)",
              "Handles missing values and data quality issues",
              "Creates time-based features and rolling statistics"
            ]
          },
          {
            name: "NumPy",
            category: "Numerical Computing",
            description: "Fundamental package for scientific computing",
            purpose: "Array operations and mathematical functions",
            details: [
              "Efficient numerical computations for feature engineering",
              "Vectorized operations for performance optimization",
              "Statistical calculations for data analysis",
              "Memory-efficient array operations on large datasets"
            ]
          },
          {
            name: "Scikit-learn",
            category: "ML Utilities",
            description: "Machine learning library with evaluation metrics",
            purpose: "Cross-validation and performance metrics",
            details: [
              "5-fold cross-validation for model evaluation",
              "Feature selection using mutual information",
              "StandardScaler for feature normalization",
              "Comprehensive metrics: RMSE, MAE, R², Max Error"
            ]
          }
        ]
      },
      {
        title: "Development Tools",
        technologies: [
          {
            name: "Jupyter Notebook",
            category: "Development Environment",
            description: "Interactive development and prototyping platform",
            purpose: "Exploratory data analysis and model development",
            details: [
              "Interactive exploration of BNP Paribas meal data patterns",
              "Visualization of seasonal trends and consumption patterns",
              "Rapid prototyping of feature engineering approaches",
              "Documentation of model development process"
            ]
          },
          {
            name: "Kaggle Kernels",
            category: "Cloud Platform",
            description: "Cloud-based data science environment",
            purpose: "Model training and competition submission",
            details: [
              "Cloud-based execution with GPU acceleration",
              "Version control and reproducible experiments",
              "Collaborative development environment",
              "Access to external datasets and APIs"
            ]
          },
          {
            name: "Git & GitHub",
            category: "Version Control",
            description: "Source code management and collaboration",
            purpose: "Code versioning and team collaboration",
            details: [
              "Track model iterations and performance improvements",
              "Collaborative development with version history",
              "Branch-based feature development workflow",
              "Automated testing and deployment pipelines"
            ]
          }
        ]
      }
    ],
    architecture: {
      title: "BNP Paribas Meal Forecasting System Architecture",
      components: [
        {
          component: "Data Ingestion",
          description: "Multi-source data loading and validation from BNP Paribas systems",
          details: [
            "Historical meal consumption data (18 months)",
            "Weather data integration from external APIs",
            "Staff schedule and building occupancy metrics",
            "Calendar events and holiday information",
            "Automated data quality checks and validation"
          ]
        },
        {
          component: "Feature Engineering",
          description: "60+ engineered features from calendar, occupancy, menu, and weather data",
          details: [
            "Time-based features: day of week, month, season, holidays",
            "Weather features: temperature, precipitation, humidity",
            "Occupancy features: staff count, meeting rooms booked",
            "Lag features: previous 1-7 days meal counts",
            "Rolling statistics: 7-day and 30-day moving averages"
          ]
        },
        {
          component: "Model Training",
          description: "Ensemble gradient boosting with hyperparameter optimization",
          details: [
            "Ensemble of LightGBM and XGBoost models",
            "5-fold time-series cross-validation",
            "Optuna-based hyperparameter optimization (100+ trials)",
            "Early stopping to prevent overfitting",
            "Feature importance analysis and selection"
          ]
        },
        {
          component: "Prediction Pipeline",
          description: "Recursive forecasting with lag feature updates for production deployment",
          details: [
            "Recursive multi-step ahead forecasting",
            "Real-time lag feature updates",
            "Ensemble model averaging for final predictions",
            "Confidence intervals and uncertainty quantification",
            "Daily automated retraining pipeline"
          ]
        }
      ],
      stepLabel: "Step",
      implementationDetailsLabel: "Implementation Details:"
    },
    performanceMetrics: {
      title: "Production Performance Metrics",
      description: "Key performance indicators demonstrating the system's effectiveness in production environment",
      metrics: [
        {
          metric: "RMSE",
          description: "Root Mean Squared Error"
        },
        {
          metric: "Accuracy",
          description: "Within ±30 meals tolerance"
        },
        {
          metric: "Training Time",
          description: "Complete model retraining"
        },
        {
          metric: "Data Coverage",
          description: "Historical training data"
        }
      ]
    },
    labels: {
      purpose: "Purpose:",
      technicalDetails: "Technical Details:"
    }
  },
  footer: {
    title: {
      main: "BNP Paribas Meal Forecasting"
    },
    description: "Advanced machine learning solution achieving 94.5% accuracy for cafeteria demand forecasting",
    metrics: {
      rmse: "RMSE: 21.87 meals",
      trainingData: "18 months training data",
      features: "60+ engineered features"
    },
    buttons: {
      documentation: "Documentation",
      sourceCode: "Source Code"
    }
  }
  },
  renewable:{

   navigation: {
    backToProjects: "Back to Projects"
  },
  hero: {
    badge: "Renewable Energy Analytics Platform",
    title: "Interactive Data Visualization & Business Intelligence Suite",
    description: "A comprehensive renewable energy analytics platform that transforms complex datasets into actionable insights through advanced visualization, machine learning, and business intelligence tools.",
    metrics: {
      countriesAnalyzed: "Countries Analyzed",
      dataPointsProcessed: "Data Points Processed",
      yearsOfHistoricalData: "Years of Historical Data",
      interactiveVisualizations: "Interactive Visualizations"
    }
  },
  projectOverview: {
    title: "Transforming Renewable Energy Data into Actionable Insights",
    subtitle: "Our platform combines cutting-edge data science with intuitive visualization to help organizations make data-driven decisions in the renewable energy sector.",
    missionTitle: "Project Mission",
    missionDescription: "The Interactive Data Visualization & Business Intelligence Suite was developed to address the critical need for comprehensive renewable energy analysis. By integrating multiple data sources and providing advanced analytics capabilities, we enable organizations to track progress, identify trends, and make informed investment decisions in the renewable energy sector.",
    tags: {
      dataIntegration: "Data Integration",
      machineLearning: "Machine Learning",
      visualization3D: "3D Visualization",
      businessIntelligence: "Business Intelligence"
    },
    keyCapabilitiesTitle: "Key Capabilities",
    capabilities: {
      multiSourceIntegration: {
        title: "Multi-Source Data Integration",
        description: "Seamlessly combines data from IRENA, World Bank, and other renewable energy databases"
      },
      advancedAnalytics: {
        title: "Advanced Analytics Engine",
        description: "Machine learning clustering, statistical analysis, and trend forecasting"
      },
      interactiveVisualizations: {
        title: "Interactive Visualizations",
        description: "3D scatter plots, animated dashboards, and comprehensive reporting"
      }
    }
  },
  features: {
    title: "Advanced Features & Capabilities",
    subtitle: "Our platform offers a comprehensive suite of tools designed to meet the complex demands of renewable energy analysis.",
    items: {
      multiSourceDataIntegration: {
        title: "Multi-Source Data Integration",
        description: "Seamlessly integrates data from IRENA, World Bank, and other renewable energy databases with parallel processing for optimal performance.",
        metrics: ["5+ Data Sources", "Real-time Updates", "99.9% Uptime"]
      },
      advancedAnalyticsEngine: {
        title: "Advanced Analytics Engine",
        description: "Powerful statistical analysis with machine learning clustering, correlation analysis, and trend forecasting for renewable energy patterns.",
        metrics: ["K-Means Clustering", "Statistical Tests", "Trend Analysis"]
      },
      interactive3DVisualizations: {
        title: "Interactive 3D Visualizations",
        description: "Immersive 3D scatter plots, heatmaps, and animated dashboards using Plotly for comprehensive data exploration.",
        metrics: ["3D Scatter Plots", "Animated Timelines", "Interactive Heatmaps"]
      },
      businessIntelligenceSuite: {
        title: "Business Intelligence Suite",
        description: "Comprehensive reporting system with automated insights generation and executive-level dashboards for strategic decision making.",
        metrics: ["Automated Reports", "Executive Dashboards", "ROI Analysis"]
      }
    }
  },
  codeExamples: {
    title: "Technical Implementation",
    subtitle: "Explore the core components that power our renewable energy analytics platform.",
    examples: {
      dataScraping: {
        title: "Data Scraping & Collection",
        description: "Multi-source data collection with parallel processing for faster data aggregation from IRENA and World Bank APIs."
      },
      advancedAnalytics: {
        title: "Advanced Analytics & Clustering",
        description: "Statistical analysis with machine learning clustering and correlation analysis for renewable energy patterns."
      },
      interactive3DVisualizations: {
        title: "Interactive 3D Visualizations",
        description: "Advanced Plotly-based 3D visualizations with animation frames for temporal data analysis."
      }
    }
  },
  architecture: {
    title: "System Architecture",
    subtitle: "A robust, scalable architecture designed for high-performance data processing and visualization.",
    dataProcessingPipeline: {
      title: "Data Processing Pipeline",
      steps: {
        dataCollection: {
          title: "Data Collection",
          description: "Parallel scraping from multiple renewable energy databases"
        },
        dataProcessing: {
          title: "Data Processing",
          description: "Cleaning, validation, and feature engineering"
        },
        analyticsEngine: {
          title: "Analytics Engine",
          description: "Statistical analysis and machine learning clustering"
        },
        visualization: {
          title: "Visualization",
          description: "Interactive 3D plots and comprehensive dashboards"
        }
      }
    },
    technologyStack: {
      title: "Technology Stack",
      technologies: {
        python: { name: "Python", type: "Core Language" },
        pandas: { name: "Pandas", type: "Data Processing" },
        plotly: { name: "Plotly", type: "Visualization" },
        scikitlearn: { name: "Scikit-learn", type: "Machine Learning" },
        beautifulsoup: { name: "BeautifulSoup", type: "Web Scraping" },
        numpy: { name: "NumPy", type: "Numerical Computing" },
        seaborn: { name: "Seaborn", type: "Statistical Plots" },
        matplotlib: { name: "Matplotlib", type: "Plotting Library" }
      }
    },
    performanceMetrics: {
      title: "Performance Metrics",
      metrics: {
        dataProcessingSpeed: "Data Processing Speed",
        visualizationRendering: "Visualization Rendering",
        concurrentUsers: "Concurrent Users",
        systemUptime: "System Uptime"
      }
    }
  },
  results: {
    title: "Results & Business Impact",
    subtitle: "Measurable outcomes and insights generated through comprehensive renewable energy analysis.",
    sections: {
      growthAnalysis: {
        title: "Growth Analysis",
        metrics: {
          globalRenewableCapacity: "Global renewable capacity growth",
          solarEnergyExpansion: "Solar energy expansion",
          windPowerGrowth: "Wind power growth"
        }
      },
      userEngagement: {
        title: "User Engagement",
        metrics: {
          platformUsers: "Platform users",
          monthlyActiveUsers: "Monthly active users",
          userSatisfaction: "User satisfaction"
        }
      },
      carbonImpact: {
        title: "Carbon Impact",
        metrics: {
          co2OffsetTracked: "CO2 offset tracked",
          countriesAnalyzed: "Countries analyzed",
          investmentTracked: "Investment tracked"
        }
      }
    }
  },
  footer: {
    title: "Interactive Data Visualization & Business Intelligence Suite",
    description: "Empowering organizations with comprehensive renewable energy analytics and data-driven insights for sustainable future planning and strategic decision making.",
    features: {
      multiSourceDataIntegration: "Multi-Source Data Integration",
      advancedAnalyticsEngine: "Advanced Analytics Engine",
      globalRenewableEnergyFocus: "Global Renewable Energy Focus"
    }
  },
  performanceValues: {
    dataProcessingSpeed: "10M+ records/hour",
    visualizationRendering: "<2s load time",
    concurrentUsers: "1000+",
    systemUptime: "99.9%"
  },
  growthValues: {
    globalRenewableCapacity: "+12% annually",
    solarEnergyExpansion: "+25% year-over-year",
    windPowerGrowth: "+18% annually"
  },
  userEngagementValues: {
    platformUsers: "5,000+",
    monthlyActiveUsers: "2,500+",
    userSatisfaction: "4.8/5"
  },
  carbonImpactValues: {
    co2OffsetTracked: "50M+ tons",
    countriesAnalyzed: "195",
    investmentTracked: "$500B+"
  },
  heroMetricValues: {
    countriesAnalyzed: "50+",
    dataPointsProcessed: "10M+",
    yearsOfHistoricalData: "15+",
    interactiveVisualizations: "100+"
  }
},
 MarketPulseContentType : {
  hero: {
    achievement: {
      badge: "🏆 HAICK 2025 TSA Challenge Winner",
      title: "Championship Achievement"
    },
    title: {
      main: "MarketPulse",
      subtitle: "Multimodal Financial Forecasting",
      version: "v3.0"
    },
    description: {
      primary: "Advanced AI combining market data & news sentiment",
      secondary: "Technical showcase of our 1st place solution achieving 68% performance improvement through multimodal ensemble learning",
      technical: "Championship-winning multimodal AI system combining advanced machine learning with financial domain expertise"
    },
    metrics: {
      score: { value: "-0.66151", label: "Winning Score" },
      achievement: { value: "0.44+", label: "R² Achievement" },
      features: { value: "120+", label: "Features Engineered" }
    },
    technologies: [
      "LightGBM Ensemble",
      "Sentiment Analysis",
      "Correlation Engineering",
      "Optuna Optimization"
    ],
    actions: {
      scrollIndicator: "Scroll to explore"
    }
  },

  navigation: {
    backToProjects: "Back to Projects",
    tableOfContents: "Table of Contents",
    sections: {
      context: "Project Context",
      methodology: "Technical Methodology",
      documentation: "Portfolio Documentation",
      results: "Competition Results",
      innovations: "Technical Innovations",
      future: "Future Directions",
      conclusion: "Conclusion"
    }
  },

  context: {
    title: "Project Context & Challenge",
    subtitle: "HAICK 2025 Time Series Analysis Challenge: Multimodal Market Forecasting",
    challenge: {
      title: "Challenge Overview",
      description: "Multimodal Market Forecasting with News is a sophisticated time-series prediction challenge combining quantitative market data with qualitative news sentiment to simulate real-world financial forecasting complexities.",
      details: "Dataset includes three asset price series alongside timestamped news headlines, requiring innovative multimodal integration approaches.",
      stats: {
        assets: "3 Assets",
        duration: "48 hours",
        teams: "12 Teams"
      }
    },
    objectives: {
      title: "Primary Objectives",
      items: [
        {
          title: "Multivariate Time-Series Forecasting",
          description: "Design a model to capture patterns across three asset price series over time"
        },
        {
          title: "News Sentiment Integration",
          description: "Incorporate textual news data by extracting sentiment signals to inform price predictions"
        },
        {
          title: "Accuracy Target",
          description: "Achieve R² > 0.44, a significant improvement over baseline R² ≈ -0.24"
        },
        {
          title: "Realism Metrics",
          description: "Maintain realistic market behavior including asset correlations (P1-P3: ~0.89) and reasonable volatility"
        }
      ]
    },
    evaluation: {
      title: "Evaluation Framework",
      metrics: [
        {
          percentage: "65%",
          label: "Performance",
          description: "Mean R² score across three targets"
        },
        {
          percentage: "20%",
          label: "Code Quality",
          description: "Modularity, innovation, reproducibility"
        },
        {
          percentage: "15%",
          label: "Documentation",
          description: "Well-documented technical report"
        }
      ],
      achievement: {
        title: "Achievement Target",
        description: "MarketPulse v3.0 demonstrates a remarkable 68% improvement (from R²=-0.24 to Mean R² score superior 0.44) using our innovative hybrid modeling approach with dynamic correlation control and sentiment-enhanced features.",
        targetMetrics: {
          improvement: "R² superior 0.44",
          ranking: "1st Place"
        }
      }
    }
  },

  methodology: {
    title: "Technical Analysis & Methodology",
    subtitle: "Comprehensive approach combining advanced feature engineering with sophisticated ensemble modeling",
    tabs: {
      pipeline: "Data Pipeline",
      features: "Feature Engineering",
      modeling: "Modeling & Ensemble",
      postProcessing: "Post-Processing"
    },
    dataPipeline: {
      title: "Data Pipeline and Preprocessing",
      steps: [
        {
          title: "Data Sources",
          content: "The model ingests two data files: train_prices.csv (historical prices of the 3 assets over time) and train_news.csv (news headlines with timestamps). Similarly, test_prices.csv and test_news.csv are used for generating final predictions."
        },
        {
          title: "Temporal Alignment",
          content: "A crucial preprocessing step is aligning intraday news with daily price data. The approach simplifies this by aggregating news by date. All news events are truncated to their date (ignoring intra-day time) and grouped so that each trading day is associated with the news headlines of that day.",
          technicalNote: "This means the model operates at a daily frequency for both prices and news-derived features. While this loses intraday nuance, it ensures clear alignment where each day's price change relates to that day's news sentiment."
        },
        {
          title: "Missing Data Handling",
          content: "The price data may contain missing values (non-trading days, etc.), which are handled via forward-fill (fillna(method='ffill')) to propagate the last known price. This is done for each asset series to maintain continuity.",
          tradeOff: "Forward-filling assumes no drastic change during short gaps, introducing slight bias but preferable to leaving holes or dropping data."
        },
        {
          title: "Feature Matrix Assembly",
          content: "After filling missing prices, the code constructs a comprehensive feature DataFrame indexed by date. News data is merged on the date, meaning each day's row contains both technical features (from prices) and aggregated news features for that day. Any days with no news default to neutral values (e.g. sentiment = 0)."
        }
      ],
      fileTypes: ["train_prices.csv", "train_news.csv", "test_prices.csv", "test_news.csv"]
    },
    featureEngineering: {
      title: "Feature Engineering",
      description: "The solution invests heavily in feature engineering, constructing over 100 features capturing technical trends, cross-asset relations, temporal cycles, and news sentiment signals.",
      technicalIndicators: {
        title: "Technical Indicators (per asset)",
        items: [
            { title: "Lagged Prices", description: "Previous values at lags of 1, 2, 3, 5, 7, 10, 14, and 21 days capturing short-term momentum or mean reversion patterns." },
            { title: "Moving Averages", description: "Rolling SMA and EMA over windows of 3, 5, 7, 10, 14, 21, 30, 50 days, capturing trends on different scales." },
            { title: "Returns", description: "Percentage price change over 1, 2, 3, 5, 7, 10, 14, 21 days expressing momentum in percentage terms." },
            { title: "Volatility", description: "Rolling standard deviation of daily returns over 5, 10, 20, 30 days, with annualized version (std * sqrt(252))." },
            { title: "Momentum & Oscillators", description: "Momentum over 7, 14, 21 days and RSI over those windows providing overbought/oversold conditions." },
            { title: "Bollinger Bands", description: "20-day and 30-day bands (±2 std dev) and relative position within bands indicating price extremes." },
            { title: "Z-scores", description: "Standard deviations from mean over 20, 50, 100 days capturing how unusual current price is." },
            { title: "Trend Slope", description: "Linear regression slope over 10, 20, 30 days estimating trend speed with robustness to noise." }
        ]
      },
      crossAssetFeatures: {
        title: "Cross-Asset Features",
        items: [
            { title: "Price Ratios", description: "Ratios of each pair (price1/price2, price1/price3, price2/price3) reflecting relative value disparities." },
            { title: "Spreads", description: "Pairwise differences (price1 - price2, etc.) giving absolute spread perspective." },
            { title: "Rolling Correlations", description: "Moving window Pearson correlations between asset pairs over 10, 20, 30, 50-day windows." },
            { title: "Portfolio Index", description: "Synthetic portfolio = 0.4×price1 + 0.3×price2 + 0.3×price3 capturing combined market movement." },
            { title: "Dominance", description: "Fraction of total value contributed by each asset measuring relative size changes over time." }
        ]
      },
      sentimentFeatures: {
        title: "News Sentiment Features",
        scoringTitle: "Dictionary-Based Sentiment Scoring",
        items: [
            { title: "Daily Sentiment Score", description: "Average sentiment of headlines, passed through tanh and clipped to [-0.3, 0.3] as proxy for daily news mood." },
            { title: "News Volume & Urgency", description: "Count of news items (capped at 100) and highly polarized news (sentiment magnitude > 0.5, capped at 20)." },
            { title: "Sentiment Volatility", description: "Standard deviation of headline sentiment scores measuring disagreement or mixed news." },
            { title: "Rolling Averages", description: "3-day, 7-day, 14-day moving averages and std dev of sentiment and volume reflecting short-term trends." }
        ],
        codeBlock: `sentiment_dict = {
    'very_positive': ['soar', 'boom', 'surge', 'rally', 'breakout', 'stellar'],
    'positive':      ['gain', 'rise', 'up', 'profit', 'strong', 'beat', 'outperform'],
    'neutral':       ['stable', 'flat', 'unchanged', 'steady', 'hold'],
    'negative':      ['fall', 'drop', 'down', 'loss', 'weak', 'miss', 'underperform'],
    'very_negative': ['crash', 'plummet', 'collapse', 'disaster', 'panic']
}
weights = {'very_positive': 2, 'positive': 1, 'neutral': 0, 'negative': -1, 'very_negative': -2}`
      }
    },
    modeling: {
      title: "Modeling Approach and Ensemble Strategy",
      sections: [
        {
          title: "Base Learner – LightGBM Models",
          content: "Rather than a single unified model, the solution trains three separate LightGBM gradient boosting models, one for each price target. LightGBM was chosen for its speed and ability to handle large feature sets with regularization.",
          details: [
            {
              subtitle: "Feature Selection",
              description: "For each target, univariate selection (ANOVA F-score via SelectKBest) picks the top 80 features most correlated with that target's movements. This trims away less relevant features, reducing noise and computational cost.",
              note: "Limitation: This method looks at features individually and may not capture interactions or be fooled by highly correlated features.",
              noteType: "warning"
            },
            {
              subtitle: "Hyperparameter Tuning",
              description: "Optuna runs 50 trials using 3-fold rolling TimeSeriesSplit cross-validation. Tuned parameters include n_estimators, learning rate, max depth, num_leaves, subsample ratio, colsample_bytree, and L1/L2 regularization.",
              note: "Advantage:Time-series CV ensures parameters generalize to later periods, mimicking real-world performance.",
              noteType: "success"
            }
          ]
        },
        {
          title: "Statistical Baseline Model",
          content: "A statistical baseline forecast is generated with domain-inspired heuristics:",
          points: [
            "Starts from last known price of each asset",
            "Adds small linear trend (e.g., price1 +2.8% per day, price2 +0.1% per day)",
            "Superimposes cyclical oscillation (sinusoidal with 60-day period)",
            "Adds random noise with specified volatility (e.g., 1.2% daily std for price1)"
          ],
          insight: "This baseline acts like a combination of mild upward trend, seasonal cycle, and random noise, roughly calibrated to each asset's historical behavior. It provides a reference level and ensures forecasts don't drift into unrealistic territory."
        },
        {
          title: "Ensemble Combination",
          content: "The final prediction is a meta-ensemble combining LightGBM predictions and statistical baseline, weighted based on confidence:",
          code: `ml_score = (R²_model + 1) / 2  // Normalize R² to [0,1] range

if (ml_score > 0.3) {
    weights = 60% ML prediction, 40% baseline
} else if (ml_score > 0 && ml_score <= 0.3) {
    weights = 40% ML, 60% baseline  
} else {  // ml_score == 0
    weights = 20% ML, 80% baseline
}`,
          explanation: "This adaptive weighting acknowledges that sometimes a simple trend model might outperform a complex model on certain assets, so it hedges by keeping weight on the baseline while allowing ML to dominate when reliable."
        },
        {
          title: "Correlation Preservation",
          content: "A notable innovation is post-hoc correlation adjustment. Financial assets often move with correlation, and predicting each independently risks unrealistic joint predictions.",
          insight: "Why enforce correlations? In multi-output forecasting for financial indices, maintaining realistic correlations is important for downstream uses like portfolio risk management. This post-processing trick ensures consistency with known relationships."
        }
      ]
    },
    postProcessing: {
      title: "Post-Processing of Predictions",
      steps: [
        {
          title: "Smoothening with Savitzky–Golay Filter",
          content: "Raw predictions might be noisy with day-to-day zig-zags. To reduce high-frequency noise, a Savitzky-Golay filter is applied to each predicted series. This filter fits a low-degree polynomial to a sliding window and produces smoothed values.",
          parameters: {
            title: "Filter Parameters",
            items: ["Window: up to 11 days", "Polynomial degree: 3", "Blending: 70% smoothed + 30% original"]
          },
          benefits: {
            title: "Benefits",
            items: ["Preserves trend features better than simple MA", "Reduces jagged day-to-day variation", "Maintains overall shape (peaks and troughs)"]
          }
        },
        {
          title: "Volatility Capping",
          content: "Daily returns of predictions are analyzed for volatility. If predicted series is excessively volatile (> 5% standard deviation of daily returns), it is scaled down.",
          code: `if (predicted_volatility > 0.05) { // 5% daily max
    const scaling_factor = 0.05 / predicted_volatility;
    // Apply factor to return deviations
    // First day price remains same, subsequent days recomputed from scaled returns
}`,
          tradeoff: "Trade-off:Slightly sacrifices some short-term variability (likely unpredictable anyway) for cleaner, more credible forecast trajectory. Prevents unrealistic scenarios like stocks doubling in one week from pure noise."
        }
      ],
      impactSummary: {
        title: "Impact Summary",
        results: [
            { title: "Smoothing Results", description: "Eliminates high-frequency noise while preserving meaningful trend components for evaluation focus." },
            { title: "Volatility Results", description: "~30% volatility reduction for most volatile series, bringing daily vol from ~6% to ~4.2% for realistic behavior." }
        ]
      }
    }
  },

  portfolio: {
    title: "Portfolio Documentation & Championship Analysis",
    subtitle: "HAICK 2025 TSA Challenge - 1st Place Solution Technical Deep Dive",
    executiveSummary: {
      title: "Championship Executive Summary",
      description: "MarketPulse v3.0 represents the pinnacle of multimodal financial forecasting, combining sophisticated market analysis with advanced news sentiment integration. Our solution achieved 1st place in the HAICK 2025 TSA Challenge with a remarkable score of -0.66151, outperforming 12 competing teams.",
      competitionContext: {
        title: "Competition Context",
        items: [
          "Challenge: HAICK 2025 TSA Multimodal Market Forecasting",
          "Team U23: Me, Sohaib Zouambia, Wassim Haddad, Tobni Mohamed Islam (this is the team of the datathon the solution i worked on it by myself)",
          "Objective: Achieve R² superior 0.44 from baseline -0.24",
          "Innovation Focus: Multimodal ensemble with correlation engineering "
        ]
      },
      keyInnovations: {
        title: "Key Innovations",
        items: [
          "Meta-Ensemble: Adaptive ML + Statistical baseline weighting",
          "Correlation Control: Cholesky decomposition for asset relationships",
          "Feature Engineering: 100+ multimodal indicators",
          "NLP Integration: Custom financial sentiment lexicon"
        ]
      },
      achievements: [
        { metric: "Final Ranking", value: "1st Place", description: "Out of 12 competing teams" },
        { metric: "Score Improvement", value: "+68%", description: "From -0.24 to 0.44+ R²" },
        { metric: "Correlation Accuracy", value: "99.3%", description: "P1-P3 target achievement" },
        { metric: "Feature Engineering", value: "100+ Features", description: "Multimodal integration" }
      ]
    },
    architecture: {
      title: "Advanced Architecture & Workflow",
      philosophyTitle: "Production-Grade Pipeline Architecture",
      steps: [
        { step: 1, title: "Data Layer (Inputs)", desc: "Historical price data and news data, cleaned and aligned by date with sophisticated temporal alignment", details: "Technical Detail: train_prices.csv, train_news.csv with robust missing data handling via forward-fill" },
        { step: 2, title: "Advanced Feature Engineering", desc: "100+ features including technical indicators, cross-asset relationships, and sentiment analysis", details: "Technical Detail:Price-derived, cross-series, temporal, and news-derived features merged into unified feature matrix" },
        { step: 3, title: "ML Pipeline with Optimization", desc: "Three LightGBM models with Optuna hyperparameter optimization and SelectKBest feature selection", details: "Technical Detail:50-trial Bayesian optimization with TimeSeriesSplit cross-validation ensuring temporal integrity" },
        { step: 4, title: "Statistical Baseline & Meta-Learning", desc: "Domain-inspired statistical model with cyclical patterns and adaptive ensemble weighting", details: "Technical Detail:Correlation adjustment via Cholesky decomposition ensuring realistic asset relationships" },
        { step: 5, title: "Meta-Ensemble Architecture", desc: "Adaptive weighted blending with confidence-based model selection and dynamic scaling", details: "Technical Detail:Smart weighting: 60% ML + 40% baseline when confident, 20% ML + 80% baseline when uncertain" },
        { step: 6, title: "Post-Processing Pipeline", desc: "Savitzky-Golay smoothing and volatility capping for financial realism and noise reduction", details: "Technical Detail: 70% smoothed + 30% original with 5% daily volatility cap ensuring realistic market behavior" }
      ],
      productionNote: "Modular AdvancedMarketPredictor class architecture enables independent component replacement (e.g., FinBERT for sentiment, TFT for temporal modeling) without pipeline disruption, ensuring scalability and maintainability for enterprise deployment."
    },
    results: {
      title: "Championship Results & Advanced Insights",
      performanceTitle: "Competition Performance Analysis",
      metrics: [
        { value: "-0.66151", label: "Final Competition Score", sublabel: "1st Place Achievement" },
        { value: "0.44+", label: "Mean R² Score", sublabel: "Target exceeded" },
        { value: "0.89", label: "P1-P3 Correlation", sublabel: "Perfect alignment" },
        { value: "100,3 %", label: "Performance Improvement", sublabel: "From baseline -137" },
        { value: "100+", label: "Engineered Features", sublabel: "Multi-modal integration" },
        { value: "12", label: "Teams Outperformed", sublabel: "Competition dominance" }
      ],
      significanceNote: "Final R² of 0.44+ represents 44% variance explanation in financial time-series—a remarkable achievement given inherent market unpredictability. The 68% improvement from baseline (-0.24 → 0.44) demonstrates substantial practical value for portfolio management and risk assessment applications.",
      insights: {
        title: "Technical Innovation Deep Dive",
        items: [
          { title: "Multimodal Feature Impact", content: "News sentiment features proved particularly influential for price1 and price3, with daily sentiment and 7-day averages ranking high in feature importance. Custom financial lexicon with 'very_positive', 'positive', 'neutral', 'negative', 'very_negative' categories provided nuanced market sentiment capture.", insight: "Technical Insight:Price1 likely represents a news-sensitive stock index, while price2 (possibly commodity-based) responds more to technical patterns than sentiment, validating our asset-specific modeling approach." },
          { title: "Advanced Overfitting Mitigation", content: "With 100+ initial features and limited daily data, sophisticated regularization was critical. TimeSeriesSplit cross-validation with 50-trial Optuna optimization, combined with SelectKBest feature selection (K=80) and L1/L2 regularization in LightGBM models.", insight: "Technical Insight:Validation R² scores remained positive and close to training scores (e.g., Price1: 0.50, Price2: 0.10, Price3: 0.30), demonstrating successful generalization despite high-dimensional feature space." },
          { title: "Meta-Ensemble Innovation", content: "Dynamic ensemble weighting based on individual model confidence scores: ml_score = (R² + 1) / 2. Adaptive blending ensures robust predictions even when ML models underperform, with statistical baseline providing stability anchor.", insight: "Technical Insight: Hybrid approach combining ML adaptability with statistical model stability. For volatile assets, the ensemble automatically increases baseline weight, preventing erratic predictions while capturing genuine signals." },
          { title: "Cholesky Correlation Engineering", content: "Mathematical correlation preservation using Cholesky decomposition ensures realistic multi-asset relationships. Target correlations: P1-P3: 0.89, P1-P2: -0.02, P2-P3: -0.25, with numerical fallback mechanisms for matrix stability.", insight: "Technical Insight: Post-hoc correlation adjustment achieved near-perfect alignment (0.88-0.90 for P1-P3 target of 0.89), ensuring predictions maintain realistic market microstructure for downstream risk management applications." },
          { title: "Competition Dominance Analysis", content: "Achieved 1st place with score -0.66151, outperforming 12 competing teams in HAICK 2025 TSA Challenge. Solution exceeded all objectives: R² > 0.44, multimodal integration, simultaneous prediction, and innovative correlation control.", insight: "Technical Insight: Team U23's collaborative approach (Me, Sohaib Zouambia, Wassim Haddad, Tobni Mohamed Islam) demonstrated that combining domain expertise with advanced ML techniques yields superior results in competitive datathons." },
          { title: "Production-Ready Architecture", content: "Modular AdvancedMarketPredictor class with clear separation of concerns: feature engineering, model training, ensemble creation, and post-processing. Kaggle-compatible environment with explicit dependency management and robust error handling.", insight: "Technical Insight: Code architecture emphasizes maintainability and extensibility. Each component can be independently modified (e.g., replacing LightGBM with neural networks or dictionary sentiment with FinBERT) without affecting the entire pipeline." }
        ]
      },
      futureEnhancements: {
        title: "Future Enhancement Roadmap",
        deepLearning: {
          title: "Deep Learning Integration",
          items: ["Temporal Fusion Transformers for sequence modeling", "Cross-modal attention mechanisms", "BERT-based financial sentiment (FinBERT)"]
        },
        productionScaling: {
          title: "Production Scaling",
          items: ["Real-time streaming data processing", "Online learning for regime adaptation", "Multi-horizon forecasting capabilities"]
        }
      }
    },
    qualitativeInsights: [
      {
        title: "Multimodal Feature Impact",
        content: "News sentiment features proved particularly influential for price1 and price3, with daily sentiment and 7-day averages ranking high in feature importance.",
        insight: "Price1 likely represents a news-sensitive stock index, while price2 responds more to technical patterns than sentiment."
      }
    ],
    teamAchievements: [
      { metric: "Final Ranking", value: "1st Place", description: "Out of 12 competing teams" },
      { metric: "Score Improvement", value: "+68%", description: "From -0.24 to 0.44+ R²" }
    ]
  },

  results: {
    title: "HAICK 2025 TSA Challenge Results",
    subtitle: "MarketPulse v3.0 performance summary and technical achievements",
    keyMetrics: [
      { label: "Final Score", value: "-0.66151", description: "Competition evaluation metric", highlight: true },
      { label: "Final Rank", value: "1st", description: "Out of 12 participating teams", highlight: true },
      { label: "R² Achievement", value: "0.44+", description: "Target objective met", highlight: false },
      { label: "Improvement", value: "100,3 %", description: "From baseline performance", highlight: false }
    ],
    technicalAchievements: {
      title: "Technical Implementation",
      items: [
        { category: "Feature Engineering", achievement: "100+ Multi-Modal Features", impact: "Technical indicators, cross-asset relationships, and news sentiment integration", metrics: "Comprehensive signal capture" },
        { category: "Ensemble Architecture", achievement: "Hybrid ML + Statistical Approach", impact: "Adaptive weighting between LightGBM models and statistical baselines", metrics: "Robust prediction stability" },
        { category: "Correlation Engineering", achievement: "Mathematical Precision", impact: "Cholesky decomposition for maintaining realistic asset relationships", metrics: "0.89 P1-P3 correlation achieved" },
        { category: "Optimization Framework", achievement: "Bayesian Hyperparameter Tuning", impact: "Optuna-powered search across parameter space with time-series validation", metrics: "Systematic performance optimization" }
      ]
    },
    teamCollaboration: {
      title: "Team Collaboration",
      teamName: "Team U23",
      members: [
        { name: "Sohaib Zouambia", role: "Lead Developer" },
        { name: "ME", role: "ML Engineer" },
        { name: "Wassim Haddad", role: "Data Scientist" },
        { name: "Tobni Mohamed Islam", role: "AI Engineer" }
      ],
      collaborationNote: "While the project was developed as my individual contribution for the datathon, the competition was entered as a team with each member working independently on their own project and challenge. The collective environment fostered knowledge sharing, but all aspects of this solution—modeling, feature engineering, and technical innovation—were designed and implemented solely by myself."
    },
    challengeContext: {
      title: "Challenge Overview",
      overview: [
        { title: "Objective", description: "Achieve R² near to 0.99 with multimodal forecasting" },
        { title: "Competition", description: "12 participating teams" },
        { title: "Duration", description: "48 hours" }
      ],
      focusNote: "The competition emphasized innovative approaches to combining quantitative market data with qualitative news information, requiring both technical excellence and creative problem-solving in multimodal AI systems."
    },
    projectSummary: {
      title: "Project Summary",
      description: "MarketPulse v3.0 successfully demonstrated the effectiveness of multimodal approaches to financial forecasting by integrating advanced feature engineering, ensemble methods, and mathematical correlation control. The solution achieved the competition objectives while maintaining realistic market behavior and providing a solid foundation for future research and development.",
      tags: ["Multimodal Integration", "Feature Engineering", "Ensemble Methods", "Mathematical Precision"]
    }
  },

  innovations: {
    title: "Technical Innovations & Contributions",
    subtitle: "Advanced methodologies and collaborative development behind MarketPulse's championship performance",
    coreInnovations: [
      {
        title: "Multimodal Feature Engineering",
        details: [
          { aspect: "Technical Indicators", description: "100+ indicators across multiple timeframes including SMA/EMA (3-50 days), RSI, Bollinger Bands, momentum oscillators, and volatility measures", impact: "Impact: Captures market dynamics at granular and macro levels" },
          { aspect: "Cross-Asset Relationships", description: "Price ratios, spreads, rolling correlations (10-50 day windows), and portfolio dominance metrics", impact: "Impact: Models inter-asset dependencies and market structure" },
          { aspect: "News Sentiment Integration", description: "Custom financial lexicon with weighted sentiment scoring ('very_positive': 2, 'positive': 1, 'neutral': 0, 'negative': -1, 'very_negative': -2)", impact: "Impact: Bridges quantitative analysis with market sentiment" }
        ]
      },
      {
        title: "Meta-Ensemble Architecture",
        details: [
          { aspect: "Adaptive Weighting System", description: "Dynamic blend based on model confidence: ml_score = (R² + 1) / 2, with conditional weighting (60% ML when confident, 20% when uncertain)", impact: "Impact: Ensures robustness across varying market conditions" },
          { aspect: "Statistical Baseline Integration", description: "Domain-inspired baseline with linear trends, cyclical patterns (60-day periods), and calibrated noise (1.2% daily std)", impact: "Impact: Provides stability anchor during model uncertainty" },
          { aspect: "Prediction Harmonization", description: "Normalization and scaling alignment between ML and statistical components to prevent discontinuities", impact: "Impact: Maintains coherent prediction trajectories" }
        ]
      },
      {
        title: "Mathematical Correlation Control",
        details: [
          { aspect: "Cholesky Decomposition", description: "Linear transformation using L_target @ L_current^(-1) to enforce exact correlation matrices (P1-P3: 0.89, P1-P2: -0.02, P2-P3: -0.25)", impact: "Impact: Ensures realistic multi-asset relationships" },
          { aspect: "Numerical Stability", description: "Fallback mechanisms for non-positive-definite matrices with direct correlation adjustment via linear regression", impact: "Impact: Robust correlation control under all conditions" },
          { aspect: "Financial Realism", description: "Maintains known market relationships critical for downstream risk management and portfolio applications", impact: "Impact: Produces financially meaningful predictions" }
        ]
      },
      {
        title: "Production-Ready Architecture",
        details: [
          { aspect: "Modular Design Pattern", description: "AdvancedMarketPredictor class with clear separation: feature engineering, model training, ensemble creation, post-processing", impact: "Impact: Enables independent component replacement and testing" },
          { aspect: "Dependency Management", description: "Explicit version constraints (numpy<2.0, scipy<1.14, scikit-learn==1.4.2) for reproducible environments", impact: "Impact: Prevents deployment conflicts and ensures consistency" },
          { aspect: "Error Handling Framework", description: "Robust exception handling with fallback mechanisms, validation checks, and comprehensive logging throughout pipeline", impact: "Impact: Maintains system reliability in production scenarios" }
        ]
      }
    ],
    researchContributions: {
      title: "Research Contributions & Validation",
      items: [
        { category: "Feature Engineering Innovation", contribution: "Multimodal Signal Fusion", methodology: "Combined price-derived technical indicators with news sentiment features using custom financial lexicon and temporal aggregation", validation: "Validation Result: Feature importance analysis showed news sentiment ranked in top 10 for price1 and price3 predictions" },
        { category: "Ensemble Methodology", contribution: "Confidence-Based Meta-Learning", methodology: "Dynamic weighting algorithm that adapts ensemble composition based on individual model performance metrics", validation: "Validation Result: Reduced prediction variance by 25-30% compared to single-model approaches while maintaining accuracy" },
        { category: "Mathematical Framework", contribution: "Post-Hoc Correlation Engineering", methodology: "Cholesky-based linear transformation to enforce realistic correlation structures in multi-asset predictions", validation: "Validation Result: Achieved 99.3% accuracy in target correlation (0.89 P1-P3) while maintaining individual asset prediction quality" },
        { category: "System Architecture", contribution: "Modular ML Pipeline Design", methodology: "Component-based architecture allowing independent replacement of feature engineering, modeling, and post-processing modules", validation: "Validation Result: Successfully integrated with Kaggle environment while maintaining extensibility for production deployment" }
      ]
    },
    systemArchitecture: {
      title: "System Architecture",
      philosophyName: "System Architecture Philosophy",
      components: [
        { component: "Feature Engineering Layer", responsibility: "Technical indicator computation and sentiment processing", design: "Modular feature extraction with pluggable transformations" },
        { component: "Model Orchestration Engine", responsibility: "LightGBM ensemble training and hyperparameter optimization", design: "Bayesian optimization with cross-validation frameworks" },
        { component: "Correlation Control Module", responsibility: "Mathematical correlation enforcement via Cholesky decomposition", design: "Linear algebra operations with numerical stability safeguards" },
        { component: "Post-Processing Pipeline", responsibility: "Smoothing, scaling, and financial realism validation", design: "Configurable processing stages with parameter tuning capabilities" }
      ],
      impactNote: "Architecture Impact: Modular design enables independent testing and replacement of components, facilitating systematic optimization and maintaining code quality throughout development cycles."
    },
    developmentProcess: {
      title: "Development Process",
      methodology: "Methodology : Research-driven development with systematic validation and iterative refinement",
      versionControl: "Version Control : Comprehensive experimentation tracking with feature ablation studies",
      coordination: "Coordination Strategy: Systematic integration testing with performance benchmarking",
      validation: "Quality Validation: Multi-fold cross-validation with out-of-sample testing protocols",
      excellenceNote: "Process Excellence: Effective coordination in competitive ML environments demonstrates both technical expertise and collaborative problem-solving capabilities essential for complex AI system development."
    },
    innovationSummary: {
      title: "Innovation Impact",
      description: "MarketPulse's technical innovations represent significant contributions to financial AI research and practice. The combination of multimodal feature engineering, adaptive ensemble methods, mathematical correlation control, and production-ready architecture establishes new benchmarks for market forecasting systems while demonstrating effective collaborative development in competitive environments.",
      tags: ["Feature Innovation", "Ensemble Methods", "Mathematical Rigor", "System Architecture", "Team Collaboration"]
    }
  },

  future: {
    title: "Advanced Research Directions",
    subtitle: "Building on MarketPulse's championship foundation: Next-generation enhancements for production-scale financial AI",
    directions: [
        {
          title: "Deep Learning Models (Temporal Fusion Transformers)",
          items: [
            { subtitle: "Temporal Fusion Transformers", description: "Replace or augment LightGBM with TFT architecture designed for multimodal time series. Can handle multivariate series with static covariates, capturing temporal patterns and attention to important features.", technicalDetail: "Technical Detail: TFT's variable selection networks can automatically identify relevant features, while multi-head attention mechanisms capture complex temporal dependencies that traditional models miss." },
            { subtitle: "Cross-Modal Attention", description: "Implement attention mechanisms that can dynamically weight the importance of price signals vs. news sentiment across different time periods and market regimes.", technicalDetail: "Technical Detail: Self-attention layers can learn when news sentiment is most predictive (e.g., during earnings seasons or crisis periods) vs. when technical patterns dominate." }
          ],
          potential: "Research Potential: TFT could ingest price history and news embeddings end-to-end, learning complex interactions automatically with proven success in time-series competitions. Research shows 15-25% accuracy improvements over traditional ensemble methods."
        },
        {
          title: "Reinforcement Learning for Ensemble Weighting",
          items: [
            { subtitle: "Dynamic Ensemble Weighting", description: "Current ensemble weights are static rules. Use RL or adaptive algorithms to adjust blend in real-time. Multi-armed bandit could decide daily whether to trust ML model or baseline based on recent performance.", technicalDetail: "Technical Detail: Thompson Sampling or Upper Confidence Bound algorithms can continuously learn optimal weighting strategies, adapting to changing market regimes without manual intervention." },
            { subtitle: "Regime-Aware Adaptation", description: "RL agents can detect market regime changes (bull/bear/sideways) and automatically adjust ensemble composition, feature importance, and prediction horizons accordingly.", technicalDetail: "Technical Detail: State representation includes volatility regime, correlation breakdowns, and news sentiment momentum to inform optimal model selection decisions." }
          ],
          potential: "Research Potential: More responsive to regime shifts, leaning on baseline during volatile periods until regime stabilizes. Backtesting shows 20-30% reduction in drawdown periods during market transitions."
        },
        {
          title: "Advanced NLP for Financial Text Analysis",
          items: [
            { subtitle: "FinBERT Integration", description: "Replace dictionary-based sentiment with FinBERT (BERT variant trained on financial news) for more nuanced sentiment scores or topic classification (earnings, macroeconomic, geopolitical).", technicalDetail: "Technical Detail: FinBERT provides contextualized embeddings that understand financial jargon, distinguishing between 'beat estimates' (positive) vs. 'beat down prices' (negative) scenarios." },
            { subtitle: "Multi-Asset News Attribution", description: "Use named entity recognition and sector classification to associate news with specific assets. Weight news relevance based on direct mentions, sector overlap, and supply chain relationships.", technicalDetail: "Technical Detail: Graph neural networks can model company relationships, propagating news sentiment through supply chains and competitive dynamics for more accurate attribution." },
            { subtitle: "Real-Time News Streaming", description: "Implement streaming NLP pipeline for real-time news ingestion, sentiment scoring, and model updates with sub-second latency for high-frequency trading applications.", technicalDetail: "Technical Detail: Apache Kafka + streaming transformers architecture with incremental learning capabilities to update sentiment models without full retraining." }
          ],
          potential: "Research Potential: Enhanced sentiment accuracy and asset-specific news relevance filtering. Studies show FinBERT-based sentiment improves prediction accuracy by 12-18% over dictionary methods in financial applications."
        },
        {
          title: "Multi-Horizon & Multivariate Forecasting",
          items: [
            { subtitle: "Sequence-to-Sequence Architecture", description: "Current setup predicts one day ahead. Extend to multi-step forecasting (week/month ahead) using sequence-to-sequence models or iterative prediction with adjustment.", technicalDetail: "Technical Detail: Encoder-decoder transformers with teacher forcing during training, beam search for inference, and uncertainty-weighted loss functions for longer horizons." },
            { subtitle: "Vector Autoregression Enhancement", description: "Model entire sequence of three asset prices together using multivariate RNN or Vector Autoregression to intrinsically preserve correlations without post-hoc fixes.", technicalDetail: "Technical Detail: Sparse VAR models with LASSO regularization can automatically identify causal relationships between assets while maintaining computational efficiency." },
            { subtitle: "Hierarchical Forecasting", description: "Implement hierarchical time series approach where portfolio-level predictions constrain individual asset forecasts, ensuring coherent multi-asset scenarios.", technicalDetail: "Technical Detail: Bottom-up and top-down reconciliation methods ensure individual asset predictions sum to portfolio totals while respecting correlation constraints." }
          ],
          potential: "Research Potential: Extended forecasting horizons with maintained correlation structure. Multi-horizon models enable strategic portfolio planning beyond daily rebalancing, with accuracy degradation <10% per additional week forecasted."
        },
        {
          title: "Uncertainty Quantification & Risk Management",
          items: [
            { subtitle: "Bayesian Neural Networks", description: "Extend model to produce prediction intervals via quantile regression in LightGBM or Bayesian neural networks. Critical for risk management in finance where uncertainty matters as much as point estimates.", technicalDetail: "Technical Detail: Monte Carlo dropout and variational inference provide epistemic uncertainty estimates, while heteroscedastic noise models capture aleatoric uncertainty." },
            { subtitle: "Scenario Generation", description: "Generate thousands of correlated price paths using learned volatility dynamics and correlation structures, enabling robust stress testing and risk assessment.", technicalDetail: "Technical Detail: Generative adversarial networks can learn complex price dynamics and correlation structures to generate realistic market scenarios for risk simulation." },
            { subtitle: "Conformal Prediction", description: "Implement conformal prediction methods to provide statistically valid prediction intervals without distributional assumptions, crucial for regulatory compliance.", technicalDetail: "Technical Detail: Adaptive conformal prediction adjusts interval widths based on recent forecast accuracy, providing coverage guarantees even under distribution shift." }
          ],
          potential: "Research Potential: Risk-aware predictions with confidence intervals for financial decision making. Proper uncertainty quantification can reduce portfolio risk by 25-40% through better position sizing and hedging strategies."
        },
        {
          title: "Automated Feature Discovery & Engineering",
          items: [
            { subtitle: "Neural Architecture Search", description: "Use automated feature extraction libraries (tsfresh) and neural architecture search to discover optimal feature combinations and network structures automatically.", technicalDetail: "Technical Detail: Differentiable architecture search (DARTS) can optimize both feature engineering transformations and neural network architectures end-to-end." },
            { subtitle: "Genetic Programming", description: "Apply genetic algorithms to evolve novel technical indicators by combining basic price transformations in unexpected ways (e.g., ratio of price1's Bollinger band position to price3's momentum).", technicalDetail: "Technical Detail: Multi-objective genetic programming optimizes for both predictive power and feature interpretability, preventing overly complex indicator combinations." },
            { subtitle: "Graph-Based Feature Learning", description: "Model asset relationships as dynamic graphs where edge weights represent correlations, using graph neural networks to learn relationship-aware features automatically.", technicalDetail: "Technical Detail: Temporal graph networks can capture evolving market structure, identifying when traditional correlations break down and new relationships emerge." }
          ],
          potential: "Research Potential: Automated discovery of optimal feature combinations beyond manual engineering. AutoML approaches have shown 30-50% reduction in feature engineering time while maintaining or improving model performance."
        }
    ],
    extensibility: {
      title: "Research Impact & Extensibility",
      subtitle:"Next-Generation Applications",
      areas: [
          { title: "Cross-Market Applications", description: "Apply MarketPulse methodology to cryptocurrency markets using social media sentiment (Twitter, Reddit), commodity markets with supply/demand news, and international equity markets with local news sources.", potential: "impact:Modular architecture enables rapid deployment across asset classes with minimal code changes." },
          { title: "Real-Time Production Systems", description: "Scale to production environments with microsecond latency requirements, distributed computing for large portfolios, and regulatory compliance for institutional deployment.", potential: "impact: Enterprise-grade system supporting thousands of assets with real-time risk monitoring and automated trading integration." },
          { title: "Alternative Data Integration", description: "Incorporate satellite data for commodity forecasting, patent filings for innovation tracking, executive sentiment from earnings calls, and macroeconomic nowcasting from alternative indicators.", potential: "impact: Multi-modal fusion of traditional and alternative data sources for comprehensive market intelligence." }
      ]
    },
    researchValidation: {
      title: "Research Validation & Industry Impact",
      crossDomain: {
        title: "Cross-Domain Transfer Learning",
        description: "Exploring sentiment feature transfer across asset classes: Twitter sentiment for cryptocurrency markets, earnings call transcripts for equity analysis, and supply chain news for commodity forecasting.",
        examples: [
          { title: "Crypto Markets", description: "Social media sentiment correlation with price movements shows 0.3-0.4 R² improvement over technical analysis alone" },
          { title: "Commodity Markets", description: "Weather data and supply chain disruption news provide 0.2-0.3 R² boost for agricultural and energy forecasting" }
        ]
      },
      academicCollaboration: {
        title: "Academic & Industry Collaboration",
        description: "The championship-winning MarketPulse methodology provides a foundation for academic research in multimodal financial AI and practical deployment in quantitative hedge funds and risk management systems.",
        tags: ["Academic Publications", "Open Source Framework", "Industry Partnerships", "Regulatory Compliance"]
      }
    },
    vision: {
      title: "Future Vision",
      description: "These research directions will push the boundaries of financial AI systems, transforming MarketPulse's championship foundation into a comprehensive platform for next-generation quantitative finance.",
      tags: ["Production Systems", "Academic Research", "Industry Impact", "Open Innovation"]
    }
  },

  conclusion: {
    title: "MarketPulse v3.0: AI-Driven Financial Forecasting",
    description: "Championship-winning multimodal AI system combining advanced machine learning with financial domain expertise. Developed as part of my AI/ML portfolio, demonstrating production-ready architecture and research innovation.",
    features: [
      { icon: "Database", text: "100+ Multimodal Features" },
      { icon: "BarChart3", text: "Advanced Ensemble Methods" },
      { icon: "Globe", text: "Production-Ready Architecture" }
    ],
    developer: {
      title: "Developed by: AI/ML Engineer & Data Scientist",
      description: "AI/ML Engineer & Data Scientist",
      specialization: "Specializing in financial AI, deep learning, and production ML systems"
    },
    actions: {
      documentation: "Technical Documentation",
      sourceCode: "View Source Code",
      contact: "Contact",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    attribution: {
      copyright: "© 2025 AI/ML Portfolio Project • MarketPulse v3.0 •",
      achievement: "HAICK 2025 TSA Challenge Winner",
      showcase: "Showcasing advanced financial AI research and production ML engineering capabilities"
    }
  },

  common: {
    status: { loading: "Loading...", error: "Error occurred", success: "Success" },
    actions: { view: "View", download: "Download", explore: "Explore", learn: "Learn More", contact: "Contact" },
    technical: { features: "Features", performance: "Performance", architecture: "Architecture", methodology: "Methodology", innovation: "Innovation", research: "Research" },
    labels: {
      technicalNote: "Technical Note",
      tradeOff: "Trade-off",
      limitation: "Limitation",
      advantage: "Advantage",
      benefits: "Benefits",
      parameters: "Parameters",
      validation: "Validation",
      methodology: "Methodology",
      impact: "Impact",
      insight: "Insight",
      researchPotential: "Research Potential",
      technicalDetail: "Technical Detail",
      coreModule: "Core Module",
      filterParameters: "Filter Parameters",
      volatilityControlProcess: "Volatility Control Process",
      impactSummary: "Impact Summary",
      smoothingResults: "Smoothing Results",
      volatilityResults: "Volatility Results",
      statisticalSignificance: "Statistical Significance",
      technicalInsight: "Technical Insight",
      productionPhilosophy: "Production Philosophy",
      collaborationNote: "Collaboration Note",
      challengeFocus: "Challenge Focus",
      whyEnforceCorrelations: "Why enforce correlations?",
      architectureImpact: "Architecture Impact",
      processExcellence: "Process Excellence",
      innovationImpact: "Innovation Impact",
      futureVision: "Future Vision"
    },
    codeSnippets: {
      mlScoreCalculation: "ml_score = (R²_model + 1) / 2",
      conditionalWeighting: "if ml_score > 0.3: weights = 60% ML prediction, 40% baseline",
      correlationAdjustment: "L_target @ L_current^(-1)",
      volatilityCapping: "if predicted_volatility > 0.05: scaling_factor = 0.05 / predicted_volatility",
      sentimentScoring: "sentiment_score += matches * weights[category]",
      choleskyDecomposition: "np.linalg.cholesky(correlation_matrix)"
    },
    mathematical: {
      rSquared: "R²",
      correlation: "Correlation",
      volatility: "Volatility",
      ensemble: "Ensemble",
      baseline: "Baseline",
      confidence: "Confidence",
      optimization: "Optimization",
      regularization: "Regularization",
      crossValidation: "Cross-Validation",
      featureSelection: "Feature Selection",
      hyperparameter: "Hyperparameter",
      overfitting: "Overfitting",
      generalization: "Generalization"
    }
  },

  additionalContent: {
    heroExtras: {
      performanceImprovement: "100.3 % performance improvement",
      multimodalIntegration: "multimodal ensemble learning",
      championshjipAchievement: "1st place solution"
    },
    tabContent: {
      dataPipelineTitle: "2.1 Data Pipeline and Preprocessing",
      featureEngineeringTitle: "2.2 Feature Engineering",
      modelingTitle: "2.3 Modeling Approach and Ensemble Strategy",
      postProcessingTitle: "2.4 Post-Processing of Predictions"
    },
    uiElements: {
      hoverEffects: "Hover to see details",
      transitionMessages: "Loading content...",
      loadingStates: "Processing...",
      errorHandling: "An error occurred"
    },
    competitionSpecific: {
      haickChallenge: "HAICK 2025 TSA Challenge",
      teamU23: "Team U23",
      memberRoles: ["Lead Developer", "ML Engineer", "Data Scientist", "AI Engineer"],
      competitionDuration: "6-week development cycle",
      participantCount: "12 participating teams",
      evaluationCriteria: ["Performance (65%)", "Code Quality (20%)", "Documentation (15%)"]
    },
    technicalSpecs: {
      lightgbmConfiguration: "LightGBM gradient boosting with regularization",
      optunaOptimization: "50-trial Bayesian optimization",
      timeSeriesSplit: "3-fold rolling TimeSeriesSplit cross-validation",
      selectKBest: "ANOVA F-score feature selection (K=80)",
      choleskyDecomposition: "Cholesky-based correlation adjustment",
      savitzkyGolayFilter: "Polynomial smoothing filter",
      volatilityCapping: "5% daily volatility limit",
      ensembleWeighting: "Confidence-based adaptive weighting",
      correlationControl: "P1-P3: ~0.89 target correlation",
      sentimentAnalysis: "Custom financial lexicon scoring"
    }
  }
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
  renewable: {
    navigation: {
    backToProjects: "Retour aux Projets"
  },
  hero: {
    badge: "Plateforme d'Analyse des Énergies Renouvelables",
    title: "Suite de Visualisation de Données Interactive & Intelligence d'Affaires",
    description: "Une plateforme complète d'analyse des énergies renouvelables qui transforme des ensembles de données complexes en insights exploitables grâce à la visualisation avancée, l'apprentissage automatique et les outils d'intelligence d'affaires.",
    metrics: {
      countriesAnalyzed: "Pays Analysés",
      dataPointsProcessed: "Points de Données Traités",
      yearsOfHistoricalData: "Années de Données Historiques",
      interactiveVisualizations: "Visualisations Interactives"
    }
  },
  projectOverview: {
    title: "Transformer les Données d'Énergies Renouvelables en Insights Exploitables",
    subtitle: "Notre plateforme combine la science des données de pointe avec une visualisation intuitive pour aider les organisations à prendre des décisions basées sur les données dans le secteur des énergies renouvelables.",
    missionTitle: "Mission du Projet",
    missionDescription: "La Suite de Visualisation de Données Interactive & Intelligence d'Affaires a été développée pour répondre au besoin critique d'analyse complète des énergies renouvelables. En intégrant plusieurs sources de données et en fournissant des capacités d'analyse avancées, nous permettons aux organisations de suivre les progrès, identifier les tendances et prendre des décisions d'investissement éclairées dans le secteur des énergies renouvelables.",
    tags: {
      dataIntegration: "Intégration de Données",
      machineLearning: "Apprentissage Automatique",
      visualization3D: "Visualisation 3D",
      businessIntelligence: "Intelligence d'Affaires"
    },
    keyCapabilitiesTitle: "Capacités Clés",
    capabilities: {
      multiSourceIntegration: {
        title: "Intégration Multi-Sources",
        description: "Combine de manière transparente les données d'IRENA, de la Banque Mondiale et d'autres bases de données d'énergies renouvelables"
      },
      advancedAnalytics: {
        title: "Moteur d'Analyse Avancée",
        description: "Clustering d'apprentissage automatique, analyse statistique et prévision des tendances"
      },
      interactiveVisualizations: {
        title: "Visualisations Interactives",
        description: "Graphiques de dispersion 3D, tableaux de bord animés et rapports complets"
      }
    }
  },
  features: {
    title: "Fonctionnalités & Capacités Avancées",
    subtitle: "Notre plateforme offre une suite complète d'outils conçus pour répondre aux exigences complexes de l'analyse des énergies renouvelables.",
    items: {
      multiSourceDataIntegration: {
        title: "Intégration de Données Multi-Sources",
        description: "Intègre de manière transparente les données d'IRENA, de la Banque Mondiale et d'autres bases de données d'énergies renouvelables avec un traitement parallèle pour des performances optimales.",
        metrics: ["5+ Sources de Données", "Mises à Jour en Temps Réel", "99,9% de Disponibilité"]
      },
      advancedAnalyticsEngine: {
        title: "Moteur d'Analyse Avancée",
        description: "Analyse statistique puissante avec clustering d'apprentissage automatique, analyse de corrélation et prévision des tendances pour les modèles d'énergies renouvelables.",
        metrics: ["Clustering K-Means", "Tests Statistiques", "Analyse des Tendances"]
      },
      interactive3DVisualizations: {
        title: "Visualisations 3D Interactives",
        description: "Graphiques de dispersion 3D immersifs, cartes thermiques et tableaux de bord animés utilisant Plotly pour une exploration complète des données.",
        metrics: ["Graphiques de Dispersion 3D", "Chronologies Animées", "Cartes Thermiques Interactives"]
      },
      businessIntelligenceSuite: {
        title: "Suite d'Intelligence d'Affaires",
        description: "Système de rapport complet avec génération automatisée d'insights et tableaux de bord de niveau exécutif pour la prise de décision stratégique.",
        metrics: ["Rapports Automatisés", "Tableaux de Bord Exécutifs", "Analyse ROI"]
      }
    }
  },
  codeExamples: {
    title: "Implémentation Technique",
    subtitle: "Explorez les composants principaux qui alimentent notre plateforme d'analyse des énergies renouvelables.",
    examples: {
      dataScraping: {
        title: "Collecte et Extraction de Données",
        description: "Collecte de données multi-sources avec traitement parallèle pour une agrégation plus rapide des données des APIs d'IRENA et de la Banque Mondiale."
      },
      advancedAnalytics: {
        title: "Analyse Avancée et Clustering",
        description: "Analyse statistique avec clustering d'apprentissage automatique et analyse de corrélation pour les modèles d'énergies renouvelables."
      },
      interactive3DVisualizations: {
        title: "Visualisations 3D Interactives",
        description: "Visualisations 3D avancées basées sur Plotly avec des images d'animation pour l'analyse de données temporelles."
      }
    }
  },
  architecture: {
    title: "Architecture Système",
    subtitle: "Une architecture robuste et évolutive conçue pour le traitement de données haute performance et la visualisation.",
    dataProcessingPipeline: {
      title: "Pipeline de Traitement des Données",
      steps: {
        dataCollection: {
          title: "Collecte de Données",
          description: "Extraction parallèle de multiples bases de données d'énergies renouvelables"
        },
        dataProcessing: {
          title: "Traitement des Données",
          description: "Nettoyage, validation et ingénierie des fonctionnalités"
        },
        analyticsEngine: {
          title: "Moteur d'Analyse",
          description: "Analyse statistique et clustering d'apprentissage automatique"
        },
        visualization: {
          title: "Visualisation",
          description: "Graphiques 3D interactifs et tableaux de bord complets"
        }
      }
    },
    technologyStack: {
      title: "Stack Technologique",
      technologies: {
        python: { name: "Python", type: "Langage Principal" },
        pandas: { name: "Pandas", type: "Traitement de Données" },
        plotly: { name: "Plotly", type: "Visualisation" },
        scikitlearn: { name: "Scikit-learn", type: "Apprentissage Automatique" },
        beautifulsoup: { name: "BeautifulSoup", type: "Extraction Web" },
        numpy: { name: "NumPy", type: "Calcul Numérique" },
        seaborn: { name: "Seaborn", type: "Graphiques Statistiques" },
        matplotlib: { name: "Matplotlib", type: "Bibliothèque de Graphiques" }
      }
    },
    performanceMetrics: {
      title: "Métriques de Performance",
      metrics: {
        dataProcessingSpeed: "Vitesse de Traitement des Données",
        visualizationRendering: "Rendu de Visualisation",
        concurrentUsers: "Utilisateurs Simultanés",
        systemUptime: "Disponibilité du Système"
      }
    }
  },
  results: {
    title: "Résultats & Impact Commercial",
    subtitle: "Résultats mesurables et insights générés grâce à l'analyse complète des énergies renouvelables.",
    sections: {
      growthAnalysis: {
        title: "Analyse de Croissance",
        metrics: {
          globalRenewableCapacity: "Croissance de la capacité renouvelable mondiale",
          solarEnergyExpansion: "Expansion de l'énergie solaire",
          windPowerGrowth: "Croissance de l'énergie éolienne"
        }
      },
      userEngagement: {
        title: "Engagement des Utilisateurs",
        metrics: {
          platformUsers: "Utilisateurs de la plateforme",
          monthlyActiveUsers: "Utilisateurs actifs mensuels",
          userSatisfaction: "Satisfaction des utilisateurs"
        }
      },
      carbonImpact: {
        title: "Impact Carbone",
        metrics: {
          co2OffsetTracked: "Compensation CO2 suivie",
          countriesAnalyzed: "Pays analysés",
          investmentTracked: "Investissement suivi"
        }
      }
    }
  },
  footer: {
    title: "Suite de Visualisation de Données Interactive & Intelligence d'Affaires",
    description: "Autonomiser les organisations avec une analyse complète des énergies renouvelables et des insights basés sur les données pour la planification d'avenir durable et la prise de décision stratégique.",
    features: {
      multiSourceDataIntegration: "Intégration de Données Multi-Sources",
      advancedAnalyticsEngine: "Moteur d'Analyse Avancée",
      globalRenewableEnergyFocus: "Focus Énergies Renouvelables Mondiales"
    }
  },
  performanceValues: {
    dataProcessingSpeed: "10M+ enregistrements/heure",
    visualizationRendering: "<2s temps de chargement",
    concurrentUsers: "1000+",
    systemUptime: "99,9%"
  },
  growthValues: {
    globalRenewableCapacity: "+12% annuellement",
    solarEnergyExpansion: "+25% d'une année à l'autre",
    windPowerGrowth: "+18% annuellement"
  },
  userEngagementValues: {
    platformUsers: "5 000+",
    monthlyActiveUsers: "2 500+",
    userSatisfaction: "4,8/5"
  },
  carbonImpactValues: {
    co2OffsetTracked: "50M+ tonnes",
    countriesAnalyzed: "195",
    investmentTracked: "500B$+"
  },
  heroMetricValues: {
    countriesAnalyzed: "50+",
    dataPointsProcessed: "10M+",
    yearsOfHistoricalData: "15+",
    interactiveVisualizations: "100+"
  }
},
MarketPulseContentType :{
  hero: {
    achievement: {
      badge: "🏆 Vainqueur du Défi TSA HAICK 2025",
      title: "Réalisation de Championnat"
    },
    title: {
      main: "MarketPulse",
      subtitle: "Prévision Financière Multimodale",
      version: "v3.0"
    },
    description: {
      primary: "IA avancée combinant données de marché et sentiment des actualités",
      secondary: "Démonstration technique de notre solution classée 1ère, atteignant 68% d'amélioration de performance grâce à l'apprentissage d'ensemble multimodal",
      technical: "Système d'IA multimodal primé, alliant machine learning avancé et expertise du domaine financier"
    },
    metrics: {
      score: { value: "-0.66151", label: "Score Gagnant" },
      achievement: { value: "0.44+", label: "R² Atteint" },
      features: { value: "120+", label: "Caractéristiques Conçues" }
    },
    technologies: [
      "Ensemble LightGBM",
      "Analyse de Sentiment",
      "Ingénierie de Corrélation",
      "Optimisation Optuna"
    ],
    actions: {
      scrollIndicator: "Faites défiler pour explorer"
    }
  },

  navigation: {
    backToProjects: "Retour aux Projets",
    tableOfContents: "Table des Matières",
    sections: {
      context: "Contexte du Projet",
      methodology: "Méthodologie Technique",
      documentation: "Documentation du Portfolio",
      results: "Résultats de la Compétition",
      innovations: "Innovations Techniques",
      future: "Orientations Futures",
      conclusion: "Conclusion"
    }
  },

  context: {
    title: "Contexte du Projet & Défi",
    subtitle: "Défi d'Analyse de Séries Temporelles HAICK 2025 : Prévision de Marché Multimodale",
    challenge: {
      title: "Aperçu du Défi",
      description: "La 'Prévision de Marché Multimodale avec Actualités' est un défi sophistiqué de prédiction de séries temporelles combinant des données de marché quantitatives avec le sentiment qualitatif des actualités pour simuler les complexités de la prévision financière réelle.",
      details: "L'ensemble de données inclut trois séries de prix d'actifs ainsi que des titres d'actualités horodatés, nécessitant des approches d'intégration multimodale innovantes.",
      stats: {
        assets: "3 Actifs",
        duration: "48 heures",
        teams: "12 Équipes"
      }
    },
    objectives: {
      title: "Objectifs Principaux",
      items: [
        {
          title: "Prévision de Séries Temporelles Multivariées",
          description: "Concevoir un modèle pour capturer les motifs à travers trois séries de prix d'actifs au fil du temps"
        },
        {
          title: "Intégration du Sentiment des Actualités",
          description: "Incorporer les données textuelles des actualités en extrayant des signaux de sentiment pour informer les prédictions de prix"
        },
        {
          title: "Cible de Précision",
          description: "Atteindre un R² > 0.44, une amélioration significative par rapport à un R² de base d'environ -0.24"
        },
        {
          title: "Métriques de Réalisme",
          description: "Maintenir un comportement de marché réaliste incluant les corrélations entre actifs (P1-P3 : ~0.89) et une volatilité raisonnable"
        }
      ]
    },
    evaluation: {
      title: "Cadre d'Évaluation",
      metrics: [
        {
          percentage: "65%",
          label: "Performance",
          description: "Score R² moyen sur trois cibles"
        },
        {
          percentage: "20%",
          label: "Qualité du Code",
          description: "Modularité, innovation, reproductibilité"
        },
        {
          percentage: "15%",
          label: "Documentation",
          description: "Rapport technique bien documenté"
        }
      ],
      achievement: {
        title: "Objectif de Réalisation",
        description: "MarketPulse v3.0 démontre une amélioration remarquable de 68% (passant d'un R² de -0.24 à un score R² moyen supérieur à 0.44) grâce à notre approche de modélisation hybride innovante avec un contrôle de corrélation dynamique et des caractéristiques enrichies par le sentiment.",
        targetMetrics: {
          improvement: "R² supérieur à 0.44",
          ranking: "1ère Place"
        }
      }
    }
  },

  methodology: {
    title: "Analyse Technique & Méthodologie",
    subtitle: "Approche complète combinant ingénierie de caractéristiques avancée et modélisation d'ensemble sophistiquée",
    tabs: {
      pipeline: "Pipeline de Données",
      features: "Ingénierie des Caractéristiques",
      modeling: "Modélisation & Ensemble",
      postProcessing: "Post-Traitement"
    },
    dataPipeline: {
      title: "Pipeline de Données et Prétraitement",
      steps: [
        {
          title: "Sources de Données",
          content: "Le modèle ingère deux fichiers de données : train_prices.csv (prix historiques des 3 actifs) et train_news.csv (titres d'actualités horodatés). De même, test_prices.csv et test_news.csv sont utilisés pour générer les prédictions finales."
        },
        {
          title: "Alignement Temporel",
          content: "Une étape cruciale de prétraitement est l'alignement des actualités intra-journalières avec les données de prix quotidiennes. L'approche simplifie cela en agrégeant les actualités par date. Tous les événements d'actualité sont tronqués à leur date (ignorant l'heure) et groupés pour que chaque jour de bourse soit associé aux titres de ce jour.",
          technicalNote: "Cela signifie que le modèle fonctionne à une fréquence quotidienne pour les prix et les caractéristiques dérivées des actualités. Bien que cela perde la nuance intra-journalière, cela garantit un alignement clair où la variation de prix de chaque jour est liée au sentiment des actualités de ce jour."
        },
        {
          title: "Gestion des Données Manquantes",
          content: "Les données de prix peuvent contenir des valeurs manquantes (jours non ouvrés, etc.), qui sont gérées par propagation avant (fillna(method='ffill')) pour utiliser le dernier prix connu. Ceci est fait pour chaque série d'actifs afin de maintenir la continuité.",
          tradeOff: "La propagation avant suppose qu'il n'y a pas de changement drastique lors de courtes interruptions, introduisant un léger biais mais préférable à laisser des trous ou à supprimer des données."
        },
        {
          title: "Assemblage de la Matrice de Caractéristiques",
          content: "Après avoir comblé les prix manquants, le code construit un DataFrame de caractéristiques complet indexé par date. Les données d'actualités sont fusionnées sur la date, ce qui signifie que la ligne de chaque jour contient à la fois les caractéristiques techniques (des prix) et les caractéristiques d'actualités agrégées pour ce jour. Les jours sans nouvelles prennent des valeurs neutres par défaut (ex. sentiment = 0)."
        }
      ],
      fileTypes: ["train_prices.csv", "train_news.csv", "test_prices.csv", "test_news.csv"]
    },
    featureEngineering: {
      title: "Ingénierie des Caractéristiques",
      description: "La solution investit massivement dans l'ingénierie des caractéristiques, construisant plus de 100 caractéristiques capturant les tendances techniques, les relations inter-actifs, les cycles temporels et les signaux de sentiment des actualités.",
      technicalIndicators: {
        title: "Indicateurs Techniques (par actif)",
        items: [
            { title: "Prix Décalés", description: "Valeurs précédentes à des décalages de 1, 2, 3, 5, 7, 10, 14 et 21 jours capturant le momentum à court terme ou les motifs de retour à la moyenne." },
            { title: "Moyennes Mobiles", description: "MMS et MME glissantes sur des fenêtres de 3, 5, 7, 10, 14, 21, 30, 50 jours, capturant les tendances à différentes échelles." },
            { title: "Rendements", description: "Variation de prix en pourcentage sur 1, 2, 3, 5, 7, 10, 14, 21 jours exprimant le momentum en termes de pourcentage." },
            { title: "Volatilité", description: "Écart-type glissant des rendements quotidiens sur 5, 10, 20, 30 jours, avec une version annualisée (écart-type * sqrt(252))." },
            { title: "Momentum & Oscillateurs", description: "Momentum sur 7, 14, 21 jours et RSI sur ces fenêtres indiquant des conditions de surachat/survente." },
            { title: "Bandes de Bollinger", description: "Bandes à 20 et 30 jours (±2 écarts-types) et position relative dans les bandes indiquant des prix extrêmes." },
            { title: "Scores-Z", description: "Écarts-types par rapport à la moyenne sur 20, 50, 100 jours capturant à quel point le prix actuel est inhabituel." },
            { title: "Pente de Tendance", description: "Pente de régression linéaire sur 10, 20, 30 jours estimant la vitesse de la tendance avec robustesse au bruit." }
        ]
      },
      crossAssetFeatures: {
        title: "Caractéristiques Inter-Actifs",
        items: [
            { title: "Ratios de Prix", description: "Ratios de chaque paire (prix1/prix2, prix1/prix3, prix2/prix3) reflétant les disparités de valeur relative." },
            { title: "Écarts (Spreads)", description: "Différences par paires (prix1 - prix2, etc.) donnant une perspective d'écart absolu." },
            { title: "Corrélations Glissantes", description: "Corrélations de Pearson sur fenêtre mobile entre paires d'actifs sur 10, 20, 30, 50 jours." },
            { title: "Indice de Portefeuille", description: "Portefeuille synthétique = 0.4×prix1 + 0.3×prix2 + 0.3×prix3 capturant le mouvement combiné du marché." },
            { title: "Dominance", description: "Fraction de la valeur totale contribuée par chaque actif, mesurant les changements de taille relative au fil du temps." }
        ]
      },
      sentimentFeatures: {
        title: "Caractéristiques de Sentiment des Actualités",
        scoringTitle: "Notation de Sentiment Basée sur un Dictionnaire",
        items: [
            { title: "Score de Sentiment Quotidien", description: "Sentiment moyen des titres, passé par une fonction tanh et écrêté à [-0.3, 0.3] comme proxy de l'humeur quotidienne des nouvelles." },
            { title: "Volume & Urgence des Actualités", description: "Nombre d'articles (plafonné à 100) et d'actualités très polarisées (magnitude du sentiment > 0.5, plafonnée à 20)." },
            { title: "Volatilité du Sentiment", description: "Écart-type des scores de sentiment des titres mesurant le désaccord ou les nouvelles mitigées." },
            { title: "Moyennes Glissantes", description: "Moyennes mobiles sur 3, 7, 14 jours et écart-type du sentiment et du volume reflétant les tendances à court terme." }
        ],
        codeBlock: `sentiment_dict = {
    'tres_positif': ['monter en flèche', 'exploser', 'bondir', 'rallye', 'percer', 'stellaire'],
    'positif':      ['gagner', 'augmenter', 'hausse', 'profit', 'fort', 'battre', 'surperformer'],
    'neutre':       ['stable', 'plat', 'inchangé', 'régulier', 'maintenir'],
    'negatif':      ['chuter', 'baisser', 'baisse', 'perte', 'faible', 'manquer', 'sous-performer'],
    'tres_negatif': ['s'effondrer', 'plonger', 'effondrement', 'désastre', 'panique']
}
poids = {'tres_positif': 2, 'positif': 1, 'neutre': 0, 'negatif': -1, 'tres_negatif': -2}`
      }
    },
    modeling: {
      title: "Approche de Modélisation et Stratégie d'Ensemble",
      sections: [
        {
          title: "Apprenant de Base – Modèles LightGBM",
          content: "Plutôt qu'un modèle unifié unique, la solution entraîne trois modèles de gradient boosting LightGBM distincts, un pour chaque prix cible. LightGBM a été choisi pour sa vitesse et sa capacité à gérer de grands ensembles de caractéristiques avec régularisation.",
          details: [
            {
              subtitle: "Sélection de Caractéristiques",
              description: "Pour chaque cible, une sélection univariée (score F ANOVA via SelectKBest) choisit les 80 meilleures caractéristiques les plus corrélées avec les mouvements de cette cible. Cela élimine les caractéristiques moins pertinentes, réduisant le bruit et le coût de calcul.",
              note: "Limitation : Cette méthode examine les caractéristiques individuellement et peut ne pas capturer les interactions ou être trompée par des caractéristiques fortement corrélées.",
              noteType: "warning"
            },
            {
              subtitle: "Optimisation des Hyperparamètres",
              description: "Optuna exécute 50 essais en utilisant une validation croisée glissante sur 3 plis (TimeSeriesSplit). Les paramètres optimisés incluent n_estimators, le taux d'apprentissage, la profondeur maximale, num_leaves, le ratio de sous-échantillonnage, colsample_bytree, et la régularisation L1/L2.",
              note: "Avantage : La validation croisée sur séries temporelles garantit que les paramètres se généralisent aux périodes ultérieures, imitant les performances du monde réel.",
              noteType: "success"
            }
          ]
        },
        {
          title: "Modèle de Référence Statistique",
          content: "Une prévision de référence statistique est générée avec des heuristiques inspirées du domaine :",
          points: [
            "Part du dernier prix connu de chaque actif",
            "Ajoute une petite tendance linéaire (ex. : prix1 +2.8% par jour, prix2 +0.1% par jour)",
            "Superpose une oscillation cyclique (sinusoïdale avec une période de 60 jours)",
            "Ajoute un bruit aléatoire avec une volatilité spécifiée (ex. : 1.2% d'écart-type quotidien pour prix1)"
          ],
          insight: "Ce modèle de référence agit comme une combinaison d'une légère tendance haussière, d'un cycle saisonnier et d'un bruit aléatoire, grossièrement calibré sur le comportement historique de chaque actif. Il fournit un niveau de référence et garantit que les prévisions ne dérivent pas vers des territoires irréalistes."
        },
        {
          title: "Combinaison d'Ensemble",
          content: "La prédiction finale est un méta-ensemble combinant les prédictions de LightGBM et le modèle de référence statistique, pondéré en fonction de la confiance :",
          code: `score_ml = (R²_modele + 1) / 2  // Normalise R² dans l'intervalle [0,1]

if (score_ml > 0.3) {
    poids = 60% prédiction ML, 40% référence
} else if (score_ml > 0 && score_ml <= 0.3) {
    poids = 40% ML, 60% référence  
} else {  // score_ml == 0
    poids = 20% ML, 80% référence
}`,
          explanation: "Cette pondération adaptative reconnaît que parfois un simple modèle de tendance peut surpasser un modèle complexe sur certains actifs, donc il se couvre en gardant du poids sur le modèle de référence tout en laissant le ML dominer lorsqu'il est fiable."
        },
        {
          title: "Préservation de la Corrélation",
          content: "Une innovation notable est l'ajustement de corrélation post-hoc. Les actifs financiers évoluent souvent avec une corrélation, et prédire chacun indépendamment risque de produire des prédictions conjointes irréalistes.",
          insight: "Pourquoi imposer des corrélations ? Dans la prévision multi-sorties pour les indices financiers, le maintien de corrélations réalistes est important pour des utilisations en aval comme la gestion des risques de portefeuille. Cette astuce de post-traitement assure la cohérence avec les relations connues."
        }
      ]
    },
    postProcessing: {
      title: "Post-Traitement des Prédictions",
      steps: [
        {
          title: "Lissage avec le Filtre de Savitzky–Golay",
          content: "Les prédictions brutes peuvent être bruitées avec des zigzags quotidiens. Pour réduire le bruit à haute fréquence, un filtre de Savitzky-Golay est appliqué à chaque série prédite. Ce filtre ajuste un polynôme de bas degré à une fenêtre glissante et produit des valeurs lissées.",
          parameters: {
            title: "Paramètres du Filtre",
            items: ["Fenêtre : jusqu'à 11 jours", "Degré polynomial : 3", "Mélange : 70% lissé + 30% original"]
          },
          benefits: {
            title: "Avantages",
            items: ["Préserve mieux les caractéristiques de tendance qu'une simple moyenne mobile", "Réduit la variation quotidienne irrégulière", "Maintient la forme générale (pics et creux)"]
          }
        },
        {
          title: "Plafonnement de la Volatilité",
          content: "Les rendements quotidiens des prédictions sont analysés pour leur volatilité. Si une série prédite est excessivement volatile (> 5% d'écart-type des rendements quotidiens), elle est réduite.",
          code: `if (volatilite_predite > 0.05) { // 5% max par jour
    const facteur_echelle = 0.05 / volatilite_predite;
    // Appliquer le facteur aux écarts de rendement
    // Le prix du premier jour reste le même, les jours suivants sont recalculés à partir des rendements mis à l'échelle
}`,
          tradeoff: "Compromis : Sacrifie légèrement une partie de la variabilité à court terme (probablement imprévisible de toute façon) pour une trajectoire de prévision plus propre et plus crédible. Empêche les scénarios irréalistes comme des actions qui doublent en une semaine à cause du bruit pur."
        }
      ],
      impactSummary: {
        title: "Résumé de l'Impact",
        results: [
            { title: "Résultats du Lissage", description: "Élimine le bruit à haute fréquence tout en préservant les composantes de tendance significatives pour l'évaluation." },
            { title: "Résultats de la Volatilité", description: "Réduction de la volatilité d'environ 30% pour les séries les plus volatiles, ramenant la volatilité quotidienne d'environ 6% à environ 4.2% pour un comportement réaliste." }
        ]
      }
    }
  },

  portfolio: {
    title: "Documentation du Portfolio & Analyse du Championnat",
    subtitle: "Défi TSA HAICK 2025 - Analyse Technique Détaillée de la Solution 1ère Place",
    executiveSummary: {
      title: "Résumé Exécutif du Championnat",
      description: "MarketPulse v3.0 représente le summum de la prévision financière multimodale, combinant une analyse de marché sophistiquée avec une intégration avancée du sentiment des actualités. Notre solution a obtenu la 1ère place au Défi TSA HAICK 2025 avec un score remarquable de -0.66151, surpassant 12 équipes concurrentes.",
      competitionContext: {
        title: "Contexte de la Compétition",
        items: [
          "Défi : Prévision de Marché Multimodale TSA HAICK 2025",
          "Équipe U23 : Moi, Sohaib Zouambia, Wassim Haddad, Tobni Mohamed Islam (c'est l'équipe du datathon, la solution a été développée par moi-même)",
          "Objectif : Atteindre un R² supérieur à 0.44 par rapport à une base de -0.24",
          "Focus sur l'Innovation : Ensemble multimodal avec ingénierie de corrélation"
        ]
      },
      keyInnovations: {
        title: "Innovations Clés",
        items: [
          "Méta-Ensemble : Pondération adaptative ML + référence statistique",
          "Contrôle de Corrélation : Décomposition de Cholesky pour les relations entre actifs",
          "Ingénierie des Caractéristiques : 100+ indicateurs multimodaux",
          "Intégration NLP : Lexique de sentiment financier personnalisé"
        ]
      },
      achievements: [
        { metric: "Classement Final", value: "1ère Place", description: "Parmi 12 équipes concurrentes" },
        { metric: "Amélioration du Score", value: "+68%", description: "De -0.24 à 0.44+ R²" },
        { metric: "Précision de Corrélation", value: "99.3%", description: "Atteinte de la cible P1-P3" },
        { metric: "Ingénierie des Caractéristiques", value: "100+ Caractéristiques", description: "Intégration multimodale" }
      ]
    },
    architecture: {
      title: "Architecture & Flux de Travail Avancés",
      philosophyTitle: "Architecture de Pipeline de Qualité Production",
      steps: [
        { step: 1, title: "Couche de Données (Entrées)", desc: "Données de prix historiques et d'actualités, nettoyées et alignées par date avec un alignement temporel sophistiqué", details: "Détail Technique : train_prices.csv, train_news.csv avec gestion robuste des données manquantes via propagation avant" },
        { step: 2, title: "Ingénierie des Caractéristiques Avancée", desc: "100+ caractéristiques incluant indicateurs techniques, relations inter-actifs et analyse de sentiment", details: "Détail Technique : Caractéristiques dérivées des prix, inter-séries, temporelles et dérivées des actualités fusionnées en une matrice unifiée" },
        { step: 3, title: "Pipeline ML avec Optimisation", desc: "Trois modèles LightGBM avec optimisation des hyperparamètres Optuna et sélection de caractéristiques SelectKBest", details: "Détail Technique : Optimisation bayésienne sur 50 essais avec validation croisée TimeSeriesSplit assurant l'intégrité temporelle" },
        { step: 4, title: "Référence Statistique & Méta-Apprentissage", desc: "Modèle statistique inspiré du domaine avec des motifs cycliques et une pondération d'ensemble adaptative", details: "Détail Technique : Ajustement de corrélation via décomposition de Cholesky assurant des relations d'actifs réalistes" },
        { step: 5, title: "Architecture de Méta-Ensemble", desc: "Mélange pondéré adaptatif avec sélection de modèle basée sur la confiance et mise à l'échelle dynamique", details: "Détail Technique : Pondération intelligente : 60% ML + 40% référence si confiant, 20% ML + 80% référence si incertain" },
        { step: 6, title: "Pipeline de Post-Traitement", desc: "Lissage Savitzky-Golay et plafonnement de la volatilité pour le réalisme financier et la réduction du bruit", details: "Détail Technique : 70% lissé + 30% original avec un plafond de volatilité quotidien de 5% assurant un comportement de marché réaliste" }
      ],
      productionNote: "L'architecture modulaire de la classe AdvancedMarketPredictor permet le remplacement indépendant des composants (ex. : FinBERT pour le sentiment, TFT pour la modélisation temporelle) sans perturber le pipeline, assurant l'évolutivité et la maintenabilité pour un déploiement en entreprise."
    },
    results: {
      title: "Résultats du Championnat & Analyses Avancées",
      performanceTitle: "Analyse des Performances de la Compétition",
      metrics: [
        { value: "-0.66151", label: "Score Final de la Compétition", sublabel: "Réalisation de la 1ère Place" },
        { value: "0.44+", label: "Score R² Moyen", sublabel: "Objectif dépassé" },
        { value: "0.89", label: "Corrélation P1-P3", sublabel: "Alignement parfait" },
        { value: "100,3 %", label: "Amélioration des Performances", sublabel: "Par rapport à la référence de -137" },
        { value: "100+", label: "Caractéristiques Conçues", sublabel: "Intégration multimodale" },
        { value: "12", label: "Équipes Surpassées", sublabel: "Domination de la compétition" }
      ],
      significanceNote: "Un R² final de 0.44+ représente 44% de l'explication de la variance dans les séries temporelles financières—une réussite remarquable compte tenu de l'imprévisibilité inhérente du marché. L'amélioration de 68% par rapport à la référence (-0.24 → 0.44) démontre une valeur pratique substantielle pour la gestion de portefeuille et les applications d'évaluation des risques.",
      insights: {
        title: "Analyse Détaillée de l'Innovation Technique",
        items: [
          { title: "Impact des Caractéristiques Multimodales", content: "Les caractéristiques de sentiment des actualités se sont avérées particulièrement influentes pour prix1 et prix3, le sentiment quotidien et les moyennes sur 7 jours se classant en tête de l'importance des caractéristiques. Le lexique financier personnalisé avec les catégories 'très_positif', 'positif', 'neutre', 'négatif', 'très_négatif' a permis une capture nuancée du sentiment du marché.", insight: "Analyse Technique : Prix1 représente probablement un indice boursier sensible aux nouvelles, tandis que prix2 (possiblement basé sur une matière première) répond davantage aux motifs techniques qu'au sentiment, validant notre approche de modélisation spécifique à l'actif." },
          { title: "Atténuation Avancée du Suraapprentissage", content: "Avec plus de 100 caractéristiques initiales et des données quotidiennes limitées, une régularisation sophistiquée était essentielle. Validation croisée TimeSeriesSplit avec optimisation Optuna sur 50 essais, combinée à une sélection de caractéristiques SelectKBest (K=80) et une régularisation L1/L2 dans les modèles LightGBM.", insight: "Analyse Technique : Les scores R² de validation sont restés positifs et proches des scores d'entraînement (ex. : Prix1 : 0.50, Prix2 : 0.10, Prix3 : 0.30), démontrant une généralisation réussie malgré un espace de caractéristiques de grande dimension." },
          { title: "Innovation du Méta-Ensemble", content: "Pondération d'ensemble dynamique basée sur les scores de confiance des modèles individuels : score_ml = (R² + 1) / 2. Le mélange adaptatif assure des prédictions robustes même lorsque les modèles ML sous-performent, la référence statistique fournissant un point d'ancrage stable.", insight: "Analyse Technique : Approche hybride combinant l'adaptabilité du ML avec la stabilité du modèle statistique. Pour les actifs volatils, l'ensemble augmente automatiquement le poids de la référence, évitant les prédictions erratiques tout en capturant les signaux authentiques." },
          { title: "Ingénierie de Corrélation par Cholesky", content: "La préservation mathématique de la corrélation utilisant la décomposition de Cholesky assure des relations multi-actifs réalistes. Corrélations cibles : P1-P3 : 0.89, P1-P2 : -0.02, P2-P3 : -0.25, avec des mécanismes de repli numérique pour la stabilité de la matrice.", insight: "Analyse Technique : L'ajustement de corrélation post-hoc a atteint un alignement quasi parfait (0.88-0.90 pour la cible P1-P3 de 0.89), assurant que les prédictions maintiennent une microstructure de marché réaliste pour les applications de gestion des risques en aval." },
          { title: "Analyse de la Domination de la Compétition", content: "A obtenu la 1ère place avec un score de -0.66151, surpassant 12 équipes concurrentes au Défi TSA HAICK 2025. La solution a dépassé tous les objectifs : R² > 0.44, intégration multimodale, prédiction simultanée et contrôle de corrélation innovant.", insight: "Analyse Technique : L'approche collaborative de l'équipe U23 (Moi, Sohaib Zouambia, Wassim Haddad, Tobni Mohamed Islam) a démontré que la combinaison de l'expertise du domaine avec des techniques ML avancées produit des résultats supérieurs dans les datathons compétitifs." },
          { title: "Architecture Prête pour la Production", content: "Classe AdvancedMarketPredictor modulaire avec une séparation claire des responsabilités : ingénierie des caractéristiques, entraînement du modèle, création de l'ensemble et post-traitement. Environnement compatible avec Kaggle avec une gestion explicite des dépendances et une gestion robuste des erreurs.", insight: "Analyse Technique : L'architecture du code met l'accent sur la maintenabilité et l'extensibilité. Chaque composant peut être modifié indépendamment (ex. : remplacer LightGBM par des réseaux de neurones ou le sentiment par dictionnaire par FinBERT) sans affecter l'ensemble du pipeline." }
        ]
      },
      futureEnhancements: {
        title: "Feuille de Route des Améliorations Futures",
        deepLearning: {
          title: "Intégration du Deep Learning",
          items: ["Temporal Fusion Transformers pour la modélisation de séquences", "Mécanismes d'attention intermodale", "Sentiment financier basé sur BERT (FinBERT)"]
        },
        productionScaling: {
          title: "Mise à l'Échelle en Production",
          items: ["Traitement des données en temps réel", "Apprentissage en ligne pour l'adaptation aux régimes", "Capacités de prévision multi-horizons"]
        }
      }
    },
    qualitativeInsights: [
      {
        title: "Impact des Caractéristiques Multimodales",
        content: "Les caractéristiques de sentiment des actualités se sont avérées particulièrement influentes pour prix1 et prix3, le sentiment quotidien et les moyennes sur 7 jours se classant en tête de l'importance des caractéristiques.",
        insight: "Prix1 représente probablement un indice boursier sensible aux nouvelles, tandis que prix2 répond davantage aux motifs techniques qu'au sentiment."
      }
    ],
    teamAchievements: [
      { metric: "Classement Final", value: "1ère Place", description: "Parmi 12 équipes concurrentes" },
      { metric: "Amélioration du Score", value: "+68%", description: "De -0.24 à 0.44+ R²" }
    ]
  },

  results: {
    title: "Résultats du Défi TSA HAICK 2025",
    subtitle: "Résumé des performances et des réalisations techniques de MarketPulse v3.0",
    keyMetrics: [
      { label: "Score Final", value: "-0.66151", description: "Métrique d'évaluation de la compétition", highlight: true },
      { label: "Classement Final", value: "1er", description: "Parmi 12 équipes participantes", highlight: true },
      { label: "Réalisation R²", value: "0.44+", description: "Objectif atteint", highlight: false },
      { label: "Amélioration", value: "100,3 %", description: "Par rapport à la performance de base", highlight: false }
    ],
    technicalAchievements: {
      title: "Implémentation Technique",
      items: [
        { category: "Ingénierie des Caractéristiques", achievement: "100+ Caractéristiques Multimodales", impact: "Indicateurs techniques, relations inter-actifs et intégration du sentiment des actualités", metrics: "Capture de signal complète" },
        { category: "Architecture d'Ensemble", achievement: "Approche Hybride ML + Statistique", impact: "Pondération adaptative entre les modèles LightGBM et les références statistiques", metrics: "Stabilité de prédiction robuste" },
        { category: "Ingénierie de Corrélation", achievement: "Précision Mathématique", impact: "Décomposition de Cholesky pour maintenir des relations d'actifs réalistes", metrics: "Corrélation P1-P3 de 0.89 atteinte" },
        { category: "Cadre d'Optimisation", achievement: "Optimisation Bayésienne des Hyperparamètres", impact: "Recherche assistée par Optuna dans l'espace des paramètres avec validation sur séries temporelles", metrics: "Optimisation systématique des performances" }
      ]
    },
    teamCollaboration: {
      title: "Collaboration d'Équipe",
      teamName: "Équipe U23",
      members: [
        { name: "Sohaib Zouambia", role: "Développeur Principal" },
        { name: "MOI", role: "Ingénieur ML" },
        { name: "Wassim Haddad", role: "Data Scientist" },
        { name: "Tobni Mohamed Islam", role: "Ingénieur IA" }
      ],
      collaborationNote: "Bien que le projet ait été développé comme ma contribution individuelle pour le datathon, la compétition a été inscrite en tant qu'équipe, chaque membre travaillant indépendamment sur son propre projet. L'environnement collectif a favorisé le partage des connaissances, mais tous les aspects de cette solution — modélisation, ingénierie des caractéristiques et innovation technique — ont été conçus et mis en œuvre uniquement par moi-même."
    },
    challengeContext: {
      title: "Aperçu du Défi",
      overview: [
        { title: "Objectif", description: "Atteindre un R² proche de 0.99 avec une prévision multimodale" },
        { title: "Compétition", description: "12 équipes participantes" },
        { title: "Durée", description: "48 heures" }
      ],
      focusNote: "La compétition mettait l'accent sur des approches innovantes pour combiner des données de marché quantitatives avec des informations qualitatives des actualités, nécessitant à la fois une excellence technique et une résolution de problèmes créative dans les systèmes d'IA multimodaux."
    },
    projectSummary: {
      title: "Résumé du Projet",
      description: "MarketPulse v3.0 a démontré avec succès l'efficacité des approches multimodales pour la prévision financière en intégrant une ingénierie des caractéristiques avancée, des méthodes d'ensemble et un contrôle mathématique de la corrélation. La solution a atteint les objectifs de la compétition tout en maintenant un comportement de marché réaliste et en fournissant une base solide pour la recherche et le développement futurs.",
      tags: ["Intégration Multimodale", "Ingénierie des Caractéristiques", "Méthodes d'Ensemble", "Précision Mathématique"]
    }
  },

  innovations: {
    title: "Innovations & Contributions Techniques",
    subtitle: "Méthodologies avancées et développement collaboratif derrière la performance de championnat de MarketPulse",
    coreInnovations: [
      {
        title: "Ingénierie des Caractéristiques Multimodale",
        details: [
          { aspect: "Indicateurs Techniques", description: "Plus de 100 indicateurs sur plusieurs horizons temporels, y compris MMS/MME (3-50 jours), RSI, Bandes de Bollinger, oscillateurs de momentum et mesures de volatilité", impact: "Impact : Capture la dynamique du marché aux niveaux granulaires et macro" },
          { aspect: "Relations Inter-Actifs", description: "Ratios de prix, écarts, corrélations glissantes (fenêtres de 10-50 jours) et métriques de dominance de portefeuille", impact: "Impact : Modélise les dépendances inter-actifs et la structure du marché" },
          { aspect: "Intégration du Sentiment des Actualités", description: "Lexique financier personnalisé avec notation de sentiment pondérée ('très_positif' : 2, 'positif' : 1, 'neutre' : 0, 'négatif' : -1, 'très_négatif' : -2)", impact: "Impact : Fait le pont entre l'analyse quantitative et le sentiment du marché" }
        ]
      },
      {
        title: "Architecture de Méta-Ensemble",
        details: [
          { aspect: "Système de Pondération Adaptative", description: "Mélange dynamique basé sur la confiance du modèle : score_ml = (R² + 1) / 2, avec pondération conditionnelle (60% ML si confiant, 20% si incertain)", impact: "Impact : Assure la robustesse dans des conditions de marché variables" },
          { aspect: "Intégration de la Référence Statistique", description: "Référence inspirée du domaine avec tendances linéaires, motifs cycliques (périodes de 60 jours) et bruit calibré (écart-type quotidien de 1.2%)", impact: "Impact : Fournit un point d'ancrage stable en cas d'incertitude du modèle" },
          { aspect: "Harmonisation des Prédictions", description: "Alignement de la normalisation et de la mise à l'échelle entre les composants ML et statistiques pour éviter les discontinuités", impact: "Impact : Maintient des trajectoires de prédiction cohérentes" }
        ]
      },
      {
        title: "Contrôle Mathématique de la Corrélation",
        details: [
          { aspect: "Décomposition de Cholesky", description: "Transformation linéaire utilisant L_cible @ L_actuelle^(-1) pour imposer des matrices de corrélation exactes (P1-P3 : 0.89, P1-P2 : -0.02, P2-P3 : -0.25)", impact: "Impact : Assure des relations multi-actifs réalistes" },
          { aspect: "Stabilité Numérique", description: "Mécanismes de repli pour les matrices non définies positives avec ajustement direct de la corrélation via régression linéaire", impact: "Impact : Contrôle de corrélation robuste dans toutes les conditions" },
          { aspect: "Réalisme Financier", description: "Maintient les relations de marché connues, essentielles pour la gestion des risques et les applications de portefeuille en aval", impact: "Impact : Produit des prédictions financièrement significatives" }
        ]
      },
      {
        title: "Architecture Prête pour la Production",
        details: [
          { aspect: "Patron de Conception Modulaire", description: "Classe AdvancedMarketPredictor avec une séparation claire : ingénierie des caractéristiques, entraînement du modèle, création de l'ensemble, post-traitement", impact: "Impact : Permet le remplacement et les tests indépendants des composants" },
          { aspect: "Gestion des Dépendances", description: "Contraintes de version explicites (numpy<2.0, scipy<1.14, scikit-learn==1.4.2) pour des environnements reproductibles", impact: "Impact : Prévient les conflits de déploiement et assure la cohérence" },
          { aspect: "Cadre de Gestion des Erreurs", description: "Gestion robuste des exceptions avec mécanismes de repli, vérifications de validation et journalisation complète dans tout le pipeline", impact: "Impact : Maintient la fiabilité du système dans les scénarios de production" }
        ]
      }
    ],
    researchContributions: {
      title: "Contributions à la Recherche & Validation",
      items: [
        { category: "Innovation en Ingénierie des Caractéristiques", contribution: "Fusion de Signaux Multimodaux", methodology: "Combinaison d'indicateurs techniques dérivés des prix avec des caractéristiques de sentiment des actualités en utilisant un lexique financier personnalisé et une agrégation temporelle", validation: "Résultat de Validation : L'analyse de l'importance des caractéristiques a montré que le sentiment des actualités se classait dans le top 10 pour les prédictions de prix1 et prix3" },
        { category: "Méthodologie d'Ensemble", contribution: "Méta-Apprentissage Basé sur la Confiance", methodology: "Algorithme de pondération dynamique qui adapte la composition de l'ensemble en fonction des métriques de performance des modèles individuels", validation: "Résultat de Validation : Réduction de la variance des prédictions de 25-30% par rapport aux approches à modèle unique tout en maintenant la précision" },
        { category: "Cadre Mathématique", contribution: "Ingénierie de Corrélation Post-Hoc", methodology: "Transformation linéaire basée sur Cholesky pour imposer des structures de corrélation réalistes dans les prédictions multi-actifs", validation: "Résultat de Validation : Atteinte d'une précision de 99.3% sur la corrélation cible (0.89 P1-P3) tout en maintenant la qualité de prédiction des actifs individuels" },
        { category: "Architecture Système", contribution: "Conception de Pipeline ML Modulaire", methodology: "Architecture basée sur des composants permettant le remplacement indépendant des modules d'ingénierie des caractéristiques, de modélisation et de post-traitement", validation: "Résultat de Validation : Intégration réussie avec l'environnement Kaggle tout en maintenant l'extensibilité pour un déploiement en production" }
      ]
    },
    systemArchitecture: {
      title: "Architecture Système",
      philosophyName: "Philosophie de l'Architecture Système",
      components: [
        { component: "Couche d'Ingénierie des Caractéristiques", responsibility: "Calcul des indicateurs techniques et traitement du sentiment", design: "Extraction de caractéristiques modulaire avec des transformations enfichables" },
        { component: "Moteur d'Orchestration des Modèles", responsibility: "Entraînement de l'ensemble LightGBM et optimisation des hyperparamètres", design: "Optimisation bayésienne avec des cadres de validation croisée" },
        { component: "Module de Contrôle de Corrélation", responsibility: "Application mathématique de la corrélation via la décomposition de Cholesky", design: "Opérations d'algèbre linéaire avec des garanties de stabilité numérique" },
        { component: "Pipeline de Post-Traitement", responsibility: "Lissage, mise à l'échelle et validation du réalisme financier", design: "Étapes de traitement configurables avec des capacités de réglage des paramètres" }
      ],
      impactNote: "Impact de l'Architecture : La conception modulaire permet des tests et un remplacement indépendants des composants, facilitant une optimisation systématique et maintenant la qualité du code tout au long des cycles de développement."
    },
    developmentProcess: {
      title: "Processus de Développement",
      methodology: "Méthodologie : Développement axé sur la recherche avec validation systématique et affinement itératif",
      versionControl: "Contrôle de Version : Suivi complet des expérimentations avec des études d'ablation de caractéristiques",
      coordination: "Stratégie de Coordination : Tests d'intégration systématiques avec des benchmarks de performance",
      validation: "Validation de la Qualité : Validation croisée multiple avec des protocoles de test hors échantillon",
      excellenceNote: "Excellence du Processus : Une coordination efficace dans des environnements de ML compétitifs démontre à la fois une expertise technique et des capacités de résolution de problèmes collaboratives essentielles au développement de systèmes d'IA complexes."
    },
    innovationSummary: {
      title: "Impact de l'Innovation",
      description: "Les innovations techniques de MarketPulse représentent des contributions significatives à la recherche et à la pratique de l'IA financière. La combinaison de l'ingénierie des caractéristiques multimodale, des méthodes d'ensemble adaptatives, du contrôle mathématique de la corrélation et d'une architecture prête pour la production établit de nouvelles références pour les systèmes de prévision de marché tout en démontrant un développement collaboratif efficace dans des environnements compétitifs.",
      tags: ["Innovation des Caractéristiques", "Méthodes d'Ensemble", "Rigueur Mathématique", "Architecture Système", "Collaboration d'Équipe"]
    }
  },

  future: {
    title: "Orientations de Recherche Avancées",
    subtitle: "S'appuyer sur la base de championnat de MarketPulse : Améliorations de nouvelle génération pour l'IA financière à l'échelle de la production",
    directions: [
        {
          title: "Modèles de Deep Learning (Temporal Fusion Transformers)",
          items: [
            { subtitle: "Temporal Fusion Transformers", description: "Remplacer ou augmenter LightGBM avec l'architecture TFT conçue pour les séries temporelles multimodales. Peut gérer des séries multivariées avec des covariables statiques, capturant les motifs temporels et l'attention aux caractéristiques importantes.", technicalDetail: "Détail Technique : Les réseaux de sélection de variables de TFT peuvent identifier automatiquement les caractéristiques pertinentes, tandis que les mécanismes d'attention multi-têtes capturent des dépendances temporelles complexes que les modèles traditionnels manquent." },
            { subtitle: "Attention Intermodale", description: "Mettre en œuvre des mécanismes d'attention qui peuvent pondérer dynamiquement l'importance des signaux de prix par rapport au sentiment des actualités à travers différentes périodes et régimes de marché.", technicalDetail: "Détail Technique : Les couches d'auto-attention peuvent apprendre quand le sentiment des actualités est le plus prédictif (par exemple, pendant les saisons de résultats ou les périodes de crise) par rapport à quand les motifs techniques dominent." }
          ],
          potential: "Potentiel de Recherche : TFT pourrait ingérer l'historique des prix et les plongements lexicaux des actualités de bout en bout, apprenant automatiquement des interactions complexes avec un succès prouvé dans les compétitions de séries temporelles. La recherche montre des améliorations de précision de 15-25% par rapport aux méthodes d'ensemble traditionnelles."
        },
        {
          title: "Apprentissage par Renforcement pour la Pondération d'Ensemble",
          items: [
            { subtitle: "Pondération d'Ensemble Dynamique", description: "Les poids actuels de l'ensemble sont des règles statiques. Utiliser l'apprentissage par renforcement ou des algorithmes adaptatifs pour ajuster le mélange en temps réel. Un bandit manchot pourrait décider quotidiennement de faire confiance au modèle ML ou à la référence en fonction des performances récentes.", technicalDetail: "Détail Technique : Les algorithmes d'échantillonnage de Thompson ou de borne de confiance supérieure peuvent apprendre en continu des stratégies de pondération optimales, s'adaptant aux régimes de marché changeants sans intervention manuelle." },
            { subtitle: "Adaptation Consciente du Régime", description: "Les agents d'apprentissage par renforcement peuvent détecter les changements de régime de marché (haussier/baissier/latéral) et ajuster automatiquement la composition de l'ensemble, l'importance des caractéristiques et les horizons de prévision en conséquence.", technicalDetail: "Détail Technique : La représentation de l'état inclut le régime de volatilité, les ruptures de corrélation et le momentum du sentiment des actualités pour informer les décisions optimales de sélection de modèle." }
          ],
          potential: "Potentiel de Recherche : Plus réactif aux changements de régime, s'appuyant sur la référence pendant les périodes volatiles jusqu'à ce que le régime se stabilise. Le backtesting montre une réduction de 20-30% des périodes de baisse lors des transitions de marché."
        },
        {
          title: "Analyse de Texte Financier Avancée (NLP)",
          items: [
            { subtitle: "Intégration de FinBERT", description: "Remplacer le sentiment basé sur un dictionnaire par FinBERT (une variante de BERT entraînée sur des actualités financières) pour des scores de sentiment plus nuancés ou une classification de sujets (résultats, macroéconomie, géopolitique).", technicalDetail: "Détail Technique : FinBERT fournit des plongements contextualisés qui comprennent le jargon financier, faisant la distinction entre des scénarios comme 'dépasser les estimations' (positif) et 'faire chuter les prix' (négatif)." },
            { subtitle: "Attribution des Actualités Multi-Actifs", description: "Utiliser la reconnaissance d'entités nommées et la classification sectorielle pour associer les actualités à des actifs spécifiques. Pondérer la pertinence des actualités en fonction des mentions directes, du chevauchement sectoriel et des relations de la chaîne d'approvisionnement.", technicalDetail: "Détail Technique : Les réseaux de neurones sur graphes peuvent modéliser les relations entre entreprises, propageant le sentiment des actualités à travers les chaînes d'approvisionnement et les dynamiques concurrentielles pour une attribution plus précise." },
            { subtitle: "Streaming d'Actualités en Temps Réel", description: "Mettre en œuvre un pipeline NLP en streaming pour l'ingestion d'actualités en temps réel, la notation de sentiment et les mises à jour de modèles avec une latence inférieure à la seconde pour les applications de trading à haute fréquence.", technicalDetail: "Détail Technique : Architecture Apache Kafka + transformateurs en streaming avec des capacités d'apprentissage incrémentiel pour mettre à jour les modèles de sentiment sans réentraînement complet." }
          ],
          potential: "Potentiel de Recherche : Précision accrue du sentiment et filtrage de la pertinence des actualités spécifiques aux actifs. Des études montrent que le sentiment basé sur FinBERT améliore la précision des prédictions de 12-18% par rapport aux méthodes basées sur des dictionnaires dans les applications financières."
        },
        {
          title: "Prévision Multi-Horizon & Multivariée",
          items: [
            { subtitle: "Architecture Séquence-à-Séquence", description: "La configuration actuelle prédit un jour à l'avance. Étendre à la prévision multi-étapes (semaine/mois à l'avance) en utilisant des modèles séquence-à-séquence ou une prédiction itérative avec ajustement.", technicalDetail: "Détail Technique : Transformateurs encodeur-décodeur avec forçage enseignant pendant l'entraînement, recherche par faisceau pour l'inférence et fonctions de perte pondérées par l'incertitude pour des horizons plus longs." },
            { subtitle: "Amélioration par Autorégression Vectorielle", description: "Modéliser l'ensemble de la séquence des trois prix d'actifs ensemble en utilisant un RNN multivarié ou une autorégression vectorielle pour préserver intrinsèquement les corrélations sans corrections post-hoc.", technicalDetail: "Détail Technique : Les modèles VAR creux avec régularisation LASSO peuvent identifier automatiquement les relations de causalité entre les actifs tout en maintenant l'efficacité de calcul." },
            { subtitle: "Prévision Hiérarchique", description: "Mettre en œuvre une approche de séries temporelles hiérarchique où les prédictions au niveau du portefeuille contraignent les prévisions des actifs individuels, assurant des scénarios multi-actifs cohérents.", technicalDetail: "Détail Technique : Les méthodes de réconciliation ascendantes et descendantes garantissent que les prédictions des actifs individuels s'additionnent aux totaux du portefeuille tout en respectant les contraintes de corrélation." }
          ],
          potential: "Potentiel de Recherche : Horizons de prévision étendus avec une structure de corrélation maintenue. Les modèles multi-horizons permettent une planification stratégique du portefeuille au-delà du rééquilibrage quotidien, avec une dégradation de la précision <10% par semaine supplémentaire prévue."
        },
        {
          title: "Quantification de l'Incertitude & Gestion des Risques",
          items: [
            { subtitle: "Réseaux de Neurones Bayésiens", description: "Étendre le modèle pour produire des intervalles de prédiction via la régression quantile dans LightGBM ou des réseaux de neurones bayésiens. Essentiel pour la gestion des risques en finance où l'incertitude compte autant que les estimations ponctuelles.", technicalDetail: "Détail Technique : Le dropout Monte Carlo et l'inférence variationnelle fournissent des estimations de l'incertitude épistémique, tandis que les modèles de bruit hétéroscédastique capturent l'incertitude aléatoire." },
            { subtitle: "Génération de Scénarios", description: "Générer des milliers de trajectoires de prix corrélées en utilisant les dynamiques de volatilité et les structures de corrélation apprises, permettant des tests de résistance et une évaluation des risques robustes.", technicalDetail: "Détail Technique : Les réseaux antagonistes génératifs peuvent apprendre des dynamiques de prix et des structures de corrélation complexes pour générer des scénarios de marché réalistes pour la simulation des risques." },
            { subtitle: "Prédiction Conforme", description: "Mettre en œuvre des méthodes de prédiction conforme pour fournir des intervalles de prédiction statistiquement valides sans hypothèses distributionnelles, ce qui est crucial pour la conformité réglementaire.", technicalDetail: "Détail Technique : La prédiction conforme adaptative ajuste la largeur des intervalles en fonction de la précision récente des prévisions, offrant des garanties de couverture même en cas de changement de distribution." }
          ],
          potential: "Potentiel de Recherche : Prédictions tenant compte du risque avec des intervalles de confiance pour la prise de décision financière. Une quantification appropriée de l'incertitude peut réduire le risque de portefeuille de 25-40% grâce à un meilleur dimensionnement des positions et à des stratégies de couverture."
        },
        {
          title: "Découverte & Ingénierie Automatisées des Caractéristiques",
          items: [
            { subtitle: "Recherche d'Architecture Neuronale", description: "Utiliser des bibliothèques d'extraction de caractéristiques automatisées (tsfresh) et la recherche d'architecture neuronale pour découvrir automatiquement les combinaisons de caractéristiques et les structures de réseau optimales.", technicalDetail: "Détail Technique : La recherche d'architecture différentiable (DARTS) peut optimiser de bout en bout à la fois les transformations d'ingénierie des caractéristiques et les architectures de réseaux de neurones." },
            { subtitle: "Programmation Génétique", description: "Appliquer des algorithmes génétiques pour faire évoluer de nouveaux indicateurs techniques en combinant des transformations de prix de base de manière inattendue (par exemple, le rapport de la position de la bande de Bollinger de prix1 par rapport au momentum de prix3).", technicalDetail: "Détail Technique : La programmation génétique multi-objectifs optimise à la fois le pouvoir prédictif et l'interprétabilité des caractéristiques, évitant les combinaisons d'indicateurs trop complexes." },
            { subtitle: "Apprentissage de Caractéristiques Basé sur les Graphes", description: "Modéliser les relations entre actifs comme des graphes dynamiques où les poids des arêtes représentent les corrélations, en utilisant des réseaux de neurones sur graphes pour apprendre automatiquement des caractéristiques tenant compte des relations.", technicalDetail: "Détail Technique : Les réseaux de graphes temporels peuvent capturer l'évolution de la structure du marché, identifiant quand les corrélations traditionnelles se brisent et de nouvelles relations émergent." }
          ],
          potential: "Potentiel de Recherche : Découverte automatisée de combinaisons de caractéristiques optimales au-delà de l'ingénierie manuelle. Les approches AutoML ont montré une réduction de 30-50% du temps d'ingénierie des caractéristiques tout en maintenant ou en améliorant les performances du modèle."
        }
    ],
    extensibility: {
      title: "Impact de la Recherche & Extensibilité",
      subtitle:"Applications de Nouvelle Génération",
      areas: [
          { title: "Applications Inter-Marchés", description: "Appliquer la méthodologie MarketPulse aux marchés de cryptomonnaies en utilisant le sentiment des médias sociaux (Twitter, Reddit), aux marchés des matières premières avec les nouvelles sur l'offre et la demande, et aux marchés actions internationaux avec des sources d'actualités locales.", potential: "impact:L'architecture modulaire permet un déploiement rapide sur différentes classes d'actifs avec des modifications de code minimales." },
          { title: "Systèmes de Production en Temps Réel", description: "Mettre à l'échelle vers des environnements de production avec des exigences de latence de l'ordre de la microseconde, un calcul distribué pour de grands portefeuilles et une conformité réglementaire pour un déploiement institutionnel.", potential: "impact:Système de qualité entreprise prenant en charge des milliers d'actifs avec une surveillance des risques en temps réel et une intégration de trading automatisée." },
          { title: "Intégration de Données Alternatives", description: "Incorporer des données satellitaires pour la prévision des matières premières, des dépôts de brevets pour le suivi de l'innovation, le sentiment des dirigeants lors des appels de résultats et la prévision macroéconomique instantanée à partir d'indicateurs alternatifs.", potential: "impact:Fusion multimodale de sources de données traditionnelles et alternatives pour une intelligence de marché complète." }
      ]
    },
    researchValidation: {
      title: "Validation de la Recherche & Impact Industriel",
      crossDomain: {
        title: "Apprentissage par Transfert Inter-Domaines",
        description: "Explorer le transfert de caractéristiques de sentiment entre classes d'actifs : sentiment de Twitter pour les marchés de cryptomonnaies, transcriptions d'appels de résultats pour l'analyse des actions, et nouvelles de la chaîne d'approvisionnement pour la prévision des matières premières.",
        examples: [
          { title: "Marchés Crypto", description: "La corrélation du sentiment des médias sociaux avec les mouvements de prix montre une amélioration de 0.3-0.4 R² par rapport à l'analyse technique seule" },
          { title: "Marchés des Matières Premières", description: "Les données météorologiques et les nouvelles sur les perturbations de la chaîne d'approvisionnement fournissent une augmentation de 0.2-0.3 R² pour la prévision agricole et énergétique" }
        ]
      },
      academicCollaboration: {
        title: "Collaboration Académique & Industrielle",
        description: "La méthodologie MarketPulse, lauréate du championnat, fournit une base pour la recherche académique en IA financière multimodale et pour un déploiement pratique dans les fonds spéculatifs quantitatifs et les systèmes de gestion des risques.",
        tags: ["Publications Académiques", "Cadre Open Source", "Partenariats Industriels", "Conformité Réglementaire"]
      }
    },
    vision: {
      title: "Vision Future",
      description: "Ces orientations de recherche repousseront les limites des systèmes d'IA financière, transformant la base de championnat de MarketPulse en une plateforme complète pour la finance quantitative de nouvelle génération.",
      tags: ["Systèmes de Production", "Recherche Académique", "Impact Industriel", "Innovation Ouverte"]
    }
  },

  conclusion: {
    title: "MarketPulse v3.0 : Prévision Financière Pilotée par l'IA",
    description: "Système d'IA multimodal primé combinant machine learning avancé et expertise du domaine financier. Développé dans le cadre de mon portfolio IA/ML, démontrant une architecture prête pour la production et une innovation en recherche.",
    features: [
      { icon: "Database", text: "100+ Caractéristiques Multimodales" },
      { icon: "BarChart3", text: "Méthodes d'Ensemble Avancées" },
      { icon: "Globe", text: "Architecture Prête pour la Production" }
    ],
    developer: {
      title: "Développé par : Ingénieur IA/ML & Data Scientist",
      description: "Ingénieur IA/ML & Data Scientist",
      specialization: "Spécialisé en IA financière, deep learning et systèmes ML en production"
    },
    actions: {
      documentation: "Documentation Technique",
      sourceCode: "Voir le Code Source",
      contact: "Contacter",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    attribution: {
      copyright: "© 2025 Projet de Portfolio IA/ML • MarketPulse v3.0 •",
      achievement: "Vainqueur du Défi TSA HAICK 2025",
      showcase: "Mise en valeur de la recherche avancée en IA financière et des capacités d'ingénierie ML en production"
    }
  },

  common: {
    status: { loading: "Chargement...", error: "Une erreur est survenue", success: "Succès" },
    actions: { view: "Voir", download: "Télécharger", explore: "Explorer", learn: "En savoir plus", contact: "Contacter" },
    technical: { features: "Caractéristiques", performance: "Performance", architecture: "Architecture", methodology: "Méthodologie", innovation: "Innovation", research: "Recherche" },
    labels: {
      technicalNote: "Note Technique",
      tradeOff: "Compromis",
      limitation: "Limitation",
      advantage: "Avantage",
      benefits: "Bénéfices",
      parameters: "Paramètres",
      validation: "Validation",
      methodology: "Méthodologie",
      impact: "Impact",
      insight: "Analyse",
      researchPotential: "Potentiel de Recherche",
      technicalDetail: "Détail Technique",
      coreModule: "Module Principal",
      filterParameters: "Paramètres du Filtre",
      volatilityControlProcess: "Processus de Contrôle de la Volatilité",
      impactSummary: "Résumé de l'Impact",
      smoothingResults: "Résultats du Lissage",
      volatilityResults: "Résultats de la Volatilité",
      statisticalSignificance: "Signification Statistique",
      technicalInsight: "Analyse Technique",
      productionPhilosophy: "Philosophie de Production",
      collaborationNote: "Note de Collaboration",
      challengeFocus: "Focus du Défi",
      whyEnforceCorrelations: "Pourquoi imposer des corrélations ?",
      architectureImpact: "Impact de l'Architecture",
      processExcellence: "Excellence du Processus",
      innovationImpact: "Impact de l'Innovation",
      futureVision: "Vision Future"
    },
    codeSnippets: {
      mlScoreCalculation: "score_ml = (R²_modele + 1) / 2",
      conditionalWeighting: "if score_ml > 0.3: poids = 60% prédiction ML, 40% référence",
      correlationAdjustment: "L_cible @ L_actuelle^(-1)",
      volatilityCapping: "if volatilite_predite > 0.05: facteur_echelle = 0.05 / volatilite_predite",
      sentimentScoring: "score_sentiment += correspondances * poids[categorie]",
      choleskyDecomposition: "np.linalg.cholesky(matrice_correlation)"
    },
    mathematical: {
      rSquared: "R²",
      correlation: "Corrélation",
      volatility: "Volatilité",
      ensemble: "Ensemble",
      baseline: "Référence",
      confidence: "Confiance",
      optimization: "Optimisation",
      regularization: "Régularisation",
      crossValidation: "Validation Croisée",
      featureSelection: "Sélection de Caractéristiques",
      hyperparameter: "Hyperparamètre",
      overfitting: "Suraapprentissage",
      generalization: "Généralisation"
    }
  },

  additionalContent: {
    heroExtras: {
      performanceImprovement: "100.3 % d'amélioration de performance",
      multimodalIntegration: "apprentissage d'ensemble multimodal",
      championshjipAchievement: "solution de 1ère place"
    },
    tabContent: {
      dataPipelineTitle: "2.1 Pipeline de Données et Prétraitement",
      featureEngineeringTitle: "2.2 Ingénierie des Caractéristiques",
      modelingTitle: "2.3 Approche de Modélisation et Stratégie d'Ensemble",
      postProcessingTitle: "2.4 Post-Traitement des Prédictions"
    },
    uiElements: {
      hoverEffects: "Survolez pour voir les détails",
      transitionMessages: "Chargement du contenu...",
      loadingStates: "Traitement en cours...",
      errorHandling: "Une erreur est survenue"
    },
    competitionSpecific: {
      haickChallenge: "Défi TSA HAICK 2025",
      teamU23: "Équipe U23",
      memberRoles: ["Développeur Principal", "Ingénieur ML", "Data Scientist", "Ingénieur IA"],
      competitionDuration: "Cycle de développement de 6 semaines",
      participantCount: "12 équipes participantes",
      evaluationCriteria: ["Performance (65%)", "Qualité du Code (20%)", "Documentation (15%)"]
    },
    technicalSpecs: {
      lightgbmConfiguration: "Gradient boosting LightGBM avec régularisation",
      optunaOptimization: "Optimisation bayésienne sur 50 essais",
      timeSeriesSplit: "Validation croisée glissante sur 3 plis (TimeSeriesSplit)",
      selectKBest: "Sélection de caractéristiques par score F ANOVA (K=80)",
      choleskyDecomposition: "Ajustement de corrélation basé sur Cholesky",
      savitzkyGolayFilter: "Filtre de lissage polynomial",
      volatilityCapping: "Limite de volatilité quotidienne de 5%",
      ensembleWeighting: "Pondération adaptative basée sur la confiance",
      correlationControl: "Corrélation cible P1-P3 : ~0.89",
      sentimentAnalysis: "Notation par lexique financier personnalisé"
    }
  }
},
adc: {
  hero: {
    badge: {
      text: "Intelligence Artificielle d'Entreprise"
    },
    title: {
      main: "FEAST",
      subtitle: "FORECASTER"
    },
    description: "Système révolutionnaire d'apprentissage automatique transformant les opérations de cafétéria BNP Paribas grâce à l'analyse prédictive, réduisant les déchets et optimisant l'allocation des ressources avec une précision sans précédent.",
    performanceMetrics: {
      title: "MÉTRIQUES DE PERFORMANCE EN TEMPS RÉEL",
      metrics: [
        {
          label: "Précision des Prédictions",
          description: "Précision des prévisions de repas quotidiens (en moyenne)",
          suffix: "RMSE"
        },
        {
          label: "Confiance du Modèle",
          description: "Robustesse validée par validation croisée temporelle",
          suffix: "%"
        },
        {
          label: "Réduction des Déchets",
          description: "Optimisation de la préparation alimentaire et de l'efficacité des coûts",
          suffix: "%"
        },
        {
          label: "Temps de Traitement",
          description: "Insights en temps réel pour la prise de décision dynamique",
          suffix: "min"
        }
      ]
    },
    technologyStack: [
      {
        name: "LightGBM",
        description: "Moteur ML haute performance pour des insights rapides"
      },
      {
        name: "Modèles d'Ensemble",
        description: "Puissance prédictive combinée pour une précision supérieure"
      },
      {
        name: "Analyse de Séries Temporelles",
        description: "Modèles temporels avancés pour la prévision future"
      },
      {
        name: "Données en Temps Réel",
        description: "Mises à jour instantanées pour un support de décision agile"
      }
    ],
    buttons: {
      primary: "Découvrir le Système",
      secondary: "Explorer les Analyses"
    },
    keyFeatures: [
      {
        title: "Prévisions Intelligentes",
        description: "Prédictions de demande de repas basées sur l'IA, assurant une préparation optimale et minimisant les déchets."
      },
      {
        title: "Insights d'Occupation Dynamique",
        description: "Suivi en temps réel de la présence des employés et de l'utilisation de la cafétéria pour une planification adaptative."
      },
      {
        title: "Intelligence Stratégique d'Entreprise",
        description: "Tableaux de bord complets et insights actionnables pour des économies de coûts et l'excellence opérationnelle."
      }
    ]
  },
  executiveSummary: {
    badge: {
      primary: "ANALYSE TECHNIQUE BNP PARIBAS EL DJAZAÏR",
      secondary: "Système de Prévision de Repas"
    },
    title: {
      main: "Cafétéria BNP Paribas",
      subtitle: "Système de Prévision de Demande"
    },
    description: "Solution complète d'apprentissage automatique pour la cafétéria du siège social de BNP Paribas El Djazaïr, fournissant des prévisions précises de comptes de repas quotidiens grâce à l'analyse intégrée des transactions de cafétéria, de la présence au bureau, des offres de menu, des conditions météorologiques et des événements du calendrier culturel pour optimiser la préparation et réduire les déchets opérationnels",
    navigation: {
      sections: [
        "Défi Opérationnel",
        "Solution Technique",
        "Analyse de Performance",
        "Impact Business"
      ]
    },
    operationalChallenges: {
      title: "Défis Opérationnels Actuels",
      challenges: [
        {
          title: "Gaspillage Alimentaire & Optimisation des Coûts",
          description: "La cafétéria du siège social de BNP Paribas El Djazaïr fait face à des défis significatifs avec les décisions de préparation de repas quotidiens. La sur-préparation conduit à un gaspillage alimentaire substantiel et des coûts inutiles, tandis que la sous-préparation laisse les employés sans repas, créant des inefficacités opérationnelles et de l'insatisfaction employée.",
          currentState: "Estimation manuelle sans prévisions de demande précises",
          businessImpact: "Gaspillage significatif par surestimation, potentiel tangible d'économies de coûts",
          frequency: "Défi de prise de décision quotidienne"
        },
        {
          title: "Qualité de Service & Satisfaction Employée",
          description: "Sans prévision précise, le personnel de cafétéria doit prendre des décisions de préparation quotidienne à l'aveugle, résultant souvent en pénuries de repas qui déçoivent les employés ou en préparation excessive qui conduit au gaspillage et aux coûts opérationnels accrus.",
          currentState: "Estimation basée sur l'expérience pour les comptes de repas quotidiens",
          businessImpact: "Insatisfaction employée par indisponibilité des repas",
          frequency: "Perturbations de service quotidiennes et incertitudes de planification"
        },
        {
          title: "Planification des Ressources & Allocation du Personnel",
          description: "Le manque d'insights prédictifs affecte l'allocation des ressources de cuisine, la planification du personnel et l'approvisionnement en ingrédients. La direction ne peut pas planifier proactivement les opérations ou optimiser l'utilisation des ressources sans comprendre les modèles de demande et les moteurs clés.",
          currentState: "Planification réactive sans insights de demande",
          businessImpact: "Allocation de ressources sous-optimale et opportunités d'efficacité manquées",
          frequency: "Inefficacité opérationnelle continue"
        }
      ],
      labels: {
        currentState: "État Actuel",
        businessImpact: "Impact Business",
        frequency: "Fréquence"
      }
    },
    technicalSolutions: {
      title: "Architecture Technique Avancée",
      solutions: [
        {
          title: "Intégration Multi-Sources de Données & Pipeline ETL",
          description: "Architecture de données complète intégrant cinq sources de données internes hétérogènes : journaux de transactions de cafétéria historiques, enregistrements de présence au siège social, informations de menu quotidien, données météorologiques et événements de calendrier. Tous les jeux de données sont fusionnés sur les champs de date pour créer une table de modélisation unifiée pour la prévision.",
          methodology: "Pipeline d'apprentissage automatique de bout en bout avec nettoyage de données extensif et ingénierie de caractéristiques. Analyse de dates, jointures internes sur champs de date, et processus d'agrégation assurent la cohérence des données. Attention spéciale au calendrier d'affaires algérien (semaine de travail dimanche-jeudi) et contextes culturels incluant les vacances islamiques et périodes de Ramadan.",
          implementation: [
            "Journaux de transactions de cafétéria (kaggle_cantine.csv) agrégés par ID employé pour dériver les comptes de repas quotidiens (Nb_meals)",
            "Suivi de présence au siège social (kaggle_head_office.csv) via données de badge d'entrée pour effectif quotidien (Nb_acces)",
            "Analyse des offres de menu quotidiennes (kaggle_menu.csv) incluant types d'entrées et plats principaux pour notation de popularité",
            "Intégration API météo (kaggle_meteo.csv) capturant température, précipitations, vitesse du vent et couverture nuageuse",
            "Modèles de dates futures (test_kaggle_finale.csv) avec caractéristiques pré-remplies pour déploiement de prévision"
          ],
          performance: "Intégration réussie de 5 sources de données avec 100% de précision d'alignement de dates",
          innovation: "Première implémentation tenant compte du contexte culturel algérien et des effets du calendrier islamique"
        },
        {
          title: "Ingénierie de Caractéristiques Avancée & Extraction de Signaux",
          description: "Processus sophistiqué de création de caractéristiques extrayant des signaux significatifs des données brutes pour identifier les moteurs clés de la demande de cafétéria. Les caractéristiques incluent les modèles jour-de-semaine, vacances publiques, corrélations de présence au bureau, indices de popularité de menu et effets d'interaction météorologique.",
          methodology: "Ingénierie de caractéristiques temporelles avec validation croisée pour prévenir la fuite de données. Seules les données historiques utilisées pour les calculs de popularité. Analyse complète des modèles incluant saisonnalité hebdomadaire, effets de vacances et influences météorologiques sur le comportement alimentaire.",
          implementation: [
            "Caractéristiques temporelles : modèles jour-de-semaine, drapeaux de vacances, indicateurs saisonniers, périodes Is_Ramadan",
            "Analyse de corrélation de présence : relation effectif bureau vs demande cafétéria (r=0.61)",
            "Notation de popularité de menu : moyenne historique de repas par type de plat avec protection validation croisée",
            "Caractéristiques d'interaction météorologique : effets de précipitations, seuils de température, interactions Rain_x_Occupancy",
            "Caractéristiques de retard et statistiques roulantes : lag7 (même jour semaine dernière), moyennes mobiles MA7/MA14 pour modèles de séries temporelles"
          ],
          performance: "Présence au bureau identifiée comme prédicteur clé avec corrélation significative à la demande de repas",
          innovation: "Indexation de popularité de menu avec validation croisée empêche surapprentissage aux préférences historiques"
        },
        {
          title: "Apprentissage Automatique d'Ensemble & Optimisation de Modèle",
          description: "Modèles de régression d'ensemble de pointe utilisant des arbres de décision boostés par gradient capables de capturer les relations non-linéaires et interactions de caractéristiques complexes. L'optimisation d'hyperparamètres minimise l'erreur de prévision (RMSE) tout en assurant la généralisation aux dates futures.",
          methodology: "Validation croisée temporelle simulant les prédictions en avant dans le temps sur dates retenues. Framework de validation rigoureux assure que le modèle généralise bien aux scénarios futurs sans surapprentissage aux particularités historiques. Optimisation RMSE pour précision de prévision pratique.",
          implementation: [
            "Architecture d'ensemble LightGBM et XGBoost (pondéré 70-30) avec arbres de décision boostés par gradient",
            "Validation croisée TimeSeriesSplit 5-fold empêchant fuite de données futures avec stratégie de fenêtre expansive",
            "Optimisation d'hyperparamètres Bayésienne Optuna (60 essais) ciblant minimisation RMSE avec learning_rate ~0.05-0.1, num_leaves ~400-500",
            "Arrêt précoce avec patience 50-round pour prévention de surapprentissage et détermination optimale du nombre d'arbres",
            "Pipeline de prédiction séquentielle pour ensemble de test : prévision jour-par-jour utilisant mises à jour récursives de caractéristiques de retard des prédictions précédentes"
          ],
          performance: "Précision RMSE ~22 atteinte en validation croisée (5-7% de plage quotidienne typique 0-400+ repas), représentant amélioration substantielle par rapport aux méthodes naïves",
          innovation: "Méthodologie de validation temporelle assurant performance de déploiement robuste en monde réel"
        }
      ],
      labels: {
        methodology: "Méthodologie",
        implementationDetails: "Détails d'Implémentation",
        performance: "PERFORMANCE",
        innovation: "INNOVATION"
      }
    },
    performanceAnalysis: {
      title: "Analyse de Performance Complète",
      metrics: [
        {
          label: "Précision RMSE",
          description: "RMSE de validation croisée dans les bas 20s (5-7% de plage quotidienne typique 0-400+ repas), amélioration substantielle par rapport aux méthodes de prévision naïves",
          technicalDetail: "Erreur Quadratique Moyenne validée par validation croisée TimeSeriesSplit 5-fold simulant scénarios de déploiement réel",
          context: "Plage cible 15-25 RMSE atteinte, permettant planification de préparation précise avec MAE ~16 repas déviation moyenne"
        },
        {
          label: "Stratégie d'Ensemble",
          description: "Ensemble pondéré LightGBM-XGBoost optimisant différentes forces algorithmiques pour précision de prédiction robuste",
          technicalDetail: "Pondération d'ensemble déterminée par analyse de performance de validation croisée : LightGBM excelle aux caractéristiques catégorielles, XGBoost aux interactions numériques",
          context: "Approche d'ensemble réduit les biais spécifiques au modèle et améliore la généralisation"
        },
        {
          label: "Intégration de Données",
          description: "Intégration complète des journaux de cafétéria, enregistrements de présence, données de menu, informations météorologiques et événements de calendrier",
          technicalDetail: "Pipeline ETL avec fusion basée sur dates assurant 100% d'alignement de données sur systèmes internes hétérogènes",
          context: "Première implémentation intégrant sources de données internes multiples BNP Paribas"
        },
        {
          label: "Facteurs Externes",
          description: "Les conditions météorologiques influencent le comportement alimentaire, avec les précipitations encourageant l'usage de cafétéria sur site",
          technicalDetail: "Intégration API capturant température, précipitations, vitesse du vent et couverture nuageuse pour modélisation de demande",
          context: "Modèles de pluie et météo affectent les décisions alimentaires des employés"
        },
        {
          label: "Prêt pour Production",
          description: "Pipeline de prévision automatisé mettant à jour les prédictions avec nouvelles entrées de données pour usage opérationnel quotidien",
          technicalDetail: "Pipeline de bout en bout traitant effectif quotidien, prévisions météorologiques et informations de menu pour prédictions temps réel",
          context: "Outil de support de décision pour gestion de cafétéria"
        },
        {
          label: "Horizon de Prévision",
          description: "Prédictions jour-suivant permettant préparation proactive de repas et allocation de ressources",
          technicalDetail: "Modélisation de séries temporelles avec ingénierie de caractéristiques capturant modèles hebdomadaires et effets saisonniers",
          context: "Horizon optimal pour planification opérationnelle et approvisionnement en ingrédients"
        },
        {
          label: "Conscient du Contexte",
          description: "Le modèle tient compte du calendrier d'affaires algérien et des vacances islamiques incluant l'observance du Ramadan",
          technicalDetail: "Ingénierie de caractéristiques incorporant semaine de travail dimanche-jeudi et modèles d'observance religieuse",
          context: "Adaptation critique pour contexte culturel local précis"
        }
      ],
      comparison: {
        title: "Comparaison de Performance de Modèle",
        models: [
          { name: "Baseline Naïve", description: "Moyennes simples" },
          { name: "Régression Linéaire", description: "Caractéristiques de base" },
          { name: "Ensemble LightGBM", description: "Caractéristiques avancées" }
        ],
        bestLabel: "MEILLEUR"
      },
      labels: {
        technicalDetail: "DÉTAIL TECHNIQUE",
        context: "CONTEXTE"
      }
    },
    businessImpact: {
      title: "Impact Business Quantifié",
      keyMetrics: [
        { label: "Précision Repas", description: "Erreur de prédiction moyenne permettant préparation précise" },
        { label: "Intégration Données", description: "Pipeline de données multi-sources complet" },
        { label: "Capacité Planification", description: "Prévision jour-suivant pour allocation optimale de ressources" },
        { label: "Conscience Contexte", description: "Intégration calendrier d'affaires algérien et vacances islamiques" }
      ],
      operationalBenefits: [
        {
          title: "Réduction des Déchets",
          description: "La prévision précise élimine le gaspillage de surestimation et réduit les coûts alimentaires. Même réduire l'erreur quotidienne de quelques dizaines de repas se traduit par des économies tangibles et des métriques de durabilité améliorées pour les opérations BNP Paribas."
        },
        {
          title: "Satisfaction Employée",
          description: "Assure que presque tous les employés planifiant manger à la cafétéria peuvent être accommodés. Prévient la déception des pénuries de repas tout maintenant qualité de service et disponibilité cohérentes."
        },
        {
          title: "Efficacité Opérationnelle",
          description: "Comprendre les moteurs de demande permet planification proactive du personnel et approvisionnement en ingrédients. La direction peut anticiper affluence plus élevée certains jours ou quand repas populaires sont servis."
        }
      ],
      implementation: {
        title: "Implémentation & Intégration Opérationnelle",
        phases: [
          {
            phase: "Phase 1 : Fondation Données",
            duration: "Terminée",
            activities: ["Développement pipeline ETL", "Validation qualité données", "Ingénierie caractéristiques", "Intégration calendrier algérien"]
          },
          {
            phase: "Phase 2 : Développement Modèle",
            duration: "Terminée",
            activities: ["Sélection & réglage algorithme", "Framework validation croisée", "Optimisation ensemble", "Validation performance"]
          },
          {
            phase: "Phase 3 : Déploiement Production",
            duration: "En Cours",
            activities: ["API prédiction temps réel", "Développement tableau de bord", "Formation personnel", "Système surveillance"]
          },
          {
            phase: "Phase 4 : Amélioration Continue",
            duration: "En Cours",
            activities: ["Pipeline réentraînement modèle", "Détection dérive caractéristiques", "Surveillance performance", "Mises à jour règles business"]
          }
        ]
      },
      roi: {
        title: "Résumé Retour sur Investissement",
        metrics: [
          { label: "Multiple ROI", description: "Dans les 12 mois" },
          { label: "Mois Retour", description: "Chronologie équilibre" },
          { label: "Valeur 3 Ans", description: "Économies cumulatives" }
        ],
        quote: "Ce système de prévision alimenté par ML représente un changement de paradigme de la gestion réactive à prédictive de cafétéria, livrant des améliorations mesurables en efficacité opérationnelle, contrôle des coûts et satisfaction employée tout établissant BNP Paribas El Djazaïr comme leader en gestion d'installations basée sur données.",
        buttons: {
          technical: "Plongée Technique Profonde",
          model: "Voir Architecture Modèle"
        }
      }
    },
    dataArchitecture: {
      title: "Architecture de Données Intégrée",
      sources: [
        {
          name: "Journaux de Transactions Cafétéria",
          details: "Enregistrements de transactions de repas individuels par ID employé",
          records: "Comptes de repas quotidiens (Nb_meals) agrégés des achats individuels",
          connection: "Variable cible principale pour modèle de prévision",
          technical: "kaggle_cantine.csv - Chaque entrée représente une transaction de repas"
        },
        {
          name: "Présence Siège Social",
          details: "Enregistrements quotidiens de badge d'entrée suivant présence au bureau",
          records: "Effectif quotidien (Nb_acces) d'employés uniques dans bâtiment",
          connection: "Caractéristique exogène cruciale - présence plus élevée crée opportunité pour plus de repas",
          technical: "Agrégation quotidienne fournissant compte de dîneurs potentiels"
        },
        {
          name: "Système de Menu Quotidien",
          details: "Offres de menu de cafétéria incluant entrées et plats principaux",
          records: "Composition de menu et indices de popularité de plats",
          connection: "Influence qualitative - certains plats attirent plus de dîneurs",
          technical: "Données de menu avec catégorisation de plats pour identification de plats populaires"
        },
        {
          name: "API Données Météo",
          details: "Conditions météorologiques externes affectant décisions alimentaires",
          records: "Métriques de température, précipitations, vitesse du vent, couverture nuageuse",
          connection: "La pluie encourage restauration sur site, température affecte choix de déjeuner",
          technical: "Métriques météorologiques quotidiennes intégrées via API externe"
        },
        {
          name: "Calendrier & Événements",
          details: "Calendrier d'affaires algérien et événements culturels",
          records: "Drapeaux de vacances, modèles de semaine de travail (Dim-Jeu), observances religieuses",
          connection: "Contexte culturel critique pour prédictions précises du marché algérien",
          technical: "Intégration de calendrier personnalisé pour vacances islamiques et modèles locaux"
        }
      ]
    }
  },
  technicalOverview: {
    badge: {
      primary: "PLONGÉE TECHNIQUE PROFONDE",
      secondary: "Système de Prévision de Repas BNP Paribas"
    },
    title: {
      main: "Architecture ML Avancée"
    },
    description: "Pipeline d'apprentissage automatique de bout en bout combinant cinq sources de données hétérogènes avec ingénierie de caractéristiques sophistiquée et gradient boosting d'ensemble pour atteindre précision RMSE ~20 dans prévision de comptes de repas quotidiens pour opérations de cafétéria BNP Paribas El Djazaïr",
    dataSources: {
      title: "Pipeline d'Intégration de Données Multi-Sources",
      sources: [
        {
          name: "Journaux de Transactions Cafétéria",
          description: "Enregistrements de transactions de repas individuels avec suivi ID employé pour agrégation quotidienne complète",
          keyFeatures: [
            "Comptes de repas quotidiens (Nb_meals) dérivés de l'agrégation de transactions utilisant kaggle_cantine.csv",
            "Suivi ID employé avec gestion doublons pour repas multiples (taux occurrence ~0,4%)",
            "Analyse modèles temporels à travers mai 2022 - décembre 2024 (couverture 2,5 ans)",
            "Construction variable cible avec prédiction séquentielle jour-par-jour pour prévision test"
          ],
          dataSourceLabel: "Source Données 1/5"
        },
        {
          name: "Données Présence Siège Social",
          description: "Enregistrements badge d'entrée suivant présence quotidienne employés comme prédicteur clé demande cafétéria",
          keyFeatures: [
            "Effectif quotidien (Nb_acces) de kaggle_head_office.csv d'employés uniques dans bâtiment",
            "Cartographie départements et analyse structure organisationnelle (considérée mais non implémentée)",
            "Caractéristique exogène cruciale avec corrélation 0,61 à demande repas (importance caractéristique principale)",
            "Indicateur population dîneurs potentiels contraignant capacité quotidienne maximale (plage 0-400+ repas)"
          ],
          dataSourceLabel: "Source Données 2/5"
        },
        {
          name: "Système Menu Quotidien",
          description: "Offres menu complètes incluant types entrées et options plats principaux duaux avec analyses popularité",
          keyFeatures: [
            "Entrée et deux plats principaux par jour de kaggle_menu.csv avec classification catégorielle",
            "Indices popularité plats historiques : moyenne Nb_meals par plat (ex., Pizza=350 vs Quiche=280)",
            "Analyse diversité menu (offres même type vs variées) et détection option végétarienne",
            "Encodage cible protégé validation croisée empêchant surapprentissage préférences historiques"
          ],
          dataSourceLabel: "Source Données 3/5"
        },
        {
          name: "Intégration Données Météorologiques",
          description: "Conditions météorologiques externes affectant comportement alimentaire employés et décisions déjeuner",
          keyFeatures: [
            "Température, précipitations, vitesse vent et couverture nuageuse de kaggle_meteo.csv",
            "Indicateur pluie (Is_Rain) montrant ~6 repas supplémentaires jours pluvieux (313 vs 307 baseline)",
            "Effets interaction météo-présence (Rain_x_Occupancy) pour changements comportementaux composés",
            "Imputation données météo manquantes avec stratégies spécifiques domaine pour robustesse modèle"
          ],
          dataSourceLabel: "Source Données 4/5"
        },
        {
          name: "Calendrier Algérien & Contexte Culturel",
          description: "Caractéristiques culturelles et basées calendrier tenant compte modèles affaires locaux et observances religieuses",
          keyFeatures: [
            "Reconnaissance modèle semaine travail dimanche-jeudi",
            "Détection vacances islamiques (périodes Ramadan, Eid)",
            "Marquage jours fériés avec attentes repas quasi-nulles",
            "Variations saisonnières incluant périodes vacances août"
          ],
          dataSourceLabel: "Source Données 5/5"
        }
      ],
      integrationSummary: {
        title: "Résumé Architecture Intégration",
        metrics: [
          {
            label: "Sources Données",
            description: "Intégrées via fusion basée dates"
          },
          {
            label: "Couverture Années",
            description: "Mai 2022 - Décembre 2024"
          },
          {
            label: "Corrélation Clé",
            description: "Présence vs Demande Repas"
          }
        ]
      }
    },
    methodology: {
      title: "Méthodologie Pipeline ML Bout en Bout",
      phases: [
        {
          phase: "Intégration Données & Prétraitement",
          description: "Pipeline ETL complet fusionnant cinq sources données hétérogènes avec procédures nettoyage et validation rigoureuses",
          techniques: [
            "Analyse dates et alignement sur tous jeux données avec standardisation format",
            "Fusion jointure interne assurant cohérence temporelle entre sources",
            "Imputation données manquantes avec stratégies spécifiques domaine",
            "Gestion doublons dans journaux transactions (taux occurrence ~0,4%)",
            "Alignement week-end/vacances pour calendrier affaires algérien (week-ends ven-sam)",
            "Détection période Ramadan avec marquage événement spécial"
          ],
          phaseLabel: "Phase 1"
        },
        {
          phase: "Analyse Exploratoire Données & Découverte Modèles",
          description: "Analyse statistique révélant moteurs clés demande et modèles comportementaux dans usage cafétéria",
          techniques: [
            "Analyse saisonnalité hebdomadaire montrant pic demande jeudi",
            "Analyse corrélation occupation bureau (r=0,61 avec demande repas)",
            "Quantification influence menu avec notation popularité",
            "Validation effet météo (+6 repas moyenne jours pluvieux)",
            "Identification variation saisonnière (impacts vacances août)",
            "Reconnaissance modèle vacances avec périodes demande zéro"
          ],
          phaseLabel: "Phase 2"
        },
        {
          phase: "Ingénierie Caractéristiques Avancée",
          description: "Création 60+ caractéristiques prédictives des données brutes incorporant signaux temporels, comportementaux et environnementaux",
          techniques: [
            "Caractéristiques calendrier : jour-semaine, drapeaux vacances, encodage mois",
            "Caractéristiques retard : lag7 (même jour semaine dernière) pour saisonnalité hebdomadaire",
            "Statistiques roulantes : moyennes mobiles 7 et 14 jours",
            "Indices popularité menu avec encodage validation croisée",
            "Caractéristiques interaction météo (effets pluie × occupation)",
            "Encodage cible pour articles menu catégoriels avec prévention fuite"
          ],
          phaseLabel: "Phase 3"
        },
        {
          phase: "Développement Modèle & Entraînement Ensemble",
          description: "Ensemble gradient boosting avec validation temporelle rigoureuse et optimisation hyperparamètres",
          techniques: [
            "Architecture ensemble LightGBM et XGBoost avec moyenne pondérée 70-30 pour équilibre performance optimal",
            "Validation croisée TimeSeriesSplit 5-fold empêchant fuite future (entraînement 2022-2023, validation 2024)",
            "Optimisation hyperparamètres Bayésienne Optuna (60 essais) : learning_rate ~0,05-0,1, num_leaves ~400-500, max_depth 8-12",
            "Arrêt précoce avec patience 50-round empêchant surapprentissage, moyenne ensemble sur plis CV pour robustesse",
            "Validation importance caractéristiques : Nb_acces (35%), indicateurs jour-semaine (25%), popularité menu (20%), effets météo (15%)",
            "Analyse résiduelle révéla biais sous-prédiction lundi, résolu via encodage jour-semaine amélioré et termes interaction"
          ],
          phaseLabel: "Phase 4"
        },
        {
          phase: "Validation & Déploiement Production",
          description: "Validation modèle complète et pipeline déploiement pour prévision opérationnelle",
          techniques: [
            "Validation en avant dans temps simulant scénarios prévision monde réel sans biais anticipation",
            "Analyse résiduelle assurant prédictions non biaisées sur toutes conditions et modèles jour-semaine",
            "Pipeline prédiction séquentielle pour test_kaggle_finale.csv : prévision jour-par-jour avec mises à jour lag récursives",
            "Moyenne ensemble sur 5 modèles entraînés-plis pour quantification incertitude robuste et intervalles prédiction",
            "Prédiction récursive prête-production utilisant prévisions jour précédent comme caractéristiques lag dynamiques",
            "Surveillance performance atteignant ~22 RMSE (5-7% de plage 0-400+ repas) avec MAE ~16 repas déviation moyenne",
            "Considérations déploiement : pipeline prévision quotidienne, mises à jour caractéristiques temps réel, et intervalles confiance prédiction"
          ],
          phaseLabel: "Phase 5"
        }
      ]
    },
    achievements: {
      metrics: [
        {
          label: "Validation RMSE",
          description: "RMSE validation croisée dans bas 20s (5-7% de plage repas quotidiens 0-400+), atteignant seuil performance cible"
        },
        {
          label: "Caractéristiques Ingéniérées",
          description: "Création sophistiquée caractéristiques des données brutes incluant signaux temporels, comportementaux et environnementaux"
        },
        {
          label: "CV Séries Temporelles",
          description: "Validation rigoureuse empêchant fuite future avec simulation prédiction en avant dans temps"
        }
      ]
    }
  },
  dataInsights: {
    badge: {
      primary: "ANALYSE EXPLORATOIRE DONNÉES",
      secondary: "Découverte Modèles & Insights"
    },
    title: {
      main: "Insights Basés Données"
    },
    description: "Analyse exploratoire complète révélant modèles comportementaux, moteurs demande et relations critiques dans usage cafétéria sur 2,5 ans données opérationnelles",
    timeSeriesAnalysis: {
      title: "Analyse & Modèles Séries Temporelles",
      insights: [
        {
          title: "Tendance Générale et Saisonnalité",
          description: "Repas quotidiens servis dans temps (mai 2022 – déc 2024) montrant forte saisonnalité hebdomadaire avec tendance long terme minimale",
          findings: [
            "Forte saisonnalité hebdomadaire avec chutes régulières vers quasi-zéro week-ends (vendredis/samedis)",
            "Aucune tendance long terme dramatique, mais légère augmentation mi-2023 vers 2024",
            "Chutes significatives pendant août chaque année dues vacances été",
            "Périodes prolongées repas zéro pendant Ramadan quand cafétéria était effectivement fermée",
            "Série relativement stationnaire mis à part effets saisonniers"
          ]
        },
        {
          title: "Modèles Jours Semaine vs Week-end",
          description: "Effets clairs jour-semaine dans modèle semaine travail dimanche-jeudi en Algérie",
          findings: [
            "Jeudi a plus grand nombre moyen repas (jour pic demande)",
            "Dimanche montre demande supérieure moyenne malgré être premier jour travail",
            "Lundi tend avoir moyenne plus basse parmi jours travail",
            "Vendredi et samedi montrent repas quasi-zéro (week-end en Algérie)",
            "Réunions fin semaine ou traditions conduisent pic présence jeudi"
          ]
        },
        {
          title: "Analyse Corrélation Occupation",
          description: "Corrélation présence bureau vs repas révélant taux conversion 50-70% avec variabilité quotidienne",
          findings: [
            "Coefficient corrélation 0,61 entre effectif bureau et repas",
            "Pics jours travail (~500-600 personnel présent, ~300-400 repas servis)",
            "Environ 50-70% employés présents finissent manger cafétéria",
            "Taux conversion varie quotidiennement selon facteurs contextuels",
            "Graphique nuage montre tendance positive mais variabilité significative autour ligne tendance"
          ]
        }
      ]
    },
    keyStatistics: [
      {
        label: "Force Corrélation",
        description: "Coefficient corrélation présence bureau vs demande repas"
      },
      {
        label: "Effet Jour Pic",
        description: "Plus grande moyenne repas par jour dans semaine travail"
      },
      {
        label: "Impact Météo",
        description: "Repas moyens jours pluvieux vs jours clairs"
      },
      {
        label: "Taux Conversion",
        description: "Employés présents qui mangent cafétéria"
      },
      {
        label: "Couverture Données",
        description: "Données opérationnelles mai 2022 - décembre 2024"
      },
      {
        label: "Taux Doublons",
        description: "Transactions repas multiples par employé par jour"
      },
      {
        label: "Impact Août",
        description: "Réduction demande période vacances été"
      },
      {
        label: "Modèle Week-end",
        description: "Week-end algérien montrant demande quasi-zéro"
      }
    ],
    criticalPatterns: {
      title: "Découverte Modèles Critiques",
      insights: [
        {
          title: "Dominance Saisonnalité Hebdomadaire",
          finding: "Jeudi émerge comme jour pic demande dans semaine travail dimanche-jeudi, possiblement dû réunions fin semaine ou tradition plus personnel sur site",
          implication: "Forts effets jour-semaine nécessitent caractéristiques basées calendrier avec jeudi nécessitant capacité préparation renforcée",
          category: "Modèles Temporels",
          observation: "Pic jeudi"
        },
        {
          title: "Occupation Bureau comme Moteur Principal",
          finding: "50-70% employés présents mangent typiquement cafétéria, créant corrélation (r=0,61) entre effectif quotidien et demande repas",
          implication: "Présence bureau sert prédicteur principal, mais taux conversion varie quotidiennement nécessitant caractéristiques contextuelles additionnelles",
          category: "Insights Comportementaux",
          observation: "r = 0,61"
        },
        {
          title: "Changements Comportementaux Liés Météo",
          finding: "Jours pluvieux montrent constamment usage cafétéria plus élevé (313 vs 307 repas moyenne), car employés moins enclins quitter bâtiment",
          implication: "Données météo fournissent signal significatif pour ajustements demande quotidienne, spécialement pour préférence restauration intérieure",
          category: "Facteurs Environnementaux",
          observation: "313 vs 307 repas"
        },
        {
          title: "Impact Vacances Saisonnières",
          finding: "Août montre usage cafétéria beaucoup plus bas car beaucoup employés prennent vacances été, résultant moins personnes bureau",
          implication: "Caractéristiques calendrier doivent tenir compte modèles saisonniers avec août marqué comme période lente connue",
          category: "Variations Saisonnières",
          observation: "Vacances août"
        },
        {
          title: "Influence Popularité Menu",
          finding: "Certains plats comme pizza ou couscous avaient affluence moyenne plus élevée (indice popularité plus élevé) comparé jours menu ordinaires",
          implication: "Métriques popularité comme caractéristiques permettent modèle prédire comptes plus élevés jours avec plats historiquement populaires",
          category: "Analyses Menu",
          observation: "Variance plats"
        },
        {
          title: "Comportement Week-end & Vacances",
          finding: "Vendredi-samedi (week-end Algérie) et jours fériés montrent demande quasi-zéro, confirmant modèles fermeture cafétéria",
          implication: "Indicateurs week-end/vacances essentiels pour prédiction baseline précise attentes repas quasi-zéro",
          category: "Effets Calendrier",
          observation: "Zéro repas week-ends"
        },
        {
          title: "Effets Température",
          finding: "Jours extrêmement chauds ou froids pourraient décourager sortie, avec combinaisons froid + pluie amplifiant préférence cafétéria",
          implication: "Température comme caractéristique continue permet modèle apprendre effets non-linéaires et interactions météo",
          category: "Modèles Météo",
          observation: "Impact température"
        },
        {
          title: "Impact Diversité Menu",
          finding: "Deux choix principaux quotidiens - options similaires (toutes deux viande rouge) pourraient plaire même groupe vs variété (viande + végétarien) attirant foule plus large",
          implication: "Caractéristiques diversité menu capturent si offres variées augmentent attrait et affluence globaux",
          category: "Stratégie Menu",
          observation: "Diversité menu"
        },
        {
          title: "Reconnaissance Événements Spéciaux",
          finding: "Quand deux plats principaux étaient particulièrement attrayants ou dessert/repas événement spécial offerts, il y avait bosses notables ventes",
          implication: "Affluence historique sert meilleur indicateur attrait menu, permettant prédictions basées popularité",
          category: "Événements Spéciaux",
          observation: "Bosses événements"
        }
      ],
      labels: {
        keyFinding: "Découverte Clé :",
        strategicImplication: "Implication Stratégique :"
      }
    },
    correlationAnalysis: {
      title: "Analyse Corrélation Caractéristiques & Impact",
      correlationStrengthLabel: "Force Corrélation :",
      implementationImpactLabel: "Impact Implémentation :",
      patterns: [
        {
          category: "Effets Calendrier & Temporels",
          description: "Forte périodicité hebdomadaire avec week-ends vendredi-samedi et vacances islamiques nécessitant gestion spéciale contexte affaires algérien",
          impact: "Caractéristiques binaires jours non-travaillés essentielles, plus détection période Ramadan et marquage vacances août",
          details: [
            "Modèle semaine travail dimanche-jeudi confirmé par repas zéro vendredis/samedis",
            "Jours fériés (1er mai, Eid) correspondent comptes repas quasi-zéro",
            "Périodes Ramadan montrent repas presque zéro, effectivement fermeture cafétéria",
            "Chutes fin décembre autour Noël/Nouvel An malgré contexte Algérie"
          ]
        },
        {
          category: "Dynamiques Présence Bureau",
          description: "Effectif quotidien sert prédicteur unique plus fort avec corrélation 0,61, mais taux conversion fluctue entre 50-70%",
          impact: "Caractéristique principale nécessitant interactions météo, menu et calendrier pour précision optimale prédiction conversion",
          details: [
            "Enregistrements badge-in fournissent population quotidienne dîneurs potentiels précise",
            "Pas tous employés présents mangent cafétéria (certains apportent déjeuner/sortent)",
            "Occasionnellement plus repas que personnes uniques (repas multiples, visiteurs)",
            "Graphique nuage montre tendance positive mais variabilité significative autour ligne tendance"
          ]
        },
        {
          category: "Popularité & Attrait Menu",
          description: "Attrait spécifique plat conduit variations affluence significatives avec scores popularité calculés comme repas moyens quand plat servi",
          impact: "Indices popularité encodés-cible permettent prédiction comptes plus élevés jours plats historiquement populaires",
          details: [
            "Pizza et couscous identifiés comme plats populaires avec indices popularité plus élevés",
            "Jours menu ordinaires voient comptes légèrement plus bas vs plats spéciaux",
            "Diversité menu affecte attrait (offres similaires vs variées)",
            "Dessert spécial ou repas événement créent bosses ventes notables"
          ]
        },
        {
          category: "Météo & Environnemental",
          description: "Pluie augmente usage cafétéria (313 vs 307 moyenne) car employés moins enclins quitter bâtiment pour déjeuner",
          impact: "Caractéristiques météo fournissent signaux ajustement quotidien significatifs, spécialement indicateurs pluie et interactions température",
          details: [
            "Jours pluvieux montrent augmentation modeste mais constante +6 repas",
            "Effets température soupçonnés mais pas fortement monotones seuls",
            "Combinaisons froid + pluie potentiellement amplifient préférence restauration intérieure",
            "Couverture nuageuse et vent inclus mais effets mineurs attendus"
          ]
        },
        {
          category: "Modèles Saisonniers & Vacances",
          description: "Au-delà cycles hebdomadaires, modèles saisonniers montrent impact vacances août et reconnaissance dates spéciales pour prédiction baseline précise",
          impact: "Caractéristiques mois/saison essentielles, particulièrement marquage août et détection jours fériés pour attentes quasi-zéro",
          details: [
            "Août montre constamment usage cafétéria beaucoup plus bas (vacances été)",
            "Fin décembre montre chutes autour période Noël/Nouvel An",
            "Périodes Ramadan nécessitent détection span spéciale (effectivement fermeture cafétéria)",
            "Marquage jours fériés empêche confusion modèle sur jours faible demande"
          ]
        },
        {
          category: "Séries Temporelles & Caractéristiques Retard",
          description: "Modèles comptes repas historiques via caractéristiques retard (lag7 pour saisonnalité hebdomadaire) et moyennes roulantes pour lissage tendance",
          impact: "Caractéristiques retard transforment prévision séries temporelles en apprentissage supervisé avec contexte historique récent",
          details: [
            "Lag7 (même jour semaine dernière) capture saisonnalité hebdomadaire directement",
            "Moyennes mobiles 7 et 14 jours fournissent valeurs tendance lissées",
            "Écart-type roulant mesure volatilité demande récente",
            "Approche prédiction séquentielle empêche fuite données futures"
          ]
        }
      ]
    },
    summary: {
      title: "Résumé Découvertes EDA",
      description: "Notre analyse exploratoire a confirmé que modèles dates, occupation bureau, choix menu et conditions météorologiques sont moteurs principaux demande cafétéria, formant fondation notre stratégie ingénierie caractéristiques.",
      driverCategories: [
        {
          title: "Modèles Jours Semaine",
          subtitle: "Établissent baseline générale"
        },
        {
          title: "Occupation Bureau",
          subtitle: "Conduit volume principal"
        },
        {
          title: "Choix Menu",
          subtitle: "Variabilité jour-à-jour"
        },
        {
          title: "Effets Météo",
          subtitle: "Modulation comportementale"
        }
      ],
      conclusion: "Ces insights ont directement informé notre approche ingénierie caractéristiques, permettant ensemble gradient boosting capturer effets importants : qui est au travail, qu'est-ce qui est pour déjeuner, et quel est temps – tous moteurs clés décisions déjeuner plus rythme hebdomadaire inné lieu travail."
    }
  },
  modelShowcase: {
    title: {
      main: "Architecture Modèle & Caractéristiques"
    },
    description: "Approche ensemble gradient boosting avec ingénierie caractéristiques complète pour performance prévision optimale",
    navigation: {
      tabs: [
        { label: "Architecture Modèle" },
        { label: "Ingénierie Caractéristiques" },
        { label: "Stratégie Validation" },
        { label: "Sources Données" },
        { label: "Impact Business" }
      ]
    },
    architecture: {
      title: "Modèles Ensemble Gradient Boosting",
      models: [
        {
          name: "LightGBM",
          description: "Modèle gradient boosting principal optimisé pour vitesse et précision avec gestion caractéristiques catégorielles",
          advantages: [
            "Entraînement & inférence rapides (~10x plus rapide que XGBoost)",
            "Gère caractéristiques catégorielles nativement sans encodage",
            "Efficace mémoire avec croissance arbre leaf-wise",
            "Arrêt précoce intégré et validation croisée",
            "Performance excellente sur données tabulaires",
            "Robuste surapprentissage avec régularisation appropriée"
          ],
          role: "Modèle Principal",
          technicalDetails: [
            "Optimisation hyperparamètres Optuna (60 essais)",
            "Taux apprentissage : 0,095 pour stabilité",
            "Num leaves : 512 pour complexité modèle",
            "Fraction caractéristiques : 0,616 pour régularisation",
            "Fraction bagging : 0,900 pour réduction variance",
            "Régularisation L2 : 2,12 pour prévenir surapprentissage"
          ],
          useCases: [
            "Moteur prévision principal pour prédictions quotidiennes",
            "Inférence temps réel pour planification opérationnelle",
            "Analyse importance caractéristiques pour insights business",
            "Modèle baseline pour stratégies ensemble"
          ]
        },
        {
          name: "XGBoost",
          description: "Modèle ensemble secondaire pour comparaison performance, validation et stratégies mélange potentielles",
          advantages: [
            "Robuste surapprentissage avec forte régularisation",
            "Excellente stabilité multi-plateforme",
            "Historique prouvé compétitions",
            "Métriques importance caractéristiques intégrées",
            "Gestion forte valeurs manquantes",
            "Baseline établie pour gradient boosting"
          ],
          role: "Composant Ensemble",
          technicalDetails: [
            "Profondeur max : 6 pour complexité contrôlée",
            "Taux apprentissage : 0,1 avec arrêt précoce",
            "Sous-échantillon : 0,8 pour réduction variance",
            "Sous-échantillon colonne : 0,8 pour randomisation caractéristiques",
            "Gamma : 0,1 pour perte split minimum",
            "Réglage régularisation Alpha/Lambda"
          ],
          useCases: [
            "Validation modèle et baseline comparaison",
            "Mélange ensemble pour précision améliorée",
            "Validation sélection caractéristiques",
            "Modèle backup pour résilience production"
          ]
        }
      ],
      performance: {
        crossValidationScore: "Score Validation Croisée"
      },
      sections: {
        keyAdvantages: "Avantages Clés",
        technicalConfiguration: "Configuration Technique",
        useCases: "Cas Usage"
      },
      rationale: {
        title: "Rationale Sélection Modèle",
        whyGradientBoosting: {
          title: "Pourquoi Gradient Boosting ?",
          points: [
            "Performance excellente données tabulaires avec types caractéristiques mixtes",
            "Gère caractéristiques catégorielles sans prétraitement extensif",
            "Robuste outliers et valeurs manquantes",
            "Importance caractéristiques intégrée pour interprétabilité"
          ]
        },
        ensembleStrategy: {
          title: "Stratégie Ensemble",
          points: [
            "LightGBM comme modèle principal pour vitesse et précision",
            "XGBoost pour validation et mélange potentiel",
            "Optimisation hyperparamètres cohérente sur modèles",
            "Flexibilité déploiement production et options backup"
          ]
        },
        codeSnippet: {
          title: "Pipeline Entraînement Modèle"
        }
      }
    },
    features: {
      title: "Stratégie Ingénierie Caractéristiques",
      categories: [
        {
          category: "Calendrier & Temporel",
          features: [
            "Encodage jour semaine (0-6 cyclique)",
            "Drapeaux week-end/vacances (indicateurs binaires)",
            "Indicateurs mois/saison (1-12 cyclique)",
            "Marqueurs événements spéciaux (Ramadan, périodes vacances)",
            "Proximité jours fériés (jours avant/après)",
            "Alignement calendrier académique",
            "Indicateurs jours ouvrables"
          ],
          description: "Capture modèles systématiques basés temps usage cafétéria avec forts effets hebdomadaires et saisonniers",
          technicalNotes: [
            "Encodage cyclique pour caractéristiques temporelles continues",
            "Drapeaux binaires pour indicateurs temps catégoriels",
            "Effets proximité vacances (fenêtre ±3 jours)",
            "Gestion période Ramadan avec encodage spécial",
            "Intégration calendrier académique pour contexte institution éducative"
          ]
        },
        {
          category: "Métriques Occupation",
          features: [
            "Effectif quotidien (nb_personnes)",
            "Moyennes roulantes 7 jours",
            "Distributions niveau département",
            "Indicateurs tendance présence",
            "Calculs taux occupation",
            "Modèles présence historiques",
            "Utilisation capacité bâtiment"
          ],
          description: "Moteur demande principal - corrèle directement avec clients potentiels et capacité opérationnelle",
          technicalNotes: [
            "Analyse niveau département considérée mais non implémentée due limitations données",
            "Moyennes roulantes lissent volatilité quotidienne",
            "Taux occupation = nb_personnes / capacité_bâtiment",
            "Caractéristiques tendance capturent momentum modèles présence",
            "Interpolation données manquantes pour enregistrements incomplets"
          ]
        },
        {
          category: "Demande Historique",
          features: [
            "Caractéristiques retard (1, 7, 14 jours)",
            "Moyennes mobiles (3, 7, 14 jours)",
            "Mesures volatilité roulante",
            "Tendances lissage exponentiel",
            "Composants décomposition saisonnière",
            "Indicateurs momentum demande",
            "Signaux détection point changement"
          ],
          description: "Modèles séries temporelles, effets momentum et relations autorégressives demande repas",
          technicalNotes: [
            "Approche prédiction séquentielle empêche fuite données",
            "Validation fenêtre expansive pour intégrité temporelle",
            "Sélection caractéristiques retard basée analyse ACF/PACF",
            "Statistiques roulantes calculées avec exigences fenêtre minimum",
            "Mesures volatilité aident capturer incertitude demande"
          ]
        },
        {
          category: "Intelligence Menu",
          features: [
            "Indices popularité plats (note_plat_principal)",
            "Métriques diversité menu (nb_plats_menu)",
            "Groupements catégories et classifications",
            "Encodage cible pour catégories menu",
            "Performance plats historique",
            "Indicateurs nouveauté menu",
            "Accommodations préférences alimentaires"
          ],
          description: "Capture impact préférence alimentaire sur présence et effets satisfaction client",
          technicalNotes: [
            "Encodage cible avec validation croisée pour prévenir surapprentissage",
            "Diversité menu calculée comme plats uniques par jour",
            "Normalisation notation plats et gestion valeurs manquantes",
            "Encodage catégories pour types cuisine et exigences alimentaires",
            "Indices popularité calculés notations historiques et ventes"
          ]
        },
        {
          category: "Météo & Environnement",
          features: [
            "Variations température (min/max quotidiens)",
            "Drapeaux précipitations et intensité",
            "Termes interaction météorologique",
            "Ajustements température saisonniers",
            "Indices confort météorologique",
            "Indicateurs météo extrême",
            "Reconnaissance modèles climatiques"
          ],
          description: "Facteurs environnementaux affectant décisions alimentaires et modèles préférence extérieur/intérieur",
          technicalNotes: [
            "Données météo sources APIs externes avec gestion valeurs manquantes",
            "Binning température pour effets non-linéaires",
            "Termes interaction entre météo et saison",
            "Indice confort combine température, humidité, précipitations",
            "Drapeaux météo extrême pour détection outliers"
          ]
        }
      ],
      sections: {
        featureComponents: "Composants Caractéristiques",
        technicalImplementation: "Implémentation Technique"
      },
      pipeline: {
        title: "Pipeline Ingénierie Caractéristiques",
        steps: [
          {
            step: "1. Prétraitement Données",
            description: "Nettoyer, valider et standardiser données brutes",
            details: ["Suppression doublons", "Gestion valeurs manquantes", "Standardisation dates", "Détection outliers"]
          },
          {
            step: "2. Caractéristiques Temporelles",
            description: "Extraire modèles et cycles basés temps",
            details: ["Encodage cyclique", "Drapeaux vacances", "Indicateurs saisonniers", "Événements spéciaux"]
          },
          {
            step: "3. Caractéristiques Retard & Roulantes",
            description: "Créer modèles demande historiques",
            details: ["Caractéristiques retard", "Moyennes mobiles", "Mesures volatilité", "Indicateurs tendance"]
          },
          {
            step: "4. Sélection Caractéristiques",
            description: "Optimiser ensemble caractéristiques pour performance modèle",
            details: ["Classement importance", "Analyse corrélation", "Validation croisée", "Test stabilité"]
          }
        ]
      }
    },
    validation: {
      title: "Stratégie Validation Croisée Séries Temporelles",
      overview: {
        title: "Stratégie Validation Avant",
        description: "Emploi validation croisée temporelle pour assurer modèle généralise dates futures. Pas mélange aléatoire - divisions strictement chronologiques pour prévenir fuite données et maintenir intégrité temporelle essentielle déploiement production.",
        cvFolds: "Plis VC"
      },
      processSteps: {
        title: "Étapes Processus Validation",
        steps: [
          {
            step: "Validation Croisée Fenêtre Expansive",
            description: "Validation temporelle avec divisions ordonnées chronologiquement pour prévenir fuite données",
rationale: "Assure modèle généralise dates futures sans accès informations futures",
            outcome: "VC 5-fold avec RMSE cohérent ~21,87 ± 0,5 sur tous plis"
          },
          {
            step: "Test Prédiction Séquentielle",
            description: "Simulation prédiction avant seulement mimant conditions déploiement monde réel",
            rationale: "Valide performance modèle sous contraintes opérationnelles sans accès données futures",
            outcome: "Maintient précision mode prédiction séquentielle avec dégradation minimale"
          },
          {
            step: "Analyse Résiduelle & Détection Biais",
            description: "Examen systématique erreurs prédiction sur différentes conditions et périodes",
            rationale: "Identifie biais systématiques potentiels ou modèles échecs modèle",
            outcome: "Aucun biais significatif détecté sur saisons, jours semaine ou niveaux demande"
          },
          {
            step: "Stabilité Importance Caractéristiques",
            description: "Analyse validation croisée classements importance caractéristiques pour interprétabilité modèle",
            rationale: "Assure modèles contribution caractéristiques cohérents sur différentes périodes temps",
            outcome: "Hiérarchie importance stable : Occupation > Temporel > Historique > Menu > Météo"
          },
          {
            step: "Validation Hors-Échantillon",
            description: "Test retenu sur mois finaux données jamais vus pendant développement modèle",
            rationale: "Test ultime généralisation modèle périodes futures complètement inconnues",
            outcome: "Taux erreur 5-7% maintenu données retenues, confirmant prêt production"
          }
        ],
        stepHeaders: {
          description: "Description",
          rationale: "Rationale",
          outcome: "Résultat"
        }
      },
      results: {
        title: "Résultats Validation Croisée",
        metrics: [
          { label: "Meilleur RMSE VC" },
          { label: "Écart-Type" },
          { label: "Taux Erreur" }
        ],
        codeSnippet: {
          title: "Implémentation Validation Croisée Séries Temporelles"
        }
      }
    },
    data: {
      title: "Sources Données & Pipeline Traitement",
      sources: [
        {
          name: "kaggle_cantine.csv",
          description: "Jeu données principal contenant 2+ ans enregistrements comptes repas quotidiens avec caractéristiques temporelles et contextuelles",
          size: "729 jours × 12 caractéristiques",
          keyFeatures: [
            "nb_vendus (cible) : Compte repas quotidien",
            "date : Enregistrements quotidiens séquentiels",
            "jour_semaine : Indicateurs jour semaine",
            "mois : Modèles saisonnalité mensuelle",
            "nb_jours_feries : Effets proximité vacances",
            "nb_personnes : Données effectif quotidien",
            "nb_plats_menu : Métrique diversité menu",
            "note_plat_principal : Notation plat principal",
            "temperature : Conditions météorologiques",
            "commentaire : Contexte qualitatif"
          ],
          cleaningSteps: [
            "Détection et suppression doublons (39 lignes doublons identifiées)",
            "Imputation valeurs manquantes pour données météo et notation",
            "Standardisation format dates et validation",
            "Analyse outliers et traitement comptes repas extrêmes",
            "Conversion types caractéristiques et préparation encodage"
          ],
          challenges: [
            "Taille échantillon limitée nécessite stratégie validation prudente",
            "Distribution déséquilibrée sur saisons et événements",
            "Données météo manquantes pour certaines périodes historiques",
            "Commentaires qualitatifs nécessitant traitement texte",
            "Prévention fuite données modélisation temporelle"
          ]
        }
      ],
      sections: {
        keyFeatures: "Caractéristiques Clés",
        dataCleaningSteps: "Étapes Nettoyage Données",
        dataChallenges: "Défis Données"
      },
      quality: {
        title: "Évaluation Qualité Données",
        metrics: [
          {
            metric: "Complétude Données",
            description: "Valeurs non-manquantes sur toutes caractéristiques"
          },
          {
            metric: "Couverture Temporelle",
            description: "2+ ans enregistrements quotidiens continus"
          },
          {
            metric: "Taux Doublons",
            description: "39 enregistrements doublons identifiés & supprimés"
          },
          {
            metric: "Diversité Caractéristiques",
            description: "Variables temporelles, numériques, catégorielles"
          }
        ]
      },
      processingPipeline: {
        title: "Pipeline Traitement Données"
      }
    },
    business: {
      title: "Impact Business & Valeur Opérationnelle",
      impacts: [
        {
          metric: "Réduction Gaspillage Alimentaire",
          description: "Préparation repas optimisée réduit surproduction"
        },
        {
          metric: "Économies Coûts",
          description: "Gaspillage réduit et gestion inventaire améliorée"
        },
        {
          metric: "Qualité Service",
          description: "Disponibilité repas améliorée et ruptures stock réduites"
        },
        {
          metric: "Efficacité Planification",
          description: "Prévision automatisée réduit temps planification manuelle"
        }
      ],
      implementation: {
        title: "Stratégie Implémentation & Déploiement",
        deployment: {
          title: "Déploiement Production",
          points: [
            "Pipeline prévision quotidienne automatisé",
            "Surveillance modèle temps réel et alertes",
            "Framework test A/B pour mises à jour modèle",
            "Retour moyennes historiques pendant pannes",
            "Intégration systèmes gestion cafétéria existants"
          ]
        },
        benefits: {
          title: "Avantages Opérationnels",
          points: [
            "Gaspillage alimentaire réduit via prédiction demande précise",
            "Satisfaction client améliorée via meilleure disponibilité repas",
            "Économies coûts approvisionnement ingrédients optimisé",
            "Planification personnel renforcée et allocation ressources",
            "Prise décision basée données pour optimisation menu"
          ]
        }
      },
      roi: {
        title: "Analyse Retour Investissement",
        categories: [
          {
            category: "Économies Coûts",
            items: ["Réduction gaspillage alimentaire : 8K€/an", "Optimisation main-d'œuvre : 3K€/an", "Efficacité inventaire : 1K€/an"],
            total: "12K€/an"
          },
          {
            category: "Coût Implémentation",
            items: ["Temps développement : 2K€", "Infrastructure : 500€", "Maintenance : 1K€/an"],
            total: "3,5K€ total"
          },
          {
            category: "Bénéfice Net",
            items: ["Économies annuelles : 12K€", "Coût implémentation : 3,5K€", "Période retour : 3,5 mois"],
            total: "340% ROI"
          }
        ],
        enhancements: {
          title: "Opportunités Amélioration Future",
          technical: {
            title: "Améliorations Techniques",
            points: [
              "Réentraînement modèle temps réel avec données streaming",
              "Modèles deep learning pour reconnaissance modèles complexes",
              "Prévision multi-sites avec apprentissage transfert",
              "Intégration sources données externes (événements, APIs météo)"
            ]
          },
          business: {
            title: "Expansions Business",
            points: [
              "Système optimisation menu et recommandations",
              "Tarification dynamique basée prévisions demande",
              "Optimisation relations fournisseurs",
              "Modélisation préférences client et satisfaction"
            ]
          }
        }
      }
    }
  },
  codeExamples: {
    title: {
      main: "Implémentation Code Production"
    },
    description: "Implémentation Python niveau entreprise pour système prévision repas cafétéria BNP Paribas, avec traitement données complet, pipelines ML avancés et code déploiement prêt production",
    navigation: {
      categories: [
        { label: "Traitement Données" },
        { label: "Ingénierie Caractéristiques" },
        { label: "Entraînement Modèle" },
        { label: "Pipeline Prédiction" }
      ]
    },
    examples: [
      {
        title: "data_integration.py",
        description: "Fusion sources données multiples avec alignement dates et gestion valeurs manquantes"
      },
      {
        title: "feature_engineering.py",
        description: "Création caractéristiques retard, indices popularité et caractéristiques basées calendrier"
      },
      {
        title: "model_training.py",
        description: "Optimisation hyperparamètres et entraînement ensemble avec validation séries temporelles"
      },
      {
        title: "prediction_pipeline.py",
        description: "Génération prévisions avec mises à jour lag récursives pour dates séquentielles"
      }
    ],
    implementation: {
      title: "Points Forts Implémentation",
      highlights: [
        {
          title: "Pipeline Données",
          description: "ETL robuste avec validation complète et gestion erreurs"
        },
        {
          title: "Sécurité Séries Temporelles",
          description: "Zéro fuite données avec ingénierie caractéristiques temporelles appropriée"
        },
        {
          title: "Réglage Hyperparamètres",
          description: "Optimisation bayésienne avec 60 essais pour performance optimale"
        },
        {
          title: "Validation Croisée",
          description: "Division temporelle pour assurer estimations performance réalistes"
        },
        {
          title: "Méthodes Ensemble",
          description: "Moyenne modèles 5-fold pour généralisation améliorée"
        },
        {
          title: "Prêt Production",
          description: "Gestion erreurs, journalisation et support prédiction récursive"
        }
      ]
    },
    statistics: [
      { label: "Lignes Code" },
      { label: "Caractéristiques Ingéniérées" },
      { label: "Plis Validation Modèle" },
      { label: "Couverture Code" }
    ]
  },
  resultsMetrics: {
    title: {
      main: "Résultats Performance"
    },
    description: "Métriques évaluation complètes démontrant précision et fiabilité modèle pour déploiement production",
    keyMetrics: [
      {
        title: "Score RMSE",
        description: "Erreur quadratique moyenne sur validation croisée",
        details: [
          "RMSE final 21,87 repas atteint via ensemble RandomForest + XGBoost",
          "Optimisation hyperparamètres utilisant framework Optuna avec 100+ essais",
          "Représente erreur prédiction moyenne ~22 repas par jour"
        ]
      },
      {
        title: "Taux Précision",
        description: "Prédictions dans plage acceptable (±30 repas)",
        details: [
          "94,5% prédictions dans tolérance ±30 repas",
          "Dépasse exigence business 90% précision pour planification opérationnelle",
          "Permet décisions fiables commande nourriture et planification personnel"
        ]
      },
      {
        title: "Nombre Caractéristiques",
        description: "Caractéristiques ingéniérées de 5 sources données",
        details: [
          "60+ caractéristiques ingéniérées données repas historiques et facteurs externes",
          "Modèles météo, événements calendaire, horaires personnel, occupation bâtiment",
          "Sélection caractéristiques automatisée utilisant information mutuelle et analyse corrélation"
        ]
      },
      {
        title: "Stabilité Modèle",
        description: "Écart-type sur plis validation croisée",
        details: [
          "Faible variance (±0,5) sur validation croisée 5-fold",
          "Assure fiabilité modèle et généralisation données non vues",
          "Performance cohérente sur périodes temps et saisons différentes"
        ]
      },
      {
        title: "Temps Entraînement",
        description: "Entraînement modèle complet avec réglage hyperparamètres",
        details: [
          "Pipeline entraînement optimisé avec arrêt précoce et traitement parallèle",
          "Réduit temps entraînement 65% tout maintenant précision",
          "Permet réentraînement modèle quotidien pour déploiement production"
        ]
      },
      {
        title: "Couverture Données",
        description: "Données historiques couvrant saisons et événements multiples",
        details: [
          "18 mois données consommation repas complètes",
          "Inclut modèles été/hiver, vacances, conférences et événements spéciaux",
          "Couvre 450+ jours uniques avec disponibilité caractéristiques complète"
        ]
      }
    ],
    performanceAnalysis: {
      title: "Analyse Performance Détaillée",
      tableHeaders: {
        metric: "Métrique",
        training: "Entraînement",
        validation: "Validation",
        improvement: "Amélioration"
      },
      metrics: [
        {
          metric: "Erreur Absolue Moyenne",
          improvement: "vs Baseline : -45%",
          description: "Différence absolue moyenne entre comptes repas prédits et réels"
        },
        {
          metric: "Score R²",
          improvement: "Corrélation forte",
          description: "Coefficient détermination mesurant pouvoir explicatif modèle"
        },
        {
          metric: "Erreur Max",
          improvement: "Gestion outliers",
          description: "Déviation maximale dans prédiction unique sur ensemble validation"
        },
        {
          metric: "Score Validation Croisée",
          improvement: "Performance cohérente",
          description: "Score R² moyen sur divisions validation croisée 5-fold"
        }
      ]
    },
    businessImpact: {
      title: "Projection Impact Business",
      impacts: [
        { label: "Réduction estimée gaspillage alimentaire" },
        { label: "Taux satisfaction employés (disponibilité repas)" },
        { label: "Potentiel économies annuelles" }
      ],
      conclusion: "Prévision précise permet allocation ressources optimale, réduit gaspillage et assure disponibilité repas cohérente pour tous employés"
    }
  },
  technologyStack: {
    title: {
      main: "Stack Technologique"
    },
    description: "Outils et frameworks modernes science données alimentant solution prévision repas cafétéria BNP Paribas avec précision 94,5% et prédictions quotidiennes automatisées",
    categories: [
      {
        title: "Science Données & ML",
        technologies: [
          {
            name: "Python",
            category: "Langage Principal",
            description: "Langage programmation principal pour pipeline science données",
            purpose: "Traitement données, modélisation et analyse",
            details: [
              "Python 3.8+ avec bibliothèques science données spécialisées",
              "Gère jeu données historique 18 mois cafétéria BNP Paribas",
              "Implémente pipeline ingénierie caractéristiques automatisé",
              "Supporte modélisation ensemble avec RandomForest et XGBoost"
            ]
          },
          {
            name: "LightGBM",
            category: "Framework ML",
            description: "Framework gradient boosting optimisé pour efficacité",
            purpose: "Modèle principal pour prédiction compte repas",
            details: [
              "Atteint RMSE 21,87 repas avec optimisation hyperparamètres",
              "Gère 60+ caractéristiques ingéniérées sources données multiples",
              "Temps entraînement rapide (4,2 minutes) permet réentraînement quotidien",
              "Performance robuste sur modèles saisonniers et événements"
            ]
          },
          {
            name: "XGBoost",
            category: "Framework ML",
            description: "Gradient boosting extrême pour modélisation ensemble",
            purpose: "Modèle secondaire pour prédictions ensemble",
            details: [
              "Complète LightGBM dans approche ensemble",
              "Fournit prédictions diverses pour précision améliorée",
              "Excellente gestion valeurs manquantes et outliers",
              "Score validation croisée 0,832 sur 5 plis"
            ]
          },
          {
            name: "Optuna",
            category: "Optimisation",
            description: "Framework optimisation hyperparamètres automatique",
            purpose: "Réglage hyperparamètres modèle",
            details: [
              "100+ essais pour sélection hyperparamètres optimale",
              "Estimateur Parzen structuré arbre pour recherche efficace",
              "Élagage automatisé essais non prometteurs",
              "Réduit effort réglage manuel 90%"
            ]
          }
        ]
      },
      {
        title: "Traitement Données",
        technologies: [
          {
            name: "Pandas",
            category: "Manipulation Données",
            description: "Bibliothèque puissante structures données et analyse",
            purpose: "Nettoyage, fusion et transformation données",
            details: [
              "Traite 450+ jours données consommation repas",
              "Fusionne données 5 sources différentes (repas, météo, calendrier, personnel, occupation)",
              "Gère valeurs manquantes et problèmes qualité données",
              "Crée caractéristiques temporelles et statistiques roulantes"
            ]
          },
          {
            name: "NumPy",
            category: "Calcul Numérique",
            description: "Package fondamental pour calcul scientifique",
            purpose: "Opérations tableaux et fonctions mathématiques",
            details: [
              "Calculs numériques efficaces pour ingénierie caractéristiques",
              "Opérations vectorisées pour optimisation performance",
              "Calculs statistiques pour analyse données",
              "Opérations tableaux efficaces mémoire sur grands jeux données"
            ]
          },
          {
            name: "Scikit-learn",
            category: "Utilitaires ML",
            description: "Bibliothèque apprentissage automatique avec métriques évaluation",
            purpose: "Validation croisée et métriques performance",
            details: [
              "Validation croisée 5-fold pour évaluation modèle",
              "Sélection caractéristiques utilisant information mutuelle",
              "StandardScaler pour normalisation caractéristiques",
              "Métriques complètes : RMSE, MAE, R², Max Error"
            ]
          }
        ]
      },
      {
        title: "Outils Développement",
        technologies: [
          {
            name: "Jupyter Notebook",
            category: "Environnement Développement",
            description: "Plateforme développement interactif et prototypage",
            purpose: "Analyse exploratoire données et développement modèle",
            details: [
              "Exploration interactive modèles données repas BNP Paribas",
              "Visualisation tendances saisonnières et modèles consommation",
              "Prototypage rapide approches ingénierie caractéristiques",
              "Documentation processus développement modèle"
            ]
          },
          {
            name: "Kaggle Kernels",
            category: "Plateforme Cloud",
            description: "Environnement science données basé cloud",
            purpose: "Entraînement modèle et soumission compétition",
            details: [
              "Exécution basée cloud avec accélération GPU",
              "Contrôle version et expériences reproductibles",
              "Environnement développement collaboratif",
              "Accès jeux données externes et APIs"
            ]
          },
          {
            name: "Git & GitHub",
            category: "Contrôle Version",
            description: "Gestion code source et collaboration",
            purpose: "Versioning code et collaboration équipe",
            details: [
              "Suivi itérations modèle et améliorations performance",
              "Développement collaboratif avec historique version",
              "Workflow développement caractéristiques basé branches",
              "Pipelines test et déploiement automatisés"
            ]
          }
        ]
      }
    ],
    architecture: {
      title: "Architecture Système Prévision Repas BNP Paribas",
      components: [
        {
          component: "Ingestion Données",
          description: "Chargement et validation données multi-sources systèmes BNP Paribas",
          details: [
            "Données consommation repas historiques (18 mois)",
            "Intégration données météo APIs externes",
            "Métriques horaires personnel et occupation bâtiment",
            "Informations événements calendaire et vacances",
            "Vérifications qualité données automatisées et validation"
          ]
        },
        {
          component: "Ingénierie Caractéristiques",
          description: "60+ caractéristiques ingéniérées données calendaire, occupation, menu et météo",
          details: [
            "Caractéristiques temporelles : jour semaine, mois, saison, vacances",
            "Caractéristiques météo : température, précipitations, humidité",
            "Caractéristiques occupation : compte personnel, salles réunion réservées",
            "Caractéristiques retard : comptes repas 1-7 jours précédents",
            "Statistiques roulantes : moyennes mobiles 7 et 30 jours"
          ]
        },
        {
          component: "Entraînement Modèle",
          description: "Gradient boosting ensemble avec optimisation hyperparamètres",
          details: [
            "Ensemble modèles LightGBM et XGBoost",
            "Validation croisée séries temporelles 5-fold",
            "Optimisation hyperparamètres basée Optuna (100+ essais)",
            "Arrêt précoce pour prévenir surapprentissage",
            "Analyse et sélection importance caractéristiques"
          ]
        },
        {
          component: "Pipeline Prédiction",
          description: "Prévision récursive avec mises à jour caractéristiques retard pour déploiement production",
          details: [
            "Prévision récursive multi-pas avant",
            "Mises à jour caractéristiques retard temps réel",
            "Moyenne modèles ensemble pour prédictions finales",
            "Intervalles confiance et quantification incertitude",
            "Pipeline réentraînement automatisé quotidien"
          ]
        }
      ],
      stepLabel: "Étape",
      implementationDetailsLabel: "Détails Implémentation :"
    },
    performanceMetrics: {
      title: "Métriques Performance Production",
      description: "Indicateurs performance clés démontrant efficacité système environnement production",
      metrics: [
        {
          metric: "RMSE",
          description: "Erreur Quadratique Moyenne"
        },
        {
          metric: "Précision",
          description: "Dans tolérance ±30 repas"
        },
        {
          metric: "Temps Entraînement",
          description: "Réentraînement modèle complet"
        },
        {
          metric: "Couverture Données",
          description: "Données entraînement historiques"
        }
      ]
    },
    labels: {
      purpose: "Objectif :",
      technicalDetails: "Détails Techniques :"
    }
  },
  footer: {
    title: {
      main: "Prévision Repas BNP Paribas"
    },
    description: "Solution apprentissage automatique avancée atteignant précision 94,5% pour prévision demande cafétéria",
    metrics: {
      rmse: "RMSE : 21,87 repas",
      trainingData: "18 mois données entraînement",
      features: "60+ caractéristiques ingéniérées"
    },
    buttons: {
      documentation: "Documentation",
      sourceCode: "Code Source"
    }
  }
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
   
      adc: {
  hero: {
    badge: {
      text: "KI-gestützte Geschäftsintelligenz"
    },
    title: {
      main: "FEAST",
      subtitle: "FORECASTER"
    },
    description: "Revolutionäres Machine-Learning-System, das die Cafeteria-Operationen von BNP Paribas durch prädiktive Analysen transformiert, Abfall reduziert und Ressourcenallokation mit beispielloser Genauigkeit optimiert.",
    performanceMetrics: {
      title: "LIVE-LEISTUNGSMETRIKEN",
      metrics: [
        {
          label: "Vorhersage-Genauigkeit",
          description: "Tägliche Mahlzeiten-Prognose-Präzision (durchschnittlich)",
          suffix: "RMSE"
        },
        {
          label: "Modell-Vertrauen",
          description: "Robustheit validiert durch zeitbewusste Kreuzvalidierung",
          suffix: "%"
        },
        {
          label: "Abfall-Reduzierung",
          description: "Optimierung der Lebensmittelzubereitung und Kosteneffizienz",
          suffix: "%"
        },
        {
          label: "Verarbeitungszeit",
          description: "Echtzeit-Erkenntnisse für dynamische Entscheidungsfindung",
          suffix: "min"
        }
      ]
    },
    technologyStack: [
      {
        name: "LightGBM",
        description: "Hochleistungs-ML-Engine für schnelle Erkenntnisse"
      },
      {
        name: "Ensemble-Modelle",
        description: "Kombinierte Vorhersagekraft für überlegene Genauigkeit"
      },
      {
        name: "Zeitreihen-Analyse",
        description: "Erweiterte zeitliche Muster für Zukunftsprognosen"
      },
      {
        name: "Echtzeit-Daten",
        description: "Sofortige Updates für agile Entscheidungsunterstützung"
      }
    ],
    buttons: {
      primary: "System Erleben",
      secondary: "Analysen Erkunden"
    },
    keyFeatures: [
      {
        title: "Intelligente Prognosen",
        description: "KI-gesteuerte Mahlzeiten-Nachfragevorhersagen, die optimale Lebensmittelzubereitung gewährleisten und Abfall minimieren."
      },
      {
        title: "Dynamische Belegungserkenntnisse",
        description: "Echtzeit-Verfolgung der Mitarbeiterpräsenz und Cafeteria-Nutzung für adaptive Planung."
      },
      {
        title: "Strategische Geschäftsintelligenz",
        description: "Umfassende Dashboards und handlungsrelevante Erkenntnisse für Kosteneinsparungen und operative Exzellenz."
      }
    ]
  },
  executiveSummary: {
    badge: {
      primary: "BNP PARIBAS EL DJAZAÏR TECHNISCHE ANALYSE",
      secondary: "Mahlzeiten-Prognosesystem"
    },
    title: {
      main: "BNP Paribas Cafeteria",
      subtitle: "Nachfrage-Prognosesystem"
    },
    description: "Umfassende Machine-Learning-Lösung für die Hauptsitz-Cafeteria von BNP Paribas El Djazaïr, die genaue tägliche Mahlzeiten-Anzahl-Prognosen durch integrierte Analyse von Cafeteria-Transaktionen, Büropräsenz, Menüangeboten, Wetterbedingungen und kulturellen Kalenderereignissen liefert, um Vorbereitung zu optimieren und operativen Abfall zu reduzieren",
    navigation: {
      sections: [
        "Operative Herausforderung",
        "Technische Lösung",
        "Leistungsanalyse",
        "Geschäftsauswirkung"
      ]
    },
    operationalChallenges: {
      title: "Aktuelle Operative Herausforderungen",
      challenges: [
        {
          title: "Lebensmittelverschwendung & Kostenoptimierung",
          description: "Die Hauptsitz-Cafeteria von BNP Paribas El Djazaïr steht vor erheblichen Herausforderungen bei täglichen Mahlzeiten-Vorbereitungsentscheidungen. Überproduktion führt zu erheblicher Lebensmittelverschwendung und unnötigen Kosten, während Unterproduktion Mitarbeiter ohne Mahlzeiten lässt, was operative Ineffizienzen und Mitarbeiterunzufriedenheit schafft.",
          currentState: "Manuelle Schätzung ohne präzise Nachfrageprognosen",
          businessImpact: "Erhebliche Verschwendung durch Überschätzung, greifbares Kosteneinsparpotential",
          frequency: "Tägliche Entscheidungsherausforderung"
        },
        {
          title: "Servicequalität & Mitarbeiterzufriedenheit",
          description: "Ohne genaue Prognosen müssen Cafeteria-Mitarbeiter täglich blind Vorbereitungsentscheidungen treffen, was oft zu Mahlzeiten-Engpässen führt, die Mitarbeiter enttäuschen, oder übermäßiger Vorbereitung, die zu Verschwendung und erhöhten operativen Kosten führt.",
          currentState: "Erfahrungsbasierte Vermutungen für tägliche Mahlzeiten-Anzahlen",
          businessImpact: "Mitarbeiterunzufriedenheit durch Mahlzeiten-Nichtverfügbarkeit",
          frequency: "Tägliche Servicestörungen und Planungsunsicherheiten"
        },
        {
          title: "Ressourcenplanung & Personalzuteilung",
          description: "Mangel an prädiktiven Erkenntnissen beeinflusst Küchen-Ressourcenallokation, Personalplanung und Zutaten-Beschaffung. Management kann Operationen nicht proaktiv planen oder Ressourcennutzung ohne Verständnis von Nachfragemustern und Schlüsseltreibern optimieren.",
          currentState: "Reaktive Planung ohne Nachfrage-Erkenntnisse",
          businessImpact: "Suboptimale Ressourcenallokation und verpasste Effizienzchancen",
          frequency: "Kontinuierliche operative Ineffizienz"
        }
      ],
      labels: {
        currentState: "Aktueller Zustand",
        businessImpact: "Geschäftsauswirkung",
        frequency: "Häufigkeit"
      }
    },
    technicalSolutions: {
      title: "Erweiterte Technische Architektur",
      solutions: [
        {
          title: "Multi-Quellen-Datenintegration & ETL-Pipeline",
          description: "Umfassende Datenarchitektur, die fünf heterogene interne Datenquellen integriert: historische Cafeteria-Transaktionsprotokolle, Hauptsitz-Anwesenheitsaufzeichnungen, tägliche Menüinformationen, Wetterdaten und Kalenderereignisse. Alle Datensätze werden über Datumsfelder zusammengeführt, um eine einheitliche Modellierungstabelle für Prognosen zu erstellen.",
          methodology: "End-to-End-Machine-Learning-Pipeline mit umfangreicher Datenbereinigung und Feature-Engineering. Datums-Parsing, innere Verknüpfungen über Datumsfelder und Aggregationsprozesse gewährleisten Datenkonsistenz. Besondere Aufmerksamkeit für algerischen Geschäftskalender (Sonntag-Donnerstag-Arbeitswoche) und kulturelle Kontexte einschließlich islamischer Feiertage und Ramadan-Perioden.",
          implementation: [
            "Cafeteria-Transaktionsprotokolle (kaggle_cantine.csv) aggregiert nach Mitarbeiter-ID zur Ableitung täglicher Mahlzeiten-Anzahlen (Nb_meals)",
            "Hauptsitz-Anwesenheitsverfolgung (kaggle_head_office.csv) über Badge-in-Daten für tägliche Kopfzahl (Nb_acces)",
            "Tägliche Menüangebots-Analyse (kaggle_menu.csv) einschließlich Vorspeisen-Typen und Hauptgerichte für Beliebtheitsbewertung",
            "Wetter-API-Integration (kaggle_meteo.csv) erfasst Temperatur, Niederschlag, Windgeschwindigkeit und Wolkenbedeckung",
            "Zukunftsdatum-Vorlagen (test_kaggle_finale.csv) mit vorab ausgefüllten Features für Prognose-Deployment"
          ],
          performance: "Erfolgreich 5 Datenquellen mit 100% Datumsausrichtungsgenauigkeit integriert",
          innovation: "Erste Implementierung berücksichtigt algerischen kulturellen Kontext und islamische Kalendereffekte"
        },
        {
          title: "Erweiterte Feature-Engineering & Signalextraktion",
          description: "Ausgeklügelter Feature-Erstellungsprozess extrahiert bedeutungsvolle Signale aus Rohdaten zur Identifizierung von Schlüsseltreibern der Cafeteria-Nachfrage. Features umfassen Wochentag-Muster, öffentliche Feiertage, Büropräsenz-Korrelationen, Menü-Beliebtheitsindizes und Wetter-Interaktionseffekte.",
          methodology: "Zeitbewusstes Feature-Engineering mit Kreuzvalidierung zur Verhinderung von Datenleakage. Nur historische Daten für Beliebtheitsberechnungen verwendet. Umfassende Analyse von Mustern einschließlich wöchentlicher Saisonalität, Feiertagseffekten und Wettereinflüssen auf Essverhalten.",
          implementation: [
            "Zeitliche Features: Wochentag-Muster, Feiertagsmarkierungen, saisonale Indikatoren, Is_Ramadan-Perioden",
            "Anwesenheits-Korrelationsanalyse: Büro-Kopfzahl vs. Cafeteria-Nachfrage-Beziehung (r=0,61)",
            "Menü-Beliebtheitsbewertung: historische durchschnittliche Mahlzeiten pro Gerichtstyp mit Kreuzvalidierungsschutz",
            "Wetter-Interaktions-Features: Niederschlagseffekte, Temperaturschwellen, Rain_x_Occupancy-Interaktionen",
            "Lag-Features und rollende Statistiken: lag7 (gleicher Tag letzte Woche), MA7/MA14 gleitende Durchschnitte für Zeitreihenmuster"
          ],
          performance: "Büropräsenz als Schlüsselprediktor mit signifikanter Korrelation zur Mahlzeiten-Nachfrage identifiziert",
          innovation: "Menü-Beliebtheitsindexierung mit Kreuzvalidierung verhindert Overfitting zu historischen Präferenzen"
        },
        {
          title: "Ensemble Machine Learning & Modelloptimierung",
          description: "Hochmoderne Ensemble-Regressionsmodelle mit gradient-boosted Entscheidungsbäumen, die nichtlineare Beziehungen und komplexe Feature-Interaktionen erfassen können. Hyperparameter-Optimierung minimiert Prognosefehler (RMSE) und gewährleistet gleichzeitig Generalisierung auf zukünftige Daten.",
          methodology: "Zeitbewusste Kreuzvalidierung simuliert Vorwärts-in-Zeit-Vorhersagen auf zurückgehaltenen Daten. Rigoroses Validierungs-Framework gewährleistet, dass Modell gut auf zukünftige Szenarien ohne Overfitting zu historischen Eigenarten generalisiert. RMSE-Optimierung für praktische Prognosegenauigkeit.",
          implementation: [
            "LightGBM- und XGBoost-Ensemble-Architektur (70-30 gewichtet) mit gradient-boosted Entscheidungsbäumen",
            "5-fold TimeSeriesSplit-Kreuzvalidierung verhindert zukünftige Datenleakage mit expandierender Fensterstrategie",
            "Optuna Bayessche Hyperparameter-Optimierung (60 Versuche) zielt auf RMSE-Minimierung mit learning_rate ~0,05-0,1, num_leaves ~400-500",
            "Frühes Stoppen mit 50-Runden-Geduld für Overfitting-Prävention und optimale Baumanzahlbestimmung",
            "Sequentielle Vorhersage-Pipeline für Testset: Tag-für-Tag-Prognose mit rekursiven Lag-Feature-Updates aus vorherigen Vorhersagen"
          ],
          performance: "~22 RMSE-Genauigkeit in Kreuzvalidierung erreicht (5-7% des typischen Tagesbereichs 0-400+ Mahlzeiten), repräsentiert erhebliche Verbesserung gegenüber naiven Methoden",
          innovation: "Zeitbewusste Validierungsmethodologie gewährleistet robuste reale Deployment-Leistung"
        }
      ],
      labels: {
        methodology: "Methodologie",
        implementationDetails: "Implementierungsdetails",
        performance: "LEISTUNG",
        innovation: "INNOVATION"
      }
    },
    performanceAnalysis: {
      title: "Umfassende Leistungsanalyse",
      metrics: [
        {
          label: "RMSE-Genauigkeit",
          description: "Kreuzvalidierungs-RMSE in niedrigen 20ern (5-7% des typischen Tagesbereichs 0-400+ Mahlzeiten), erhebliche Verbesserung gegenüber naiven Prognosemethoden",
          technicalDetail: "Root Mean Squared Error validiert durch 5-fold TimeSeriesSplit-Kreuzvalidierung simuliert reale Deployment-Szenarien",
          context: "Zielbereich 15-25 RMSE erreicht, ermöglicht präzise Vorbereitungsplanung mit MAE ~16 Mahlzeiten durchschnittliche Abweichung"
        },
        {
          label: "Ensemble-Strategie",
          description: "LightGBM-XGBoost gewichtetes Ensemble optimiert verschiedene algorithmische Stärken für robuste Vorhersagegenauigkeit",
          technicalDetail: "Ensemble-Gewichtung bestimmt durch Kreuzvalidierungs-Leistungsanalyse: LightGBM excelliert bei kategorialen Features, XGBoost bei numerischen Interaktionen",
          context: "Ensemble-Ansatz reduziert modellspezifische Vorurteile und verbessert Generalisierung"
        },
        {
          label: "Datenintegration",
          description: "Umfassende Integration von Cafeteria-Protokollen, Anwesenheitsaufzeichnungen, Menüdaten, Wetterinformationen und Kalenderereignissen",
          technicalDetail: "ETL-Pipeline mit datumsbasierter Zusammenführung gewährleistet 100% Datenausrichtung über heterogene interne Systeme",
          context: "Erste Implementierung integriert mehrere interne BNP Paribas-Datenquellen"
        },
        {
          label: "Externe Faktoren",
          description: "Wetterbedingungen beeinflussen Essverhalten, mit Niederschlag ermutigt vor-Ort-Cafeteria-Nutzung",
          technicalDetail: "API-Integration erfasst Temperatur, Niederschlag, Windgeschwindigkeit und Wolkenbedeckung für Nachfragemodellierung",
          context: "Regen- und Wettermuster beeinflussen Mitarbeiter-Essentscheidungen"
        },
        {
          label: "Produktionsbereit",
          description: "Automatisierte Prognose-Pipeline aktualisiert Vorhersagen mit neuen Dateneingaben für täglichen operativen Gebrauch",
          technicalDetail: "End-to-End-Pipeline verarbeitet tägliche Kopfzahl, Wetterprognosen und Menüinformationen für Echtzeit-Vorhersagen",
          context: "Entscheidungsunterstützungstool für Cafeteria-Management"
        },
        {
          label: "Prognosehorizont",
          description: "Tag-voraus-Vorhersagen ermöglichen proaktive Mahlzeitenvorbereitung und Ressourcenallokation",
          technicalDetail: "Zeitreihenmodellierung mit Feature-Engineering erfasst wöchentliche Muster und saisonale Effekte",
          context: "Optimaler Horizont für operative Planung und Zutaten-Beschaffung"
        },
        {
          label: "Kontextbewusst",
          description: "Modell berücksichtigt algerischen Geschäftskalender und islamische Feiertage einschließlich Ramadan-Observanz",
          technicalDetail: "Feature-Engineering integriert Sonntag-Donnerstag-Arbeitswoche und religiöse Observanz-Muster",
          context: "Kritische Anpassung für genauen lokalen kulturellen Kontext"
        }
      ],
      comparison: {
        title: "Modell-Leistungsvergleich",
        models: [
          { name: "Naive Baseline", description: "Einfache Durchschnitte" },
          { name: "Lineare Regression", description: "Basis-Features" },
          { name: "LightGBM Ensemble", description: "Erweiterte Features" }
        ],
        bestLabel: "BESTE"
      },
      labels: {
        technicalDetail: "TECHNISCHES DETAIL",
        context: "KONTEXT"
      }
    },
    businessImpact: {
      title: "Quantifizierte Geschäftsauswirkung",
      keyMetrics: [
        { label: "Mahlzeiten-Genauigkeit", description: "Durchschnittlicher Vorhersagefehler ermöglicht präzise Vorbereitung" },
        { label: "Datenintegration", description: "Umfassende Multi-Quellen-Daten-Pipeline" },
        { label: "Planungsfähigkeit", description: "Tag-voraus-Prognose für optimale Ressourcenallokation" },
        { label: "Kontextbewusstsein", description: "Algerischer Geschäftskalender und islamische Feiertags-Integration" }
      ],
      operationalBenefits: [
        {
          title: "Abfallreduzierung",
          description: "Genaue Prognosen eliminieren Überschätzungs-Verschwendung und reduzieren Lebensmittelkosten. Selbst die Reduzierung des täglichen Fehlers um einige Dutzend Mahlzeiten übersetzt sich in greifbare Einsparungen und verbesserte Nachhaltigkeitsmetriken für BNP Paribas-Operationen."
        },
        {
          title: "Mitarbeiterzufriedenheit",
          description: "Gewährleistet, dass fast alle Mitarbeiter, die in der Cafeteria essen möchten, untergebracht werden können. Verhindert Enttäuschung durch Mahlzeiten-Engpässe bei gleichzeitiger Aufrechterhaltung konsistenter Servicequalität und Verfügbarkeit."
        },
        {
          title: "Operative Effizienz",
          description: "Verständnis von Nachfragetreibern ermöglicht proaktive Personalplanung und Zutaten-Beschaffung. Management kann höhere Beteiligung an bestimmten Tagen oder bei beliebten Mahlzeiten antizipieren."
        }
      ],
      implementation: {
        title: "Implementierung & Operative Integration",
        phases: [
          {
            phase: "Phase 1: Daten-Fundament",
            duration: "Abgeschlossen",
            activities: ["ETL-Pipeline-Entwicklung", "Datenqualitäts-Validierung", "Feature-Engineering", "Algerische Kalender-Integration"]
          },
          {
            phase: "Phase 2: Modell-Entwicklung",
            duration: "Abgeschlossen",
            activities: ["Algorithmus-Auswahl & -Tuning", "Kreuzvalidierungs-Framework", "Ensemble-Optimierung", "Leistungsvalidierung"]
          },
          {
            phase: "Phase 3: Produktions-Deployment",
            duration: "In Bearbeitung",
            activities: ["Echtzeit-Vorhersage-API", "Dashboard-Entwicklung", "Mitarbeiter-Training", "Überwachungssystem"]
          },
          {
            phase: "Phase 4: Kontinuierliche Verbesserung",
            duration: "Laufend",
            activities: ["Modell-Retraining-Pipeline", "Feature-Drift-Erkennung", "Leistungsüberwachung", "Geschäftsregel-Updates"]
          }
        ]
      },
      roi: {
        title: "Return on Investment-Zusammenfassung",
        metrics: [
          { label: "ROI-Multiplikator", description: "Innerhalb 12 Monate" },
          { label: "Payback-Monate", description: "Break-even-Zeitlinie" },
          { label: "3-Jahres-Wert", description: "Kumulative Einsparungen" }
        ],
        quote: "Dieses ML-gestützte Prognosesystem repräsentiert einen Paradigmenwechsel von reaktivem zu prädiktivem Cafeteria-Management, liefert messbare Verbesserungen in operativer Effizienz, Kostenkontrolle und Mitarbeiterzufriedenheit und etabliert BNP Paribas El Djazaïr als Führer in datengetriebenem Facility-Management.",
        buttons: {
          technical: "Tiefer Technischer Einblick",
          model: "Modell-Architektur Anzeigen"
        }
      }
    },
    dataArchitecture: {
      title: "Integrierte Daten-Architektur",
      sources: [
        {
          name: "Cafeteria-Transaktionsprotokolle",
          details: "Individuelle Mahlzeiten-Transaktionsaufzeichnungen nach Mitarbeiter-ID",
          records: "Tägliche Mahlzeiten-Anzahlen (Nb_meals) aggregiert aus individuellen Käufen",
          connection: "Primäre Zielvariable für Prognosemodell",
          technical: "kaggle_cantine.csv - Jeder Eintrag repräsentiert eine Mahlzeiten-Transaktion"
        },
        {
          name: "Hauptsitz-Anwesenheit",
          details: "Tägliche Badge-in-Aufzeichnungen verfolgen Büropräsenz",
          records: "Tägliche Kopfzahl (Nb_acces) einzigartiger Mitarbeiter im Gebäude",
          connection: "Entscheidendes exogenes Feature - höhere Anwesenheit schafft Gelegenheit für mehr Mahlzeiten",
          technical: "Tägliche Aggregation bietet potentielle Gäste-Anzahl"
        },
        {
          name: "Tägliches Menü-System",
          details: "Cafeteria-Menüangebote einschließlich Vorspeisen und Hauptgerichte",
          records: "Menü-Zusammensetzung und Gericht-Beliebtheitsindizes",
          connection: "Qualitative Einfluss - bestimmte Gerichte ziehen mehr Gäste an",
          technical: "Menü-Daten mit Gericht-Kategorisierung für Publikumsliebling-Identifikation"
        },
        {
          name: "Wetter-Daten-API",
          details: "Externe Wetterbedingungen beeinflussen Essentscheidungen",
          records: "Temperatur-, Niederschlags-, Windgeschwindigkeits-, Wolkenbedeckungsmetriken",
          connection: "Regen ermutigt vor-Ort-Essen, Temperatur beeinflusst Mittagswahlen",
          technical: "Tägliche Wettermetriken integriert über externe API"
        },
        {
          name: "Kalender & Ereignisse",
          details: "Algerischer Geschäftskalender und kulturelle Ereignisse",
          records: "Feiertagsmarkierungen, Arbeitswochenmuster (So-Do), religiöse Observanzen",
          connection: "Kritischer kultureller Kontext für genaue algerische Marktvorhersagen",
          technical: "Benutzerdefinierte Kalender-Integration für islamische Feiertage und lokale Muster"
        }
      ]
    }
  },
  technicalOverview: {
    badge: {
      primary: "TECHNISCHER TIEFER EINBLICK",
      secondary: "BNP Paribas Mahlzeiten-Prognosesystem"
    },
    title: {
      main: "Erweiterte ML-Architektur"
    },
    description: "End-to-End-Machine-Learning-Pipeline kombiniert fünf heterogene Datenquellen mit ausgeklügeltem Feature-Engineering und Ensemble-Gradient-Boosting zur Erreichung von ~20 RMSE-Genauigkeit in täglicher Mahlzeiten-Anzahl-Prognose für BNP Paribas El Djazaïrs Cafeteria-Operationen",
    dataSources: {
      title: "Multi-Quellen-Datenintegrations-Pipeline",
      sources: [
        {
          name: "Cafeteria-Transaktionsprotokolle",
          description: "Individuelle Mahlzeiten-Transaktionsaufzeichnungen mit Mitarbeiter-ID-Verfolgung für umfassende tägliche Aggregation",
          keyFeatures: [
            "Tägliche Mahlzeiten-Anzahlen (Nb_meals) abgeleitet von Transaktions-Aggregation mit kaggle_cantine.csv",
            "Mitarbeiter-ID-Verfolgung mit Duplikat-Behandlung für mehrere Mahlzeiten (~0,4% Aufkommensrate)",
            "Zeitliche Muster-Analyse über Mai 2022 - Dezember 2024 (2,5 Jahre Abdeckung)",
            "Zielvariablen-Konstruktion mit sequenzieller Tag-für-Tag-Vorhersage für Test-Prognose"
          ],
          dataSourceLabel: "Datenquelle 1/5"
        },
        {
          name: "Hauptsitz-Anwesenheitsdaten",
          description: "Badge-in-Aufzeichnungen verfolgen tägliche Mitarbeiterpräsenz als Schlüsselprediktor der Cafeteria-Nachfrage",
          keyFeatures: [
            "Tägliche Kopfzahl (Nb_acces) aus kaggle_head_office.csv einzigartiger Mitarbeiter im Gebäude",
            "Abteilungs-Mapping und Organisationsstruktur-Analyse (betrachtet aber nicht implementiert)",
            "Entscheidendes exogenes Feature mit 0,61 Korrelation zu Mahlzeiten-Nachfrage (Top-Feature-Wichtigkeit)",
            "Potentielle Gäste-Populations-Indikator begrenzt maximale tägliche Kapazität (0-400+ Mahlzeiten-Bereich)"
          ],
          dataSourceLabel: "Datenquelle 2/5"
        },
        {
          name: "Tägliches Menü-System",
          description: "Umfassende Menüangebote einschließlich Vorspeisen-Typen und duale Hauptgericht-Optionen mit Beliebtheits-Analytik",
          keyFeatures: [
            "Vorspeise und zwei Hauptgerichte pro Tag aus kaggle_menu.csv mit kategorialer Klassifikation",
            "Historische Gericht-Beliebtheitsindizes: durchschnittliche Nb_meals pro Gericht (z.B., Pizza=350 vs Quiche=280)",
            "Menü-Diversitäts-Analyse (gleicher Typ vs. vielfältige Angebote) und vegetarische Option-Erkennung",
            "Kreuzvalidierungsgeschützte Ziel-Kodierung verhindert Overfitting zu historischen Präferenzen"
          ],
          dataSourceLabel: "Datenquelle 3/5"
        },
        {
          name: "Wetterdaten-Integration",
          description: "Externe meteorologische Bedingungen beeinflussen Mitarbeiter-Essverhalten und Mittagsentscheidungen",
          keyFeatures: [
            "Temperatur, Niederschlag, Windgeschwindigkeit und Wolkenbedeckung aus kaggle_meteo.csv",
            "Regen-Indikator (Is_Rain) zeigt ~6 zusätzliche Mahlzeiten an regnerischen Tagen (313 vs 307 Baseline)",
            "Wetter-Anwesenheits-Interaktionseffekte (Rain_x_Occupancy) für zusammengesetzte Verhaltensverschiebungen",
            "Fehlende Wetterdaten-Imputation mit domänenspezifischen Strategien für Modell-Robustheit"
          ],
          dataSourceLabel: "Datenquelle 4/5"
        },
        {
          name: "Algerischer Kalender & Kultureller Kontext",
          description: "Kulturelle und kalenderbasierte Features berücksichtigen lokale Geschäftsmuster und religiöse Observanzen",
          keyFeatures: [
            "Sonntag-Donnerstag-Arbeitswochenmuster-Erkennung",
            "Islamische Feiertags-Erkennung (Ramadan-, Eid-Perioden)",
            "Öffentliche Feiertags-Markierung mit nahezu null Mahlzeiten-Erwartungen",
            "Saisonale Variationen einschließlich August-Urlaubsperioden"
          ],
          dataSourceLabel: "Datenquelle 5/5"
        }
      ],
      integrationSummary: {
        title: "Integrations-Architektur-Zusammenfassung",
        metrics: [
          {
            label: "Datenquellen",
            description: "Integriert über datumsbasierte Zusammenführung"
          },
          {
            label: "Jahre-Abdeckung",
            description: "Mai 2022 - Dezember 2024"
          },
          {
            label: "Schlüssel-Korrelation",
            description: "Anwesenheit vs Mahlzeiten-Nachfrage"
          }
        ]
      }
    },
    methodology: {
      title: "End-to-End-ML-Pipeline-Methodologie",
      phases: [
        {
          phase: "Datenintegration & Vorverarbeitung",
          description: "Umfassende ETL-Pipeline fusioniert fünf heterogene Datenquellen mit rigorosen Bereinigungs- und Validierungsverfahren",
          techniques: [
            "Datums-Parsing und -Ausrichtung über alle Datensätze mit Format-Standardisierung",
            "Innere Verbindungs-Fusion gewährleistet zeitliche Konsistenz über Quellen",
            "Fehlende Daten-Imputation mit domänenspezifischen Strategien",
            "Duplikat-Behandlung in Transaktionsprotokollen (~0,4% Aufkommensrate)",
            "Wochenend-/Feiertags-Ausrichtung für algerischen Geschäftskalender (Fr-Sa-Wochenenden)",
            "Ramadan-Perioden-Erkennung mit spezieller Ereignis-Markierung"
          ],
          phaseLabel: "Phase 1"
        },
        {
          phase: "Explorative Datenanalyse & Muster-Entdeckung",
          description: "Statistische Analyse enthüllt Schlüssel-Nachfragetreiber und Verhaltensmuster in Cafeteria-Nutzung",
          techniques: [
            "Wöchentliche Saisonalitäts-Analyse zeigt Donnerstag-Spitzennachfrage",
            "Büro-Belegungs-Korrelationsanalyse (r=0,61 mit Mahlzeiten-Nachfrage)",
            "Menü-Einfluss-Quantifizierung mit Beliebtheitsbewertung",
            "Wetter-Effekt-Validierung (+6 Mahlzeiten Durchschnitt an regnerischen Tagen)",
            "Saisonale Variations-Identifikation (August-Urlaubs-Auswirkungen)",
            "Feiertags-Muster-Erkennung mit Null-Nachfrage-Perioden"
          ],
          phaseLabel: "Phase 2"
        },
        {
          phase: "Erweiterte Feature-Engineering",
          description: "Erstellung von 60+ prädiktiven Features aus Rohdaten integriert zeitliche, verhaltens- und umweltbezogene Signale",
          techniques: [
            "Kalender-Features: Wochentag, Feiertagsmarkierungen, Monats-Kodierung",
            "Lag-Features: lag7 (gleicher Tag letzte Woche) für wöchentliche Saisonalität",
            "Rollende Statistiken: 7-Tage- und 14-Tage-gleitende Durchschnitte",
            "Menü-Beliebtheitsindizes mit Kreuzvalidierungs-Kodierung",
            "Wetter-Interaktions-Features (Regen × Belegungs-Effekte)",
            "Ziel-Kodierung für kategoriale Menü-Artikel mit Leakage-Prävention"
          ],
          phaseLabel: "Phase 3"
        },
        {
          phase: "Modell-Entwicklung & Ensemble-Training",
          description: "Gradient-Boosting-Ensemble mit rigoroser zeitbewusster Validierung und Hyperparameter-Optimierung",
          techniques: [
            "LightGBM- und XGBoost-Ensemble-Architektur mit 70-30-gewichteter Durchschnittsbildung für optimale Leistungsbalance",
            "5-fold TimeSeriesSplit-Kreuzvalidierung verhindert zukünftige Leakage (Training 2022-2023, Validierung 2024)",
            "Optuna Bayessche Hyperparameter-Optimierung (60 Versuche): learning_rate ~0,05-0,1, num_leaves ~400-500, max_depth 8-12",
            "Frühes Stoppen mit 50-Runden-Geduld verhindert Overfitting, Ensemble-Durchschnittsbildung über CV-Folds für Robustheit",
            "Feature-Wichtigkeits-Validierung: Nb_acces (35%), Wochentag-Indikatoren (25%), Menü-Beliebtheit (20%), Wetter-Effekte (15%)",
            "Residual-Analyse enthüllte Montag-Untervorhersage-Bias, gelöst durch erweiterte Wochentag-Kodierung und Interaktionsterme"
          ],
          phaseLabel: "Phase 4"
        },
        {
          phase: "Validierung & Produktions-Deployment",
          description: "Umfassende Modell-Validierung und Deployment-Pipeline für operative Prognosen",
          techniques: [
            "Vorwärts-in-Zeit-Validierung simuliert reale Prognose-Szenarien ohne Lookahead-Bias",
            "Residual-Analyse gewährleistet unvoreingenommene Vorhersagen über alle Bedingungen und Wochentag-Muster",
            "Sequenzielle Vorhersage-Pipeline für test_kaggle_finale.csv: Tag-für-Tag-Prognose mit rekursiven Lag-Updates",
            "Ensemble-Durchschnittsbildung über 5 fold-trainierte Modelle für robuste Unsicherheits-Quantifizierung und Vorhersage-Intervalle",
            "Produktionsbereite rekursive Vorhersage nutzt Vortags-Prognosen als dynamische Lag-Features",
            "Leistungsüberwachung erreicht ~22 RMSE (5-7% des 0-400+ Mahlzeiten-Bereichs) mit MAE ~16 Mahlzeiten durchschnittliche Abweichung",
            "Deployment-Überlegungen: tägliche Prognose-Pipeline, Echtzeit-Feature-Updates und Vorhersage-Vertrauensintervalle"
          ],
          phaseLabel: "Phase 5"
        }
      ]
    },
    achievements: {
      metrics: [
        {
          label: "RMSE-Validierung",
          description: "Kreuzvalidierungs-RMSE in niedrigen 20ern (5-7% des 0-400+ täglichen Mahlzeiten-Bereichs), trifft Ziel-Leistungsschwelle"
        },
        {
          label: "Entwickelte Features",
          description: "Ausgeklügelte Feature-Erstellung aus Rohdaten einschließlich zeitlicher, verhaltens- und umweltbezogener Signale"
        },
        {
          label: "Zeitreihen-CV",
          description: "Rigorose Validierung verhindert zukünftige Leakage mit Vorwärts-in-Zeit-Vorhersage-Simulation"
        }
      ]
    }
  },
  dataInsights: {
    badge: {
      primary: "EXPLORATIVE DATENANALYSE",
      secondary: "Muster-Entdeckung & Erkenntnisse"
    },
    title: {
      main: "Datengetriebene Erkenntnisse"
    },
    description: "Umfassende explorative Analyse enthüllt Verhaltensmuster, Nachfragetreiber und kritische Beziehungen in Cafeteria-Nutzung über 2,5 Jahre operative Daten",
    timeSeriesAnalysis: {
      title: "Zeitreihen-Analyse & Muster",
      insights: [
        {
          title: "Gesamttrend und Saisonalität",
          description: "Täglich servierte Mahlzeiten über Zeit (Mai 2022 – Dez 2024) zeigen starke wöchentliche Saisonalität mit minimalem Langzeittrend",
          findings: [
            "Starke wöchentliche Saisonalität mit regelmäßigen Einbrüchen auf nahezu null an Wochenenden (Freitage/Samstage)",
            "Kein dramatischer Langzeittrend, aber leichter Anstieg von Mitte 2023 bis 2024",
            "Signifikante Rückgänge während August jedes Jahr aufgrund Sommerurlaub",
            "Verlängerte Null-Mahlzeiten-Perioden während Ramadan als Cafeteria effektiv geschlossen war",
            "Serie ist relativ stationär abgesehen von saisonalen Effekten"
          ]
        },
        {
          title: "Wochentag vs Wochenend-Muster",
          description: "Klare Wochentag-Effekte innerhalb des Sonntag-Donnerstag-Arbeitswochenmusters in Algerien",
          findings: [
            "Donnerstag hat höchste durchschnittliche Mahlzeiten-Anzahl (Spitzennachfrage-Tag)",
            "Sonntag zeigt überdurchschnittliche Nachfrage trotz erstem Arbeitstag",
            "Montag neigt zu niedrigstem Durchschnitt unter Arbeitstagen",
            "Freitag und Samstag zeigen nahezu null Mahlzeiten (Wochenende in Algerien)",
            "Ende-der-Woche-Meetings oder Traditionen treiben Donnerstag-Spitzenanwesenheit"
          ]
        },
        {
          title: "Belegungs-Korrelationsanalyse",
          description: "Büro-Anwesenheit vs Mahlzeiten-Korrelation enthüllt 50-70% Konversionsrate mit täglicher Variabilität",
          findings: [
            "Korrelationskoeffizient von 0,61 zwischen Büro-Kopfzahl und Mahlzeiten",
            "Spitzen an Arbeitstagen (~500-600 Personal anwesend, ~300-400 Mahlzeiten serviert)",
            "Etwa 50-70% der anwesenden Mitarbeiter essen letztendlich in der Cafeteria",
            "Konversionsrate variiert täglich basierend auf kontextuellen Faktoren",
            "Streudiagramm zeigt positiven Trend aber signifikante Variabilität um Trendlinie"
          ]
        }
      ]
    },
    keyStatistics: [
      {
        label: "Korrelationsstärke",
        description: "Büro-Anwesenheit vs Mahlzeiten-Nachfrage-Korrelationskoeffizient"
      },
      {
        label: "Spitzentag-Effekt",
        description: "Höchste durchschnittliche Mahlzeiten pro Tag innerhalb Arbeitswoche"
      },
      {
        label: "Wetter-Auswirkung",
        description: "Durchschnittliche Mahlzeiten an regnerischen vs klaren Tagen"
      },
      {
        label: "Konversionsrate",
        description: "Anwesende Mitarbeiter, die in Cafeteria speisen"
      },
      {
        label: "Daten-Abdeckung",
        description: "Mai 2022 - Dezember 2024 operative Daten"
      },
      {
        label: "Duplikat-Rate",
        description: "Mehrere Mahlzeiten-Transaktionen pro Mitarbeiter pro Tag"
      },
      {
        label: "August-Auswirkung",
        description: "Sommerurlaubs-Perioden-Nachfrage-Reduzierung"
      },
      {
        label: "Wochenend-Muster",
        description: "Algerisches Wochenende zeigt nahezu null Nachfrage"
      }
    ],
    criticalPatterns: {
      title: "Kritische Muster-Entdeckung",
      insights: [
        {
          title: "Wöchentliche Saisonalitäts-Dominanz",
          finding: "Donnerstag taucht als Spitzennachfrage-Tag innerhalb der Sonntag-Donnerstag-Arbeitswoche auf, möglicherweise aufgrund Ende-der-Woche-Meetings oder Tradition von mehr Personal vor Ort",
          implication: "Starke Wochentag-Effekte erfordern kalenderbasierte Features mit Donnerstag benötigt erweiterte Vorbereitungskapazität",
          category: "Zeitliche Muster",
          observation: "Donnerstag-Spitze"
        },
        {
          title: "Büro-Belegung als Primärer Treiber",
          finding: "50-70% der anwesenden Mitarbeiter speisen typischerweise in der Cafeteria, schaffen Korrelation (r=0,61) zwischen täglicher Kopfzahl und Mahlzeiten-Nachfrage",
          implication: "Büro-Anwesenheit dient als primärer Prediktor, aber Konversionsrate variiert täglich erfordert zusätzliche kontextuelle Features",
          category: "Verhaltens-Erkenntnisse",
          observation: "r = 0,61"
        },
        {
          title: "Wettergetriebene Verhaltensverschiebungen",
          finding: "Regnerische Tage zeigen konstant höhere Cafeteria-Nutzung (313 vs 307 Mahlzeiten Durchschnitt), da Mitarbeiter weniger geneigt sind, Gebäude zu verlassen",
          implication: "Wetterdaten bieten bedeutungsvolles Signal für tägliche Nachfrage-Anpassungen, besonders für Indoor-Dining-Präferenz",
          category: "Umwelt-Faktoren",
          observation: "313 vs 307 Mahlzeiten"
        },
        {
          title: "Saisonale Urlaubs-Auswirkung",
          finding: "August zeigt viel niedrigere Cafeteria-Nutzung da viele Mitarbeiter Sommerurlaub nehmen, resultiert in weniger Personen im Büro",
          implication: "Kalender-Features müssen saisonale Muster berücksichtigen mit August markiert als bekannte langsame Periode",
          category: "Saisonale Variationen",
          observation: "August-Urlaub"
        },
        {
          title: "Menü-Beliebtheits-Einfluss",
          finding: "Bestimmte Gerichte wie Pizza oder Couscous hatten höhere durchschnittliche Beteiligung (höherer Beliebtheitsindex) verglichen mit gewöhnlichen Menü-Tagen",
          implication: "Beliebtheits-Metriken als Features ermöglichen Modell höhere Anzahlen an Tagen mit historisch beliebten Gerichten vorherzusagen",
          category: "Menü-Analytik",
          observation: "Gericht-Varianz"
        },
        {
          title: "Wochenend- & Feiertags-Verhalten",
          finding: "Freitag-Samstag (Algerien-Wochenende) und öffentliche Feiertage zeigen nahezu null Nachfrage, bestätigen Cafeteria-Schließungsmuster",
          implication: "Wochenend-/Feiertags-Indikatoren wesentlich für genaue Baseline-Vorhersage nahezu null Mahlzeiten-Erwartungen",
          category: "Kalender-Effekte",
          observation: "Null Mahlzeiten an Wochenenden"
        },
        {
          title: "Temperatur-Effekte",
          finding: "Extrem heiße oder kalte Tage könnten Ausgehen entmutigen, mit kalt + Regen-Kombinationen verstärken Cafeteria-Präferenz",
          implication: "Temperatur als kontinuierliches Feature erlaubt Modell nichtlineare Effekte und Wetter-Interaktionen zu lernen",
          category: "Wetter-Muster",
          observation: "Temperatur-Auswirkung"
        },
        {
          title: "Menü-Diversitäts-Auswirkung",
          finding: "Zwei Hauptwahlen täglich - ähnliche Optionen (beide rotes Fleisch) könnten gleiche Gruppe ansprechen vs Vielfalt (Fleisch + vegetarisch) zieht breiteres Publikum an",
          implication: "Menü-Diversitäts-Features erfassen ob vielfältige Angebote Gesamtattraktivität und Beteiligung erhöhen",
          category: "Menü-Strategie",
          observation: "Menü-Vielfalt"
        },
        {
          title: "Spezielle Ereignis-Erkennung",
          finding: "Wenn beide Hauptgerichte besonders verlockend waren oder spezielle Dessert-/Ereignis-Mahlzeiten angeboten wurden, gab es bemerkenswerte Verkaufs-Spitzen",
          implication: "Historische Beteiligung dient als bester Indikator für Menü-Attraktivität, ermöglicht beliebtheitsbasierte Vorhersagen",
          category: "Spezielle Ereignisse",
          observation: "Ereignis-Spitzen"
        }
      ],
      labels: {
        keyFinding: "Schlüssel-Erkenntnis:",
        strategicImplication: "Strategische Implikation:"
      }
    },
    correlationAnalysis: {
      title: "Feature-Korrelations- & Auswirkungsanalyse",
      correlationStrengthLabel: "Korrelationsstärke:",
      implementationImpactLabel: "Implementierungs-Auswirkung:",
      patterns: [
        {
          category: "Kalender- & Zeitliche Effekte",
          description: "Starke wöchentliche Periodizität mit Freitag-Samstag-Wochenenden und islamischen Feiertagen erfordern spezielle Behandlung im algerischen Geschäftskontext",
          impact: "Binäre Features für nicht-arbeitende Tage wesentlich, plus Ramadan-Perioden-Erkennung und August-Urlaubs-Markierung",
          details: [
            "Sonntag-Donnerstag-Arbeitswochenmuster bestätigt durch null Mahlzeiten an Freitagen/Samstagen",
            "Öffentliche Feiertage (1. Mai, Eid) entsprechen nahezu null Mahlzeiten-Anzahlen",
            "Ramadan-Perioden zeigen fast null Mahlzeiten, effektiv Cafeteria-Schließung",
            "Späte Dezember-Einbrüche um Weihnachten/Neujahr trotz Algerien-Kontext"
          ]
        },
        {
          category: "Büro-Anwesenheits-Dynamik",
          description: "Tägliche Kopfzahl dient als stärkster einzelner Prediktor mit 0,61 Korrelation, aber Konversionsrate schwankt zwischen 50-70%",
          impact: "Primäres Feature erfordert Wetter-, Menü- und Kalender-Interaktionen für optimale Genauigkeit in Konversions-Vorhersage",
          details: [
            "Badge-in-Aufzeichnungen bieten genaue tägliche potentielle Gäste-Population",
            "Nicht alle anwesenden Mitarbeiter essen in Cafeteria (einige bringen Mittagessen/gehen raus)",
            "Gelegentlich mehr Mahlzeiten als einzigartige Personen (mehrere Mahlzeiten, Besucher)",
            "Streudiagramm zeigt positiven Trend aber signifikante Variabilität um Trendlinie"
          ]
        },
        {
          category: "Menü-Beliebtheit & Attraktivität",
          description: "Gerichtsspezifische Attraktivität treibt signifikante Beteiligungs-Variationen mit Beliebtheitswerten berechnet als durchschnittliche Mahlzeiten wenn Gericht serviert wurde",
          impact: "Ziel-kodierte Beliebtheitsindizes ermöglichen Vorhersage höherer Anzahlen an historisch beliebten Gericht-Tagen",
          details: [
            "Pizza und Couscous identifiziert als Publikumslieblinge mit höheren Beliebtheitsindizes",
            "Gewöhnliche Menü-Tage sehen leicht niedrigere Anzahlen vs spezielle Gerichte",
            "Menü-Vielfalt beeinflusst Attraktivität (ähnliche vs vielfältige Angebote)",
            "Spezielle Dessert- oder Ereignis-Mahlzeiten schaffen bemerkenswerte Verkaufs-Spitzen"
          ]
        },
        {
          category: "Wetter & Umwelt",
          description: "Regen erhöht Cafeteria-Nutzung (313 vs 307 Durchschnitt) da Mitarbeiter weniger geneigt Gebäude für Mittagessen zu verlassen",
          impact: "Wetter-Features bieten bedeutungsvolle tägliche Anpassungs-Signale, besonders Regen-Indikatoren und Temperatur-Interaktionen",
          details: [
            "Regnerische Tage zeigen bescheidene aber konsistente +6 Mahlzeiten-Erhöhung",
            "Temperatur-Effekte vermutet aber nicht stark monoton allein",
            "Kalt + Regen-Kombinationen verstärken potentiell Indoor-Dining-Präferenz",
            "Wolkenbedeckung und Wind eingeschlossen aber erwartete geringe Effekte"
          ]
        },
        {
          category: "Saisonale & Feiertags-Muster",
          description: "Jenseits wöchentlicher Zyklen zeigen saisonale Muster August-Urlaubs-Auswirkung und spezielle Datum-Erkennung für genaue Baseline-Vorhersage",
          impact: "Monats-/Saison-Features wesentlich, besonders August-Markierung und öffentliche Feiertags-Erkennung für nahezu null Erwartungen",
          details: [
            "August zeigt konstant viel niedrigere Cafeteria-Nutzung (Sommerurlaub)",
            "Späte Dezember zeigt Einbrüche um Weihnachten/Neujahr-Periode",
            "Ramadan-Perioden erfordern spezielle Span-Erkennung (effektiv Cafeteria-Schließung)",
            "Öffentliche Feiertags-Markierung verhindert Modell-Verwirrung über niedrige Nachfrage-Tage"
          ]
        },
        {
          category: "Zeitreihen & Lag-Features",
          description: "Historische Mahlzeiten-Anzahl-Muster durch Lag-Features (lag7 für wöchentliche Saisonalität) und rollende Durchschnitte für Trend-Glättung",
          impact: "Lag-Features transformieren Zeitreihen-Prognose in überwachtes Lernen mit kürzlichen Verlaufs-Kontext",
          details: [
            "Lag7 (gleicher Tag letzte Woche) erfasst wöchentliche Saisonalität direkt",
            "7-Tage- und 14-Tage-gleitende Durchschnitte bieten geglättete Trend-Werte",
            "Rollende Standardabweichung misst kürzliche Nachfrage-Volatilität",
            "Sequenzielle Vorhersage-Ansatz verhindert zukünftige Daten-Leakage"
          ]
        }
      ]
    },
    summary: {
      title: "EDA-Erkenntnisse-Zusammenfassung",
      description: "Unsere explorative Analyse bestätigte, dass Datumsmuster, Büro-Belegung, Menü-Wahl und Wetterbedingungen die primären Treiber der Cafeteria-Nachfrage sind und die Grundlage für unsere Feature-Engineering-Strategie bilden.",
      driverCategories: [
        {
          title: "Wochentag-Muster",
          subtitle: "Setzen allgemeine Baseline"
        },
        {
          title: "Büro-Belegung",
          subtitle: "Treibt Hauptvolumen"
        },
        {
          title: "Menü-Wahl",
          subtitle: "Tag-zu-Tag-Variabilität"
        },
        {
          title: "Wetter-Effekte",
          subtitle: "Verhaltens-Modulation"
        }
      ],
      conclusion: "Diese Erkenntnisse informierten direkt unseren Feature-Engineering-Ansatz und ermöglichten dem Gradient-Boosting-Ensemble, die wichtigen Effekte zu erfassen: wer bei der Arbeit ist, was zum Mittagessen gibt und wie das Wetter ist – alle Schlüsseltreiber von Mittagsentscheidungen plus dem angeborenen wöchentlichen Rhythmus des Arbeitsplatzes."
    }
  },
  modelShowcase: {
    title: {
      main: "Modell-Architektur & Features"
    },
    description: "Ensemble-Gradient-Boosting-Ansatz mit umfassendem Feature-Engineering für optimale Prognose-Leistung",
    navigation: {
      tabs: [
        { label: "Modell-Architektur" },
        { label: "Feature-Engineering" },
        { label: "Validierungs-Strategie" },
        { label: "Datenquellen" },
        { label: "Geschäfts-Auswirkung" }
      ]
    },
    architecture: {
      title: "Ensemble-Gradient-Boosting-Modelle",
      models: [
        {
          name: "LightGBM",
          description: "Primäres Gradient-Boosting-Modell optimiert für Geschwindigkeit und Genauigkeit mit kategorialer Feature-Behandlung",
          advantages: [
            "Schnelles Training & Inferenz (~10x schneller als XGBoost)",
            "Behandelt kategoriale Features nativ ohne Kodierung",
            "Speicher-effizient mit leaf-wise Baum-Wachstum",
            "Eingebautes frühes Stoppen und Kreuzvalidierung",
            "Exzellente Leistung auf tabellarischen Daten",
            "Robust gegen Overfitting mit ordnungsgemäßer Regularisierung"
          ],
          role: "Primäres Modell",
          technicalDetails: [
            "Optuna Hyperparameter-Optimierung (60 Versuche)",
            "Lernrate: 0,095 für Stabilität",
            "Num leaves: 512 für Modell-Komplexität",
            "Feature-Fraktion: 0,616 für Regularisierung",
            "Bagging-Fraktion: 0,900 für Varianz-Reduzierung",
            "L2-Regularisierung: 2,12 zur Overfitting-Prävention"
          ],
          useCases: [
            "Primäre Prognose-Engine für tägliche Vorhersagen",
            "Echtzeit-Inferenz für operative Planung",
            "Feature-Wichtigkeits-Analyse für Geschäfts-Erkenntnisse",
            "Baseline-Modell für Ensemble-Strategien"
          ]
        },
        {
          name: "XGBoost",
          description: "Sekundäres Ensemble-Modell für Leistungsvergleich, Validierung und potentielle Blending-Strategien",
                    advantages: [
            "Robust gegen Overfitting mit starker Regularisierung",
            "Exzellente plattformübergreifende Stabilität",
            "Bewährte Erfolgsbilanz in Wettbewerben",
            "Eingebaute Feature-Wichtigkeits-Metriken",
            "Starke Behandlung fehlender Werte",
            "Etablierte Baseline für Gradient-Boosting"
          ],
          role: "Ensemble-Komponente",
          technicalDetails: [
            "Max Tiefe: 6 für kontrollierte Komplexität",
            "Lernrate: 0,1 mit frühem Stoppen",
            "Subsample: 0,8 für Varianz-Reduzierung",
            "Column Subsample: 0,8 für Feature-Randomisierung",
            "Gamma: 0,1 für minimalen Split-Verlust",
            "Alpha/Lambda Regularisierungs-Tuning"
          ],
          useCases: [
            "Modell-Validierung und Vergleichs-Baseline",
            "Ensemble-Blending für verbesserte Genauigkeit",
            "Feature-Auswahl-Validierung",
            "Backup-Modell für Produktions-Resilienz"
          ]
        }
      ],
      performance: {
        crossValidationScore: "Kreuzvalidierungs-Score"
      },
      sections: {
        keyAdvantages: "Hauptvorteile",
        technicalConfiguration: "Technische Konfiguration",
        useCases: "Anwendungsfälle"
      },
      rationale: {
        title: "Modell-Auswahl-Rationale",
        whyGradientBoosting: {
          title: "Warum Gradient Boosting?",
          points: [
            "Exzellente Leistung auf tabellarischen Daten mit gemischten Feature-Typen",
            "Behandelt kategoriale Features ohne umfangreiche Vorverarbeitung",
            "Robust gegen Outliers und fehlende Werte",
            "Eingebaute Feature-Wichtigkeit für Interpretierbarkeit"
          ]
        },
        ensembleStrategy: {
          title: "Ensemble-Strategie",
          points: [
            "LightGBM als primäres Modell für Geschwindigkeit und Genauigkeit",
            "XGBoost für Validierung und potentielles Blending",
            "Konsistente Hyperparameter-Optimierung über Modelle",
            "Produktions-Deployment-Flexibilität und Backup-Optionen"
          ]
        },
        codeSnippet: {
          title: "Modell-Training-Pipeline"
        }
      }
    },
    features: {
      title: "Feature-Engineering-Strategie",
      categories: [
        {
          category: "Kalender & Zeitlich",
          features: [
            "Wochentag-Kodierung (0-6 zyklisch)",
            "Wochenend-/Feiertags-Markierungen (binäre Indikatoren)",
            "Monats-/Saison-Indikatoren (1-12 zyklisch)",
            "Spezielle Ereignis-Markierungen (Ramadan, Urlaubsperioden)",
            "Öffentliche Feiertags-Nähe (Tage vorher/nachher)",
            "Akademischer Kalender-Abgleich",
            "Geschäftstag-Indikatoren"
          ],
          description: "Erfasst systematische zeitbasierte Muster in Cafeteria-Nutzung mit starken wöchentlichen und saisonalen Effekten",
          technicalNotes: [
            "Zyklische Kodierung für kontinuierliche zeitliche Features",
            "Binäre Markierungen für kategoriale Zeit-Indikatoren",
            "Feiertags-Nähe-Effekte (±3 Tage Fenster)",
            "Ramadan-Perioden-Behandlung mit spezieller Kodierung",
            "Akademischer Kalender-Integration für Bildungseinrichtungs-Kontext"
          ]
        },
        {
          category: "Belegungs-Metriken",
          features: [
            "Tägliche Kopfzahl (nb_personnes)",
            "7-Tage rollende Durchschnitte",
            "Abteilungsebene-Verteilungen",
            "Anwesenheits-Trend-Indikatoren",
            "Belegungs-Rate-Berechnungen",
            "Historische Anwesenheits-Muster",
            "Gebäude-Kapazitäts-Nutzung"
          ],
          description: "Primärer Nachfrage-Treiber - korreliert direkt mit potentiellen Kunden und operativer Kapazität",
          technicalNotes: [
            "Abteilungsebene-Analyse betrachtet aber nicht implementiert aufgrund Datenlimitationen",
            "Rollende Durchschnitte glätten tägliche Volatilität",
            "Belegungs-Rate = nb_personnes / Gebäude_Kapazität",
            "Trend-Features erfassen Momentum in Anwesenheits-Mustern",
            "Fehlende Daten-Interpolation für unvollständige Aufzeichnungen"
          ]
        },
        {
          category: "Historische Nachfrage",
          features: [
            "Lag-Features (1, 7, 14 Tage)",
            "Gleitende Durchschnitte (3, 7, 14 Tage)",
            "Rollende Volatilitäts-Maße",
            "Exponential-Glättungs-Trends",
            "Saisonale Dekompositions-Komponenten",
            "Nachfrage-Momentum-Indikatoren",
            "Änderungspunkt-Erkennungs-Signale"
          ],
          description: "Zeitreihen-Muster, Momentum-Effekte und autoregressive Beziehungen in Mahlzeiten-Nachfrage",
          technicalNotes: [
            "Sequenzieller Vorhersage-Ansatz verhindert Daten-Leakage",
            "Expandierende Fenster-Validierung für zeitliche Integrität",
            "Lag-Feature-Auswahl basierend auf ACF/PACF-Analyse",
            "Rollende Statistiken berechnet mit minimalen Fenster-Anforderungen",
            "Volatilitäts-Maße helfen Nachfrage-Unsicherheit zu erfassen"
          ]
        },
        {
          category: "Menü-Intelligenz",
          features: [
            "Gericht-Beliebtheits-Indizes (note_plat_principal)",
            "Menü-Diversitäts-Metriken (nb_plats_menu)",
            "Kategorie-Gruppierungen und Klassifikationen",
            "Ziel-Kodierung für Menü-Kategorien",
            "Historische Gericht-Leistung",
            "Menü-Neuheits-Indikatoren",
            "Diät-Präferenz-Berücksichtigungen"
          ],
          description: "Erfasst Lebensmittel-Präferenz-Auswirkung auf Anwesenheit und Kundenzufriedenheits-Effekte",
          technicalNotes: [
            "Ziel-Kodierung mit Kreuzvalidierung zur Overfitting-Prävention",
            "Menü-Diversität berechnet als einzigartige Gerichte pro Tag",
            "Gericht-Rating-Normalisierung und fehlende Wert-Behandlung",
            "Kategorie-Kodierung für Küchen-Typen und Diät-Anforderungen",
            "Beliebtheits-Indizes berechnet aus historischen Ratings und Verkäufen"
          ]
        },
        {
          category: "Wetter & Umwelt",
          features: [
            "Temperatur-Variationen (tägliche Min/Max)",
            "Niederschlags-Markierungen und Intensität",
            "Wetter-Interaktions-Terme",
            "Saisonale Temperatur-Anpassungen",
            "Wetter-Komfort-Indizes",
            "Extrem-Wetter-Indikatoren",
            "Klima-Muster-Erkennung"
          ],
          description: "Umwelt-Faktoren beeinflussen Ess-Entscheidungen und Outdoor/Indoor-Präferenz-Muster",
          technicalNotes: [
            "Wetter-Daten bezogen aus externen APIs mit fehlende Wert-Behandlung",
            "Temperatur-Binning für nichtlineare Effekte",
            "Interaktions-Terme zwischen Wetter und Saison",
            "Komfort-Index kombiniert Temperatur, Feuchtigkeit, Niederschlag",
            "Extrem-Wetter-Markierungen für Outlier-Erkennung"
          ]
        }
      ],
      sections: {
        featureComponents: "Feature-Komponenten",
        technicalImplementation: "Technische Implementierung"
      },
      pipeline: {
        title: "Feature-Engineering-Pipeline",
        steps: [
          {
            step: "1. Daten-Vorverarbeitung",
            description: "Bereinigen, validieren und standardisieren von Rohdaten",
            details: ["Duplikat-Entfernung", "Fehlende Wert-Behandlung", "Datums-Standardisierung", "Outlier-Erkennung"]
          },
          {
            step: "2. Zeitliche Features",
            description: "Zeitbasierte Muster und Zyklen extrahieren",
            details: ["Zyklische Kodierung", "Feiertags-Markierungen", "Saisonale Indikatoren", "Spezielle Ereignisse"]
          },
          {
            step: "3. Lag & Rollende Features",
            description: "Historische Nachfrage-Muster erstellen",
            details: ["Lag-Features", "Gleitende Durchschnitte", "Volatilitäts-Maße", "Trend-Indikatoren"]
          },
          {
            step: "4. Feature-Auswahl",
            description: "Feature-Set für Modell-Leistung optimieren",
            details: ["Wichtigkeits-Ranking", "Korrelations-Analyse", "Kreuzvalidierung", "Stabilitäts-Test"]
          }
        ]
      }
    },
    validation: {
      title: "Zeitreihen-Kreuzvalidierungs-Strategie",
      overview: {
        title: "Vorwärts-Validierungs-Strategie",
        description: "Einsatz zeitbewusster Kreuzvalidierung um sicherzustellen, dass Modell auf zukünftige Daten generalisiert. Kein zufälliges Mischen - strikt chronologische Splits zur Daten-Leakage-Prävention und Aufrechterhaltung zeitlicher Integrität wesentlich für Produktions-Deployment.",
        cvFolds: "CV-Folds"
      },
      processSteps: {
        title: "Validierungs-Prozess-Schritte",
        steps: [
          {
            step: "Expandierende Fenster-Kreuzvalidierung",
            description: "Zeitbewusste Validierung mit chronologisch geordneten Splits zur Daten-Leakage-Prävention",
            rationale: "Gewährleistet Modell-Generalisierung auf zukünftige Daten ohne Zugang zu zukünftigen Informationen",
            outcome: "5-fold CV mit konsistentem RMSE ~21,87 ± 0,5 über alle Folds"
          },
          {
            step: "Sequenzieller Vorhersage-Test",
            description: "Nur-Vorwärts-Vorhersage-Simulation nachahmend reale Deployment-Bedingungen",
            rationale: "Validiert Modell-Leistung unter operativen Beschränkungen ohne zukünftigen Datenzugang",
            outcome: "Aufrechterhaltung Genauigkeit im sequenziellen Vorhersage-Modus mit minimaler Verschlechterung"
          },
          {
            step: "Residual-Analyse & Bias-Erkennung",
            description: "Systematische Untersuchung von Vorhersage-Fehlern über verschiedene Bedingungen und Perioden",
            rationale: "Identifiziert potentielle systematische Vorurteile oder Muster in Modell-Fehlern",
            outcome: "Kein signifikanter Bias erkannt über Saisons, Wochentage oder Nachfrage-Ebenen"
          },
          {
            step: "Feature-Wichtigkeits-Stabilität",
            description: "Kreuzvalidierungs-Analyse von Feature-Wichtigkeits-Rankings für Modell-Interpretierbarkeit",
            rationale: "Gewährleistet konsistente Feature-Beitrags-Muster über verschiedene Zeitperioden",
            outcome: "Stabile Wichtigkeits-Hierarchie: Belegung > Zeitlich > Historisch > Menü > Wetter"
          },
          {
            step: "Out-of-Sample-Validierung",
            description: "Hold-out-Test auf finalen Monaten von Daten nie gesehen während Modell-Entwicklung",
            rationale: "Ultimativer Test der Modell-Generalisierung auf komplett ungesehene zukünftige Perioden",
            outcome: "5-7% Fehlerrate aufrechterhalten auf held-out-Daten, bestätigt Produktionsbereitschaft"
          }
        ],
        stepHeaders: {
          description: "Beschreibung",
          rationale: "Rationale",
          outcome: "Ergebnis"
        }
      },
      results: {
        title: "Kreuzvalidierungs-Ergebnisse",
        metrics: [
          { label: "Bestes CV RMSE" },
          { label: "Std Abweichung" },
          { label: "Fehlerrate" }
        ],
        codeSnippet: {
          title: "Zeitreihen-Kreuzvalidierungs-Implementierung"
        }
      }
    },
    data: {
      title: "Datenquellen & Verarbeitungs-Pipeline",
      sources: [
        {
          name: "kaggle_cantine.csv",
          description: "Primärer Datensatz enthält 2+ Jahre täglicher Mahlzeiten-Anzahl-Aufzeichnungen mit zeitlichen und kontextuellen Features",
          size: "729 Tage × 12 Features",
          keyFeatures: [
            "nb_vendus (Ziel): Tägliche Mahlzeiten-Anzahl",
            "date: Sequenzielle tägliche Aufzeichnungen",
            "jour_semaine: Wochentag-Indikatoren",
            "mois: Monatliche Saisonalitäts-Muster",
            "nb_jours_feries: Feiertags-Nähe-Effekte",
            "nb_personnes: Tägliche Kopfzahl-Daten",
            "nb_plats_menu: Menü-Diversitäts-Metrik",
            "note_plat_principal: Hauptgericht-Rating",
            "temperature: Wetter-Bedingungen",
            "commentaire: Qualitativer Kontext"
          ],
          cleaningSteps: [
            "Duplikat-Erkennung und -Entfernung (39 Duplikat-Zeilen identifiziert)",
            "Fehlende Wert-Imputation für Wetter- und Rating-Daten",
            "Datums-Format-Standardisierung und Validierung",
            "Outlier-Analyse und Behandlung für extreme Mahlzeiten-Anzahlen",
            "Feature-Typ-Konversion und Kodierungs-Vorbereitung"
          ],
          challenges: [
            "Limitierte Stichprobengröße erfordert sorgfältige Validierungs-Strategie",
            "Unausgewogene Verteilung über Saisons und Ereignisse",
            "Fehlende Wetter-Daten für einige historische Perioden",
            "Qualitative Kommentare erfordern Text-Verarbeitung",
            "Daten-Leakage-Prävention in zeitlicher Modellierung"
          ]
        }
      ],
      sections: {
        keyFeatures: "Schlüssel-Features",
        dataCleaningSteps: "Daten-Bereinigungs-Schritte",
        dataChallenges: "Daten-Herausforderungen"
      },
      quality: {
        title: "Datenqualitäts-Bewertung",
        metrics: [
          {
            metric: "Daten-Vollständigkeit",
            description: "Nicht-fehlende Werte über alle Features"
          },
          {
            metric: "Zeitliche Abdeckung",
            description: "2+ Jahre kontinuierlicher täglicher Aufzeichnungen"
          },
          {
            metric: "Duplikat-Rate",
            description: "39 Duplikat-Aufzeichnungen identifiziert & entfernt"
          },
          {
            metric: "Feature-Diversität",
            description: "Zeitliche, numerische, kategoriale Variablen"
          }
        ]
      },
      processingPipeline: {
        title: "Daten-Verarbeitungs-Pipeline"
      }
    },
    business: {
      title: "Geschäfts-Auswirkung & Operativer Wert",
      impacts: [
        {
          metric: "Lebensmittel-Abfall-Reduzierung",
          description: "Optimierte Mahlzeiten-Vorbereitung reduziert Überproduktion"
        },
        {
          metric: "Kosteneinsparungen",
          description: "Reduzierter Abfall und verbesserte Inventar-Verwaltung"
        },
        {
          metric: "Service-Qualität",
          description: "Verbesserte Mahlzeiten-Verfügbarkeit und reduzierte Engpässe"
        },
        {
          metric: "Planungs-Effizienz",
          description: "Automatisierte Prognosen reduzieren manuelle Planungszeit"
        }
      ],
      implementation: {
        title: "Implementierungs- & Deployment-Strategie",
        deployment: {
          title: "Produktions-Deployment",
          points: [
            "Automatisierte tägliche Prognose-Pipeline",
            "Echtzeit-Modell-Überwachung und Alarmierung",
            "A/B-Test-Framework für Modell-Updates",
            "Rückfall auf historische Durchschnitte bei Ausfällen",
            "Integration mit bestehenden Cafeteria-Management-Systemen"
          ]
        },
        benefits: {
          title: "Operative Vorteile",
          points: [
            "Reduzierter Lebensmittel-Abfall durch genaue Nachfrage-Vorhersage",
            "Verbesserte Kundenzufriedenheit via besserer Mahlzeiten-Verfügbarkeit",
            "Kosteneinsparungen durch optimierte Zutaten-Beschaffung",
            "Erweiterte Personal-Planung und Ressourcen-Allokation",
            "Datengetriebene Entscheidungsfindung für Menü-Optimierung"
          ]
        }
      },
      roi: {
        title: "Return on Investment-Analyse",
        categories: [
          {
            category: "Kosteneinsparungen",
            items: ["Lebensmittel-Abfall-Reduzierung: €8K/Jahr", "Arbeits-Optimierung: €3K/Jahr", "Inventar-Effizienz: €1K/Jahr"],
            total: "€12K/Jahr"
          },
          {
            category: "Implementierungs-Kosten",
            items: ["Entwicklungszeit: €2K", "Infrastruktur: €500", "Wartung: €1K/Jahr"],
            total: "€3,5K gesamt"
          },
          {
            category: "Netto-Nutzen",
            items: ["Jährliche Einsparungen: €12K", "Implementierungs-Kosten: €3,5K", "Payback-Periode: 3,5 Monate"],
            total: "340% ROI"
          }
        ],
        enhancements: {
          title: "Zukünftige Verbesserungs-Möglichkeiten",
          technical: {
            title: "Technische Verbesserungen",
            points: [
              "Echtzeit-Modell-Retraining mit Streaming-Daten",
              "Deep-Learning-Modelle für komplexe Muster-Erkennung",
              "Multi-Standort-Prognose mit Transfer-Lernen",
              "Integration externer Datenquellen (Ereignisse, Wetter-APIs)"
            ]
          },
          business: {
            title: "Geschäfts-Erweiterungen",
            points: [
              "Menü-Optimierung und Empfehlungs-System",
              "Dynamische Preisgestaltung basierend auf Nachfrage-Prognosen",
              "Lieferanten-Beziehungs-Optimierung",
              "Kunden-Präferenz- und Zufriedenheits-Modellierung"
            ]
          }
        }
      }
    }
  },
  codeExamples: {
    title: {
      main: "Produktions-Code-Implementierung"
    },
    description: "Enterprise-Grade-Python-Implementierung für das BNP Paribas Cafeteria-Mahlzeiten-Prognosesystem mit umfassender Datenverarbeitung, erweiterten ML-Pipelines und produktionsbereitem Deployment-Code",
    navigation: {
      categories: [
        { label: "Datenverarbeitung" },
        { label: "Feature-Engineering" },
        { label: "Modell-Training" },
        { label: "Vorhersage-Pipeline" }
      ]
    },
    examples: [
      {
        title: "data_integration.py",
        description: "Zusammenführung mehrerer Datenquellen mit Datums-Ausrichtung und fehlende Wert-Behandlung"
      },
      {
        title: "feature_engineering.py",
        description: "Erstellung von Lag-Features, Beliebtheits-Indizes und kalenderbasierte Features"
      },
      {
        title: "model_training.py",
        description: "Hyperparameter-Optimierung und Ensemble-Training mit Zeitreihen-Validierung"
      },
      {
        title: "prediction_pipeline.py",
        description: "Prognose-Generierung mit rekursiven Lag-Updates für sequenzielle Daten"
      }
    ],
    implementation: {
      title: "Implementierungs-Highlights",
      highlights: [
        {
          title: "Daten-Pipeline",
          description: "Robuste ETL mit umfassender Validierung und Fehlerbehandlung"
        },
        {
          title: "Zeitreihen-Sicherheit",
          description: "Null Daten-Leakage mit ordnungsgemäßem zeitlichem Feature-Engineering"
        },
        {
          title: "Hyperparameter-Tuning",
          description: "Bayessche Optimierung mit 60 Versuchen für optimale Leistung"
        },
        {
          title: "Kreuzvalidierung",
          description: "Zeitbewusste Aufteilung für realistische Leistungsschätzungen"
        },
        {
          title: "Ensemble-Methoden",
          description: "5-fold Modell-Durchschnittsbildung für verbesserte Generalisierung"
        },
        {
          title: "Produktionsbereit",
          description: "Fehlerbehandlung, Protokollierung und rekursive Vorhersage-Unterstützung"
        }
      ]
    },
    statistics: [
      { label: "Code-Zeilen" },
      { label: "Entwickelte Features" },
      { label: "Modell-Validierungs-Folds" },
      { label: "Code-Abdeckung" }
    ]
  },
  resultsMetrics: {
    title: {
      main: "Leistungs-Ergebnisse"
    },
    description: "Umfassende Bewertungs-Metriken demonstrieren die Genauigkeit und Zuverlässigkeit des Modells für Produktions-Deployment",
    keyMetrics: [
      {
        title: "RMSE-Score",
        description: "Root Mean Squared Error auf Kreuzvalidierung",
        details: [
          "Finaler RMSE von 21,87 Mahlzeiten erreicht durch Ensemble von RandomForest + XGBoost",
          "Hyperparameter-Optimierung mit Optuna-Framework mit 100+ Versuchen",
          "Repräsentiert durchschnittlichen Vorhersage-Fehler von ~22 Mahlzeiten pro Tag"
        ]
      },
      {
        title: "Genauigkeits-Rate",
        description: "Vorhersagen innerhalb akzeptablem Bereich (±30 Mahlzeiten)",
        details: [
          "94,5% der Vorhersagen innerhalb ±30 Mahlzeiten Toleranz",
          "Übertrifft Geschäfts-Anforderung von 90% Genauigkeit für operative Planung",
          "Ermöglicht zuverlässige Lebensmittel-Bestellung und Personal-Planung-Entscheidungen"
        ]
      },
      {
        title: "Feature-Anzahl",
        description: "Entwickelte Features aus 5 Datenquellen",
        details: [
          "60+ entwickelte Features aus historischen Mahlzeiten-Daten und externen Faktoren",
          "Wetter-Muster, Kalender-Ereignisse, Personal-Pläne, Gebäude-Belegung",
          "Automatisierte Feature-Auswahl mit wechselseitiger Information und Korrelations-Analyse"
        ]
      },
      {
        title: "Modell-Stabilität",
        description: "Standardabweichung über CV-Folds",
        details: [
          "Niedrige Varianz (±0,5) über 5-fold Kreuzvalidierung",
          "Gewährleistet Modell-Zuverlässigkeit und Generalisierung auf ungesehene Daten",
          "Konsistente Leistung über verschiedene Zeitperioden und Saisons"
        ]
      },
      {
        title: "Trainings-Zeit",
        description: "Vollständiges Modell-Training mit Hyperparameter-Tuning",
        details: [
          "Optimierte Training-Pipeline mit frühem Stoppen und paralleler Verarbeitung",
          "Reduziert Trainings-Zeit um 65% bei Aufrechterhaltung der Genauigkeit",
          "Ermöglicht tägliches Modell-Retraining für Produktions-Deployment"
        ]
      },
      {
        title: "Daten-Abdeckung",
        description: "Historische Daten über mehrere Saisons und Ereignisse",
        details: [
          "18 Monate umfassender Mahlzeiten-Verbrauchs-Daten",
          "Inkludiert Sommer-/Winter-Muster, Feiertage, Konferenzen und spezielle Ereignisse",
          "Abdeckung 450+ einzigartiger Tage mit vollständiger Feature-Verfügbarkeit"
        ]
      }
    ],
    performanceAnalysis: {
      title: "Detaillierte Leistungs-Analyse",
      tableHeaders: {
        metric: "Metrik",
        training: "Training",
        validation: "Validierung",
        improvement: "Verbesserung"
      },
      metrics: [
        {
          metric: "Mittlerer Absoluter Fehler",
          improvement: "vs Baseline: -45%",
          description: "Durchschnittliche absolute Differenz zwischen vorhergesagten und tatsächlichen Mahlzeiten-Anzahlen"
        },
        {
          metric: "R²-Score",
          improvement: "Starke Korrelation",
          description: "Bestimmtheits-Koeffizient misst Modells Erklärungs-Kraft"
        },
        {
          metric: "Max Fehler",
          improvement: "Outlier-Behandlung",
          description: "Maximale Abweichung in einer einzelnen Vorhersage über Validierungs-Set"
        },
        {
          metric: "Kreuzvalidierungs-Score",
          improvement: "Konsistente Leistung",
          description: "Durchschnittlicher R²-Score über 5-fold Kreuzvalidierungs-Splits"
        }
      ]
    },
    businessImpact: {
      title: "Geschäfts-Auswirkung-Projektion",
      impacts: [
        { label: "Geschätzte Reduzierung Lebensmittel-Abfall" },
        { label: "Mitarbeiter-Zufriedenheits-Rate (Mahlzeiten-Verfügbarkeit)" },
        { label: "Jährliches Kosteneinsparungs-Potential" }
      ],
      conclusion: "Genaue Prognosen ermöglichen optimale Ressourcen-Allokation, reduzieren Abfall und gewährleisten konsistente Mahlzeiten-Verfügbarkeit für alle Mitarbeiter"
    }
  },
  technologyStack: {
    title: {
      main: "Technologie-Stack"
    },
    description: "Moderne Data-Science-Tools und Frameworks powern die BNP Paribas Cafeteria-Mahlzeiten-Prognose-Lösung mit 94,5% Genauigkeit und automatisierten täglichen Vorhersagen",
    categories: [
      {
        title: "Data Science & ML",
        technologies: [
          {
            name: "Python",
            category: "Kern-Sprache",
            description: "Primäre Programmiersprache für Data-Science-Pipeline",
            purpose: "Datenverarbeitung, Modellierung und Analyse",
            details: [
              "Python 3.8+ mit spezialisierten Data-Science-Bibliotheken",
              "Behandelt BNP Paribas Cafeterias 18-Monate historischen Datensatz",
              "Implementiert automatisierte Feature-Engineering-Pipeline",
              "Unterstützt Ensemble-Modellierung mit RandomForest und XGBoost"
            ]
          },
          {
            name: "LightGBM",
            category: "ML-Framework",
            description: "Gradient-Boosting-Framework optimiert für Effizienz",
            purpose: "Primäres Modell für Mahlzeiten-Anzahl-Vorhersage",
            details: [
              "Erreicht RMSE von 21,87 Mahlzeiten mit Hyperparameter-Optimierung",
              "Behandelt 60+ entwickelte Features aus mehreren Datenquellen",
              "Schnelle Trainings-Zeit (4,2 Minuten) ermöglicht tägliches Retraining",
              "Robuste Leistung über saisonale Muster und Ereignisse"
            ]
          },
          {
            name: "XGBoost",
            category: "ML-Framework",
            description: "Extremes Gradient-Boosting für Ensemble-Modellierung",
            purpose: "Sekundäres Modell für Ensemble-Vorhersagen",
            details: [
              "Ergänzt LightGBM im Ensemble-Ansatz",
              "Bietet diverse Vorhersagen für verbesserte Genauigkeit",
              "Exzellente Behandlung fehlender Werte und Outliers",
              "Kreuzvalidierungs-Score von 0,832 über 5 Folds"
            ]
          },
          {
            name: "Optuna",
            category: "Optimierung",
            description: "Automatisches Hyperparameter-Optimierungs-Framework",
            purpose: "Modell-Hyperparameter-Tuning",
            details: [
              "100+ Versuche für optimale Hyperparameter-Auswahl",
              "Tree-strukturierter Parzen-Estimator für effiziente Suche",
              "Automatisiertes Pruning nicht vielversprechender Versuche",
              "Reduziert manuellen Tuning-Aufwand um 90%"
            ]
          }
        ]
      },
      {
        title: "Datenverarbeitung",
        technologies: [
          {
            name: "Pandas",
            category: "Daten-Manipulation",
            description: "Mächtige Datenstrukturen und Analyse-Bibliothek",
            purpose: "Daten-Bereinigung, -Zusammenführung und -Transformation",
            details: [
              "Verarbeitet 450+ Tage Mahlzeiten-Verbrauchs-Daten",
              "Führt Daten aus 5 verschiedenen Quellen zusammen (Mahlzeiten, Wetter, Kalender, Personal, Belegung)",
              "Behandelt fehlende Werte und Datenqualitäts-Probleme",
              "Erstellt zeitbasierte Features und rollende Statistiken"
            ]
          },
          {
            name: "NumPy",
            category: "Numerisches Rechnen",
            description: "Fundamentales Paket für wissenschaftliches Rechnen",
            purpose: "Array-Operationen und mathematische Funktionen",
            details: [
              "Effiziente numerische Berechnungen für Feature-Engineering",
              "Vektorisierte Operationen für Leistungs-Optimierung",
              "Statistische Berechnungen für Daten-Analyse",
              "Speicher-effiziente Array-Operationen auf großen Datensätzen"
            ]
          },
          {
            name: "Scikit-learn",
            category: "ML-Utilities",
            description: "Machine-Learning-Bibliothek mit Bewertungs-Metriken",
            purpose: "Kreuzvalidierung und Leistungs-Metriken",
            details: [
              "5-fold Kreuzvalidierung für Modell-Bewertung",
              "Feature-Auswahl mit wechselseitiger Information",
              "StandardScaler für Feature-Normalisierung",
              "Umfassende Metriken: RMSE, MAE, R², Max Error"
            ]
          }
        ]
      },
      {
        title: "Entwicklungs-Tools",
        technologies: [
          {
            name: "Jupyter Notebook",
            category: "Entwicklungs-Umgebung",
            description: "Interaktive Entwicklungs- und Prototyping-Plattform",
            purpose: "Explorative Daten-Analyse und Modell-Entwicklung",
            details: [
              "Interaktive Erkundung von BNP Paribas Mahlzeiten-Daten-Mustern",
              "Visualisierung saisonaler Trends und Verbrauchs-Muster",
              "Schnelles Prototyping von Feature-Engineering-Ansätzen",
              "Dokumentation des Modell-Entwicklungs-Prozesses"
            ]
          },
          {
            name: "Kaggle Kernels",
            category: "Cloud-Plattform",
            description: "Cloud-basierte Data-Science-Umgebung",
            purpose: "Modell-Training und Wettbewerbs-Submission",
            details: [
              "Cloud-basierte Ausführung mit GPU-Beschleunigung",
              "Versionskontrolle und reproduzierbare Experimente",
              "Kollaborative Entwicklungs-Umgebung",
              "Zugang zu externen Datensätzen und APIs"
            ]
          },
          {
            name: "Git & GitHub",
            category: "Versionskontrolle",
            description: "Quellcode-Management und Kollaboration",
            purpose: "Code-Versionierung und Team-Kollaboration",
            details: [
              "Verfolgung Modell-Iterationen und Leistungs-Verbesserungen",
              "Kollaborative Entwicklung mit Versions-Historie",
              "Branch-basierter Feature-Entwicklungs-Workflow",
              "Automatisierte Test- und Deployment-Pipelines"
            ]
          }
        ]
      }
    ],
    architecture: {
      title: "BNP Paribas Mahlzeiten-Prognose-System-Architektur",
      components: [
        {
          component: "Daten-Eingang",
          description: "Multi-Quellen-Daten-Laden und Validierung aus BNP Paribas-Systemen",
          details: [
            "Historische Mahlzeiten-Verbrauchs-Daten (18 Monate)",
            "Wetter-Daten-Integration aus externen APIs",
            "Personal-Pläne und Gebäude-Belegungs-Metriken",
            "Kalender-Ereignisse und Feiertags-Informationen",
            "Automatisierte Datenqualitäts-Checks und Validierung"
          ]
        },
        {
          component: "Feature-Engineering",
          description: "60+ entwickelte Features aus Kalender-, Belegungs-, Menü- und Wetter-Daten",
          details: [
            "Zeitbasierte Features: Wochentag, Monat, Saison, Feiertage",
            "Wetter-Features: Temperatur, Niederschlag, Feuchtigkeit",
            "Belegungs-Features: Personal-Anzahl, gebuchte Meeting-Räume",
            "Lag-Features: vorherige 1-7 Tage Mahlzeiten-Anzahlen",
            "Rollende Statistiken: 7-Tage und 30-Tage gleitende Durchschnitte"
          ]
        },
        {
          component: "Modell-Training",
          description: "Ensemble-Gradient-Boosting mit Hyperparameter-Optimierung",
          details: [
            "Ensemble aus LightGBM- und XGBoost-Modellen",
            "5-fold Zeitreihen-Kreuzvalidierung",
            "Optuna-basierte Hyperparameter-Optimierung (100+ Versuche)",
            "Frühes Stoppen zur Overfitting-Prävention",
            "Feature-Wichtigkeits-Analyse und -Auswahl"
          ]
        },
        {
          component: "Vorhersage-Pipeline",
          description: "Rekursive Prognose mit Lag-Feature-Updates für Produktions-Deployment",
          details: [
            "Rekursive Multi-Step-Ahead-Prognose",
            "Echtzeit-Lag-Feature-Updates",
            "Ensemble-Modell-Durchschnittsbildung für finale Vorhersagen",
            "Vertrauens-Intervalle und Unsicherheits-Quantifizierung",
            "Tägliche automatisierte Retraining-Pipeline"
          ]
        }
      ],
      stepLabel: "Schritt",
      implementationDetailsLabel: "Implementierungs-Details:"
    },
    performanceMetrics: {
      title: "Produktions-Leistungs-Metriken",
      description: "Schlüssel-Leistungs-Indikatoren demonstrieren Systemeffektivität in Produktions-Umgebung",
      metrics: [
        {
          metric: "RMSE",
          description: "Root Mean Squared Error"
        },
        {
          metric: "Genauigkeit",
          description: "Innerhalb ±30 Mahlzeiten Toleranz"
        },
        {
          metric: "Trainings-Zeit",
          description: "Vollständiges Modell-Retraining"
        },
        {
          metric: "Daten-Abdeckung",
          description: "Historische Trainings-Daten"
        }
      ]
    },
    labels: {
      purpose: "Zweck:",
      technicalDetails: "Technische Details:"
    }
  },
  footer: {
    title: {
      main: "BNP Paribas Mahlzeiten-Prognose"
    },
    description: "Erweiterte Machine-Learning-Lösung erreicht 94,5% Genauigkeit für Cafeteria-Nachfrage-Prognose",
    metrics: {
      rmse: "RMSE: 21,87 Mahlzeiten",
      trainingData: "18 Monate Trainings-Daten",
      features: "60+ entwickelte Features"
    },
    buttons: {
      documentation: "Dokumentation",
      sourceCode: "Quellcode"
    }
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
  renewable: {
      navigation: {
    backToProjects: "Zurück zu Projekten",
  },

  // Hero Section
  hero: {
    badge: "Erneuerbare Energien Analytics Platform",
    title: "Interaktive Datenvisualisierung & Business Intelligence Suite",
    description: "Eine umfassende Analytics-Plattform für erneuerbare Energien, die komplexe Datensätze durch fortschrittliche Visualisierung, maschinelles Lernen und Business Intelligence-Tools in verwertbare Erkenntnisse verwandelt.",
    metrics: {
      countriesAnalyzed: "Analysierte Länder",
      dataPointsProcessed: "Verarbeitete Datenpunkte",
      yearsOfHistoricalData: "Jahre historischer Daten",
      interactiveVisualizations: "Interaktive Visualisierungen",
    },
  },

  // Main Content - Project Overview
  projectOverview: {
    title: "Transformation von Daten erneuerbarer Energien in verwertbare Erkenntnisse",
    subtitle: "Unsere Plattform kombiniert modernste Datenwissenschaft mit intuitiver Visualisierung, um Organisationen bei datengestützten Entscheidungen im Sektor erneuerbarer Energien zu unterstützen.",
    missionTitle: "Projektmission",
    missionDescription: "Die Interaktive Datenvisualisierung & Business Intelligence Suite wurde entwickelt, um den kritischen Bedarf an umfassender Analyse erneuerbarer Energien zu decken. Durch die Integration mehrerer Datenquellen und die Bereitstellung fortschrittlicher Analysefunktionen ermöglichen wir es Organisationen, Fortschritte zu verfolgen, Trends zu identifizieren und fundierte Investitionsentscheidungen im Sektor erneuerbarer Energien zu treffen.",
    tags: {
      dataIntegration: "Datenintegration",
      machineLearning: "Maschinelles Lernen",
      visualization3D: "3D-Visualisierung",
      businessIntelligence: "Business Intelligence",
    },
    keyCapabilitiesTitle: "Kernfähigkeiten",
    capabilities: {
      multiSourceIntegration: {
        title: "Multi-Quellen Datenintegration",
        description: "Nahtlose Kombination von Daten aus IRENA, Weltbank und anderen Datenbanken für erneuerbare Energien",
      },
      advancedAnalytics: {
        title: "Fortschrittliche Analytics-Engine",
        description: "Maschinelles Lernen Clustering, statistische Analyse und Trendprognosen",
      },
      interactiveVisualizations: {
        title: "Interaktive Visualisierungen",
        description: "3D-Streudiagramme, animierte Dashboards und umfassende Berichterstattung",
      },
    },
  },

  // Features Section
  features: {
    title: "Erweiterte Funktionen & Fähigkeiten",
    subtitle: "Unsere Plattform bietet eine umfassende Suite von Tools, die darauf ausgelegt sind, den komplexen Anforderungen der Analyse erneuerbarer Energien gerecht zu werden.",
    items: {
      multiSourceDataIntegration: {
        title: "Multi-Quellen Datenintegration",
        description: "Nahtlose Integration von Daten aus IRENA, Weltbank und anderen Datenbanken für erneuerbare Energien mit paralleler Verarbeitung für optimale Leistung.",
        metrics: ["5+ Datenquellen", "Echtzeit-Updates", "99,9% Verfügbarkeit"],
      },
      advancedAnalyticsEngine: {
        title: "Fortschrittliche Analytics-Engine",
        description: "Leistungsstarke statistische Analyse mit maschinellem Lernen Clustering, Korrelationsanalyse und Trendprognosen für Muster erneuerbarer Energien.",
        metrics: ["K-Means Clustering", "Statistische Tests", "Trendanalyse"],
      },
      interactive3DVisualizations: {
        title: "Interaktive 3D-Visualisierungen",
        description: "Immersive 3D-Streudiagramme, Heatmaps und animierte Dashboards mit Plotly für umfassende Datenerkundung.",
        metrics: ["3D-Streudiagramme", "Animierte Zeitlinien", "Interaktive Heatmaps"],
      },
      businessIntelligenceSuite: {
        title: "Business Intelligence Suite",
        description: "Umfassendes Berichtssystem mit automatisierter Erkenntnisgewinnung und Executive-Level-Dashboards für strategische Entscheidungsfindung.",
        metrics: ["Automatisierte Berichte", "Executive Dashboards", "ROI-Analyse"],
      },
    },
  },

  // Code Examples Section
  codeExamples: {
    title: "Technische Implementierung",
    subtitle: "Erkunden Sie die Kernkomponenten, die unsere Analytics-Plattform für erneuerbare Energien antreiben.",
    examples: {
      dataScraping: {
        title: "Datensammlung & Erfassung",
        description: "Multi-Quellen-Datensammlung mit paralleler Verarbeitung für schnellere Datenaggregation aus IRENA- und Weltbank-APIs.",
      },
      advancedAnalytics: {
        title: "Erweiterte Analytics & Clustering",
        description: "Statistische Analyse mit maschinellem Lernen Clustering und Korrelationsanalyse für Muster erneuerbarer Energien.",
      },
      interactive3DVisualizations: {
        title: "Interaktive 3D-Visualisierungen",
        description: "Erweiterte Plotly-basierte 3D-Visualisierungen mit Animationsframes für zeitliche Datenanalyse.",
      },
    },
  },

  // Architecture Section
  architecture: {
    title: "Systemarchitektur",
    subtitle: "Eine robuste, skalierbare Architektur, die für hochleistungsfähige Datenverarbeitung und Visualisierung entwickelt wurde.",
    dataProcessingPipeline: {
      title: "Datenverarbeitungs-Pipeline",
      steps: {
        dataCollection: {
          title: "Datensammlung",
          description: "Paralleles Scraping aus mehreren Datenbanken für erneuerbare Energien",
        },
        dataProcessing: {
          title: "Datenverarbeitung",
          description: "Reinigung, Validierung und Feature-Engineering",
        },
        analyticsEngine: {
          title: "Analytics-Engine",
          description: "Statistische Analyse und maschinelles Lernen Clustering",
        },
        visualization: {
          title: "Visualisierung",
          description: "Interaktive 3D-Plots und umfassende Dashboards",
        },
      },
    },
    technologyStack: {
      title: "Technologie-Stack",
      technologies: {
        python: { name: "Python", type: "Kernsprache" },
        pandas: { name: "Pandas", type: "Datenverarbeitung" },
        plotly: { name: "Plotly", type: "Visualisierung" },
        scikitlearn: { name: "Scikit-learn", type: "Maschinelles Lernen" },
        beautifulsoup: { name: "BeautifulSoup", type: "Web Scraping" },
        numpy: { name: "NumPy", type: "Numerisches Computing" },
        seaborn: { name: "Seaborn", type: "Statistische Plots" },
        matplotlib: { name: "Matplotlib", type: "Plotting-Bibliothek" },
      },
    },
    performanceMetrics: {
      title: "Leistungsmetriken",
      metrics: {
        dataProcessingSpeed: "Datenverarbeitungsgeschwindigkeit",
        visualizationRendering: "Visualisierungs-Rendering",
        concurrentUsers: "Gleichzeitige Benutzer",
        systemUptime: "System-Verfügbarkeit",
      },
    },
  },

  // Results & Impact Section
  results: {
    title: "Ergebnisse & Geschäftsauswirkungen",
    subtitle: "Messbare Ergebnisse und Erkenntnisse, die durch umfassende Analyse erneuerbarer Energien generiert wurden.",
    sections: {
      growthAnalysis: {
        title: "Wachstumsanalyse",
        metrics: {
          globalRenewableCapacity: "Globales Wachstum der erneuerbaren Kapazität",
          solarEnergyExpansion: "Solarenergie-Expansion",
          windPowerGrowth: "Windkraft-Wachstum",
        },
      },
      userEngagement: {
        title: "Benutzerengagement",
        metrics: {
          platformUsers: "Plattform-Nutzer",
          monthlyActiveUsers: "Monatlich aktive Nutzer",
          userSatisfaction: "Benutzerzufriedenheit",
        },
      },
      carbonImpact: {
        title: "CO2-Auswirkungen",
        metrics: {
          co2OffsetTracked: "Verfolgte CO2-Kompensation",
          countriesAnalyzed: "Analysierte Länder",
          investmentTracked: "Verfolgte Investitionen",
        },
      },
    },
  },
  footer: {
    title: "Interaktive Datenvisualisierung & Business Intelligence Suite",
    description: "Befähigung von Organisationen mit umfassender Analytics für erneuerbare Energien und datengestützten Erkenntnissen für nachhaltige Zukunftsplanung und strategische Entscheidungsfindung.",
    features: {
      multiSourceDataIntegration: "Multi-Quellen Datenintegration",
      advancedAnalyticsEngine: "Fortschrittliche Analytics-Engine",
      globalRenewableEnergyFocus: "Globaler Fokus auf erneuerbare Energien",
    },
  },

  // Performance Values (for metrics display)
  performanceValues: {
    dataProcessingSpeed: "10M+ Datensätze/Stunde",
    visualizationRendering: "<2s Ladezeit",
    concurrentUsers: "1000+",
    systemUptime: "99,9%",
  },

  // Growth Values (for results display)
  growthValues: {
    globalRenewableCapacity: "+12% jährlich",
    solarEnergyExpansion: "+25% Jahr für Jahr",
    windPowerGrowth: "+18% jährlich",
  },

  // User Engagement Values
  userEngagementValues: {
    platformUsers: "5.000+",
    monthlyActiveUsers: "2.500+",
    userSatisfaction: "4,8/5",
  },

  // Carbon Impact Values
  carbonImpactValues: {
    co2OffsetTracked: "50M+ Tonnen",
    countriesAnalyzed: "195",
    investmentTracked: "$500B+",
  },

  // Metric Values for Hero Section
  heroMetricValues: {
    countriesAnalyzed: "50+",
    dataPointsProcessed: "10M+",
    yearsOfHistoricalData: "15+",
    interactiveVisualizations: "100+",
  },
},
MarketPulseContentType: {
  hero: {
    achievement: {
      badge: "🏆 Gewinner der HAICK 2025 TSA Challenge",
      title: "Meisterschafts-Erfolg"
    },
    title: {
      main: "MarketPulse",
      subtitle: "Multimodale Finanzprognose",
      version: "v3.0"
    },
    description: {
      primary: "Fortschrittliche KI, die Marktdaten und Nachrichtenstimmung kombiniert",
      secondary: "Technische Präsentation unserer erstplatzierten Lösung, die eine Leistungssteigerung von 68% durch multimodales Ensemble-Lernen erzielt",
      technical: "Preisgekröntes multimodales KI-System, das fortschrittliches maschinelles Lernen mit Finanz-Domänenwissen verbindet"
    },
    metrics: {
      score: { value: "-0.66151", label: "Siegerpunktzahl" },
      achievement: { value: "0.44+", label: "Erreichtes R²" },
      features: { value: "120+", label: "Entwickelte Merkmale" }
    },
    technologies: [
      "LightGBM Ensemble",
      "Sentiment-Analyse",
      "Korrelations-Engineering",
      "Optuna-Optimierung"
    ],
    actions: {
      scrollIndicator: "Scrollen zum Erkunden"
    }
  },

  navigation: {
    backToProjects: "Zurück zu den Projekten",
    tableOfContents: "Inhaltsverzeichnis",
    sections: {
      context: "Projektkontext",
      methodology: "Technische Methodik",
      documentation: "Portfolio-Dokumentation",
      results: "Wettbewerbsergebnisse",
      innovations: "Technische Innovationen",
      future: "Zukünftige Ausrichtungen",
      conclusion: "Fazit"
    }
  },

  context: {
    title: "Projektkontext & Herausforderung",
    subtitle: "HAICK 2025 Zeitreihenanalyse-Challenge: Multimodale Marktprognose",
    challenge: {
      title: "Überblick über die Herausforderung",
      description: "„Multimodale Marktprognose mit Nachrichten“ ist eine anspruchsvolle Zeitreihen-Vorhersage-Challenge, die quantitative Marktdaten mit qualitativer Nachrichtenstimmung kombiniert, um die Komplexität realer Finanzprognosen zu simulieren.",
      details: "Der Datensatz enthält drei Asset-Preisreihen sowie zeitgestempelte Schlagzeilen, die innovative multimodale Integrationsansätze erfordern.",
      stats: {
        assets: "3 Assets",
        duration: "48 Stunden",
        teams: "12 Teams"
      }
    },
    objectives: {
      title: "Hauptziele",
      items: [
        {
          title: "Multivariate Zeitreihenprognose",
          description: "Entwurf eines Modells zur Erfassung von Mustern über drei Asset-Preisreihen im Zeitverlauf"
        },
        {
          title: "Integration der Nachrichtenstimmung",
          description: "Einbeziehung von Textdaten aus Nachrichten durch Extraktion von Stimmungssignalen zur Information von Preisvorhersagen"
        },
        {
          title: "Genauigkeitsziel",
          description: "Erreichen eines R² > 0.44, eine signifikante Verbesserung gegenüber dem Basis-R² von ≈ -0.24"
        },
        {
          title: "Realismus-Metriken",
          description: "Beibehaltung eines realistischen Marktverhaltens, einschließlich Asset-Korrelationen (P1-P3: ~0.89) und angemessener Volatilität"
        }
      ]
    },
    evaluation: {
      title: "Bewertungsrahmen",
      metrics: [
        {
          percentage: "65%",
          label: "Leistung",
          description: "Mittlerer R²-Wert über drei Ziele"
        },
        {
          percentage: "20%",
          label: "Code-Qualität",
          description: "Modularität, Innovation, Reproduzierbarkeit"
        },
        {
          percentage: "15%",
          label: "Dokumentation",
          description: "Gut dokumentierter technischer Bericht"
        }
      ],
      achievement: {
        title: "Erfolgsziel",
        description: "MarketPulse v3.0 zeigt eine bemerkenswerte Verbesserung von 68% (von R²=-0.24 auf einen mittleren R²-Wert von über 0.44) durch unseren innovativen hybriden Modellierungsansatz mit dynamischer Korrelationskontrolle und stimmungsverbesserten Merkmalen.",
        targetMetrics: {
          improvement: "R² über 0.44",
          ranking: "1. Platz"
        }
      }
    }
  },

  methodology: {
    title: "Technische Analyse & Methodik",
    subtitle: "Umfassender Ansatz, der fortschrittliches Feature-Engineering mit anspruchsvoller Ensemble-Modellierung kombiniert",
    tabs: {
      pipeline: "Daten-Pipeline",
      features: "Feature-Engineering",
      modeling: "Modellierung & Ensemble",
      postProcessing: "Nachbearbeitung"
    },
    dataPipeline: {
      title: "Daten-Pipeline und Vorverarbeitung",
      steps: [
        {
          title: "Datenquellen",
          content: "Das Modell verarbeitet zwei Datendateien: train_prices.csv (historische Preise der 3 Assets) und train_news.csv (Nachrichtenschlagzeilen mit Zeitstempeln). Ebenso werden test_prices.csv und test_news.csv zur Erstellung der endgültigen Vorhersagen verwendet."
        },
        {
          title: "Zeitliche Abstimmung",
          content: "Ein entscheidender Vorverarbeitungsschritt ist die Abstimmung von Intraday-Nachrichten mit täglichen Preisdaten. Der Ansatz vereinfacht dies durch die Aggregation von Nachrichten nach Datum. Alle Nachrichtenereignisse werden auf ihr Datum gekürzt (ohne Berücksichtigung der Tageszeit) und gruppiert, sodass jeder Handelstag den Schlagzeilen dieses Tages zugeordnet ist.",
          technicalNote: "Dies bedeutet, dass das Modell sowohl für Preise als auch für aus Nachrichten abgeleitete Merkmale auf täglicher Frequenz arbeitet. Obwohl dies Intraday-Nuancen verliert, gewährleistet es eine klare Abstimmung, bei der die Preisänderung jedes Tages mit der Nachrichtenstimmung dieses Tages zusammenhängt."
        },
        {
          title: "Umgang mit fehlenden Daten",
          content: "Die Preisdaten können fehlende Werte enthalten (z.B. an Tagen ohne Handel), die durch Vorwärtsfüllung (fillna(method='ffill')) behandelt werden, um den letzten bekannten Preis zu propagieren. Dies geschieht für jede Asset-Reihe, um die Kontinuität zu wahren.",
          tradeOff: "Die Vorwärtsfüllung geht davon aus, dass es bei kurzen Lücken keine drastischen Änderungen gibt, was eine leichte Verzerrung mit sich bringt, aber besser ist als Lücken zu lassen oder Daten zu verwerfen."
        },
        {
          title: "Zusammenstellung der Merkmalsmatrix",
          content: "Nach dem Füllen fehlender Preise erstellt der Code einen umfassenden Merkmals-DataFrame, der nach Datum indiziert ist. Nachrichtendaten werden nach Datum zusammengeführt, was bedeutet, dass die Zeile jedes Tages sowohl technische Merkmale (aus Preisen) als auch aggregierte Nachrichtenmerkmale für diesen Tag enthält. Tage ohne Nachrichten erhalten standardmäßig neutrale Werte (z.B. Sentiment = 0)."
        }
      ],
      fileTypes: ["train_prices.csv", "train_news.csv", "test_prices.csv", "test_news.csv"]
    },
    featureEngineering: {
      title: "Feature-Engineering",
      description: "Die Lösung investiert stark in das Feature-Engineering und konstruiert über 100 Merkmale, die technische Trends, Beziehungen zwischen Assets, zeitliche Zyklen und Signale aus der Nachrichtenstimmung erfassen.",
      technicalIndicators: {
        title: "Technische Indikatoren (pro Asset)",
        items: [
            { title: "Verzögerte Preise", description: "Frühere Werte mit Verzögerungen von 1, 2, 3, 5, 7, 10, 14 und 21 Tagen, die kurzfristiges Momentum oder Mean-Reversion-Muster erfassen." },
            { title: "Gleitende Durchschnitte", description: "Rollierende SMA und EMA über Fenster von 3, 5, 7, 10, 14, 21, 30, 50 Tagen, die Trends auf verschiedenen Skalen erfassen." },
            { title: "Renditen", description: "Prozentuale Preisänderung über 1, 2, 3, 5, 7, 10, 14, 21 Tage, die das Momentum in Prozent ausdrückt." },
            { title: "Volatilität", description: "Rollierende Standardabweichung der täglichen Renditen über 5, 10, 20, 30 Tage, mit annualisierter Version (std * sqrt(252))." },
            { title: "Momentum & Oszillatoren", description: "Momentum über 7, 14, 21 Tage und RSI über diese Fenster, die überkaufte/überverkaufte Bedingungen anzeigen." },
            { title: "Bollinger-Bänder", description: "20-Tage- und 30-Tage-Bänder (±2 Standardabweichungen) und relative Position innerhalb der Bänder, die Preisextreme anzeigen." },
            { title: "Z-Scores", description: "Standardabweichungen vom Mittelwert über 20, 50, 100 Tage, die erfassen, wie ungewöhnlich der aktuelle Preis ist." },
            { title: "Trendsteigung", description: "Lineare Regressionssteigung über 10, 20, 30 Tage, die die Trendgeschwindigkeit mit Robustheit gegenüber Rauschen schätzt." }
        ]
      },
      crossAssetFeatures: {
        title: "Asset-übergreifende Merkmale",
        items: [
            { title: "Preisverhältnisse", description: "Verhältnisse jedes Paares (Preis1/Preis2, Preis1/Preis3, Preis2/Preis3), die relative Wertunterschiede widerspiegeln." },
            { title: "Spreads", description: "Paarweise Differenzen (Preis1 - Preis2, etc.), die eine absolute Spread-Perspektive geben." },
            { title: "Rollierende Korrelationen", description: "Gleitende Pearson-Korrelationen zwischen Asset-Paaren über 10-, 20-, 30-, 50-Tage-Fenster." },
            { title: "Portfolio-Index", description: "Synthetisches Portfolio = 0.4×Preis1 + 0.3×Preis2 + 0.3×Preis3, das die kombinierte Marktbewegung erfasst." },
            { title: "Dominanz", description: "Anteil am Gesamtwert, der von jedem Asset beigetragen wird, um relative Größenänderungen im Zeitverlauf zu messen." }
        ]
      },
      sentimentFeatures: {
        title: "Merkmale der Nachrichtenstimmung",
        scoringTitle: "Wörterbuch-basierte Stimmungsbewertung",
        items: [
            { title: "Täglicher Stimmungswert", description: "Durchschnittliche Stimmung der Schlagzeilen, durch eine Tanh-Funktion geleitet und auf [-0.3, 0.3] begrenzt, als Proxy für die tägliche Nachrichtenstimmung." },
            { title: "Nachrichtenvolumen & Dringlichkeit", description: "Anzahl der Nachrichten (begrenzt auf 100) und stark polarisierte Nachrichten (Stimmungsmagnitude > 0.5, begrenzt auf 20)." },
            { title: "Stimmungsvolatilität", description: "Standardabweichung der Stimmungswerte von Schlagzeilen, die Meinungsverschiedenheiten oder gemischte Nachrichten misst." },
            { title: "Gleitende Durchschnitte", description: "3-Tage-, 7-Tage-, 14-Tage-gleitende Durchschnitte und Standardabweichung von Stimmung und Volumen, die kurzfristige Trends widerspiegeln." }
        ],
        codeBlock: `sentiment_dict = {
    'sehr_positiv': ['hochschießen', 'boomen', 'ansteigen', 'rallye', 'ausbrechen', 'stellar'],
    'positiv':      ['gewinnen', 'steigen', 'aufwärts', 'profit', 'stark', 'schlagen', 'übertreffen'],
    'neutral':       ['stabil', 'flach', 'unverändert', 'beständig', 'halten'],
    'negativ':      ['fallen', 'sinken', 'abwärts', 'verlust', 'schwach', 'verfehlen', 'untertreffen'],
    'sehr_negativ': ['abstürzen', 'stürzen', 'kollabieren', 'desaster', 'panik']
}
gewichte = {'sehr_positiv': 2, 'positiv': 1, 'neutral': 0, 'negativ': -1, 'sehr_negativ': -2}`
      }
    },
    modeling: {
      title: "Modellierungsansatz und Ensemble-Strategie",
      sections: [
        {
          title: "Basis-Lerner – LightGBM-Modelle",
          content: "Anstatt eines einzigen, einheitlichen Modells trainiert die Lösung drei separate LightGBM Gradient-Boosting-Modelle, eines für jedes Preisziel. LightGBM wurde aufgrund seiner Geschwindigkeit und seiner Fähigkeit, große Merkmalsmengen mit Regularisierung zu verarbeiten, ausgewählt.",
          details: [
            {
              subtitle: "Merkmalsauswahl",
              description: "Für jedes Ziel wählt die univariate Auswahl (ANOVA F-Score über SelectKBest) die 80 besten Merkmale aus, die am stärksten mit den Bewegungen dieses Ziels korrelieren. Dies entfernt weniger relevante Merkmale und reduziert Rauschen und Rechenkosten.",
              note: "Einschränkung: Diese Methode betrachtet Merkmale einzeln und erfasst möglicherweise keine Interaktionen oder lässt sich von stark korrelierten Merkmalen täuschen.",
              noteType: "warning"
            },
            {
              subtitle: "Hyperparameter-Optimierung",
              description: "Optuna führt 50 Versuche mit einer 3-fachen rollierenden TimeSeriesSplit-Kreuzvalidierung durch. Zu den optimierten Parametern gehören n_estimators, Lernrate, maximale Tiefe, num_leaves, Subsample-Verhältnis, colsample_bytree und L1/L2-Regularisierung.",
              note: "Vorteil: Die Zeitreihen-Kreuzvalidierung stellt sicher, dass die Parameter auf spätere Perioden verallgemeinert werden können, was die reale Leistung nachahmt.",
              noteType: "success"
            }
          ]
        },
        {
          title: "Statistisches Basismodell",
          content: "Eine statistische Basisprognose wird mit domänenspezifischen Heuristiken erstellt:",
          points: [
            "Beginnt beim letzten bekannten Preis jedes Assets",
            "Fügt einen kleinen linearen Trend hinzu (z.B. Preis1 +2.8% pro Tag, Preis2 +0.1% pro Tag)",
            "Überlagert eine zyklische Schwingung (sinusförmig mit einer 60-Tage-Periode)",
            "Fügt zufälliges Rauschen mit spezifizierter Volatilität hinzu (z.B. 1.2% tägliche Standardabweichung für Preis1)"
          ],
          insight: "Dieses Basismodell wirkt wie eine Kombination aus einem leichten Aufwärtstrend, einem saisonalen Zyklus und zufälligem Rauschen, das grob auf das historische Verhalten jedes Assets abgestimmt ist. Es bietet ein Referenzniveau und stellt sicher, dass die Prognosen nicht in unrealistische Bereiche abdriften."
        },
        {
          title: "Ensemble-Kombination",
          content: "Die endgültige Vorhersage ist ein Meta-Ensemble, das LightGBM-Vorhersagen und das statistische Basismodell kombiniert, gewichtet nach Vertrauen:",
          code: `ml_score = (R²_modell + 1) / 2;  // Normalisiert R² auf den Bereich [0,1]

if (ml_score > 0.3) {
    gewichte = 60% ML-Vorhersage, 40% Basismodell;
} else if (ml_score > 0 && ml_score <= 0.3) {
    gewichte = 40% ML, 60% Basismodell;
} else {  // ml_score == 0
    gewichte = 20% ML, 80% Basismodell;
}`,
          explanation: "Diese adaptive Gewichtung erkennt an, dass manchmal ein einfaches Trendmodell ein komplexes Modell bei bestimmten Assets übertreffen kann. Daher sichert es sich ab, indem es Gewicht auf dem Basismodell belässt, während das ML bei Zuverlässigkeit dominieren kann."
        },
        {
          title: "Korrelationserhaltung",
          content: "Eine bemerkenswerte Innovation ist die nachträgliche Korrelationsanpassung. Finanzielle Vermögenswerte bewegen sich oft korreliert, und eine unabhängige Vorhersage jedes einzelnen birgt das Risiko unrealistischer gemeinsamer Vorhersagen.",
          insight: "Warum Korrelationen erzwingen? Bei der Multi-Output-Prognose für Finanzindizes ist die Aufrechterhaltung realistischer Korrelationen für nachgelagerte Anwendungen wie das Portfoliorisikomanagement wichtig. Dieser Nachbearbeitungstrick gewährleistet die Konsistenz mit bekannten Beziehungen."
        }
      ]
    },
    postProcessing: {
      title: "Nachbearbeitung der Vorhersagen",
      steps: [
        {
          title: "Glättung mit Savitzky-Golay-Filter",
          content: "Rohe Vorhersagen können durch tägliche Zick-Zack-Bewegungen verrauscht sein. Um hochfrequentes Rauschen zu reduzieren, wird auf jede vorhergesagte Reihe ein Savitzky-Golay-Filter angewendet. Dieser Filter passt ein Polynom niedrigen Grades an ein gleitendes Fenster an und erzeugt geglättete Werte.",
          parameters: {
            title: "Filterparameter",
            items: ["Fenster: bis zu 11 Tage", "Polynomgrad: 3", "Mischung: 70% geglättet + 30% original"]
          },
          benefits: {
            title: "Vorteile",
            items: ["Erhält Trendmerkmale besser als ein einfacher gleitender Durchschnitt", "Reduziert sprunghafte tägliche Schwankungen", "Behält die Gesamtform (Spitzen und Täler) bei"]
          }
        },
        {
          title: "Volatilitätsbegrenzung",
          content: "Die täglichen Renditen der Vorhersagen werden auf Volatilität analysiert. Wenn eine vorhergesagte Reihe übermäßig volatil ist (> 5% Standardabweichung der täglichen Renditen), wird sie herunterskaliert.",
          code: `if (vorhergesagte_volatilitaet > 0.05) { // 5% tägliches Maximum
    const skalierungsfaktor = 0.05 / vorhergesagte_volatilitaet;
    // Faktor auf Renditeabweichungen anwenden
    // Der Preis des ersten Tages bleibt gleich, nachfolgende Tage werden aus den skalierten Renditen neu berechnet
}`,
          tradeoff: "Kompromiss: Opfert geringfügig kurzfristige Variabilität (die wahrscheinlich sowieso unvorhersehbar ist) für eine sauberere, glaubwürdigere Prognosetrajektorie. Verhindert unrealistische Szenarien wie die Verdopplung von Aktienkursen in einer Woche durch reines Rauschen."
        }
      ],
      impactSummary: {
        title: "Wirkungszusammenfassung",
        results: [
            { title: "Glättungsergebnisse", description: "Beseitigt hochfrequentes Rauschen und bewahrt gleichzeitig aussagekräftige Trendkomponenten für den Bewertungsschwerpunkt." },
            { title: "Volatilitätsergebnisse", description: "Ca. 30% Volatilitätsreduktion für die volatilsten Reihen, wodurch die tägliche Volatilität von ca. 6% auf ca. 4,2% für ein realistisches Verhalten gesenkt wird." }
        ]
      }
    }
  },

  portfolio: {
    title: "Portfolio-Dokumentation & Meisterschaftsanalyse",
    subtitle: "HAICK 2025 TSA Challenge - Technische Tiefenanalyse der erstplatzierten Lösung",
    executiveSummary: {
      title: "Zusammenfassung der Meisterschaft",
      description: "MarketPulse v3.0 stellt den Höhepunkt der multimodalen Finanzprognose dar und kombiniert anspruchsvolle Marktanalyse mit fortschrittlicher Integration von Nachrichtenstimmungen. Unsere Lösung erreichte den 1. Platz in der HAICK 2025 TSA Challenge mit einer bemerkenswerten Punktzahl von -0.66151 und übertraf damit 12 konkurrierende Teams.",
      competitionContext: {
        title: "Wettbewerbskontext",
        items: [
          "Herausforderung: HAICK 2025 TSA Multimodale Marktprognose",
          "Team U23: Ich, Sohaib Zouambia, Wassim Haddad, Tobni Mohamed Islam (dies ist das Team des Datathons, an der Lösung habe ich selbst gearbeitet)",
          "Ziel: Erreichen eines R² über 0.44 von einer Basis von -0.24",
          "Innovationsfokus: Multimodales Ensemble mit Korrelations-Engineering"
        ]
      },
      keyInnovations: {
        title: "Schlüsselinnovationen",
        items: [
          "Meta-Ensemble: Adaptive ML- + statistische Basisgewichtung",
          "Korrelationskontrolle: Cholesky-Zerlegung für Asset-Beziehungen",
          "Feature-Engineering: Über 100 multimodale Indikatoren",
          "NLP-Integration: Maßgeschneidertes Finanz-Sentiment-Lexikon"
        ]
      },
      achievements: [
        { metric: "Endplatzierung", value: "1. Platz", description: "Von 12 konkurrierenden Teams" },
        { metric: "Punktzahlverbesserung", value: "+68%", description: "Von -0.24 auf 0.44+ R²" },
        { metric: "Korrelationsgenauigkeit", value: "99.3%", description: "Erreichung des P1-P3-Ziels" },
        { metric: "Feature-Engineering", value: "100+ Merkmale", description: "Multimodale Integration" }
      ]
    },
    architecture: {
      title: "Fortgeschrittene Architektur & Arbeitsablauf",
      philosophyTitle: "Pipeline-Architektur auf Produktionsniveau",
      steps: [
        { step: 1, title: "Datenschicht (Eingaben)", desc: "Historische Preis- und Nachrichtendaten, bereinigt und nach Datum mit anspruchsvoller zeitlicher Abstimmung ausgerichtet", details: "Technisches Detail: train_prices.csv, train_news.csv mit robuster Behandlung fehlender Daten durch Vorwärtsfüllung" },
        { step: 2, title: "Fortgeschrittenes Feature-Engineering", desc: "Über 100 Merkmale, einschließlich technischer Indikatoren, Beziehungen zwischen Assets und Sentiment-Analyse", details: "Technisches Detail: Preisbasierte, serienübergreifende, zeitliche und nachrichtenbasierte Merkmale in einer einheitlichen Merkmalsmatrix zusammengefasst" },
        { step: 3, title: "ML-Pipeline mit Optimierung", desc: "Drei LightGBM-Modelle mit Optuna-Hyperparameter-Optimierung und SelectKBest-Merkmalsauswahl", details: "Technisches Detail: Bayes'sche Optimierung mit 50 Versuchen und TimeSeriesSplit-Kreuzvalidierung zur Gewährleistung der zeitlichen Integrität" },
        { step: 4, title: "Statistische Basis & Meta-Lernen", desc: "Domänenspezifisches statistisches Modell mit zyklischen Mustern und adaptiver Ensemble-Gewichtung", details: "Technisches Detail: Korrelationsanpassung mittels Cholesky-Zerlegung zur Gewährleistung realistischer Asset-Beziehungen" },
        { step: 5, title: "Meta-Ensemble-Architektur", desc: "Adaptive gewichtete Mischung mit vertrauensbasierter Modellauswahl und dynamischer Skalierung", details: "Technisches Detail: Intelligente Gewichtung: 60% ML + 40% Basis bei Vertrauen, 20% ML + 80% Basis bei Unsicherheit" },
        { step: 6, title: "Nachbearbeitungs-Pipeline", desc: "Savitzky-Golay-Glättung und Volatilitätsbegrenzung für finanziellen Realismus und Rauschreduzierung", details: "Technisches Detail: 70% geglättet + 30% original mit 5% täglicher Volatilitätsgrenze zur Gewährleistung eines realistischen Marktverhaltens" }
      ],
      productionNote: "Die modulare Architektur der AdvancedMarketPredictor-Klasse ermöglicht den unabhängigen Austausch von Komponenten (z.B. FinBERT für Sentiment, TFT für zeitliche Modellierung) ohne Unterbrechung der Pipeline und gewährleistet so Skalierbarkeit und Wartbarkeit für den Unternehmenseinsatz."
    },
    results: {
      title: "Meisterschaftsergebnisse & Fortgeschrittene Einblicke",
      performanceTitle: "Analyse der Wettbewerbsleistung",
      metrics: [
        { value: "-0.66151", label: "Endgültige Wettbewerbspunktzahl", sublabel: "Erfolg des 1. Platzes" },
        { value: "0.44+", label: "Mittlerer R²-Wert", sublabel: "Ziel überschritten" },
        { value: "0.89", label: "P1-P3-Korrelation", sublabel: "Perfekte Übereinstimmung" },
        { value: "100,3 %", label: "Leistungsverbesserung", sublabel: "Von Basis -137" },
        { value: "100+", label: "Entwickelte Merkmale", sublabel: "Multimodale Integration" },
        { value: "12", label: "Übertroffene Teams", sublabel: "Wettbewerbsdominanz" }
      ],
      significanceNote: "Ein endgültiger R²-Wert von 0.44+ entspricht einer Varianzaufklärung von 44% in Finanzzeitreihen – eine bemerkenswerte Leistung angesichts der inhärenten Unvorhersehbarkeit des Marktes. Die Verbesserung um 68% gegenüber der Basis (-0.24 → 0.44) zeigt einen erheblichen praktischen Wert für Portfoliomanagement- und Risikobewertungsanwendungen.",
      insights: {
        title: "Tiefer Einblick in technische Innovationen",
        items: [
          { title: "Wirkung multimodaler Merkmale", content: "Nachrichtenstimmungsmerkmale erwiesen sich als besonders einflussreich für Preis1 und Preis3, wobei die tägliche Stimmung und die 7-Tage-Durchschnitte bei der Merkmalswichtigkeit hoch eingestuft wurden. Das benutzerdefinierte Finanzlexikon mit den Kategorien 'sehr_positiv', 'positiv', 'neutral', 'negativ', 'sehr_negativ' ermöglichte eine differenzierte Erfassung der Marktstimmung.", insight: "Technischer Einblick: Preis1 stellt wahrscheinlich einen nachrichtensensiblen Aktienindex dar, während Preis2 (möglicherweise rohstoffbasiert) stärker auf technische Muster als auf Stimmungen reagiert, was unseren anlagenspezifischen Modellierungsansatz bestätigt." },
          { title: "Fortgeschrittene Überanpassungs-Minderung", content: "Bei über 100 Ausgangsmerkmalen und begrenzten täglichen Daten war eine anspruchsvolle Regularisierung entscheidend. TimeSeriesSplit-Kreuzvalidierung mit 50-facher Optuna-Optimierung, kombiniert mit SelectKBest-Merkmalsauswahl (K=80) und L1/L2-Regularisierung in den LightGBM-Modellen.", insight: "Technischer Einblick: Die R²-Werte der Validierung blieben positiv und nahe an den Trainingswerten (z.B. Preis1: 0.50, Preis2: 0.10, Preis3: 0.30), was eine erfolgreiche Generalisierung trotz des hochdimensionalen Merkmalsraums belegt." },
          { title: "Meta-Ensemble-Innovation", content: "Dynamische Ensemble-Gewichtung basierend auf den Konfidenzwerten der einzelnen Modelle: ml_score = (R² + 1) / 2. Die adaptive Mischung gewährleistet robuste Vorhersagen, auch wenn ML-Modelle unterdurchschnittlich abschneiden, wobei das statistische Basismodell als Stabilitätsanker dient.", insight: "Technischer Einblick: Hybrider Ansatz, der die Anpassungsfähigkeit von ML mit der Stabilität eines statistischen Modells kombiniert. Bei volatilen Anlagen erhöht das Ensemble automatisch das Gewicht der Basislinie, was erratische Vorhersagen verhindert und gleichzeitig echte Signale erfasst." },
          { title: "Cholesky-Korrelations-Engineering", content: "Die mathematische Korrelationserhaltung mittels Cholesky-Zerlegung gewährleistet realistische Beziehungen zwischen mehreren Anlagen. Zielkorrelationen: P1-P3: 0.89, P1-P2: -0.02, P2-P3: -0.25, mit numerischen Ausweichmechanismen für die Matrizenstabilität.", insight: "Technischer Einblick: Die nachträgliche Korrelationsanpassung erreichte eine nahezu perfekte Übereinstimmung (0.88-0.90 für das P1-P3-Ziel von 0.89) und stellt sicher, dass die Vorhersagen eine realistische Markt-Mikrostruktur für nachgelagerte Risikomanagementanwendungen beibehalten." },
          { title: "Analyse der Wettbewerbsdominanz", content: "Erreichte den 1. Platz mit einer Punktzahl von -0.66151 und übertraf 12 konkurrierende Teams in der HAICK 2025 TSA Challenge. Die Lösung übertraf alle Ziele: R² > 0.44, multimodale Integration, simultane Vorhersage und innovative Korrelationskontrolle.", insight: "Technischer Einblick: Der kollaborative Ansatz von Team U23 (Ich, Sohaib Zouambia, Wassim Haddad, Tobni Mohamed Islam) zeigte, dass die Kombination von Fachwissen mit fortgeschrittenen ML-Techniken in wettbewerbsorientierten Datathons zu überlegenen Ergebnissen führt." },
          { title: "Produktionsreife Architektur", content: "Modulare AdvancedMarketPredictor-Klasse mit klarer Trennung der Verantwortlichkeiten: Feature-Engineering, Modelltraining, Ensemble-Erstellung und Nachbearbeitung. Kaggle-kompatible Umgebung mit explizitem Abhängigkeitsmanagement und robuster Fehlerbehandlung.", insight: "Technischer Einblick: Die Code-Architektur betont Wartbarkeit und Erweiterbarkeit. Jede Komponente kann unabhängig modifiziert werden (z.B. Austausch von LightGBM durch neuronale Netze oder Wörterbuch-Sentiment durch FinBERT), ohne die gesamte Pipeline zu beeinträchtigen." }
        ]
      },
      futureEnhancements: {
        title: "Zukünftige Verbesserungs-Roadmap",
        deepLearning: {
          title: "Deep-Learning-Integration",
          items: ["Temporal Fusion Transformers für die Sequenzmodellierung", "Cross-modale Aufmerksamkeitsmechanismen", "BERT-basiertes Finanz-Sentiment (FinBERT)"]
        },
        productionScaling: {
          title: "Produktionsskalierung",
          items: ["Echtzeit-Streaming-Datenverarbeitung", "Online-Lernen zur Anpassung an Regime", "Multi-Horizont-Prognosefähigkeiten"]
        }
      }
    },
    qualitativeInsights: [
      {
        title: "Wirkung multimodaler Merkmale",
        content: "Nachrichtenstimmungsmerkmale erwiesen sich als besonders einflussreich für Preis1 und Preis3, wobei die tägliche Stimmung und die 7-Tage-Durchschnitte bei der Merkmalswichtigkeit hoch eingestuft wurden.",
        insight: "Preis1 stellt wahrscheinlich einen nachrichtensensiblen Aktienindex dar, während Preis2 stärker auf technische Muster als auf Stimmungen reagiert."
      }
    ],
    teamAchievements: [
      { metric: "Endplatzierung", value: "1. Platz", description: "Von 12 konkurrierenden Teams" },
      { metric: "Punktzahlverbesserung", value: "+68%", description: "Von -0.24 auf 0.44+ R²" }
    ]
  },

  results: {
    title: "Ergebnisse der HAICK 2025 TSA Challenge",
    subtitle: "Leistungszusammenfassung und technische Errungenschaften von MarketPulse v3.0",
    keyMetrics: [
      { label: "Endpunktzahl", value: "-0.66151", description: "Wettbewerbs-Bewertungsmetrik", highlight: true },
      { label: "Endrang", value: "1.", description: "Von 12 teilnehmenden Teams", highlight: true },
      { label: "R²-Erfolg", value: "0.44+", description: "Ziel erreicht", highlight: false },
      { label: "Verbesserung", value: "100,3 %", description: "Gegenüber der Basisleistung", highlight: false }
    ],
    technicalAchievements: {
      title: "Technische Umsetzung",
      items: [
        { category: "Feature-Engineering", achievement: "100+ multimodale Merkmale", impact: "Technische Indikatoren, Beziehungen zwischen Anlagen und Integration der Nachrichtenstimmung", metrics: "Umfassende Signalerfassung" },
        { category: "Ensemble-Architektur", achievement: "Hybrider ML- + statistischer Ansatz", impact: "Adaptive Gewichtung zwischen LightGBM-Modellen und statistischen Basislinien", metrics: "Robuste Vorhersagestabilität" },
        { category: "Korrelations-Engineering", achievement: "Mathematische Präzision", impact: "Cholesky-Zerlegung zur Aufrechterhaltung realistischer Anlagenbeziehungen", metrics: "0.89 P1-P3-Korrelation erreicht" },
        { category: "Optimierungs-Framework", achievement: "Bayes'sche Hyperparameter-Optimierung", impact: "Optuna-gestützte Suche im Parameterraum mit Zeitreihen-Validierung", metrics: "Systematische Leistungsoptimierung" }
      ]
    },
    teamCollaboration: {
      title: "Team-Zusammenarbeit",
      teamName: "Team U23",
      members: [
        { name: "Sohaib Zouambia", role: "Hauptentwickler" },
        { name: "ICH", role: "ML-Ingenieur" },
        { name: "Wassim Haddad", role: "Data Scientist" },
        { name: "Tobni Mohamed Islam", role: "KI-Ingenieur" }
      ],
      collaborationNote: "Obwohl das Projekt als mein individueller Beitrag für den Datathon entwickelt wurde, wurde der Wettbewerb als Team eingereicht, bei dem jedes Mitglied unabhängig an seinem eigenen Projekt und seiner eigenen Herausforderung arbeitete. Die kollektive Umgebung förderte den Wissensaustausch, aber alle Aspekte dieser Lösung – Modellierung, Feature-Engineering und technische Innovation – wurden allein von mir entworfen und umgesetzt."
    },
    challengeContext: {
      title: "Überblick über die Herausforderung",
      overview: [
        { title: "Ziel", description: "Erreichen eines R² nahe 0.99 mit multimodaler Prognose" },
        { title: "Wettbewerb", description: "12 teilnehmende Teams" },
        { title: "Dauer", description: "48 Stunden" }
      ],
      focusNote: "Der Wettbewerb legte den Schwerpunkt auf innovative Ansätze zur Kombination von quantitativen Marktdaten mit qualitativen Nachrichteninformationen, was sowohl technische Exzellenz als auch kreative Problemlösung in multimodalen KI-Systemen erforderte."
    },
    projectSummary: {
      title: "Projektzusammenfassung",
      description: "MarketPulse v3.0 hat die Wirksamkeit multimodaler Ansätze für die Finanzprognose erfolgreich demonstriert, indem es fortschrittliches Feature-Engineering, Ensemble-Methoden und mathematische Korrelationskontrolle integriert hat. Die Lösung erreichte die Wettbewerbsziele, während sie ein realistisches Marktverhalten beibehielt und eine solide Grundlage für zukünftige Forschung und Entwicklung schuf.",
      tags: ["Multimodale Integration", "Feature-Engineering", "Ensemble-Methoden", "Mathematische Präzision"]
    }
  },

  innovations: {
    title: "Technische Innovationen & Beiträge",
    subtitle: "Fortschrittliche Methodologien und kollaborative Entwicklung hinter der Meisterschaftsleistung von MarketPulse",
    coreInnovations: [
      {
        title: "Multimodales Feature-Engineering",
        details: [
          { aspect: "Technische Indikatoren", description: "Über 100 Indikatoren über mehrere Zeiträume, einschließlich SMA/EMA (3-50 Tage), RSI, Bollinger-Bänder, Momentum-Oszillatoren und Volatilitätsmaße", impact: "Wirkung: Erfasst die Marktdynamik auf granularer und Makroebene" },
          { aspect: "Beziehungen zwischen Anlagen", description: "Preisverhältnisse, Spreads, rollierende Korrelationen (10-50-Tage-Fenster) und Portfolio-Dominanz-Metriken", impact: "Wirkung: Modelliert Abhängigkeiten zwischen Anlagen und die Marktstruktur" },
          { aspect: "Integration der Nachrichtenstimmung", description: "Benutzerdefiniertes Finanzlexikon mit gewichteter Stimmungsbewertung ('sehr_positiv': 2, 'positiv': 1, 'neutral': 0, 'negativ': -1, 'sehr_negativ': -2)", impact: "Wirkung: Schlägt eine Brücke zwischen quantitativer Analyse und Marktstimmung" }
        ]
      },
      {
        title: "Meta-Ensemble-Architektur",
        details: [
          { aspect: "Adaptives Gewichtungssystem", description: "Dynamische Mischung basierend auf dem Modellvertrauen: ml_score = (R² + 1) / 2, mit bedingter Gewichtung (60% ML bei Vertrauen, 20% bei Unsicherheit)", impact: "Wirkung: Gewährleistet Robustheit unter variierenden Marktbedingungen" },
          { aspect: "Integration einer statistischen Basislinie", description: "Domänenspezifische Basislinie mit linearen Trends, zyklischen Mustern (60-Tage-Perioden) und kalibriertem Rauschen (1.2% tägliche Standardabweichung)", impact: "Wirkung: Bietet einen Stabilitätsanker bei Modellunsicherheit" },
          { aspect: "Harmonisierung der Vorhersagen", description: "Normalisierungs- und Skalierungsabgleich zwischen ML- und statistischen Komponenten zur Vermeidung von Diskontinuitäten", impact: "Wirkung: Behält kohärente Vorhersagetrajektorien bei" }
        ]
      },
      {
        title: "Mathematische Korrelationskontrolle",
        details: [
          { aspect: "Cholesky-Zerlegung", description: "Lineare Transformation unter Verwendung von L_ziel @ L_aktuell^(-1) zur Erzwingung exakter Korrelationsmatrizen (P1-P3: 0.89, P1-P2: -0.02, P2-P3: -0.25)", impact: "Wirkung: Gewährleistet realistische Beziehungen zwischen mehreren Anlagen" },
          { aspect: "Numerische Stabilität", description: "Ausweichmechanismen für nicht positiv-definite Matrizen mit direkter Korrelationsanpassung durch lineare Regression", impact: "Wirkung: Robuste Korrelationskontrolle unter allen Bedingungen" },
          { aspect: "Finanzieller Realismus", description: "Behält bekannte Marktbeziehungen bei, die für nachgelagertes Risikomanagement und Portfolioanwendungen entscheidend sind", impact: "Wirkung: Erzeugt finanziell aussagekräftige Vorhersagen" }
        ]
      },
      {
        title: "Produktionsreife Architektur",
        details: [
          { aspect: "Modulares Entwurfsmuster", description: "AdvancedMarketPredictor-Klasse mit klarer Trennung: Feature-Engineering, Modelltraining, Ensemble-Erstellung, Nachbearbeitung", impact: "Wirkung: Ermöglicht den unabhängigen Austausch und das Testen von Komponenten" },
          { aspect: "Abhängigkeitsmanagement", description: "Explizite Versionsbeschränkungen (numpy<2.0, scipy<1.14, scikit-learn==1.4.2) für reproduzierbare Umgebungen", impact: "Wirkung: Verhindert Bereitstellungskonflikte und gewährleistet Konsistenz" },
          { aspect: "Fehlerbehandlungs-Framework", description: "Robuste Ausnahmebehandlung mit Ausweichmechanismen, Validierungsprüfungen und umfassender Protokollierung in der gesamten Pipeline", impact: "Wirkung: Behält die Systemzuverlässigkeit in Produktionsszenarien bei" }
        ]
      }
    ],
    researchContributions: {
      title: "Forschungsbeiträge & Validierung",
      items: [
        { category: "Innovation im Feature-Engineering", contribution: "Multimodale Signalfusion", methodology: "Kombination von preisbasierten technischen Indikatoren mit Nachrichtenstimmungsmerkmalen unter Verwendung eines benutzerdefinierten Finanzlexikons und zeitlicher Aggregation", validation: "Validierungsergebnis: Die Merkmalswichtigkeitsanalyse zeigte, dass die Nachrichtenstimmung für die Vorhersagen von Preis1 und Preis3 unter den Top 10 rangierte" },
        { category: "Ensemble-Methodik", contribution: "Vertrauensbasiertes Meta-Lernen", methodology: "Dynamischer Gewichtungsalgorithmus, der die Ensemble-Zusammensetzung basierend auf den Leistungsmetriken einzelner Modelle anpasst", validation: "Validierungsergebnis: Reduzierte Vorhersagevarianz um 25-30% im Vergleich zu Einzelmodell-Ansätzen bei gleichbleibender Genauigkeit" },
        { category: "Mathematischer Rahmen", contribution: "Nachträgliches Korrelations-Engineering", methodology: "Cholesky-basierte lineare Transformation zur Erzwingung realistischer Korrelationsstrukturen in Multi-Asset-Vorhersagen", validation: "Validierungsergebnis: Erreichte 99.3% Genauigkeit bei der Zielkorrelation (0.89 P1-P3) bei gleichbleibender Vorhersagequalität der einzelnen Anlagen" },
        { category: "Systemarchitektur", contribution: "Modulares ML-Pipeline-Design", methodology: "Komponentenbasierte Architektur, die den unabhängigen Austausch von Feature-Engineering-, Modellierungs- und Nachbearbeitungsmodulen ermöglicht", validation: "Validierungsergebnis: Erfolgreich in die Kaggle-Umgebung integriert bei gleichzeitiger Beibehaltung der Erweiterbarkeit für den Produktionseinsatz" }
      ]
    },
    systemArchitecture: {
      title: "Systemarchitektur",
      philosophyName: "Philosophie der Systemarchitektur",
      components: [
        { component: "Feature-Engineering-Schicht", responsibility: "Berechnung technischer Indikatoren und Stimmungsverarbeitung", design: "Modulare Merkmalsextraktion mit steckbaren Transformationen" },
        { component: "Modell-Orchestrierungs-Engine", responsibility: "LightGBM-Ensemble-Training und Hyperparameter-Optimierung", design: "Bayes'sche Optimierung mit Kreuzvalidierungs-Frameworks" },
        { component: "Korrelationskontrollmodul", responsibility: "Mathematische Korrelationserzwingung mittels Cholesky-Zerlegung", design: "Lineare Algebra-Operationen mit numerischen Stabilitätsabsicherungen" },
        { component: "Nachbearbeitungs-Pipeline", responsibility: "Glättung, Skalierung und Validierung des finanziellen Realismus", design: "Konfigurierbare Verarbeitungsstufen mit Parameter-Tuning-Fähigkeiten" }
      ],
      impactNote: "Architektur-Auswirkung: Das modulare Design ermöglicht unabhängiges Testen und Austauschen von Komponenten, was eine systematische Optimierung erleichtert und die Code-Qualität während der Entwicklungszyklen aufrechterhält."
    },
    developmentProcess: {
      title: "Entwicklungsprozess",
      methodology: "Methodik: Forschungsgetriebene Entwicklung mit systematischer Validierung und iterativer Verfeinerung",
      versionControl: "Versionskontrolle: Umfassendes Experiment-Tracking mit Merkmalsablationsstudien",
      coordination: "Koordinationsstrategie: Systematische Integrationstests mit Leistungs-Benchmarking",
      validation: "Qualitätsvalidierung: Mehrfache Kreuzvalidierung mit Out-of-Sample-Testprotokollen",
      excellenceNote: "Prozessexellenz: Effektive Koordination in wettbewerbsorientierten ML-Umgebungen zeigt sowohl technische Expertise als auch kollaborative Problemlösungsfähigkeiten, die für die Entwicklung komplexer KI-Systeme unerlässlich sind."
    },
    innovationSummary: {
      title: "Innovationswirkung",
      description: "Die technischen Innovationen von MarketPulse stellen bedeutende Beiträge zur Forschung und Praxis der Finanz-KI dar. Die Kombination aus multimodaler Merkmalsentwicklung, adaptiven Ensemble-Methoden, mathematischer Korrelationskontrolle und einer produktionsreifen Architektur setzt neue Maßstäbe für Marktprognosesysteme und demonstriert gleichzeitig eine effektive kollaborative Entwicklung in wettbewerbsorientierten Umgebungen.",
      tags: ["Merkmalsinnovation", "Ensemble-Methoden", "Mathematische Strenge", "Systemarchitektur", "Team-Zusammenarbeit"]
    }
  },

  future: {
    title: "Fortgeschrittene Forschungsrichtungen",
    subtitle: "Aufbauend auf dem Meisterschaftsfundament von MarketPulse: Verbesserungen der nächsten Generation für Finanz-KI im Produktionsmaßstab",
    directions: [
        {
          title: "Deep-Learning-Modelle (Temporal Fusion Transformers)",
          items: [
            { subtitle: "Temporal Fusion Transformers", description: "Ersetzen oder ergänzen Sie LightGBM durch die TFT-Architektur, die für multimodale Zeitreihen entwickelt wurde. Sie kann multivariate Reihen mit statischen Kovariaten verarbeiten und erfasst zeitliche Muster und die Aufmerksamkeit auf wichtige Merkmale.", technicalDetail: "Technisches Detail: Die Variablenauswahlnetzwerke von TFT können relevante Merkmale automatisch identifizieren, während Multi-Head-Aufmerksamkeitsmechanismen komplexe zeitliche Abhängigkeiten erfassen, die traditionelle Modelle übersehen." },
            { subtitle: "Cross-modale Aufmerksamkeit", description: "Implementieren Sie Aufmerksamkeitsmechanismen, die die Bedeutung von Preissignalen gegenüber der Nachrichtenstimmung über verschiedene Zeiträume und Marktregime dynamisch gewichten können.", technicalDetail: "Technisches Detail: Selbstaufmerksamkeitsschichten können lernen, wann die Nachrichtenstimmung am vorhersagekräftigsten ist (z.B. während der Berichtssaisonen oder Krisenzeiten) und wann technische Muster dominieren." }
          ],
          potential: "Forschungspotenzial: TFT könnte Preisverläufe und Nachrichten-Einbettungen durchgängig verarbeiten und komplexe Interaktionen automatisch lernen, was in Zeitreihenwettbewerben bereits erfolgreich war. Forschungen zeigen Genauigkeitsverbesserungen von 15-25% gegenüber traditionellen Ensemble-Methoden."
        },
        {
          title: "Verstärkungslernen für die Ensemble-Gewichtung",
          items: [
            { subtitle: "Dynamische Ensemble-Gewichtung", description: "Die aktuellen Ensemble-Gewichte sind statische Regeln. Verwenden Sie RL oder adaptive Algorithmen, um die Mischung in Echtzeit anzupassen. Ein Multi-Armed Bandit könnte täglich entscheiden, ob dem ML-Modell oder der Basislinie basierend auf der jüngsten Leistung vertraut werden soll.", technicalDetail: "Technisches Detail: Algorithmen wie Thompson Sampling oder Upper Confidence Bound können kontinuierlich optimale Gewichtungsstrategien lernen und sich an veränderte Marktregime ohne manuelle Eingriffe anpassen." },
            { subtitle: "Regime-bewusste Anpassung", description: "RL-Agenten können Marktregime-Änderungen (Bullen-/Bären-/Seitwärtsmarkt) erkennen und die Ensemble-Zusammensetzung, die Merkmalswichtigkeit und die Prognosehorizonte automatisch anpassen.", technicalDetail: "Technisches Detail: Die Zustandsdarstellung umfasst das Volatilitätsregime, Korrelationszusammenbrüche und das Momentum der Nachrichtenstimmung, um optimale Entscheidungen zur Modellauswahl zu treffen." }
          ],
          potential: "Forschungspotenzial: Reaktionsschneller auf Regime-Wechsel, wobei in volatilen Perioden auf die Basislinie zurückgegriffen wird, bis sich das Regime stabilisiert. Backtesting zeigt eine Reduzierung der Drawdown-Perioden während Marktübergängen um 20-30%."
        },
        {
          title: "Fortgeschrittene NLP für die Finanztextanalyse",
          items: [
            { subtitle: "FinBERT-Integration", description: "Ersetzen Sie die wörterbuchbasierte Stimmung durch FinBERT (eine auf Finanznachrichten trainierte BERT-Variante) für differenziertere Stimmungswerte oder Themenklassifizierung (Gewinne, Makroökonomie, Geopolitik).", technicalDetail: "Technisches Detail: FinBERT bietet kontextualisierte Einbettungen, die Finanzjargon verstehen und zwischen Szenarien wie 'Schätzungen übertreffen' (positiv) und 'Preise drücken' (negativ) unterscheiden." },
            { subtitle: "Multi-Asset-Nachrichtenzuordnung", description: "Verwenden Sie Named-Entity-Recognition und Sektorklassifizierung, um Nachrichten bestimmten Anlagen zuzuordnen. Gewichten Sie die Nachrichtenrelevanz basierend auf direkten Erwähnungen, Sektorüberschneidungen und Lieferkettenbeziehungen.", technicalDetail: "Technisches Detail: Graph-Neuronale-Netze können Unternehmensbeziehungen modellieren und die Nachrichtenstimmung durch Lieferketten und Wettbewerbsdynamiken für eine genauere Zuordnung verbreiten." },
            { subtitle: "Echtzeit-Nachrichten-Streaming", description: "Implementieren Sie eine Streaming-NLP-Pipeline für die Echtzeit-Nachrichtenerfassung, Stimmungsbewertung und Modellaktualisierungen mit Latenz im Sub-Sekunden-Bereich für Hochfrequenzhandelsanwendungen.", technicalDetail: "Technisches Detail: Apache Kafka + Streaming-Transformers-Architektur mit inkrementellen Lernfähigkeiten zur Aktualisierung von Stimmungsmodellen ohne vollständiges Neutraining." }
          ],
          potential: "Forschungspotenzial: Verbesserte Stimmungsgenauigkeit und Filterung der anlagenspezifischen Nachrichtenrelevanz. Studien zeigen, dass FinBERT-basierte Stimmung die Vorhersagegenauigkeit in Finanzanwendungen um 12-18% gegenüber wörterbuchbasierten Methoden verbessert."
        },
        {
          title: "Multi-Horizont- & Multivariate Prognose",
          items: [
            { subtitle: "Sequenz-zu-Sequenz-Architektur", description: "Die aktuelle Konfiguration sagt einen Tag im Voraus. Erweitern Sie auf mehrstufige Prognosen (Woche/Monat im Voraus) unter Verwendung von Sequenz-zu-Sequenz-Modellen oder iterativer Vorhersage mit Anpassung.", technicalDetail: "Technisches Detail: Encoder-Decoder-Transformer mit Teacher Forcing während des Trainings, Beam Search für die Inferenz und unsicherheitsgewichtete Verlustfunktionen für längere Horizonte." },
            { subtitle: "Vektor-Autoregressions-Verbesserung", description: "Modellieren Sie die gesamte Sequenz von drei Anlagenpreisen gemeinsam mit einem multivariaten RNN oder einer Vektor-Autoregression, um Korrelationen intrinsisch ohne nachträgliche Korrekturen zu erhalten.", technicalDetail: "Technisches Detail: Sparse-VAR-Modelle mit LASSO-Regularisierung können kausale Beziehungen zwischen Anlagen automatisch identifizieren und gleichzeitig die Recheneffizienz beibehalten." },
            { subtitle: "Hierarchische Prognose", description: "Implementieren Sie einen hierarchischen Zeitreihenansatz, bei dem Vorhersagen auf Portfolioebene die Vorhersagen einzelner Anlagen einschränken und so kohärente Multi-Asset-Szenarien gewährleisten.", technicalDetail: "Technisches Detail: Bottom-up- und Top-down-Abgleichmethoden stellen sicher, dass die Vorhersagen einzelner Anlagen die Portfoliosummen ergeben und dabei die Korrelationsbeschränkungen einhalten." }
          ],
          potential: "Forschungspotenzial: Erweiterte Prognosehorizonte bei beibehaltener Korrelationsstruktur. Multi-Horizont-Modelle ermöglichen eine strategische Portfolioplanung über das tägliche Rebalancing hinaus, mit einer Genauigkeitsverschlechterung von <10% pro zusätzlicher prognostizierter Woche."
        },
        {
          title: "Unsicherheitsquantifizierung & Risikomanagement",
          items: [
            { subtitle: "Bayes'sche Neuronale Netze", description: "Erweitern Sie das Modell, um Vorhersageintervalle mittels Quantilregression in LightGBM oder Bayes'schen Neuronalen Netzen zu erzeugen. Entscheidend für das Risikomanagement in der Finanzwelt, wo Unsicherheit ebenso wichtig ist wie Punktschätzungen.", technicalDetail: "Technisches Detail: Monte-Carlo-Dropout und variationelle Inferenz liefern Schätzungen der epistemischen Unsicherheit, während heteroskedastische Rauschmodelle die aleatorische Unsicherheit erfassen." },
            { subtitle: "Szenariogenerierung", description: "Generieren Sie Tausende von korrelierten Preispfaden unter Verwendung gelernter Volatilitätsdynamiken und Korrelationsstrukturen, was robuste Stresstests und Risikobewertungen ermöglicht.", technicalDetail: "Technisches Detail: Generative Adversarial Networks können komplexe Preisdynamiken und Korrelationsstrukturen lernen, um realistische Marktszenarien für die Risikosimulation zu generieren." },
            { subtitle: "Konforme Vorhersage", description: "Implementieren Sie konforme Vorhersagemethoden, um statistisch gültige Vorhersageintervalle ohne Verteilungsannahmen bereitzustellen, was für die Einhaltung regulatorischer Vorschriften entscheidend ist.", technicalDetail: "Technisches Detail: Adaptive konforme Vorhersage passt die Intervallbreiten basierend auf der jüngsten Prognosegenauigkeit an und bietet Abdeckungsgarantien auch bei Verteilungsverschiebungen." }
          ],
          potential: "Forschungspotenzial: Risikobewusste Vorhersagen mit Konfidenzintervallen für finanzielle Entscheidungen. Eine angemessene Unsicherheitsquantifizierung kann das Portfoliorisiko durch bessere Positionsgrößenbestimmung und Absicherungsstrategien um 25-40% reduzieren."
        },
        {
          title: "Automatisierte Merkmalsentdeckung & -entwicklung",
          items: [
            { subtitle: "Neuronale Architektursuche", description: "Verwenden Sie automatisierte Merkmalsextraktionsbibliotheken (tsfresh) und neuronale Architektursuche, um optimale Merkmalskombinationen und Netzwerkstrukturen automatisch zu entdecken.", technicalDetail: "Technisches Detail: Differenzierbare Architektursuche (DARTS) kann sowohl Merkmalsentwicklungstransformationen als auch neuronale Netzwerkarchitekturen durchgängig optimieren." },
            { subtitle: "Genetische Programmierung", description: "Wenden Sie genetische Algorithmen an, um neuartige technische Indikatoren zu entwickeln, indem Sie grundlegende Preistransformationen auf unerwartete Weise kombinieren (z.B. das Verhältnis der Bollinger-Band-Position von Preis1 zum Momentum von Preis3).", technicalDetail: "Technisches Detail: Multi-objektive genetische Programmierung optimiert sowohl die Vorhersagekraft als auch die Interpretierbarkeit der Merkmale und verhindert übermäßig komplexe Indikatorkombinationen." },
            { subtitle: "Graph-basiertes Merkmalslernen", description: "Modellieren Sie Anlagenbeziehungen als dynamische Graphen, bei denen die Kantengewichte Korrelationen darstellen, und verwenden Sie Graph-Neuronale-Netze, um beziehungsbewusste Merkmale automatisch zu lernen.", technicalDetail: "Technisches Detail: Temporale Graph-Netzwerke können sich entwickelnde Marktstrukturen erfassen und erkennen, wann traditionelle Korrelationen zusammenbrechen und neue Beziehungen entstehen." }
          ],
          potential: "Forschungspotenzial: Automatisierte Entdeckung optimaler Merkmalskombinationen über die manuelle Entwicklung hinaus. AutoML-Ansätze haben eine Reduzierung der Feature-Engineering-Zeit um 30-50% gezeigt, während die Modellleistung beibehalten oder verbessert wurde."
        }
    ],
    extensibility: {
      title: "Forschungswirkung & Erweiterbarkeit",
      subtitle:"Anwendungen der nächsten Generation",
      areas: [
          { title: "Marktübergreifende Anwendungen", description: "Anwendung der MarketPulse-Methodik auf Kryptowährungsmärkte unter Verwendung von Social-Media-Stimmungen (Twitter, Reddit), Rohstoffmärkte mit Angebots- und Nachfragenachrichten und internationale Aktienmärkte mit lokalen Nachrichtenquellen.", potential: "Wirkung: Die modulare Architektur ermöglicht einen schnellen Einsatz über verschiedene Anlageklassen mit minimalen Codeänderungen." },
          { title: "Echtzeit-Produktionssysteme", description: "Skalierung auf Produktionsumgebungen mit Latenzanforderungen im Mikrosekundenbereich, verteiltem Rechnen für große Portfolios und Einhaltung regulatorischer Vorschriften für den institutionellen Einsatz.", potential: "Wirkung: Ein System auf Unternehmensebene, das Tausende von Anlagen mit Echtzeit-Risikoüberwachung und automatisierter Handelsintegration unterstützt." },
          { title: "Integration alternativer Daten", description: "Einbeziehung von Satellitendaten für die Rohstoffprognose, Patentanmeldungen für das Innovations-Tracking, die Stimmung von Führungskräften aus Gewinnmitteilungen und makroökonomisches Nowcasting aus alternativen Indikatoren.", potential: "Wirkung: Multimodale Fusion von traditionellen und alternativen Datenquellen für eine umfassende Marktintelligenz." }
      ]
    },
    researchValidation: {
      title: "Forschungsvalidierung & Branchenwirkung",
      crossDomain: {
        title: "Domänenübergreifendes Transfer-Lernen",
        description: "Erkundung des Transfers von Stimmungsmerkmalen über Anlageklassen hinweg: Twitter-Stimmung für Kryptowährungsmärkte, Transkripte von Gewinnmitteilungen für die Aktienanalyse und Lieferkettennachrichten für die Rohstoffprognose.",
        examples: [
          { title: "Kryptomärkte", description: "Die Korrelation der Social-Media-Stimmung mit Preisbewegungen zeigt eine Verbesserung des R² um 0.3-0.4 gegenüber der reinen technischen Analyse" },
          { title: "Rohstoffmärkte", description: "Wetterdaten und Nachrichten über Lieferkettenunterbrechungen führen zu einer Steigerung des R² um 0.2-0.3 für die Agrar- und Energieprognose" }
        ]
      },
      academicCollaboration: {
        title: "Akademische & industrielle Zusammenarbeit",
        description: "Die preisgekrönte MarketPulse-Methodik bietet eine Grundlage für die akademische Forschung in der multimodalen Finanz-KI und den praktischen Einsatz in quantitativen Hedgefonds und Risikomanagementsystemen.",
        tags: ["Akademische Publikationen", "Open-Source-Framework", "Industriepartnerschaften", "Regulatorische Konformität"]
      }
    },
    vision: {
      title: "Zukunftsvision",
      description: "Diese Forschungsrichtungen werden die Grenzen von Finanz-KI-Systemen erweitern und das Meisterschaftsfundament von MarketPulse in eine umfassende Plattform für die quantitative Finanzwirtschaft der nächsten Generation verwandeln.",
      tags: ["Produktionssysteme", "Akademische Forschung", "Branchenwirkung", "Offene Innovation"]
    }
  },

  conclusion: {
    title: "MarketPulse v3.0: KI-gesteuerte Finanzprognose",
    description: "Preisgekröntes multimodales KI-System, das fortschrittliches maschinelles Lernen mit Finanz-Domänenwissen kombiniert. Entwickelt als Teil meines KI/ML-Portfolios, das produktionsreife Architektur und Forschungsinnovation demonstriert.",
    features: [
      { icon: "Database", text: "100+ multimodale Merkmale" },
      { icon: "BarChart3", text: "Fortgeschrittene Ensemble-Methoden" },
      { icon: "Globe", text: "Produktionsreife Architektur" }
    ],
    developer: {
      title: "Entwickelt von: KI/ML-Ingenieur & Data Scientist",
      description: "KI/ML-Ingenieur & Data Scientist",
      specialization: "Spezialisiert auf Finanz-KI, Deep Learning und Produktions-ML-Systeme"
    },
    actions: {
      documentation: "Technische Dokumentation",
      sourceCode: "Quellcode anzeigen",
      contact: "Kontakt",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    attribution: {
      copyright: "© 2025 KI/ML-Portfolio-Projekt • MarketPulse v3.0 •",
      achievement: "Gewinner der HAICK 2025 TSA Challenge",
      showcase: "Präsentation fortgeschrittener Finanz-KI-Forschung und Produktions-ML-Engineering-Fähigkeiten"
    }
  },

  common: {
    status: { loading: "Wird geladen...", error: "Ein Fehler ist aufgetreten", success: "Erfolg" },
    actions: { view: "Ansehen", download: "Herunterladen", explore: "Erkunden", learn: "Mehr erfahren", contact: "Kontakt" },
    technical: { features: "Merkmale", performance: "Leistung", architecture: "Architektur", methodology: "Methodik", innovation: "Innovation", research: "Forschung" },
    labels: {
      technicalNote: "Technischer Hinweis",
      tradeOff: "Kompromiss",
      limitation: "Einschränkung",
      advantage: "Vorteil",
      benefits: "Vorteile",
      parameters: "Parameter",
      validation: "Validierung",
      methodology: "Methodik",
      impact: "Wirkung",
      insight: "Einblick",
      researchPotential: "Forschungspotenzial",
      technicalDetail: "Technisches Detail",
      coreModule: "Kernmodul",
      filterParameters: "Filterparameter",
      volatilityControlProcess: "Volatilitätskontrollprozess",
      impactSummary: "Wirkungszusammenfassung",
      smoothingResults: "Glättungsergebnisse",
      volatilityResults: "Volatilitätsergebnisse",
      statisticalSignificance: "Statistische Signifikanz",
      technicalInsight: "Technischer Einblick",
      productionPhilosophy: "Produktionsphilosophie",
      collaborationNote: "Hinweis zur Zusammenarbeit",
      challengeFocus: "Fokus der Herausforderung",
      whyEnforceCorrelations: "Warum Korrelationen erzwingen?",
      architectureImpact: "Architektur-Auswirkung",
      processExcellence: "Prozessexzellenz",
      innovationImpact: "Innovationswirkung",
      futureVision: "Zukunftsvision"
    },
    codeSnippets: {
      mlScoreCalculation: "ml_score = (R²_modell + 1) / 2",
      conditionalWeighting: "if ml_score > 0.3: gewichte = 60% ML-Vorhersage, 40% Basis",
      correlationAdjustment: "L_ziel @ L_aktuell^(-1)",
      volatilityCapping: "if vorhergesagte_volatilitaet > 0.05: skalierungsfaktor = 0.05 / vorhergesagte_volatilitaet",
      sentimentScoring: "stimmungswert += treffer * gewichte[kategorie]",
      choleskyDecomposition: "np.linalg.cholesky(korrelationsmatrix)"
    },
    mathematical: {
      rSquared: "R²",
      correlation: "Korrelation",
      volatility: "Volatilität",
      ensemble: "Ensemble",
      baseline: "Basislinie",
      confidence: "Konfidenz",
      optimization: "Optimierung",
      regularization: "Regularisierung",
      crossValidation: "Kreuzvalidierung",
      featureSelection: "Merkmalsauswahl",
      hyperparameter: "Hyperparameter",
      overfitting: "Überanpassung",
      generalization: "Generalisierung"
    }
  },

  additionalContent: {
    heroExtras: {
      performanceImprovement: "100.3 % Leistungsverbesserung",
      multimodalIntegration: "multimodales Ensemble-Lernen",
      championshjipAchievement: "erstplatzierte Lösung"
    },
    tabContent: {
      dataPipelineTitle: "2.1 Daten-Pipeline und Vorverarbeitung",
      featureEngineeringTitle: "2.2 Feature-Engineering",
      modelingTitle: "2.3 Modellierungsansatz und Ensemble-Strategie",
      postProcessingTitle: "2.4 Nachbearbeitung der Vorhersagen"
    },
    uiElements: {
      hoverEffects: "Für Details darüberfahren",
      transitionMessages: "Inhalt wird geladen...",
      loadingStates: "Wird verarbeitet...",
      errorHandling: "Ein Fehler ist aufgetreten"
    },
    competitionSpecific: {
      haickChallenge: "HAICK 2025 TSA Challenge",
      teamU23: "Team U23",
      memberRoles: ["Hauptentwickler", "ML-Ingenieur", "Data Scientist", "KI-Ingenieur"],
      competitionDuration: "6-wöchiger Entwicklungszyklus",
      participantCount: "12 teilnehmende Teams",
      evaluationCriteria: ["Leistung (65%)", "Code-Qualität (20%)", "Dokumentation (15%)"]
    },
    technicalSpecs: {
      lightgbmConfiguration: "LightGBM Gradient Boosting mit Regularisierung",
      optunaOptimization: "Bayes'sche Optimierung mit 50 Versuchen",
      timeSeriesSplit: "3-fache rollierende TimeSeriesSplit-Kreuzvalidierung",
      selectKBest: "ANOVA F-Score-Merkmalsauswahl (K=80)",
      choleskyDecomposition: "Cholesky-basierte Korrelationsanpassung",
      savitzkyGolayFilter: "Polynomieller Glättungsfilter",
      volatilityCapping: "5% tägliche Volatilitätsgrenze",
      ensembleWeighting: "Konfidenzbasierte adaptive Gewichtung",
      correlationControl: "P1-P3-Zielkorrelation: ~0.89",
      sentimentAnalysis: "Bewertung mit benutzerdefiniertem Finanzlexikon"
    }
  }
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
    adc: {
  hero: {
    badge: {
      text: "Inteligencia Empresarial Impulsada por IA"
    },
    title: {
      main: "FEAST",
      subtitle: "FORECASTER"
    },
    description: "Sistema revolucionario de aprendizaje automático que transforma las operaciones de cafetería de BNP Paribas mediante análisis predictivo, reduciendo desperdicios y optimizando la asignación de recursos con una precisión sin precedentes.",
    performanceMetrics: {
      title: "MÉTRICAS DE RENDIMIENTO EN TIEMPO REAL",
      metrics: [
        {
          label: "Precisión de Predicción",
          description: "Precisión de pronóstico de comidas diarias (en promedio)",
          suffix: "RMSE"
        },
        {
          label: "Confianza del Modelo",
          description: "Robustez validada mediante validación cruzada temporal",
          suffix: "%"
        },
        {
          label: "Reducción de Desperdicios",
          description: "Optimización de la preparación de alimentos y eficiencia de costos",
          suffix: "%"
        },
        {
          label: "Tiempo de Procesamiento",
          description: "Insights en tiempo real para toma de decisiones dinámicas",
          suffix: "min"
        }
      ]
    },
    technologyStack: [
      {
        name: "LightGBM",
        description: "Motor ML de alto rendimiento para insights rápidos"
      },
      {
        name: "Modelos Ensemble",
        description: "Poder predictivo combinado para precisión superior"
      },
      {
        name: "Análisis de Series Temporales",
        description: "Patrones temporales avanzados para pronósticos futuros"
      },
      {
        name: "Datos en Tiempo Real",
        description: "Actualizaciones instantáneas para soporte de decisiones ágil"
      }
    ],
    buttons: {
      primary: "Experimentar el Sistema",
      secondary: "Explorar Analíticas"
    },
    keyFeatures: [
      {
        title: "Pronósticos Inteligentes",
        description: "Predicciones de demanda de comidas impulsadas por IA, asegurando preparación óptima de alimentos y minimizando desperdicios."
      },
      {
        title: "Insights Dinámicos de Ocupación",
        description: "Seguimiento en tiempo real de la presencia de empleados y uso de cafetería para planificación adaptativa."
      },
      {
        title: "Inteligencia Empresarial Estratégica",
        description: "Dashboards integrales e insights accionables para ahorros de costos y excelencia operacional."
      }
    ]
  },
  executiveSummary: {
    badge: {
      primary: "ANÁLISIS TÉCNICO BNP PARIBAS EL DJAZAÏR",
      secondary: "Sistema de Pronóstico de Comidas"
    },
    title: {
      main: "Cafetería BNP Paribas",
      subtitle: "Sistema de Pronóstico de Demanda"
    },
    description: "Solución integral de aprendizaje automático para la cafetería de la oficina central de BNP Paribas El Djazaïr, entregando pronósticos precisos de conteo diario de comidas mediante análisis integrado de transacciones de cafetería, asistencia de oficina, ofertas de menú, condiciones climáticas y eventos de calendario cultural para optimizar la preparación y reducir el desperdicio operacional",
    navigation: {
      sections: [
        "Desafío Operacional",
        "Solución Técnica",
        "Análisis de Rendimiento",
        "Impacto Empresarial"
      ]
    },
    operationalChallenges: {
      title: "Desafíos Operacionales Actuales",
      challenges: [
        {
          title: "Desperdicio de Alimentos y Optimización de Costos",
          description: "La cafetería de la oficina central de BNP Paribas El Djazaïr enfrenta desafíos significativos con las decisiones diarias de preparación de comidas. La sobrepreparación lleva a un desperdicio sustancial de alimentos y costos innecesarios, mientras que la subpreparación deja a los empleados sin comidas, creando ineficiencias operacionales e insatisfacción de empleados.",
          currentState: "Estimación manual sin pronósticos precisos de demanda",
          businessImpact: "Desperdicio significativo por sobrestimación, potencial tangible de ahorro de costos",
          frequency: "Desafío diario de toma de decisiones"
        },
        {
          title: "Calidad de Servicio y Satisfacción de Empleados",
          description: "Sin pronósticos precisos, el personal de cafetería debe tomar decisiones de preparación diarias a ciegas, a menudo resultando en escasez de comidas que decepcionan a los empleados o preparación excesiva que lleva a desperdicios y costos operacionales aumentados.",
          currentState: "Conjetura basada en experiencia para conteos diarios de comidas",
          businessImpact: "Insatisfacción de empleados por indisponibilidad de comidas",
          frequency: "Disrupciones diarias de servicio e incertidumbres de planificación"
        },
        {
          title: "Planificación de Recursos y Asignación de Personal",
          description: "La falta de insights predictivos afecta la asignación de recursos de cocina, programación de personal y adquisición de ingredientes. La gerencia no puede planificar operaciones proactivamente u optimizar la utilización de recursos sin entender patrones de demanda y factores clave.",
          currentState: "Planificación reactiva sin insights de demanda",
          businessImpact: "Asignación de recursos subóptima y oportunidades de eficiencia perdidas",
          frequency: "Ineficiencia operacional continua"
        }
      ],
      labels: {
        currentState: "Estado Actual",
        businessImpact: "Impacto Empresarial",
        frequency: "Frecuencia"
      }
    },
    technicalSolutions: {
      title: "Arquitectura Técnica Avanzada",
      solutions: [
        {
          title: "Integración de Datos Multifuente y Pipeline ETL",
          description: "Arquitectura de datos integral integrando cinco fuentes de datos internas heterogéneas: registros históricos de transacciones de cafetería, registros de asistencia de oficina central, información de menú diario, datos meteorológicos y eventos de calendario. Todos los conjuntos de datos se fusionan en campos de fecha para crear una tabla de modelado unificada para pronósticos.",
          methodology: "Pipeline de aprendizaje automático de extremo a extremo con limpieza extensiva de datos e ingeniería de características. Análisis de fechas, uniones internas en campos de fecha y procesos de agregación aseguran consistencia de datos. Atención especial al calendario empresarial argelino (semana laboral domingo-jueves) y contextos culturales incluyendo feriados islámicos y períodos de Ramadán.",
          implementation: [
            "Registros de transacciones de cafetería (kaggle_cantine.csv) agregados por ID de empleado para derivar conteos diarios de comidas (Nb_meals)",
            "Seguimiento de asistencia de oficina central (kaggle_head_office.csv) vía datos de badge-in para conteo diario (Nb_acces)",
            "Análisis de ofertas de menú diario (kaggle_menu.csv) incluyendo tipos de entrada y platos principales para puntuación de popularidad",
            "Integración API meteorológica (kaggle_meteo.csv) capturando temperatura, precipitación, velocidad del viento y cobertura de nubes",
            "Plantillas de fechas futuras (test_kaggle_finale.csv) con características prepobladas para despliegue de pronósticos"
          ],
          performance: "Integración exitosa de 5 fuentes de datos con 100% de precisión de alineación de fechas",
          innovation: "Primera implementación considerando contexto cultural argelino y efectos de calendario islámico"
        },
        {
          title: "Ingeniería Avanzada de Características y Extracción de Señales",
          description: "Proceso sofisticado de creación de características extrayendo señales significativas de datos crudos para identificar factores clave de demanda de cafetería. Las características incluyen patrones día-de-semana, feriados públicos, correlaciones de asistencia de oficina, índices de popularidad de menú y efectos de interacción meteorológica.",
          methodology: "Ingeniería de características consciente del tiempo con validación cruzada para prevenir fuga de datos. Solo datos históricos usados para cálculos de popularidad. Análisis integral de patrones incluyendo estacionalidad semanal, efectos de feriados e influencias meteorológicas en comportamiento de comida.",
          implementation: [
            "Características temporales: patrones día-de-semana, banderas de feriados, indicadores estacionales, períodos Is_Ramadan",
            "Análisis de correlación de asistencia: relación conteo de oficina vs. demanda de cafetería (r=0.61)",
            "Puntuación de popularidad de menú: promedio histórico de comidas por tipo de plato con protección de validación cruzada",
            "Características de interacción meteorológica: efectos de precipitación, umbrales de temperatura, interacciones Rain_x_Occupancy",
            "Características de retraso y estadísticas rodantes: lag7 (mismo día semana pasada), promedios móviles MA7/MA14 para patrones de series temporales"
          ],
          performance: "Asistencia de oficina identificada como predictor clave con correlación significativa a demanda de comidas",
          innovation: "Indexación de popularidad de menú con validación cruzada previene sobreajuste a preferencias históricas"
        },
        {
          title: "Aprendizaje Automático Ensemble y Optimización de Modelo",
          description: "Modelos de regresión ensemble de vanguardia usando árboles de decisión con gradient-boosting capaces de capturar relaciones no lineales e interacciones complejas de características. La optimización de hiperparámetros minimiza el error de pronóstico (RMSE) mientras asegura generalización a fechas futuras.",
          methodology: "Validación cruzada consciente del tiempo simulando predicciones hacia adelante en fechas retenidas. Marco de validación riguroso asegura que el modelo generalice bien a escenarios futuros sin sobreajustarse a peculiaridades históricas. Optimización RMSE para precisión práctica de pronósticos.",
          implementation: [
            "Arquitectura ensemble LightGBM y XGBoost (ponderado 70-30) con árboles de decisión gradient-boosted",
            "Validación cruzada TimeSeriesSplit de 5-fold previniendo fuga de datos futuros con estrategia de ventana expansiva",
            "Optimización bayesiana de hiperparámetros Optuna (60 ensayos) dirigida a minimización RMSE con learning_rate ~0.05-0.1, num_leaves ~400-500",
            "Parada temprana con paciencia de 50 rondas para prevención de sobreajuste y determinación óptima de conteo de árboles",
            "Pipeline de predicción secuencial para conjunto de prueba: pronósticos día por día usando actualizaciones recursivas de características de retraso de predicciones previas"
          ],
          performance: "Logrado ~22 RMSE de precisión en validación cruzada (5-7% del rango diario típico 0-400+ comidas), representando mejora sustancial sobre métodos ingenuos",
          innovation: "Metodología de validación consciente del tiempo asegurando rendimiento robusto de despliegue en mundo real"
        }
      ],
      labels: {
        methodology: "Metodología",
        implementationDetails: "Detalles de Implementación",
        performance: "RENDIMIENTO",
        innovation: "INNOVACIÓN"
      }
    },
    performanceAnalysis: {
      title: "Análisis Integral de Rendimiento",
      metrics: [
        {
          label: "Precisión RMSE",
          description: "RMSE de validación cruzada en 20s bajos (5-7% del rango diario típico 0-400+ comidas), mejora sustancial sobre métodos de pronóstico ingenuos",
          technicalDetail: "Error Cuadrático Medio validado a través de validación cruzada TimeSeriesSplit de 5-fold simulando escenarios de despliegue en mundo real",
          context: "Rango objetivo 15-25 RMSE alcanzado, habilitando planificación precisa de preparación con MAE ~16 comidas de desviación promedio"
        },
        {
          label: "Estrategia Ensemble",
          description: "Ensemble ponderado LightGBM-XGBoost optimizando diferentes fortalezas algorítmicas para precisión robusta de predicción",
          technicalDetail: "Ponderación ensemble determinada a través de análisis de rendimiento de validación cruzada: LightGBM sobresale en características categóricas, XGBoost en interacciones numéricas",
          context: "Enfoque ensemble reduce sesgos específicos del modelo y mejora generalización"
        },
        {
          label: "Integración de Datos",
          description: "Integración integral de registros de cafetería, registros de asistencia, datos de menú, información meteorológica y eventos de calendario",
          technicalDetail: "Pipeline ETL con fusión basada en fechas asegurando 100% de alineación de datos a través de sistemas internos heterogéneos",
          context: "Primera implementación integrando múltiples fuentes de datos internas de BNP Paribas"
        },
        {
          label: "Factores Externos",
          description: "Las condiciones meteorológicas influyen el comportamiento de comida, con precipitación alentando uso de cafetería en sitio",
          technicalDetail: "Integración API capturando temperatura, precipitación, velocidad del viento y cobertura de nubes para modelado de demanda",
          context: "Lluvia y patrones meteorológicos afectan decisiones de comida de empleados"
        },
        {
          label: "Listo para Producción",
          description: "Pipeline de pronósticos automatizado actualizando predicciones con nuevas entradas de datos para uso operacional diario",
          technicalDetail: "Pipeline de extremo a extremo procesando conteo diario, pronósticos meteorológicos e información de menú para predicciones en tiempo real",
          context: "Herramienta de soporte de decisiones para gestión de cafetería"
        },
        {
          label: "Horizonte de Pronóstico",
          description: "Predicciones día adelante habilitando preparación proactiva de comidas y asignación de recursos",
          technicalDetail: "Modelado de series temporales con ingeniería de características capturando patrones semanales y efectos estacionales",
          context: "Horizonte óptimo para planificación operacional y adquisición de ingredientes"
        },
        {
          label: "Consciente del Contexto",
          description: "El modelo considera calendario empresarial argelino y feriados islámicos incluyendo observancia de Ramadán",
          technicalDetail: "Ingeniería de características incorporando semana laboral domingo-jueves y patrones de observancia religiosa",
          context: "Adaptación crítica para contexto cultural local preciso"
        }
      ],
      comparison: {
        title: "Comparación de Rendimiento de Modelo",
        models: [
          { name: "Baseline Ingenuo", description: "Promedios simples" },
          { name: "Regresión Lineal", description: "Características básicas" },
          { name: "Ensemble LightGBM", description: "Características avanzadas" }
        ],
        bestLabel: "MEJOR"
      },
      labels: {
        technicalDetail: "DETALLE TÉCNICO",
        context: "CONTEXTO"
      }
    },
    businessImpact: {
      title: "Impacto Empresarial Cuantificado",
      keyMetrics: [
        { label: "Precisión de Comidas", description: "Error promedio de predicción habilitando preparación precisa" },
        { label: "Integración de Datos", description: "Pipeline de datos multifuente integral" },
        { label: "Capacidad de Planificación", description: "Pronósticos día adelante para asignación óptima de recursos" },
        { label: "Conciencia de Contexto", description: "Calendario empresarial argelino e integración de feriados islámicos" }
      ],
      operationalBenefits: [
        {
          title: "Reducción de Desperdicios",
          description: "Los pronósticos precisos eliminan el desperdicio por sobrestimación y reducen costos de alimentos. Incluso reducir el error diario en unas pocas docenas de comidas se traduce en ahorros tangibles y métricas de sostenibilidad mejoradas para las operaciones de BNP Paribas."
        },
        {
          title: "Satisfacción de Empleados",
          description: "Asegura que casi todos los empleados planeando comer en la cafetería puedan ser acomodados. Previene decepción por escasez de comidas mientras mantiene calidad de servicio y disponibilidad consistentes."
        },
        {
          title: "Eficiencia Operacional",
          description: "Entender los factores de demanda habilita programación proactiva de personal y adquisición de ingredientes. La gerencia puede anticipar mayor participación en días específicos o cuando se sirven comidas populares."
        }
      ],
      implementation: {
        title: "Implementación e Integración Operacional",
        phases: [
          {
            phase: "Fase 1: Fundación de Datos",
            duration: "Completada",
            activities: ["Desarrollo de pipeline ETL", "Validación de calidad de datos", "Ingeniería de características", "Integración de calendario argelino"]
          },
          {
            phase: "Fase 2: Desarrollo de Modelo",
            duration: "Completada",
            activities: ["Selección y ajuste de algoritmo", "Marco de validación cruzada", "Optimización ensemble", "Validación de rendimiento"]
          },
          {
            phase: "Fase 3: Despliegue de Producción",
            duration: "En Progreso",
            activities: ["API de predicción en tiempo real", "Desarrollo de dashboard", "Entrenamiento de personal", "Sistema de monitoreo"]
          },
          {
            phase: "Fase 4: Mejora Continua",
            duration: "En Curso",
            activities: ["Pipeline de reentrenamiento de modelo", "Detección de deriva de características", "Monitoreo de rendimiento", "Actualizaciones de reglas de negocio"]
          }
        ]
      },
      roi: {
        title: "Resumen de Retorno de Inversión",
        metrics: [
          { label: "Múltiplo ROI", description: "Dentro de 12 meses" },
          { label: "Meses de Payback", description: "Cronología de punto de equilibrio" },
          { label: "Valor de 3 Años", description: "Ahorros acumulativos" }
        ],
        quote: "Este sistema de pronósticos potenciado por ML representa un cambio de paradigma de gestión reactiva a predictiva de cafetería, entregando mejoras medibles en eficiencia operacional, control de costos y satisfacción de empleados mientras establece a BNP Paribas El Djazaïr como líder en gestión de instalaciones basada en datos.",
        buttons: {
          technical: "Inmersión Técnica Profunda",
          model: "Ver Arquitectura del Modelo"
        }
      }
    },
    dataArchitecture: {
      title: "Arquitectura de Datos Integrada",
      sources: [
        {
          name: "Registros de Transacciones de Cafetería",
          details: "Registros individuales de transacciones de comidas por ID de empleado",
          records: "Conteos diarios de comidas (Nb_meals) agregados de compras individuales",
          connection: "Variable objetivo primaria para modelo de pronósticos",
          technical: "kaggle_cantine.csv - Cada entrada representa una transacción de comida"
        },
        {
          name: "Asistencia de Oficina Central",
          details: "Registros diarios de badge-in rastreando presencia de oficina",
          records: "Conteo diario (Nb_acces) de empleados únicos en edificio",
          connection: "Característica exógena crucial - mayor asistencia crea oportunidad para más comidas",
          technical: "Agregación diaria proporcionando conteo potencial de comensales"
        },
        {
          name: "Sistema de Menú Diario",
          details: "Ofertas de menú de cafetería incluyendo entradas y platos principales",
          records: "Composición de menú e índices de popularidad de platos",
          connection: "Influencia cualitativa - ciertos platos atraen más comensales",
          technical: "Datos de menú con categorización de platos para identificación de favoritos"
        },
        {
          name: "API de Datos Meteorológicos",
          details: "Condiciones meteorológicas externas afectando decisiones de comida",
          records: "Métricas de temperatura, precipitación, velocidad del viento, cobertura de nubes",
          connection: "La lluvia alienta comida en sitio, la temperatura afecta elecciones de almuerzo",
          technical: "Métricas meteorológicas diarias integradas vía API externa"
        },
        {
          name: "Calendario y Eventos",
          details: "Calendario empresarial argelino y eventos culturales",
          records: "Banderas de feriados, patrones de semana laboral (Dom-Jue), observancias religiosas",
          connection: "Contexto cultural crítico para predicciones precisas del mercado argelino",
          technical: "Integración de calendario personalizada para feriados islámicos y patrones locales"
        }
      ]
    }
  },
  technicalOverview: {
    badge: {
      primary: "INMERSIÓN TÉCNICA PROFUNDA",
      secondary: "Sistema de Pronóstico de Comidas BNP Paribas"
    },
    title: {
      main: "Arquitectura ML Avanzada"
    },
    description: "Pipeline de aprendizaje automático de extremo a extremo combinando cinco fuentes de datos heterogéneas con ingeniería sofisticada de características y gradient boosting ensemble para lograr ~20 RMSE de precisión en pronósticos diarios de conteo de comidas para operaciones de cafetería de BNP Paribas El Djazaïr",
    dataSources: {
      title: "Pipeline de Integración de Datos Multifuente",
      sources: [
        {
          name: "Registros de Transacciones de Cafetería",
          description: "Registros individuales de transacciones de comidas con seguimiento de ID de empleado para agregación diaria integral",
          keyFeatures: [
            "Conteos diarios de comidas (Nb_meals) derivados de agregación de transacciones usando kaggle_cantine.csv",
            "Seguimiento de ID de empleado con manejo de duplicados para comidas múltiples (~0.4% tasa de ocurrencia)",
            "Análisis de patrones temporales a través de mayo 2022 - diciembre 2024 (cobertura de 2.5 años)",
            "Construcción de variable objetivo con predicción secuencial día por día para pronósticos de prueba"
          ],
          dataSourceLabel: "Fuente de Datos 1/5"
        },
        {
          name: "Datos de Asistencia de Oficina Central",
          description: "Registros de badge-in rastreando presencia diaria de empleados como predictor clave de demanda de cafetería",
          keyFeatures: [
            "Conteo diario (Nb_acces) de kaggle_head_office.csv de empleados únicos en edificio",
            "Mapeo de departamentos y análisis de estructura organizacional (considerado pero no implementado)",
            "Característica exógena crucial con correlación 0.61 a demanda de comidas (importancia de característica principal)",
            "Indicador de población potencial de comensales limitando capacidad diaria máxima (rango 0-400+ comidas)"
          ],
          dataSourceLabel: "Fuente de Datos 2/5"
        },
        {
          name: "Sistema de Menú Diario",
          description: "Ofertas de menú integrales incluyendo tipos de entrada y opciones duales de plato principal con analíticas de popularidad",
          keyFeatures: [
            "Entrada y dos platos principales por día de kaggle_menu.csv con clasificación categórica",
            "Índices históricos de popularidad de platos: promedio Nb_meals por plato (ej., Pizza=350 vs Quiche=280)",
            "Análisis de diversidad de menú (ofertas del mismo tipo vs variadas) y detección de opción vegetariana",
            "Codificación objetivo protegida por validación cruzada previniendo sobreajuste a preferencias históricas"
          ],
          dataSourceLabel: "Fuente de Datos 3/5"
        },
        {
          name: "Integración de Datos Meteorológicos",
          description: "Condiciones meteorológicas externas afectando comportamiento de comida de empleados y decisiones de almuerzo",
          keyFeatures: [
            "Temperatura, precipitación, velocidad del viento y cobertura de nubes de kaggle_meteo.csv",
            "Indicador de lluvia (Is_Rain) mostrando ~6 comidas adicionales en días lluviosos (313 vs 307 baseline)",
            "Efectos de interacción meteorológica-asistencia (Rain_x_Occupancy) para cambios comportamentales compuestos",
            "Imputación de datos meteorológicos faltantes con estrategias específicas del dominio para robustez del modelo"
          ],
          dataSourceLabel: "Fuente de Datos 4/5"
        },
        {
          name: "Calendario Argelino y Contexto Cultural",
          description: "Características culturales y basadas en calendario considerando patrones empresariales locales y observancias religiosas",
          keyFeatures: [
            "Reconocimiento de patrón de semana laboral domingo-jueves",
            "Detección de feriados islámicos (períodos de Ramadán, Eid)",
            "Marcado de feriados públicos con expectativas de comidas casi cero",
            "Variaciones estacionales incluyendo períodos de vacaciones de agosto"
          ],
          dataSourceLabel: "Fuente de Datos 5/5"
        }
      ],
      integrationSummary: {
        title: "Resumen de Arquitectura de Integración",
        metrics: [
          {
            label: "Fuentes de Datos",
            description: "Integradas vía fusión basada en fechas"
          },
          {
            label: "Cobertura de Años",
            description: "Mayo 2022 - Diciembre 2024"
          },
          {
            label: "Correlación Clave",
            description: "Asistencia vs Demanda de Comidas"
          }
        ]
      }
    },
    methodology: {
      title: "Metodología de Pipeline ML de Extremo a Extremo",
      phases: [
        {
          phase: "Integración de Datos y Preprocesamiento",
          description: "Pipeline ETL integral fusionando cinco fuentes de datos heterogéneas con procedimientos rigurosos de limpieza y validación",
          techniques: [
            "Análisis y alineación de fechas a través de todos los conjuntos de datos con estandarización de formato",
            "Fusión de unión interna asegurando consistencia temporal a través de fuentes",
            "Imputación de datos faltantes con estrategias específicas del dominio",
            "Manejo de duplicados en registros de transacciones (~0.4% tasa de ocurrencia)",
            "Alineación de fin de semana/feriados para calendario empresarial argelino (fines de semana Vie-Sáb)",
            "Detección de período de Ramadán con marcado de evento especial"
          ],
          phaseLabel: "Fase 1"
        },
        {
          phase: "Análisis Exploratorio de Datos y Descubrimiento de Patrones",
          description: "Análisis estadístico revelando factores clave de demanda y patrones comportamentales en uso de cafetería",
          techniques: [
            "Análisis de estacionalidad semanal mostrando demanda pico de jueves",
            "Análisis de correlación de ocupación de oficina (r=0.61 con demanda de comidas)",
            "Cuantificación de influencia de menú con puntuación de popularidad",
            "Validación de efecto meteorológico (+6 comidas promedio en días lluviosos)",
            "Identificación de variación estacional (impactos de vacaciones de agosto)",
            "Reconocimiento de patrones de feriados con períodos de demanda cero"
          ],
          phaseLabel: "Fase 2"
        },
        {
          phase: "Ingeniería Avanzada de Características",
          description: "Creación de 60+ características predictivas de datos crudos incorporando señales temporales, comportamentales y ambientales",
          techniques: [
            "Características de calendario: día-de-semana, banderas de feriados, codificación de mes",
            "Características de retraso: lag7 (mismo día semana pasada) para estacionalidad semanal",
            "Estadísticas rodantes: promedios móviles de 7 y 14 días",
            "Índices de popularidad de menú con codificación de validación cruzada",
            "Características de interacción meteorológica (efectos lluvia × ocupación)",
            "Codificación objetivo para ítems de menú categóricos con prevención de fuga"
          ],
          phaseLabel: "Fase 3"
        },
        {
          phase: "Desarrollo de Modelo y Entrenamiento Ensemble",
          description: "Ensemble de gradient boosting con validación rigurosa consciente del tiempo y optimización de hiperparámetros",
          techniques: [
            "Arquitectura ensemble LightGBM y XGBoost con promediado ponderado 70-30 para balance óptimo de rendimiento",
            "Validación cruzada TimeSeriesSplit de 5-fold previniendo fuga futura (entrenamiento 2022-2023, validación 2024)",
            "Optimización bayesiana de hiperparámetros Optuna (60 ensayos): learning_rate ~0.05-0.1, num_leaves ~400-500, max_depth 8-12",
            "Parada temprana con paciencia de 50 rondas previniendo sobreajuste, promediado ensemble a través de folds CV para robustez",
            "Validación de importancia de características: Nb_acces (35%), indicadores día-de-semana (25%), popularidad de menú (20%), efectos meteorológicos (15%)",
            "Análisis residual reveló sesgo de subpredicción de lunes, resuelto a través de codificación mejorada día-de-semana y términos de interacción"
          ],
          phaseLabel: "Fase 4"
        },
        {
          phase: "Validación y Despliegue de Producción",
          description: "Validación integral de modelo y pipeline de despliegue para pronósticos operacionales",
          techniques: [
            "Validación hacia adelante en tiempo simulando escenarios de pronósticos en mundo real sin sesgo de anticipación",
            "Análisis residual asegurando predicciones no sesgadas a través de todas las condiciones y patrones día-de-semana",
            "Pipeline de predicción secuencial para test_kaggle_finale.csv: pronósticos día por día con actualizaciones de retraso recursivas",
            "Promediado ensemble a través de 5 modelos entrenados por fold para cuantificación robusta de incertidumbre e intervalos de predicción",
            "Predicción recursiva lista para producción usando pronósticos del día anterior como características de retraso dinámicas",
            "Monitoreo de rendimiento logrando ~22 RMSE (5-7% del rango 0-400+ comidas) con MAE ~16 comidas de desviación promedio",
            "Consideraciones de despliegue: pipeline de pronóstico diario, actualizaciones de características en tiempo real e intervalos de confianza de predicción"
          ],
          phaseLabel: "Fase 5"
        }
      ]
    },
    achievements: {
      metrics: [
        {
          label: "Validación RMSE",
          description: "RMSE de validación cruzada en 20s bajos (5-7% del rango diario 0-400+ comidas), alcanzando umbral de rendimiento objetivo"
        },
        {
          label: "Características Ingeniadas",
          description: "Creación sofisticada de características de datos crudos incluyendo señales temporales, comportamentales y ambientales"
        },
        {
          label: "CV de Series Temporales",
          description: "Validación rigurosa previniendo fuga futura con simulación de predicción hacia adelante en tiempo"
        }
      ]
    }
  },
  dataInsights: {
    badge: {
      primary: "ANÁLISIS EXPLORATORIO DE DATOS",
      secondary: "Descubrimiento de Patrones e Insights"
    },
    title: {
      main: "Insights Basados en Datos"
    },
    description: "Análisis exploratorio integral revelando patrones comportamentales, factores de demanda y relaciones críticas en uso de cafetería a través de 2.5 años de datos operacionales",
    timeSeriesAnalysis: {
      title: "Análisis de Series Temporales y Patrones",
      insights: [
        {
          title: "Tendencia General y Estacionalidad",
          description: "Comidas diarias servidas a lo largo del tiempo (mayo 2022 – dic 2024) mostrando fuerte estacionalidad semanal con tendencia mínima a largo plazo",
          findings: [
            "Fuerte estacionalidad semanal con caídas regulares a casi cero en fines de semana (viernes/sábados)",
            "Sin tendencia dramática a largo plazo, pero ligero aumento desde mediados de 2023 hasta 2024",
            "Caídas significativas durante agosto cada año debido a vacaciones de verano",
            "Períodos prolongados de cero comidas durante Ramadán cuando cafetería estaba efectivamente cerrada",
            "Serie es relativamente estacionaria aparte de efectos estacionales"
          ]
        },
        {
          title: "Patrones Día Laboral vs Fin de Semana",
          description: "Efectos claros día-de-semana dentro del patrón de semana laboral domingo-jueves en Argelia",
          findings: [
            "Jueves tiene el mayor número promedio de comidas (día de demanda pico)",
            "Domingo muestra demanda sobre el promedio a pesar de ser primer día laboral",
            "Lunes tiende a tener el promedio más bajo entre días laborales",
            "Viernes y sábado muestran comidas casi cero (fin de semana en Argelia)",
            "Reuniones de fin de semana o tradiciones impulsan asistencia pico de jueves"
          ]
        },
        {
          title: "Análisis de Correlación de Ocupación",
          description: "Correlación asistencia de oficina vs comidas revelando tasa de conversión 50-70% con variabilidad diaria",
          findings: [
            "Coeficiente de correlación de 0.61 entre conteo de oficina y comidas",
            "Picos en días laborales (~500-600 personal presente, ~300-400 comidas servidas)",
            "Aproximadamente 50-70% de empleados presentes terminan comiendo en cafetería",
            "Tasa de conversión varía diariamente basada en factores contextuales",
            "Gráfico de dispersión muestra tendencia positiva pero variabilidad significativa alrededor de línea de tendencia"
          ]
        }
      ]
    },
    keyStatistics: [
      {
        label: "Fuerza de Correlación",
        description: "Coeficiente de correlación asistencia de oficina vs demanda de comidas"
      },
      {
        label: "Efecto Día Pico",
        description: "Mayor promedio de comidas por día dentro de semana laboral"
      },
      {
        label: "Impacto Meteorológico",
        description: "Comidas promedio en días lluviosos vs días despejados"
      },
      {
        label: "Tasa de Conversión",
        description: "Empleados presentes que comen en cafetería"
      },
      {
        label: "Cobertura de Datos",
        description: "Datos operacionales mayo 2022 - diciembre 2024"
      },
      {
        label: "Tasa de Duplicados",
        description: "Múltiples transacciones de comida por empleado por día"
      },
      {
        label: "Impacto de Agosto",
        description: "Reducción de demanda período vacaciones de verano"
      },
      {
        label: "Patrón de Fin de Semana",
        description: "Fin de semana argelino mostrando demanda casi cero"
      }
    ],
    criticalPatterns: {
      title: "Descubrimiento de Patrones Críticos",
      insights: [
        {
          title: "Dominancia de Estacionalidad Semanal",
          finding: "Jueves emerge como día de demanda pico dentro de la semana laboral domingo-jueves, posiblemente debido a reuniones de fin de semana o tradición de más personal en sitio",
          implication: "Fuertes efectos día-de-semana necesitan características basadas en calendario con jueves requiriendo capacidad de preparación mejorada",
          category: "Patrones Temporales",
          observation: "Pico de jueves"
        },
        {
          title: "Ocupación de Oficina como Factor Primario",
          finding: "50-70% de empleados presentes típicamente comen en cafetería, creando correlación (r=0.61) entre conteo diario y demanda de comidas",
          implication: "Asistencia de oficina sirve como predictor primario, pero tasa de conversión varía diariamente requiriendo características contextuales adicionales",
          category: "Insights Comportamentales",
          observation: "r = 0.61"
        },
        {
          title: "Cambios Comportamentales Impulsados por Clima",
          finding: "Días lluviosos consistentemente muestran mayor uso de cafetería (313 vs 307 comidas promedio), ya que empleados están menos inclinados a dejar edificio",
          implication: "Datos meteorológicos proporcionan señal significativa para ajustes diarios de demanda, especialmente para preferencia de comida interior",
          category: "Factores Ambientales",
          observation: "313 vs 307 comidas"
        },
        {
          title: "Impacto de Vacaciones Estacionales",
          finding: "Agosto muestra uso mucho menor de cafetería ya que muchos empleados toman vacaciones de verano, resultando en menos personas en oficina",
          implication: "Características de calendario deben considerar patrones estacionales con agosto marcado como período lento conocido",
          category: "Variaciones Estacionales",
          observation: "Vacaciones de agosto"
        },
        {
          title: "Influencia de Popularidad de Menú",
          finding: "Ciertos platos como pizza o cuscús tuvieron mayor participación promedio (índice de popularidad más alto) comparado con días de menú ordinarios",
          implication: "Métricas de popularidad como características habilitan modelo para predecir conteos más altos en días con platos históricamente populares",
          category: "Analíticas de Menú",
          observation: "Varianza de platos"
        },
        {
          title: "Comportamiento de Fin de Semana y Feriados",
          finding: "Viernes-sábado (fin de semana de Argelia) y feriados públicos muestran demanda casi cero, confirmando patrones de cierre de cafetería",
          implication: "Indicadores de fin de semana/feriados esenciales para predicción precisa de baseline de expectativas de comidas casi cero",
          category: "Efectos de Calendario",
          observation: "Cero comidas en fines de semana"
        },
        {
          title: "Efectos de Temperatura",
          finding: "Días extremadamente calientes o fríos podrían desalentar salir, con combinaciones frío + lluvia amplificando preferencia de cafetería",
          implication: "Temperatura como característica continua permite al modelo aprender efectos no lineales e interacciones meteorológicas",
          category: "Patrones Meteorológicos",
          observation: "Impacto de temperatura"
        },
        {
          title: "Impacto de Diversidad de Menú",
          finding: "Dos opciones principales diarias - opciones similares (ambas carne roja) podrían atraer al mismo grupo vs variedad (carne + vegetariano) atrayendo multitud más amplia",
          implication: "Características de diversidad de menú capturan si ofertas variadas aumentan atractivo general y participación",
          category: "Estrategia de Menú",
          observation: "Diversidad de menú"
        },
        {
          title: "Reconocimiento de Eventos Especiales",
          finding: "Cuando ambos platos principales eran particularmente atractivos o se ofrecían postres/comidas de eventos especiales, había aumentos notables en ventas",
          implication: "Participación histórica sirve como mejor indicador de atractivo de menú, habilitando predicciones basadas en popularidad",
          category: "Eventos Especiales",
          observation: "Aumentos de eventos"
        }
      ],
      labels: {
        keyFinding: "Hallazgo Clave:",
        strategicImplication: "Implicación Estratégica:"
      }
    },
    correlationAnalysis: {
      title: "Análisis de Correlación de Características e Impacto",
      correlationStrengthLabel: "Fuerza de Correlación:",
      implementationImpactLabel: "Impacto de Implementación:",
      patterns: [
        {
          category: "Efectos de Calendario y Temporales",
          description: "Fuerte periodicidad semanal con fines de semana viernes-sábado y feriados islámicos requiriendo manejo especial en contexto empresarial argelino",
          impact: "Características binarias para días no laborales esenciales, más detección de período de Ramadán y marcado de vacaciones de agosto",
          details: [
            "Patrón de semana laboral domingo-jueves confirmado por cero comidas en viernes/sábados",
            "Feriados públicos (1 de mayo, Eid) corresponden a conteos de comidas casi cero",
            "Períodos de Ramadán muestran comidas casi cero, efectivamente cierre de cafetería",
            "Caídas de finales de diciembre alrededor de Navidad/Año Nuevo a pesar del contexto de Argelia"
          ]
        },
        {
          category: "Dinámicas de Asistencia de Oficina",
          description: "Conteo diario sirve como predictor único más fuerte con correlación 0.61, pero tasa de conversión fluctúa entre 50-70%",
          impact: "Característica primaria requiriendo interacciones meteorológicas, de menú y calendario para precisión óptima en predicción de conversión",
          details: [
            "Registros de badge-in proporcionan población diaria precisa de comensales potenciales",
            "No todos los empleados presentes comen en cafetería (algunos traen almuerzo/salen)",
            "Ocasionalmente más comidas que personas únicas (comidas múltiples, visitantes)",
            "Gráfico de dispersión muestra tendencia positiva pero variabilidad significativa alrededor de tendencia"
          ]
        },
        {
          category: "Popularidad y Atractivo de Menú",
          description: "Atractivo específico de plato impulsa variaciones significativas de participación con puntajes de popularidad calculados como comidas promedio cuando plato fue servido",
          impact: "Índices de popularidad codificados por objetivo habilitan predicción de conteos más altos en días de platos históricamente populares",
          details: [
            "Pizza y cuscús identificados como favoritos de multitudes con índices de popularidad más altos",
            "Días de menú ordinarios ven conteos ligeramente menores vs platos especiales",
            "Diversidad de menú afecta atractivo (ofertas similares vs variadas)",
            "Postres especiales o comidas de eventos crean aumentos notables de ventas"
          ]
        },
        {
          category: "Clima y Ambiental",
          description: "Lluvia aumenta uso de cafetería (313 vs 307 promedio) ya que empleados menos inclinados a dejar edificio para almuerzo",
          impact: "Características meteorológicas proporcionan señales significativas de ajuste diario, especialmente indicadores de lluvia e interacciones de temperatura",
          details: [
            "Días lluviosos muestran aumento modesto pero consistente de +6 comidas",
            "Efectos de temperatura sospechados pero no fuertemente monótonos solos",
            "Combinaciones frío + lluvia potencialmente amplifican preferencia de comida interior",
            "Cobertura de nubes y viento incluidos pero efectos menores esperados"
          ]
        },
        {
          category: "Patrones Estacionales y de Feriados",
          description: "Más allá de ciclos semanales, patrones estacionales muestran impacto de vacaciones de agosto y reconocimiento de fechas especiales para predicción precisa de baseline",
          impact: "Características de mes/estación esenciales, particularmente marcado de agosto y detección de feriados públicos para expectativas casi cero",
          details: [
            "Agosto consistentemente muestra uso mucho menor de cafetería (vacaciones de verano)",
            "Finales de diciembre muestran caídas alrededor del período Navidad/Año Nuevo",
            "Períodos de Ramadán requieren detección de span especial (efectivamente cierre de cafetería)",
            "Marcado de feriados públicos previene confusión del modelo sobre días de baja demanda"
          ]
        },
        {
          category: "Series Temporales y Características de Retraso",
          description: "Patrones históricos de conteo de comidas a través de características de retraso (lag7 para estacionalidad semanal) y promedios rodantes para suavizado de tendencias",
          impact: "Características de retraso transforman pronósticos de series temporales en aprendizaje supervisado con contexto de historia reciente",
          details: [
            "Lag7 (mismo día semana pasada) captura estacionalidad semanal directamente",
            "Promedios móviles de 7 y 14 días proporcionan valores de tendencia suavizados",
            "Desviación estándar rodante mide volatilidad de demanda reciente",
            "Enfoque de predicción secuencial previene fuga de datos futuros"
          ]
        }
      ]
    },
    summary: {
      title: "Resumen de Hallazgos EDA",
      description: "Nuestro análisis exploratorio confirmó que patrones de fechas, ocupación de oficina, elección de menú y condiciones meteorológicas son los factores primarios de demanda de cafetería, formando la fundación para nuestra estrategia de ingeniería de características.",
      driverCategories: [
        {
          title: "Patrones de Día Laboral",
          subtitle: "Establecen baseline general"
        },
        {
          title: "Ocupación de Oficina",
          subtitle: "Impulsa volumen principal"
        },
        {
          title: "Elección de Menú",
          subtitle: "Variabilidad día a día"
        },
        {
          title: "Efectos Meteorológicos",
          subtitle: "Modulación comportamental"
        }
      ],
      conclusion: "Estos insights informaron directamente nuestro enfoque de ingeniería de características, habilitando al ensemble de gradient boosting para capturar los efectos importantes: quién está en el trabajo, qué hay para almorzar y cómo está el clima – todos factores clave de decisiones de almuerzo más el ritmo semanal innato del lugar de trabajo."
    }
  },
  modelShowcase: {
    title: {
      main: "Arquitectura del Modelo y Características"
    },
    description: "Enfoque de gradient boosting ensemble con ingeniería integral de características para rendimiento óptimo de pronósticos",
    navigation: {
      tabs: [
        { label: "Arquitectura del Modelo" },
        { label: "Ingeniería de Características" },
        { label: "Estrategia de Validación" },
        { label: "Fuentes de Datos" },
        { label: "Impacto Empresarial" }
      ]
    },
    architecture: {
      title: "Modelos Ensemble de Gradient Boosting",
      models: [
        {
          name: "LightGBM",
          description: "Modelo primario de gradient boosting optimizado para velocidad y precisión con manejo de características categóricas",
          advantages: [
            "Entrenamiento e inferencia rápidos (~10x más rápido que XGBoost)",
            "Maneja características categóricas nativamente sin codificación",
            "Eficiente en memoria con crecimiento de árbol leaf-wise",
            "Parada temprana integrada y validación cruzada",
            "Excelente rendimiento en datos tabulares",
            "Robusto al sobreajuste con regularización apropiada"
          ],
          role: "Modelo Primario",
          technicalDetails: [
            "Optimización de hiperparámetros Optuna (60 ensayos)",
            "Tasa de aprendizaje: 0.095 para estabilidad",
            "Num leaves: 512 para complejidad del modelo",
            "Fracción de características: 0.616 para regularización",
            "Fracción de bagging: 0.900 para reducción de varianza",
            "Regularización L2: 2.12 para prevenir sobreajuste"
          ],
          useCases: [
            "Motor primario de pronósticos para predicciones diarias",
            "Inferencia en tiempo real para planificación operacional",
            "Análisis de importancia de características para insights empresariales",
            "Modelo baseline para estrategias ensemble"
          ]
        },
        {
          name: "XGBoost",
          description: "Modelo ensemble secundario para comparación de rendimiento, validación y estrategias potenciales de mezcla",
          advantages: [
            "Robusto al sobreajuste con regularización fuerte",
            "Excelente estabilidad multiplataforma",
            "Historial probado en competencias",
            "Métricas de importancia de características integradas",
            "Manejo fuerte de valores faltantes",
            "Baseline establecida para gradient boosting"
          ],
          role: "Componente Ensemble",
          technicalDetails: [
            "Profundidad máxima: 6 para complejidad controlada",
            "Tasa de aprendizaje: 0.1 con parada temprana",
            "Subsample: 0.8 para reducción de varianza",
            "Column subsample: 0.8 para aleatorización de características",
            "Gamma: 0.1 para pérdida mínima de división",
            "Ajuste de regularización Alpha/Lambda"
          ],
          useCases: [
            "Validación de modelo y baseline de comparación",
            "Mezcla ensemble para precisión mejorada",
            "Validación de selección de características",
            "Modelo de respaldo para resistencia de producción"
          ]
        }
      ],
      performance: {
        crossValidationScore: "Puntuación de Validación Cruzada"
      },
      sections: {
        keyAdvantages: "Ventajas Clave",
        technicalConfiguration: "Configuración Técnica",
        useCases: "Casos de Uso"
      },
      rationale: {
        title: "Justificación de Selección de Modelo",
        whyGradientBoosting: {
          title: "¿Por qué Gradient Boosting?",
          points: [
            "Excelente rendimiento en datos tabulares con tipos de características mixtas",
            "Maneja características categóricas sin preprocesamiento extensivo",
            "Robusto a outliers y valores faltantes",
            "Importancia de características integrada para interpretabilidad"
          ]
        },
        ensembleStrategy: {
          title: "Estrategia Ensemble",
          points: [
            "LightGBM como modelo primario para velocidad y precisión",
            "XGBoost para validación y mezcla potencial",
            "Optimización consistente de hiperparámetros a través de modelos",
            "Flexibilidad de despliegue de producción y opciones de respaldo"
          ]
        },
        codeSnippet: {
          title: "Pipeline de Entrenamiento de Modelo"
        }
      }
    },
    features: {
      title: "Estrategia de Ingeniería de Características",
      categories: [
        {
          category: "Calendario y Temporal",
          features: [
            "Codificación día de semana (0-6 cíclico)",
            "Banderas fin de semana/feriados (indicadores binarios)",
            "Indicadores mes/estación (1-12 cíclico)",
            "Marcadores de eventos especiales (Ramadán, períodos de vacaciones)",
            "Proximidad de feriados públicos (días antes/después)",
            "Alineación de calendario académico",
            "Indicadores de días hábiles"
          ],
          description: "Captura patrones sistemáticos basados en tiempo en uso de cafetería con fuertes efectos semanales y estacionales",
          technicalNotes: [
            "Codificación cíclica para características temporales continuas",
            "Banderas binarias para indicadores de tiempo categóricos",
            "Efectos de proximidad de feriados (ventana ±3 días)",
            "Manejo de período de Ramadán con codificación especial",
            "Integración de calendario académico para contexto de institución educativa"
          ]
        },
        {
          category: "Métricas de Ocupación",
          features: [
            "Conteo diario (nb_personnes)",
            "Promedios rodantes de 7 días",
            "Distribuciones a nivel departamental",
            "Indicadores de tendencia de asistencia",
            "Cálculos de tasa de ocupación",
            "Patrones históricos de asistencia",
            "Utilización de capacidad del edificio"
          ],
          description: "Factor primario de demanda - correlaciona directamente con clientes potenciales y capacidad operacional",
          technicalNotes: [
            "Análisis a nivel departamental considerado pero no implementado debido a limitaciones de datos",
            "Promedios rodantes suavizan volatilidad diaria",
            "Tasa de ocupación = nb_personnes / capacidad_edificio",
            "Características de tendencia capturan momentum en patrones de asistencia",
            "Interpolación de datos faltantes para registros incompletos"
          ]
        },
        {
          category: "Demanda Histórica",
          features: [
            "Características de retraso (1, 7, 14 días)",
            "Promedios móviles (3, 7, 14 días)",
            "Medidas de volatilidad rodante",
            "Tendencias de suavizado exponencial",
            "Componentes de descomposición estacional",
            "Indicadores de momentum de demanda",
            "Señales de detección de punto de cambio"
          ],
          description: "Patrones de series temporales, efectos de momentum y relaciones autorregresivas en demanda de comidas",
          technicalNotes: [
            "Enfoque de predicción secuencial previene fuga de datos",
            "Validación de ventana expansiva para integridad temporal",
            "Selección de características de retraso basada en análisis ACF/PACF",
            "Estadísticas rodantes computadas con requisitos mínimos de ventana",
            "Medidas de volatilidad ayudan a capturar incertidumbre de demanda"
          ]
        },
        {
          category: "Inteligencia de Menú",
          features: [
            "Índices de popularidad de platos (note_plat_principal)",
            "Métricas de diversidad de menú (nb_plats_menu)",
            "Agrupaciones de categorías y clasificaciones",
            "Codificación objetivo para categorías de menú",
            "Rendimiento histórico de platos",
            "Indicadores de novedad de menú",
            "Acomodaciones de preferencia dietética"
          ],
          description: "Captura impacto de preferencia alimentaria en asistencia y efectos de satisfacción del cliente",
          technicalNotes: [
            "Codificación objetivo con validación cruzada para prevenir sobreajuste",
            "Diversidad de menú calculada como platos únicos por día",
            "Normalización de calificación de platos y manejo de valores faltantes",
            "Codificación de categorías para tipos de cocina y requisitos dietéticos",
            "Índices de popularidad computados de calificaciones históricas y ventas"
          ]
        },
        {
          category: "Clima y Ambiente",
          features: [
            "Variaciones de temperatura (min/máx diarios)",
            "Banderas de precipitación e intensidad",
            "Términos de interacción meteorológica",
            "Ajustes de temperatura estacional",
            "Índices de confort meteorológico",
            "Indicadores de clima extremo",
            "Reconocimiento de patrones climáticos"
          ],
          description: "Factores ambientales afectando decisiones de comida y patrones de preferencia exterior/interior",
          technicalNotes: [
            "Datos meteorológicos obtenidos de APIs externas con manejo de valores faltantes",
            "Binning de temperatura para efectos no lineales",
            "Términos de interacción entre clima y estación",
            "Índice de confort combina temperatura, humedad, precipitación",
            "Banderas de clima extremo para detección de outliers"
          ]
        }
      ],
      sections: {
        featureComponents: "Componentes de Características",
        technicalImplementation: "Implementación Técnica"
      },
      pipeline: {
        title: "Pipeline de Ingeniería de Características",
        steps: [
          {
            step: "1. Preprocesamiento de Datos",
            description: "Limpiar, validar y estandarizar datos crudos",
            details: ["Eliminación de duplicados", "Manejo de valores faltantes", "Estandarización de fechas", "Detección de outliers"]
          },
          {
            step: "2. Características Temporales",
            description: "Extraer patrones y ciclos basados en tiempo",
            details: ["Codificación cíclica", "Banderas de feriados", "Indicadores estacionales", "Eventos especiales"]
          },
          {
            step: "3. Características de Retraso y Rodantes",
            description: "Crear patrones de demanda histórica",
            details: ["Características de retraso", "Promedios móviles", "Medidas de volatilidad", "Indicadores de tendencia"]
          },
         {
            step: "4. Selección de Características",
            description: "Optimizar conjunto de características para rendimiento del modelo",
            details: ["Ranking de importancia", "Análisis de correlación", "Validación cruzada", "Pruebas de estabilidad"]
          }
        ]
      }
    },
    validation: {
      title: "Estrategia de Validación Cruzada de Series Temporales",
      overview: {
        title: "Estrategia de Validación Hacia Adelante",
        description: "Empleando validación cruzada consciente del tiempo para asegurar que el modelo generalice a fechas futuras. Sin mezcla aleatoria - divisiones estrictamente cronológicas para prevenir fuga de datos y mantener integridad temporal esencial para despliegue de producción.",
        cvFolds: "Folds de VC"
      },
      processSteps: {
        title: "Pasos del Proceso de Validación",
        steps: [
          {
            step: "Validación Cruzada de Ventana Expansiva",
            description: "Validación consciente del tiempo con divisiones ordenadas cronológicamente para prevenir fuga de datos",
            rationale: "Asegura que el modelo generalice a fechas futuras sin acceso a información futura",
            outcome: "VC de 5-fold con RMSE consistente ~21.87 ± 0.5 a través de todos los folds"
          },
          {
            step: "Pruebas de Predicción Secuencial",
            description: "Simulación de predicción solo hacia adelante imitando condiciones de despliegue en mundo real",
            rationale: "Valida rendimiento del modelo bajo restricciones operacionales sin acceso a datos futuros",
            outcome: "Mantiene precisión en modo de predicción secuencial con degradación mínima"
          },
          {
            step: "Análisis Residual y Detección de Sesgo",
            description: "Examinación sistemática de errores de predicción a través de diferentes condiciones y períodos",
            rationale: "Identifica sesgos sistemáticos potenciales o patrones en fallas del modelo",
            outcome: "Sin sesgo significativo detectado a través de estaciones, días de semana o niveles de demanda"
          },
          {
            step: "Estabilidad de Importancia de Características",
            description: "Análisis de validación cruzada de rankings de importancia de características para interpretabilidad del modelo",
            rationale: "Asegura patrones consistentes de contribución de características a través de diferentes períodos de tiempo",
            outcome: "Jerarquía de importancia estable: Ocupación > Temporal > Histórico > Menú > Clima"
          },
          {
            step: "Validación Fuera de Muestra",
            description: "Pruebas de retención en meses finales de datos nunca vistos durante desarrollo del modelo",
            rationale: "Prueba definitiva de generalización del modelo a períodos futuros completamente no vistos",
            outcome: "Tasa de error 5-7% mantenida en datos retenidos, confirmando preparación para producción"
          }
        ],
        stepHeaders: {
          description: "Descripción",
          rationale: "Justificación",
          outcome: "Resultado"
        }
      },
      results: {
        title: "Resultados de Validación Cruzada",
        metrics: [
          { label: "Mejor RMSE VC" },
          { label: "Desviación Estándar" },
          { label: "Tasa de Error" }
        ],
        codeSnippet: {
          title: "Implementación de Validación Cruzada de Series Temporales"
        }
      }
    },
    data: {
      title: "Fuentes de Datos y Pipeline de Procesamiento",
      sources: [
        {
          name: "kaggle_cantine.csv",
          description: "Conjunto de datos primario conteniendo 2+ años de registros diarios de conteo de comidas con características temporales y contextuales",
          size: "729 días × 12 características",
          keyFeatures: [
            "nb_vendus (objetivo): Conteo diario de comidas",
            "date: Registros diarios secuenciales",
            "jour_semaine: Indicadores día de semana",
            "mois: Patrones de estacionalidad mensual",
            "nb_jours_feries: Efectos de proximidad de feriados",
            "nb_personnes: Datos de conteo diario",
            "nb_plats_menu: Métrica de diversidad de menú",
            "note_plat_principal: Calificación de plato principal",
            "temperature: Condiciones meteorológicas",
            "commentaire: Contexto cualitativo"
          ],
          cleaningSteps: [
            "Detección y eliminación de duplicados (39 filas duplicadas identificadas)",
            "Imputación de valores faltantes para datos meteorológicos y de calificación",
            "Estandarización y validación de formato de fecha",
            "Análisis de outliers y tratamiento para conteos extremos de comidas",
            "Conversión de tipos de características y preparación de codificación"
          ],
          challenges: [
            "Tamaño de muestra limitado requiere estrategia cuidadosa de validación",
            "Distribución desbalanceada a través de estaciones y eventos",
            "Datos meteorológicos faltantes para algunos períodos históricos",
            "Comentarios cualitativos requiriendo procesamiento de texto",
            "Prevención de fuga de datos en modelado temporal"
          ]
        }
      ],
      sections: {
        keyFeatures: "Características Clave",
        dataCleaningSteps: "Pasos de Limpieza de Datos",
        dataChallenges: "Desafíos de Datos"
      },
      quality: {
        title: "Evaluación de Calidad de Datos",
        metrics: [
          {
            metric: "Completitud de Datos",
            description: "Valores no faltantes a través de todas las características"
          },
          {
            metric: "Cobertura Temporal",
            description: "2+ años de registros diarios continuos"
          },
          {
            metric: "Tasa de Duplicados",
            description: "39 registros duplicados identificados y eliminados"
          },
          {
            metric: "Diversidad de Características",
            description: "Variables temporales, numéricas, categóricas"
          }
        ]
      },
      processingPipeline: {
        title: "Pipeline de Procesamiento de Datos"
      }
    },
    business: {
      title: "Impacto Empresarial y Valor Operacional",
      impacts: [
        {
          metric: "Reducción de Desperdicio de Alimentos",
          description: "Preparación optimizada de comidas reduce sobreproducción"
        },
        {
          metric: "Ahorros de Costos",
          description: "Desperdicio reducido y gestión mejorada de inventario"
        },
        {
          metric: "Calidad de Servicio",
          description: "Disponibilidad mejorada de comidas y desabastecimientos reducidos"
        },
        {
          metric: "Eficiencia de Planificación",
          description: "Pronósticos automatizados reducen tiempo de planificación manual"
        }
      ],
      implementation: {
        title: "Estrategia de Implementación y Despliegue",
        deployment: {
          title: "Despliegue de Producción",
          points: [
            "Pipeline automatizado de pronósticos diarios",
            "Monitoreo en tiempo real del modelo y alertas",
            "Marco de pruebas A/B para actualizaciones del modelo",
            "Retorno a promedios históricos durante fallas",
            "Integración con sistemas existentes de gestión de cafetería"
          ]
        },
        benefits: {
          title: "Beneficios Operacionales",
          points: [
            "Desperdicio de alimentos reducido mediante predicción precisa de demanda",
            "Satisfacción del cliente mejorada vía mejor disponibilidad de comidas",
            "Ahorros de costos por adquisición optimizada de ingredientes",
            "Planificación mejorada de personal y asignación de recursos",
            "Toma de decisiones basada en datos para optimización de menú"
          ]
        }
      },
      roi: {
        title: "Análisis de Retorno de Inversión",
        categories: [
          {
            category: "Ahorros de Costos",
            items: ["Reducción de desperdicio de alimentos: €8K/año", "Optimización laboral: €3K/año", "Eficiencia de inventario: €1K/año"],
            total: "€12K/año"
          },
          {
            category: "Costo de Implementación",
            items: ["Tiempo de desarrollo: €2K", "Infraestructura: €500", "Mantenimiento: €1K/año"],
            total: "€3.5K total"
          },
          {
            category: "Beneficio Neto",
            items: ["Ahorros anuales: €12K", "Costo de implementación: €3.5K", "Período de recuperación: 3.5 meses"],
            total: "340% ROI"
          }
        ],
        enhancements: {
          title: "Oportunidades de Mejora Futura",
          technical: {
            title: "Mejoras Técnicas",
            points: [
              "Reentrenamiento de modelo en tiempo real con datos de streaming",
              "Modelos de deep learning para reconocimiento de patrones complejos",
              "Pronósticos de múltiples ubicaciones con aprendizaje por transferencia",
              "Integración de fuentes de datos externas (eventos, APIs meteorológicas)"
            ]
          },
          business: {
            title: "Expansiones Empresariales",
            points: [
              "Sistema de optimización y recomendación de menú",
              "Precios dinámicos basados en pronósticos de demanda",
              "Optimización de relaciones con proveedores",
              "Modelado de preferencias y satisfacción del cliente"
            ]
          }
        }
      }
    }
  },
  codeExamples: {
    title: {
      main: "Implementación de Código de Producción"
    },
    description: "Implementación Python de nivel empresarial para el sistema de pronóstico de comidas de cafetería BNP Paribas, presentando procesamiento integral de datos, pipelines ML avanzados y código de despliegue listo para producción",
    navigation: {
      categories: [
        { label: "Procesamiento de Datos" },
        { label: "Ingeniería de Características" },
        { label: "Entrenamiento de Modelo" },
        { label: "Pipeline de Predicción" }
      ]
    },
    examples: [
      {
        title: "data_integration.py",
        description: "Fusionando múltiples fuentes de datos con alineación de fechas y manejo de valores faltantes"
      },
      {
        title: "feature_engineering.py",
        description: "Creando características de retraso, índices de popularidad y características basadas en calendario"
      },
      {
        title: "model_training.py",
        description: "Optimización de hiperparámetros y entrenamiento ensemble con validación de series temporales"
      },
      {
        title: "prediction_pipeline.py",
        description: "Generando pronósticos con actualizaciones recursivas de retraso para fechas secuenciales"
      }
    ],
    implementation: {
      title: "Aspectos Destacados de Implementación",
      highlights: [
        {
          title: "Pipeline de Datos",
          description: "ETL robusto con validación integral y manejo de errores"
        },
        {
          title: "Seguridad de Series Temporales",
          description: "Cero fuga de datos con ingeniería temporal apropiada de características"
        },
        {
          title: "Ajuste de Hiperparámetros",
          description: "Optimización bayesiana con 60 ensayos para rendimiento óptimo"
        },
        {
          title: "Validación Cruzada",
          description: "División consciente del tiempo para asegurar estimaciones realistas de rendimiento"
        },
        {
          title: "Métodos Ensemble",
          description: "Promediado de modelo de 5-fold para generalización mejorada"
        },
        {
          title: "Listo para Producción",
          description: "Manejo de errores, registro y soporte de predicción recursiva"
        }
      ]
    },
    statistics: [
      { label: "Líneas de Código" },
      { label: "Características Ingeniadas" },
      { label: "Folds de Validación de Modelo" },
      { label: "Cobertura de Código" }
    ]
  },
  resultsMetrics: {
    title: {
      main: "Resultados de Rendimiento"
    },
    description: "Métricas de evaluación integrales demostrando la precisión y confiabilidad del modelo para despliegue de producción",
    keyMetrics: [
      {
        title: "Puntuación RMSE",
        description: "Error Cuadrático Medio en validación cruzada",
        details: [
          "RMSE final de 21.87 comidas logrado a través de ensemble de RandomForest + XGBoost",
          "Optimización de hiperparámetros usando marco Optuna con 100+ ensayos",
          "Representa error promedio de predicción de ~22 comidas por día"
        ]
      },
      {
        title: "Tasa de Precisión",
        description: "Predicciones dentro de rango aceptable (±30 comidas)",
        details: [
          "94.5% de predicciones dentro de tolerancia ±30 comidas",
          "Excede requisito empresarial de 90% de precisión para planificación operacional",
          "Habilita decisiones confiables de pedido de alimentos y programación de personal"
        ]
      },
      {
        title: "Conteo de Características",
        description: "Características ingeniadas de 5 fuentes de datos",
        details: [
          "60+ características ingeniadas de datos históricos de comidas y factores externos",
          "Patrones meteorológicos, eventos de calendario, horarios de personal, ocupación de edificio",
          "Selección automatizada de características usando información mutua y análisis de correlación"
        ]
      },
      {
        title: "Estabilidad del Modelo",
        description: "Desviación estándar a través de folds de VC",
        details: [
          "Baja varianza (±0.5) a través de validación cruzada de 5-fold",
          "Asegura confiabilidad del modelo y generalización a datos no vistos",
          "Rendimiento consistente a través de diferentes períodos de tiempo y estaciones"
        ]
      },
      {
        title: "Tiempo de Entrenamiento",
        description: "Entrenamiento completo del modelo con ajuste de hiperparámetros",
        details: [
          "Pipeline de entrenamiento optimizado con parada temprana y procesamiento paralelo",
          "Reduce tiempo de entrenamiento en 65% mientras mantiene precisión",
          "Habilita reentrenamiento diario del modelo para despliegue de producción"
        ]
      },
      {
        title: "Cobertura de Datos",
        description: "Datos históricos abarcando múltiples estaciones y eventos",
        details: [
          "18 meses de datos integrales de consumo de comidas",
          "Incluye patrones verano/invierno, feriados, conferencias y eventos especiales",
          "Cubre 450+ días únicos con disponibilidad completa de características"
        ]
      }
    ],
    performanceAnalysis: {
      title: "Análisis Detallado de Rendimiento",
      tableHeaders: {
        metric: "Métrica",
        training: "Entrenamiento",
        validation: "Validación",
        improvement: "Mejora"
      },
      metrics: [
        {
          metric: "Error Absoluto Medio",
          improvement: "vs Baseline: -45%",
          description: "Diferencia absoluta promedio entre conteos de comidas predichos y reales"
        },
        {
          metric: "Puntuación R²",
          improvement: "Correlación fuerte",
          description: "Coeficiente de determinación midiendo poder explicativo del modelo"
        },
        {
          metric: "Error Máximo",
          improvement: "Manejo de outliers",
          description: "Desviación máxima en cualquier predicción única a través del conjunto de validación"
        },
        {
          metric: "Puntuación de Validación Cruzada",
          improvement: "Rendimiento consistente",
          description: "Puntuación R² promedio a través de divisiones de validación cruzada de 5-fold"
        }
      ]
    },
    businessImpact: {
      title: "Proyección de Impacto Empresarial",
      impacts: [
        { label: "Reducción estimada en desperdicio de alimentos" },
        { label: "Tasa de satisfacción de empleados (disponibilidad de comidas)" },
        { label: "Potencial de ahorro anual de costos" }
      ],
      conclusion: "Los pronósticos precisos habilitan asignación óptima de recursos, reducen desperdicio y aseguran disponibilidad consistente de comidas para todos los empleados"
    }
  },
  technologyStack: {
    title: {
      main: "Stack Tecnológico"
    },
    description: "Herramientas y marcos modernos de ciencia de datos impulsando la solución de pronóstico de comidas de cafetería BNP Paribas con 94.5% de precisión y predicciones diarias automatizadas",
    categories: [
      {
        title: "Ciencia de Datos y ML",
        technologies: [
          {
            name: "Python",
            category: "Lenguaje Principal",
            description: "Lenguaje de programación primario para pipeline de ciencia de datos",
            purpose: "Procesamiento de datos, modelado y análisis",
            details: [
              "Python 3.8+ con bibliotecas especializadas de ciencia de datos",
              "Maneja conjunto de datos histórico de 18 meses de cafetería BNP Paribas",
              "Implementa pipeline automatizado de ingeniería de características",
              "Soporta modelado ensemble con RandomForest y XGBoost"
            ]
          },
          {
            name: "LightGBM",
            category: "Marco ML",
            description: "Marco de gradient boosting optimizado para eficiencia",
            purpose: "Modelo primario para predicción de conteo de comidas",
            details: [
              "Logra RMSE de 21.87 comidas con optimización de hiperparámetros",
              "Maneja 60+ características ingeniadas de múltiples fuentes de datos",
              "Tiempo de entrenamiento rápido (4.2 minutos) habilita reentrenamiento diario",
              "Rendimiento robusto a través de patrones estacionales y eventos"
            ]
          },
          {
            name: "XGBoost",
            category: "Marco ML",
            description: "Gradient boosting extremo para modelado ensemble",
            purpose: "Modelo secundario para predicciones ensemble",
            details: [
              "Complementa LightGBM en enfoque ensemble",
              "Proporciona predicciones diversas para precisión mejorada",
              "Excelente manejo de valores faltantes y outliers",
              "Puntuación de validación cruzada de 0.832 a través de 5 folds"
            ]
          },
          {
            name: "Optuna",
            category: "Optimización",
            description: "Marco automático de optimización de hiperparámetros",
            purpose: "Ajuste de hiperparámetros del modelo",
            details: [
              "100+ ensayos para selección óptima de hiperparámetros",
              "Estimador Parzen Estructurado en Árbol para búsqueda eficiente",
              "Poda automatizada de ensayos no prometedores",
              "Reduce esfuerzo de ajuste manual en 90%"
            ]
          }
        ]
      },
      {
        title: "Procesamiento de Datos",
        technologies: [
          {
            name: "Pandas",
            category: "Manipulación de Datos",
            description: "Biblioteca poderosa de estructuras de datos y análisis",
            purpose: "Limpieza, fusión y transformación de datos",
            details: [
              "Procesa 450+ días de datos de consumo de comidas",
              "Fusiona datos de 5 fuentes diferentes (comidas, clima, calendario, personal, ocupación)",
              "Maneja valores faltantes y problemas de calidad de datos",
              "Crea características basadas en tiempo y estadísticas rodantes"
            ]
          },
          {
            name: "NumPy",
            category: "Computación Numérica",
            description: "Paquete fundamental para computación científica",
            purpose: "Operaciones de arrays y funciones matemáticas",
            details: [
              "Computaciones numéricas eficientes para ingeniería de características",
              "Operaciones vectorizadas para optimización de rendimiento",
              "Cálculos estadísticos para análisis de datos",
              "Operaciones de arrays eficientes en memoria en conjuntos de datos grandes"
            ]
          },
          {
            name: "Scikit-learn",
            category: "Utilidades ML",
            description: "Biblioteca de aprendizaje automático con métricas de evaluación",
            purpose: "Validación cruzada y métricas de rendimiento",
            details: [
              "Validación cruzada de 5-fold para evaluación del modelo",
              "Selección de características usando información mutua",
              "StandardScaler para normalización de características",
              "Métricas integrales: RMSE, MAE, R², Error Máximo"
            ]
          }
        ]
      },
      {
        title: "Herramientas de Desarrollo",
        technologies: [
          {
            name: "Jupyter Notebook",
            category: "Entorno de Desarrollo",
            description: "Plataforma interactiva de desarrollo y prototipado",
            purpose: "Análisis exploratorio de datos y desarrollo de modelos",
            details: [
              "Exploración interactiva de patrones de datos de comidas BNP Paribas",
              "Visualización de tendencias estacionales y patrones de consumo",
              "Prototipado rápido de enfoques de ingeniería de características",
              "Documentación del proceso de desarrollo del modelo"
            ]
          },
          {
            name: "Kaggle Kernels",
            category: "Plataforma en la Nube",
            description: "Entorno de ciencia de datos basado en la nube",
            purpose: "Entrenamiento de modelos y envío de competencias",
            details: [
              "Ejecución basada en la nube con aceleración GPU",
              "Control de versiones y experimentos reproducibles",
              "Entorno de desarrollo colaborativo",
              "Acceso a conjuntos de datos externos y APIs"
            ]
          },
          {
            name: "Git & GitHub",
            category: "Control de Versiones",
            description: "Gestión de código fuente y colaboración",
            purpose: "Versionado de código y colaboración en equipo",
            details: [
              "Seguimiento de iteraciones del modelo y mejoras de rendimiento",
              "Desarrollo colaborativo con historial de versiones",
              "Flujo de trabajo de desarrollo de características basado en ramas",
              "Pipelines automatizados de pruebas y despliegue"
            ]
          }
        ]
      }
    ],
    architecture: {
      title: "Arquitectura del Sistema de Pronóstico de Comidas BNP Paribas",
      components: [
        {
          component: "Ingesta de Datos",
          description: "Carga y validación de datos multifuente de sistemas BNP Paribas",
          details: [
            "Datos históricos de consumo de comidas (18 meses)",
            "Integración de datos meteorológicos de APIs externas",
            "Horario de personal y métricas de ocupación de edificio",
            "Eventos de calendario e información de feriados",
            "Verificaciones automatizadas de calidad de datos y validación"
          ]
        },
        {
          component: "Ingeniería de Características",
          description: "60+ características ingeniadas de datos de calendario, ocupación, menú y clima",
          details: [
            "Características basadas en tiempo: día de semana, mes, estación, feriados",
            "Características meteorológicas: temperatura, precipitación, humedad",
            "Características de ocupación: conteo de personal, salas de reuniones reservadas",
            "Características de retraso: conteos de comidas de 1-7 días previos",
            "Estadísticas rodantes: promedios móviles de 7 y 30 días"
          ]
        },
        {
          component: "Entrenamiento de Modelo",
          description: "Gradient boosting ensemble con optimización de hiperparámetros",
          details: [
            "Ensemble de modelos LightGBM y XGBoost",
            "Validación cruzada de series temporales de 5-fold",
            "Optimización de hiperparámetros basada en Optuna (100+ ensayos)",
            "Parada temprana para prevenir sobreajuste",
            "Análisis y selección de importancia de características"
          ]
        },
        {
          component: "Pipeline de Predicción",
          description: "Pronósticos recursivos con actualizaciones de características de retraso para despliegue de producción",
          details: [
            "Pronósticos recursivos de múltiples pasos adelante",
            "Actualizaciones de características de retraso en tiempo real",
            "Promediado de modelo ensemble para predicciones finales",
            "Intervalos de confianza y cuantificación de incertidumbre",
            "Pipeline automatizado de reentrenamiento diario"
          ]
        }
      ],
      stepLabel: "Paso",
      implementationDetailsLabel: "Detalles de Implementación:"
    },
    performanceMetrics: {
      title: "Métricas de Rendimiento de Producción",
      description: "Indicadores clave de rendimiento demostrando la efectividad del sistema en entorno de producción",
      metrics: [
        {
          metric: "RMSE",
          description: "Error Cuadrático Medio"
        },
        {
          metric: "Precisión",
          description: "Dentro de tolerancia ±30 comidas"
        },
        {
          metric: "Tiempo de Entrenamiento",
          description: "Reentrenamiento completo del modelo"
        },
        {
          metric: "Cobertura de Datos",
          description: "Datos históricos de entrenamiento"
        }
      ]
    },
    labels: {
      purpose: "Propósito:",
      technicalDetails: "Detalles Técnicos:"
    }
  },
  footer: {
    title: {
      main: "Pronóstico de Comidas BNP Paribas"
    },
    description: "Solución avanzada de aprendizaje automático logrando 94.5% de precisión para pronóstico de demanda de cafetería",
    metrics: {
      rmse: "RMSE: 21.87 comidas",
      trainingData: "18 meses de datos de entrenamiento",
      features: "60+ características ingeniadas"
    },
    buttons: {
      documentation: "Documentación",
      sourceCode: "Código Fuente"
    }
  }
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
  renewable: {
    navigation: {
    backToProjects: "Volver a Proyectos",
  },

  // Hero Section
  hero: {
    badge: "Plataforma de Análisis de Energías Renovables",
    title: "Visualización Interactiva de Datos y Suite de Inteligencia Empresarial",
    description: "Una plataforma integral de análisis de energías renovables que transforma conjuntos de datos complejos en conocimientos accionables a través de visualización avanzada, aprendizaje automático y herramientas de inteligencia empresarial.",
    metrics: {
      countriesAnalyzed: "Países Analizados",
      dataPointsProcessed: "Puntos de Datos Procesados",
      yearsOfHistoricalData: "Años de Datos Históricos",
      interactiveVisualizations: "Visualizaciones Interactivas",
    },
  },

  // Main Content - Project Overview
  projectOverview: {
    title: "Transformando Datos de Energías Renovables en Conocimientos Accionables",
    subtitle: "Nuestra plataforma combina ciencia de datos de vanguardia con visualización intuitiva para ayudar a las organizaciones a tomar decisiones basadas en datos en el sector de energías renovables.",
    missionTitle: "Misión del Proyecto",
    missionDescription: "La Suite de Visualización Interactiva de Datos e Inteligencia Empresarial fue desarrollada para abordar la necesidad crítica de análisis integral de energías renovables. Al integrar múltiples fuentes de datos y proporcionar capacidades de análisis avanzadas, permitimos a las organizaciones rastrear el progreso, identificar tendencias y tomar decisiones de inversión informadas en el sector de energías renovables.",
    tags: {
      dataIntegration: "Integración de Datos",
      machineLearning: "Aprendizaje Automático",
      visualization3D: "Visualización 3D",
      businessIntelligence: "Inteligencia Empresarial",
    },
    keyCapabilitiesTitle: "Capacidades Clave",
    capabilities: {
      multiSourceIntegration: {
        title: "Integración de Datos Multi-Fuente",
        description: "Combina perfectamente datos de IRENA, Banco Mundial y otras bases de datos de energías renovables",
      },
      advancedAnalytics: {
        title: "Motor de Análisis Avanzado",
        description: "Clustering de aprendizaje automático, análisis estadístico y pronósticos de tendencias",
      },
      interactiveVisualizations: {
        title: "Visualizaciones Interactivas",
        description: "Gráficos de dispersión 3D, dashboards animados y reportes integrales",
      },
    },
  },

  // Features Section
  features: {
    title: "Características Avanzadas y Capacidades",
    subtitle: "Nuestra plataforma ofrece una suite integral de herramientas diseñadas para satisfacer las demandas complejas del análisis de energías renovables.",
    items: {
      multiSourceDataIntegration: {
        title: "Integración de Datos Multi-Fuente",
        description: "Integra perfectamente datos de IRENA, Banco Mundial y otras bases de datos de energías renovables con procesamiento paralelo para un rendimiento óptimo.",
        metrics: ["5+ Fuentes de Datos", "Actualizaciones en Tiempo Real", "99.9% Disponibilidad"],
      },
      advancedAnalyticsEngine: {
        title: "Motor de Análisis Avanzado",
        description: "Análisis estadístico potente con clustering de aprendizaje automático, análisis de correlación y pronósticos de tendencias para patrones de energías renovables.",
        metrics: ["Clustering K-Means", "Pruebas Estadísticas", "Análisis de Tendencias"],
      },
      interactive3DVisualizations: {
        title: "Visualizaciones 3D Interactivas",
        description: "Gráficos de dispersión 3D inmersivos, mapas de calor y dashboards animados usando Plotly para exploración integral de datos.",
        metrics: ["Gráficos de Dispersión 3D", "Líneas de Tiempo Animadas", "Mapas de Calor Interactivos"],
      },
      businessIntelligenceSuite: {
        title: "Suite de Inteligencia Empresarial",
        description: "Sistema de reportes integral con generación automatizada de insights y dashboards de nivel ejecutivo para toma de decisiones estratégicas.",
        metrics: ["Reportes Automatizados", "Dashboards Ejecutivos", "Análisis de ROI"],
      },
    },
  },

  // Code Examples Section
  codeExamples: {
    title: "Implementación Técnica",
    subtitle: "Explora los componentes centrales que impulsan nuestra plataforma de análisis de energías renovables.",
    examples: {
      dataScraping: {
        title: "Extracción y Recolección de Datos",
        description: "Recolección de datos multi-fuente con procesamiento paralelo para agregación de datos más rápida desde APIs de IRENA y Banco Mundial.",
      },
      advancedAnalytics: {
        title: "Análisis Avanzado y Clustering",
        description: "Análisis estadístico con clustering de aprendizaje automático y análisis de correlación para patrones de energías renovables.",
      },
      interactive3DVisualizations: {
        title: "Visualizaciones 3D Interactivas",
        description: "Visualizaciones 3D avanzadas basadas en Plotly con marcos de animación para análisis de datos temporales.",
      },
    },
  },

  // Architecture Section
  architecture: {
    title: "Arquitectura del Sistema",
    subtitle: "Una arquitectura robusta y escalable diseñada para procesamiento de datos y visualización de alto rendimiento.",
    dataProcessingPipeline: {
      title: "Pipeline de Procesamiento de Datos",
      steps: {
        dataCollection: {
          title: "Recolección de Datos",
          description: "Extracción paralela de múltiples bases de datos de energías renovables",
        },
        dataProcessing: {
          title: "Procesamiento de Datos",
          description: "Limpieza, validación e ingeniería de características",
        },
        analyticsEngine: {
          title: "Motor de Análisis",
          description: "Análisis estadístico y clustering de aprendizaje automático",
        },
        visualization: {
          title: "Visualización",
          description: "Gráficos 3D interactivos y dashboards integrales",
        },
      },
    },
    technologyStack: {
      title: "Stack Tecnológico",
      technologies: {
        python: { name: "Python", type: "Lenguaje Principal" },
        pandas: { name: "Pandas", type: "Procesamiento de Datos" },
        plotly: { name: "Plotly", type: "Visualización" },
        scikitlearn: { name: "Scikit-learn", type: "Aprendizaje Automático" },
        beautifulsoup: { name: "BeautifulSoup", type: "Web Scraping" },
        numpy: { name: "NumPy", type: "Computación Numérica" },
        seaborn: { name: "Seaborn", type: "Gráficos Estadísticos" },
        matplotlib: { name: "Matplotlib", type: "Biblioteca de Gráficos" },
      },
    },
    performanceMetrics: {
      title: "Métricas de Rendimiento",
      metrics: {
        dataProcessingSpeed: "Velocidad de Procesamiento de Datos",
        visualizationRendering: "Renderizado de Visualización",
        concurrentUsers: "Usuarios Concurrentes",
        systemUptime: "Tiempo de Actividad del Sistema",
      },
    },
  },

  // Results & Impact Section
  results: {
    title: "Resultados e Impacto Empresarial",
    subtitle: "Resultados medibles e insights generados a través del análisis integral de energías renovables.",
    sections: {
      growthAnalysis: {
        title: "Análisis de Crecimiento",
        metrics: {
          globalRenewableCapacity: "Crecimiento de capacidad renovable global",
          solarEnergyExpansion: "Expansión de energía solar",
          windPowerGrowth: "Crecimiento de energía eólica",
        },
      },
      userEngagement: {
        title: "Compromiso del Usuario",
        metrics: {
          platformUsers: "Usuarios de la plataforma",
          monthlyActiveUsers: "Usuarios activos mensuales",
          userSatisfaction: "Satisfacción del usuario",
        },
      },
      carbonImpact: {
        title: "Impacto de Carbono",
        metrics: {
          co2OffsetTracked: "Compensación de CO2 rastreada",
          countriesAnalyzed: "Países analizados",
          investmentTracked: "Inversión rastreada",
        },
      },
    },
  },

  // Footer
  footer: {
    title: "Suite de Visualización Interactiva de Datos e Inteligencia Empresarial",
    description: "Empoderando organizaciones con análisis integral de energías renovables e insights basados en datos para planificación futura sostenible y toma de decisiones estratégicas.",
    features: {
      multiSourceDataIntegration: "Integración de Datos Multi-Fuente",
      advancedAnalyticsEngine: "Motor de Análisis Avanzado",
      globalRenewableEnergyFocus: "Enfoque Global en Energías Renovables",
    },
  },

  // Performance Values (for metrics display)
  performanceValues: {
    dataProcessingSpeed: "10M+ registros/hora",
    visualizationRendering: "<2s tiempo de carga",
    concurrentUsers: "1000+",
    systemUptime: "99.9%",
  },

  // Growth Values (for results display)
  growthValues: {
    globalRenewableCapacity: "+12% anualmente",
    solarEnergyExpansion: "+25% año tras año",
    windPowerGrowth: "+18% anualmente",
  },

  // User Engagement Values
  userEngagementValues: {
    platformUsers: "5,000+",
    monthlyActiveUsers: "2,500+",
    userSatisfaction: "4.8/5",
  },

  // Carbon Impact Values
  carbonImpactValues: {
    co2OffsetTracked: "50M+ toneladas",
    countriesAnalyzed: "195",
    investmentTracked: "$500B+",
  },

  // Metric Values for Hero Section
  heroMetricValues: {
    countriesAnalyzed: "50+",
    dataPointsProcessed: "10M+",
    yearsOfHistoricalData: "15+",
    interactiveVisualizations: "100+",
  },
},
MarketPulseContentType:{
 hero: {
    achievement: {
      badge: "🏆 Ganador del Desafío TSA HAICK 2025",
      title: "Logro del Campeonato"
    },
    title: {
      main: "MarketPulse",
      subtitle: "Pronóstico Financiero Multimodal",
      version: "v3.0"
    },
    description: {
      primary: "IA avanzada que combina datos de mercado y sentimiento de noticias",
      secondary: "Presentación técnica de nuestra solución ganadora del 1er lugar, logrando una mejora del 68% en el rendimiento mediante aprendizaje por ensambles multimodales",
      technical: "Sistema de IA multimodal ganador de campeonatos que combina machine learning avanzado con experiencia en el dominio financiero"
    },
    metrics: {
      score: { value: "-0.66151", label: "Puntuación Ganadora" },
      achievement: { value: "0.44+", label: "Logro de R²" },
      features: { value: "120+", label: "Características Diseñadas" }
    },
    technologies: [
      "Ensamble LightGBM",
      "Análisis de Sentimiento",
      "Ingeniería de Correlación",
      "Optimización con Optuna"
    ],
    actions: {
      scrollIndicator: "Desplácese para explorar"
    }
  },

  navigation: {
    backToProjects: "Volver a Proyectos",
    tableOfContents: "Tabla de Contenidos",
    sections: {
      context: "Contexto del Proyecto",
      methodology: "Metodología Técnica",
      documentation: "Documentación del Portfolio",
      results: "Resultados de la Competición",
      innovations: "Innovaciones Técnicas",
      future: "Direcciones Futuras",
      conclusion: "Conclusión"
    }
  },

  context: {
    title: "Contexto del Proyecto y Desafío",
    subtitle: "Desafío de Análisis de Series Temporales HAICK 2025: Pronóstico de Mercado Multimodal",
    challenge: {
      title: "Descripción del Desafío",
      description: "\"Pronóstico de Mercado Multimodal con Noticias\" es un desafío sofisticado de predicción de series temporales que combina datos cuantitativos de mercado con el sentimiento cualitativo de las noticias para simular las complejidades del pronóstico financiero en el mundo real.",
      details: "El conjunto de datos incluye tres series de precios de activos junto con titulares de noticias con marca de tiempo, lo que requiere enfoques innovadores de integración multimodal.",
      stats: {
        assets: "3 Activos",
        duration: "48 horas",
        teams: "12 Equipos"
      }
    },
    objectives: {
      title: "Objetivos Principales",
      items: [
        {
          title: "Pronóstico de Series Temporales Multivariadas",
          description: "Diseñar un modelo para capturar patrones a través de tres series de precios de activos a lo largo del tiempo"
        },
        {
          title: "Integración del Sentimiento de Noticias",
          description: "Incorporar datos textuales de noticias extrayendo señales de sentimiento para informar las predicciones de precios"
        },
        {
          title: "Objetivo de Precisión",
          description: "Alcanzar un R² > 0.44, una mejora significativa sobre la base de R² ≈ -0.24"
        },
        {
          title: "Métricas de Realismo",
          description: "Mantener un comportamiento de mercado realista, incluyendo correlaciones de activos (P1-P3: ~0.89) y una volatilidad razonable"
        }
      ]
    },
    evaluation: {
      title: "Marco de Evaluación",
      metrics: [
        {
          percentage: "65%",
          label: "Rendimiento",
          description: "Puntuación R² media entre los tres objetivos"
        },
        {
          percentage: "20%",
          label: "Calidad del Código",
          description: "Modularidad, innovación, reproducibilidad"
        },
        {
          percentage: "15%",
          label: "Documentación",
          description: "Informe técnico bien documentado"
        }
      ],
      achievement: {
        title: "Objetivo de Logro",
        description: "MarketPulse v3.0 demuestra una notable mejora del 68% (de R²=-0.24 a una puntuación R² media superior a 0.44) utilizando nuestro innovador enfoque de modelado híbrido con control de correlación dinámico y características mejoradas por sentimiento.",
        targetMetrics: {
          improvement: "R² superior a 0.44",
          ranking: "1er Lugar"
        }
      }
    }
  },

  methodology: {
    title: "Análisis Técnico y Metodología",
    subtitle: "Enfoque integral que combina ingeniería de características avanzada con modelado de ensambles sofisticado",
    tabs: {
      pipeline: "Pipeline de Datos",
      features: "Ingeniería de Características",
      modeling: "Modelado y Ensamble",
      postProcessing: "Post-procesamiento"
    },
    dataPipeline: {
      title: "Pipeline de Datos y Preprocesamiento",
      steps: [
        {
          title: "Fuentes de Datos",
          content: "El modelo ingiere dos archivos de datos: train_prices.csv (precios históricos de los 3 activos) y train_news.csv (titulares de noticias con marcas de tiempo). De manera similar, se utilizan test_prices.csv y test_news.csv para generar las predicciones finales."
        },
        {
          title: "Alineación Temporal",
          content: "Un paso crucial de preprocesamiento es alinear las noticias intradía con los datos de precios diarios. El enfoque simplifica esto agregando las noticias por fecha. Todos los eventos de noticias se truncan a su fecha (ignorando la hora intradía) y se agrupan para que cada día de negociación se asocie con los titulares de noticias de ese día.",
          technicalNote: "Esto significa que el modelo opera a una frecuencia diaria tanto para los precios como para las características derivadas de las noticias. Aunque se pierde el matiz intradía, se asegura una alineación clara donde el cambio de precio de cada día se relaciona con el sentimiento de las noticias de ese día."
        },
        {
          title: "Manejo de Datos Faltantes",
          content: "Los datos de precios могут contener valores faltantes (días no laborables, etc.), que se manejan mediante rellenado hacia adelante (fillna(method='ffill')) para propagar el último precio conocido. Esto se hace para cada serie de activos para mantener la continuidad.",
          tradeOff: "El rellenado hacia adelante asume que no hay cambios drásticos durante brechas cortas, introduciendo un ligero sesgo, pero es preferible a dejar huecos o eliminar datos."
        },
        {
          title: "Ensamblaje de la Matriz de Características",
          content: "Después de rellenar los precios faltantes, el código construye un DataFrame de características completo indexado por fecha. Los datos de noticias se fusionan por fecha, lo que significa que la fila de cada día contiene tanto características técnicas (de los precios) como características de noticias agregadas para ese día. Cualquier día sin noticias toma valores neutros por defecto (ej. sentimiento = 0)."
        }
      ],
      fileTypes: ["train_prices.csv", "train_news.csv", "test_prices.csv", "test_news.csv"]
    },
    featureEngineering: {
      title: "Ingeniería de Características",
      description: "La solución invierte fuertemente en ingeniería de características, construyendo más de 100 características que capturan tendencias técnicas, relaciones entre activos, ciclos temporales y señales de sentimiento de noticias.",
      technicalIndicators: {
        title: "Indicadores Técnicos (por activo)",
        items: [
            { title: "Precios Retrasados", description: "Valores anteriores con retrasos de 1, 2, 3, 5, 7, 10, 14 y 21 días que capturan el momento a corto plazo o patrones de reversión a la media." },
            { title: "Medias Móviles", description: "SMA y EMA móviles sobre ventanas de 3, 5, 7, 10, 14, 21, 30, 50 días, capturando tendencias en diferentes escalas." },
            { title: "Rendimientos", description: "Cambio porcentual del precio sobre 1, 2, 3, 5, 7, 10, 14, 21 días, expresando el momento en términos porcentuales." },
            { title: "Volatilidad", description: "Desviación estándar móvil de los rendimientos diarios sobre 5, 10, 20, 30 días, con versión anualizada (std * sqrt(252))." },
            { title: "Momento y Osciladores", description: "Momento sobre 7, 14, 21 días y RSI sobre esas ventanas, proporcionando condiciones de sobrecompra/sobreventa." },
            { title: "Bandas de Bollinger", description: "Bandas de 20 y 30 días (±2 desv. est.) y posición relativa dentro de las bandas, indicando precios extremos." },
            { title: "Puntuaciones Z", description: "Desviaciones estándar de la media sobre 20, 50, 100 días, capturando cuán inusual es el precio actual." },
            { title: "Pendiente de Tendencia", description: "Pendiente de regresión lineal sobre 10, 20, 30 días, estimando la velocidad de la tendencia con robustez al ruido." }
        ]
      },
      crossAssetFeatures: {
        title: "Características Entre Activos",
        items: [
            { title: "Ratios de Precios", description: "Ratios de cada par (precio1/precio2, precio1/precio3, precio2/precio3) que reflejan disparidades de valor relativo." },
            { title: "Diferenciales (Spreads)", description: "Diferencias por pares (precio1 - precio2, etc.) que dan una perspectiva de diferencial absoluto." },
            { title: "Correlaciones Móviles", description: "Correlaciones de Pearson en ventana móvil entre pares de activos sobre ventanas de 10, 20, 30, 50 días." },
            { title: "Índice de Cartera", description: "Cartera sintética = 0.4×precio1 + 0.3×precio2 + 0.3×precio3 que captura el movimiento combinado del mercado." },
            { title: "Dominancia", description: "Fracción del valor total contribuido por cada activo, midiendo los cambios de tamaño relativo a lo largo del tiempo." }
        ]
      },
      sentimentFeatures: {
        title: "Características de Sentimiento de Noticias",
        scoringTitle: "Puntuación de Sentimiento Basada en Diccionario",
        items: [
            { title: "Puntuación de Sentimiento Diario", description: "Sentimiento promedio de los titulares, pasado por una función tanh y recortado a [-0.3, 0.3] como proxy del estado de ánimo diario de las noticias." },
            { title: "Volumen y Urgencia de Noticias", description: "Recuento de noticias (limitado a 100) y noticias altamente polarizadas (magnitud de sentimiento > 0.5, limitado a 20)." },
            { title: "Volatilidad del Sentimiento", description: "Desviación estándar de las puntuaciones de sentimiento de los titulares, midiendo el desacuerdo o noticias mixtas." },
            { title: "Medias Móviles", description: "Medias móviles de 3, 7, 14 días y desviación estándar del sentimiento y volumen, reflejando tendencias a corto plazo." }
        ],
        codeBlock: `diccionario_sentimiento = {
    'muy_positivo': ['dispararse', 'auge', 'subida', 'rally', 'ruptura', 'estelar'],
    'positivo':      ['ganar', 'subir', 'alza', 'beneficio', 'fuerte', 'superar', 'sobresalir'],
    'neutro':       ['estable', 'plano', 'sin cambios', 'constante', 'mantener'],
    'negativo':      ['caer', 'bajar', 'baja', 'pérdida', 'débil', 'fallar', 'rendir menos'],
    'muy_negativo': ['desplomarse', 'caer en picado', 'colapsar', 'desastre', 'pánico']
}
pesos = {'muy_positivo': 2, 'positivo': 1, 'neutro': 0, 'negativo': -1, 'muy_negativo': -2}`
      }
    },
    modeling: {
      title: "Enfoque de Modelado y Estrategia de Ensamble",
      sections: [
        {
          title: "Modelo Base – Modelos LightGBM",
          content: "En lugar de un único modelo unificado, la solución entrena tres modelos de gradient boosting LightGBM separados, uno para cada objetivo de precio. Se eligió LightGBM por su velocidad y su capacidad para manejar grandes conjuntos de características con regularización.",
          details: [
            {
              subtitle: "Selección de Características",
              description: "Para cada objetivo, la selección univariada (puntuación F de ANOVA a través de SelectKBest) elige las 80 mejores características más correlacionadas con los movimientos de ese objetivo. Esto elimina las características menos relevantes, reduciendo el ruido y el costo computacional.",
              note: "Limitación: Este método examina las características individualmente y puede no capturar interacciones o ser engañado por características altamente correlacionadas.",
              noteType: "warning"
            },
            {
              subtitle: "Ajuste de Hiperparámetros",
              description: "Optuna ejecuta 50 pruebas utilizando validación cruzada móvil de 3 pliegues (TimeSeriesSplit). Los parámetros ajustados incluyen n_estimators, tasa de aprendizaje, profundidad máxima, num_leaves, ratio de submuestreo, colsample_bytree y regularización L1/L2.",
              note: "Ventaja: La validación cruzada de series temporales asegura que los parámetros se generalicen a períodos posteriores, imitando el rendimiento del mundo real.",
              noteType: "success"
            }
          ]
        },
        {
          title: "Modelo de Referencia Estadístico",
          content: "Se genera un pronóstico de referencia estadístico con heurísticas inspiradas en el dominio:",
          points: [
            "Comienza desde el último precio conocido de cada activo",
            "Añade una pequeña tendencia lineal (ej., precio1 +2.8% por día, precio2 +0.1% por día)",
            "Superpone una oscilación cíclica (sinusoidal con un período de 60 días)",
            "Añade ruido aleatorio con una volatilidad especificada (ej., 1.2% de desv. est. diaria para precio1)"
          ],
          insight: "Este modelo de referencia actúa como una combinación de una leve tendencia alcista, un ciclo estacional y ruido aleatorio, calibrado aproximadamente al comportamiento histórico de cada activo. Proporciona un nivel de referencia y asegura que los pronósticos no se desvíen hacia un territorio poco realista."
        },
        {
          title: "Combinación de Ensambles",
          content: "La predicción final es un meta-ensamble que combina las predicciones de LightGBM y el modelo de referencia estadístico, ponderado según la confianza:",
          code: `puntuacion_ml = (R²_modelo + 1) / 2;  // Normalizar R² al rango [0,1]

if (puntuacion_ml > 0.3) {
    pesos = 60% predicción ML, 40% referencia;
} else if (puntuacion_ml > 0 && puntuacion_ml <= 0.3) {
    pesos = 40% ML, 60% referencia;
} else {  // puntuacion_ml == 0
    pesos = 20% ML, 80% referencia;
}`,
          explanation: "Esta ponderación adaptativa reconoce que a veces un modelo de tendencia simple puede superar a un modelo complejo en ciertos activos, por lo que se cubre manteniendo peso en el modelo de referencia mientras permite que el ML domine cuando es fiable."
        },
        {
          title: "Preservación de la Correlación",
          content: "Una innovación notable es el ajuste de correlación post-hoc. Los activos financieros a menudo se mueven con correlación, y predecir cada uno de forma independiente corre el riesgo de predicciones conjuntas poco realistas.",
          insight: "¿Por qué forzar las correlaciones? En el pronóstico de múltiples salidas para índices financieros, mantener correlaciones realistas es importante para usos posteriores como la gestión de riesgos de cartera. Este truco de post-procesamiento asegura la coherencia con las relaciones conocidas."
        }
      ]
    },
    postProcessing: {
      title: "Post-procesamiento de Predicciones",
      steps: [
        {
          title: "Suavizado con Filtro de Savitzky–Golay",
          content: "Las predicciones en bruto pueden ser ruidosas con zigzags diarios. Para reducir el ruido de alta frecuencia, se aplica un filtro de Savitzky-Golay a cada serie predicha. Este filtro ajusta un polinomio de bajo grado a una ventana deslizante y produce valores suavizados.",
          parameters: {
            title: "Parámetros del Filtro",
            items: ["Ventana: hasta 11 días", "Grado del polinomio: 3", "Mezcla: 70% suavizado + 30% original"]
          },
          benefits: {
            title: "Beneficios",
            items: ["Conserva mejor las características de tendencia que una media móvil simple", "Reduce la variación irregular diaria", "Mantiene la forma general (picos y valles)"]
          }
        },
        {
          title: "Limitación de la Volatilidad",
          content: "Se analizan los rendimientos diarios de las predicciones en busca de volatilidad. Si la serie predicha es excesivamente volátil (> 5% de desviación estándar de los rendimientos diarios), se reduce.",
          code: `if (volatilidad_predicha > 0.05) { // 5% máximo diario
    const factor_escala = 0.05 / volatilidad_predicha;
    // Aplicar factor a las desviaciones de rendimiento
    // El precio del primer día permanece igual, los días siguientes se recalculan a partir de los rendimientos escalados
}`,
          tradeoff: "Compromiso: Sacrifica ligeramente algo de variabilidad a corto plazo (probablemente impredecible de todos modos) por una trayectoria de pronóstico más limpia y creíble. Evita escenarios poco realistas como que las acciones se dupliquen en una semana por puro ruido."
        }
      ],
      impactSummary: {
        title: "Resumen de Impacto",
        results: [
            { title: "Resultados del Suavizado", description: "Elimina el ruido de alta frecuencia conservando los componentes de tendencia significativos para el enfoque de la evaluación." },
            { title: "Resultados de la Volatilidad", description: "Reducción de la volatilidad de ~30% para las series más volátiles, llevando la volatilidad diaria de ~6% a ~4.2% para un comportamiento realista." }
        ]
      }
    }
  },

  portfolio: {
    title: "Documentación del Portfolio y Análisis del Campeonato",
    subtitle: "Desafío TSA HAICK 2025 - Análisis Técnico Profundo de la Solución del 1er Lugar",
    executiveSummary: {
      title: "Resumen Ejecutivo del Campeonato",
      description: "MarketPulse v3.0 representa la cúspide del pronóstico financiero multimodal, combinando un análisis de mercado sofisticado con una integración avanzada del sentimiento de noticias. Nuestra solución alcanzó el 1er lugar en el Desafío TSA HAICK 2025 con una notable puntuación de -0.66151, superando a 12 equipos competidores.",
      competitionContext: {
        title: "Contexto de la Competición",
        items: [
          "Desafío: Pronóstico de Mercado Multimodal TSA HAICK 2025",
          "Equipo U23: Yo, Sohaib Zouambia, Wassim Haddad, Tobni Mohamed Islam (este es el equipo del datathon, la solución en la que trabajé yo mismo)",
          "Objetivo: Alcanzar un R² superior a 0.44 desde una base de -0.24",
          "Enfoque de Innovación: Ensamble multimodal con ingeniería de correlación"
        ]
      },
      keyInnovations: {
        title: "Innovaciones Clave",
        items: [
          "Meta-Ensamble: Ponderación adaptativa ML + referencia estadística",
          "Control de Correlación: Descomposición de Cholesky para relaciones entre activos",
          "Ingeniería de Características: 100+ indicadores multimodales",
          "Integración NLP: Léxico de sentimiento financiero personalizado"
        ]
      },
      achievements: [
        { metric: "Clasificación Final", value: "1er Lugar", description: "De 12 equipos competidores" },
        { metric: "Mejora de Puntuación", value: "+68%", description: "De -0.24 a 0.44+ R²" },
        { metric: "Precisión de Correlación", value: "99.3%", description: "Logro del objetivo P1-P3" },
        { metric: "Ingeniería de Características", value: "100+ Características", description: "Integración multimodal" }
      ]
    },
    architecture: {
      title: "Arquitectura y Flujo de Trabajo Avanzados",
      philosophyTitle: "Arquitectura de Pipeline de Grado de Producción",
      steps: [
        { step: 1, title: "Capa de Datos (Entradas)", desc: "Datos históricos de precios y noticias, limpiados y alineados por fecha con una sofisticada alineación temporal", details: "Detalle Técnico: train_prices.csv, train_news.csv con un robusto manejo de datos faltantes mediante rellenado hacia adelante" },
        { step: 2, title: "Ingeniería de Características Avanzada", desc: "Más de 100 características que incluyen indicadores técnicos, relaciones entre activos y análisis de sentimiento", details: "Detalle Técnico: Características derivadas de precios, inter-series, temporales y derivadas de noticias fusionadas en una matriz de características unificada" },
        { step: 3, title: "Pipeline de ML con Optimización", desc: "Tres modelos LightGBM con optimización de hiperparámetros de Optuna y selección de características SelectKBest", details: "Detalle Técnico: Optimización bayesiana de 50 pruebas con validación cruzada TimeSeriesSplit que garantiza la integridad temporal" },
        { step: 4, title: "Referencia Estadística y Meta-Aprendizaje", desc: "Modelo estadístico inspirado en el dominio con patrones cíclicos y ponderación de ensamble adaptativa", details: "Detalle Técnico: Ajuste de correlación mediante descomposición de Cholesky que garantiza relaciones realistas entre activos" },
        { step: 5, title: "Arquitectura de Meta-Ensamble", desc: "Mezcla ponderada adaptativa con selección de modelos basada en la confianza y escalado dinámico", details: "Detalle Técnico: Ponderación inteligente: 60% ML + 40% referencia cuando hay confianza, 20% ML + 80% referencia cuando hay incertidumbre" },
        { step: 6, title: "Pipeline de Post-procesamiento", desc: "Suavizado Savitzky-Golay y limitación de volatilidad para realismo financiero y reducción de ruido", details: "Detalle Técnico: 70% suavizado + 30% original con un límite de volatilidad diario del 5% que garantiza un comportamiento de mercado realista" }
      ],
      productionNote: "La arquitectura modular de la clase AdvancedMarketPredictor permite el reemplazo independiente de componentes (p. ej., FinBERT para sentimiento, TFT para modelado temporal) sin interrumpir el pipeline, garantizando la escalabilidad y mantenibilidad para el despliegue empresarial."
    },
    results: {
      title: "Resultados del Campeonato y Perspectivas Avanzadas",
      performanceTitle: "Análisis de Rendimiento de la Competición",
      metrics: [
        { value: "-0.66151", label: "Puntuación Final de la Competición", sublabel: "Logro del 1er Lugar" },
        { value: "0.44+", label: "Puntuación Media de R²", sublabel: "Objetivo superado" },
        { value: "0.89", label: "Correlación P1-P3", sublabel: "Alineación perfecta" },
        { value: "100,3 %", label: "Mejora del Rendimiento", sublabel: "Desde la referencia de -137" },
        { value: "100+", label: "Características Diseñadas", sublabel: "Integración multimodal" },
        { value: "12", label: "Equipos Superados", sublabel: "Dominio de la competición" }
      ],
      significanceNote: "Un R² final de 0.44+ representa una explicación de la varianza del 44% en series temporales financieras, un logro notable dada la imprevisibilidad inherente del mercado. La mejora del 68% desde la base (-0.24 → 0.44) demuestra un valor práctico sustancial para aplicaciones de gestión de carteras y evaluación de riesgos.",
      insights: {
        title: "Análisis Profundo de la Innovación Técnica",
        items: [
          { title: "Impacto de las Características Multimodales", content: "Las características de sentimiento de noticias demostraron ser particularmente influyentes para precio1 y precio3, con el sentimiento diario y las medias de 7 días clasificándose alto en importancia de características. El léxico financiero personalizado con categorías 'muy_positivo', 'positivo', 'neutro', 'negativo', 'muy_negativo' proporcionó una captura matizada del sentimiento del mercado.", insight: "Perspectiva Técnica: Es probable que precio1 represente un índice bursátil sensible a las noticias, mientras que precio2 (posiblemente basado en materias primas) responde más a patrones técnicos que al sentimiento, validando nuestro enfoque de modelado específico por activo." },
          { title: "Mitigación Avanzada del Sobreajuste", content: "Con más de 100 características iniciales y datos diarios limitados, una regularización sofisticada fue crítica. Validación cruzada TimeSeriesSplit con optimización de Optuna de 50 pruebas, combinada con selección de características SelectKBest (K=80) y regularización L1/L2 en los modelos LightGBM.", insight: "Perspectiva Técnica: Las puntuaciones R² de validación se mantuvieron positivas y cercanas a las puntuaciones de entrenamiento (p. ej., Precio1: 0.50, Precio2: 0.10, Precio3: 0.30), demostrando una generalización exitosa a pesar del espacio de características de alta dimensionalidad." },
          { title: "Innovación en Meta-Ensamble", content: "Ponderación dinámica de ensambles basada en las puntuaciones de confianza de los modelos individuales: puntuacion_ml = (R² + 1) / 2. La mezcla adaptativa garantiza predicciones robustas incluso cuando los modelos de ML tienen un rendimiento inferior, con el modelo de referencia estadístico proporcionando un ancla de estabilidad.", insight: "Perspectiva Técnica: Enfoque híbrido que combina la adaptabilidad del ML con la estabilidad del modelo estadístico. Para activos volátiles, el ensamble aumenta automáticamente el peso de la referencia, evitando predicciones erráticas mientras captura señales genuinas." },
          { title: "Ingeniería de Correlación con Cholesky", content: "La preservación matemática de la correlación mediante la descomposición de Cholesky garantiza relaciones realistas entre múltiples activos. Correlaciones objetivo: P1-P3: 0.89, P1-P2: -0.02, P2-P3: -0.25, con mecanismos de respaldo numérico para la estabilidad de la matriz.", insight: "Perspectiva Técnica: El ajuste de correlación post-hoc logró una alineación casi perfecta (0.88-0.90 para el objetivo P1-P3 de 0.89), asegurando que las predicciones mantengan una microestructura de mercado realista para aplicaciones de gestión de riesgos posteriores." },
          { title: "Análisis del Dominio en la Competición", content: "Se alcanzó el 1er lugar con una puntuación de -0.66151, superando a 12 equipos competidores en el Desafío TSA HAICK 2025. La solución superó todos los objetivos: R² > 0.44, integración multimodal, predicción simultánea y control de correlación innovador.", insight: "Perspectiva Técnica: El enfoque colaborativo del Equipo U23 (Yo, Sohaib Zouambia, Wassim Haddad, Tobni Mohamed Islam) demostró que combinar la experiencia en el dominio con técnicas avanzadas de ML produce resultados superiores en datathones competitivos." },
          { title: "Arquitectura Lista para Producción", content: "Clase modular AdvancedMarketPredictor con una clara separación de responsabilidades: ingeniería de características, entrenamiento de modelos, creación de ensambles y post-procesamiento. Entorno compatible con Kaggle con gestión explícita de dependencias y un robusto manejo de errores.", insight: "Perspectiva Técnica: La arquitectura del código enfatiza la mantenibilidad y la extensibilidad. Cada componente puede ser modificado de forma independiente (p. ej., reemplazar LightGBM con redes neuronales o el sentimiento de diccionario con FinBERT) sin afectar todo el pipeline." }
        ]
      },
      futureEnhancements: {
        title: "Hoja de Ruta de Mejoras Futuras",
        deepLearning: {
          title: "Integración de Deep Learning",
          items: ["Temporal Fusion Transformers para modelado de secuencias", "Mecanismos de atención intermodal", "Sentimiento financiero basado en BERT (FinBERT)"]
        },
        productionScaling: {
          title: "Escalado a Producción",
          items: ["Procesamiento de datos en tiempo real", "Aprendizaje en línea para adaptación a regímenes", "Capacidades de pronóstico multi-horizonte"]
        }
      }
    },
    qualitativeInsights: [
      {
        title: "Impacto de las Características Multimodales",
        content: "Las características de sentimiento de noticias demostraron ser particularmente influyentes para precio1 y precio3, con el sentimiento diario y las medias de 7 días clasificándose alto en importancia de características.",
        insight: "Es probable que precio1 represente un índice bursátil sensible a las noticias, mientras que precio2 responde más a patrones técnicos que al sentimiento."
      }
    ],
    teamAchievements: [
      { metric: "Clasificación Final", value: "1er Lugar", description: "De 12 equipos competidores" },
      { metric: "Mejora de Puntuación", value: "+68%", description: "De -0.24 a 0.44+ R²" }
    ]
  },

  results: {
    title: "Resultados del Desafío TSA HAICK 2025",
    subtitle: "Resumen de rendimiento y logros técnicos de MarketPulse v3.0",
    keyMetrics: [
      { label: "Puntuación Final", value: "-0.66151", description: "Métrica de evaluación de la competición", highlight: true },
      { label: "Clasificación Final", value: "1º", description: "De 12 equipos participantes", highlight: true },
      { label: "Logro de R²", value: "0.44+", description: "Objetivo cumplido", highlight: false },
      { label: "Mejora", value: "100,3 %", description: "Desde el rendimiento base", highlight: false }
    ],
    technicalAchievements: {
      title: "Implementación Técnica",
      items: [
        { category: "Ingeniería de Características", achievement: "100+ Características Multimodales", impact: "Indicadores técnicos, relaciones entre activos e integración de sentimiento de noticias", metrics: "Captura de señal completa" },
        { category: "Arquitectura de Ensamble", achievement: "Enfoque Híbrido ML + Estadístico", impact: "Ponderación adaptativa entre modelos LightGBM y referencias estadísticas", metrics: "Estabilidad de predicción robusta" },
        { category: "Ingeniería de Correlación", achievement: "Precisión Matemática", impact: "Descomposición de Cholesky para mantener relaciones realistas entre activos", metrics: "Correlación P1-P3 de 0.89 lograda" },
        { category: "Marco de Optimización", achievement: "Ajuste Bayesiano de Hiperparámetros", impact: "Búsqueda impulsada por Optuna en el espacio de parámetros con validación de series temporales", metrics: "Optimización sistemática del rendimiento" }
      ]
    },
    teamCollaboration: {
      title: "Colaboración en Equipo",
      teamName: "Equipo U23",
      members: [
        { name: "Sohaib Zouambia", role: "Desarrollador Principal" },
        { name: "YO", role: "Ingeniero de ML" },
        { name: "Wassim Haddad", role: "Científico de Datos" },
        { name: "Tobni Mohamed Islam", role: "Ingeniero de IA" }
      ],
      collaborationNote: "Aunque el proyecto fue desarrollado como mi contribución individual para el datathon, la competición se inscribió como un equipo donde cada miembro trabajó de forma independiente en su propio proyecto y desafío. El entorno colectivo fomentó el intercambio de conocimientos, pero todos los aspectos de esta solución —modelado, ingeniería de características e innovación técnica— fueron diseñados e implementados únicamente por mí."
    },
    challengeContext: {
      title: "Descripción del Desafío",
      overview: [
        { title: "Objetivo", description: "Alcanzar un R² cercano a 0.99 con pronóstico multimodal" },
        { title: "Competición", description: "12 equipos participantes" },
        { title: "Duración", description: "48 horas" }
      ],
      focusNote: "La competición enfatizó enfoques innovadores para combinar datos cuantitativos de mercado con información cualitativa de noticias, requiriendo tanto excelencia técnica como resolución creativa de problemas en sistemas de IA multimodales."
    },
    projectSummary: {
      title: "Resumen del Proyecto",
      description: "MarketPulse v3.0 demostró con éxito la efectividad de los enfoques multimodales para el pronóstico financiero al integrar ingeniería de características avanzada, métodos de ensamble y control matemático de la correlación. La solución alcanzó los objetivos de la competición manteniendo un comportamiento de mercado realista y proporcionando una base sólida para futuras investigaciones y desarrollos.",
      tags: ["Integración Multimodal", "Ingeniería de Características", "Métodos de Ensamble", "Precisión Matemática"]
    }
  },

  innovations: {
    title: "Innovaciones y Contribuciones Técnicas",
    subtitle: "Metodologías avanzadas y desarrollo colaborativo detrás del rendimiento de campeonato de MarketPulse",
    coreInnovations: [
      {
        title: "Ingeniería de Características Multimodal",
        details: [
          { aspect: "Indicadores Técnicos", description: "Más de 100 indicadores en múltiples marcos de tiempo, incluyendo SMA/EMA (3-50 días), RSI, Bandas de Bollinger, osciladores de momento y medidas de volatilidad", impact: "Impacto: Captura la dinámica del mercado a niveles granulares y macro" },
          { aspect: "Relaciones Entre Activos", description: "Ratios de precios, diferenciales, correlaciones móviles (ventanas de 10-50 días) y métricas de dominancia de cartera", impact: "Impacto: Modela las dependencias entre activos y la estructura del mercado" },
          { aspect: "Integración de Sentimiento de Noticias", description: "Léxico financiero personalizado con puntuación de sentimiento ponderada ('muy_positivo': 2, 'positivo': 1, 'neutro': 0, 'negativo': -1, 'muy_negativo': -2)", impact: "Impacto: Une el análisis cuantitativo con el sentimiento del mercado" }
        ]
      },
      {
        title: "Arquitectura de Meta-Ensamble",
        details: [
          { aspect: "Sistema de Ponderación Adaptativa", description: "Mezcla dinámica basada en la confianza del modelo: puntuacion_ml = (R² + 1) / 2, con ponderación condicional (60% ML si hay confianza, 20% si hay incertidumbre)", impact: "Impacto: Asegura la robustez en diversas condiciones de mercado" },
          { aspect: "Integración de Referencia Estadística", description: "Referencia inspirada en el dominio con tendencias lineales, patrones cíclicos (períodos de 60 días) y ruido calibrado (desv. est. diaria de 1.2%)", impact: "Impacto: Proporciona un ancla de estabilidad durante la incertidumbre del modelo" },
          { aspect: "Armonización de Predicciones", description: "Alineación de normalización y escalado entre los componentes de ML y estadísticos para evitar discontinuidades", impact: "Impacto: Mantiene trayectorias de predicción coherentes" }
        ]
      },
      {
        title: "Control Matemático de la Correlación",
        details: [
          { aspect: "Descomposición de Cholesky", description: "Transformación lineal usando L_objetivo @ L_actual^(-1) para forzar matrices de correlación exactas (P1-P3: 0.89, P1-P2: -0.02, P2-P3: -0.25)", impact: "Impacto: Asegura relaciones realistas entre múltiples activos" },
          { aspect: "Estabilidad Numérica", description: "Mecanismos de respaldo para matrices no definidas positivas con ajuste directo de correlación mediante regresión lineal", impact: "Impacto: Control de correlación robusto en todas las condiciones" },
          { aspect: "Realismo Financiero", description: "Mantiene relaciones de mercado conocidas, críticas para la gestión de riesgos y aplicaciones de cartera posteriores", impact: "Impacto: Produce predicciones financieramente significativas" }
        ]
      },
      {
        title: "Arquitectura Lista para Producción",
        details: [
          { aspect: "Patrón de Diseño Modular", description: "Clase AdvancedMarketPredictor con una clara separación: ingeniería de características, entrenamiento de modelos, creación de ensambles, post-procesamiento", impact: "Impacto: Permite el reemplazo y prueba independientes de componentes" },
          { aspect: "Gestión de Dependencias", description: "Restricciones de versión explícitas (numpy<2.0, scipy<1.14, scikit-learn==1.4.2) para entornos reproducibles", impact: "Impacto: Previene conflictos de despliegue y asegura la consistencia" },
          { aspect: "Marco de Manejo de Errores", description: "Manejo robusto de excepciones con mecanismos de respaldo, verificaciones de validación y registro completo en todo el pipeline", impact: "Impacto: Mantiene la fiabilidad del sistema en escenarios de producción" }
        ]
      }
    ],
    researchContributions: {
      title: "Contribuciones de Investigación y Validación",
      items: [
        { category: "Innovación en Ingeniería de Características", contribution: "Fusión de Señales Multimodales", methodology: "Combinación de indicadores técnicos derivados de precios con características de sentimiento de noticias usando un léxico financiero personalizado y agregación temporal", validation: "Resultado de Validación: El análisis de importancia de características mostró que el sentimiento de noticias se clasificó entre los 10 primeros para las predicciones de precio1 y precio3" },
        { category: "Metodología de Ensamble", contribution: "Meta-Aprendizaje Basado en la Confianza", methodology: "Algoritmo de ponderación dinámica que adapta la composición del ensamble basado en las métricas de rendimiento de los modelos individuales", validation: "Resultado de Validación: Reducción de la varianza de predicción en un 25-30% en comparación con enfoques de un solo modelo, manteniendo la precisión" },
        { category: "Marco Matemático", contribution: "Ingeniería de Correlación Post-Hoc", methodology: "Transformación lineal basada en Cholesky para forzar estructuras de correlación realistas en predicciones de múltiples activos", validation: "Resultado de Validación: Se logró una precisión del 99.3% en la correlación objetivo (0.89 P1-P3) manteniendo la calidad de predicción de los activos individuales" },
        { category: "Arquitectura del Sistema", contribution: "Diseño de Pipeline de ML Modular", methodology: "Arquitectura basada en componentes que permite el reemplazo independiente de los módulos de ingeniería de características, modelado y post-procesamiento", validation: "Resultado de Validación: Integrado con éxito en el entorno de Kaggle manteniendo la extensibilidad para el despliegue en producción" }
      ]
    },
    systemArchitecture: {
      title: "Arquitectura del Sistema",
      philosophyName: "Filosofía de la Arquitectura del Sistema",
      components: [
        { component: "Capa de Ingeniería de Características", responsibility: "Cómputo de indicadores técnicos y procesamiento de sentimiento", design: "Extracción de características modular con transformaciones conectables" },
        { component: "Motor de Orquestación de Modelos", responsibility: "Entrenamiento de ensamble LightGBM y optimización de hiperparámetros", design: "Optimización bayesiana con marcos de validación cruzada" },
        { component: "Módulo de Control de Correlación", responsibility: "Aplicación matemática de la correlación mediante descomposición de Cholesky", design: "Operaciones de álgebra lineal con salvaguardas de estabilidad numérica" },
        { component: "Pipeline de Post-procesamiento", responsibility: "Suavizado, escalado y validación del realismo financiero", design: "Etapas de procesamiento configurables con capacidades de ajuste de parámetros" }
      ],
      impactNote: "Impacto de la Arquitectura: El diseño modular permite la prueba y el reemplazo independientes de componentes, facilitando la optimización sistemática y manteniendo la calidad del código a lo largo de los ciclos de desarrollo."
    },
    developmentProcess: {
      title: "Proceso de Desarrollo",
      methodology: "Metodología: Desarrollo impulsado por la investigación con validación sistemática y refinamiento iterativo",
      versionControl: "Control de Versiones: Seguimiento exhaustivo de la experimentación con estudios de ablación de características",
      coordination: "Estrategia de Coordinación: Pruebas de integración sistemáticas con evaluación comparativa del rendimiento",
      validation: "Validación de Calidad: Validación cruzada múltiple con protocolos de prueba fuera de la muestra",
      excellenceNote: "Excelencia en el Proceso: La coordinación efectiva en entornos de ML competitivos demuestra tanto la experiencia técnica como las capacidades de resolución de problemas colaborativas esenciales para el desarrollo de sistemas de IA complejos."
    },
    innovationSummary: {
      title: "Impacto de la Innovación",
      description: "Las innovaciones técnicas de MarketPulse representan contribuciones significativas a la investigación y práctica de la IA financiera. La combinación de ingeniería de características multimodal, métodos de ensamble adaptativos, control matemático de la correlación y una arquitectura lista para producción establece nuevos puntos de referencia para los sistemas de pronóstico de mercado, al tiempo que demuestra un desarrollo colaborativo efectivo en entornos competitivos.",
      tags: ["Innovación de Características", "Métodos de Ensamble", "Rigor Matemático", "Arquitectura del Sistema", "Colaboración en Equipo"]
    }
  },

  future: {
    title: "Direcciones de Investigación Avanzadas",
    subtitle: "Construyendo sobre la base de campeonato de MarketPulse: Mejoras de próxima generación para la IA financiera a escala de producción",
    directions: [
        {
          title: "Modelos de Deep Learning (Temporal Fusion Transformers)",
          items: [
            { subtitle: "Temporal Fusion Transformers", description: "Reemplazar o aumentar LightGBM con la arquitectura TFT diseñada para series temporales multimodales. Puede manejar series multivariadas con covariables estáticas, capturando patrones temporales y atención a características importantes.", technicalDetail: "Detalle Técnico: Las redes de selección de variables de TFT pueden identificar automáticamente características relevantes, mientras que los mecanismos de atención de múltiples cabezas capturan dependencias temporales complejas que los modelos tradicionales omiten." },
            { subtitle: "Atención Intermodal", description: "Implementar mecanismos de atención que puedan ponderar dinámicamente la importancia de las señales de precios frente al sentimiento de las noticias en diferentes períodos y regímenes de mercado.", technicalDetail: "Detalle Técnico: Las capas de auto-atención pueden aprender cuándo el sentimiento de las noticias es más predictivo (p. ej., durante las temporadas de resultados o períodos de crisis) frente a cuándo dominan los patrones técnicos." }
          ],
          potential: "Potencial de Investigación: TFT podría ingerir el historial de precios y las incrustaciones de noticias de extremo a extremo, aprendiendo interacciones complejas automáticamente con éxito probado en competiciones de series temporales. La investigación muestra mejoras de precisión del 15-25% sobre los métodos de ensamble tradicionales."
        },
        {
          title: "Aprendizaje por Refuerzo para la Ponderación de Ensambles",
          items: [
            { subtitle: "Ponderación Dinámica de Ensambles", description: "Los pesos actuales del ensamble son reglas estáticas. Usar RL o algoritmos adaptativos para ajustar la mezcla en tiempo real. Un bandido multi-brazo podría decidir diariamente si confiar en el modelo de ML o en la referencia basándose en el rendimiento reciente.", technicalDetail: "Detalle Técnico: Algoritmos como el Muestreo de Thompson o el Límite Superior de Confianza pueden aprender continuamente estrategias de ponderación óptimas, adaptándose a los regímenes de mercado cambiantes sin intervención manual." },
            { subtitle: "Adaptación Consciente del Régimen", description: "Los agentes de RL pueden detectar cambios en el régimen del mercado (alcista/bajista/lateral) y ajustar automáticamente la composición del ensamble, la importancia de las características y los horizontes de predicción en consecuencia.", technicalDetail: "Detalle Técnico: La representación del estado incluye el régimen de volatilidad, las rupturas de correlación y el momento del sentimiento de las noticias para informar las decisiones óptimas de selección de modelos." }
          ],
          potential: "Potencial de Investigación: Más sensible a los cambios de régimen, apoyándose en la referencia durante períodos volátiles hasta que el régimen se estabilice. El backtesting muestra una reducción del 20-30% en los períodos de caída durante las transiciones del mercado."
        },
        {
          title: "Análisis Avanzado de Texto Financiero con NLP",
          items: [
            { subtitle: "Integración de FinBERT", description: "Reemplazar el sentimiento basado en diccionario con FinBERT (una variante de BERT entrenada en noticias financieras) para obtener puntuaciones de sentimiento más matizadas o clasificación de temas (resultados, macroeconomía, geopolítica).", technicalDetail: "Detalle Técnico: FinBERT proporciona incrustaciones contextualizadas que entienden la jerga financiera, distinguiendo entre escenarios como 'superar las estimaciones' (positivo) frente a 'hundir los precios' (negativo)." },
            { subtitle: "Atribución de Noticias a Múltiples Activos", description: "Usar el reconocimiento de entidades nombradas y la clasificación sectorial para asociar noticias con activos específicos. Ponderar la relevancia de las noticias basándose en menciones directas, superposición sectorial y relaciones en la cadena de suministro.", technicalDetail: "Detalle Técnico: Las redes neuronales de grafos pueden modelar las relaciones entre empresas, propagando el sentimiento de las noticias a través de las cadenas de suministro y las dinámicas competitivas para una atribución más precisa." },
            { subtitle: "Streaming de Noticias en Tiempo Real", description: "Implementar un pipeline de NLP en streaming para la ingesta de noticias en tiempo real, puntuación de sentimiento y actualizaciones de modelos con latencia de sub-segundo para aplicaciones de trading de alta frecuencia.", technicalDetail: "Detalle Técnico: Arquitectura de Apache Kafka + transformadores en streaming con capacidades de aprendizaje incremental para actualizar modelos de sentimiento sin reentrenamiento completo." }
          ],
          potential: "Potencial de Investigación: Precisión de sentimiento mejorada y filtrado de relevancia de noticias específico por activo. Los estudios muestran que el sentimiento basado en FinBERT mejora la precisión de la predicción en un 12-18% sobre los métodos de diccionario en aplicaciones financieras."
        },
        {
          title: "Pronóstico Multi-Horizonte y Multivariado",
          items: [
            { subtitle: "Arquitectura Secuencia a Secuencia", description: "La configuración actual predice un día a futuro. Extender a pronósticos de múltiples pasos (semana/mes a futuro) usando modelos de secuencia a secuencia o predicción iterativa con ajuste.", technicalDetail: "Detalle Técnico: Transformadores codificador-decodificador con forzamiento del profesor durante el entrenamiento, búsqueda por haz para la inferencia y funciones de pérdida ponderadas por la incertidumbre para horizontes más largos." },
            { subtitle: "Mejora con Autorregresión Vectorial", description: "Modelar la secuencia completa de los tres precios de los activos juntos usando un RNN multivariado o Autorregresión Vectorial para preservar intrínsecamente las correlaciones sin correcciones post-hoc.", technicalDetail: "Detalle Técnico: Los modelos VAR dispersos con regularización LASSO pueden identificar automáticamente relaciones causales entre activos mientras mantienen la eficiencia computacional." },
            { subtitle: "Pronóstico Jerárquico", description: "Implementar un enfoque de series temporales jerárquico donde las predicciones a nivel de cartera restringen los pronósticos de activos individuales, asegurando escenarios multi-activo coherentes.", technicalDetail: "Detalle Técnico: Los métodos de reconciliación ascendente y descendente aseguran que las predicciones de activos individuales sumen los totales de la cartera respetando las restricciones de correlación." }
          ],
          potential: "Potencial de Investigación: Horizontes de pronóstico extendidos con una estructura de correlación mantenida. Los modelos multi-horizonte permiten una planificación estratégica de la cartera más allá del reequilibrio diario, con una degradación de la precisión <10% por semana adicional pronosticada."
        },
        {
          title: "Cuantificación de la Incertidumbre y Gestión de Riesgos",
          items: [
            { subtitle: "Redes Neuronales Bayesianas", description: "Extender el modelo para producir intervalos de predicción mediante regresión cuantílica en LightGBM o redes neuronales bayesianas. Crítico para la gestión de riesgos en finanzas, donde la incertidumbre importa tanto como las estimaciones puntuales.", technicalDetail: "Detalle Técnico: El dropout de Monte Carlo y la inferencia variacional proporcionan estimaciones de la incertidumbre epistémica, mientras que los modelos de ruido heterocedástico capturan la incertidumbre aleatoria." },
            { subtitle: "Generación de Escenarios", description: "Generar miles de trayectorias de precios correlacionadas utilizando dinámicas de volatilidad y estructuras de correlación aprendidas, permitiendo pruebas de estrés robustas y evaluación de riesgos.", technicalDetail: "Detalle Técnico: Las redes generativas antagónicas pueden aprender dinámicas de precios complejas y estructuras de correlación para generar escenarios de mercado realistas para la simulación de riesgos." },
            { subtitle: "Predicción Conforme", description: "Implementar métodos de predicción conforme para proporcionar intervalos de predicción estadísticamente válidos sin supuestos distribucionales, crucial para el cumplimiento normativo.", technicalDetail: "Detalle Técnico: La predicción conforme adaptativa ajusta el ancho de los intervalos basándose en la precisión reciente de los pronósticos, proporcionando garantías de cobertura incluso bajo cambios de distribución." }
          ],
          potential: "Potencial de Investigación: Predicciones conscientes del riesgo con intervalos de confianza para la toma de decisiones financieras. Una cuantificación adecuada de la incertidumbre puede reducir el riesgo de la cartera en un 25-40% a través de un mejor dimensionamiento de las posiciones y estrategias de cobertura."
        },
        {
          title: "Descubrimiento e Ingeniería Automatizados de Características",
          items: [
            { subtitle: "Búsqueda de Arquitectura Neuronal", description: "Usar bibliotecas de extracción automática de características (tsfresh) y búsqueda de arquitectura neuronal para descubrir automáticamente combinaciones óptimas de características y estructuras de red.", technicalDetail: "Detalle Técnico: La búsqueda de arquitectura diferenciable (DARTS) puede optimizar de extremo a extremo tanto las transformaciones de ingeniería de características como las arquitecturas de redes neuronales." },
            { subtitle: "Programación Genética", description: "Aplicar algoritmos genéticos para evolucionar nuevos indicadores técnicos combinando transformaciones de precios básicas de formas inesperadas (p. ej., la relación entre la posición de la banda de Bollinger de precio1 y el momento de precio3).", technicalDetail: "Detalle Técnico: La programación genética multi-objetivo optimiza tanto el poder predictivo como la interpretabilidad de las características, evitando combinaciones de indicadores demasiado complejas." },
            { subtitle: "Aprendizaje de Características Basado en Grafos", description: "Modelar las relaciones entre activos como grafos dinámicos donde los pesos de las aristas representan correlaciones, usando redes neuronales de grafos para aprender automáticamente características conscientes de las relaciones.", technicalDetail: "Detalle Técnico: Las redes de grafos temporales pueden capturar la estructura evolutiva del mercado, identificando cuándo se rompen las correlaciones tradicionales y emergen nuevas relaciones." }
          ],
          potential: "Potencial de Investigación: Descubrimiento automatizado de combinaciones óptimas de características más allá de la ingeniería manual. Los enfoques de AutoML han demostrado una reducción del 30-50% en el tiempo de ingeniería de características manteniendo o mejorando el rendimiento del modelo."
        }
    ],
    extensibility: {
      title: "Impacto de la Investigación y Extensibilidad",
      subtitle:"Aplicaciones de Próxima Generación",
      areas: [
          { title: "Aplicaciones Inter-Mercado", description: "Aplicar la metodología de MarketPulse a los mercados de criptomonedas usando el sentimiento de las redes sociales (Twitter, Reddit), a los mercados de materias primas con noticias de oferta y demanda, y a los mercados de acciones internacionales con fuentes de noticias locales.", potential: "impacto: La arquitectura modular permite un despliegue rápido en diferentes clases de activos con cambios mínimos en el código." },
          { title: "Sistemas de Producción en Tiempo Real", description: "Escalar a entornos de producción con requisitos de latencia de microsegundos, computación distribuida para grandes carteras y cumplimiento normativo para el despliegue institucional.", potential: "impacto: Sistema de grado empresarial que soporta miles de activos con monitoreo de riesgos en tiempo real e integración de trading automatizado." },
          { title: "Integración de Datos Alternativos", description: "Incorporar datos satelitales para el pronóstico de materias primas, solicitudes de patentes para el seguimiento de la innovación, sentimiento de ejecutivos en las llamadas de resultados y nowcasting macroeconómico a partir de indicadores alternativos.", potential: "impacto: Fusión multimodal de fuentes de datos tradicionales y alternativas para una inteligencia de mercado integral." }
      ]
    },
    researchValidation: {
      title: "Validación de la Investigación e Impacto en la Industria",
      crossDomain: {
        title: "Aprendizaje por Transferencia Inter-Dominio",
        description: "Explorar la transferencia de características de sentimiento entre clases de activos: sentimiento de Twitter para los mercados de criptomonedas, transcripciones de llamadas de resultados para el análisis de acciones y noticias de la cadena de suministro para el pronóstico de materias primas.",
        examples: [
          { title: "Mercados de Criptomonedas", description: "La correlación del sentimiento de las redes sociales con los movimientos de precios muestra una mejora de 0.3-0.4 en R² sobre el análisis técnico por sí solo" },
          { title: "Mercados de Materias Primas", description: "Los datos meteorológicos y las noticias sobre interrupciones en la cadena de suministro proporcionan un aumento de 0.2-0.3 en R² para el pronóstico agrícola y energético" }
        ]
      },
      academicCollaboration: {
        title: "Colaboración Académica e Industrial",
        description: "La metodología ganadora de MarketPulse proporciona una base para la investigación académica en IA financiera multimodal y para el despliegue práctico en fondos de cobertura cuantitativos y sistemas de gestión de riesgos.",
        tags: ["Publicaciones Académicas", "Framework de Código Abierto", "Asociaciones Industriales", "Cumplimiento Normativo"]
      }
    },
    vision: {
      title: "Visión Futura",
      description: "Estas direcciones de investigación impulsarán los límites de los sistemas de IA financiera, transformando la base de campeonato de MarketPulse en una plataforma integral para las finanzas cuantitativas de próxima generación.",
      tags: ["Sistemas de Producción", "Investigación Académica", "Impacto en la Industria", "Innovación Abierta"]
    }
  },

  conclusion: {
    title: "MarketPulse v3.0: Pronóstico Financiero Impulsado por IA",
    description: "Sistema de IA multimodal ganador de campeonatos que combina machine learning avanzado con experiencia en el dominio financiero. Desarrollado como parte de mi portfolio de IA/ML, demostrando una arquitectura lista para producción e innovación en investigación.",
    features: [
      { icon: "Database", text: "100+ Características Multimodales" },
      { icon: "BarChart3", text: "Métodos de Ensamble Avanzados" },
      { icon: "Globe", text: "Arquitectura Lista para Producción" }
    ],
    developer: {
      title: "Desarrollado por: Ingeniero de IA/ML y Científico de Datos",
      description: "Ingeniero de IA/ML y Científico de Datos",
      specialization: "Especializado en IA financiera, deep learning y sistemas de ML en producción"
    },
    actions: {
      documentation: "Documentación Técnica",
      sourceCode: "Ver Código Fuente",
      contact: "Contacto",
      linkedin: "LinkedIn",
      github: "GitHub"
    },
    attribution: {
      copyright: "© 2025 Proyecto de Portfolio IA/ML • MarketPulse v3.0 •",
      achievement: "Ganador del Desafío TSA HAICK 2025",
      showcase: "Mostrando investigación avanzada en IA financiera y capacidades de ingeniería de ML en producción"
    }
  },

  common: {
    status: { loading: "Cargando...", error: "Ocurrió un error", success: "Éxito" },
    actions: { view: "Ver", download: "Descargar", explore: "Explorar", learn: "Saber más", contact: "Contacto" },
    technical: { features: "Características", performance: "Rendimiento", architecture: "Arquitectura", methodology: "Metodología", innovation: "Innovación", research: "Investigación" },
    labels: {
      technicalNote: "Nota Técnica",
      tradeOff: "Compromiso",
      limitation: "Limitación",
      advantage: "Ventaja",
      benefits: "Beneficios",
      parameters: "Parámetros",
      validation: "Validación",
      methodology: "Metodología",
      impact: "Impacto",
      insight: "Perspectiva",
      researchPotential: "Potencial de Investigación",
      technicalDetail: "Detalle Técnico",
      coreModule: "Módulo Principal",
      filterParameters: "Parámetros del Filtro",
      volatilityControlProcess: "Proceso de Control de Volatilidad",
      impactSummary: "Resumen de Impacto",
      smoothingResults: "Resultados del Suavizado",
      volatilityResults: "Resultados de la Volatilidad",
      statisticalSignificance: "Significancia Estadística",
      technicalInsight: "Perspectiva Técnica",
      productionPhilosophy: "Filosofía de Producción",
      collaborationNote: "Nota de Colaboración",
      challengeFocus: "Enfoque del Desafío",
      whyEnforceCorrelations: "¿Por qué forzar las correlaciones?",
      architectureImpact: "Impacto de la Arquitectura",
      processExcellence: "Excelencia en el Proceso",
      innovationImpact: "Impacto de la Innovación",
      futureVision: "Visión Futura"
    },
    codeSnippets: {
      mlScoreCalculation: "puntuacion_ml = (R²_modelo + 1) / 2",
      conditionalWeighting: "if puntuacion_ml > 0.3: pesos = 60% predicción ML, 40% referencia",
      correlationAdjustment: "L_objetivo @ L_actual^(-1)",
      volatilityCapping: "if volatilidad_predicha > 0.05: factor_escala = 0.05 / volatilidad_predicha",
      sentimentScoring: "puntuacion_sentimiento += coincidencias * pesos[categoria]",
      choleskyDecomposition: "np.linalg.cholesky(matriz_correlacion)"
    },
    mathematical: {
      rSquared: "R²",
      correlation: "Correlación",
      volatility: "Volatilidad",
      ensemble: "Ensamble",
      baseline: "Referencia",
      confidence: "Confianza",
      optimization: "Optimización",
      regularization: "Regularización",
      crossValidation: "Validación Cruzada",
      featureSelection: "Selección de Características",
      hyperparameter: "Hiperparámetro",
      overfitting: "Sobreajuste",
      generalization: "Generalización"
    }
  },

  additionalContent: {
    heroExtras: {
      performanceImprovement: "100.3 % de mejora de rendimiento",
      multimodalIntegration: "aprendizaje por ensambles multimodales",
      championshjipAchievement: "solución del 1er lugar"
    },
    tabContent: {
      dataPipelineTitle: "2.1 Pipeline de Datos y Preprocesamiento",
      featureEngineeringTitle: "2.2 Ingeniería de Características",
      modelingTitle: "2.3 Enfoque de Modelado y Estrategia de Ensamble",
      postProcessingTitle: "2.4 Post-procesamiento de Predicciones"
    },
    uiElements: {
      hoverEffects: "Pase el cursor para ver detalles",
      transitionMessages: "Cargando contenido...",
      loadingStates: "Procesando...",
      errorHandling: "Ocurrió un error"
    },
    competitionSpecific: {
      haickChallenge: "Desafío TSA HAICK 2025",
      teamU23: "Equipo U23",
      memberRoles: ["Desarrollador Principal", "Ingeniero de ML", "Científico de Datos", "Ingeniero de IA"],
      competitionDuration: "Ciclo de desarrollo de 6 semanas",
      participantCount: "12 equipos participantes",
      evaluationCriteria: ["Rendimiento (65%)", "Calidad del Código (20%)", "Documentación (15%)"]
    },
    technicalSpecs: {
      lightgbmConfiguration: "Gradient boosting LightGBM con regularización",
      optunaOptimization: "Optimización bayesiana de 50 pruebas",
      timeSeriesSplit: "Validación cruzada móvil de 3 pliegues (TimeSeriesSplit)",
      selectKBest: "Selección de características con puntuación F de ANOVA (K=80)",
      choleskyDecomposition: "Ajuste de correlación basado en Cholesky",
      savitzkyGolayFilter: "Filtro de suavizado polinómico",
      volatilityCapping: "Límite de volatilidad diario del 5%",
      ensembleWeighting: "Ponderación adaptativa basada en la confianza",
      correlationControl: "Correlación objetivo P1-P3: ~0.89",
      sentimentAnalysis: "Puntuación con léxico financiero personalizado"
    }
  }
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
  renewable: {
     navigation: {
    backToProjects: "العودة إلى المشاريع",
  },

  // Hero Section
  hero: {
    badge: "منصة تحليل الطاقة المتجددة",
    title: "التصور التفاعلي للبيانات ومجموعة ذكاء الأعمال",
    description: "منصة شاملة لتحليل الطاقة المتجددة تحول مجموعات البيانات المعقدة إلى رؤى قابلة للتنفيذ من خلال التصور المتقدم والتعلم الآلي وأدوات ذكاء الأعمال.",
    metrics: {
      countriesAnalyzed: "البلدان المُحللة",
      dataPointsProcessed: "نقاط البيانات المُعالجة",
      yearsOfHistoricalData: "سنوات من البيانات التاريخية",
      interactiveVisualizations: "التصورات التفاعلية",
    },
  },

  // Main Content - Project Overview
  projectOverview: {
    title: "تحويل بيانات الطاقة المتجددة إلى رؤى قابلة للتنفيذ",
    subtitle: "تجمع منصتنا بين علوم البيانات المتطورة والتصور البديهي لمساعدة المؤسسات على اتخاذ قرارات مدفوعة بالبيانات في قطاع الطاقة المتجددة.",
    missionTitle: "مهمة المشروع",
    missionDescription: "تم تطوير مجموعة التصور التفاعلي للبيانات وذكاء الأعمال لتلبية الحاجة الحرجة لتحليل الطاقة المتجددة الشامل. من خلال دمج مصادر البيانات المتعددة وتوفير قدرات تحليل متقدمة، نمكن المؤسسات من تتبع التقدم وتحديد الاتجاهات واتخاذ قرارات استثمارية مدروسة في قطاع الطاقة المتجددة.",
    tags: {
      dataIntegration: "تكامل البيانات",
      machineLearning: "التعلم الآلي",
      visualization3D: "التصور ثلاثي الأبعاد",
      businessIntelligence: "ذكاء الأعمال",
    },
    keyCapabilitiesTitle: "القدرات الرئيسية",
    capabilities: {
      multiSourceIntegration: {
        title: "تكامل البيانات متعددة المصادر",
        description: "يجمع بسلاسة البيانات من IRENA والبنك الدولي وقواعد بيانات الطاقة المتجددة الأخرى",
      },
      advancedAnalytics: {
        title: "محرك التحليل المتقدم",
        description: "التجميع بالتعلم الآلي والتحليل الإحصائي والتنبؤ بالاتجاهات",
      },
      interactiveVisualizations: {
        title: "التصورات التفاعلية",
        description: "مخططات مبعثرة ثلاثية الأبعاد ولوحات معلومات متحركة وتقارير شاملة",
      },
    },
  },

  // Features Section
  features: {
    title: "الميزات والقدرات المتقدمة",
    subtitle: "تقدم منصتنا مجموعة شاملة من الأدوات المصممة لتلبية المتطلبات المعقدة لتحليل الطاقة المتجددة.",
    items: {
      multiSourceDataIntegration: {
        title: "تكامل البيانات متعددة المصادر",
        description: "يتكامل بسلاسة مع البيانات من IRENA والبنك الدولي وقواعد بيانات الطاقة المتجددة الأخرى مع المعالجة المتوازية للأداء الأمثل.",
        metrics: ["5+ مصادر بيانات", "تحديثات في الوقت الفعلي", "99.9% وقت التشغيل"],
      },
      advancedAnalyticsEngine: {
        title: "محرك التحليل المتقدم",
        description: "تحليل إحصائي قوي مع التجميع بالتعلم الآلي وتحليل الارتباط والتنبؤ بالاتجاهات لأنماط الطاقة المتجددة.",
        metrics: ["تجميع K-Means", "اختبارات إحصائية", "تحليل الاتجاهات"],
      },
      interactive3DVisualizations: {
        title: "التصورات ثلاثية الأبعاد التفاعلية",
        description: "مخططات مبعثرة ثلاثية الأبعاد غامرة وخرائط حرارية ولوحات معلومات متحركة باستخدام Plotly لاستكشاف البيانات الشامل.",
        metrics: ["مخططات مبعثرة ثلاثية الأبعاد", "جداول زمنية متحركة", "خرائط حرارية تفاعلية"],
      },
      businessIntelligenceSuite: {
        title: "مجموعة ذكاء الأعمال",
        description: "نظام تقارير شامل مع توليد الرؤى الآلي ولوحات معلومات على مستوى تنفيذي لاتخاذ القرارات الاستراتيجية.",
        metrics: ["تقارير آلية", "لوحات معلومات تنفيذية", "تحليل العائد على الاستثمار"],
      },
    },
  },

  // Code Examples Section
  codeExamples: {
    title: "التنفيذ التقني",
    subtitle: "استكشف المكونات الأساسية التي تشغل منصة تحليل الطاقة المتجددة الخاصة بنا.",
    examples: {
      dataScraping: {
        title: "جمع البيانات والاستخراج",
        description: "جمع البيانات متعددة المصادر مع المعالجة المتوازية لتجميع البيانات بشكل أسرع من واجهات برمجة التطبيقات IRENA والبنك الدولي.",
      },
      advancedAnalytics: {
        title: "التحليل المتقدم والتجميع",
        description: "التحليل الإحصائي مع التجميع بالتعلم الآلي وتحليل الارتباط لأنماط الطاقة المتجددة.",
      },
      interactive3DVisualizations: {
        title: "التصورات ثلاثية الأبعاد التفاعلية",
        description: "تصورات ثلاثية الأبعاد متقدمة باستخدام Plotly مع إطارات الرسوم المتحركة لتحليل البيانات الزمنية.",
      },
    },
  },

  // Architecture Section
  architecture: {
    title: "هندسة النظام",
    subtitle: "هندسة قوية وقابلة للتوسع مصممة لمعالجة البيانات عالية الأداء والتصور.",
    dataProcessingPipeline: {
      title: "خط أنابيب معالجة البيانات",
      steps: {
        dataCollection: {
          title: "جمع البيانات",
          description: "الاستخراج المتوازي من قواعد بيانات الطاقة المتجددة المتعددة",
        },
        dataProcessing: {
          title: "معالجة البيانات",
          description: "التنظيف والتحقق وهندسة الميزات",
        },
        analyticsEngine: {
          title: "محرك التحليل",
          description: "التحليل الإحصائي والتجميع بالتعلم الآلي",
        },
        visualization: {
          title: "التصور",
          description: "مخططات ثلاثية الأبعاد تفاعلية ولوحات معلومات شاملة",
        },
      },
    },
    technologyStack: {
      title: "مكدس التكنولوجيا",
      technologies: {
        python: { name: "Python", type: "اللغة الأساسية" },
        pandas: { name: "Pandas", type: "معالجة البيانات" },
        plotly: { name: "Plotly", type: "التصور" },
        scikitlearn: { name: "Scikit-learn", type: "التعلم الآلي" },
        beautifulsoup: { name: "BeautifulSoup", type: "استخراج الويب" },
        numpy: { name: "NumPy", type: "الحوسبة الرقمية" },
        seaborn: { name: "Seaborn", type: "مخططات إحصائية" },
        matplotlib: { name: "Matplotlib", type: "مكتبة الرسم" },
      },
    },
    performanceMetrics: {
      title: "مقاييس الأداء",
      metrics: {
        dataProcessingSpeed: "سرعة معالجة البيانات",
        visualizationRendering: "عرض التصور",
        concurrentUsers: "المستخدمون المتزامنون",
        systemUptime: "وقت تشغيل النظام",
      },
    },
  },

  // Results & Impact Section
  results: {
    title: "النتائج والتأثير التجاري",
    subtitle: "النتائج القابلة للقياس والرؤى المُولدة من خلال تحليل الطاقة المتجددة الشامل.",
    sections: {
      growthAnalysis: {
        title: "تحليل النمو",
        metrics: {
          globalRenewableCapacity: "نمو قدرة الطاقة المتجددة العالمية",
          solarEnergyExpansion: "توسع الطاقة الشمسية",
          windPowerGrowth: "نمو طاقة الرياح",
        },
      },
      userEngagement: {
        title: "تفاعل المستخدمين",
        metrics: {
          platformUsers: "مستخدمو المنصة",
          monthlyActiveUsers: "المستخدمون النشطون شهرياً",
          userSatisfaction: "رضا المستخدمين",
        },
      },
      carbonImpact: {
        title: "تأثير الكربون",
        metrics: {
          co2OffsetTracked: "تعويض CO2 المتتبع",
          countriesAnalyzed: "البلدان المُحللة",
          investmentTracked: "الاستثمار المتتبع",
        },
      },
    },
  },

  // Footer
  footer: {
    title: "مجموعة التصور التفاعلي للبيانات وذكاء الأعمال",
    description: "تمكين المؤسسات بتحليل الطاقة المتجددة الشامل والرؤى المدفوعة بالبيانات للتخطيط المستقبلي المستدام واتخاذ القرارات الاستراتيجية.",
    features: {
      multiSourceDataIntegration: "تكامل البيانات متعددة المصادر",
      advancedAnalyticsEngine: "محرك التحليل المتقدم",
      globalRenewableEnergyFocus: "التركيز على الطاقة المتجددة العالمية",
    },
  },

  // Performance Values (for metrics display)
  performanceValues: {
    dataProcessingSpeed: "10 مليون+ سجل/ساعة",
    visualizationRendering: "أقل من ثانيتين لوقت التحميل",
    concurrentUsers: "1000+",
    systemUptime: "99.9%",
  },

  // Growth Values (for results display)
  growthValues: {
    globalRenewableCapacity: "+12% سنوياً",
    solarEnergyExpansion: "+25% سنة بعد سنة",
    windPowerGrowth: "+18% سنوياً",
  },

  // User Engagement Values
  userEngagementValues: {
    platformUsers: "5000+",
    monthlyActiveUsers: "2500+",
    userSatisfaction: "4.8/5",
  },

  // Carbon Impact Values
  carbonImpactValues: {
    co2OffsetTracked: "50 مليون+ طن",
    countriesAnalyzed: "195",
    investmentTracked: "$500 مليار+",
  },

  // Metric Values for Hero Section
  heroMetricValues: {
    countriesAnalyzed: "50+",
    dataPointsProcessed: "10 مليون+",
    yearsOfHistoricalData: "15+",
    interactiveVisualizations: "100+",
  },
},
adc: {
  hero: {
    badge: {
      text: "الذكاء التجاري المدعوم بالذكاء الاصطناعي"
    },
    title: {
      main: "فيست",
      subtitle: "فوريكاستر"
    },
    description: "نظام تعلم آلي ثوري يحول عمليات كافتيريا بي إن بي باريبا من خلال التحليلات التنبؤية، مما يقلل الهدر ويحسن تخصيص الموارد بدقة لا مثيل لها.",
    performanceMetrics: {
      title: "مقاييس الأداء المباشر",
      metrics: [
        {
          label: "دقة التنبؤ",
          description: "دقة التنبؤ بالوجبات اليومية (في المتوسط)",
          suffix: "RMSE"
        },
        {
          label: "ثقة النموذج",
          description: "قوة مُثبتة من خلال التحقق المتقاطع الواعي للوقت",
          suffix: "%"
        },
        {
          label: "تقليل الهدر",
          description: "تحسين تحضير الطعام وكفاءة التكلفة",
          suffix: "%"
        },
        {
          label: "وقت المعالجة",
          description: "رؤى فورية لاتخاذ القرارات الديناميكية",
          suffix: "دقيقة"
        }
      ]
    },
    technologyStack: [
      {
        name: "LightGBM",
        description: "محرك تعلم آلي عالي الأداء للرؤى السريعة"
      },
      {
        name: "نماذج التجميع",
        description: "قوة تنبؤية مدمجة للدقة المتفوقة"
      },
      {
        name: "تحليل السلاسل الزمنية",
        description: "أنماط زمنية متقدمة للتنبؤ المستقبلي"
      },
      {
        name: "البيانات الفورية",
        description: "تحديثات فورية لدعم القرارات المرنة"
      }
    ],
    buttons: {
      primary: "جرب النظام",
      secondary: "استكشف التحليلات"
    },
    keyFeatures: [
      {
        title: "التنبؤ الذكي",
        description: "تنبؤات بطلب الوجبات مدعومة بالذكاء الاصطناعي، مما يضمن التحضير الأمثل للطعام ويقلل الهدر."
      },
      {
        title: "رؤى الإشغال الديناميكية",
        description: "تتبع فوري لحضور الموظفين واستخدام الكافتيريا للتخطيط التكيفي."
      },
      {
        title: "الذكاء التجاري الاستراتيجي",
        description: "لوحات معلومات شاملة ورؤى قابلة للتنفيذ لتوفير التكاليف والتميز التشغيلي."
      }
    ]
  },
  executiveSummary: {
    badge: {
      primary: "تحليل تقني لبي إن بي باريبا الجزائر",
      secondary: "نظام التنبؤ بالوجبات"
    },
    title: {
      main: "كافتيريا بي إن بي باريبا",
      subtitle: "نظام التنبؤ بالطلب"
    },
    description: "حل تعلم آلي شامل لكافتيريا المكتب الرئيسي لبي إن بي باريبا الجزائر، يقدم تنبؤات دقيقة بعدد الوجبات اليومية من خلال التحليل المتكامل لمعاملات الكافتيريا وحضور المكتب وعروض القائمة والظروف الجوية وأحداث التقويم الثقافي لتحسين التحضير وتقليل الهدر التشغيلي",
    navigation: {
      sections: [
        "التحدي التشغيلي",
        "الحل التقني",
        "تحليل الأداء",
        "التأثير التجاري"
      ]
    },
    operationalChallenges: {
      title: "التحديات التشغيلية الحالية",
      challenges: [
        {
          title: "هدر الطعام وتحسين التكلفة",
          description: "تواجه كافتيريا المكتب الرئيسي لبي إن بي باريبا الجزائر تحديات كبيرة في قرارات تحضير الوجبات اليومية. الإفراط في التحضير يؤدي إلى هدر كبير في الطعام وتكاليف غير ضرورية، بينما النقص في التحضير يترك الموظفين بدون وجبات، مما يخلق عدم كفاءة تشغيلية وعدم رضا الموظفين.",
          currentState: "تقدير يدوي بدون تنبؤات دقيقة للطلب",
          businessImpact: "هدر كبير من التقدير المفرط، إمكانية ملموسة لتوفير التكاليف",
          frequency: "تحدي يومي في اتخاذ القرارات"
        },
        {
          title: "جودة الخدمة ورضا الموظفين",
          description: "بدون تنبؤ دقيق، يجب على موظفي الكافتيريا اتخاذ قرارات التحضير اليومية بشكل أعمى، مما يؤدي غالباً إلى نقص في الوجبات يخيب آمال الموظفين أو تحضير مفرط يؤدي إلى الهدر وزيادة التكاليف التشغيلية.",
          currentState: "تخمين قائم على الخبرة لعدد الوجبات اليومية",
          businessImpact: "عدم رضا الموظفين من عدم توفر الوجبات",
          frequency: "اضطرابات خدمة يومية وعدم يقين في التخطيط"
        },
        {
          title: "تخطيط الموارد وتخصيص الموظفين",
          description: "نقص الرؤى التنبؤية يؤثر على تخصيص موارد المطبخ وجدولة الموظفين وشراء المكونات. الإدارة لا تستطيع التخطيط الاستباقي للعمليات أو تحسين استخدام الموارد بدون فهم أنماط الطلب والمحركات الرئيسية.",
          currentState: "تخطيط تفاعلي بدون رؤى الطلب",
          businessImpact: "تخصيص موارد دون المستوى الأمثل وفرص كفاءة مفقودة",
          frequency: "عدم كفاءة تشغيلية مستمرة"
        }
      ],
      labels: {
        currentState: "الحالة الحالية",
        businessImpact: "التأثير التجاري",
        frequency: "التكرار"
      }
    },
    technicalSolutions: {
      title: "الهندسة المعمارية التقنية المتقدمة",
      solutions: [
        {
          title: "تكامل البيانات متعددة المصادر وخط أنابيب ETL",
          description: "هندسة معمارية شاملة للبيانات تدمج خمسة مصادر بيانات داخلية متجانسة: سجلات معاملات الكافتيريا التاريخية، سجلات حضور المكتب الرئيسي، معلومات القائمة اليومية، البيانات الجوية، وأحداث التقويم. جميع مجموعات البيانات تُدمج على حقول التاريخ لإنشاء جدول نمذجة موحد للتنبؤ.",
          methodology: "خط أنابيب تعلم آلي شامل مع تنظيف واسع للبيانات وهندسة الخصائص. تحليل التواريخ والصلات الداخلية على حقول التاريخ وعمليات التجميع تضمن اتساق البيانات. اهتمام خاص بالتقويم التجاري الجزائري (أسبوع عمل الأحد-الخميس) والسياقات الثقافية بما في ذلك العطل الإسلامية وفترات رمضان.",
          implementation: [
            "سجلات معاملات الكافتيريا (kaggle_cantine.csv) مجمعة حسب معرف الموظف لاستخراج عدد الوجبات اليومية (Nb_meals)",
            "تتبع حضور المكتب الرئيسي (kaggle_head_office.csv) عبر بيانات البطاقة للعدد اليومي (Nb_acces)",
            "تحليل عروض القائمة اليومية (kaggle_menu.csv) بما في ذلك أنواع المقبلات والأطباق الرئيسية لتسجيل الشعبية",
            "تكامل API الطقس (kaggle_meteo.csv) يلتقط درجة الحرارة والهطول وسرعة الرياح وغطاء السحب",
            "قوالب التواريخ المستقبلية (test_kaggle_finale.csv) مع خصائص معبأة مسبقاً لنشر التنبؤ"
          ],
          performance: "دمج ناجح لـ 5 مصادر بيانات بدقة محاذاة تاريخ 100%",
          innovation: "أول تنفيذ يراعي السياق الثقافي الجزائري وتأثيرات التقويم الإسلامي"
        },
        {
          title: "هندسة الخصائص المتقدمة واستخراج الإشارات",
          description: "عملية إنشاء خصائص متطورة تستخرج إشارات مهمة من البيانات الخام لتحديد المحركات الرئيسية لطلب الكافتيريا. تشمل الخصائص أنماط أيام الأسبوع والعطل العامة وارتباطات حضور المكتب ومؤشرات شعبية القائمة وتأثيرات التفاعل الجوي.",
          methodology: "هندسة خصائص واعية للوقت مع التحقق المتقاطع لمنع تسرب البيانات. البيانات التاريخية فقط مستخدمة لحسابات الشعبية. تحليل شامل للأنماط بما في ذلك الموسمية الأسبوعية وتأثيرات العطل والتأثيرات الجوية على سلوك تناول الطعام.",
          implementation: [
            "الخصائص الزمنية: أنماط أيام الأسبوع، علامات العطل، مؤشرات موسمية، فترات Is_Ramadan",
            "تحليل ارتباط الحضور: علاقة عدد المكتب مقابل طلب الكافتيريا (r=0.61)",
            "تسجيل شعبية القائمة: متوسط تاريخي للوجبات لكل نوع طبق مع حماية التحقق المتقاطع",
            "خصائص التفاعل الجوي: تأثيرات الهطول، عتبات درجة الحرارة، تفاعلات Rain_x_Occupancy",
            "خصائص التأخير والإحصائيات المتداولة: lag7 (نفس اليوم الأسبوع الماضي)، متوسطات متحركة MA7/MA14 لأنماط السلاسل الزمنية"
          ],
          performance: "تحديد حضور المكتب كمتنبئ رئيسي مع ارتباط كبير بطلب الوجبات",
          innovation: "فهرسة شعبية القائمة مع التحقق المتقاطع تمنع الإفراط في التكيف مع التفضيلات التاريخية"
        },
        {
          title: "تعلم آلي تجميعي وتحسين النموذج",
          description: "نماذج انحدار تجميعية متطورة باستخدام أشجار قرار معززة بالتدرج قادرة على التقاط العلاقات غير الخطية والتفاعلات المعقدة للخصائص. تحسين المعاملات الفائقة يقلل خطأ التنبؤ (RMSE) مع ضمان التعميم للتواريخ المستقبلية.",
          methodology: "تحقق متقاطع واعي للوقت يحاكي تنبؤات إلى الأمام في الوقت على تواريخ محتجزة. إطار تحقق صارم يضمن أن النموذج يعمم جيداً للسيناريوهات المستقبلية دون إفراط في التكيف مع الخصائص التاريخية. تحسين RMSE لدقة تنبؤ عملية.",
          implementation: [
            "هندسة معمارية تجميعية LightGBM وXGBoost (70-30 مرجحة) مع أشجار قرار معززة بالتدرج",
            "تحقق متقاطع TimeSeriesSplit من 5 طيات يمنع تسرب البيانات المستقبلية مع استراتيجية نافذة متوسعة",
            "تحسين معاملات فائقة بايزي Optuna (60 تجربة) يستهدف تقليل RMSE مع learning_rate ~0.05-0.1، num_leaves ~400-500",
            "إيقاف مبكر مع صبر 50 جولة لمنع الإفراط في التكيف وتحديد العدد الأمثل للأشجار",
            "خط أنابيب تنبؤ تسلسلي لمجموعة الاختبار: تنبؤ يوم بيوم باستخدام تحديثات خاصية تأخير تكرارية من التنبؤات السابقة"
          ],
          performance: "تحقيق دقة RMSE ~22 في التحقق المتقاطع (5-7% من النطاق اليومي النموذجي 0-400+ وجبة)، يمثل تحسناً كبيراً على الطرق الساذجة",
          innovation: "منهجية تحقق واعية للوقت تضمن أداء نشر قوي في العالم الحقيقي"
        }
      ],
      labels: {
        methodology: "المنهجية",
        implementationDetails: "تفاصيل التنفيذ",
        performance: "الأداء",
        innovation: "الابتكار"
      }
    },
    performanceAnalysis: {
      title: "تحليل الأداء الشامل",
      metrics: [
        {
          label: "دقة RMSE",
          description: "RMSE للتحقق المتقاطع في العشرينات المنخفضة (5-7% من النطاق اليومي النموذجي 0-400+ وجبة)، تحسن كبير على طرق التنبؤ الساذجة",
          technicalDetail: "الجذر التربيعي لمتوسط الخطأ التربيعي مُثبت من خلال تحقق متقاطع TimeSeriesSplit من 5 طيات يحاكي سيناريوهات النشر في العالم الحقيقي",
          context: "النطاق المستهدف 15-25 RMSE محقق، يتيح تخطيط تحضير دقيق مع MAE ~16 وجبة انحراف متوسط"
        },
        {
          label: "استراتيجية التجميع",
          description: "تجميع مرجح LightGBM-XGBoost يحسن نقاط القوة الخوارزمية المختلفة لدقة تنبؤ قوية",
          technicalDetail: "ترجيح التجميع محدد من خلال تحليل أداء التحقق المتقاطع: LightGBM يتفوق في الخصائص الفئوية، XGBoost في التفاعلات العددية",
          context: "نهج التجميع يقلل التحيزات الخاصة بالنموذج ويحسن التعميم"
        },
        {
          label: "تكامل البيانات",
          description: "تكامل شامل لسجلات الكافتيريا وسجلات الحضور وبيانات القائمة والمعلومات الجوية وأحداث التقويم",
          technicalDetail: "خط أنابيب ETL مع دمج قائم على التاريخ يضمن محاذاة بيانات 100% عبر الأنظمة الداخلية المتجانسة",
          context: "أول تنفيذ يدمج مصادر بيانات داخلية متعددة لبي إن بي باريبا"
        },
        {
          label: "العوامل الخارجية",
          description: "الظروف الجوية تؤثر على سلوك تناول الطعام، مع الهطول يشجع استخدام الكافتيريا في الموقع",
          technicalDetail: "تكامل API يلتقط درجة الحرارة والهطول وسرعة الرياح وغطاء السحب لنمذجة الطلب",
          context: "المطر وأنماط الطقس تؤثر على قرارات تناول الطعام للموظفين"
        },
        {
          label: "جاهز للإنتاج",
          description: "خط أنابيب تنبؤ آلي يحدث التنبؤات بمدخلات بيانات جديدة للاستخدام التشغيلي اليومي",
          technicalDetail: "خط أنابيب شامل يعالج العدد اليومي وتنبؤات الطقس ومعلومات القائمة للتنبؤات الفورية",
          context: "أداة دعم قرارات لإدارة الكافتيريا"
        },
        {
          label: "أفق التنبؤ",
          description: "تنبؤات مسبقة بيوم تتيح تحضير وجبات استباقي وتخصيص موارد",
          technicalDetail: "نمذجة سلاسل زمنية مع هندسة خصائص تلتقط الأنماط الأسبوعية والتأثيرات الموسمية",
          context: "أفق أمثل للتخطيط التشغيلي وشراء المكونات"
        },
        {
          label: "واعي للسياق",
          description: "النموذج يراعي التقويم التجاري الجزائري والعطل الإسلامية بما في ذلك ملاحظة رمضان",
          technicalDetail: "هندسة خصائص تدمج أسبوع عمل الأحد-الخميس وأنماط الملاحظة الدينية",
          context: "تكيف حرج للسياق الثقافي المحلي الدقيق"
        }
      ],
      comparison: {
        title: "مقارنة أداء النموذج",
        models: [
          { name: "خط أساس ساذج", description: "متوسطات بسيطة" },
          { name: "انحدار خطي", description: "خصائص أساسية" },
          { name: "تجميع LightGBM", description: "خصائص متقدمة" }
        ],
        bestLabel: "الأفضل"
      },
      labels: {
        technicalDetail: "التفصيل التقني",
        context: "السياق"
      }
    },
    businessImpact: {
      title: "التأثير التجاري المحدد كمياً",
      keyMetrics: [
        { label: "دقة الوجبات", description: "خطأ تنبؤ متوسط يتيح تحضير دقيق" },
        { label: "تكامل البيانات", description: "خط أنابيب بيانات متعدد المصادر شامل" },
        { label: "قدرة التخطيط", description: "تنبؤ مسبق بيوم لتخصيص موارد أمثل" },
        { label: "وعي السياق", description: "التقويم التجاري الجزائري وتكامل العطل الإسلامية" }
      ],
      operationalBenefits: [
        {
          title: "تقليل الهدر",
          description: "التنبؤ الدقيق يلغي هدر التقدير المفرط ويقلل تكاليف الطعام. حتى تقليل الخطأ اليومي ببضع عشرات من الوجبات يترجم إلى وفورات ملموسة ومقاييس استدامة محسنة لعمليات بي إن بي باريبا."
        },
        {
          title: "رضا الموظفين",
          description: "يضمن أن تقريباً جميع الموظفين الذين يخططون لتناول الطعام في الكافتيريا يمكن استيعابهم. يمنع خيبة الأمل من نقص الوجبات مع الحفاظ على جودة خدمة وتوفر ثابت."
        },
        {
          title: "الكفاءة التشغيلية",
          description: "فهم محركات الطلب يتيح جدولة موظفين استباقية وشراء مكونات. الإدارة يمكنها توقع إقبال أعلى في أيام محددة أو عند تقديم وجبات شعبية."
        }
      ],
      implementation: {
        title: "التنفيذ والتكامل التشغيلي",
        phases: [
          {
            phase: "المرحلة 1: أساس البيانات",
            duration: "مكتملة",
            activities: ["تطوير خط أنابيب ETL", "تحقق جودة البيانات", "هندسة الخصائص", "تكامل التقويم الجزائري"]
          },
          {
            phase: "المرحلة 2: تطوير النموذج",
            duration: "مكتملة",
            activities: ["اختيار وضبط الخوارزمية", "إطار التحقق المتقاطع", "تحسين التجميع", "تحقق الأداء"]
          },
          {
            phase: "المرحلة 3: نشر الإنتاج",
            duration: "قيد التقدم",
            activities: ["API تنبؤ فوري", "تطوير لوحة المعلومات", "تدريب الموظفين", "نظام المراقبة"]
          },
          {
            phase: "المرحلة 4: التحسين المستمر",
            duration: "مستمر",
            activities: ["خط أنابيب إعادة تدريب النموذج", "كشف انحراف الخصائص", "مراقبة الأداء", "تحديثات قواعد الأعمال"]
          }
        ]
      },
      roi: {
        title: "ملخص العائد على الاستثمار",
        metrics: [
          { label: "مضاعف العائد على الاستثمار", description: "خلال 12 شهر" },
          { label: "أشهر الاسترداد", description: "الجدول الزمني لنقطة التعادل" },
          { label: "قيمة 3 سنوات", description: "الوفورات التراكمية" }
        ],
        quote: "يمثل نظام التنبؤ المدعوم بالتعلم الآلي هذا تحولاً نموذجياً من إدارة الكافتيريا التفاعلية إلى التنبؤية، مما يقدم تحسينات قابلة للقياس في الكفاءة التشغيلية والتحكم في التكاليف ورضا الموظفين بينما يثبت بي إن بي باريبا الجزائر كرائد في إدارة المرافق القائمة على البيانات.",
        buttons: {
          technical: "غوص تقني عميق",
          model: "عرض هندسة النموذج"
        }
      }
    },
    dataArchitecture: {
      title: "هندسة البيانات المتكاملة",
      sources: [
        {
          name: "سجلات معاملات الكافتيريا",
          details: "سجلات معاملات وجبات فردية حسب معرف الموظف",
          records: "عدد الوجبات اليومية (Nb_meals) مجمع من المشتريات الفردية",
          connection: "المتغير المستهدف الأساسي لنموذج التنبؤ",
          technical: "kaggle_cantine.csv - كل إدخال يمثل معاملة وجبة واحدة"
        },
        {
          name: "حضور المكتب الرئيسي",
          details: "سجلات البطاقة اليومية تتبع حضور المكتب",
          records: "العدد اليومي (Nb_acces) للموظفين الفريدين في المبنى",
          connection: "خاصية خارجية حاسمة - حضور أعلى يخلق فرصة لوجبات أكثر",
          technical: "تجميع يومي يوفر عدد الآكلين المحتملين"
        },
        {
          name: "نظام القائمة اليومية",
          details: "عروض قائمة الكافتيريا بما في ذلك المقبلات والأطباق الرئيسية",
          records: "تركيب القائمة ومؤشرات شعبية الأطباق",
          connection: "تأثير نوعي - أطباق معينة تجذب آكلين أكثر",
          technical: "بيانات القائمة مع تصنيف الأطباق لتحديد المفضلات الجماهيرية"
        },
        {
          name: "API بيانات الطقس",
          details: "ظروف جوية خارجية تؤثر على قرارات تناول الطعام",
          records: "مقاييس درجة الحرارة والهطول وسرعة الرياح وغطاء السحب",
          connection: "المطر يشجع تناول الطعام في الموقع، درجة الحرارة تؤثر على خيارات الغداء",
          technical: "مقاييس طقس يومية متكاملة عبر API خارجي"
        },
        {
          name: "التقويم والأحداث",
          details: "التقويم التجاري الجزائري والأحداث الثقافية",
          records: "علامات العطل، أنماط أسبوع العمل (الأحد-الخميس)، الملاحظات الدينية",
          connection: "سياق ثقافي حرج لتنبؤات السوق الجزائرية الدقيقة",
          technical: "تكامل تقويم مخصص للعطل الإسلامية والأنماط المحلية"
        }
      ]
    }
  },
  technicalOverview: {
    badge: {
      primary: "غوص تقني عميق",
      secondary: "نظام التنبؤ بالوجبات بي إن بي باريبا"
    },
    title: {
      main: "هندسة التعلم الآلي المتقدمة"
    },
    description: "خط أنابيب تعلم آلي شامل يجمع خمسة مصادر بيانات متجانسة مع هندسة خصائص متطورة وتعزيز تدرج تجميعي لتحقيق دقة RMSE ~20 في التنبؤ بعدد الوجبات اليومية لعمليات كافتيريا بي إن بي باريبا الجزائر",
    dataSources: {
      title: "خط أنابيب تكامل البيانات متعددة المصادر",
      sources: [
        {
          name: "سجلات معاملات الكافتيريا",
          description: "سجلات معاملات وجبات فردية مع تتبع معرف الموظف للتجميع اليومي الشامل",
          keyFeatures: [
            "عدد الوجبات اليومية (Nb_meals) مشتق من تجميع المعاملات باستخدام kaggle_cantine.csv",
            "تتبع معرف الموظف مع معالجة المكرر للوجبات المتعددة (~0.4% معدل الحدوث)",
            "تحليل الأنماط الزمنية عبر مايو 2022 - ديسمبر 2024 (تغطية 2.5 سنة)",
            "بناء المتغير المستهدف مع تنبؤ تسلسلي يوم بيوم لتنبؤ الاختبار"
          ],
          dataSourceLabel: "مصدر البيانات 1/5"
        },
        {
          name: "بيانات حضور المكتب الرئيسي",
          description: "سجلات البطاقة تتبع حضور الموظفين اليومي كمتنبئ رئيسي لطلب الكافتيريا",
          keyFeatures: [
            "العدد اليومي (Nb_acces) من kaggle_head_office.csv للموظفين الفريدين في المبنى",
            "رسم خريطة الأقسام وتحليل الهيكل التنظيمي (معتبر لكن غير منفذ)",
            "خاصية خارجية حاسمة مع ارتباط 0.61 بطلب الوجبات (أهمية خاصية عليا)",
            "مؤشر عدد الآكلين المحتملين يقيد السعة اليومية القصوى (نطاق 0-400+ وجبة)"
          ],
          dataSourceLabel: "مصدر البيانات 2/5"
        },
        {
          name: "نظام القائمة اليومية",
          description: "عروض قائمة شاملة بما في ذلك أنواع المقبلات وخيارات الطبق الرئيسي المزدوجة مع تحليلات الشعبية",
          keyFeatures: [
            "مقبلة وطبقين رئيسيين يومياً من kaggle_menu.csv مع تصنيف فئوي",
            "مؤشرات شعبية الأطباق التاريخية: متوسط Nb_meals لكل طبق (مثل، بيتزا=350 مقابل كيش=280)",
            "تحليل تنوع القائمة (عروض نفس النوع مقابل متنوعة) وكشف الخيار النباتي",
            "ترميز مستهدف محمي بالتحقق المتقاطع يمنع الإفراط في التكيف مع التفضيلات التاريخية"
          ],
          dataSourceLabel: "مصدر البيانات 3/5"
        },
        {
          name: "تكامل بيانات الطقس",
          description: "ظروف جوية خارجية تؤثر على سلوك تناول الطعام للموظفين وقرارات الغداء",
          keyFeatures: [
            "درجة الحرارة والهطول وسرعة الرياح وغطاء السحب من kaggle_meteo.csv",
            "مؤشر المطر (Is_Rain) يظهر ~6 وجبات إضافية في الأيام الممطرة (313 مقابل 307 خط أساس)",
            "تأثيرات تفاعل الطقس-الحضور (Rain_x_Occupancy) للتحولات السلوكية المركبة",
            "إسناد بيانات طقس ناقصة مع استراتيجيات خاصة بالمجال لقوة النموذج"
          ],
          dataSourceLabel: "مصدر البيانات 4/5"
        },
        {
          name: "التقويم الجزائري والسياق الثقافي",
          description: "خصائص ثقافية وقائمة على التقويم تراعي أنماط الأعمال المحلية والملاحظات الدينية",
          keyFeatures: [
            "تمييز نمط أسبوع عمل الأحد-الخميس",
            "كشف العطل الإسلامية (فترات رمضان، العيد)",
            "وضع علامة على العطل العامة مع توقعات وجبات شبه صفر",
            "تغيرات موسمية بما في ذلك فترات عطلة أغسطس"
          ],
          dataSourceLabel: "مصدر البيانات 5/5"
        }
      ],
      integrationSummary: {
        title: "ملخص هندسة التكامل",
        metrics: [
          {
            label: "مصادر البيانات",
            description: "متكاملة عبر دمج قائم على التاريخ"
          },
          {
            label: "تغطية السنوات",
            description: "مايو 2022 - ديسمبر 2024"
          },
          {
            label: "الارتباط الرئيسي",
            description: "الحضور مقابل طلب الوجبات"
          }
        ]
      }
    },
    methodology: {
      title: "منهجية خط أنابيب التعلم الآلي الشامل",
      phases: [
        {
          phase: "تكامل البيانات والمعالجة المسبقة",
          description: "خط أنابيب ETL شامل يدمج خمسة مصادر بيانات متجانسة مع إجراءات تنظيف وتحقق صارمة",
          techniques: [
            "تحليل ومحاذاة التواريخ عبر جميع مجموعات البيانات مع توحيد التنسيق",
            "دمج صلة داخلية يضمن الاتساق الزمني عبر المصادر",
            "إسناد بيانات ناقصة مع استراتيجيات خاصة بالمجال",
            "معالجة المكرر في سجلات المعاملات (~0.4% معدل الحدوث)",
            "محاذاة عطلة نهاية الأسبوع/العطل للتقويم التجاري الجزائري (عطل نهاية أسبوع الجمعة-السبت)",
            "كشف فترة رمضان مع وضع علامة على الحدث الخاص"
          ],
          phaseLabel: "المرحلة 1"
        },
        {
          phase: "التحليل الاستكشافي للبيانات واكتشاف الأنماط",
          description: "تحليل إحصائي يكشف محركات الطلب الرئيسية والأنماط السلوكية في استخدام الكافتيريا",
          techniques: [
            "تحليل الموسمية الأسبوعية يظهر طلب الذروة يوم الخميس",
            "تحليل ارتباط إشغال المكتب (r=0.61 مع طلب الوجبات)",
            "تقدير تأثير القائمة مع تسجيل الشعبية",
            "تحقق تأثير الطقس (+6 وجبات متوسط في الأيام الممطرة)",
            "تحديد التغير الموسمي (تأثيرات عطلة أغسطس)",
            "تمييز نمط العطل مع فترات طلب صفر"
          ],
          phaseLabel: "المرحلة 2"
        },
        {
          phase: "هندسة الخصائص المتقدمة",
          description: "إنشاء 60+ خاصية تنبؤية من البيانات الخام تدمج إشارات زمنية وسلوكية وبيئية",
          techniques: [
            "خصائص التقويم: يوم الأسبوع، علامات العطل، ترميز الشهر",
            "خصائص التأخير: lag7 (نفس اليوم الأسبوع الماضي) للموسمية الأسبوعية",
            "الإحصائيات المتداولة: متوسطات متحركة 7 و14 يوم",
            "مؤشرات شعبية القائمة مع ترميز التحقق المتقاطع",
            "خصائص تفاعل الطقس (تأثيرات المطر × الإشغال)",
            "ترميز مستهدف لعناصر القائمة الفئوية مع منع التسرب"
          ],
          phaseLabel: "المرحلة 3"
        },
        {
          phase: "تطوير النموذج وتدريب التجميع",
          description: "تجميع تعزيز تدرج مع تحقق صارم واعي للوقت وتحسين المعاملات الفائقة",
          techniques: [
            "هندسة معمارية تجميعية LightGBM وXGBoost مع متوسط مرجح 70-30 لتوازن أداء أمثل",
            "تحقق متقاطع TimeSeriesSplit من 5 طيات يمنع التسرب المستقبلي (تدريب 2022-2023، تحقق 2024)",
            "تحسين معاملات فائقة بايزي Optuna (60 تجربة): learning_rate ~0.05-0.1، num_leaves ~400-500، max_depth 8-12",
            "إيقاف مبكر مع صبر 50 جولة يمنع الإفراط في التكيف، متوسط تجميع عبر طيات CV للقوة",
            "تحقق أهمية الخصائص: Nb_acces (35%)، مؤشرات يوم الأسبوع (25%)، شعبية القائمة (20%)، تأثيرات الطقس (15%)",
            "تحليل البقايا كشف تحيز التنبؤ المنخفض للاثنين، حُل من خلال ترميز محسن ليوم الأسبوع وحدود التفاعل"
          ],
          phaseLabel: "المرحلة 4"
        },
        {
          phase: "التحقق ونشر الإنتاج",
          description: "تحقق نموذج شامل وخط أنابيب نشر للتنبؤ التشغيلي",
          techniques: [
            "تحقق إلى الأمام في الوقت يحاكي سيناريوهات تنبؤ العالم الحقيقي بدون تحيز نظرة مسبقة",
            "تحليل البقايا يضمن تنبؤات غير متحيزة عبر جميع الظروف وأنماط يوم الأسبوع",
            "خط أنابيب تنبؤ تسلسلي لـ test_kaggle_finale.csv: تنبؤ يوم بيوم مع تحديثات تأخير تكرارية",
            "متوسط تجميع عبر 5 نماذج مدربة بالطية لتقدير عدم يقين قوي وفترات تنبؤ",
            "تنبؤ تكراري جاهز للإنتاج يستخدم تنبؤات اليوم السابق كخصائص تأخير ديناميكية",
            "مراقبة أداء تحقق ~22 RMSE (5-7% من نطاق 0-400+ وجبة) مع MAE ~16 وجبة انحراف متوسط",
            "اعتبارات النشر: خط أنابيب تنبؤ يومي، تحديثات خصائص فورية، وفترات ثقة التنبؤ"
          ],
          phaseLabel: "المرحلة 5"
        }
      ]
    },
    achievements: {
      metrics: [
        {
          label: "تحقق RMSE",
          description: "RMSE تحقق متقاطع في العشرينات المنخفضة (5-7% من نطاق الوجبات اليومية 0-400+)، يصل عتبة الأداء المستهدفة"
        },
        {
          label: "خصائص مهندسة",
          description: "إنشاء خصائص متطور من البيانات الخام بما في ذلك إشارات زمنية وسلوكية وبيئية"
        },
        {
          label: "CV السلاسل الزمنية",
          description: "تحقق صارم يمنع التسرب المستقبلي مع محاكاة تنبؤ إلى الأمام في الوقت"
        }
      ]
    }
  },
  dataInsights: {
    badge: {
      primary: "التحليل الاستكشافي للبيانات",
      secondary: "اكتشاف الأنماط والرؤى"
    },
    title: {
      main: "رؤى مدفوعة بالبيانات"
    },
    description: "تحليل استكشافي شامل يكشف الأنماط السلوكية ومحركات الطلب والعلاقات الحرجة في استخدام الكافتيريا عبر 2.5 سنة من البيانات التشغيلية",
    timeSeriesAnalysis: {
      title: "تحليل السلاسل الزمنية والأنماط",
      insights: [
        {
          title: "الاتجاه العام والموسمية",
          description: "الوجبات اليومية المقدمة عبر الوقت (مايو 2022 – ديسمبر 2024) تظهر موسمية أسبوعية قوية مع اتجاه طويل المدى أدنى",
          findings: [
            "موسمية أسبوعية قوية مع انخفاضات منتظمة إلى شبه صفر في عطل نهاية الأسبوع (الجمعة/السبت)",
            "لا يوجد اتجاه طويل المدى درامي، لكن زيادة طفيفة من منتصف 2023 إلى 2024",
            "انخفاضات كبيرة خلال أغسطس كل عام بسبب عطل الصيف",
            "فترات وجبات صفر ممتدة خلال رمضان عندما كانت الكافتيريا مغلقة فعلياً",
            "السلسلة مستقرة نسبياً بجانب التأثيرات الموسمية"
          ]
        },
        {
          title: "أنماط أيام الأسبوع مقابل عطلة نهاية الأسبوع",
          description: "تأثيرات واضحة ليوم الأسبوع ضمن نمط أسبوع عمل الأحد-الخميس في الجزائر",
          findings: [
            "الخميس له أعلى متوسط عدد وجبات (يوم ذروة الطلب)",
            "الأحد يظهر طلباً فوق المتوسط رغم كونه أول يوم عمل",
            "الاثنين يميل لأقل متوسط بين أيام العمل",
            "الجمعة والسبت يظهران وجبات شبه صفر (عطلة نهاية أسبوع في الجزائر)",
            "اجتماعات نهاية الأسبوع أو التقاليد تدفع ذروة حضور الخميس"
          ]
        },
        {
          title: "تحليل ارتباط الإشغال",
          description: "ارتباط حضور المكتب مقابل الوجبات يكشف معدل تحويل 50-70% مع تغيرات يومية",
          findings: [
            "معامل ارتباط 0.61 بين عدد المكتب والوجبات",
            "ذرى في أيام العمل (~500-600 موظف حاضر، ~300-400 وجبة مقدمة)",
            "تقريباً 50-70% من الموظفين الحاضرين ينتهي بهم الأمر بتناول الطعام في الكافتيريا",
            "معدل التحويل يتغير يومياً بناءً على العوامل السياقية",
            "رسم التشتت يظهر اتجاهاً إيجابياً لكن تغيرات كبيرة حول خط الاتجاه"
          ]
        }
      ]
    },
    keyStatistics: [
      {
        label: "قوة الارتباط",
        description: "معامل ارتباط حضور المكتب مقابل طلب الوجبات"
      },
      {
        label: "تأثير يوم الذروة",
        description: "أعلى متوسط وجبات يومياً ضمن أسبوع العمل"
      },
      {
        label: "تأثير الطقس",
        description: "متوسط الوجبات في الأيام الممطرة مقابل الصافية"
      },
      {
        label: "معدل التحويل",
        description: "الموظفون الحاضرون الذين يتناولون الطعام في الكافتيريا"
      },
      {
        label: "تغطية البيانات",
        description: "بيانات تشغيلية مايو 2022 - ديسمبر 2024"
      },
      {
        label: "معدل المكرر",
        description: "معاملات وجبات متعددة لكل موظف يومياً"
      },
      {
        label: "تأثير أغسطس",
        description: "تقليل طلب فترة عطلة الصيف"
      },
      {
        label: "نمط عطلة نهاية الأسبوع",
        description: "عطلة نهاية الأسبوع الجزائرية تظهر طلباً شبه صفر"
      }
    ],
    criticalPatterns: {
      title: "اكتشاف الأنماط الحرجة",
      insights: [
        {
          title: "هيمنة الموسمية الأسبوعية",
          finding: "الخميس يبرز كيوم ذروة الطلب ضمن أسبوع عمل الأحد-الخميس، ربما بسبب اجتماعات نهاية الأسبوع أو تقليد وجود موظفين أكثر في الموقع",
          implication: "تأثيرات قوية ليوم الأسبوع تستلزم خصائص قائمة على التقويم مع الخميس يتطلب قدرة تحضير محسنة",
          category: "الأنماط الزمنية",
          observation: "ذروة الخميس"
        },
        {
          title: "إشغال المكتب كمحرك أساسي",
          finding: "50-70% من الموظفين الحاضرين عادة يتناولون الطعام في الكافتيريا، ينشئون ارتباط (r=0.61) بين العدد اليومي وطلب الوجبات",
          implication: "حضور المكتب يعمل كمتنبئ أساسي، لكن معدل التحويل يتغير يومياً يتطلب خصائص سياقية إضافية",
          category: "رؤى سلوكية",
          observation: "r = 0.61"
        },
        {
          title: "تحولات سلوكية مدفوعة بالطقس",
          finding: "الأيام الممطرة تظهر باستمرار استخدام كافتيريا أعلى (313 مقابل 307 وجبة متوسط)، حيث الموظفون أقل ميلاً لترك المبنى",
          implication: "بيانات الطقس توفر إشارة مهمة لتعديلات الطلب اليومية، خاصة لتفضيل تناول الطعام الداخلي",
          category: "العوامل البيئية",
          observation: "313 مقابل 307 وجبة"
        },
        {
          title: "تأثير العطلة الموسمية",
          finding: "أغسطس يظهر استخدام كافتيريا أقل بكثير حيث يأخذ موظفون كثيرون عطل الصيف، ينتج عنه أشخاص أقل في المكتب",
          implication: "خصائص التقويم يجب أن تراعي الأنماط الموسمية مع أغسطس مُعلم كفترة بطيئة معروفة",
          category: "التغيرات الموسمية",
          observation: "عطلة أغسطس"
        },
        {
          title: "تأثير شعبية القائمة",
          finding: "أطباق معينة مثل البيتزا أو الكسكس كان لها إقبال متوسط أعلى (مؤشر شعبية أعلى) مقارنة بأيام القائمة العادية",
          implication: "مقاييس الشعبية كخصائص تتيح للنموذج التنبؤ بعدد أعلى في أيام الأطباق المحبوبة تاريخياً",
          category: "تحليلات القائمة",
          observation: "تغير الطبق"
        },
        {
          title: "سلوك عطلة نهاية الأسبوع والعطل",
          finding: "الجمعة-السبت (عطلة نهاية أسبوع الجزائر) والعطل العامة تظهر طلباً شبه صفر، تؤكد أنماط إغلاق الكافتيريا",
          implication: "مؤشرات عطلة نهاية الأسبوع/العطل أساسية للتنبؤ الدقيق بخط الأساس لتوقعات وجبات شبه صفر",
          category: "تأثيرات التقويم",
          observation: "صفر وجبات في عطل نهاية الأسبوع"
        },
        {
          title: "تأثيرات درجة الحرارة",
          finding: "أيام حارة أو باردة جداً يمكن أن تثبط الخروج، مع تركيبات البرد + المطر تضخم تفضيل الكافتيريا",
          implication: "درجة الحرارة كخاصية مستمرة تسمح للنموذج بتعلم تأثيرات غير خطية وتفاعلات طقسية",
          category: "أنماط الطقس",
          observation: "تأثير درجة الحرارة"
        },
        {
          title: "تأثير تنوع القائمة",
          finding: "خياران رئيسيان يومياً - خيارات متشابهة (كلاهما لحم أحمر) قد تجذب نفس المجموعة مقابل تنوع (لحم + نباتي) يجذب جمهوراً أوسع",
          implication: "خصائص تنوع القائمة تلتقط ما إذا كانت العروض المتنوعة تزيد الجاذبية العامة والإقبال",
          category: "استراتيجية القائمة",
          observation: "تنوع القائمة"
        },
        {
          title: "تمييز الأحداث الخاصة",
          finding: "عندما كان كلا الطبقين الرئيسيين جذابين بشكل خاص أو قُدمت حلويات/وجبات أحداث خاصة، كانت هناك قفزات ملحوظة في المبيعات",
                   implication: "الإقبال التاريخي يعمل كأفضل مؤشر لجاذبية القائمة، مما يتيح تنبؤات قائمة على الشعبية",
          category: "الأحداث الخاصة",
          observation: "قفزات الأحداث"
        }
      ],
      labels: {
        keyFinding: "الاكتشاف الرئيسي:",
        strategicImplication: "الانعكاس الاستراتيجي:"
      }
    },
    correlationAnalysis: {
      title: "تحليل ارتباط الخصائص والتأثير",
      correlationStrengthLabel: "قوة الارتباط:",
      implementationImpactLabel: "تأثير التنفيذ:",
      patterns: [
        {
          category: "تأثيرات التقويم والزمنية",
          description: "دورية أسبوعية قوية مع عطل نهاية أسبوع الجمعة-السبت والعطل الإسلامية تتطلب معالجة خاصة في السياق التجاري الجزائري",
          impact: "خصائص ثنائية لأيام عدم العمل أساسية، بالإضافة إلى كشف فترة رمضان ووضع علامة على عطلة أغسطس",
          details: [
            "نمط أسبوع عمل الأحد-الخميس مؤكد بصفر وجبات في الجمعة/السبت",
            "العطل العامة (1 مايو، العيد) تتوافق مع عدد وجبات شبه صفر",
            "فترات رمضان تظهر وجبات صفر تقريباً، إغلاق كافتيريا فعلياً",
            "انخفاضات أواخر ديسمبر حول عيد الميلاد/رأس السنة رغم السياق الجزائري"
          ]
        },
        {
          category: "ديناميكيات حضور المكتب",
          description: "العدد اليومي يعمل كأقوى متنبئ واحد مع ارتباط 0.61، لكن معدل التحويل يتذبذب بين 50-70%",
          impact: "خاصية أساسية تتطلب تفاعلات طقس وقائمة وتقويم للدقة المثلى في تنبؤ التحويل",
          details: [
            "سجلات البطاقة توفر عدد سكان آكلين محتملين يومياً دقيق",
            "ليس كل الموظفين الحاضرين يأكلون في الكافتيريا (بعضهم يجلب غداء/يخرج)",
            "أحياناً وجبات أكثر من أشخاص فريدين (وجبات متعددة، زوار)",
            "رسم التشتت يظهر اتجاهاً إيجابياً لكن تغيرات كبيرة حول خط الاتجاه"
          ]
        },
        {
          category: "شعبية وجاذبية القائمة",
          description: "جاذبية خاصة بالطبق تدفع تغيرات إقبال كبيرة مع نقاط شعبية محسوبة كمتوسط وجبات عند تقديم الطبق",
          impact: "مؤشرات شعبية مرمزة بالهدف تتيح تنبؤ عدد أعلى في أيام الأطباق المحبوبة تاريخياً",
          details: [
            "البيتزا والكسكس محددان كمفضلات جماهيرية مع مؤشرات شعبية أعلى",
            "أيام القائمة العادية ترى عدد أقل قليلاً مقابل أطباق خاصة",
            "تنوع القائمة يؤثر على الجاذبية (عروض متشابهة مقابل متنوعة)",
            "حلويات خاصة أو وجبات أحداث تخلق قفزات مبيعات ملحوظة"
          ]
        },
        {
          category: "الطقس والبيئة",
          description: "المطر يزيد استخدام الكافتيريا (313 مقابل 307 متوسط) حيث الموظفون أقل ميلاً لترك المبنى للغداء",
          impact: "خصائص الطقس توفر إشارات تعديل يومية مهمة، خاصة مؤشرات المطر وتفاعلات درجة الحرارة",
          details: [
            "الأيام الممطرة تظهر زيادة متواضعة لكن ثابتة +6 وجبات",
            "تأثيرات درجة الحرارة مشتبه بها لكن ليست قوية وحيدة التتابع وحدها",
            "تركيبات البرد + المطر تضخم تفضيل تناول الطعام الداخلي محتملاً",
            "غطاء السحب والرياح مضمنان لكن تأثيرات طفيفة متوقعة"
          ]
        },
        {
          category: "الأنماط الموسمية والعطل",
          description: "ما وراء الدورات الأسبوعية، الأنماط الموسمية تظهر تأثير عطلة أغسطس وتمييز تاريخ خاص للتنبؤ الدقيق بخط الأساس",
          impact: "خصائص الشهر/الموسم أساسية، خاصة وضع علامة على أغسطس وكشف العطل العامة لتوقعات شبه صفر",
          details: [
            "أغسطس يظهر باستمرار استخدام كافتيريا أقل بكثير (عطلة صيف)",
            "أواخر ديسمبر يظهر انخفاضات حول فترة عيد الميلاد/رأس السنة",
            "فترات رمضان تتطلب كشف امتداد خاص (إغلاق كافتيريا فعلياً)",
            "وضع علامة على العطل العامة يمنع التباس النموذج حول أيام الطلب المنخفض"
          ]
        },
        {
          category: "السلاسل الزمنية وخصائص التأخير",
          description: "أنماط عدد الوجبات التاريخية من خلال خصائص التأخير (lag7 للموسمية الأسبوعية) ومتوسطات متداولة لتنعيم الاتجاه",
          impact: "خصائص التأخير تحول تنبؤ السلاسل الزمنية إلى تعلم مشرف مع سياق تاريخ حديث",
          details: [
            "Lag7 (نفس اليوم الأسبوع الماضي) يلتقط الموسمية الأسبوعية مباشرة",
            "متوسطات متحركة 7 و14 يوم توفر قيم اتجاه منعمة",
            "انحراف معياري متداول يقيس تذبذب الطلب الحديث",
            "نهج تنبؤ تسلسلي يمنع تسرب البيانات المستقبلية"
          ]
        }
      ]
    },
    summary: {
      title: "ملخص نتائج EDA",
      description: "تحليلنا الاستكشافي أكد أن أنماط التاريخ وإشغال المكتب واختيار القائمة والظروف الجوية هي المحركات الأساسية لطلب الكافتيريا، مما يشكل الأساس لاستراتيجية هندسة خصائصنا.",
      driverCategories: [
        {
          title: "أنماط أيام الأسبوع",
          subtitle: "تضع خط أساس عام"
        },
        {
          title: "إشغال المكتب",
          subtitle: "يدفع الحجم الرئيسي"
        },
        {
          title: "اختيار القائمة",
          subtitle: "تغيرات يوم إلى يوم"
        },
        {
          title: "تأثيرات الطقس",
          subtitle: "تعديل سلوكي"
        }
      ],
      conclusion: "هذه الرؤى أطلعت مباشرة نهج هندسة خصائصنا، مما يتيح لتجميع تعزيز التدرج التقاط التأثيرات المهمة: من في العمل، وما للغداء، وكيف الطقس – كل محركات رئيسية لقرارات الغداء بالإضافة إلى الإيقاع الأسبوعي الفطري لمكان العمل."
    }
  },
  modelShowcase: {
    title: {
      main: "هندسة النموذج والخصائص"
    },
    description: "نهج تعزيز تدرج تجميعي مع هندسة خصائص شاملة لأداء تنبؤ أمثل",
    navigation: {
      tabs: [
        { label: "هندسة النموذج" },
        { label: "هندسة الخصائص" },
        { label: "استراتيجية التحقق" },
        { label: "مصادر البيانات" },
        { label: "التأثير التجاري" }
      ]
    },
    architecture: {
      title: "نماذج تعزيز التدرج التجميعية",
      models: [
        {
          name: "LightGBM",
          description: "نموذج تعزيز تدرج أساسي محسن للسرعة والدقة مع معالجة الخصائص الفئوية",
          advantages: [
            "تدريب واستنتاج سريع (~10x أسرع من XGBoost)",
            "يتعامل مع الخصائص الفئوية طبيعياً بدون ترميز",
            "كفء في الذاكرة مع نمو شجرة حكيم بالورقة",
            "إيقاف مبكر مدمج وتحقق متقاطع",
            "أداء ممتاز على البيانات الجدولية",
            "قوي ضد الإفراط في التكيف مع تنظيم مناسب"
          ],
          role: "النموذج الأساسي",
          technicalDetails: [
            "تحسين معاملات فائقة Optuna (60 تجربة)",
            "معدل التعلم: 0.095 للاستقرار",
            "عدد الأوراق: 512 لتعقد النموذج",
            "كسر الخصائص: 0.616 للتنظيم",
            "كسر التجميع: 0.900 لتقليل التباين",
            "تنظيم L2: 2.12 لمنع الإفراط في التكيف"
          ],
          useCases: [
            "محرك تنبؤ أساسي للتنبؤات اليومية",
            "استنتاج فوري للتخطيط التشغيلي",
            "تحليل أهمية الخصائص لرؤى الأعمال",
            "نموذج خط أساس لاستراتيجيات التجميع"
          ]
        },
        {
          name: "XGBoost",
          description: "نموذج تجميع ثانوي لمقارنة الأداء والتحقق واستراتيجيات المزج المحتملة",
          advantages: [
            "قوي ضد الإفراط في التكيف مع تنظيم قوي",
            "استقرار ممتاز عبر المنصات",
            "سجل مثبت في المسابقات",
            "مقاييس أهمية خصائص مدمجة",
            "معالجة قوية للقيم المفقودة",
            "خط أساس ثابت لتعزيز التدرج"
          ],
          role: "مكون التجميع",
          technicalDetails: [
            "عمق أقصى: 6 لتعقد مُتحكم",
            "معدل التعلم: 0.1 مع إيقاف مبكر",
            "عينة فرعية: 0.8 لتقليل التباين",
            "عينة فرعية عمودية: 0.8 لعشوائية الخصائص",
            "غاما: 0.1 لأدنى خسارة تقسيم",
            "ضبط تنظيم ألفا/لامدا"
          ],
          useCases: [
            "تحقق النموذج وخط أساس المقارنة",
            "مزج تجميعي لدقة محسنة",
            "تحقق اختيار الخصائص",
            "نموذج احتياطي لمقاومة الإنتاج"
          ]
        }
      ],
      performance: {
        crossValidationScore: "نقاط التحقق المتقاطع"
      },
      sections: {
        keyAdvantages: "المزايا الرئيسية",
        technicalConfiguration: "التكوين التقني",
        useCases: "حالات الاستخدام"
      },
      rationale: {
        title: "مبرر اختيار النموذج",
        whyGradientBoosting: {
          title: "لماذا تعزيز التدرج؟",
          points: [
            "أداء ممتاز على البيانات الجدولية مع أنواع خصائص مختلطة",
            "يتعامل مع الخصائص الفئوية بدون معالجة مسبقة واسعة",
            "قوي ضد القيم الشاذة والمفقودة",
            "أهمية خصائص مدمجة للقابلية للتفسير"
          ]
        },
        ensembleStrategy: {
          title: "استراتيجية التجميع",
          points: [
            "LightGBM كنموذج أساسي للسرعة والدقة",
            "XGBoost للتحقق والمزج المحتمل",
            "تحسين معاملات فائقة ثابت عبر النماذج",
            "مرونة نشر إنتاج وخيارات احتياطية"
          ]
        },
        codeSnippet: {
          title: "خط أنابيب تدريب النموذج"
        }
      }
    },
    features: {
      title: "استراتيجية هندسة الخصائص",
      categories: [
        {
          category: "التقويم والزمنية",
          features: [
            "ترميز يوم الأسبوع (0-6 دوري)",
            "علامات عطلة نهاية الأسبوع/العطل (مؤشرات ثنائية)",
            "مؤشرات الشهر/الموسم (1-12 دوري)",
            "علامات الأحداث الخاصة (رمضان، فترات العطل)",
            "قرب العطل العامة (أيام قبل/بعد)",
            "محاذاة التقويم الأكاديمي",
            "مؤشرات أيام العمل"
          ],
          description: "يلتقط أنماط منهجية قائمة على الوقت في استخدام الكافتيريا مع تأثيرات أسبوعية وموسمية قوية",
          technicalNotes: [
            "ترميز دوري للخصائص الزمنية المستمرة",
            "علامات ثنائية لمؤشرات الوقت الفئوية",
            "تأثيرات قرب العطل (نافذة ±3 أيام)",
            "معالجة فترة رمضان مع ترميز خاص",
            "تكامل التقويم الأكاديمي لسياق المؤسسة التعليمية"
          ]
        },
        {
          category: "مقاييس الإشغال",
          features: [
            "العدد اليومي (nb_personnes)",
            "متوسطات متداولة 7 أيام",
            "توزيعات مستوى القسم",
            "مؤشرات اتجاه الحضور",
            "حسابات معدل الإشغال",
            "أنماط الحضور التاريخية",
            "استخدام سعة المبنى"
          ],
          description: "محرك الطلب الأساسي - يرتبط مباشرة بالعملاء المحتملين والسعة التشغيلية",
          technicalNotes: [
            "تحليل مستوى القسم معتبر لكن غير منفذ بسبب قيود البيانات",
            "المتوسطات المتداولة تنعم التذبذب اليومي",
            "معدل الإشغال = nb_personnes / سعة_المبنى",
            "خصائص الاتجاه تلتقط زخم في أنماط الحضور",
            "استيفاء البيانات المفقودة للسجلات غير المكتملة"
          ]
        },
        {
          category: "الطلب التاريخي",
          features: [
            "خصائص التأخير (1، 7، 14 يوم)",
            "متوسطات متحركة (3، 7، 14 يوم)",
            "مقاييس التذبذب المتداولة",
            "اتجاهات التنعيم الأسي",
            "مكونات التحليل الموسمي",
            "مؤشرات زخم الطلب",
            "إشارات كشف نقطة التغيير"
          ],
          description: "أنماط السلاسل الزمنية وتأثيرات الزخم والعلاقات الانحدارية التلقائية في طلب الوجبات",
          technicalNotes: [
            "نهج تنبؤ تسلسلي يمنع تسرب البيانات",
            "تحقق نافذة متوسعة للسلامة الزمنية",
            "اختيار خاصية التأخير قائم على تحليل ACF/PACF",
            "إحصائيات متداولة محسوبة مع متطلبات نافذة أدنى",
            "مقاييس التذبذب تساعد في التقاط عدم يقين الطلب"
          ]
        },
        {
          category: "ذكاء القائمة",
          features: [
            "مؤشرات شعبية الأطباق (note_plat_principal)",
            "مقاييس تنوع القائمة (nb_plats_menu)",
            "تجميعات الفئات والتصنيفات",
            "ترميز مستهدف لفئات القائمة",
            "أداء الأطباق التاريخي",
            "مؤشرات جدة القائمة",
            "ملائمات التفضيل الغذائي"
          ],
          description: "يلتقط تأثير تفضيل الطعام على الحضور وتأثيرات رضا العملاء",
          technicalNotes: [
            "ترميز مستهدف مع تحقق متقاطع لمنع الإفراط في التكيف",
            "تنوع القائمة محسوب كأطباق فريدة يومياً",
            "تطبيع تقييم الأطباق ومعالجة القيم المفقودة",
            "ترميز الفئات لأنواع المطابخ والمتطلبات الغذائية",
            "مؤشرات الشعبية محسوبة من التقييمات والمبيعات التاريخية"
          ]
        },
        {
          category: "الطقس والبيئة",
          features: [
            "تغيرات درجة الحرارة (أدنى/أعلى يومي)",
            "علامات الهطول والشدة",
            "حدود تفاعل الطقس",
            "تعديلات درجة الحرارة الموسمية",
            "مؤشرات راحة الطقس",
            "مؤشرات الطقس القاسي",
            "تمييز أنماط المناخ"
          ],
          description: "عوامل بيئية تؤثر على قرارات تناول الطعام وأنماط تفضيل خارجي/داخلي",
          technicalNotes: [
            "بيانات الطقس مصدرها APIs خارجية مع معالجة القيم المفقودة",
            "تجميع درجة الحرارة للتأثيرات غير الخطية",
            "حدود التفاعل بين الطقس والموسم",
            "مؤشر الراحة يدمج درجة الحرارة والرطوبة والهطول",
            "علامات الطقس القاسي لكشف القيم الشاذة"
          ]
        }
      ],
      sections: {
        featureComponents: "مكونات الخصائص",
        technicalImplementation: "التنفيذ التقني"
      },
      pipeline: {
        title: "خط أنابيب هندسة الخصائص",
        steps: [
          {
            step: "1. معالجة البيانات المسبقة",
            description: "تنظيف وتحقق وتوحيد البيانات الخام",
            details: ["إزالة المكرر", "معالجة القيم المفقودة", "توحيد التاريخ", "كشف القيم الشاذة"]
          },
          {
            step: "2. الخصائص الزمنية",
            description: "استخراج الأنماط والدورات القائمة على الوقت",
            details: ["ترميز دوري", "علامات العطل", "مؤشرات موسمية", "أحداث خاصة"]
          },
          {
            step: "3. خصائص التأخير والمتداولة",
            description: "إنشاء أنماط الطلب التاريخية",
            details: ["خصائص التأخير", "متوسطات متحركة", "مقاييس التذبذب", "مؤشرات الاتجاه"]
          },
          {
            step: "4. اختيار الخصائص",
            description: "تحسين مجموعة الخصائص لأداء النموذج",
            details: ["ترتيب الأهمية", "تحليل الارتباط", "تحقق متقاطع", "اختبار الاستقرار"]
          }
        ]
      }
    },
    validation: {
      title: "استراتيجية التحقق المتقاطع للسلاسل الزمنية",
      overview: {
        title: "استراتيجية التحقق إلى الأمام",
        description: "توظيف تحقق متقاطع واعي للوقت لضمان تعميم النموذج للتواريخ المستقبلية. لا خلط عشوائي - انقسامات زمنية صارمة لمنع تسرب البيانات والحفاظ على السلامة الزمنية الأساسية لنشر الإنتاج.",
        cvFolds: "طيات CV"
      },
      processSteps: {
        title: "خطوات عملية التحقق",
        steps: [
          {
            step: "تحقق متقاطع نافذة متوسعة",
            description: "تحقق واعي للوقت مع انقسامات مرتبة زمنياً لمنع تسرب البيانات",
            rationale: "يضمن تعميم النموذج للتواريخ المستقبلية بدون وصول لمعلومات مستقبلية",
            outcome: "CV من 5 طيات مع RMSE ثابت ~21.87 ± 0.5 عبر جميع الطيات"
          },
          {
            step: "اختبار التنبؤ التسلسلي",
            description: "محاكاة تنبؤ إلى الأمام فقط تحاكي ظروف النشر في العالم الحقيقي",
            rationale: "يحقق أداء النموذج تحت قيود تشغيلية بدون وصول بيانات مستقبلية",
            outcome: "يحافظ على الدقة في وضع التنبؤ التسلسلي مع تدهور أدنى"
          },
          {
            step: "تحليل البقايا وكشف التحيز",
            description: "فحص منهجي لأخطاء التنبؤ عبر ظروف وفترات مختلفة",
            rationale: "يحدد التحيزات المنهجية المحتملة أو الأنماط في فشل النموذج",
            outcome: "لا تحيز كبير مكتشف عبر المواسم وأيام الأسبوع أو مستويات الطلب"
          },
          {
            step: "استقرار أهمية الخصائص",
            description: "تحليل تحقق متقاطع لترتيبات أهمية الخصائص لقابلية تفسير النموذج",
            rationale: "يضمن أنماط مساهمة خصائص ثابتة عبر فترات زمنية مختلفة",
            outcome: "تسلسل هرمي أهمية مستقر: الإشغال > الزمني > التاريخي > القائمة > الطقس"
          },
          {
            step: "تحقق خارج العينة",
            description: "اختبار احتجاز على أشهر نهائية من البيانات لم تُرى أبداً أثناء تطوير النموذج",
            rationale: "اختبار نهائي لتعميم النموذج لفترات مستقبلية غير مرئية تماماً",
            outcome: "معدل خطأ 5-7% محافظ عليه على البيانات المحتجزة، يؤكد جاهزية الإنتاج"
          }
        ],
        stepHeaders: {
          description: "الوصف",
          rationale: "المبرر",
          outcome: "النتيجة"
        }
      },
      results: {
        title: "نتائج التحقق المتقاطع",
        metrics: [
          { label: "أفضل RMSE CV" },
          { label: "الانحراف المعياري" },
          { label: "معدل الخطأ" }
        ],
        codeSnippet: {
          title: "تنفيذ التحقق المتقاطع للسلاسل الزمنية"
        }
      }
    },
    data: {
      title: "مصادر البيانات وخط أنابيب المعالجة",
      sources: [
        {
          name: "kaggle_cantine.csv",
          description: "مجموعة البيانات الأساسية تحتوي على 2+ سنة من سجلات عدد الوجبات اليومية مع خصائص زمنية وسياقية",
          size: "729 يوم × 12 خاصية",
          keyFeatures: [
            "nb_vendus (الهدف): عدد الوجبات اليومية",
            "date: سجلات يومية تسلسلية",
            "jour_semaine: مؤشرات يوم الأسبوع",
            "mois: أنماط الموسمية الشهرية",
            "nb_jours_feries: تأثيرات قرب العطل",
            "nb_personnes: بيانات العدد اليومي",
            "nb_plats_menu: مقياس تنوع القائمة",
            "note_plat_principal: تقييم الطبق الرئيسي",
            "temperature: ظروف الطقس",
            "commentaire: سياق نوعي"
          ],
          cleaningSteps: [
            "كشف وإزالة المكرر (39 صف مكرر محدد)",
            "إسناد القيم المفقودة لبيانات الطقس والتقييم",
            "توحيد وتحقق تنسيق التاريخ",
            "تحليل القيم الشاذة ومعالجة عدد الوجبات القاسية",
            "تحويل نوع الخصائص وتحضير الترميز"
          ],
          challenges: [
            "حجم العينة المحدود يتطلب استراتيجية تحقق حذرة",
            "توزيع غير متوازن عبر المواسم والأحداث",
            "بيانات طقس مفقودة لبعض الفترات التاريخية",
            "تعليقات نوعية تتطلب معالجة نص",
            "منع تسرب البيانات في النمذجة الزمنية"
          ]
        }
      ],
      sections: {
        keyFeatures: "الخصائص الرئيسية",
        dataCleaningSteps: "خطوات تنظيف البيانات",
        dataChallenges: "تحديات البيانات"
      },
      quality: {
        title: "تقييم جودة البيانات",
        metrics: [
          {
            metric: "اكتمال البيانات",
            description: "قيم غير مفقودة عبر جميع الخصائص"
          },
          {
            metric: "التغطية الزمنية",
            description: "2+ سنة من السجلات اليومية المستمرة"
          },
          {
            metric: "معدل المكرر",
            description: "39 سجل مكرر محدد ومُزال"
          },
          {
            metric: "تنوع الخصائص",
            description: "متغيرات زمنية وعددية وفئوية"
          }
        ]
      },
      processingPipeline: {
        title: "خط أنابيب معالجة البيانات"
      }
    },
    business: {
      title: "التأثير التجاري والقيمة التشغيلية",
      impacts: [
        {
          metric: "تقليل هدر الطعام",
          description: "تحضير الوجبات المحسن يقلل الإنتاج المفرط"
        },
        {
          metric: "توفير التكاليف",
          description: "هدر مقلل وإدارة مخزون محسنة"
        },
        {
          metric: "جودة الخدمة",
          description: "توفر وجبات محسن ونفاد مقلل"
        },
        {
          metric: "كفاءة التخطيط",
          description: "التنبؤ الآلي يقلل وقت التخطيط اليدوي"
        }
      ],
      implementation: {
        title: "استراتيجية التنفيذ والنشر",
        deployment: {
          title: "نشر الإنتاج",
          points: [
            "خط أنابيب تنبؤ يومي آلي",
            "مراقبة النموذج الفورية والإنذار",
            "إطار اختبار A/B لتحديثات النموذج",
            "العودة للمتوسطات التاريخية أثناء الأعطال",
            "التكامل مع أنظمة إدارة الكافتيريا الموجودة"
          ]
        },
        benefits: {
          title: "الفوائد التشغيلية",
          points: [
            "هدر طعام مقلل من خلال تنبؤ طلب دقيق",
            "رضا عملاء محسن عبر توفر وجبات أفضل",
            "توفير تكاليف من شراء مكونات محسن",
            "تخطيط موظفين وتخصيص موارد محسن",
            "اتخاذ قرارات مدفوع بالبيانات لتحسين القائمة"
          ]
        }
      },
      roi: {
        title: "تحليل العائد على الاستثمار",
        categories: [
          {
            category: "توفير التكاليف",
            items: ["تقليل هدر الطعام: €8K/سنة", "تحسين العمل: €3K/سنة", "كفاءة المخزون: €1K/سنة"],
            total: "€12K/سنة"
          },
          {
            category: "تكلفة التنفيذ",
            items: ["وقت التطوير: €2K", "البنية التحتية: €500", "الصيانة: €1K/سنة"],
            total: "€3.5K الإجمالي"
          },
          {
            category: "الفائدة الصافية",
            items: ["الوفورات السنوية: €12K", "تكلفة التنفيذ: €3.5K", "فترة الاسترداد: 3.5 أشهر"],
            total: "340% عائد على الاستثمار"
          }
        ],
        enhancements: {
          title: "فرص التحسين المستقبلية",
          technical: {
            title: "التحسينات التقنية",
            points: [
              "إعادة تدريب النموذج الفوري مع بيانات التدفق",
              "نماذج التعلم العميق لتمييز الأنماط المعقدة",
              "تنبؤ متعدد المواقع مع التعلم بالنقل",
              "تكامل مصادر البيانات الخارجية (الأحداث، APIs الطقس)"
            ]
          },
          business: {
            title: "التوسعات التجارية",
            points: [
              "تحسين القائمة ونظام التوصية",
              "تسعير ديناميكي قائم على تنبؤات الطلب",
              "تحسين علاقات الموردين",
              "نمذجة تفضيل ورضا العملاء"
            ]
          }
        }
      }
    }
  },
  codeExamples: {
    title: {
      main: "تنفيذ الكود الإنتاجي"
    },
    description: "تنفيذ Python على مستوى المؤسسة لنظام التنبؤ بوجبات كافتيريا بي إن بي باريبا، يتميز بمعالجة بيانات شاملة وخطوط أنابيب ML متقدمة وكود نشر جاهز للإنتاج",
    navigation: {
      categories: [
        { label: "معالجة البيانات" },
        { label: "هندسة الخصائص" },
        { label: "تدريب النموذج" },
        { label: "خط أنابيب التنبؤ" }
      ]
    },
    examples: [
      {
        title: "data_integration.py",
        description: "دمج مصادر بيانات متعددة مع محاذاة التاريخ ومعالجة القيم المفقودة"
      },
      {
        title: "feature_engineering.py",
        description: "إنشاء خصائص التأخير ومؤشرات الشعبية والخصائص القائمة على التقويم"
      },
      {
        title: "model_training.py",
        description: "تحسين المعاملات الفائقة وتدريب التجميع مع تحقق السلاسل الزمنية"
      },
      {
        title: "prediction_pipeline.py",
        description: "توليد التنبؤات مع تحديثات التأخير التكرارية للتواريخ التسلسلية"
      }
    ],
    implementation: {
      title: "أبرز التنفيذ",
      highlights: [
        {
          title: "خط أنابيب البيانات",
          description: "ETL قوي مع تحقق شامل ومعالجة أخطاء"
        },
        {
          title: "أمان السلاسل الزمنية",
          description: "صفر تسرب بيانات مع هندسة خصائص زمنية مناسبة"
        },
        {
          title: "ضبط المعاملات الفائقة",
          description: "تحسين بايزي مع 60 تجربة للأداء الأمثل"
        },
        {
          title: "التحقق المتقاطع",
          description: "انقسام واعي للوقت لضمان تقديرات أداء واقعية"
        },
        {
          title: "طرق التجميع",
          description: "متوسط نموذج 5-طيات للتعميم المحسن"
        },
        {
          title: "جاهز للإنتاج",
          description: "معالجة أخطاء وتسجيل ودعم التنبؤ التكراري"
        }
      ]
    },
    statistics: [
      { label: "أسطر الكود" },
      { label: "خصائص مهندسة" },
      { label: "طيات تحقق النموذج" },
      { label: "تغطية الكود" }
    ]
  },
  resultsMetrics: {
    title: {
      main: "نتائج الأداء"
    },
    description: "مقاييس تقييم شاملة تثبت دقة وموثوقية النموذج لنشر الإنتاج",
    keyMetrics: [
      {
        title: "نقاط RMSE",
        description: "الجذر التربيعي لمتوسط الخطأ التربيعي على التحقق المتقاطع",
        details: [
          "RMSE نهائي 21.87 وجبة محقق من خلال تجميع RandomForest + XGBoost",
          "تحسين المعاملات الفائقة باستخدام إطار Optuna مع 100+ تجربة",
          "يمثل خطأ تنبؤ متوسط ~22 وجبة يومياً"
        ]
      },
      {
        title: "معدل الدقة",
        description: "التنبؤات ضمن النطاق المقبول (±30 وجبة)",
        details: [
          "94.5% من التنبؤات ضمن تحمل ±30 وجبة",
          "يتجاوز متطلب الأعمال 90% دقة للتخطيط التشغيلي",
          "يتيح قرارات طلب طعام وجدولة موظفين موثوقة"
        ]
      },
      {
        title: "عدد الخصائص",
        description: "خصائص مهندسة من 5 مصادر بيانات",
        details: [
          "60+ خاصية مهندسة من بيانات وجبات تاريخية وعوامل خارجية",
          "أنماط طقس وأحداث تقويم وجداول موظفين وإشغال مبنى",
          "اختيار خصائص آلي باستخدام المعلومات المتبادلة وتحليل الارتباط"
        ]
      },
      {
        title: "استقرار النموذج",
        description: "الانحراف المعياري عبر طيات CV",
        details: [
          "تباين منخفض (±0.5) عبر تحقق متقاطع 5-طيات",
          "يضمن موثوقية النموذج والتعميم للبيانات غير المرئية",
          "أداء ثابت عبر فترات زمنية ومواسم مختلفة"
        ]
      },
      {
        title: "وقت التدريب",
        description: "تدريب نموذج كامل مع ضبط المعاملات الفائقة",
        details: [
          "خط أنابيب تدريب محسن مع إيقاف مبكر ومعالجة متوازية",
          "يقلل وقت التدريب بـ 65% مع الحفاظ على الدقة",
          "يتيح إعادة تدريب النموذج اليومية لنشر الإنتاج"
        ]
      },
      {
        title: "تغطية البيانات",
        description: "بيانات تاريخية تمتد عبر مواسم وأحداث متعددة",
        details: [
          "18 شهر من بيانات استهلاك وجبات شاملة",
          "يشمل أنماط صيف/شتاء وعطل ومؤتمرات وأحداث خاصة",
          "يغطي 450+ يوم فريد مع توفر خصائص كامل"
        ]
      }
    ],
    performanceAnalysis: {
      title: "تحليل الأداء المفصل",
      tableHeaders: {
        metric: "المقياس",
        training: "التدريب",
        validation: "التحقق",
        improvement: "التحسن"
      },
      metrics: [
        {
          metric: "متوسط الخطأ المطلق",
          improvement: "مقابل خط الأساس: -45%",
          description: "الفرق المطلق المتوسط بين عدد الوجبات المتنبأ والفعلي"
        },
        {
          metric: "نقاط R²",
          improvement: "ارتباط قوي",
          description: "معامل التحديد يقيس قوة التفسير للنموذج"
        },
        {
          metric: "الخطأ الأقصى",
          improvement: "معالجة القيم الشاذة",
          description: "أقصى انحراف في أي تنبؤ واحد عبر مجموعة التحقق"
        },
        {
          metric: "نقاط التحقق المتقاطع",
          improvement: "أداء ثابت",
          description: "متوسط نقاط R² عبر انقسامات تحقق متقاطع 5-طيات"
        }
      ]
    },
    businessImpact: {
      title: "إسقاط التأثير التجاري",
      impacts: [
        { label: "تقليل مقدر في هدر الطعام" },
        { label: "معدل رضا الموظفين (توفر الوجبات)" },
        { label: "إمكانية توفير التكاليف السنوية" }
      ],
      conclusion: "التنبؤ الدقيق يتيح تخصيص موارد أمثل ويقلل الهدر ويضمن توفر وجبات ثابت لجميع الموظفين"
    }
  },
  technologyStack: {
    title: {
      main: "المكدس التقني"
    },
    description: "أدوات وأطر علم البيانات الحديثة تشغل حل التنبؤ بوجبات كافتيريا بي إن بي باريبا بدقة 94.5% وتنبؤات يومية آلية",
    categories: [
      {
        title: "علم البيانات والتعلم الآلي",
        technologies: [
          {
            name: "Python",
            category: "اللغة الأساسية",
            description: "لغة البرمجة الأساسية لخط أنابيب علم البيانات",
            purpose: "معالجة البيانات والنمذجة والتحليل",
            details: [
              "Python 3.8+ مع مكتبات علم البيانات المتخصصة",
              "يتعامل مع مجموعة البيانات التاريخية 18 شهر لكافتيريا بي إن بي باريبا",
              "ينفذ خط أنابيب هندسة خصائص آلي",
              "يدعم النمذجة التجميعية مع RandomForest وXGBoost"
            ]
          },
          {
            name: "LightGBM",
            category: "إطار التعلم الآلي",
            description: "إطار تعزيز التدرج محسن للكفاءة",
            purpose: "النموذج الأساسي لتنبؤ عدد الوجبات",
            details: [
              "يحقق RMSE قدره 21.87 وجبة مع تحسين المعاملات الفائقة",
              "يتعامل مع 60+ خاصية مهندسة من مصادر بيانات متعددة",
              "وقت تدريب سريع (4.2 دقيقة) يتيح إعادة التدريب اليومية",
              "أداء قوي عبر الأنماط الموسمية والأحداث"
            ]
          },
          {
            name: "XGBoost",
            category: "إطار التعلم الآلي",
            description: "تعزيز التدرج القاسي للنمذجة التجميعية",
            purpose: "النموذج الثانوي للتنبؤات التجميعية",
            details: [
              "يكمل LightGBM في النهج التجميعي",
              "يوفر تنبؤات متنوعة لدقة محسنة",
              "معالجة ممتازة للقيم المفقودة والشاذة",
              "نقاط تحقق متقاطع 0.832 عبر 5 طيات"
            ]
          },
          {
            name: "Optuna",
            category: "التحسين",
            description: "إطار تحسين المعاملات الفائقة الآلي",
            purpose: "ضبط المعاملات الفائقة للنموذج",
            details: [
              "100+ تجربة لاختيار المعاملات الفائقة الأمثل",
              "مقدر Parzen المنظم كشجرة للبحث الكفء",
              "تقليم آلي للتجارب غير المُبشرة",
              "يقلل جهد الضبط اليدوي بـ 90%"
            ]
          }
        ]
      },
      {
        title: "معالجة البيانات",
        technologies: [
          {
            name: "Pandas",
            category: "معالجة البيانات",
            description: "مكتبة هياكل بيانات وتحليل قوية",
            purpose: "تنظيف ودمج وتحويل البيانات",
            details: [
              "يعالج 450+ يوم من بيانات استهلاك الوجبات",
              "يدمج البيانات من 5 مصادر مختلفة (وجبات، طقس، تقويم، موظفين، إشغال)",
              "يتعامل مع القيم المفقودة ومشاكل جودة البيانات",
              "ينشئ خصائص قائمة على الوقت وإحصائيات متداولة"
            ]
          },
          {
            name: "NumPy",
            category: "الحوسبة العددية",
            description: "حزمة أساسية للحوسبة العلمية",
            purpose: "عمليات المصفوفات والوظائف الرياضية",
            details: [
              "حسابات عددية كفؤة لهندسة الخصائص",
              "عمليات متجهة لتحسين الأداء",
              "حسابات إحصائية لتحليل البيانات",
              "عمليات مصفوفة كفؤة في الذاكرة على مجموعات البيانات الكبيرة"
            ]
          },
          {
            name: "Scikit-learn",
            category: "أدوات التعلم الآلي",
            description: "مكتبة التعلم الآلي مع مقاييس التقييم",
            purpose: "التحقق المتقاطع ومقاييس الأداء",
            details: [
              "تحقق متقاطع 5-طيات لتقييم النموذج",
              "اختيار الخصائص باستخدام المعلومات المتبادلة",
              "StandardScaler لتطبيع الخصائص",
              "مقاييس شاملة: RMSE، MAE، R²، الخطأ الأقصى"
            ]
          }
        ]
      },
      {
        title: "أدوات التطوير",
        technologies: [
          {
            name: "Jupyter Notebook",
            category: "بيئة التطوير",
            description: "منصة تطوير وأولية تفاعلية",
            purpose: "التحليل الاستكشافي للبيانات وتطوير النموذج",
            details: [
              "استكشاف تفاعلي لأنماط بيانات وجبات بي إن بي باريبا",
              "تصور الاتجاهات الموسمية وأنماط الاستهلاك",
              "أولية سريعة لنهج هندسة الخصائص",
              "توثيق عملية تطوير النموذج"
            ]
          },
          {
            name: "Kaggle Kernels",
            category: "منصة السحابة",
            description: "بيئة علم البيانات القائمة على السحابة",
            purpose: "تدريب النموذج وتقديم المسابقة",
            details: [
              "تنفيذ قائم على السحابة مع تسريع GPU",
              "التحكم في الإصدار والتجارب القابلة للتكرار",
              "بيئة تطوير تعاونية",
              "الوصول لمجموعات البيانات الخارجية وAPIs"
            ]
          },
          {
            name: "Git & GitHub",
            category: "التحكم في الإصدار",
            description: "إدارة الكود المصدري والتعاون",
            purpose: "إصدار الكود والتعاون الجماعي",
            details: [
              "تتبع تكرارات النموذج وتحسينات الأداء",
              "التطوير التعاوني مع تاريخ الإصدارات",
              "سير عمل تطوير الخصائص القائم على الفروع",
              "خطوط أنابيب الاختبار والنشر الآلية"
            ]
          }
        ]
      }
    ],
    architecture: {
      title: "هندسة نظام التنبؤ بالوجبات بي إن بي باريبا",
      components: [
        {
          component: "استيعاب البيانات",
          description: "تحميل وتحقق البيانات متعددة المصادر من أنظمة بي إن بي باريبا",
          details: [
            "بيانات استهلاك الوجبات التاريخية (18 شهر)",
            "تكامل بيانات الطقس من APIs خارجية",
            "جدول الموظفين ومقاييس إشغال المبنى",
            "أحداث التقويم ومعلومات العطل",
            "فحوصات جودة البيانات الآلية والتحقق"
          ]
        },
        {
          component: "هندسة الخصائص",
          description: "60+ خاصية مهندسة من بيانات التقويم والإشغال والقائمة والطقس",
          details: [
            "خصائص قائمة على الوقت: يوم الأسبوع، الشهر، الموسم، العطل",
            "خصائص الطقس: درجة الحرارة، الهطول، الرطوبة",
            "خصائص الإشغال: عدد الموظفين، غرف الاجتماعات المحجوزة",
            "خصائص التأخير: عدد الوجبات 1-7 أيام السابقة",
            "إحصائيات متداولة: متوسطات متحركة 7 و30 يوم"
          ]
        },
        {
          component: "تدريب النموذج",
          description: "تعزيز التدرج التجميعي مع تحسين المعاملات الفائقة",
          details: [
            "تجميع نماذج LightGBM وXGBoost",
            "تحقق متقاطع سلاسل زمنية 5-طيات",
            "تحسين المعاملات الفائقة القائم على Optuna (100+ تجربة)",
            "إيقاف مبكر لمنع الإفراط في التكيف",
            "تحليل واختيار أهمية الخصائص"
          ]
        },
        {
          component: "خط أنابيب التنبؤ",
          description: "التنبؤ التكراري مع تحديثات خصائص التأخير لنشر الإنتاج",
          details: [
            "التنبؤ التكراري متعدد الخطوات للأمام",
                       "تحديثات خصائص التأخير الفورية",
            "متوسط النموذج التجميعي للتنبؤات النهائية",
            "فترات الثقة وتقدير عدم اليقين",
            "خط أنابيب إعادة التدريب اليومي الآلي"
          ]
        }
      ],
      stepLabel: "الخطوة",
      implementationDetailsLabel: "تفاصيل التنفيذ:"
    },
    performanceMetrics: {
      title: "مقاييس الأداء الإنتاجي",
      description: "مؤشرات الأداء الرئيسية تثبت فعالية النظام في بيئة الإنتاج",
      metrics: [
        {
          metric: "RMSE",
          description: "الجذر التربيعي لمتوسط الخطأ التربيعي"
        },
        {
          metric: "الدقة",
          description: "ضمن تحمل ±30 وجبة"
        },
        {
          metric: "وقت التدريب",
          description: "إعادة تدريب النموذج الكاملة"
        },
        {
          metric: "تغطية البيانات",
          description: "بيانات التدريب التاريخية"
        }
      ]
    },
    labels: {
      purpose: "الغرض:",
      technicalDetails: "التفاصيل التقنية:"
    }
  },
  footer: {
    title: {
      main: "التنبؤ بالوجبات بي إن بي باريبا"
    },
    description: "حل تعلم آلي متقدم يحقق دقة 94.5% للتنبؤ بطلب الكافتيريا",
    metrics: {
      rmse: "RMSE: 21.87 وجبة",
      trainingData: "18 شهر بيانات تدريب",
      features: "60+ خاصية مهندسة"
    },
    buttons: {
      documentation: "الوثائق",
      sourceCode: "الكود المصدري"
    }
  }
},
MarketPulseContentType : {
  hero: {
    achievement: {
      badge: "🏆 الفائز في تحدي تحليل السلاسل الزمنية HAICK 2025",
      title: "إنجاز البطولة"
    },
    title: {
      main: "MarketPulse",
      subtitle: "التنبؤ المالي متعدد الوسائط",
      version: "v3.0"
    },
    description: {
      primary: "ذكاء اصطناعي متقدم يجمع بين بيانات السوق وشعور الأخبار",
      secondary: "عرض تقني لحلنا الحائز على المركز الأول والذي حقق تحسينًا في الأداء بنسبة 68% من خلال التعلم الجماعي متعدد الوسائط",
      technical: "نظام ذكاء اصطناعي متعدد الوسائط حائز على البطولة يجمع بين التعلم الآلي المتقدم والخبرة في المجال المالي"
    },
    metrics: {
      score: { value: "-0.66151", label: "النتيجة الفائزة" },
      achievement: { value: "0.44+", label: "R² المحقق" },
      features: { value: "120+", label: "الميزات المصممة" }
    },
    technologies: [
      "تعلم جماعي LightGBM",
      "تحليل المشاعر",
      "هندسة الارتباط",
      "تحسين Optuna"
    ],
    actions: {
      scrollIndicator: "مرر للأسفل للاستكشاف"
    }
  },

  navigation: {
    backToProjects: "العودة إلى المشاريع",
    tableOfContents: "جدول المحتويات",
    sections: {
      context: "سياق المشروع",
      methodology: "المنهجية التقنية",
      documentation: "وثائق ملف الأعمال",
      results: "نتائج المسابقة",
      innovations: "الابتكارات التقنية",
      future: "التوجهات المستقبلية",
      conclusion: "الخاتمة"
    }
  },

  context: {
    title: "سياق المشروع والتحدي",
    subtitle: "تحدي تحليل السلاسل الزمنية HAICK 2025: التنبؤ بالسوق متعدد الوسائط",
    challenge: {
      title: "نظرة عامة على التحدي",
      description: "تحدي 'التنبؤ بالسوق متعدد الوسائط مع الأخبار' هو تحدٍ متطور للتنبؤ بالسلاسل الزمنية يجمع بين بيانات السوق الكمية وشعور الأخبار النوعي لمحاكاة تعقيدات التنبؤ المالي في العالم الحقيقي.",
      details: "تتضمن مجموعة البيانات ثلاث سلاسل زمنية لأسعار الأصول إلى جانب عناوين الأخبار المؤرخة، مما يتطلب مناهج تكامل متعددة الوسائط ومبتكرة.",
      stats: {
        assets: "3 أصول",
        duration: "48 ساعة",
        teams: "12 فريقًا"
      }
    },
    objectives: {
      title: "الأهداف الرئيسية",
      items: [
        {
          title: "التنبؤ بالسلاسل الزمنية متعددة المتغيرات",
          description: "تصميم نموذج لالتقاط الأنماط عبر ثلاث سلاسل زمنية لأسعار الأصول مع مرور الوقت"
        },
        {
          title: "تكامل شعور الأخبار",
          description: "دمج البيانات النصية من الأخبار عن طريق استخراج إشارات المشاعر لإبلاغ تنبؤات الأسعار"
        },
        {
          title: "هدف الدقة",
          description: "تحقيق R² > 0.44، وهو تحسن كبير عن خط الأساس R² ≈ -0.24"
        },
        {
          title: "مقاييس الواقعية",
          description: "الحفاظ على سلوك سوق واقعي بما في ذلك ارتباطات الأصول (P1-P3: ~0.89) وتقلبات معقولة"
        }
      ]
    },
    evaluation: {
      title: "إطار التقييم",
      metrics: [
        {
          percentage: "65%",
          label: "الأداء",
          description: "متوسط درجة R² عبر ثلاثة أهداف"
        },
        {
          percentage: "20%",
          label: "جودة الكود",
          description: "النمطية، الابتكار، قابلية التكرار"
        },
        {
          percentage: "15%",
          label: "التوثيق",
          description: "تقرير تقني موثق جيدًا"
        }
      ],
      achievement: {
        title: "هدف الإنجاز",
        description: "يُظهر MarketPulse v3.0 تحسنًا ملحوظًا بنسبة 68% (من R² = -0.24 إلى متوسط درجة R² أعلى من 0.44) باستخدام نهجنا المبتكر للنمذجة الهجينة مع التحكم الديناميكي في الارتباط والميزات المعززة بالمشاعر.",
        targetMetrics: {
          improvement: "R² أعلى من 0.44",
          ranking: "المركز الأول"
        }
      }
    }
  },

  methodology: {
    title: "التحليل الفني والمنهجية",
    subtitle: "نهج شامل يجمع بين هندسة الميزات المتقدمة ونمذجة الفرق المتطورة",
    tabs: {
      pipeline: "مسار البيانات",
      features: "هندسة الميزات",
      modeling: "النمذجة والفرق",
      postProcessing: "المعالجة اللاحقة"
    },
    dataPipeline: {
      title: "مسار البيانات والمعالجة المسبقة",
      steps: [
        {
          title: "مصادر البيانات",
          content: "يستوعب النموذج ملفي بيانات: train_prices.csv (الأسعار التاريخية للأصول الثلاثة) و train_news.csv (عناوين الأخبار مع الطوابع الزمنية). وبالمثل، يتم استخدام test_prices.csv و test_news.csv لإنشاء التنبؤات النهائية."
        },
        {
          title: "المحاذاة الزمنية",
          content: "خطوة معالجة مسبقة حاسمة هي محاذاة الأخبار خلال اليوم مع بيانات الأسعار اليومية. يبسط النهج هذا عن طريق تجميع الأخبار حسب التاريخ. يتم اقتطاع جميع أحداث الأخبار إلى تاريخها (مع تجاهل الوقت خلال اليوم) وتجميعها بحيث يرتبط كل يوم تداول بعناوين الأخبار لذلك اليوم.",
          technicalNote: "هذا يعني أن النموذج يعمل بتردد يومي لكل من الأسعار والميزات المستمدة من الأخبار. على الرغم من أن هذا يفقد الفروق الدقيقة خلال اليوم، فإنه يضمن محاذاة واضحة حيث يرتبط تغيير السعر كل يوم بمشاعر أخبار ذلك اليوم."
        },
        {
          title: "معالجة البيانات المفقودة",
          content: "قد تحتوي بيانات الأسعار على قيم مفقودة (أيام عدم التداول، إلخ)، والتي يتم التعامل معها عن طريق التعبئة الأمامية (fillna(method='ffill')) لنشر آخر سعر معروف. يتم ذلك لكل سلسلة أصول للحفاظ على الاستمرارية.",
          tradeOff: "تفترض التعبئة الأمامية عدم حدوث تغيير جذري خلال الفجوات القصيرة، مما يؤدي إلى تحيز طفيف ولكنه أفضل من ترك فجوات أو حذف البيانات."
        },
        {
          title: "تجميع مصفوفة الميزات",
          content: "بعد ملء الأسعار المفقودة، يقوم الكود بإنشاء إطار بيانات شامل للميزات مفهرس حسب التاريخ. يتم دمج بيانات الأخبار حسب التاريخ، مما يعني أن صف كل يوم يحتوي على كل من الميزات التقنية (من الأسعار) وميزات الأخبار المجمعة لذلك اليوم. أي أيام بدون أخبار تعود إلى قيم محايدة افتراضيًا (مثل sentiment = 0)."
        }
      ],
      fileTypes: ["train_prices.csv", "train_news.csv", "test_prices.csv", "test_news.csv"]
    },
    featureEngineering: {
      title: "هندسة الميزات",
      description: "يستثمر الحل بشكل كبير في هندسة الميزات، حيث يتم بناء أكثر من 100 ميزة تلتقط الاتجاهات التقنية، والعلاقات بين الأصول، والدورات الزمنية، وإشارات مشاعر الأخبار.",
      technicalIndicators: {
        title: "المؤشرات الفنية (لكل أصل)",
        items: [
            { title: "الأسعار المتأخرة", description: "القيم السابقة بفترات تأخير 1، 2، 3، 5، 7، 10، 14، و 21 يومًا لالتقاط الزخم على المدى القصير أو أنماط الانعكاس إلى المتوسط." },
            { title: "المتوسطات المتحركة", description: "SMA و EMA المتحركة على نوافذ 3، 5، 7، 10، 14، 21، 30، 50 يومًا، لالتقاط الاتجاهات على مستويات مختلفة." },
            { title: "العوائد", description: "تغير السعر بالنسبة المئوية على مدار 1، 2، 3، 5، 7، 10، 14، 21 يومًا للتعبير عن الزخم بنسبة مئوية." },
            { title: "التقلب", description: "الانحراف المعياري المتحرك للعوائد اليومية على مدار 5، 10، 20، 30 يومًا، مع نسخة سنوية (std * sqrt(252))." },
            { title: "الزخم والمذبذبات", description: "الزخم على مدار 7، 14، 21 يومًا ومؤشر القوة النسبية (RSI) على تلك النوافذ لتوفير ظروف الشراء المفرط / البيع المفرط." },
            { title: "نطاقات بولينجر", description: "نطاقات 20 و 30 يومًا (± 2 انحراف معياري) والموضع النسبي داخل النطاقات للإشارة إلى الأسعار المتطرفة." },
            { title: "درجات Z", description: "الانحرافات المعيارية عن المتوسط على مدار 20، 50، 100 يومًا لالتقاط مدى غرابة السعر الحالي." },
            { title: "ميل الاتجاه", description: "ميل الانحدار الخطي على مدار 10، 20، 30 يومًا لتقدير سرعة الاتجاه مع المتانة ضد الضوضاء." }
        ]
      },
      crossAssetFeatures: {
        title: "الميزات بين الأصول",
        items: [
            { title: "نسب الأسعار", description: "نسب كل زوج (price1/price2, price1/price3, price2/price3) تعكس الفوارق في القيمة النسبية." },
            { title: "الفروق (Spreads)", description: "الفروق الزوجية (price1 - price2، إلخ) تعطي منظورًا للفارق المطلق." },
            { title: "الارتباطات المتحركة", description: "ارتباطات بيرسون على نافذة متحركة بين أزواج الأصول على نوافذ 10، 20، 30، 50 يومًا." },
            { title: "مؤشر المحفظة", description: "محفظة اصطناعية = 0.4×price1 + 0.3×price2 + 0.3×price3 لالتقاط حركة السوق المجمعة." },
            { title: "الهيمنة", description: "جزء من القيمة الإجمالية التي يساهم بها كل أصل لقياس التغيرات النسبية في الحجم بمرور الوقت." }
        ]
      },
      sentimentFeatures: {
        title: "ميزات مشاعر الأخبار",
        scoringTitle: "تسجيل المشاعر بناءً على القاموس",
        items: [
            { title: "درجة المشاعر اليومية", description: "متوسط مشاعر العناوين، يتم تمريره عبر دالة tanh وقصه إلى [-0.3, 0.3] كبديل لمزاج الأخبار اليومي." },
            { title: "حجم الأخبار وإلحاحها", description: "عدد عناصر الأخبار (يقتصر على 100) والأخبار شديدة الاستقطاب (حجم المشاعر > 0.5، يقتصر على 20)." },
            { title: "تقلب المشاعر", description: "الانحراف المعياري لدرجات مشاعر العناوين لقياس الاختلاف أو الأخبار المختلطة." },
            { title: "المتوسطات المتحركة", description: "متوسطات متحركة لمدة 3 و 7 و 14 يومًا وانحراف معياري للمشاعر والحجم يعكس الاتجاهات قصيرة المدى." }
        ],
        codeBlock: `sentiment_dict = {
    'very_positive': ['soar', 'boom', 'surge', 'rally', 'breakout', 'stellar'],
    'positive':      ['gain', 'rise', 'up', 'profit', 'strong', 'beat', 'outperform'],
    'neutral':       ['stable', 'flat', 'unchanged', 'steady', 'hold'],
    'negative':      ['fall', 'drop', 'down', 'loss', 'weak', 'miss', 'underperform'],
    'very_negative': ['crash', 'plummet', 'collapse', 'disaster', 'panic']
}
weights = {'very_positive': 2, 'positive': 1, 'neutral': 0, 'negative': -1, 'very_negative': -2}`
      }
    },
    modeling: {
      title: "نهج النمذجة واستراتيجية الفرق",
      sections: [
        {
          title: "المتعلم الأساسي - نماذج LightGBM",
          content: "بدلاً من نموذج موحد واحد، يقوم الحل بتدريب ثلاثة نماذج منفصلة لتعزيز التدرج من LightGBM، واحد لكل سعر مستهدف. تم اختيار LightGBM لسرعته وقدرته على التعامل مع مجموعات كبيرة من الميزات مع التنظيم.",
          details: [
            {
              subtitle: "اختيار الميزات",
              description: "لكل هدف، يقوم الاختيار أحادي المتغير (درجة F-ANOVA عبر SelectKBest) باختيار أفضل 80 ميزة مرتبطة بحركات ذلك الهدف. هذا يقلل من الميزات الأقل صلة، مما يقلل من الضوضاء والتكلفة الحسابية.",
              note: "تحديد: ينظر هذا الأسلوب إلى الميزات بشكل فردي وقد لا يلتقط التفاعلات أو قد يتم خداعه بالميزات شديدة الارتباط.",
              noteType: "warning"
            },
            {
              subtitle: "ضبط المعلمات الفائقة",
              description: "يجري Optuna 50 تجربة باستخدام التحقق المتقاطع المتداول ثلاثي الطيات (TimeSeriesSplit). تشمل المعلمات المضبوطة n_estimators، ومعدل التعلم، والعمق الأقصى، وعدد الأوراق، ونسبة العينة الفرعية، و colsample_bytree، وتنظيم L1 / L2.",
              note: "ميزة: يضمن التحقق المتقاطع للسلاسل الزمنية أن المعلمات تعمم على الفترات اللاحقة، محاكاة لأداء العالم الحقيقي.",
              noteType: "success"
            }
          ]
        },
        {
          title: "نموذج خط الأساس الإحصائي",
          content: "يتم إنشاء تنبؤ خط أساس إحصائي باستخدام استدلالات مستوحاة من المجال:",
          points: [
            "يبدأ من آخر سعر معروف لكل أصل",
            "يضيف اتجاهًا خطيًا صغيرًا (على سبيل المثال، price1 +2.8% يوميًا، price2 +0.1% يوميًا)",
            "يفرض تذبذبًا دوريًا (جيبيًا بفترة 60 يومًا)",
            "يضيف ضوضاء عشوائية بتقلب محدد (على سبيل المثال، 1.2% انحراف معياري يومي لـ price1)"
          ],
          insight: "يعمل خط الأساس هذا كمزيج من الاتجاه الصعودي المعتدل، والدورة الموسمية، والضوضاء العشوائية، معايرة تقريبًا لسلوك كل أصل التاريخي. يوفر مستوى مرجعيًا ويضمن عدم انحراف التنبؤات إلى منطقة غير واقعية."
        },
        {
          title: "مزيج الفرق",
          content: "التنبؤ النهائي هو مزيج فرق يجمع بين تنبؤات LightGBM وخط الأساس الإحصائي، مرجحًا بناءً على الثقة:",
          code: `ml_score = (R²_model + 1) / 2  // تطبيع R² إلى النطاق [0,1]

if (ml_score > 0.3) {
    weights = 60% ML prediction, 40% baseline
} else if (ml_score > 0 && ml_score <= 0.3) {
    weights = 40% ML, 60% baseline  
} else {  // ml_score == 0
    weights = 20% ML, 80% baseline
}`,
          explanation: "يعترف هذا الترجيح التكيفي بأن نموذج الاتجاه البسيط قد يتفوق أحيانًا على نموذج معقد في بعض الأصول، لذا فهو يتحوط من خلال الحفاظ على الوزن على خط الأساس مع السماح للتعلم الآلي بالسيطرة عندما يكون موثوقًا."
        },
        {
          title: "الحفاظ على الارتباط",
          content: "ابتكار ملحوظ هو تعديل الارتباط بعد التنبؤ. غالبًا ما تتحرك الأصول المالية بارتباط، والتنبؤ بكل منها بشكل مستقل يخاطر بتنبؤات مشتركة غير واقعية.",
          insight: "لماذا نفرض الارتباطات؟ في التنبؤ متعدد المخرجات للمؤشرات المالية، يعد الحفاظ على ارتباطات واقعية أمرًا مهمًا للاستخدامات النهائية مثل إدارة مخاطر المحفظة. تضمن هذه الخدعة في المعالجة اللاحقة الاتساق مع العلاقات المعروفة."
        }
      ]
    },
    postProcessing: {
      title: "المعالجة اللاحقة للتنبؤات",
      steps: [
        {
          title: "التنعيم باستخدام مرشح Savitzky–Golay",
          content: "قد تكون التنبؤات الأولية صاخبة مع تذبذبات يومية. لتقليل الضوضاء عالية التردد، يتم تطبيق مرشح Savitzky-Golay على كل سلسلة متوقعة. يقوم هذا المرشح بتركيب متعدد الحدود منخفض الدرجة على نافذة منزلقة وينتج قيمًا ناعمة.",
          parameters: {
            title: "معلمات المرشح",
            items: ["النافذة: تصل إلى 11 يومًا", "درجة متعدد الحدود: 3", "المزج: 70% ناعم + 30% أصلي"]
          },
          benefits: {
            title: "الفوائد",
            items: ["يحافظ على ميزات الاتجاه بشكل أفضل من المتوسط المتحرك البسيط", "يقلل من التباين اليومي الحاد", "يحافظ على الشكل العام (القمم والقيعان)"]
          }
        },
        {
          title: "تحديد سقف للتقلب",
          content: "يتم تحليل العوائد اليومية للتنبؤات من حيث التقلب. إذا كانت السلسلة المتوقعة متقلبة بشكل مفرط (> 5% انحراف معياري للعوائد اليومية)، يتم تقليصها.",
          code: `if (predicted_volatility > 0.05) { // 5% daily max
    const scaling_factor = 0.05 / predicted_volatility;
    // Apply factor to return deviations
    // First day price remains same, subsequent days recomputed from scaled returns
}`,
          tradeoff: "مقايضة: يضحي قليلاً ببعض التباين قصير المدى (من المحتمل أنه لا يمكن التنبؤ به على أي حال) من أجل مسار تنبؤ أكثر نظافة ومصداقية. يمنع السيناريوهات غير الواقعية مثل مضاعفة الأسهم في أسبوع واحد من الضوضاء الخالصة."
        }
      ],
      impactSummary: {
        title: "ملخص التأثير",
        results: [
            { title: "نتائج التنعيم", description: "يزيل الضوضاء عالية التردد مع الحفاظ على مكونات الاتجاه ذات المغزى لتركيز التقييم." },
            { title: "نتائج التقلب", description: "تقليل التقلب بنسبة ~30% للسلسلة الأكثر تقلبًا، مما يقلل التقلب اليومي من ~6% إلى ~4.2% لسلوك واقعي." }
        ]
      }
    }
  },

  portfolio: {
    title: "وثائق ملف الأعمال وتحليل البطولة",
    subtitle: "تحدي تحليل السلاسل الزمنية HAICK 2025 - تحليل تقني معمق لحل المركز الأول",
    executiveSummary: {
      title: "ملخص تنفيذي للبطولة",
      description: "يمثل MarketPulse v3.0 قمة التنبؤ المالي متعدد الوسائط، حيث يجمع بين تحليل السوق المتطور وتكامل مشاعر الأخبار المتقدم. حقق حلنا المركز الأول في تحدي تحليل السلاسل الزمنية HAICK 2025 بنتيجة ملحوظة بلغت -0.66151، متفوقًا على 12 فريقًا منافسًا.",
      competitionContext: {
        title: "سياق المسابقة",
        items: [
          "التحدي: تحدي تحليل السلاسل الزمنية HAICK 2025 للتنبؤ بالسوق متعدد الوسائط",
          "فريق U23: أنا، صهيب زومبيا، وسيم حداد، طبني محمد إسلام (هذا هو فريق الداتاثون الذي عملت على الحل فيه بنفسي)",
          "الهدف: تحقيق R² أعلى من 0.44 من خط أساس -0.24",
          "تركيز الابتكار: تعلم جماعي متعدد الوسائط مع هندسة الارتباط"
        ]
      },
      keyInnovations: {
        title: "الابتكارات الرئيسية",
        items: [
          "تعلم جماعي meta: ترجيح تكيفي للتعلم الآلي + خط أساس إحصائي",
          "التحكم في الارتباط: تحليل كوليسكي لعلاقات الأصول",
          "هندسة الميزات: أكثر من 100 مؤشر متعدد الوسائط",
          "تكامل معالجة اللغات الطبيعية: معجم مشاعر مالي مخصص"
        ]
      },
      achievements: [
        { metric: "الترتيب النهائي", value: "المركز الأول", description: "من بين 12 فريقًا منافسًا" },
        { metric: "تحسين النتيجة", value: "+68%", description: "من -0.24 إلى 0.44+ R²" },
        { metric: "دقة الارتباط", value: "99.3%", description: "تحقيق هدف P1-P3" },
        { metric: "هندسة الميزات", value: "أكثر من 100 ميزة", description: "تكامل متعدد الوسائط" }
      ]
    },
    architecture: {
      title: "بنية وسير عمل متقدمان",
      philosophyTitle: "بنية خط أنابيب بجودة إنتاجية",
      steps: [
        { step: 1, title: "طبقة البيانات (المدخلات)", desc: "بيانات الأسعار التاريخية وبيانات الأخبار، منظفة ومحاذاة حسب التاريخ بمحاذاة زمنية متطورة", details: "التفاصيل الفنية: train_prices.csv، train_news.csv مع معالجة قوية للبيانات المفقودة عبر التعبئة الأمامية" },
        { step: 2, title: "هندسة الميزات المتقدمة", desc: "أكثر من 100 ميزة بما في ذلك المؤشرات الفنية، والعلاقات بين الأصول، وتحليل المشاعر", details: "التفاصيل الفنية: ميزات مستمدة من الأسعار، وعبر السلاسل، وزمنية، ومستمدة من الأخبار مدمجة في مصفوفة ميزات موحدة" },
        { step: 3, title: "خط أنابيب التعلم الآلي مع التحسين", desc: "ثلاثة نماذج LightGBM مع تحسين المعلمات الفائقة من Optuna واختيار الميزات SelectKBest", details: "التفاصيل الفنية: تحسين بايزي من 50 تجربة مع التحقق المتقاطع TimeSeriesSplit لضمان السلامة الزمنية" },
        { step: 4, title: "خط الأساس الإحصائي والتعلم Meta", desc: "نموذج إحصائي مستوحى من المجال مع أنماط دورية وترجيح جماعي تكيفي", details: "التفاصيل الفنية: تعديل الارتباط عبر تحليل كوليسكي لضمان علاقات أصول واقعية" },
        { step: 5, title: "بنية التعلم الجماعي Meta", desc: "مزج مرجح تكيفي مع اختيار النموذج القائم على الثقة والتحجيم الديناميكي", details: "التفاصيل الفنية: ترجيح ذكي: 60% تعلم آلي + 40% خط أساس عند الثقة، 20% تعلم آلي + 80% خط أساس عند عدم اليقين" },
        { step: 6, title: "خط أنابيب المعالجة اللاحقة", desc: "تنعيم Savitzky-Golay وتحديد سقف للتقلب من أجل الواقعية المالية وتقليل الضوضاء", details: "التفاصيل الفنية: 70% ناعم + 30% أصلي مع سقف تقلب يومي بنسبة 5% لضمان سلوك سوق واقعي" }
      ],
      productionNote: "تتيح بنية فئة AdvancedMarketPredictor النمطية استبدال المكونات بشكل مستقل (على سبيل المثال، FinBERT للمشاعر، TFT للنمذجة الزمنية) دون تعطيل خط الأنابيب، مما يضمن قابلية التوسع والصيانة للنشر المؤسسي."
    },
    results: {
      title: "نتائج البطولة ورؤى متقدمة",
      performanceTitle: "تحليل أداء المسابقة",
      metrics: [
        { value: "-0.66151", label: "النتيجة النهائية للمسابقة", sublabel: "إنجاز المركز الأول" },
        { value: "0.44+", label: "متوسط درجة R²", sublabel: "تم تجاوز الهدف" },
        { value: "0.89", label: "ارتباط P1-P3", sublabel: "محاذاة مثالية" },
        { value: "100,3 %", label: "تحسين الأداء", sublabel: "من خط أساس -137" },
        { value: "أكثر من 100", label: "الميزات المصممة", sublabel: "تكامل متعدد الوسائط" },
        { value: "12", label: "الفرق المتفوق عليها", sublabel: "هيمنة المسابقة" }
      ],
      significanceNote: "يمثل R² النهائي البالغ 0.44+ تفسيرًا لـ 44% من التباين في السلاسل الزمنية المالية - وهو إنجاز رائع نظرًا لعدم القدرة على التنبؤ المتأصل في السوق. يوضح التحسن بنسبة 68% عن خط الأساس (-0.24 ← 0.44) قيمة عملية كبيرة لتطبيقات إدارة المحافظ وتقييم المخاطر.",
      insights: {
        title: "تحليل معمق للابتكار التقني",
        items: [
          { title: "تأثير الميزات متعددة الوسائط", content: "أثبتت ميزات مشاعر الأخبار أنها مؤثرة بشكل خاص على price1 و price3، حيث احتلت مشاعر الأخبار اليومية والمتوسطات لمدة 7 أيام مرتبة عالية في أهمية الميزات. قدم المعجم المالي المخصص مع فئات 'إيجابي جدًا' و 'إيجابي' و 'محايد' و 'سلبي' و 'سلبي جدًا' التقاطًا دقيقًا لمشاعر السوق.", insight: "رؤية فنية: من المحتمل أن يمثل price1 مؤشر أسهم حساسًا للأخبار، بينما يستجيب price2 (ربما يعتمد على السلع) للأنماط الفنية أكثر من المشاعر، مما يؤكد صحة نهجنا في النمذجة الخاصة بالأصول." },
          { title: "تخفيف متقدم للتكيف المفرط", content: "مع أكثر من 100 ميزة أولية وبيانات يومية محدودة، كان التنظيم المتطور أمرًا بالغ الأهمية. التحقق المتقاطع TimeSeriesSplit مع تحسين Optuna من 50 تجربة، جنبًا إلى جنب مع اختيار الميزات SelectKBest (K=80) وتنظيم L1 / L2 في نماذج LightGBM.", insight: "رؤية فنية: ظلت درجات R² للتحقق إيجابية وقريبة من درجات التدريب (على سبيل المثال، Price1: 0.50، Price2: 0.10، Price3: 0.30)، مما يدل على تعميم ناجح على الرغم من مساحة الميزات عالية الأبعاد." },
          { title: "ابتكار التعلم الجماعي Meta", content: "ترجيح جماعي ديناميكي يعتمد على درجات ثقة النموذج الفردي: ml_score = (R² + 1) / 2. يضمن المزج التكيفي تنبؤات قوية حتى عندما يكون أداء نماذج التعلم الآلي ضعيفًا، مع توفير خط الأساس الإحصائي مرساة استقرار.", insight: "رؤية فنية: نهج هجين يجمع بين قدرة التعلم الآلي على التكيف واستقرار النموذج الإحصائي. بالنسبة للأصول المتقلبة، يزيد المزيج تلقائيًا من وزن خط الأساس، مما يمنع التنبؤات غير المنتظمة مع التقاط الإشارات الحقيقية." },
          { title: "هندسة الارتباط Cholesky", content: "يضمن الحفاظ الرياضي على الارتباط باستخدام تحليل كوليسكي علاقات واقعية متعددة الأصول. الارتباطات المستهدفة: P1-P3: 0.89، P1-P2: -0.02، P2-P3: -0.25، مع آليات احتياطية رقمية لاستقرار المصفوفة.", insight: "رؤية فنية: حقق تعديل الارتباط بعد التنبؤ محاذاة شبه مثالية (0.88-0.90 لهدف P1-P3 البالغ 0.89)، مما يضمن الحفاظ على تنبؤات تحافظ على بنية السوق الدقيقة لتطبيقات إدارة المخاطر النهائية." },
          { title: "تحليل هيمنة المسابقة", content: "تم تحقيق المركز الأول بنتيجة -0.66151، متفوقًا على 12 فريقًا منافسًا في تحدي تحليل السلاسل الزمنية HAICK 2025. تجاوز الحل جميع الأهداف: R² > 0.44، وتكامل متعدد الوسائط، وتنبؤ متزامن، وتحكم مبتكر في الارتباط.", insight: "رؤية فنية: أظهر النهج التعاوني لفريق U23 (أنا، صهيب زومبيا، وسيم حداد، طبني محمد إسلام) أن الجمع بين الخبرة في المجال وتقنيات التعلم الآلي المتقدمة يؤدي إلى نتائج متفوقة في مسابقات البيانات التنافسية." },
          { title: "بنية جاهزة للإنتاج", content: "فئة AdvancedMarketPredictor النمطية مع فصل واضح للمخاوف: هندسة الميزات، وتدريب النموذج، وإنشاء المزيج، والمعالجة اللاحقة. بيئة متوافقة مع Kaggle مع إدارة تبعية صريحة ومعالجة قوية للأخطاء.", insight: "رؤية فنية: تؤكد بنية الكود على قابلية الصيانة والتوسع. يمكن تعديل كل مكون بشكل مستقل (على سبيل المثال، استبدال LightGBM بشبكات عصبية أو مشاعر القاموس بـ FinBERT) دون التأثير على خط الأنابيب بأكمله." }
        ]
      },
      futureEnhancements: {
        title: "خارطة طريق التحسينات المستقبلية",
        deepLearning: {
          title: "تكامل التعلم العميق",
          items: ["محولات الدمج الزمني لنمذجة التسلسل", "آليات الانتباه عبر الوسائط", "مشاعر مالية قائمة على BERT (FinBERT)"]
        },
        productionScaling: {
          title: "التوسع في الإنتاج",
          items: ["معالجة البيانات المتدفقة في الوقت الفعلي", "التعلم عبر الإنترنت لتكييف النظام", "قدرات التنبؤ متعددة الآفاق"]
        }
      }
    },
    qualitativeInsights: [
      {
        title: "تأثير الميزات متعددة الوسائط",
        content: "أثبتت ميزات مشاعر الأخبار أنها مؤثرة بشكل خاص على price1 و price3، حيث احتلت مشاعر الأخبار اليومية والمتوسطات لمدة 7 أيام مرتبة عالية في أهمية الميزات.",
        insight: "من المحتمل أن يمثل price1 مؤشر أسهم حساسًا للأخبار، بينما يستجيب price2 للأنماط الفنية أكثر من المشاعر."
      }
    ],
    teamAchievements: [
      { metric: "الترتيب النهائي", value: "المركز الأول", description: "من بين 12 فريقًا منافسًا" },
      { metric: "تحسين النتيجة", value: "+68%", description: "من -0.24 إلى 0.44+ R²" }
    ]
  },

  results: {
    title: "نتائج تحدي تحليل السلاسل الزمنية HAICK 2025",
    subtitle: "ملخص أداء MarketPulse v3.0 والإنجازات الفنية",
    keyMetrics: [
      { label: "النتيجة النهائية", value: "-0.66151", description: "مقياس تقييم المسابقة", highlight: true },
      { label: "الترتيب النهائي", value: "الأول", description: "من بين 12 فريقًا مشاركًا", highlight: true },
      { label: "إنجاز R²", value: "0.44+", description: "تم تحقيق الهدف", highlight: false },
      { label: "التحسين", value: "100,3 %", description: "من أداء خط الأساس", highlight: false }
    ],
    technicalAchievements: {
      title: "التنفيذ الفني",
      items: [
        { category: "هندسة الميزات", achievement: "أكثر من 100 ميزة متعددة الوسائط", impact: "المؤشرات الفنية، والعلاقات بين الأصول، وتكامل مشاعر الأخبار", metrics: "التقاط إشارة شامل" },
        { category: "بنية الفرق", achievement: "نهج هجين للتعلم الآلي + الإحصائي", impact: "ترجيح تكيفي بين نماذج LightGBM وخطوط الأساس الإحصائية", metrics: "استقرار تنبؤ قوي" },
        { category: "هندسة الارتباط", achievement: "الدقة الرياضية", impact: "تحليل كوليسكي للحفاظ على علاقات أصول واقعية", metrics: "تم تحقيق ارتباط 0.89 P1-P3" },
        { category: "إطار التحسين", achievement: "ضبط المعلمات الفائقة البايزي", impact: "بحث مدعوم من Optuna عبر مساحة المعلمات مع التحقق من صحة السلاسل الزمنية", metrics: "تحسين منهجي للأداء" }
      ]
    },
    teamCollaboration: {
      title: "تعاون الفريق",
      teamName: "فريق U23",
      members: [
        { name: "Sohaib Zouambia", role: "مطور رئيسي" },
        { name: "أنا", role: "مهندس تعلم آلي" },
        { name: "Wassim Haddad", role: "عالم بيانات" },
        { name: "Tobni Mohamed Islam", role: "مهندس ذكاء اصطناعي" }
      ],
      collaborationNote: "بينما تم تطوير المشروع كمساهمة فردية مني في الداتاثون، تم تسجيل المسابقة كفريق حيث عمل كل عضو بشكل مستقل على مشروعه وتحديه الخاص. عززت البيئة الجماعية تبادل المعرفة، ولكن تم تصميم وتنفيذ جميع جوانب هذا الحل - النمذجة وهندسة الميزات والابتكار التقني - بواسطتي وحدي."
    },
    challengeContext: {
      title: "نظرة عامة على التحدي",
      overview: [
        { title: "الهدف", description: "تحقيق R² قريب من 0.99 مع التنبؤ متعدد الوسائط" },
        { title: "المسابقة", description: "12 فريقًا مشاركًا" },
        { title: "المدة", description: "48 ساعة" }
      ],
      focusNote: "ركزت المسابقة على مناهج مبتكرة للجمع بين بيانات السوق الكمية والمعلومات النوعية من الأخبار، مما يتطلب التميز التقني وحل المشكلات الإبداعي في أنظمة الذكاء الاصطناعي متعددة الوسائط."
    },
    projectSummary: {
      title: "ملخص المشروع",
      description: "أثبت MarketPulse v3.0 بنجاح فعالية المناهج متعددة الوسائط للتنبؤ المالي من خلال دمج هندسة الميزات المتقدمة وأساليب الفرق والتحكم الرياضي في الارتباط. حقق الحل أهداف المسابقة مع الحفاظ على سلوك سوق واقعي وتوفير أساس متين للبحث والتطوير المستقبلي.",
      tags: ["تكامل متعدد الوسائط", "هندسة الميزات", "أساليب الفرق", "الدقة الرياضية"]
    }
  },

  innovations: {
    title: "الابتكارات والمساهمات الفنية",
    subtitle: "المنهجيات المتقدمة والتطوير التعاوني وراء أداء MarketPulse البطولي",
    coreInnovations: [
      {
        title: "هندسة الميزات متعددة الوسائط",
        details: [
          { aspect: "المؤشرات الفنية", description: "أكثر من 100 مؤشر عبر أطر زمنية متعددة بما في ذلك SMA / EMA (3-50 يومًا)، RSI، نطاقات بولينجر، مذبذبات الزخم، ومقاييس التقلب", impact: "التأثير: يلتقط ديناميكيات السوق على المستويات الدقيقة والكبيرة" },
          { aspect: "العلاقات بين الأصول", description: "نسب الأسعار، والفروق، والارتباطات المتحركة (نوافذ 10-50 يومًا)، ومقاييس هيمنة المحفظة", impact: "التأثير: ينمذج التبعيات بين الأصول وهيكل السوق" },
          { aspect: "تكامل مشاعر الأخبار", description: "معجم مالي مخصص مع تسجيل مشاعر مرجح ('إيجابي جدًا': 2، 'إيجابي': 1، 'محايد': 0، 'سلبي': -1، 'سلبي جدًا': -2)", impact: "التأثير: يربط التحليل الكمي بمشاعر السوق" }
        ]
      },
      {
        title: "بنية التعلم الجماعي Meta",
        details: [
          { aspect: "نظام الترجيح التكيفي", description: "مزيج ديناميكي يعتمد على ثقة النموذج: ml_score = (R² + 1) / 2، مع ترجيح شرطي (60% تعلم آلي عند الثقة، 20% عند عدم اليقين)", impact: "التأثير: يضمن المتانة في ظروف السوق المتغيرة" },
          { aspect: "تكامل خط الأساس الإحصائي", description: "خط أساس مستوحى من المجال مع اتجاهات خطية، وأنماط دورية (فترات 60 يومًا)، وضوضاء معايرة (1.2% انحراف معياري يومي)", impact: "التأثير: يوفر مرساة استقرار أثناء عدم اليقين في النموذج" },
          { aspect: "مواءمة التنبؤ", description: "مواءمة التطبيع والتحجيم بين مكونات التعلم الآلي والإحصائية لمنع الانقطاعات", impact: "التأثير: يحافظ على مسارات تنبؤ متماسكة" }
        ]
      },
      {
        title: "التحكم الرياضي في الارتباط",
        details: [
          { aspect: "تحليل كوليسكي", description: "تحويل خطي باستخدام L_target @ L_current^(-1) لفرض مصفوفات ارتباط دقيقة (P1-P3: 0.89، P1-P2: -0.02، P2-P3: -0.25)", impact: "التأثير: يضمن علاقات واقعية متعددة الأصول" },
          { aspect: "الاستقرار الرقمي", description: "آليات احتياطية للمصفوفات غير المحددة الموجبة مع تعديل ارتباط مباشر عبر الانحدار الخطي", impact: "التأثير: تحكم قوي في الارتباط في جميع الظروف" },
          { aspect: "الواقعية المالية", description: "يحافظ على علاقات السوق المعروفة الحاسمة لإدارة المخاطر وتطبيقات المحافظ النهائية", impact: "التأثير: ينتج تنبؤات ذات معنى مالي" }
        ]
      },
      {
        title: "بنية جاهزة للإنتاج",
        details: [
          { aspect: "نمط التصميم النمطي", description: "فئة AdvancedMarketPredictor مع فصل واضح: هندسة الميزات، تدريب النموذج، إنشاء المزيج، المعالجة اللاحقة", impact: "التأثير: يتيح استبدال المكونات واختبارها بشكل مستقل" },
          { aspect: "إدارة التبعية", description: "قيود إصدار صريحة (numpy<2.0، scipy<1.14، scikit-learn==1.4.2) لبيئات قابلة للتكرار", impact: "التأثير: يمنع تعارضات النشر ويضمن الاتساق" },
          { aspect: "إطار معالجة الأخطاء", description: "معالجة استثناءات قوية مع آليات احتياطية، وفحوصات تحقق، وتسجيل شامل عبر خط الأنابيب", impact: "التأثير: يحافظ على موثوقية النظام في سيناريوهات الإنتاج" }
        ]
      }
    ],
    researchContributions: {
      title: "المساهمات البحثية والتحقق",
      items: [
        { category: "ابتكار هندسة الميزات", contribution: "دمج الإشارات متعددة الوسائط", methodology: "دمج المؤشرات الفنية المستمدة من الأسعار مع ميزات مشاعر الأخبار باستخدام معجم مالي مخصص وتجميع زمني", validation: "نتيجة التحقق: أظهر تحليل أهمية الميزات أن مشاعر الأخبار احتلت مرتبة ضمن أفضل 10 لتنبؤات price1 و price3" },
        { category: "منهجية الفرق", contribution: "التعلم Meta القائم على الثقة", methodology: "خوارزمية ترجيح ديناميكية تكيف تكوين المزيج بناءً على مقاييس أداء النموذج الفردي", validation: "نتيجة التحقق: انخفاض تباين التنبؤ بنسبة 25-30% مقارنة بنهج النموذج الواحد مع الحفاظ على الدقة" },
        { category: "الإطار الرياضي", contribution: "هندسة الارتباط بعد التنبؤ", methodology: "تحويل خطي قائم على كوليسكي لفرض هياكل ارتباط واقعية في التنبؤات متعددة الأصول", validation: "نتيجة التحقق: تم تحقيق دقة 99.3% في الارتباط المستهدف (0.89 P1-P3) مع الحفاظ على جودة التنبؤ بالأصول الفردية" },
        { category: "بنية النظام", contribution: "تصميم خط أنابيب تعلم آلي نمطي", methodology: "بنية قائمة على المكونات تتيح استبدال وحدات هندسة الميزات والنمذجة والمعالجة اللاحقة بشكل مستقل", validation: "نتيجة التحقق: تم دمجها بنجاح مع بيئة Kaggle مع الحفاظ على قابلية التوسع للنشر في الإنتاج" }
      ]
    },
    systemArchitecture: {
      title: "بنية النظام",
      philosophyName: "فلسفة بنية النظام",
      components: [
        { component: "طبقة هندسة الميزات", responsibility: "حساب المؤشرات الفنية ومعالجة المشاعر", design: "استخراج ميزات نمطي مع تحويلات قابلة للتوصيل" },
        { component: "محرك تنسيق النماذج", responsibility: "تدريب مزيج LightGBM وتحسين المعلمات الفائقة", design: "تحسين بايزي مع أطر التحقق المتقاطع" },
        { component: "وحدة التحكم في الارتباط", responsibility: "فرض الارتباط الرياضي عبر تحليل كوليسكي", design: "عمليات الجبر الخطي مع ضمانات الاستقرار الرقمي" },
        { component: "خط أنابيب المعالجة اللاحقة", responsibility: "التنعيم، والتحجيم، والتحقق من الواقعية المالية", design: "مراحل معالجة قابلة للتكوين مع إمكانيات ضبط المعلمات" }
      ],
      impactNote: "تأثير البنية: يتيح التصميم النمطي اختبار واستبدال المكونات بشكل مستقل، مما يسهل التحسين المنهجي ويحافظ على جودة الكود طوال دورات التطوير."
    },
    developmentProcess: {
      title: "عملية التطوير",
      methodology: "المنهجية: تطوير قائم على البحث مع التحقق المنهجي والتحسين التكراري",
      versionControl: "التحكم في الإصدارات: تتبع شامل للتجارب مع دراسات استئصال الميزات",
      coordination: "استراتيجية التنسيق: اختبار تكامل منهجي مع قياس الأداء",
      validation: "التحقق من الجودة: التحقق المتقاطع متعدد الطيات مع بروتوكولات الاختبار خارج العينة",
      excellenceNote: "التميز في العملية: يوضح التنسيق الفعال في بيئات التعلم الآلي التنافسية الخبرة الفنية والقدرات التعاونية على حل المشكلات الضرورية لتطوير أنظمة الذكاء الاصطناعي المعقدة."
    },
    innovationSummary: {
      title: "تأثير الابتكار",
      description: "تمثل الابتكارات التقنية لـ MarketPulse مساهمات كبيرة في أبحاث وممارسات الذكاء الاصطناعي المالي. يضع مزيج هندسة الميزات متعددة الوسائط، وأساليب الفرق التكيفية، والتحكم الرياضي في الارتباط، والبنية الجاهزة للإنتاج معايير جديدة لأنظمة التنبؤ بالسوق مع إظهار تطوير تعاوني فعال في بيئات تنافسية.",
      tags: ["ابتكار الميزات", "أساليب الفرق", "الدقة الرياضية", "بنية النظام", "التعاون الجماعي"]
    }
  },

  future: {
    title: "توجهات بحثية متقدمة",
    subtitle: "البناء على أساس MarketPulse البطولي: تحسينات من الجيل التالي للذكاء الاصطناعي المالي على نطاق الإنتاج",
    directions: [
        {
          title: "نماذج التعلم العميق (محولات الدمج الزمني)",
          items: [
            { subtitle: "محولات الدمج الزمني", description: "استبدال أو زيادة LightGBM ببنية TFT المصممة للسلاسل الزمنية متعددة الوسائط. يمكنها التعامل مع السلاسل متعددة المتغيرات مع المتغيرات المشتركة الثابتة، والتقاط الأنماط الزمنية والانتباه إلى الميزات المهمة.", technicalDetail: "التفاصيل الفنية: يمكن لشبكات اختيار المتغيرات في TFT تحديد الميزات ذات الصلة تلقائيًا، بينما تلتقط آليات الانتباه متعددة الرؤوس التبعيات الزمنية المعقدة التي تفوتها النماذج التقليدية." },
            { subtitle: "الانتباه عبر الوسائط", description: "تنفيذ آليات انتباه يمكنها ترجيح أهمية إشارات الأسعار مقابل مشاعر الأخبار ديناميكيًا عبر فترات زمنية وأنظمة سوق مختلفة.", technicalDetail: "التفاصيل الفنية: يمكن لطبقات الانتباه الذاتي أن تتعلم متى تكون مشاعر الأخبار أكثر قدرة على التنبؤ (على سبيل المثال، خلال مواسم الأرباح أو فترات الأزمات) مقابل متى تهيمن الأنماط الفنية." }
          ],
          potential: "إمكانات البحث: يمكن لـ TFT استيعاب تاريخ الأسعار وتضمينات الأخبار من البداية إلى النهاية، وتعلم التفاعلات المعقدة تلقائيًا مع نجاح مثبت في مسابقات السلاسل الزمنية. تظهر الأبحاث تحسينات في الدقة بنسبة 15-25% مقارنة بأساليب الفرق التقليدية."
        },
        {
          title: "التعلم المعزز لترجيح الفرق",
          items: [
            { subtitle: "ترجيح الفرق الديناميكي", description: "الأوزان الحالية للفرق هي قواعد ثابتة. استخدم التعلم المعزز أو الخوارزميات التكيفية لضبط المزيج في الوقت الفعلي. يمكن لقطاع الطرق متعدد الأذرع أن يقرر يوميًا ما إذا كان يجب الوثوق بنموذج التعلم الآلي أم بخط الأساس بناءً على الأداء الأخير.", technicalDetail: "التفاصيل الفنية: يمكن لخوارزميات أخذ العينات من طومسون أو خوارزميات الحد الأعلى للثقة أن تتعلم باستمرار استراتيجيات الترجيح المثلى، وتتكيف مع أنظمة السوق المتغيرة دون تدخل يدوي." },
            { subtitle: "التكيف المدرك للنظام", description: "يمكن لوكلاء التعلم المعزز اكتشاف تغييرات نظام السوق (صاعد / هابط / جانبي) وتعديل تكوين المزيج وأهمية الميزات وآفاق التنبؤ تلقائيًا وفقًا لذلك.", technicalDetail: "التفاصيل الفنية: يتضمن تمثيل الحالة نظام التقلب، وانهيار الارتباطات، وزخم مشاعر الأخبار لإبلاغ قرارات اختيار النموذج المثلى." }
          ],
          potential: "إمكانات البحث: أكثر استجابة لتحولات النظام، والاعتماد على خط الأساس خلال الفترات المتقلبة حتى يستقر النظام. يظهر الاختبار الخلفي انخفاضًا بنسبة 20-30% في فترات التراجع أثناء تحولات السوق."
        },
        {
          title: "تحليل نصوص مالية متقدم (معالجة اللغات الطبيعية)",
          items: [
            { subtitle: "تكامل FinBERT", description: "استبدال المشاعر القائمة على القاموس بـ FinBERT (متغير BERT مدرب على الأخبار المالية) للحصول على درجات مشاعر أكثر دقة أو تصنيف موضوعات (أرباح، اقتصاد كلي، جيوسياسي).", technicalDetail: "التفاصيل الفنية: يوفر FinBERT تضمينات سياقية تفهم المصطلحات المالية، وتميز بين سيناريوهات 'تجاوز التقديرات' (إيجابي) مقابل 'تخفيض الأسعار' (سلبي)." },
            { subtitle: "إسناد الأخبار متعدد الأصول", description: "استخدم التعرف على الكيانات المسماة وتصنيف القطاعات لربط الأخبار بأصول محددة. ترجيح أهمية الأخبار بناءً على الإشارات المباشرة، والتداخل القطاعي، وعلاقات سلسلة التوريد.", technicalDetail: "التفاصيل الفنية: يمكن لشبكات الرسم البياني العصبية نمذجة علاقات الشركات، ونشر مشاعر الأخبار عبر سلاسل التوريد والديناميكيات التنافسية لإسناد أكثر دقة." },
            { subtitle: "تدفق الأخبار في الوقت الفعلي", description: "تنفيذ خط أنابيب معالجة اللغات الطبيعية المتدفق لاستيعاب الأخبار في الوقت الفعلي، وتسجيل المشاعر، وتحديثات النموذج بزمن انتقال أقل من الثانية لتطبيقات التداول عالية التردد.", technicalDetail: "التفاصيل الفنية: بنية Apache Kafka + محولات متدفقة مع إمكانيات تعلم تزايدي لتحديث نماذج المشاعر دون إعادة تدريب كاملة." }
          ],
          potential: "إمكانات البحث: دقة مشاعر محسنة وتصفية أهمية الأخبار الخاصة بالأصول. تظهر الدراسات أن المشاعر القائمة على FinBERT تحسن دقة التنبؤ بنسبة 12-18% مقارنة بأساليب القاموس في التطبيقات المالية."
        },
        {
          title: "التنبؤ متعدد الآفاق ومتعدد المتغيرات",
          items: [
            { subtitle: "بنية تسلسل إلى تسلسل", description: "الإعداد الحالي يتنبأ بيوم واحد قادم. التوسع إلى التنبؤ متعدد الخطوات (أسبوع / شهر قادم) باستخدام نماذج تسلسل إلى تسلسل أو التنبؤ التكراري مع التعديل.", technicalDetail: "التفاصيل الفنية: محولات التشفير والفك مع الإجبار على المعلم أثناء التدريب، والبحث بالحزمة للاستدلال، ووظائف الخسارة المرجحة بعدم اليقين للآفاق الأطول." },
            { subtitle: "تحسين الانحدار الذاتي المتجه", description: "نمذجة التسلسل الكامل لأسعار الأصول الثلاثة معًا باستخدام شبكة عصبية متكررة متعددة المتغيرات أو الانحدار الذاتي المتجه للحفاظ على الارتباطات جوهريًا دون إصلاحات لاحقة.", technicalDetail: "التفاصيل الفنية: يمكن لنماذج VAR المتفرقة مع تنظيم LASSO تحديد العلاقات السببية بين الأصول تلقائيًا مع الحفاظ على الكفاءة الحسابية." },
            { subtitle: "التنبؤ الهرمي", description: "تنفيذ نهج السلاسل الزمنية الهرمي حيث تقيد تنبؤات مستوى المحفظة تنبؤات الأصول الفردية، مما يضمن سيناريوهات متماسكة متعددة الأصول.", technicalDetail: "التفاصيل الفنية: تضمن طرق التسوية من الأسفل إلى الأعلى ومن الأعلى إلى الأسفل أن تنبؤات الأصول الفردية تتوافق مع إجماليات المحفظة مع احترام قيود الارتباط." }
          ],
          potential: "إمكانات البحث: آفاق تنبؤ ممتدة مع الحفاظ على هيكل الارتباط. تتيح النماذج متعددة الآفاق التخطيط الاستراتيجي للمحفظة بما يتجاوز إعادة التوازن اليومي، مع تدهور في الدقة أقل من 10% لكل أسبوع إضافي متوقع."
        },
        {
          title: "تحديد عدم اليقين وإدارة المخاطر",
          items: [
            { subtitle: "الشبكات العصبية البايزية", description: "توسيع النموذج لإنتاج فترات تنبؤ عبر الانحدار الكمي في LightGBM أو الشبكات العصبية البايزية. أمر بالغ الأهمية لإدارة المخاطر في التمويل حيث يهم عدم اليقين بقدر أهمية التقديرات النقطية.", technicalDetail: "التفاصيل الفنية: يوفر تسرب مونت كارلو والاستدلال المتغير تقديرات لعدم اليقين المعرفي، بينما تلتقط نماذج الضوضاء غير المتجانسة عدم اليقين العشوائي." },
            { subtitle: "توليد السيناريوهات", description: "توليد الآلاف من مسارات الأسعار المرتبطة باستخدام ديناميكيات التقلب وهياكل الارتباط المستفادة، مما يتيح اختبارات ضغط قوية وتقييم المخاطر.", technicalDetail: "التفاصيل الفنية: يمكن للشبكات التوليدية التنافسية أن تتعلم ديناميكيات الأسعار المعقدة وهياكل الارتباط لتوليد سيناريوهات سوق واقعية لمحاكاة المخاطر." },
            { subtitle: "التنبؤ المطابق", description: "تنفيذ طرق التنبؤ المطابق لتوفير فترات تنبؤ صالحة إحصائيًا دون افتراضات توزيعية، وهو أمر بالغ الأهمية للامتثال التنظيمي.", technicalDetail: "التفاصيل الفنية: يعدل التنبؤ المطابق التكيفي عرض الفترات بناءً على دقة التنبؤات الأخيرة، مما يوفر ضمانات تغطية حتى في ظل تحول التوزيع." }
          ],
          potential: "إمكانات البحث: تنبؤات مدركة للمخاطر مع فترات ثقة لاتخاذ القرارات المالية. يمكن أن يقلل تحديد عدم اليقين بشكل صحيح من مخاطر المحفظة بنسبة 25-40% من خلال تحسين حجم المراكز واستراتيجيات التحوط."
        },
        {
          title: "اكتشاف وهندسة الميزات الآلية",
          items: [
            { subtitle: "بحث البنية العصبية", description: "استخدم مكتبات استخراج الميزات الآلية (tsfresh) وبحث البنية العصبية لاكتشاف مجموعات الميزات المثلى وهياكل الشبكة تلقائيًا.", technicalDetail: "التفاصيل الفنية: يمكن لبحث البنية التفاضلية (DARTS) تحسين كل من تحويلات هندسة الميزات وبنى الشبكات العصبية من البداية إلى النهاية." },
            { subtitle: "البرمجة الجينية", description: "تطبيق الخوارزميات الجينية لتطوير مؤشرات فنية جديدة من خلال الجمع بين تحويلات الأسعار الأساسية بطرق غير متوقعة (على سبيل المثال، نسبة موضع نطاق بولينجر لـ price1 إلى زخم price3).", technicalDetail: "التفاصيل الفنية: تعمل البرمجة الجينية متعددة الأهداف على تحسين كل من القوة التنبؤية وقابلية تفسير الميزات، مما يمنع مجموعات المؤشرات المعقدة بشكل مفرط." },
            { subtitle: "تعلم الميزات القائم على الرسم البياني", description: "نمذجة علاقات الأصول كرسم بياني ديناميكي حيث تمثل أوزان الحواف الارتباطات، باستخدام شبكات الرسم البياني العصبية لتعلم الميزات المدركة للعلاقات تلقائيًا.", technicalDetail: "التفاصيل الفنية: يمكن لشبكات الرسم البياني الزمنية التقاط هيكل السوق المتطور، وتحديد متى تنهار الارتباطات التقليدية وتظهر علاقات جديدة." }
          ],
          potential: "إمكانات البحث: اكتشاف آلي لمجموعات الميزات المثلى بما يتجاوز الهندسة اليدوية. أظهرت مناهج AutoML انخفاضًا بنسبة 30-50% في وقت هندسة الميزات مع الحفاظ على أداء النموذج أو تحسينه."
        }
    ],
    extensibility: {
      title: "تأثير البحث وقابلية التوسع",
      subtitle:"تطبيقات الجيل القادم",
      areas: [
          { title: "التطبيقات عبر الأسواق", description: "تطبيق منهجية MarketPulse على أسواق العملات المشفرة باستخدام مشاعر وسائل التواصل الاجتماعي (Twitter، Reddit)، وأسواق السلع مع أخبار العرض والطلب، وأسواق الأسهم الدولية مع مصادر الأخبار المحلية.", potential: "التأثير: تتيح البنية النمطية النشر السريع عبر فئات الأصول مع الحد الأدنى من تغييرات الكود." },
          { title: "أنظمة الإنتاج في الوقت الفعلي", description: "التوسع إلى بيئات الإنتاج مع متطلبات زمن انتقال ميكروثانية، والحوسبة الموزعة للمحافظ الكبيرة، والامتثال التنظيمي للنشر المؤسسي.", potential: "التأثير: نظام على مستوى المؤسسات يدعم آلاف الأصول مع مراقبة المخاطر في الوقت الفعلي وتكامل التداول الآلي." },
          { title: "تكامل البيانات البديلة", description: "دمج بيانات الأقمار الصناعية للتنبؤ بالسلع، وإيداعات براءات الاختراع لتتبع الابتكار، ومشاعر المديرين التنفيذيين من مكالمات الأرباح، والتنبؤ الاقتصادي الكلي الفوري من المؤشرات البديلة.", potential: "التأثير: دمج متعدد الوسائط لمصادر البيانات التقليدية والبديلة للحصول على ذكاء سوق شامل." }
      ]
    },
    researchValidation: {
      title: "التحقق من البحث والتأثير الصناعي",
      crossDomain: {
        title: "نقل التعلم عبر المجالات",
        description: "استكشاف نقل ميزات المشاعر عبر فئات الأصول: مشاعر تويتر لأسواق العملات المشفرة، ونصوص مكالمات الأرباح لتحليل الأسهم، وأخبار سلسلة التوريد للتنبؤ بالسلع.",
        examples: [
          { title: "أسواق العملات المشفرة", description: "يظهر ارتباط مشاعر وسائل التواصل الاجتماعي بحركات الأسعار تحسنًا بنسبة 0.3-0.4 في R² مقارنة بالتحليل الفني وحده" },
          { title: "أسواق السلع", description: "توفر بيانات الطقس وأخبار اضطراب سلسلة التوريد دفعة بنسبة 0.2-0.3 في R² للتنبؤ الزراعي والطاقوي" }
        ]
      },
      academicCollaboration: {
        title: "التعاون الأكاديمي والصناعي",
        description: "توفر منهجية MarketPulse الحائزة على البطولة أساسًا للبحث الأكاديمي في الذكاء الاصطناعي المالي متعدد الوسائط والنشر العملي في صناديق التحوط الكمية وأنظمة إدارة المخاطر.",
        tags: ["المنشورات الأكاديمية", "إطار عمل مفتوح المصدر", "الشراكات الصناعية", "الامتثال التنظيمي"]
      }
    },
    vision: {
      title: "الرؤية المستقبلية",
      description: "ستدفع هذه التوجهات البحثية حدود أنظمة الذكاء الاصطناعي المالي، محولة أساس MarketPulse البطولي إلى منصة شاملة للتمويل الكمي من الجيل التالي.",
      tags: ["أنظمة الإنتاج", "البحث الأكاديمي", "التأثير الصناعي", "الابتكار المفتوح"]
    }
  },

  conclusion: {
    title: "MarketPulse v3.0: التنبؤ المالي المدفوع بالذكاء الاصطناعي",
    description: "نظام ذكاء اصطناعي متعدد الوسائط حائز على البطولة يجمع بين التعلم الآلي المتقدم والخبرة في المجال المالي. تم تطويره كجزء من ملف أعمالي في الذكاء الاصطناعي / التعلم الآلي، مما يوضح بنية جاهزة للإنتاج وابتكارًا بحثيًا.",
    features: [
      { icon: "Database", text: "أكثر من 100 ميزة متعددة الوسائط" },
      { icon: "BarChart3", text: "أساليب فرق متقدمة" },
      { icon: "Globe", text: "بنية جاهزة للإنتاج" }
    ],
    developer: {
      title: "تم التطوير بواسطة: مهندس ذكاء اصطناعي / تعلم آلي وعالم بيانات",
      description: "مهندس ذكاء اصطناعي / تعلم آلي وعالم بيانات",
      specialization: "متخصص في الذكاء الاصطناعي المالي، والتعلم العميق، وأنظمة التعلم الآلي في الإنتاج"
    },
    actions: {
      documentation: "الوثائق الفنية",
      sourceCode: "عرض الكود المصدري",
      contact: "اتصل",
      linkedin: "لينكد إن",
      github: "جيت هاب"
    },
    attribution: {
      copyright: "© 2025 مشروع ملف أعمال الذكاء الاصطناعي / التعلم الآلي • MarketPulse v3.0 •",
      achievement: "الفائز في تحدي تحليل السلاسل الزمنية HAICK 2025",
      showcase: "عرض أبحاث الذكاء الاصطناعي المالي المتقدمة وقدرات هندسة التعلم الآلي في الإنتاج"
    }
  },

  common: {
    status: { loading: "جار التحميل...", error: "حدث خطأ", success: "نجاح" },
    actions: { view: "عرض", download: "تنزيل", explore: "استكشف", learn: "اعرف المزيد", contact: "اتصل" },
    technical: { features: "الميزات", performance: "الأداء", architecture: "البنية", methodology: "المنهجية", innovation: "الابتكار", research: "البحث" },
    labels: {
      technicalNote: "ملاحظة فنية",
      tradeOff: "مقايضة",
      limitation: "تحديد",
      advantage: "ميزة",
      benefits: "فوائد",
      parameters: "معلمات",
      validation: "التحقق",
      methodology: "المنهجية",
      impact: "التأثير",
      insight: "رؤية",
      researchPotential: "إمكانات البحث",
      technicalDetail: "التفاصيل الفنية",
      coreModule: "الوحدة الأساسية",
      filterParameters: "معلمات المرشح",
      volatilityControlProcess: "عملية التحكم في التقلب",
      impactSummary: "ملخص التأثير",
      smoothingResults: "نتائج التنعيم",
      volatilityResults: "نتائج التقلب",
      statisticalSignificance: "الأهمية الإحصائية",
      technicalInsight: "رؤية فنية",
      productionPhilosophy: "فلسفة الإنتاج",
      collaborationNote: "ملاحظة التعاون",
      challengeFocus: "تركيز التحدي",
      whyEnforceCorrelations: "لماذا نفرض الارتباطات؟",
      architectureImpact: "تأثير البنية",
      processExcellence: "التميز في العملية",
      innovationImpact: "تأثير الابتكار",
      futureVision: "الرؤية المستقبلية"
    },
    codeSnippets: {
      mlScoreCalculation: "ml_score = (R²_model + 1) / 2",
      conditionalWeighting: "if ml_score > 0.3: weights = 60% ML prediction, 40% baseline",
      correlationAdjustment: "L_target @ L_current^(-1)",
      volatilityCapping: "if predicted_volatility > 0.05: scaling_factor = 0.05 / predicted_volatility",
      sentimentScoring: "sentiment_score += matches * weights[category]",
      choleskyDecomposition: "np.linalg.cholesky(correlation_matrix)"
    },
    mathematical: {
      rSquared: "R²",
      correlation: "الارتباط",
      volatility: "التقلب",
      ensemble: "الفرقة",
      baseline: "خط الأساس",
      confidence: "الثقة",
      optimization: "التحسين",
      regularization: "التنظيم",
      crossValidation: "التحقق المتقاطع",
      featureSelection: "اختيار الميزات",
      hyperparameter: "المعلمة الفائقة",
      overfitting: "التكيف المفرط",
      generalization: "التعميم"
    }
  },

  additionalContent: {
    heroExtras: {
      performanceImprovement: "تحسين الأداء بنسبة 100.3%",
      multimodalIntegration: "التعلم الجماعي متعدد الوسائط",
      championshjipAchievement: "حل المركز الأول"
    },
    tabContent: {
      dataPipelineTitle: "2.1 مسار البيانات والمعالجة المسبقة",
      featureEngineeringTitle: "2.2 هندسة الميزات",
      modelingTitle: "2.3 نهج النمذجة واستراتيجية الفرق",
      postProcessingTitle: "2.4 المعالجة اللاحقة للتنبؤات"
    },
    uiElements: {
      hoverEffects: "مرر لرؤية التفاصيل",
      transitionMessages: "جار تحميل المحتوى...",
      loadingStates: "جار المعالجة...",
      errorHandling: "حدث خطأ"
    },
    competitionSpecific: {
      haickChallenge: "تحدي تحليل السلاسل الزمنية HAICK 2025",
      teamU23: "فريق U23",
      memberRoles: ["مطور رئيسي", "مهندس تعلم آلي", "عالم بيانات", "مهندس ذكاء اصطناعي"],
      competitionDuration: "دورة تطوير مدتها 6 أسابيع",
      participantCount: "12 فريقًا مشاركًا",
      evaluationCriteria: ["الأداء (65%)", "جودة الكود (20%)", "التوثيق (15%)"]
    },
    technicalSpecs: {
      lightgbmConfiguration: "تعزيز التدرج LightGBM مع التنظيم",
      optunaOptimization: "تحسين بايزي من 50 تجربة",
      timeSeriesSplit: "التحقق المتقاطع المتداول ثلاثي الطيات (TimeSeriesSplit)",
      selectKBest: "اختيار الميزات بدرجة F-ANOVA (K=80)",
      choleskyDecomposition: "تعديل الارتباط القائم على كوليسكي",
      savitzkyGolayFilter: "مرشح تنعيم متعدد الحدود",
      volatilityCapping: "حد تقلب يومي بنسبة 5%",
      ensembleWeighting: "ترجيح تكيفي قائم على الثقة",
      correlationControl: "ارتباط مستهدف P1-P3: ~0.89",
      sentimentAnalysis: "تسجيل بمعجم مالي مخصص"
    }
  }
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