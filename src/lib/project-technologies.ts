export type ProjectTechnologyId =
  | "FORECASTER"
  | "nlp-sentiment"
  | "computer-vision"
  | "data-visualization"
  | "web-scraping"
  | "gpt-app"
  | "Protein"
  | "pfas-tracking";

export interface TechnologyCategory {
  title: string;
  description: string;
  tools: string[];
}

export interface ProjectTechnologyProfile {
  cardTech: string[];
  cardFocus: string;
  cardHighlights: string[];
  categories: TechnologyCategory[];
}

export const projectTechnologyProfiles: Record<ProjectTechnologyId, ProjectTechnologyProfile> = {
  FORECASTER: {
    cardTech: ["Python", "LightGBM", "XGBoost", "Optuna", "Pandas", "Time-series CV"],
    cardFocus: "Demand forecasting pipeline for BNP Paribas cafeteria operations.",
    cardHighlights: ["60+ engineered calendar, menu, weather and occupancy features", "Weighted LightGBM/XGBoost ensemble with Optuna tuning"],
    categories: [
      {
        title: "Data Science Core",
        description: "Tooling used to clean, merge and model daily meal demand from heterogeneous operational data.",
        tools: ["Python 3.8+", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook", "Kaggle Kernels"]
      },
      {
        title: "Forecasting Models",
        description: "Regression stack optimized for tabular time-series demand prediction.",
        tools: ["LightGBM", "XGBoost", "RandomForest", "Optuna", "TimeSeriesSplit", "Ensemble averaging"]
      },
      {
        title: "Feature Engineering",
        description: "Business signals transformed into supervised learning features.",
        tools: ["Target encoding", "Lag features", "Rolling statistics", "One-hot encoding", "Weather API integration", "Sequential prediction"]
      }
    ]
  },
  "nlp-sentiment": {
    cardTech: ["LightGBM", "Optuna", "NLP", "Sentiment", "Cholesky", "TimeSeriesSplit"],
    cardFocus: "Multimodal market forecasting with price signals and news sentiment.",
    cardHighlights: ["100+ technical, temporal, cross-asset and sentiment features", "Correlation-preserving post-processing for realistic asset behavior"],
    categories: [
      {
        title: "Market Data Pipeline",
        description: "Daily alignment of price series and news headlines for multimodal forecasting.",
        tools: ["Python", "Pandas", "NumPy", "CSV pipelines", "Forward-fill imputation", "Feature matrix assembly"]
      },
      {
        title: "Financial Modeling",
        description: "Tree-based forecasting and validation strategy for multiple assets.",
        tools: ["LightGBM", "Optuna", "Scikit-learn", "SelectKBest", "ANOVA F-score", "TimeSeriesSplit"]
      },
      {
        title: "Signal Engineering",
        description: "Handcrafted features that capture market dynamics and news pressure.",
        tools: ["SMA/EMA", "RSI", "Bollinger Bands", "Volatility", "Price ratios", "Custom sentiment lexicon"]
      },
      {
        title: "Post-Processing",
        description: "Financial realism layer applied after raw model prediction.",
        tools: ["Cholesky decomposition", "Correlation engineering", "Savitzky-Golay smoothing", "Volatility capping", "Meta-ensemble weighting"]
      }
    ]
  },
  "computer-vision": {
    cardTech: ["PyTorch", "CUDA", "AC-GAN", "python-chess", "Stockfish", "FastAPI"],
    cardFocus: "Hybrid Template-GAN system for tactical chess puzzle generation.",
    cardHighlights: ["Combines symbolic chess constraints with conditional generation", "Automatic validation through python-chess and Stockfish"],
    categories: [
      {
        title: "Core ML",
        description: "Generative learning stack for constrained chessboard generation.",
        tools: ["Python 3.10+", "PyTorch 2.0", "CUDA 11.7", "AC-GAN", "Conditional GAN", "NumPy", "Pandas"]
      },
      {
        title: "Chess Validation",
        description: "Rule-based and engine-based filtering for legal and useful tactical positions.",
        tools: ["python-chess 3.0", "Stockfish 15", "FEN notation", "Lichess puzzles", "Template constraints", "Quality filtering"]
      },
      {
        title: "MLOps & Serving",
        description: "Production path described for reproducible training, tracking and inference.",
        tools: ["pytest", "coverage", "Great Expectations", "MLflow", "Docker", "Kubernetes", "FastAPI", "Prometheus", "Redis"]
      }
    ]
  },
  "data-visualization": {
    cardTech: ["Python", "Plotly", "Pandas", "Scikit-learn", "BeautifulSoup", "BI"],
    cardFocus: "Renewable energy analytics suite for insight, clustering and visualization.",
    cardHighlights: ["Multi-source IRENA and World Bank data integration", "Interactive 3D plots, heatmaps and executive dashboards"],
    categories: [
      {
        title: "Data Collection",
        description: "Renewable energy data ingestion and preparation.",
        tools: ["Python", "Requests", "BeautifulSoup", "IRENA data", "World Bank data", "Parallel collection"]
      },
      {
        title: "Analytics",
        description: "Statistical and machine-learning layer for renewable energy patterns.",
        tools: ["Pandas", "NumPy", "Scikit-learn", "K-Means clustering", "StandardScaler", "Correlation analysis", "Trend forecasting"]
      },
      {
        title: "Visualization",
        description: "Interactive reporting and business-intelligence outputs.",
        tools: ["Plotly", "Matplotlib", "Seaborn", "3D scatter plots", "Animated timelines", "Heatmaps", "Dashboards"]
      }
    ]
  },
  "web-scraping": {
    cardTech: ["Python", "Playwright", "Scrapy", "Selenium", "MongoDB", "Kubernetes"],
    cardFocus: "Distributed extraction platform with proxy rotation and anti-detection.",
    cardHighlights: ["Browser automation with human-like navigation patterns", "Redis/MongoDB pipeline for scalable collection and storage"],
    categories: [
      {
        title: "Extraction Engines",
        description: "Browser and crawler technologies for dynamic and static targets.",
        tools: ["Python", "Playwright", "Selenium", "Scrapy", "BeautifulSoup", "Puppeteer concepts"]
      },
      {
        title: "Stealth & Reliability",
        description: "Anti-detection and resilience layer for high-volume collection.",
        tools: ["Proxy rotation", "Stealth headers", "Browser fingerprint randomization", "Rate limiting", "CAPTCHA integration", "Robots.txt checks"]
      },
      {
        title: "Data & Deployment",
        description: "Infrastructure used to queue, store and scale scraping workloads.",
        tools: ["Redis", "MongoDB", "Docker", "Kubernetes", "Automated monitoring", "Proxy health checks"]
      }
    ]
  },
  "gpt-app": {
    cardTech: ["PyTorch", "Transformers", "CUDA", "DDP", "AdamW", "TinyPy"],
    cardFocus: "Custom GPT architecture for deterministic TinyPy code execution tracing.",
    cardHighlights: ["Memory-Augmented Attention for long execution traces", "Execution step embeddings for explicit state tracking"],
    categories: [
      {
        title: "Neural Core",
        description: "From-scratch transformer architecture tailored to symbolic code tracing.",
        tools: ["Python", "PyTorch", "Decoder-only Transformer", "Token embeddings", "Position embeddings", "LayerNorm", "GELU"]
      },
      {
        title: "Research Innovations",
        description: "Architectural additions built for out-of-distribution reasoning.",
        tools: ["Memory-Augmented Attention", "Execution Step Embedding", "External dynamic memory", "TinyPy tokenizer", "Custom vocabulary"]
      },
      {
        title: "Training Stack",
        description: "Efficient distributed training and evaluation workflow.",
        tools: ["CUDA", "DistributedDataParallel", "AdamW", "Cross-entropy loss", "NumPy memmap", "TensorBoard", "Hugging Face ecosystem"]
      }
    ]
  },
  Protein: {
    cardTech: ["ESM-1b", "PyTorch", "TensorFlow", "LightGBM", "CatBoost", "XGBoost"],
    cardFocus: "Bioinformatics ensemble for protein subcellular localization.",
    cardHighlights: ["1,280-dimensional ESM-1b protein embeddings", "Multi-label ensemble across DNN and gradient boosting models"],
    categories: [
      {
        title: "Protein Representation",
        description: "Sequence and embedding features used to represent each protein.",
        tools: ["ESM-1b", "Protein language model embeddings", "UniProtKB/Swiss-Prot", "Sequence statistics", "Kingdom encoding", "One-hot features"]
      },
      {
        title: "Modeling",
        description: "Multi-label predictors evaluated and blended for robust performance.",
        tools: ["PyTorch", "TensorFlow/Keras", "DNN", "LightGBM", "XGBoost", "CatBoost", "Scikit-learn"]
      },
      {
        title: "Validation",
        description: "Training and scoring setup aligned with the competition metric.",
        tools: ["Pandas", "NumPy", "StandardScaler", "Binary cross-entropy", "Log-loss", "5-fold cross-validation", "Class imbalance handling"]
      }
    ]
  },
  "pfas-tracking": {
    cardTech: ["Neo4j", "Cypher", "Pandas", "Polars", "spaCy", "MCDA"],
    cardFocus: "PFAS environmental knowledge graph with ETL and risk scoring.",
    cardHighlights: ["104 European datasets unified into a property graph", "MCDA scoring for interpretable contamination risk analysis"],
    categories: [
      {
        title: "ETL & Geocoding",
        description: "High-volume environmental data processing and enrichment.",
        tools: ["Python 3.11", "Pandas", "Polars", "Photon API", "CSV/Parquet", "Data validation"]
      },
      {
        title: "Graph Database",
        description: "Knowledge graph modeling and querying stack.",
        tools: ["Neo4j 5.x", "Cypher", "py2neo", "APOC", "Property Graph", "Neo4j Browser"]
      },
      {
        title: "Schema & Risk Analysis",
        description: "Schema extraction, NLP and multi-criteria scoring methods.",
        tools: ["DiscoPG", "PG-Schema", "GraphML", "spaCy", "NLTK", "NumPy", "Scikit-learn", "Matplotlib", "Plotly", "Docker", "Poetry"]
      }
    ]
  }
};