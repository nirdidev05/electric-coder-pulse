import { motion } from "framer-motion";
import { Code, Database, GitGraph, Brain, FileCode, Cpu } from "lucide-react";

export const TechStackSection = () => {
  const technologies = [
    {
      category: "Data Processing",
      icon: Code,
      color: "emerald",
      tools: [
        { name: "Python 3.11", description: "Core programming language for ETL pipelines" },
        { name: "Pandas", description: "Tabular data manipulation (952K rows)" },
        { name: "Polars", description: "High-performance DataFrame operations" },
        { name: "Photon API", description: "Geocoding service for address enrichment" },
      ]
    },
    {
      category: "Graph Database",
      icon: Database,
      color: "blue",
      tools: [
        { name: "Neo4j 5.x", description: "Property Graph database engine" },
        { name: "Cypher", description: "Declarative graph query language" },
        { name: "py2neo", description: "Python driver for Neo4j integration" },
        { name: "APOC", description: "Neo4j procedures library for graph algorithms" },
      ]
    },
    {
      category: "Schema Discovery",
      icon: GitGraph,
      color: "purple",
      tools: [
        { name: "DiscoPG", description: "Automatic Property Graph schema extraction" },
        { name: "PG-Schema", description: "Standard format for graph schema representation" },
        { name: "GraphML", description: "Graph exchange format for visualization" },
      ]
    },
    {
      category: "NLP & Scoring",
      icon: Brain,
      color: "amber",
      tools: [
        { name: "spaCy", description: "Natural Language Processing for textual analysis" },
        { name: "NLTK", description: "Tokenization and keyword extraction" },
        { name: "NumPy", description: "Matrix operations for MCDA calculations" },
        { name: "Scikit-learn", description: "Normalization and scaling utilities" },
      ]
    },
    {
      category: "Visualization",
      icon: FileCode,
      color: "pink",
      tools: [
        { name: "Matplotlib", description: "Statistical charts and heatmaps" },
        { name: "Plotly", description: "Interactive contamination maps" },
        { name: "Neo4j Browser", description: "Graph visualization interface" },
      ]
    },
    {
      category: "Development",
      icon: Cpu,
      color: "indigo",
      tools: [
        { name: "Jupyter", description: "Interactive notebooks for experimentation" },
        { name: "Git/GitHub", description: "Version control and collaboration" },
        { name: "Docker", description: "Neo4j containerization for reproducibility" },
        { name: "Poetry", description: "Python dependency management" },
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
    emerald: { bg: "bg-emerald-500/5", border: "border-emerald-500/20", text: "text-emerald-400", icon: "text-emerald-500" },
    blue: { bg: "bg-blue-500/5", border: "border-blue-500/20", text: "text-blue-400", icon: "text-blue-500" },
    purple: { bg: "bg-purple-500/5", border: "border-purple-500/20", text: "text-purple-400", icon: "text-purple-500" },
    amber: { bg: "bg-amber-500/5", border: "border-amber-500/20", text: "text-amber-400", icon: "text-amber-500" },
    pink: { bg: "bg-pink-500/5", border: "border-pink-500/20", text: "text-pink-400", icon: "text-pink-500" },
    indigo: { bg: "bg-indigo-500/5", border: "border-indigo-500/20", text: "text-indigo-400", icon: "text-indigo-500" },
  };

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-foreground">Technology Stack</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This project leverages cutting-edge technologies for graph data management, 
          multi-criteria scoring, and environmental data analysis.
        </p>
      </motion.div>

      {/* Technology Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {technologies.map((tech, idx) => {
          const colors = colorMap[tech.color];
          const Icon = tech.icon;

          return (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${colors.bg} rounded-xl p-6 border ${colors.border} shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 bg-card rounded-lg border ${colors.border}`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className={`text-xl font-semibold ${colors.text}`}>{tech.category}</h3>
              </div>
              <div className="space-y-3">
                {tech.tools.map((tool, toolIdx) => (
                  <div key={toolIdx} className="bg-card rounded-lg p-3 border border-border">
                    <p className="font-semibold text-foreground text-sm">{tool.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{tool.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Architecture Diagram */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-card rounded-xl p-8 border border-border shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-6 text-foreground">System Architecture</h3>
        <div className="space-y-6">
          {/* Data Flow */}
          <div className="bg-muted/30 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center flex-1">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="font-semibold text-emerald-400 mb-2">📁 Raw Data</p>
                  <p className="text-xs text-muted-foreground">104 CSV/Parquet files</p>
                </div>
              </div>
              <div className="text-muted-foreground text-2xl">→</div>
              <div className="text-center flex-1">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="font-semibold text-blue-400 mb-2">🔄 ETL Pipeline</p>
                  <p className="text-xs text-muted-foreground">Python + Pandas</p>
                </div>
              </div>
              <div className="text-muted-foreground text-2xl">→</div>
              <div className="text-center flex-1">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                  <p className="font-semibold text-purple-400 mb-2">🗄️ Neo4j Graph</p>
                  <p className="text-xs text-muted-foreground">Property Graph DB</p>
                </div>
              </div>
              <div className="text-muted-foreground text-2xl">→</div>
              <div className="text-center flex-1">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                  <p className="font-semibold text-amber-400 mb-2">📊 MCDA Scoring</p>
                  <p className="text-xs text-muted-foreground">Risk quantification</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Technical Decisions */}
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
              <p className="font-semibold text-blue-400 mb-2">Why Neo4j over SQL?</p>
              <p className="text-muted-foreground">
                Relational databases require fixed schemas. Neo4j's schema-optional approach 
                allows storing heterogeneous data without NULL proliferation.
              </p>
            </div>
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
              <p className="font-semibold text-purple-400 mb-2">Why Property Graphs?</p>
              <p className="text-muted-foreground">
                Property Graphs (nodes + relationships + attributes) model real-world entities 
                more naturally than RDF triples or tables.
              </p>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
              <p className="font-semibold text-amber-400 mb-2">Why MCDA over ML?</p>
              <p className="text-muted-foreground">
                Machine learning requires large labeled datasets. MCDA works with sparse data 
                by encoding expert knowledge into formula weights.
              </p>
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4">
              <p className="font-semibold text-emerald-400 mb-2">Why Cypher over SQL?</p>
              <p className="text-muted-foreground">
                Cypher uses ASCII-art syntax for pattern matching: (a)-[:LINK]-&gt;(b) is more 
                intuitive than multi-table JOINs for graph traversals.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Code Repository */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-xl p-8 border border-indigo-500/20 text-center"
      >
        <h3 className="text-2xl font-bold mb-4 text-foreground">Open Source Repository</h3>
        <p className="text-muted-foreground mb-6">
          Full source code, Jupyter notebooks, and dataset documentation available on GitHub
        </p>
        <a
          href="https://github.com/rayanMELZI/Conversion-de-donnees-PFAS-du-CNRS"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </motion.div>
    </div>
  );
};
