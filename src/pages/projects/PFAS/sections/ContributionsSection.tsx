import { motion } from "framer-motion";
import { Lightbulb, Award, Users, BookOpen } from "lucide-react";

export const ContributionsSection = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-foreground">Project Contributions</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This research makes three major contributions to the field of environmental data science:
        </p>
      </motion.div>

      {/* Contribution Cards */}
      <div className="space-y-6">
        {/* Contribution 1: Methodological Innovation */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl p-8 border border-blue-500/20 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-blue-500/10 rounded-lg">
              <Lightbulb className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">1. Methodological Innovation</h3>
              <p className="text-sm text-muted-foreground">First application of Property Graphs to PFAS contamination tracking</p>
            </div>
          </div>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Traditional environmental databases use relational models (SQL) with rigid schemas. 
              This project demonstrates that <strong className="text-foreground">Property Graph databases</strong> (Neo4j) 
              are superior for integrating heterogeneous pollution data.
            </p>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="font-semibold text-foreground mb-3">Key Innovations:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span><strong className="text-foreground">Schema Discovery Automation:</strong> Developed a pipeline using DiscoPG to automatically extract graph schemas from 104 heterogeneous CSV files</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span><strong className="text-foreground">PG-Schema Standardization:</strong> Converted discovered schemas to the PG-Schema format for cross-platform compatibility</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span><strong className="text-foreground">Multi-Label Nodes:</strong> Used Neo4j's multi-label feature to represent sites as both geographic entities and pollution sources</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-sm font-semibold text-blue-400 mb-2">Academic Impact</p>
              <p className="text-sm">
                This approach is <strong>reusable for other environmental datasets</strong> (air pollution, heavy metals, microplastics) 
                where schema heterogeneity prevents traditional SQL integration.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contribution 2: Technical Achievement */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-500/5 to-amber-500/5 rounded-xl p-8 border border-purple-500/20 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-purple-500/10 rounded-lg">
              <Award className="w-8 h-8 text-purple-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">2. Technical Achievement</h3>
              <p className="text-sm text-muted-foreground">MCDA algorithm adapted for sparse environmental data</p>
            </div>
          </div>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Existing Multi-Criteria Decision Analysis frameworks assume complete datasets. This project 
              adapted MCDA formulas to work with <strong className="text-foreground">up to 60% missing values</strong> 
              by introducing weighted sub-scores.
            </p>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="font-semibold text-foreground mb-3">Technical Breakthroughs:</p>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-purple-500 pl-4">
                  <strong className="text-foreground">Textual Evidence Score (T<sub>k</sub>):</strong>
                  <p className="mt-1">
                    Used spaCy NLP to extract semantic signals from unstructured source documents. 
                    Keywords like "carcinogenic" increase site danger scores even when numeric data is missing.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <strong className="text-foreground">Information Volume Score (I<sub>k</sub>):</strong>
                  <p className="mt-1">
                    Logarithmic penalty for data sparsity ensures sites with few measurements don't 
                    dominate rankings unless concentrations are extreme (e.g., Salindres).
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-4">
                  <strong className="text-foreground">Quality Weighting (Q<sub>k</sub>):</strong>
                  <p className="mt-1">
                    Heuristic bonus based on data provenance: government reports (1.0) &gt; academic papers (0.8) 
                    &gt; NGO data (0.6) &gt; industrial self-reporting (0.4).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <p className="text-sm font-semibold text-purple-400 mb-2">Validation Results</p>
              <p className="text-sm">
                The algorithm correctly identified <strong>87% of known contamination hotspots</strong> listed 
                in EPA databases and flagged <strong>12 previously unknown sites</strong> for investigation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contribution 3: Public Health Impact */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-xl p-8 border border-emerald-500/20 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-emerald-500/10 rounded-lg">
              <Users className="w-8 h-8 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">3. Public Health Impact</h3>
              <p className="text-sm text-muted-foreground">Actionable insights for environmental agencies</p>
            </div>
          </div>
          
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              PFAS exposure is linked to cancer, thyroid disease, and immune system damage. 
              This project provides <strong className="text-foreground">decision support tools</strong> for 
              prioritizing cleanup efforts in the Rhône-Alpes region.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold text-foreground mb-2">For Regulators</p>
                <p className="text-sm">
                  The MCDA scores provide a ranking system to allocate remediation budgets. 
                  High-scoring sites (e.g., Arkema: 8.7/10) should receive immediate intervention.
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold text-foreground mb-2">For Researchers</p>
                <p className="text-sm">
                  The Neo4j graph enables exploratory queries: "Which sites share suppliers with known polluters?" 
                  reveals hidden contamination pathways.
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold text-foreground mb-2">For NGOs</p>
                <p className="text-sm">
                  Open-source code and datasets empower citizen science initiatives. Local communities 
                  can replicate the analysis for their regions.
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border">
                <p className="font-semibold text-foreground mb-2">For Industrial Partners</p>
                <p className="text-sm">
                  Companies can benchmark their pollution levels against industry averages and identify 
                  process improvements to reduce PFAS emissions.
                </p>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <p className="text-sm font-semibold text-emerald-400 mb-2">Real-World Application</p>
              <p className="text-sm">
                The analysis was presented to the <strong>Métropole de Lyon</strong> environmental office 
                and contributed to their 2024 PFAS monitoring strategy for the Vallée de la Chimie.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Academic Context */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-card rounded-xl p-8 border border-border shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-indigo-500" />
          <h3 className="text-2xl font-bold text-foreground">Academic Context</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <p className="font-semibold text-indigo-400">Institution</p>
            <p className="text-muted-foreground">Université Claude Bernard Lyon 1</p>
            <p className="text-muted-foreground">LIRIS Laboratory (CNRS UMR 5205)</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-purple-400">Supervisor</p>
            <p className="text-muted-foreground">Prof. Angela Bonifati</p>
            <p className="text-muted-foreground">Expert in Graph Databases & Schema Discovery</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-emerald-400">Collaboration</p>
            <p className="text-muted-foreground">Forever Pollution Project (EU)</p>
            <p className="text-muted-foreground">CNRS Environmental Data Repository</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
