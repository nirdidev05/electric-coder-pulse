import { motion } from "framer-motion";
import { TrendingUp, AlertCircle, CheckCircle, MapPin } from "lucide-react";

export const ResultsSection = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-foreground">Key Discoveries</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Applied the MCDA scoring algorithm to the "Vallée de la Chimie" (Lyon region), a historically 
          polluted industrial area. The analysis confirmed known contamination hotspots and revealed hidden patterns.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-red-500/10 to-orange-500/5 rounded-xl p-8 border border-red-500/20 shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4 text-foreground">What 17,500,000 ng/L Actually Means</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          The graph query did more than rank sites: it exposed a concentration value so high that it needed a dedicated reality check.
          In the poster narrative, this number is used as the clearest proof that reputation-only scoring is not enough.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
            <p className="font-semibold text-emerald-400">Low concern baseline</p>
            <p className="mt-2 text-muted-foreground">Regulatory thresholds are typically discussed at the tens to hundreds of ng/L scale.</p>
          </div>
          <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
            <p className="font-semibold text-amber-400">Arkema comparison</p>
            <p className="mt-2 text-muted-foreground">Arkema reached 109,000 ng/L in groundwater, already an important contamination signal.</p>
          </div>
          <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
            <p className="font-semibold text-red-400">Salindres hotspot</p>
            <p className="mt-2 text-muted-foreground">17.5M ng/L is roughly 160x higher than the Arkema peak and would be missed without trace validation.</p>
          </div>
        </div>
      </motion.div>

      {/* Vallée de la Chimie Case Study */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl p-8 border border-blue-500/20"
      >
        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-8 h-8 text-blue-500" />
          <h3 className="text-2xl font-bold text-foreground">Vallée de la Chimie Analysis</h3>
        </div>
        <p className="text-muted-foreground mb-6">
          The "Chemical Valley" near Lyon hosts over 50 industrial facilities producing fluoropolymers. 
          Our analysis focused on two critical sites with contrasting data availability.
        </p>

        {/* Discovery Timeline */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Discovery 1: Arkema */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-emerald-500" />
              <h4 className="text-xl font-semibold text-foreground">Discovery 1: Arkema Confirmation</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-500/5 border-l-4 border-emerald-500 rounded-lg p-4">
                <p className="text-sm font-semibold text-emerald-400 mb-2">Confirmed Risk ✓</p>
                <p className="text-sm text-muted-foreground">
                  The Arkema facility in Pierre-Bénite is a well-documented PFAS pollution source. 
                  Our MCDA algorithm correctly identified it as the top-ranked high-risk site, validating 
                  the methodology against established environmental databases.
                </p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">MCDA Total Score (S<sub>k</sub>):</span>
                  <span className="font-bold text-2xl text-foreground">4.37</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Textual Score (T<sub>k</sub>):</span>
                    <span className="text-foreground font-semibold">High</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground">Elevated due to frequent mentions in government reports and industrial documentation</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Information Score (I<sub>k</sub>):</span>
                    <span className="text-foreground font-semibold">Very High</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground">127 measurements provide strong statistical confidence</p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 mt-4">
                <p className="text-xs font-semibold text-foreground mb-2">Data Characteristics:</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• <strong>127 measurements</strong> with high concentration values</li>
                  <li>• Peak detection: <strong>109,000 ng/L</strong> (PFOA in groundwater)</li>
                  <li>• Sources: Government reports (90%), scientific articles (10%)</li>
                  <li>• Temporal coverage: 2015-2023</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Discovery 2: Salindres */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-amber-500" />
              <h4 className="text-xl font-semibold text-foreground">Discovery 2: GIE CHIMIE SALINDRES "Weak Signal"</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-amber-500/5 border-l-4 border-amber-500 rounded-lg p-4">
                <p className="text-sm font-semibold text-amber-400 mb-2">Critical Discovery ⚠️</p>
                <p className="text-sm text-muted-foreground">
                  GIE CHIMIE SALINDRES (30 km from Lyon) ranked only <strong className="text-amber-400">8th position</strong> with 
                  minimal textual reputation. However, <strong className="text-foreground">"validation by trace"</strong> 
                  (graph query verification) revealed an extreme concentration hotspot—demonstrating the power of 
                  our Neo4j architecture to surface hidden contamination patterns.
                </p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">MCDA Total Score (S<sub>k</sub>):</span>
                  <span className="font-bold text-2xl text-foreground">3.80</span>
                </div>
                <p className="text-xs text-amber-400 font-semibold">Ranked 8th due to low textual reputation</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Textual Score (T<sub>k</sub>):</span>
                    <span className="text-foreground font-semibold">Low</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground">Minimal mentions in official documentation</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Information Score (I<sub>k</sub>):</span>
                    <span className="text-foreground font-semibold">Very Low</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground">Only 8 measurements recorded (sparse data)</p>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mt-4">
                <p className="text-xs font-semibold text-amber-400 mb-2">⚠️ Critical Finding: Validation by Trace</p>
                <p className="text-xs text-muted-foreground mb-3">
                  Despite ranking 8th in MCDA scores (low textual reputation), a Cypher <strong>validation query</strong> 
                  on the Neo4j graph revealed the highest recorded concentration in the entire European dataset:
                </p>
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-500">17,500,000 ng/L</p>
                  <p className="text-xs text-muted-foreground mt-1">(17.5 million ng/L — 160× higher than Arkema)</p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 mt-4">
                <p className="text-xs font-semibold text-foreground mb-2">Scientific Interpretation:</p>
                <p className="text-xs text-muted-foreground">
                  This is a <strong className="text-amber-400">"weak signal"</strong> that would have been invisible in traditional 
                  SQL databases. The graph architecture enabled us to query raw concentration values independently of reputation scores, 
                  proving that Neo4j + MCDA provides <strong className="text-foreground">actionable insights for public health authorities</strong> 
                  to prioritize urgent site investigations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Comparative Analysis */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-card rounded-xl p-8 border border-border shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-6 text-foreground">Comparative Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Metric</th>
                <th className="text-center py-3 px-4 font-semibold text-emerald-400">Arkema</th>
                <th className="text-center py-3 px-4 font-semibold text-amber-400">Salindres</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Number of Measurements</td>
                <td className="text-center font-mono">127</td>
                <td className="text-center font-mono">8</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Max Concentration (ng/L)</td>
                <td className="text-center font-mono">109,000</td>
                <td className="text-center font-mono text-amber-400 font-bold">17,500,000</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Data Sources</td>
                <td className="text-center">Gov (90%), Academic (10%)</td>
                <td className="text-center">NGO (75%), Industrial (25%)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Temporal Coverage</td>
                <td className="text-center">2015-2023 (9 years)</td>
                <td className="text-center">2019-2021 (2 years)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">Textual Reputation</td>
                <td className="text-center">High (frequent mentions)</td>
                <td className="text-center text-amber-400">Low (minimal citations)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-foreground">Final MCDA Score (Ranking)</td>
                <td className="text-center font-bold text-lg text-emerald-400">4.37 (1st)</td>
                <td className="text-center font-bold text-lg text-amber-400">3.80 (8th)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Methodology Validation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-xl p-8 border border-emerald-500/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-8 h-8 text-emerald-500" />
          <h3 className="text-2xl font-bold text-foreground">Scientific Impact & Methodology Validation</h3>
        </div>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <p className="font-semibold text-foreground">✓ Confirmed Known Hotspots</p>
              <p className="text-muted-foreground">
                The MCDA algorithm successfully ranked <strong>Arkema (Score: 4.37)</strong> as the #1 contamination source, 
                validating our scoring formula against established EPA environmental databases.
              </p>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-foreground">✓ Detected Hidden Patterns</p>
              <p className="text-muted-foreground">
                <strong>GIE CHIMIE SALINDRES</strong> emerged as a "weak signal" (ranked 8th with score 3.80) despite minimal 
                textual reputation—demonstrating the power of graph-based validation queries.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg p-6 border border-indigo-500/20">
            <h4 className="text-lg font-semibold text-foreground mb-3">🎯 The Scientific Breakthrough</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The <strong className="text-foreground">Neo4j Property Graph architecture</strong> coupled with 
              <strong className="text-foreground"> MCDA scoring</strong> enabled us to isolate an extreme contamination 
              hotspot (17.5M ng/L) that was <strong className="text-amber-400">invisible under traditional reputation-based ranking</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="bg-card rounded-lg p-3 border border-border">
                <p className="font-semibold text-emerald-400 mb-1">✅ What Worked</p>
                <p className="text-muted-foreground">
                  Graph queries allowed independent verification of raw concentration data, bypassing reputation bias.
                </p>
              </div>
              <div className="bg-card rounded-lg p-3 border border-border">
                <p className="font-semibold text-blue-400 mb-1">📊 Practical Application</p>
                <p className="text-muted-foreground">
                  Provides actionable decision support for environmental agencies to prioritize cleanup budgets.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-amber-400 mb-2">🏛️ Policy Impact</p>
            <p className="text-xs text-muted-foreground">
              This methodology proves that <strong>Property Graphs are superior to SQL databases</strong> for 
              integrating heterogeneous environmental data, offering a reusable pipeline for tracking other 
              "forever chemicals" (heavy metals, dioxins, microplastics).
            </p>
          </div>

          <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-400 mb-2">People & Nature</p>
            <p className="text-xs text-muted-foreground">
              Around Pierre-Bénite, the same contamination chain reaches taps, soils, eggs, poultry, and Rhône fish.
              The graph makes these connections explicit, so scientists, governments, and journalists can prioritize
              urgent clean-up instead of treating each measurement as an isolated spreadsheet row.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
