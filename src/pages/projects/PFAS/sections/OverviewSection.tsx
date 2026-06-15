import { motion, useInView } from "framer-motion";
import { 
  Database, 
  GitBranch, 
  TrendingUp, 
  Brain, 
  Network,
  Microscope,
  AlertTriangle,
  FileJson,
  Merge,
  Scale,
  Target,
  Sparkles,
  ChevronRight,
  Beaker,
  MapPin,
  Activity,
  Layers,
  Zap
} from "lucide-react";
import { useRef, useState } from "react";

// Composant pour les formules mathématiques stylisées
const FormulaCard = ({ title, formula, description, color, icon: Icon, delay }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colors = {
    blue: "from-[#0080FF]/20 to-[#0080FF]/5 border-[#0080FF]/30 text-[#0080FF]",
    purple: "from-[#8B5CF6]/20 to-[#8B5CF6]/5 border-[#8B5CF6]/30 text-[#8B5CF6]",
    amber: "from-[#F59E0B]/20 to-[#F59E0B]/5 border-[#F59E0B]/30 text-[#F59E0B]",
    emerald: "from-[#10B981]/20 to-[#10B981]/5 border-[#10B981]/30 text-[#10B981]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${colors[color as keyof typeof colors]} border p-5 backdrop-blur-sm transition-all duration-300 ${isHovered ? 'scale-[1.02] shadow-lg' : ''}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className={`p-2 rounded-lg bg-${color}-500/10`}>
          <Icon className={`w-5 h-5 text-${color}-400`} />
        </div>
        <div>
          <h4 className="font-semibold text-white text-sm">{title}</h4>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">{description}</p>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700/50 font-mono text-sm text-center">
        <span className={color === 'blue' ? 'text-[#0080FF]' : color === 'purple' ? 'text-[#8B5CF6]' : color === 'amber' ? 'text-[#F59E0B]' : 'text-[#10B981]'}>
          {formula}
        </span>
      </div>
    </motion.div>
  );
};

