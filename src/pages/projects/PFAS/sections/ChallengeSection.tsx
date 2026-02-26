import { motion } from "framer-motion";
import { AlertTriangle, Database, FileQuestion, Network } from "lucide-react";

export const ChallengeSection = () => {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-foreground">The Scientific Challenge</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          The "Forever Pollution Project" released 104 heterogeneous datasets covering European PFAS contamination sites. 
          Traditional relational database approaches failed due to extreme structural variability across sources.
        </p>
      </motion.div>

      {/* Challenge Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Challenge 1: Hidden Heterogeneity */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-6 border border-border shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-red-500/10 rounded-lg">
              <Database className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Hidden Heterogeneity</h3>
          </div>
          <div className="space-y-3 text-muted-foreground">
            <p className="text-sm leading-relaxed">
              Each of the 104 files has its own attribute schema. Columns like "geographic coordinates" may be named 
              differently: <code className="bg-muted px-2 py-1 rounded text-xs">latitude</code> in one file, 
              <code className="bg-muted px-2 py-1 rounded text-xs">lat_deg</code> in another, or absent entirely.
            </p>
            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 mt-4">
              <p className="text-sm font-semibold text-red-400">Problem</p>
              <p className="text-sm mt-2">
                Attempting to unify these sources via SQL normalization would result in hundreds of NULL values 
                and compromise relational integrity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Challenge 2: Data Sparsity */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-6 border border-border shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-500/10 rounded-lg">
              <FileQuestion className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Data Sparsity</h3>
          </div>
          <div className="space-y-3 text-muted-foreground">
            <p className="text-sm leading-relaxed">
              Many sites have missing concentration values, undefined substance names, or lack contamination dates. 
              This makes it impossible to calculate pollution severity using simple aggregation functions.
            </p>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-lg p-4 mt-4">
              <p className="text-sm font-semibold text-amber-400">Challenge</p>
              <p className="text-sm mt-2">
                How can we assign a "danger score" to a site when 40% of measurements are incomplete?
              </p>
            </div>
          </div>
        </motion.div>

        {/* Challenge 3: Multiple Provenances */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-6 border border-border shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <Network className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Multiple Provenances</h3>
          </div>
          <div className="space-y-3 text-muted-foreground">
            <p className="text-sm leading-relaxed">
              The data originates from 4 distinct types of sources:
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>Official reports</strong> (government, EPA)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>Scientific articles</strong> (peer-reviewed)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>NGO investigations</strong> (Greenpeace, local associations)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">•</span>
                <span><strong>Industrial self-reporting</strong></span>
              </li>
            </ul>
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4 mt-4">
              <p className="text-sm font-semibold text-purple-400">Reliability Question</p>
              <p className="text-sm mt-2">
                How do we weight evidence from different source types? Official reports should have more 
                influence than unverified NGO data.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Challenge 4: Graph Complexity */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-6 border border-border shadow-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Graph Complexity</h3>
          </div>
          <div className="space-y-3 text-muted-foreground">
            <p className="text-sm leading-relaxed">
              Creating relationships between sites, substances, and measurements introduces potential 
              ambiguities: should relationships be typed by contamination pathway (groundwater, soil, air)?
            </p>
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 mt-4">
              <p className="text-sm font-semibold text-blue-400">Technical Requirement</p>
              <p className="text-sm mt-2">
                Implementing Schema Discovery tools (DiscoPG) to automatically detect recurring patterns 
                across heterogeneous sources and generate PG-Schema models.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Why Traditional Approaches Fail */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-red-500/5 to-amber-500/5 rounded-xl p-8 border border-red-500/20"
      >
        <h3 className="text-2xl font-bold mb-4 text-foreground">Why Traditional SQL Approaches Fail</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <p className="font-semibold text-foreground">❌ Schema Rigidity</p>
            <p className="text-muted-foreground">
              Relational tables require fixed columns. Adding new attributes from new datasets 
              requires ALTER TABLE operations and breaks backward compatibility.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">❌ NULL Proliferation</p>
            <p className="text-muted-foreground">
              Unified tables would contain ~60% NULL values due to structural misalignment, 
              making aggregations unreliable.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-foreground">❌ Complex JOINs</p>
            <p className="text-muted-foreground">
              Connecting sites, substances, and measurements via foreign keys creates 
              deeply nested queries with poor performance on large datasets.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
