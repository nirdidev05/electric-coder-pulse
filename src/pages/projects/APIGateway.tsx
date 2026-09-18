import { motion } from "framer-motion";
import { ArrowLeft, Server, Shield, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const APIGateway = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Server className="w-8 h-8 text-indigo-500" />
              <span className="bg-indigo-500/10 text-indigo-500 px-4 py-2 rounded-full text-sm font-medium">
                Enterprise API Gateway
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6"
            >
              High-Performance API Gateway & Microservices Platform
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A scalable API gateway handling 10M+ requests daily with advanced security, 
              load balancing, and real-time analytics across 50+ microservices.
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
              {/* System Architecture */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">System Architecture</h2>
                <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    Designed and implemented a high-performance API gateway that serves as the central 
                    entry point for all client requests. The system efficiently routes traffic across 
                    multiple microservices while providing authentication, rate limiting, and monitoring.
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-indigo-500/5 rounded-lg">
                      <Server className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">10M+</div>
                      <div className="text-sm text-muted-foreground">Requests/Day</div>
                    </div>
                    <div className="text-center p-4 bg-green-500/5 rounded-lg">
                      <Zap className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">15ms</div>
                      <div className="text-sm text-muted-foreground">Avg Latency</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/5 rounded-lg">
                      <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">99.99%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div className="text-center p-4 bg-purple-500/5 rounded-lg">
                      <Globe className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">50+</div>
                      <div className="text-sm text-muted-foreground">Microservices</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Core Features */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Core Features & Capabilities</h2>
                <div className="space-y-8">
                  {/* Load Balancing */}
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Intelligent Load Balancing</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Implements multiple load balancing algorithms including weighted round-robin, 
                          least connections, and health-based routing. Supports automatic failover 
                          and circuit breaker patterns for maximum reliability.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Load Distribution:</span>
                            <span className="text-indigo-500 font-mono">Optimal</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Failover Time:</span>
                            <span className="text-indigo-500 font-mono">&lt;100ms</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Health Checks:</span>
                            <span className="text-indigo-500 font-mono">Every 5s</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-foreground">Balancing Strategies</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div>• Weighted round-robin</div>
                          <div>• Least connection algorithm</div>
                          <div>• Geographic proximity routing</div>
                          <div>• Health-based load distribution</div>
                          <div>• Sticky session support</div>
                          <div>• Auto-scaling integration</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Layer */}
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Advanced Security Layer</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Authentication & Authorization</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Multi-layer security with JWT validation, OAuth 2.0/OIDC integration, 
                          and role-based access control (RBAC) with fine-grained permissions.
                        </p>
                        <div className="text-xs space-y-1 text-muted-foreground">
                          <div>• JWT token validation</div>
                          <div>• OAuth 2.0 & OIDC support</div>
                          <div>• API key management</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Rate Limiting & DDoS Protection</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Sophisticated rate limiting with sliding window algorithms, 
                          IP allowlisting, and automatic threat detection.
                        </p>
                        <div className="text-xs space-y-1 text-muted-foreground">
                          <div>• Token bucket algorithm</div>
                          <div>• Geographic blocking</div>
                          <div>• Anomaly detection</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Code Implementation */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">Gateway Implementation</h3>
                <div className="bg-card rounded-xl p-6 border border-border shadow-lg overflow-x-auto">
                  <pre className="text-sm text-muted-foreground">
                    <code>{`import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import rateLimit from 'express-rate-limit';
import jwt from 'jsonwebtoken';
import Redis from 'ioredis';

class APIGateway {
  private app: express.Application;
  private redis: Redis;
  private services: Map<string, ServiceConfig>;

  constructor() {
    this.app = express();
    this.redis = new Redis(process.env.REDIS_URL);
    this.services = new Map();
    this.setupMiddleware();
    this.loadServiceConfiguration();
  }

  private setupMiddleware() {
    // Rate limiting middleware
    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 1000, // limit each IP to 1000 requests per windowMs
      message: 'Too many requests from this IP',
      standardHeaders: true,
      legacyHeaders: false,
      store: new RedisStore({
        client: this.redis,
        prefix: 'rl:'
      })
    });

    this.app.use(limiter);
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(this.corsMiddleware);
    this.app.use(this.authenticationMiddleware);
    this.app.use(this.loggingMiddleware);
  }

  private authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Authentication token required' });
    }

    try {
      // Check token in Redis cache first
      const cachedUser = await this.redis.get(\`auth:\${token}\`);
      
      if (cachedUser) {
        req.user = JSON.parse(cachedUser);
        return next();
      }

      // Verify JWT token
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
      
      // Cache user info for 15 minutes
      await this.redis.setex(\`auth:\${token}\`, 900, JSON.stringify(decoded));
      
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Invalid authentication token' });
    }
  };

  private setupServiceRoutes() {
    this.services.forEach((config, serviceName) => {
      const proxyOptions = {
        target: config.baseUrl,
        changeOrigin: true,
        pathRewrite: {
          [\`^/api/\${serviceName}\`]: ''
        },
        onProxyReq: this.onProxyRequest,
        onProxyRes: this.onProxyResponse,
        onError: this.onProxyError
      };

      // Health-based load balancing
      if (config.instances.length > 1) {
        proxyOptions.router = async (req) => {
          const healthyInstances = await this.getHealthyInstances(serviceName);
          return this.selectInstance(healthyInstances, req);
        };
      }

      this.app.use(\`/api/\${serviceName}\`, createProxyMiddleware(proxyOptions));
    });
  }

  private async getHealthyInstances(serviceName: string): Promise<string[]> {
    const service = this.services.get(serviceName)!;
    const healthyInstances: string[] = [];

    for (const instance of service.instances) {
      const healthKey = \`health:\${serviceName}:\${instance}\`;
      const isHealthy = await this.redis.get(healthKey);
      
      if (isHealthy === 'true') {
        healthyInstances.push(instance);
      }
    }

    return healthyInstances.length > 0 ? healthyInstances : service.instances;
  }

  private selectInstance(instances: string[], req: Request): string {
    // Implement weighted round-robin selection
    const weights = instances.map(instance => 
      this.services.get(this.getServiceName(req.path))?.weights?.[instance] || 1
    );
    
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let random = Math.random() * totalWeight;
    
    for (let i = 0; i < instances.length; i++) {
      random -= weights[i];
      if (random <= 0) {
        return instances[i];
      }
    }
    
    return instances[0]; // fallback
  }

  private onProxyRequest = (proxyReq: any, req: Request, res: Response) => {
    // Add correlation ID for tracing
    const correlationId = req.headers['x-correlation-id'] || this.generateCorrelationId();
    proxyReq.setHeader('X-Correlation-ID', correlationId);
    
    // Add user context
    if (req.user) {
      proxyReq.setHeader('X-User-ID', req.user.id);
      proxyReq.setHeader('X-User-Roles', JSON.stringify(req.user.roles));
    }

    // Log request
    this.logRequest(req, correlationId);
  };

  private onProxyResponse = (proxyRes: any, req: Request, res: Response) => {
    // Add security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    
    // Log response
    this.logResponse(req, proxyRes);
  };

  private async performHealthCheck(serviceName: string, instance: string) {
    try {
      const response = await fetch(\`\${instance}/health\`, {
        method: 'GET',
        timeout: 5000
      });
      
      const isHealthy = response.ok;
      await this.redis.setex(\`health:\${serviceName}:\${instance}\`, 30, isHealthy.toString());
      
      return isHealthy;
    } catch (error) {
      await this.redis.setex(\`health:\${serviceName}:\${instance}\`, 30, 'false');
      return false;
    }
  }

  private startHealthChecks() {
    setInterval(async () => {
      for (const [serviceName, config] of this.services) {
        for (const instance of config.instances) {
          await this.performHealthCheck(serviceName, instance);
        }
      }
    }, 5000); // Check every 5 seconds
  }

  public start(port: number = 3000) {
    this.setupServiceRoutes();
    this.startHealthChecks();
    
    this.app.listen(port, () => {
      console.log(\`API Gateway running on port \${port}\`);
    });
  }
}`}</code>
                  </pre>
                </div>
              </motion.section>

              {/* Performance & Monitoring */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Performance & Monitoring</h2>
                <div className="bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Performance Metrics</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 10M+ requests processed daily</li>
                        <li>• 15ms average response latency</li>
                        <li>• 99.99% uptime SLA compliance</li>
                        <li>• 50+ microservices orchestrated</li>
                        <li>• Auto-scaling based on demand</li>
                        <li>• Zero-downtime deployments</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Monitoring & Observability</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Real-time traffic analytics</li>
                        <li>• Distributed tracing integration</li>
                        <li>• Custom metrics and dashboards</li>
                        <li>• Automated alerting system</li>
                        <li>• Error rate monitoring</li>
                        <li>• Performance anomaly detection</li>
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
                    "Node.js", "Express", "Redis", "PostgreSQL", 
                    "Docker", "Kubernetes", "Kong", "Prometheus"
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                      <span className="text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Performance Dashboard */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Live Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Uptime</span>
                      <span className="text-foreground">99.99%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-[100%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Response Time</span>
                      <span className="text-foreground">15ms</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Throughput</span>
                      <span className="text-foreground">10M/day</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-[92%]"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Service Health */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Service Health</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Auth Service</span>
                    <span className="text-green-500">● Healthy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">User Service</span>
                    <span className="text-green-500">● Healthy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Payment Service</span>
                    <span className="text-green-500">● Healthy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Notification Service</span>
                    <span className="text-yellow-500">● Warning</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Analytics Service</span>
                    <span className="text-green-500">● Healthy</span>
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

export default APIGateway;