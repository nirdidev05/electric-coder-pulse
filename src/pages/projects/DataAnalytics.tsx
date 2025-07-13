import { motion } from "framer-motion";
import { ArrowLeft, Database, TrendingUp, PieChart, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const DataAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Database className="w-8 h-8 text-primary" />
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Data Analytics Platform
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6"
            >
              Enterprise Data Analytics & Business Intelligence Platform
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A comprehensive data analytics platform processing millions of records daily, 
              featuring real-time dashboards, predictive analytics, and automated reporting systems.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Article */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg max-w-none">
              {/* Overview */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Project Overview</h2>
                <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    This enterprise-grade data analytics platform was designed to handle massive datasets 
                    from multiple sources, providing real-time insights and predictive analytics capabilities. 
                    The system processes over 10 million records daily with sub-second query response times.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/5 rounded-lg">
                      <Database className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">10M+</div>
                      <div className="text-sm text-muted-foreground">Records/Day</div>
                    </div>
                    <div className="text-center p-4 bg-accent/5 rounded-lg">
                      <BarChart3 className="w-8 h-8 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">&lt;200ms</div>
                      <div className="text-sm text-muted-foreground">Query Time</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Technical Implementation */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Technical Architecture</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">Data Pipeline</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Built a robust ETL pipeline using Apache Kafka for real-time data streaming, 
                        Apache Spark for distributed processing, and ClickHouse for analytical queries. 
                        The pipeline supports multiple data formats including JSON, CSV, and Parquet.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">Machine Learning</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Implemented predictive models using Python scikit-learn and TensorFlow, 
                        with automated model retraining and A/B testing capabilities. Models include 
                        time series forecasting, customer segmentation, and anomaly detection.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Code Example */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">Key Implementation</h3>
                <div className="bg-card rounded-xl p-6 border border-border shadow-lg overflow-x-auto">
                  <pre className="text-sm text-muted-foreground">
                    <code>{`# Real-time Analytics Pipeline
class DataPipeline:
    def __init__(self, kafka_config, spark_config):
        self.kafka_consumer = KafkaConsumer(**kafka_config)
        self.spark_session = SparkSession.builder.config(**spark_config).getOrCreate()
        self.clickhouse_client = ClickHouseClient()
    
    def process_stream(self):
        stream = self.spark_session.readStream \\
            .format("kafka") \\
            .option("kafka.bootstrap.servers", "localhost:9092") \\
            .load()
        
        processed_stream = stream \\
            .select(from_json(col("value"), schema).alias("data")) \\
            .select("data.*") \\
            .withColumn("processed_at", current_timestamp()) \\
            .filter(col("data").isNotNull())
        
        query = processed_stream.writeStream \\
            .outputMode("append") \\
            .foreachBatch(self.write_to_clickhouse) \\
            .start()
        
        return query`}</code>
                  </pre>
                </div>
              </motion.section>

              {/* Results */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Results & Impact</h2>
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Performance Gains</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 85% reduction in report generation time</li>
                        <li>• 60% improvement in data quality</li>
                        <li>• 40% cost reduction in infrastructure</li>
                        <li>• 95% automation of manual processes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Business Impact</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• $2M annual cost savings</li>
                        <li>• 300+ daily active users</li>
                        <li>• 50+ automated dashboards</li>
                        <li>• 24/7 real-time monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Tech Stack */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Technology Stack</h3>
                <div className="space-y-3">
                  {[
                    "Python", "Apache Spark", "Kafka", "ClickHouse", 
                    "TensorFlow", "React", "TypeScript", "Docker"
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Key Features</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>• Real-time data processing</div>
                  <div>• Interactive dashboards</div>
                  <div>• Predictive analytics</div>
                  <div>• Automated reporting</div>
                  <div>• Data quality monitoring</div>
                  <div>• Custom visualizations</div>
                </div>
              </motion.div>

              {/* Project Stats */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-foreground">8 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Size:</span>
                    <span className="text-foreground">6 engineers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data Sources:</span>
                    <span className="text-foreground">15+ systems</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-green-500">Production</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;