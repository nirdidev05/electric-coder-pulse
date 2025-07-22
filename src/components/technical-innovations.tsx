import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Lightbulb, Users, Brain, Zap, Target, Settings, Code, GitBranch, Award, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function TechnicalInnovations() {
  const coreInnovations = [
    {
      title: "Multimodal Feature Engineering",
      icon: Brain,
      color: "#646cff",
      details: [
        {
          aspect: "Technical Indicators",
          description: "100+ indicators across multiple timeframes including SMA/EMA (3-50 days), RSI, Bollinger Bands, momentum oscillators, and volatility measures",
          impact: "Captures market dynamics at granular and macro levels"
        },
        {
          aspect: "Cross-Asset Relationships",
          description: "Price ratios, spreads, rolling correlations (10-50 day windows), and portfolio dominance metrics",
          impact: "Models inter-asset dependencies and market structure"
        },
        {
          aspect: "News Sentiment Integration",
          description: "Custom financial lexicon with weighted sentiment scoring ('very_positive': 2, 'positive': 1, 'neutral': 0, 'negative': -1, 'very_negative': -2)",
          impact: "Bridges quantitative analysis with market sentiment"
        }
      ]
    },
    {
      title: "Meta-Ensemble Architecture",
      icon: Zap,
      color: "#61dafb",
      details: [
        {
          aspect: "Adaptive Weighting System",
          description: "Dynamic blend based on model confidence: ml_score = (R² + 1) / 2, with conditional weighting (60% ML when confident, 20% when uncertain)",
          impact: "Ensures robustness across varying market conditions"
        },
        {
          aspect: "Statistical Baseline Integration",
          description: "Domain-inspired baseline with linear trends, cyclical patterns (60-day periods), and calibrated noise (1.2% daily std)",
          impact: "Provides stability anchor during model uncertainty"
        },
        {
          aspect: "Prediction Harmonization",
          description: "Normalization and scaling alignment between ML and statistical components to prevent discontinuities",
          impact: "Maintains coherent prediction trajectories"
        }
      ]
    },
    {
      title: "Mathematical Correlation Control",
      icon: Target,
      color: "#646cff",
      details: [
        {
          aspect: "Cholesky Decomposition",
          description: "Linear transformation using L_target @ L_current^(-1) to enforce exact correlation matrices (P1-P3: 0.89, P1-P2: -0.02, P2-P3: -0.25)",
          impact: "Ensures realistic multi-asset relationships"
        },
        {
          aspect: "Numerical Stability",
          description: "Fallback mechanisms for non-positive-definite matrices with direct correlation adjustment via linear regression",
          impact: "Robust correlation control under all conditions"
        },
        {
          aspect: "Financial Realism",
          description: "Maintains known market relationships critical for downstream risk management and portfolio applications",
          impact: "Produces financially meaningful predictions"
        }
      ]
    },
    {
      title: "Production-Ready Architecture",
      icon: Settings,
      color: "#61dafb",
      details: [
        {
          aspect: "Modular Design Pattern",
          description: "AdvancedMarketPredictor class with clear separation: feature engineering, model training, ensemble creation, post-processing",
          impact: "Enables independent component replacement and testing"
        },
        {
          aspect: "Dependency Management",
          description: "Explicit version constraints (numpy<2.0, scipy<1.14, scikit-learn==1.4.2) for reproducible environments",
          impact: "Prevents deployment conflicts and ensures consistency"
        },
        {
          aspect: "Error Handling Framework",
          description: "Robust exception handling with fallback mechanisms, validation checks, and comprehensive logging throughout pipeline",
          impact: "Maintains system reliability in production scenarios"
        }
      ]
    }
  ]

  const technicalContributions = [
    {
      category: "Feature Engineering Innovation",
      contribution: "Multimodal Signal Fusion",
      methodology: "Combined price-derived technical indicators with news sentiment features using custom financial lexicon and temporal aggregation",
      validation: "Feature importance analysis showed news sentiment ranked in top 10 for price1 and price3 predictions",
      icon: Brain,
      color: "#646cff"
    },
    {
      category: "Ensemble Methodology",
      contribution: "Confidence-Based Meta-Learning",
      methodology: "Dynamic weighting algorithm that adapts ensemble composition based on individual model performance metrics",
      validation: "Reduced prediction variance by 25-30% compared to single-model approaches while maintaining accuracy",
      icon: Zap,
      color: "#61dafb"
    },
    {
      category: "Mathematical Framework",
      contribution: "Post-Hoc Correlation Engineering",
      methodology: "Cholesky-based linear transformation to enforce realistic correlation structures in multi-asset predictions",
      validation: "Achieved 99.3% accuracy in target correlation (0.89 P1-P3) while maintaining individual asset prediction quality",
      icon: Target,
      color: "#646cff"
    },
    {
      category: "System Architecture",
      contribution: "Modular ML Pipeline Design",
      methodology: "Component-based architecture allowing independent replacement of feature engineering, modeling, and post-processing modules",
      validation: "Successfully integrated with Kaggle environment while maintaining extensibility for production deployment",
      icon: Code,
      color: "#61dafb"
    }
  ]

 const collaborationDetails = {
    architecturalDesign: {
      name: "System Architecture Philosophy",
      components: [
        { component: "Feature Engineering Layer", responsibility: "Technical indicator computation and sentiment processing", design: "Modular feature extraction with pluggable transformations" },
        { component: "Model Orchestration Engine", responsibility: "LightGBM ensemble training and hyperparameter optimization", design: "Bayesian optimization with cross-validation frameworks" },
        { component: "Correlation Control Module", responsibility: "Mathematical correlation enforcement via Cholesky decomposition", design: "Linear algebra operations with numerical stability safeguards" },
        { component: "Post-Processing Pipeline", responsibility: "Smoothing, scaling, and financial realism validation", design: "Configurable processing stages with parameter tuning capabilities" }
      ]
    },
    developmentProcess: {
      methodology: "Research-driven development with systematic validation and iterative refinement",
      versionControl: "Comprehensive experimentation tracking with feature ablation studies",
      coordination: "Systematic integration testing with performance benchmarking",
      validation: "Multi-fold cross-validation with out-of-sample testing protocols"
    }
  }

  return (
    <section className="py-20 relative" id="technical-innovations">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Innovations & Contributions</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced methodologies and collaborative development behind MarketPulse's championship performance
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Core Technical Innovations */}
          <div className="grid lg:grid-cols-2 gap-8">
            {coreInnovations.map((innovation, index) => {
              const Icon = innovation.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card 
                    className="h-full border-0 shadow-2xl backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 100%)',
                      border: '1px solid rgba(100, 108, 255, 0.3)'
                    }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-3 rounded-xl" style={{ backgroundColor: innovation.color + '20' }}>
                          <Icon className="h-6 w-6" style={{ color: innovation.color }} />
                        </div>
                        <span className="text-white">{innovation.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {innovation.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: detailIndex * 0.1, duration: 0.4 }}
                          className="space-y-3"
                        >
                          <h4 className="font-semibold text-sm text-white flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: innovation.color }} />
                            {detail.aspect}
                          </h4>
                          <p className="text-xs text-slate-300 leading-relaxed pl-4">{detail.description}</p>
                          <div className="pl-4">
                            <div className="p-3 rounded-lg border border-slate-700/30" style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                              <p className="text-xs" style={{ color: innovation.color }}>
                                <strong>Impact:</strong> {detail.impact}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <Separator className="bg-slate-700/50" />

          {/* Technical Contributions Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card 
              className="border-0 shadow-2xl backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.08) 0%, rgba(100, 108, 255, 0.08) 100%)',
                border: '1px solid rgba(97, 218, 251, 0.3)'
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: '#61dafb20' }}>
                    <Award className="h-8 w-8" style={{ color: '#61dafb' }} />
                  </div>
                  <span className="text-white">Research Contributions & Validation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {technicalContributions.map((contribution, index) => {
                    const Icon = contribution.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="p-6 rounded-xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg" style={{ backgroundColor: contribution.color + '20' }}>
                            <Icon className="h-5 w-5" style={{ color: contribution.color }} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white text-sm">{contribution.category}</h4>
                            <h5 className="font-medium text-xs" style={{ color: contribution.color }}>{contribution.contribution}</h5>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h6 className="font-medium text-xs text-slate-300 mb-1">Methodology:</h6>
                            <p className="text-xs text-slate-400 leading-relaxed">{contribution.methodology}</p>
                          </div>
                          
                          <div className="p-3 rounded-lg" style={{ 
                            background: `rgba(${contribution.color === '#646cff' ? '100, 108, 255' : '97, 218, 251'}, 0.1)`,
                            border: `1px solid rgba(${contribution.color === '#646cff' ? '100, 108, 255' : '97, 218, 251'}, 0.2)`
                          }}>
                            <h6 className="font-medium text-xs mb-1" style={{ color: contribution.color }}>Validation Result:</h6>
                            <p className="text-xs" style={{ color: contribution.color }}>{contribution.validation}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Collaboration & Development Process */}
          <div className="grid lg:grid-cols-2 gap-8">
       {/* System Architecture & Development Process */}
          <div className="grid lg:grid-cols-1 gap-8">
            {/* System Architecture */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card 
                className="h-full border-0 shadow-2xl backdrop-blur-sm"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.08) 0%, rgba(100, 108, 255, 0.08) 100%)',
                  border: '1px solid rgba(97, 218, 251, 0.3)'
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#61dafb20' }}>
                      <Code className="h-6 w-6" style={{ color: '#61dafb' }} />
                    </div>
                    <span className="text-white">System Architecture</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-3">{collaborationDetails.architecturalDesign.name}</h4>
                    <div className="space-y-3">
                      {collaborationDetails.architecturalDesign.components.map((component, index) => (
                        <div key={index} className="p-4 rounded-lg bg-slate-800/20 border border-slate-700/30">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-medium text-slate-200 text-sm">{component.component}</span>
                            <span className="text-xs text-slate-400">Core Module</span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed mb-2">{component.responsibility}</p>
                          <div className="p-2 rounded bg-slate-900/30">
                            <p className="text-xs text-slate-300">{component.design}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg" style={{ background: 'rgba(97, 218, 251, 0.1)', border: '1px solid rgba(97, 218, 251, 0.2)' }}>
                    <p className="text-xs" style={{ color: '#61dafb' }}>
                      <strong>Architecture Impact:</strong> Modular design enables independent testing and replacement of components, 
                      facilitating systematic optimization and maintaining code quality throughout development cycles.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
</div>
       
            {/* Development Process */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card 
                className="h-full border-0 shadow-2xl backdrop-blur-sm"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(100, 108, 255, 0.08) 0%, rgba(97, 218, 251, 0.08) 100%)',
                  border: '1px solid rgba(100, 108, 255, 0.3)'
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#646cff20' }}>
                      <GitBranch className="h-6 w-6" style={{ color: '#646cff' }} />
                    </div>
                    <span className="text-white">Development Process</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-slate-200 text-sm mb-2">Methodology</h5>
                      <p className="text-xs text-slate-300 leading-relaxed">{collaborationDetails.developmentProcess.methodology}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-slate-200 text-sm mb-2">Version Control</h5>
                      <p className="text-xs text-slate-300 leading-relaxed">{collaborationDetails.developmentProcess.versionControl}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-slate-200 text-sm mb-2">Coordination Strategy</h5>
                      <p className="text-xs text-slate-300 leading-relaxed">{collaborationDetails.developmentProcess.coordination}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-slate-200 text-sm mb-2">Quality Validation</h5>
                      <p className="text-xs text-slate-300 leading-relaxed">{collaborationDetails.developmentProcess.validation}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg" style={{ background: 'rgba(100, 108, 255, 0.1)', border: '1px solid rgba(100, 108, 255, 0.2)' }}>
                    <p className="text-xs" style={{ color: '#646cff' }}>
                      <strong>Process Excellence:</strong> Effective coordination in competitive ML environments demonstrates both 
                      technical expertise and collaborative problem-solving capabilities essential for complex AI system development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Innovation Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 rounded-xl border-2 border-dashed text-center"
            style={{ 
              borderColor: 'rgba(97, 218, 251, 0.4)', 
              background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.1) 0%, rgba(100, 108, 255, 0.05) 100%)' 
            }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full" style={{ backgroundColor: '#646cff20' }}>
                <TrendingUp className="w-10 h-10" style={{ color: '#646cff' }} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Innovation Impact</h3>
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto mb-6">
              MarketPulse's technical innovations represent significant contributions to financial AI research and practice. 
              The combination of multimodal feature engineering, adaptive ensemble methods, mathematical correlation control, 
              and production-ready architecture establishes new benchmarks for market forecasting systems while demonstrating 
              effective collaborative development in competitive environments.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Feature Innovation', 'Ensemble Methods', 'Mathematical Rigor', 'System Architecture', 'Team Collaboration'].map((tag, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium border"
                  style={{ 
                    backgroundColor: i % 2 === 0 ? 'rgba(100, 108, 255, 0.2)' : 'rgba(97, 218, 251, 0.2)',
                    color: i % 2 === 0 ? '#646cff' : '#61dafb',
                    borderColor: i % 2 === 0 ? 'rgba(100, 108, 255, 0.4)' : 'rgba(97, 218, 251, 0.4)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}