import { motion } from "framer-motion";
import { ArrowLeft, Globe, Shield, Zap, Server } from "lucide-react";
import { Link } from "react-router-dom";

const WebScraping = () => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Globe className="w-8 h-8 text-orange-500" />
              <span className="bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
                Web Scraping Engine
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6"
            >
              Enterprise-Grade Web Scraping & Data Extraction Platform
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A sophisticated web scraping platform capable of extracting data from 10,000+ websites daily, 
              featuring anti-detection systems, distributed architecture, and real-time data processing.
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
              {/* Architecture Overview */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">System Architecture</h2>
                <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    Built a distributed web scraping platform that handles large-scale data extraction 
                    while maintaining stealth capabilities and ensuring data quality. The system processes 
                    millions of web pages daily across multiple industries and data sources.
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-orange-500/5 rounded-lg">
                      <Globe className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">10K+</div>
                      <div className="text-sm text-muted-foreground">Websites/Day</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/5 rounded-lg">
                      <Server className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">500+</div>
                      <div className="text-sm text-muted-foreground">Proxy Servers</div>
                    </div>
                    <div className="text-center p-4 bg-green-500/5 rounded-lg">
                      <Zap className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">99.2%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                    <div className="text-center p-4 bg-purple-500/5 rounded-lg">
                      <Shield className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">0.1%</div>
                      <div className="text-sm text-muted-foreground">Detection Rate</div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Anti-Detection Systems */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Anti-Detection & Stealth Technology</h2>
                <div className="space-y-8">
                  {/* Proxy Management */}
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Intelligent Proxy Rotation</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Implements a sophisticated proxy management system with 500+ rotating proxies 
                          across 50+ countries. Uses machine learning to predict optimal proxy selection 
                          and automatic failover mechanisms.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Active Proxies:</span>
                            <span className="text-orange-500 font-mono">500+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Countries:</span>
                            <span className="text-orange-500 font-mono">50+</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Rotation Interval:</span>
                            <span className="text-orange-500 font-mono">30-180s</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 text-foreground">Stealth Features</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div>• Browser fingerprint randomization</div>
                          <div>• Human-like navigation patterns</div>
                          <div>• Dynamic request headers</div>
                          <div>• CAPTCHA solving integration</div>
                          <div>• JavaScript rendering support</div>
                          <div>• Cookie and session management</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Browser Automation */}
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Headless Browser Management</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Multi-Engine Support</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Supports Chromium, Firefox, and WebKit engines with intelligent 
                          engine selection based on target website requirements.
                        </p>
                        <div className="text-xs space-y-1 text-muted-foreground">
                          <div>• Puppeteer & Playwright integration</div>
                          <div>• Custom Chrome DevTools Protocol</div>
                          <div>• Mobile browser emulation</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Performance Optimization</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          Resource blocking, image optimization, and parallel processing 
                          for maximum efficiency and minimal resource usage.
                        </p>
                        <div className="text-xs space-y-1 text-muted-foreground">
                          <div>• 70% faster page loads</div>
                          <div>• 60% reduction in bandwidth</div>
                          <div>• Auto-scaling browser pools</div>
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
                <h3 className="text-2xl font-bold mb-6 text-foreground">Core Scraping Engine</h3>
                <div className="bg-card rounded-xl p-6 border border-border shadow-lg overflow-x-auto">
                  <pre className="text-sm text-muted-foreground">
                    <code>{`import asyncio
import random
from playwright.async_api import async_playwright
from proxy_rotator import ProxyManager
from stealth_headers import StealthHeaders

class AdvancedScraper:
    def __init__(self):
        self.proxy_manager = ProxyManager()
        self.stealth_headers = StealthHeaders()
        self.browser_pool = []
        
    async def scrape_with_stealth(self, url, selectors):
        """Advanced scraping with anti-detection measures"""
        
        # Get optimal proxy and headers
        proxy = await self.proxy_manager.get_optimal_proxy()
        headers = self.stealth_headers.generate_random_headers()
        
        async with async_playwright() as p:
            # Launch browser with stealth configuration
            browser = await p.chromium.launch(
                headless=True,
                proxy={"server": proxy.url},
                args=[
                    '--no-first-run',
                    '--disable-blink-features=AutomationControlled',
                    '--disable-web-security',
                    f'--user-agent={headers["User-Agent"]}'
                ]
            )
            
            context = await browser.new_context(
                extra_http_headers=headers,
                viewport={'width': random.randint(1200, 1920), 
                         'height': random.randint(800, 1080)}
            )
            
            page = await context.new_page()
            
            # Human-like navigation
            await self.simulate_human_behavior(page)
            
            try:
                await page.goto(url, wait_until='networkidle')
                
                # Extract data using provided selectors
                data = {}
                for key, selector in selectors.items():
                    elements = await page.query_selector_all(selector)
                    data[key] = [await el.text_content() for el in elements]
                
                return {
                    'success': True,
                    'data': data,
                    'proxy_used': proxy.url,
                    'response_time': page.response_time
                }
                
            except Exception as e:
                await self.handle_detection(page, e)
                return {'success': False, 'error': str(e)}
                
            finally:
                await browser.close()
    
    async def simulate_human_behavior(self, page):
        """Simulate human-like mouse movements and delays"""
        # Random delays between actions
        await asyncio.sleep(random.uniform(1, 3))
        
        # Simulate mouse movements
        await page.mouse.move(
            random.randint(100, 800), 
            random.randint(100, 600)
        )
        
        # Random scroll behavior
        await page.evaluate(f"window.scrollTo(0, {random.randint(100, 500)})")
        await asyncio.sleep(random.uniform(0.5, 2))`}</code>
                  </pre>
                </div>
              </motion.section>

              {/* Performance & Results */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Performance Metrics & Results</h2>
                <div className="bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Operational Excellence</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 10,000+ websites scraped daily</li>
                        <li>• 99.2% success rate with anti-detection</li>
                        <li>• 0.1% detection rate across all targets</li>
                        <li>• Sub-second response times</li>
                        <li>• 24/7 automated monitoring</li>
                        <li>• Real-time proxy health checking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Business Impact</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• $3M+ in competitive intelligence value</li>
                        <li>• 80% reduction in manual data collection</li>
                        <li>• 100+ data sources automated</li>
                        <li>• 95% cost savings vs. manual methods</li>
                        <li>• Real-time market monitoring</li>
                        <li>• 24/7 pricing intelligence</li>
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
                    "Python", "Playwright", "Scrapy", "Selenium", 
                    "Redis", "MongoDB", "Docker", "Kubernetes"
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span className="text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Proxy Statistics */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Proxy Network</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Success Rate</span>
                      <span className="text-foreground">99.2%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-[99%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Response Time</span>
                      <span className="text-foreground">850ms</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Stealth Level</span>
                      <span className="text-foreground">99.9%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-[100%]"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Legal Compliance */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Compliance & Ethics</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Robots.txt compliance checking</div>
                  <div>• Rate limiting per website</div>
                  <div>• GDPR data handling procedures</div>
                  <div>• Public data sources only</div>
                  <div>• Respectful crawling practices</div>
                  <div>• Terms of service monitoring</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebScraping;