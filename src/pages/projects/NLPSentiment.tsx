import { motion } from "framer-motion";
import { ArrowLeft, Brain, MessageSquare, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const NLPSentiment = () => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Brain className="w-8 h-8 text-blue-500" />
              <span className="bg-blue-500/10 text-blue-500 px-4 py-2 rounded-full text-sm font-medium">
                Natural Language Processing
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6"
            >
              Advanced Sentiment Analysis & Classification System
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              A state-of-the-art NLP system leveraging transformer architectures for multi-language 
              sentiment analysis, emotion detection, and text classification with 94.2% accuracy.
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
              {/* Model Architecture */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Model Architecture</h2>
                <div className="bg-card rounded-xl p-8 border border-border shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">Transformer Base</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Built on BERT-large architecture with custom fine-tuning for sentiment analysis. 
                        The model processes text through 24 transformer layers with multi-head attention 
                        mechanisms for contextual understanding.
                      </p>
                      <div className="bg-blue-500/5 rounded-lg p-4">
                        <div className="text-lg font-bold text-foreground">94.2%</div>
                        <div className="text-sm text-muted-foreground">Overall Accuracy</div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">Multi-Task Learning</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Implements simultaneous sentiment classification, emotion detection, and 
                        intent recognition through shared representations and task-specific heads.
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Sentiment</span>
                          <span className="text-foreground">96.1%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Emotion</span>
                          <span className="text-foreground">91.8%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Intent</span>
                          <span className="text-foreground">89.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Training Process */}
              <motion.section
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-foreground">Training & Optimization</h2>
                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Dataset Composition</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-green-500/5 rounded-lg">
                        <div className="text-2xl font-bold text-foreground">2.5M</div>
                        <div className="text-sm text-muted-foreground">Training Samples</div>
                      </div>
                      <div className="text-center p-4 bg-blue-500/5 rounded-lg">
                        <div className="text-2xl font-bold text-foreground">12</div>
                        <div className="text-sm text-muted-foreground">Languages</div>
                      </div>
                      <div className="text-center p-4 bg-purple-500/5 rounded-lg">
                        <div className="text-2xl font-bold text-foreground">500K</div>
                        <div className="text-sm text-muted-foreground">Test Set</div>
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
                <h3 className="text-2xl font-bold mb-6 text-foreground">Model Implementation</h3>
                <div className="bg-card rounded-xl p-6 border border-border shadow-lg overflow-x-auto">
                  <pre className="text-sm text-muted-foreground">
                    <code>{`import torch
import torch.nn as nn
from transformers import BertModel, BertTokenizer

class MultiTaskSentimentModel(nn.Module):
    def __init__(self, bert_model_name='bert-large-uncased', num_emotions=8):
        super().__init__()
        self.bert = BertModel.from_pretrained(bert_model_name)
        self.dropout = nn.Dropout(0.3)
        
        # Task-specific heads
        self.sentiment_classifier = nn.Linear(1024, 3)  # pos/neg/neutral
        self.emotion_classifier = nn.Linear(1024, num_emotions)
        self.intent_classifier = nn.Linear(1024, 10)  # intent categories
        
    def forward(self, input_ids, attention_mask):
        outputs = self.bert(input_ids=input_ids, 
                          attention_mask=attention_mask)
        
        pooled_output = self.dropout(outputs.pooler_output)
        
        sentiment_logits = self.sentiment_classifier(pooled_output)
        emotion_logits = self.emotion_classifier(pooled_output)
        intent_logits = self.intent_classifier(pooled_output)
        
        return {
            'sentiment': sentiment_logits,
            'emotion': emotion_logits,
            'intent': intent_logits
        }`}</code>
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
                <h2 className="text-3xl font-bold mb-6 text-foreground">Performance Metrics</h2>
                <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Model Performance</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">F1 Score (Sentiment)</span>
                          <span className="text-foreground font-mono">0.962</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Precision (Overall)</span>
                          <span className="text-foreground font-mono">0.941</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Recall (Overall)</span>
                          <span className="text-foreground font-mono">0.938</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Inference Time</span>
                          <span className="text-foreground font-mono">23ms</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-foreground">Production Metrics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Daily Predictions</span>
                          <span className="text-foreground font-mono">1.2M+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">API Uptime</span>
                          <span className="text-foreground font-mono">99.97%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Avg Response Time</span>
                          <span className="text-foreground font-mono">45ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Languages Supported</span>
                          <span className="text-foreground font-mono">12</span>
                        </div>
                      </div>
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
                    "PyTorch", "Transformers", "BERT", "FastAPI", 
                    "PostgreSQL", "Redis", "Docker", "Kubernetes"
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Confusion Matrix */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Model Accuracy</h3>
                <div className="grid grid-cols-3 gap-2 text-xs text-center">
                  <div className="p-2 bg-muted rounded">Pred\True</div>
                  <div className="p-2 bg-green-500/10 text-green-600 rounded">Positive</div>
                  <div className="p-2 bg-red-500/10 text-red-600 rounded">Negative</div>
                  
                  <div className="p-2 bg-green-500/10 text-green-600 rounded">Positive</div>
                  <div className="p-2 bg-green-500/20 text-green-700 font-bold rounded">94.2%</div>
                  <div className="p-2 bg-red-500/10 text-red-600 rounded">5.8%</div>
                  
                  <div className="p-2 bg-red-500/10 text-red-600 rounded">Negative</div>
                  <div className="p-2 bg-green-500/10 text-green-600 rounded">7.1%</div>
                  <div className="p-2 bg-red-500/20 text-red-700 font-bold rounded">92.9%</div>
                </div>
              </motion.div>

              {/* Supported Languages */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-xl p-6 border border-border shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground">Supported Languages</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• English</div>
                  <div>• Spanish</div>
                  <div>• French</div>
                  <div>• German</div>
                  <div>• Italian</div>
                  <div>• Portuguese</div>
                  <div>• Dutch</div>
                  <div>• Russian</div>
                  <div>• Chinese</div>
                  <div>• Japanese</div>
                  <div>• Korean</div>
                  <div>• Arabic</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NLPSentiment;