// Timeline des étapes du projet
const ProjectTimeline = () => {
  const steps = [
    {
      phase: "01",
      title: "Audit Différentiel",
      desc: "Reverse engineering des 104 extracteurs GitHub pour capturer les règles métier implicites",
      icon: Microscope,
      color: "#0080FF"
    },
    {
      phase: "02",
      title: "Schema Discovery",
      desc: "Utilisation de DiscoPG pour inférer la structure latente des objets JSON polymorphes",
      icon: Network,
      color: "#8B5CF6"
    },
    {
      phase: "03",
      title: "Modélisation Graphe",
      desc: "Transformation en Property Graph avec 3 types de nœuds et relations typées",
      icon: Database,
      color: "#10B981"
    },
    {
      phase: "04",
      title: "MCDA Scoring",
      desc: "Implémentation de l'algorithme de scoring multicritère sur la Vallée de la Chimie",
      icon: Scale,
      color: "#F59E0B"
    }
  ];

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#0080FF] via-[#8B5CF6] to-[#10B981] opacity-30" />
      <div className="space-y-8">
        {steps.map((step, idx) => (
          <motion.div
            key={step.phase}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative flex items-start gap-6 group"
          >
            <div 
              className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
              style={{ 
                backgroundColor: `${step.color}15`,
                borderColor: `${step.color}30`,
                boxShadow: `0 0 20px ${step.color}10`
              }}
            >
              <step.icon className="w-6 h-6" style={{ color: step.color }} />
            </div>
            <div className="flex-1 pt-2">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-bold" style={{ color: step.color }}>PHASE {step.phase}</span>
                <div className="h-px flex-1 bg-slate-800 group-hover:bg-slate-700 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Visualisation de l'hétérogénéité des données
const HeterogeneityVisualizer = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const examples = [
    {
      title: "Ontologie 1: Surveillance Systématique",
      source: "Réseau de capteurs Italie",
      json: `{
  "id_station": "IT_SURF_001",
  "matrix": "Surface water",
  "pfas_sum": 125.4,
  "sampling_freq": "monthly"
}`,
      color: "#0080FF",
      isSchema: false
    },
    {
      title: "Ontologie 2: Gestion Événementielle", 
      source: "Incident Belgique",
      json: `{
  "incident_id": "BE_INC_2023",
  "event_type": "spill",
  "severity": "high",
  "status": "under_investigation"
}`,
      color: "#F59E0B",
      isSchema: false
    },
    {
      title: "Schéma Unifié → Property Graph",
      source: "Modèle Neo4j résultant",
      json: `(:Site {id, name, type, coords})
  -[:HAS_MEASUREMENT]->
(:Measurement {date, value, unit})
  -[:DETECTED]->
(:Substance {cas_number, name})`,
      color: "#10B981",
      isSchema: true
    }
  ];

  return (
    <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
      <div className="flex border-b border-slate-800">
        {examples.map((ex, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-all ${
              activeTab === idx 
                ? 'bg-slate-800 text-white border-b-2' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
            style={{ borderColor: activeTab === idx ? ex.color : 'transparent' }}
          >
            {ex.title}
          </button>
        ))}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-slate-500 uppercase tracking-wider">
            {examples[activeTab].isSchema ? "Architecture" : "Source"}
          </span>
          <span className="text-xs text-slate-400">{examples[activeTab].source}</span>
        </div>
        <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
          <code style={{ color: examples[activeTab].color }}>
            {examples[activeTab].json}
          </code>
        </pre>
        <div className={`mt-4 p-3 rounded-lg ${
          examples[activeTab].isSchema 
            ? 'bg-[#10B981]/10 border border-[#10B981]/20' 
            : 'bg-[#F59E0B]/10 border border-[#F59E0B]/20'
        }`}>
          <div className="flex items-start gap-2">
            {examples[activeTab].isSchema ? (
              <>
                <Network className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate-400">
                  <strong className="text-[#10B981]">Solution Property Graph :</strong> Les deux ontologies convergent vers un modèle unifié flexible. 
                  Labels multiples (Site:MeasuredSite vs Site:PresumptiveSite) et propriétés optionnelles gèrent l'hétérogénéité nativement.
                </p>
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate-400">
                  <strong className="text-[#F59E0B]">Hétérogénéité sémantique cachée :</strong> Même colonne "details", structures JSON radicalement différentes. 
                  Impossible à unifier par SQL standard.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Carte de résultat clé
const KeyResultCard = ({ value, label, sublabel, icon: Icon, color, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl`} />
      <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${color} opacity-80`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <Sparkles className="w-4 h-4 text-slate-600 group-hover:text-yellow-400 transition-colors" />
        </div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm font-medium text-slate-300 mb-1">{label}</div>
        <div className="text-xs text-slate-500">{sublabel}</div>
      </div>
    </motion.div>
  );
};

export const OverviewSection = () => {
  return (
    <div className="space-y-24 max-w-6xl mx-auto">
      
      {/* TL;DR - Executive Summary */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-20 z-30 p-4 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-[#0080FF]/30 shadow-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20">
            <Zap className="w-5 h-5 text-[#F59E0B]" />
          </div>
          <div className="flex-1">
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">TL;DR — En 30 secondes</div>
            <div className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-[#0080FF]">104 datasets fragmentés</strong> transformés en 
              <strong className="text-[#10B981]"> Property Graph</strong> unifié via 
              <strong className="text-[#8B5CF6]"> algorithme MCDA</strong> → 
              Détection du hotspot critique <strong className="text-[#F59E0B]">Salindres (17.5M ng/L)</strong>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
            <span className="text-xs text-slate-400">Scroll pour détails</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
          </div>
        </div>
      </motion.div>
      
      {/* Hero Contextuel */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-[#0080FF]/5 via-[#8B5CF6]/5 to-[#10B981]/5 rounded-3xl blur-3xl" />
        
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 text-[#0080FF] text-xs font-semibold mb-6"
            >
              <Beaker className="w-3.5 h-3.5" />
              Contexte Scientifique
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              L'Urgence des{" "}
              <span className="bg-gradient-to-r from-[#0080FF] to-[#10B981] bg-clip-text text-transparent">
                Forever Chemicals
              </span>
            </h2>
            
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Les <strong className="text-white">PFAS</strong> (Per- and PolyFluoroAlkyl Substances) constituent une famille de 
                <span className="text-[#0080FF]"> plus de 4 700 composés</span> synthétiques caractérisés par la présence 
                d'au moins un groupement perfluoroalkyle (C<sub>n</sub>F<sub>2n+1</sub>–).
              </p>
              <p>
                Leur signature moléculaire — une chaîne carbonée entièrement fluorée — confère une 
                <span className="text-[#F59E0B]"> stabilité thermique et chimique exceptionnelle</span>, résultat de 
                l'énergie de liaison C–F (485 kJ/mol), l'une des plus fortes en chimie organique.
              </p>
              <div className="flex items-start gap-3 p-4 bg-[#EF4444]/5 border border-[#EF4444]/20 rounded-xl mt-6">
                <AlertTriangle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-[#EF4444] block mb-1">Contamination Systémique</strong>
                  <span className="text-slate-400">
                    Cette inertie chimique, recherchée industriellement, se traduit par une persistance 
                    environnementale quasi-infinie. Les PFAS ne se dégradent pas dans les conditions naturelles 
                    et s'accumulent dans les eaux, sols, et organismes vivants.
                  </span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 rounded-xl mt-4">
                <Activity className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-[#8B5CF6] block mb-1">💡 En clair : Impact Sanitaire</strong>
                  <span className="text-slate-400">
                    Les PFAS s'accumulent dans le sang humain et sont associés à des cancers, 
                    troubles thyroïdiens et problèmes de fertilité. La <strong className="text-white">limite UE est de 100 ng/L</strong> — 
                    le site de <strong className="text-[#F59E0B]">Salindres dépasse ce seuil de 175,000 fois</strong> (17.5M ng/L).
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/20 to-[#10B981]/20 rounded-3xl blur-2xl" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#0080FF]" />
                Le Défi du Forever Pollution Project
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                    <Database className="w-6 h-6 text-[#0080FF]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">104</div>
                    <div className="text-sm text-slate-400">Jeux de données hétérogènes</div>
                  </div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-[#0080FF]/30 via-[#8B5CF6]/30 to-transparent" />
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center">
                    <FileJson className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">Hétérogénéité Sémantique Cachée</div>
                    <div className="text-sm text-slate-400">Colonne "details" = objets JSON polymorphes</div>
                  </div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-[#8B5CF6]/30 via-[#F59E0B]/30 to-transparent" />
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">Valeurs Manquantes Structurelles</div>
                    <div className="text-sm text-slate-400">21.9% de données MNAR (Missing Not At Random)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Visualisation de l'hétérogénéité */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20">
            <Merge className="w-5 h-5 text-[#F59E0B]" />
          </div>
          <h2 className="text-2xl font-bold text-white">Le Verrou Scientifique : Hétérogénéité Intra-Attribut</h2>
        </div>
        
        {/* Analogie de Vulgarisation */}
        <div className="mb-8 p-5 bg-gradient-to-br from-[#10B981]/10 to-transparent rounded-2xl border border-[#10B981]/20">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 flex-shrink-0">
              <Sparkles className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#10B981] mb-2 uppercase tracking-wider">💡 Analogie : Le Problème des 104 Carnets</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Imaginez fusionner <strong className="text-white">104 tableurs Excel</strong> où certains utilisent 
                <span className="text-[#0080FF]"> "clients" (nom, email)</span>, d'autres 
                <span className="text-[#F59E0B]"> "customers" (ID, téléphone)</span>, et d'autres encore 
                <span className="text-[#8B5CF6]"> "utilisateurs" (pseudo, adresse)</span>. 
                C'est exactement le défi des datasets PFAS : même colonne "details", mais 104 langages différents cachés à l'intérieur.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <HeterogeneityVisualizer />
          
          <div className="space-y-6">
            <p className="text-slate-400 leading-relaxed">
              L'alignement syntaxique des 104 datasets masque une <strong className="text-white">divergence ontologique fondamentale</strong>. 
              La colonne <code className="bg-slate-800 px-2 py-1 rounded text-[#0080FF]">details</code>, apparemment standardisée, 
              encapsule deux mondes sémantiques incompatibles :
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0080FF] mt-2" />
                <span><strong>Surveillance systématique :</strong> Réseaux de capteurs avec mesures répétées, identifiants de stations fixes</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2" />
                <span><strong>Gestion événementielle :</strong> Incidents ponctuels, déversements accidentels, investigations forensiques</span>
              </li>
            </ul>
            
            <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <div className="flex items-center gap-2 mb-2 text-[#EF4444]">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold">Impossibilité SQL</span>
              </div>
              <p className="text-xs text-slate-400">
                Une requête <code className="text-slate-300">json_extract(details, '$.id_station')</code> échoue silencieusement 
                sur 40% des lignes. Le modèle relationnel atteint ses limites face à cette variabilité structurelle.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Méthodologie - Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20">
              <Target className="w-5 h-5 text-[#10B981]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Méthodologie : Du Chaos à la Connaissance</h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">APPROCHE BOTTOM-UP</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <ProjectTimeline />
          
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-[#0080FF]/5 to-transparent rounded-2xl border border-[#0080FF]/10">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#0080FF]" />
                Pourquoi le Property Graph ?
              </h3>
              <div className="mb-3 p-3 bg-[#10B981]/5 rounded-lg border border-[#10B981]/10">
                <p className="text-xs text-slate-400">
                  <strong className="text-[#10B981]">💡 Analogie :</strong> SQL = <span className="text-slate-300">tableur Excel rigide</span>, 
                  Property Graph = <span className="text-[#0080FF]">Google Maps interactif</span> où chaque point peut avoir ses propres attributs.
                </p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Contrairement au modèle relationnel (RDBMS) qui impose un schéma fixe, le
                <strong className="text-white"> Property Graph</strong> permet :
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#0080FF]" />
                  Labels multiples sur les nœuds (:Site :MeasuredSite vs :Site :PresumedSite)
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#0080FF]" />
                  Propriétés optionnelles natives (gestion de la sparsité)
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-[#0080FF]" />
                  Relations explicites comme citoyennes de première classe
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-[#8B5CF6]/5 to-transparent rounded-2xl border border-[#8B5CF6]/10">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#8B5CF6]" />
                DiscoPG : Découverte Automatique de Schéma
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Outil développé par l'équipe LIRIS permettant d'inférer automatiquement la structure latente 
                des données semi-structurées. Il identifie les patterns d'attributs récurrents et les relations 
                implicites entre entités, générant un schéma PG-Schema standardisé.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* MCDA - Section Mathématique */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
            <Scale className="w-5 h-5 text-[#8B5CF6]" />
          </div>
          <h2 className="text-2xl font-bold text-white">Moteur MCDA : Quantifier l'Incertitude</h2>
        </div>
        
        <p className="text-slate-400 mb-4 max-w-3xl">
          Adaptation de l'<strong className="text-white">Analyse Multicritère</strong> pour générer des scores de risque robustes 
          malgré la présence de valeurs manquantes (<span className="group relative cursor-help border-b border-dotted border-slate-500">
            <span className="text-white">MNAR</span>
            <span className="invisible group-hover:visible absolute left-0 top-6 w-64 p-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-300 z-50 shadow-xl">
              Missing Not At Random = données manquantes de façon structurelle (ex: sites pollués qui cachent leurs mesures)
            </span>
          </span>) et la dualité mesures/présomptions.
        </p>
        
        <div className="mb-8 p-4 bg-[#10B981]/5 rounded-xl border border-[#10B981]/10">
          <p className="text-sm text-slate-300">
            <strong className="text-[#10B981]">💡 Analogie :</strong> Comme <span className="text-white">noter un restaurant</span> en combinant 
            <span className="text-[#0080FF]">avis clients</span> (T<sub>k</sub>) + 
            <span className="text-[#8B5CF6]">nombre de visites</span> (I<sub>k</sub>) + 
            <span className="text-[#F59E0B]">étoiles Michelin</span> (Q<sub>k</sub>) → 
            score final pondéré.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <FormulaCard
            title="Score Textuel (Tk)"
            formula="Σ(occurrences × poids_verbe)"
            description="Extraction sémantique des signaux forts dans les métadonnées textuelles"
            color="blue"
            icon={FileJson}
            delay={0}
          />
          <FormulaCard
            title="Score Impact (Ik)"
            formula="log(1 + densité_mesures)"
            description="Mesure de la richesse informationnelle par site (popularité logarithmique)"
            color="purple"
            icon={TrendingUp}
            delay={0.1}
          />
          <FormulaCard
            title="Score Qualité (Qk)"
            formula="bonus_source(accréditation)"
            description="Heuristique basée sur la certification ISO 17025 ou le type d'étude"
            color="amber"
            icon={Target}
            delay={0.2}
          />
          <FormulaCard
            title="Score Final (Sk)"
            formula="max(αTk + βIk + γQk, ε)"
            description="Agrégation pondérée avec seuil minimal ε pour éviter les scores nuls"
            color="emerald"
            icon={Zap}
            delay={0.3}
          />
        </div>
        
        <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#F59E0B]" />
            Cas d'Étude : La Vallée de la Chimie
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                Application de l'algorithme sur la région lyonnaise (Arkema, Daikin, ZaCh System) 
                démontrant la capacité du modèle à <strong className="text-white">balancer quantité de preuves et gravité des sources</strong> :
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-[#EF4444]/5 border border-[#EF4444]/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
                    <span className="text-sm text-white font-medium">ARKEMA FRANCE</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#EF4444]">Score: 4.37</div>
                    <div className="text-xs text-slate-500">109,000 ng/L max</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-[#F59E0B]/5 border border-[#F59E0B]/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <span className="text-sm text-white font-medium">ZaCh System SA</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#F59E0B]">Score: 4.17</div>
                    <div className="text-xs text-slate-500">267 prélèvements</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                    <span className="text-sm text-white font-medium">GIE Chimie Salindres</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#8B5CF6]">8ème rang</div>
                    <div className="text-xs text-slate-500">17,500,000 ng/L (hotspot critique)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-[#10B981]/5 to-transparent rounded-xl border border-[#10B981]/10">
              <div className="flex items-center gap-2 mb-3 text-[#10B981]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Validation</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                L'algorithme MCDA a réussi à identifier <strong className="text-white">Salindres</strong> comme 
                hotspot critique malgré un faible nombre de mesures, prouvant sa capacité à détecter 
                les signaux faibles dans des données bruitées.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Résultats Clés - Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20">
              <Layers className="w-5 h-5 text-[#10B981]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Résultats Quantitatifs</h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KeyResultCard 
            value="952,727"
            label="Observations Environnementales"
            sublabel="Points de données unifiés"
            icon={Database}
            color="from-[#0080FF] to-[#0080FF]/50"
            delay={0}
          />
          <KeyResultCard 
            value="287,431"
            label="Sites Uniques"
            sublabel="Après déduplication géospatiale"
            icon={MapPin}
            color="from-[#10B981] to-[#10B981]/50"
            delay={0.1}
          />
          <KeyResultCard 
            value="87.3%"
            label="Complétude des Données"
            sublabel="Taux de remplissage global"
            icon={Activity}
            color="from-[#8B5CF6] to-[#8B5CF6]/50"
            delay={0.2}
          />
          <KeyResultCard 
            value="97.9%"
            label="Précision Géolocalisation"
            sublabel="Coordonnées WGS84 validées"
            icon={Target}
            color="from-[#F59E0B] to-[#F59E0B]/50"
            delay={0.3}
          />
        </div>
        
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-800/20 rounded-2xl border border-slate-700/30">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-5 h-5 text-[#0080FF]" />
              <h3 className="font-semibold text-white">Architecture Graphe</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between">
                <span>Nœuds Site</span>
                <span className="text-white font-mono">287,431</span>
              </li>
              <li className="flex justify-between">
                <span>Nœuds Measurement</span>
                <span className="text-white font-mono">952,727</span>
              </li>
              <li className="flex justify-between">
                <span>Nœuds Substance</span>
                <span className="text-white font-mono">127</span>
              </li>
              <li className="h-px bg-slate-700 my-2" />
              <li className="flex justify-between text-[#0080FF]">
                <span>Relations</span>
                <span className="font-mono">~2.1M</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 bg-slate-800/20 rounded-2xl border border-slate-700/30">
            <div className="flex items-center gap-3 mb-4">
              <Microscope className="w-5 h-5 text-[#8B5CF6]" />
              <h3 className="font-semibold text-white">Substances Identifiées</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">PFOA / PFOS</span>
                  <span className="text-white">45%</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[45%] bg-[#8B5CF6] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">PFHxS / PFNA</span>
                  <span className="text-white">28%</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[28%] bg-[#0080FF] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Autres PFAS</span>
                  <span className="text-white">27%</span>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[27%] bg-[#10B981] rounded-full" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-slate-800/20 rounded-2xl border border-slate-700/30">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-[#F59E0B]" />
              <h3 className="font-semibold text-white">Paramètres MCDA</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-2 bg-[#0080FF]/5 rounded-lg border border-[#0080FF]/10">
                <span className="text-slate-400">α (Textuel)</span>
                <span className="text-[#0080FF] font-mono font-bold">0.40</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-[#8B5CF6]/5 rounded-lg border border-[#8B5CF6]/10">
                <span className="text-slate-400">β (Impact)</span>
                <span className="text-[#8B5CF6] font-mono font-bold">0.60</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-[#10B981]/5 rounded-lg border border-[#10B981]/10">
                <span className="text-slate-400">γ (Qualité)</span>
                <span className="text-[#10B981] font-mono font-bold">0.20</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-[#F59E0B]/5 rounded-lg border border-[#F59E0B]/10">
                <span className="text-slate-400">ε (Seuil min)</span>
                <span className="text-[#F59E0B] font-mono font-bold">0.01</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Conclusion & Perspectives */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/5 via-[#8B5CF6]/5 to-[#10B981]/5 rounded-3xl blur-3xl" />
        
        <div className="relative p-8 md:p-12 bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-[#0080FF] to-[#10B981]">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Contribution Scientifique</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#0080FF]" />
                Rupture Méthodologique
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Première infrastructure PFAS européenne exploitant <strong className="text-white">Property Graph</strong> et 
                <strong className="text-white"> MCDA</strong> pour transformer la fragmentation des données en connaissances 
                actionnables. L'approche démontre que la modélisation graphe surmonte les limites du relationnel pour 
                l'intégration de données environnementales hétérogènes.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
                Impact Opérationnel
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                La détection du <strong className="text-[#F59E0B]">hotspot de Salindres</strong> (17.5M ng/L) valide 
                l'utilité du système pour l'aide à la décision environnementale. L'algorithme permet d'identifier 
                les zones prioritaires de dépollution malgré des données incomplètes et bruitées.
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700/30">
            <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Perspectives</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0080FF] text-xs font-bold">1</span>
                </div>
                <p className="text-slate-400">
                  <strong className="text-white">Enrichissement sémantique</strong> via ontologies chimiques (ChEBI, PubChem)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#8B5CF6] text-xs font-bold">2</span>
                </div>
                <p className="text-slate-400">
                  <strong className="text-white">Analyse temporelle</strong> pour détecter les tendances de contamination
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#10B981] text-xs font-bold">3</span>
                </div>
                <p className="text-slate-400">
                  <strong className="text-white">Transférabilité</strong> à d'autres polluants (pesticides, métaux lourds)
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-700/30 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span>Projet M1 — Ouverture à la Recherche</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>LIRIS UMR 5205 CNRS</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>Université Claude Bernard Lyon 1</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#0080FF]">Benbouta</span>
              <span>&</span>
              <span className="text-[#10B981]">Melzi</span>
              <span className="text-slate-600">— 2025/2026</span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};