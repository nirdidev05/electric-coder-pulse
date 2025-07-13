import { motion } from "framer-motion";
import { ArrowLeft, BarChart, LineChart, PieChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const DataVisualization = () => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <BarChart className="w-8 h-8 text-emerald-500" />
              <span className="bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-full text-sm font-medium">
                Data Visualization Platform
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6"
            >
              Interactive Data Visualization & Business Intelligence Suite
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A comprehensive visualization platform featuring interactive dashboards, real-time charts, 
              and advanced analytics tools used by 500+ organizations for data-driven decision making.
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
              {/* Dashboard Overview */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Platform Overview</h2>
                <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    Built a modern data visualization platform that transforms complex datasets into 
                    intuitive, interactive dashboards. The platform supports real-time data streaming, 
                    custom chart creation, and collaborative analytics workflows.
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-emerald-500/5 rounded-lg">
                      <BarChart className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">50+</div>
                      <div className="text-sm text-muted-foreground">Chart Types</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/5 rounded-lg">
                      <LineChart className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">500+</div>
                      <div className="text-sm text-muted-foreground">Organizations</div>
                    </div>
                    <div className="text-center p-4 bg-purple-500/5 rounded-lg">
                      <PieChart className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">10K+</div>
                      <div className="text-sm text-muted-foreground">Dashboards</div>
                    </div>
                    <div className="text-center p-4 bg-orange-500/5 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">1M+</div>
                      <div className="text-sm text-muted-foreground">Data Points/sec</div>
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
                <h2 className="text-3xl font-bold mb-6 text-foreground">Architecture & Features</h2>
                <div className="space-y-8">
                  {/* Real-time Engine */}
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Real-time Visualization Engine</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Built with WebGL-accelerated rendering using D3.js and Three.js for smooth 
                          60fps visualizations. Supports streaming data updates with automatic 
                          chart re-rendering and smart data aggregation.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Render Performance:</span>
                            <span className="text-emerald-500 font-mono">60 FPS</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Data Throughput:</span>
                            <span className="text-emerald-500 font-mono">1M points/sec</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Memory Usage:</span>
                            <span className="text-emerald-500 font-mono">&lt;200MB</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-foreground">Supported Chart Types</h4>
                        <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                          <div>• Line Charts</div>
                          <div>• Bar Charts</div>
                          <div>• Scatter Plots</div>
                          <div>• Heat Maps</div>
                          <div>• Treemaps</div>
                          <div>• Network Graphs</div>
                          <div>• Sankey Diagrams</div>
                          <div>• 3D Surfaces</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Features */}
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Interactive Dashboard Builder</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Drag & Drop Interface</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Intuitive drag-and-drop dashboard builder with real-time preview, 
                          responsive grid layout, and component library. Users can create 
                          complex dashboards without coding knowledge.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Advanced Interactions</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Cross-filtering, drill-down capabilities, hover tooltips, and 
                          zoom controls. Supports custom event handlers and API integrations 
                          for dynamic data updates.
                        </p>
                      </div>
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
                <h3 className="text-2xl font-bold mb-6 text-foreground">Real-time Chart Implementation</h3>
                <div className="bg-card rounded-xl p-6 border border-border shadow-lg overflow-x-auto">
                  <pre className="text-sm text-muted-foreground">
                    <code>{`// Real-time Line Chart Component
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const RealTimeChart = ({ dataStream, width = 800, height = 400 }) => {
  const svgRef = useRef();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => d.timestamp))
      .range([0, innerWidth]);
      
    const yScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.value))
      .range([innerHeight, 0]);
    
    // Line generator
    const line = d3.line()
      .x(d => xScale(d.timestamp))
      .y(d => yScale(d.value))
      .curve(d3.curveMonotoneX);
    
    // Clear and redraw
    svg.selectAll("*").remove();
    
    const g = svg.append("g")
      .attr("transform", \`translate(\${margin.left},\${margin.top})\`);
    
    // Add line
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#10b981")
      .attr("stroke-width", 2)
      .attr("d", line);
    
    // Add points with animation
    g.selectAll(".dot")
      .data(data)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("cx", d => xScale(d.timestamp))
      .attr("cy", d => yScale(d.value))
      .attr("r", 0)
      .transition()
      .duration(300)
      .attr("r", 4);
      
  }, [data, width, height]);
  
  // Subscribe to data stream
  useEffect(() => {
    const unsubscribe = dataStream.subscribe(newData => {
      setData(prevData => [...prevData.slice(-100), newData]);
    });
    
    return unsubscribe;
  }, [dataStream]);
  
  return <svg ref={svgRef} width={width} height={height} />;
};`}</code>
                  </pre>
                </div>
              </motion.section>

              {/* Performance Metrics */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Performance & Impact</h2>
                <div className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Technical Performance</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 60 FPS rendering with 1M+ data points</li>
                        <li>• &lt;100ms query response times</li>
                        <li>• 99.9% uptime with auto-scaling</li>
                        <li>• WebGL acceleration for complex visualizations</li>
                        <li>• Progressive loading for large datasets</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Business Impact</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 40% faster decision-making processes</li>
                        <li>• 500+ enterprise clients</li>
                        <li>• $5M+ in cost savings identified</li>
                        <li>• 95% user satisfaction rating</li>
                        <li>• 200% increase in data engagement</li>
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
                    "React", "TypeScript", "D3.js", "Three.js", 
                    "WebGL", "Node.js", "PostgreSQL", "Redis"
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      <span className="text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Chart Performance */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Performance Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Render Speed</span>
                      <span className="text-foreground">60 FPS</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-emerald-500 h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Memory Usage</span>
                      <span className="text-foreground">180MB</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-[72%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Load Time</span>
                      <span className="text-foreground">1.2s</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-[88%]"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Usage Statistics */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Platform Usage</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Users:</span>
                    <span className="text-foreground">12,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dashboards Created:</span>
                    <span className="text-foreground">10,200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data Sources:</span>
                    <span className="text-foreground">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">API Calls/Day:</span>
                    <span className="text-foreground">2.5M+</span>
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

export default DataVisualization;