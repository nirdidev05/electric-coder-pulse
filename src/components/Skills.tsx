import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  experience: string;
  projects: number;
  color: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai-ml');
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({});

  const categories: SkillCategory[] = [
    {
      id: 'ai-ml',
      name: 'AI/ML Research',
      icon: '🤖',
      description: 'Deep Learning, Neural Architecture Design, Research Methodologies'
    },
    {
      id: 'programming',
      name: 'Programming',
      icon: '💻',
      description: 'Languages, Frameworks, and Development Tools'
    },
    {
      id: 'systems',
      name: 'Systems & Infrastructure',
      icon: '⚙️',
      description: 'Distributed Computing, Cloud Platforms, DevOps'
    },
    {
      id: 'research',
      name: 'Research Skills',
      icon: '🔬',
      description: 'Academic Writing, Experimental Design, Data Analysis'
    }
  ];

  const skills: Skill[] = [
    // AI/ML Research
    { name: 'PyTorch', level: 95, category: 'ai-ml', experience: '3+ years', projects: 12, color: 'text-orange-400' },
    { name: 'Transformer Architecture', level: 92, category: 'ai-ml', experience: '2+ years', projects: 8, color: 'text-blue-400' },
    { name: 'Custom Neural Networks', level: 88, category: 'ai-ml', experience: '2 years', projects: 6, color: 'text-green-400' },
    { name: 'Memory-Augmented Models', level: 90, category: 'ai-ml', experience: '1.5 years', projects: 4, color: 'text-purple-400' },
    { name: 'Neuro-Symbolic AI', level: 85, category: 'ai-ml', experience: '2 years', projects: 5, color: 'text-pink-400' },
    { name: 'Distributed Training', level: 87, category: 'ai-ml', experience: '2 years', projects: 7, color: 'text-yellow-400' },

    // Programming
    { name: 'Python', level: 95, category: 'programming', experience: '4+ years', projects: 20, color: 'text-blue-500' },
    { name: 'TypeScript/JavaScript', level: 88, category: 'programming', experience: '3 years', projects: 15, color: 'text-yellow-500' },
    { name: 'CUDA/GPU Programming', level: 82, category: 'programming', experience: '2 years', projects: 8, color: 'text-green-500' },
    { name: 'JAX', level: 78, category: 'programming', experience: '1 year', projects: 4, color: 'text-red-500' },
    { name: 'C++', level: 75, category: 'programming', experience: '2 years', projects: 6, color: 'text-purple-500' },
    { name: 'React/Next.js', level: 85, category: 'programming', experience: '2 years', projects: 10, color: 'text-cyan-500' },

    // Systems & Infrastructure
    { name: 'Docker & Kubernetes', level: 80, category: 'systems', experience: '2 years', projects: 8, color: 'text-blue-400' },
    { name: 'AWS/Cloud Computing', level: 75, category: 'systems', experience: '2 years', projects: 10, color: 'text-orange-400' },
    { name: 'Git/Version Control', level: 92, category: 'systems', experience: '4+ years', projects: 25, color: 'text-gray-400' },
    { name: 'Linux/Unix', level: 85, category: 'systems', experience: '3 years', projects: 15, color: 'text-yellow-400' },
    { name: 'MLOps/MLflow', level: 78, category: 'systems', experience: '1.5 years', projects: 6, color: 'text-green-400' },
    { name: 'Database Systems', level: 72, category: 'systems', experience: '2 years', projects: 8, color: 'text-purple-400' },

    // Research Skills
    { name: 'Experimental Design', level: 90, category: 'research', experience: '3 years', projects: 12, color: 'text-blue-400' },
    { name: 'Statistical Analysis', level: 85, category: 'research', experience: '3 years', projects: 15, color: 'text-green-400' },
    { name: 'Academic Writing', level: 82, category: 'research', experience: '2 years', projects: 8, color: 'text-yellow-400' },
    { name: 'Data Visualization', level: 88, category: 'research', experience: '3 years', projects: 18, color: 'text-purple-400' },
    { name: 'Peer Review', level: 75, category: 'research', experience: '1.5 years', projects: 5, color: 'text-pink-400' },
    { name: 'Research Methodology', level: 87, category: 'research', experience: '3 years', projects: 10, color: 'text-cyan-400' }
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newLevels: Record<string, number> = {};
      filteredSkills.forEach(skill => {
        newLevels[skill.name] = skill.level;
      });
      setAnimatedLevels(newLevels);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory, filteredSkills]);

  const getActiveCategory = () => categories.find(cat => cat.id === activeCategory)!;

  return (
    <section id="skills" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit spanning AI research, software engineering, 
              and systematic research methodologies.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-xl transition-all duration-300 text-left animate-fade-in ${
                  activeCategory === category.id
                    ? 'glass-card ring-2 ring-primary shadow-lg shadow-primary/20'
                    : 'glass-card hover:bg-muted/10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {category.description}
                </p>
              </button>
            ))}
          </div>

          {/* Active Category Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">{getActiveCategory().icon}</span>
              <h3 className="text-2xl font-bold text-foreground">{getActiveCategory().name}</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {getActiveCategory().description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass-card p-6 rounded-xl hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">{skill.name}</h4>
                  <span className={`text-sm font-bold ${skill.color}`}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 bg-muted/20 rounded-full mb-4 overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out ${
                      skill.color.replace('text-', 'bg-')
                    }`}
                    style={{ 
                      width: `${animatedLevels[skill.name] || 0}%`,
                      boxShadow: `0 0 10px ${skill.color.replace('text-', '').replace('-400', '').replace('-500', '')}`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-shimmer" />
                  </div>
                </div>

                {/* Skill Details */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{skill.experience} experience</span>
                  <span>{skill.projects} projects</span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-primary mb-2">
                {skills.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Skills</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-secondary mb-2">
                {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
              </div>
              <div className="text-sm text-muted-foreground">Avg Proficiency</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-accent mb-2">
                {skills.reduce((acc, skill) => acc + skill.projects, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <div className="text-2xl font-bold text-warning mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;