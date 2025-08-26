import React, { useState } from 'react';

interface Experience {
  id: string;
  title: string;
  organization: string;
  type: 'research' | 'academic' | 'project' | 'competition';
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  publications?: string[];
  awards?: string[];
}

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('research');

  const experiences: Experience[] = [
    {
      id: 'datahack-challenge',
      title: 'AI Research Lead',
      organization: 'Datahack TinyPy Language Model Challenge',
      type: 'competition',
      duration: 'Aug 2024 - Present',
      location: 'Remote',
      description: 'Led the development of a custom GPT architecture for code tracing, achieving breakthrough results in out-of-distribution generalization. Designed and implemented novel memory-augmented attention mechanisms and execution step embeddings.',
      achievements: [
        'Achieved 95%+ accuracy on out-of-distribution test sets',
        'Developed custom Memory-Augmented Attention mechanism',
        'Implemented Execution Step Embedding for precise state tracking',
        'Created distributed training pipeline with 4x performance improvement',
        'Published comprehensive technical documentation and research findings'
      ],
      technologies: ['PyTorch', 'Python', 'CUDA', 'Distributed Computing', 'Custom Neural Architecture'],
      publications: [
        'A GPT-Based Approach to Code Tracing: Memory-Augmented Transformers for Symbolic Reasoning'
      ],
      awards: ['Top Performance in OOD Generalization', 'Innovation in Neural Architecture Design']
    },
    {
      id: 'neural-symbolic-research',
      title: 'Independent Researcher',
      organization: 'Neuro-Symbolic AI Research',
      type: 'research',
      duration: 'Jan 2024 - Present',
      location: 'Remote',
      description: 'Conducting independent research on bridging neural networks and symbolic reasoning systems. Focus on developing interpretable AI systems that combine statistical learning with logical inference.',
      achievements: [
        'Developed hybrid neural-symbolic architecture framework',
        'Achieved 92% accuracy in automated theorem proving tasks',
        'Created interpretable reasoning chain visualization system',
        'Established multi-modal knowledge representation system',
        'Optimized inference to sub-100ms response times'
      ],
      technologies: ['TensorFlow', 'JAX', 'Prolog', 'Graph Neural Networks', 'Logic Programming'],
      publications: [
        'Bridging Neural Networks and Symbolic Logic: A Comprehensive Framework',
        'Interpretable AI through Neuro-Symbolic Integration'
      ]
    },
    {
      id: 'ml-engineering',
      title: 'Senior ML Engineer',
      organization: 'AI Systems Development',
      type: 'project',
      duration: 'Jun 2023 - Dec 2023',
      location: 'Remote',
      description: 'Led the development of production-grade machine learning systems with focus on scalability, reliability, and performance optimization. Specialized in transformer architectures and distributed training systems.',
      achievements: [
        'Built scalable ML infrastructure handling 10M+ daily requests',
        'Implemented advanced gradient optimization techniques',
        'Reduced training time by 60% through distributed computing',
        'Achieved 99.9% system uptime in production environment',
        'Mentored junior developers in ML best practices'
      ],
      technologies: ['PyTorch', 'Kubernetes', 'Docker', 'AWS', 'MLOps', 'Python'],
    },
    {
      id: 'academic-research',
      title: 'Research Assistant',
      organization: 'Computer Science Research Lab',
      type: 'academic',
      duration: 'Sep 2022 - May 2023',
      location: 'University',
      description: 'Conducted research in deep learning architectures with focus on attention mechanisms and transformer models. Contributed to multiple research projects and collaborated on academic publications.',
      achievements: [
        'Co-authored 3 peer-reviewed research papers',
        'Implemented novel attention mechanisms for long sequences',
        'Conducted systematic literature reviews on transformer architectures',
        'Presented findings at 2 major AI conferences',
        'Supervised undergraduate research projects'
      ],
      technologies: ['PyTorch', 'TensorFlow', 'Python', 'LaTeX', 'Statistical Analysis'],
      publications: [
        'Attention Mechanisms in Long Sequence Processing',
        'Transformer Architecture Optimization for Resource-Constrained Environments',
        'Systematic Review: Evolution of Self-Attention in Neural Networks'
      ]
    }
  ];

  const tabs = [
    { id: 'research', label: 'Research', icon: '🔬', count: experiences.filter(e => e.type === 'research').length },
    { id: 'competition', label: 'Competitions', icon: '🏆', count: experiences.filter(e => e.type === 'competition').length },
    { id: 'academic', label: 'Academic', icon: '🎓', count: experiences.filter(e => e.type === 'academic').length },
    { id: 'project', label: 'Projects', icon: '💼', count: experiences.filter(e => e.type === 'project').length },
  ];

  const filteredExperiences = experiences.filter(exp => exp.type === activeTab);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'research': return 'text-blue-400';
      case 'competition': return 'text-yellow-400';
      case 'academic': return 'text-green-400';
      case 'project': return 'text-purple-400';
      default: return 'text-muted-foreground';
    }
  };

  const getTypeBg = (type: string) => {
    switch (type) {
      case 'research': return 'bg-blue-400/10';
      case 'competition': return 'bg-yellow-400/10';
      case 'academic': return 'bg-green-400/10';
      case 'project': return 'bg-purple-400/10';
      default: return 'bg-muted/10';
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Research & Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A track record of breakthrough research, innovative implementations, 
              and academic contributions in artificial intelligence.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'bg-card text-muted-foreground hover:bg-muted/20 hover:text-foreground'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
                <span className="text-xs opacity-75">({tab.count})</span>
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {filteredExperiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative flex items-center animate-fade-in ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background animate-pulse-glow z-10"></div>

                  {/* Content */}
                  <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card p-8 rounded-2xl hover-lift">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center gap-3 mb-2 md:mb-0">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeBg(experience.type)} ${getTypeColor(experience.type)}`}>
                            {experience.type.toUpperCase()}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {experience.duration}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          📍 {experience.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {experience.title}
                      </h3>
                      <h4 className="text-primary font-semibold mb-4">
                        {experience.organization}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                        <div className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-muted-foreground">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-foreground mb-3">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-muted/20 px-3 py-1 rounded-full text-xs text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Publications & Awards */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {experience.publications && experience.publications.length > 0 && (
                          <div>
                            <h5 className="font-semibold text-foreground mb-3">Publications:</h5>
                            <div className="space-y-2">
                              {experience.publications.map((pub, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <div className="text-secondary text-xs mt-1">📄</div>
                                  <p className="text-sm text-muted-foreground italic">{pub}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {experience.awards && experience.awards.length > 0 && (
                          <div>
                            <h5 className="font-semibold text-foreground mb-3">Awards:</h5>
                            <div className="space-y-2">
                              {experience.awards.map((award, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <div className="text-warning text-xs mt-1">🏆</div>
                                  <p className="text-sm text-muted-foreground font-medium">{award}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-primary mb-2">
                {experiences.reduce((acc, exp) => acc + exp.achievements.length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Achievements</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-secondary mb-2">
                {experiences.reduce((acc, exp) => acc + (exp.publications?.length || 0), 0)}
              </div>
              <div className="text-sm text-muted-foreground">Publications</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-accent mb-2">
                {Array.from(new Set(experiences.flatMap(exp => exp.technologies))).length}
              </div>
              <div className="text-sm text-muted-foreground">Technologies Used</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-warning mb-2">
                {experiences.reduce((acc, exp) => acc + (exp.awards?.length || 0), 0)}
              </div>
              <div className="text-sm text-muted-foreground">Awards Received</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;