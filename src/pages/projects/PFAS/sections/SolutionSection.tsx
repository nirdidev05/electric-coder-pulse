import { motion } from "framer-motion";
import { Database, GitBranch, Calculator, Lightbulb } from "lucide-react";

export const SolutionSection = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-foreground">Our Solution: 4-Step Approach</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This project proposes a methodological breakthrough by transitioning from tabular data management 
          to Property Graph modeling with Neo4j, combined with Multi-Criteria Decision Analysis.
        </p>
      </motion.div>

      {/* Solution Timeline */}
      <div className="space-y-8">
        {/* Step 1: Data Engineering */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
              1
            </div>
            <div className="flex-1 bg-card rounded-xl p-6 border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-emerald-500" />
                <h3 className="text-2xl font-semibold text-foreground">Data Engineering & ETL</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Developed a Python pipeline to process 104 CSV/Parquet files from the Forever Pollution Project. 
                  The challenge: datasets exhibited <strong className="text-foreground">"hidden semantic heterogeneity"</strong> 
                  where columns like <code className="bg-muted px-2 py-1 rounded text-xs">details</code> contained 
                  polymorphic JSON objects that changed structure by country.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-emerald-500">•</span>
                    <span><strong className="text-foreground">Reverse Engineering:</strong> Analyzed source Python scripts 
                    (Extractor and Normalizer modules on GitHub) to understand implicit business rules like EPSG coordinate 
                    conversions and censored value parsing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">•</span>
                    <span><strong className="text-foreground">MNAR Handling:</strong> Managed data sparsity (Missing Not At Random) 
                    by distinguishing between "measured sites" (with analytical values) vs "presumed sites" (without measurements)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">•</span>
                    <span><strong className="text-foreground">Entity Resolution:</strong> Unified site names using fuzzy matching 
                    (e.g., "Lyon-Pierre-Bénite" vs "Pierre Benite")</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-500">•</span>
                    <span><strong className="text-foreground">Geocoding Enrichment:</strong> Enhanced addresses with 
                    latitude/longitude using Photon API for 287K+ sites</span>
                  </li>
                </ul>
                <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
                  <p className="text-emerald-500 mb-2"># Output Statistics</p>
                  <p>Total rows processed: <span className="text-foreground">952,727</span></p>
                  <p>Unique sites identified: <span className="text-foreground">287,431</span></p>
                  <p>Data completeness: <span className="text-foreground">87.3%</span></p>
                  <p>Geolocation correctness: <span className="text-foreground">97.9%</span></p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-4">
                    <p className="text-sm font-semibold text-orange-400 mb-2">Extract</p>
                    <p className="text-xs leading-relaxed">
                      Read the 104 original Python scripts and recovered hidden country-specific rules, data conventions, and parser errors.
                    </p>
                  </div>
                  <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                    <p className="text-sm font-semibold text-blue-400 mb-2">Transform</p>
                    <p className="text-xs leading-relaxed">
                      Fixed 127 chemical names, converted 9 coordinate systems to WGS84, normalized all units to ng/L, and decoded polymorphic JSON.
                    </p>
                  </div>
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                    <p className="text-sm font-semibold text-emerald-400 mb-2">Load</p>
                    <p className="text-xs leading-relaxed">
                      Produced 4 clean import files: sites, measurements, substances, and graph connections ready for Neo4j Data Importer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 2: Graph Modeling */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
              2
            </div>
            <div className="flex-1 bg-card rounded-xl p-6 border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="w-6 h-6 text-blue-500" />
                <h3 className="text-2xl font-semibold text-foreground">Property Graph Design</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Instead of using automated tools like DiscoPG (which might fail to capture semantic nuances between 
                  "presumed" vs "confirmed" sites), we adopted a <strong className="text-foreground">Human-In-The-Loop</strong> approach. 
                  Developed a Python script using <code className="bg-muted px-1 rounded text-xs">ast.literal_eval</code> and 
                  regex to intelligently dissect JSON fields and free text.
                </p>
                <p className="leading-relaxed">
                  Transitioned from tabular data to a flexible Neo4j Property Graph following a 
                  <strong className="text-foreground"> deterministic Star Schema pattern</strong> with four core subsets:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                    <p className="font-semibold text-blue-400 mb-2">1️⃣ Site Nodes</p>
                    <p className="text-xs">Physical locations (factories, water treatment plants, airports)</p>
                    <div className="font-mono text-xs mt-3 bg-muted/30 p-2 rounded">
                      name, longitude, latitude, country, city, site_type
                    </div>
                  </div>
                  <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                    <p className="font-semibold text-purple-400 mb-2">2️⃣ Measurement Nodes</p>
                    <p className="text-xs">Temporal pollution events with timestamps</p>
                    <div className="font-mono text-xs mt-3 bg-muted/30 p-2 rounded">
                      date, matrix, value, unit, source_id
                    </div>
                  </div>
                  <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
                    <p className="font-semibold text-amber-400 mb-2">3️⃣ Substance Nodes</p>
                    <p className="text-xs">Deduplicated chemical catalog (PFOA, PFOS, GenX, etc.)</p>
                    <div className="font-mono text-xs mt-3 bg-muted/30 p-2 rounded">
                      chemical_name, CAS_number, toxicity_level
                    </div>
                  </div>
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4">
                    <p className="font-semibold text-emerald-400 mb-2">4️⃣ Relationships</p>
                    <p className="text-xs">Typed edges carrying concentration properties</p>
                    <div className="font-mono text-xs mt-3 bg-muted/30 p-2 rounded">
                      [:DETECTED {`{conc}`}]<br />
                      [:HAS_MEASUREMENT]<br />
                      [:LOCATED_IN]
                    </div>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Key Relationships (Edges with Properties):</p>
                  <div className="space-y-1 text-xs font-mono">
                    <p>(Site)-[:HAS_MEASUREMENT]-&gt;(Measurement)</p>
                    <p>(Measurement)-[:DETECTED <span className="text-purple-400">{`{concentration: 109000}`}</span>]-&gt;(Substance)</p>
                    <p>(Site)-[:LOCATED_IN]-&gt;(Region)</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Note: Relationships like <code className="bg-background px-1 py-0.5 rounded">[:DETECTED]</code> carry 
                    pollution concentration values as edge properties—a key advantage of Property Graphs over traditional RDF triples.
                  </p>
                </div>
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 mt-4">
                  <p className="text-sm font-semibold text-blue-400 mb-2">🔄 Final Import</p>
                  <p className="text-xs text-muted-foreground">
                    Used <strong className="text-foreground">Neo4j Data Importer</strong> GUI to load the cleaned CSV subsets 
                    into the Property Graph database, populating 287K+ nodes and 952K+ relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 3: MCDA Scoring */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
              3
            </div>
            <div className="flex-1 bg-card rounded-xl p-6 border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="w-6 h-6 text-purple-500" />
                <h3 className="text-2xl font-semibold text-foreground">Multi-Criteria Decision Analysis (MCDA)</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">Translated theoretical MCDA formulas into the Graph Data Science context</strong> 
                  by projecting them onto our Neo4j database using Cypher queries. Applied the algorithm to a strategic sample: 
                  the <strong className="text-foreground">Vallée de la Chimie</strong> (Chemical Valley) in Lyon.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-500/5 border-l-4 border-blue-500 rounded-lg p-4">
                    <p className="font-semibold text-blue-400 mb-2">T<sub>k</sub> — Textual Reputation Score (Adapted)</p>
                    <p className="text-sm">
                      Instead of analyzing citations, we scanned metadata to assign <strong>reputation tags</strong> to historical 
                      industrial actors. Major polluters like <strong>ARKEMA</strong> received maximum textual scores based on 
                      government documentation frequency.
                    </p>
                  </div>
                  <div className="bg-purple-500/5 border-l-4 border-purple-500 rounded-lg p-4">
                    <p className="font-semibold text-purple-400 mb-2">I<sub>k</sub> — Statistical Density Score (Adapted)</p>
                    <p className="text-sm">
                      Rather than citation counts, impact became <strong>measurement density</strong>: the logarithm of sampling 
                      events per site. More measurements = higher confidence in pollution estimates.
                    </p>
                    <div className="font-mono text-xs mt-2 bg-muted/30 p-2 rounded">
                      I<sub>k</sub> = log(1 + n_measurements) / log(1 + n_max)
                    </div>
                  </div>
                  <div className="bg-amber-500/5 border-l-4 border-amber-500 rounded-lg p-4">
                    <p className="font-semibold text-amber-400 mb-2">Q<sub>k</sub> — Data Quality Score</p>
                    <p className="text-sm">
                      Heuristic bonus based on source provenance: government reports (1.0), scientific articles (0.8), 
                      NGOs (0.6), industrial self-reporting (0.4).
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-lg p-6 mt-4">
                  <p className="text-center text-foreground font-semibold mb-3">Final MCDA Formula (Cypher Implementation)</p>
                  <div className="text-center text-2xl font-mono text-foreground">
                    S<sub>k</sub> = α·T<sub>k</sub> + β·I<sub>k</sub>
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    with α=0.4 (Textual) and β=0.6 (Information) — calibrated to prioritize statistical evidence over reputation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 4: Graph Querying */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
              4
            </div>
            <div className="flex-1 bg-card rounded-xl p-6 border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-amber-500" />
                <h3 className="text-2xl font-semibold text-foreground">Validation by Trace (Graph Verification)</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Implemented <strong className="text-foreground">"validation by trace"</strong> queries to verify MCDA rankings 
                  against raw concentration data. This revealed hidden contamination patterns invisible to reputation-based scoring alone.
                </p>
                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-amber-400 mb-2">Query 1: Find top 10 contaminated sites</p>
                    <pre className="font-mono text-xs bg-background p-3 rounded overflow-x-auto">
{`MATCH (s:Site)-[r:HAS_MEASUREMENT]->(m:Measurement)
WHERE m.concentration > 0
RETURN s.name, AVG(m.concentration) AS avg_pfas
ORDER BY avg_pfas DESC LIMIT 10`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-400 mb-2">Query 2: Detect causal links between industrial sites</p>
                    <pre className="font-mono text-xs bg-background p-3 rounded overflow-x-auto">
{`MATCH path = (s1:Site)-[:LOCATED_IN]->(r:Region)
<-[:LOCATED_IN]-(s2:Site)
WHERE s1.type = "factory" AND distance(s1, s2) < 5000
RETURN path`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
