import { motion } from "framer-motion";
import { Rocket, TrendingUp, Globe, Sparkles } from "lucide-react";

export const FutureSection = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-foreground">Future Directions</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          This project opens several research paths for environmental data science, 
          graph-based pollution tracking, and public health decision systems.
        </p>
      </motion.div>

      {/* Development Roadmap */}
      <div className="space-y-8">
        {/* Short-term (0-6 months) */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="flex-1 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-xl p-6 border border-emerald-500/20 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Short-Term (0-6 months)</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-emerald-400 mb-2">📊 Interactive Dashboard</p>
                  <p className="text-sm">
                    Deploy a web interface (React + D3.js) allowing environmental agencies to explore 
                    the Neo4j graph visually. Users can filter by region, substance type, or contamination date.
                  </p>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded">D3.js</span>
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded">Neo4j HTTP API</span>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-emerald-400 mb-2">🔄 Real-Time Data Integration</p>
                  <p className="text-sm">
                    Create ETL pipelines to automatically ingest new PFAS measurements from European 
                    environmental agencies as they publish reports (quarterly updates).
                  </p>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded">Apache Airflow</span>
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded">Web Scraping</span>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-emerald-400 mb-2">🏷️ Improved Entity Resolution</p>
                  <p className="text-sm">
                    Implement machine learning-based name matching (RecordLinkage library) to unify sites 
                    with spelling variations (e.g., "St-Fons" vs "Saint-Fons").
                  </p>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded">RecordLinkage</span>
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded">Fuzzy Matching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Medium-term (6-18 months) */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="flex-1 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl p-6 border border-blue-500/20 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Medium-Term (6-18 months)</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-blue-400 mb-2">🤖 Predictive Modeling</p>
                  <p className="text-sm">
                    Train Graph Neural Networks (GNNs) to predict future contamination spread based on 
                    industrial activity patterns, groundwater flow, and historical measurements.
                  </p>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded">PyTorch Geometric</span>
                    <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded">Graph Convolutional Networks</span>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-blue-400 mb-2">🌍 Geographic Expansion</p>
                  <p className="text-sm">
                    Extend the dataset beyond Rhône-Alpes to cover all of France (~450 additional sites) 
                    and eventually pan-European integration (Germany, Belgium, Netherlands).
                  </p>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded">EEA Databases</span>
                    <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded">Multi-Language NLP</span>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-blue-400 mb-2">🔬 Chemical Pathway Analysis</p>
                  <p className="text-sm">
                    Model PFAS transformation chains: PFOA → shorter-chain PFAS metabolites. 
                    Use Neo4j relationship properties to encode chemical reactions and half-lives.
                  </p>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded">ChemAxon</span>
                    <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded">RDKit</span>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-blue-400 mb-2">📝 Academic Publication</p>
                  <p className="text-sm">
                    Submit research paper to <em>Environmental Science & Technology</em> or 
                    <em>SIGMOD Conference</em> (database systems track) focusing on the Property Graph methodology.
                  </p>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    <span className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded">Peer Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Long-term (18+ months) */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center shadow-lg">
              <Globe className="w-8 h-8" />
            </div>
            <div className="flex-1 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl p-6 border border-purple-500/20 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Long-Term Vision (18+ months)</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-purple-400 mb-2">🏛️ Policy Integration</p>
                  <p className="text-sm">
                    Collaborate with the European Environment Agency (EEA) to integrate this system into 
                    official EU environmental monitoring infrastructure (Copernicus Land Monitoring Service).
                  </p>
                </div>

                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-purple-400 mb-2">🔗 Multi-Pollutant Graphs</p>
                  <p className="text-sm">
                    Expand beyond PFAS to model other "forever chemicals" (heavy metals, dioxins, PCBs) 
                    in the same graph, revealing synergistic contamination patterns.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-purple-400 mb-2">🌐 Global Knowledge Graph</p>
                  <p className="text-sm">
                    Link with existing environmental knowledge graphs (e.g., Wikidata's chemical taxonomy, 
                    DBpedia's industrial facility database) to enable cross-domain queries.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-purple-400 mb-2">🎓 Educational Platform</p>
                  <p className="text-sm">
                    Develop an educational module for university courses on graph databases and environmental 
                    data science, using this project as a hands-on case study.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-8 border border-indigo-500/20 text-center"
      >
        <Rocket className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-4">Join the Effort</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          This project is open source and welcomes contributions from data scientists, 
          environmental researchers, and civic technology developers.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/rayanMELZI/Conversion-de-donnees-PFAS-du-CNRS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Contribute on GitHub
          </a>
          <a
            href="mailto:rayan.melzi@etu.univ-lyon1.fr"
            className="inline-flex items-center gap-2 bg-card hover:bg-muted border border-border text-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Researcher
          </a>
        </div>
      </motion.div>

      {/* Research Impact */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-card rounded-xl p-8 border border-border shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-6 text-foreground">Expected Research Impact</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="text-center p-6 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
            <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-muted-foreground">Sites to be Protected</div>
          </div>
          <div className="text-center p-6 bg-blue-500/5 rounded-lg border border-blue-500/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">10M+</div>
            <div className="text-muted-foreground">People Affected in EU</div>
          </div>
          <div className="text-center p-6 bg-purple-500/5 rounded-lg border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">€2B</div>
            <div className="text-muted-foreground">Potential Cleanup Costs</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
