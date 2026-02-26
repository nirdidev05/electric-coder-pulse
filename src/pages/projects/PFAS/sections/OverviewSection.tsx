import { motion } from "framer-motion";
import { Database, GitBranch, TrendingUp, Brain } from "lucide-react";

export const OverviewSection = () => {
  return (
    <div className="space-y-16">
      {/* Executive Summary */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-foreground">Executive Summary</h2>
        <div className="bg-card rounded-xl p-8 border border-border shadow-lg space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            PFAS (Per- and PolyFluoroAlkyl Substances) are "forever chemicals" that accumulate in the environment. 
            The European "Forever Pollution Project" published 104 distinct datasets, but these data exhibited deep 
            semantic and structural heterogeneity, making them impossible to analyze using traditional relational databases (SQL).
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            This research project proposes a <strong className="text-foreground">methodological breakthrough</strong> by transitioning from tabular data management 
            to Property Graph modeling, implementing Schema Discovery techniques, and developing a Multi-Criteria 
            Decision Analysis (MCDA) engine to quantify pollution risks despite data sparsity.
          </p>
        </div>
      </motion.section>

      {/* Fusion of Two Scientific Challenges */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-foreground">Fusion of Two Scientific Challenges</h2>
        <div className="bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-xl p-8 border border-indigo-500/20 space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            This project is the fusion of two major scientific challenges: <strong className="text-foreground">massive data integration</strong> (Subject 1) 
            and the creation of a <strong className="text-foreground">mathematical decision support model</strong> (Subject 2).
          </p>

          {/* Challenge 1: Data Engineering */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-semibold text-foreground">The "PFAS Data" Challenge (Data Engineering)</h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Supervised by Professor Angela Bonifati, this challenge focused on the "Forever Pollution Project" data. 
                The starting point: 104 datasets (CSV and Parquet files) with varied origins, making integration extremely 
                difficult as each file had its own attributes.
              </p>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3">Required Objectives:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">•</span>
                    Transform tabular data into a Property Graph with multiple node labels
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">•</span>
                    Use automatic schema discovery tools like DiscoPG
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">•</span>
                    Convert schemas to PG-Schema standard
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">•</span>
                    Explore the final graph to find correlations and causal links
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Challenge 2: MCDA */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-semibold text-foreground">The "Scoring & MCDA" Challenge (Mathematical Algorithms)</h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                This second subject introduced Multi-Criteria Decision Analysis (MCDA) logic to extract 
                "evidence" from data and adapt formulas to our project context.
              </p>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3">Required Mathematical Formulas:</h4>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <strong className="text-foreground">Textual Score (T<sub>k</sub>):</strong> Weighted sum based on occurrence 
                    of effect words/verbs (e.g., "significantly improves" = +2, "associated with" = +1). 
                    Extracts semantic signals from unstructured source documents.
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <strong className="text-foreground">Impact Score (I<sub>k</sub>):</strong> Measures information 
                    volume with logarithmic function: <code className="bg-muted px-1 py-0.5 rounded text-xs">log(1 + citations)</code>. 
                    Quantifies data reliability through measurement density.
                  </div>
                  <div className="border-l-4 border-amber-500 pl-4">
                    <strong className="text-foreground">Quality Score (Q<sub>k</sub>):</strong> Heuristic bonus based on data source 
                    (e.g., meta-analysis = +2, government report = +1.5, NGO data = +0.6)
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4 bg-indigo-500/5 p-3 rounded">
                    <strong className="text-foreground">Total Score (S<sub>k</sub>):</strong>
                    <div className="font-mono text-lg text-center mt-2 text-foreground">
                      S<sub>k</sub> = max(α T<sub>k</sub> + β I<sub>k</sub> + γ Q<sub>k</sub>, ε)
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      With max(S<sub>k</sub>, ε) to avoid zero values in sparse datasets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Impact */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-foreground">Project Impact</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
            <Database className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">952K+</div>
            <div className="text-sm text-muted-foreground">Environmental Observations</div>
          </div>
          <div className="text-center p-6 bg-blue-500/5 rounded-lg border border-blue-500/20">
            <GitBranch className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">104</div>
            <div className="text-sm text-muted-foreground">Heterogeneous Data Sources</div>
          </div>
          <div className="text-center p-6 bg-purple-500/5 rounded-lg border border-purple-500/20">
            <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">287K+</div>
            <div className="text-sm text-muted-foreground">Unique Sites Identified</div>
          </div>
          <div className="text-center p-6 bg-amber-500/5 rounded-lg border border-amber-500/20">
            <Brain className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <div className="text-3xl font-bold text-foreground">87.3%</div>
            <div className="text-sm text-muted-foreground">Data Completeness</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
