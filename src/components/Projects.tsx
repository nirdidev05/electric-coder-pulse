
import { motion } from 'framer-motion';
import { useSpringValue, animated } from '@react-spring/web';
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AI-Powered Data Analytics Platform",
      description: "Advanced analytics platform using PyTorch and React for real-time data insights and predictive modeling.",
      tech: ["Python", "PyTorch", "React", "SQL"],
      category: "Data Science",
      status: "Featured"
    },
    {
      title: "NLP Sentiment Analysis Engine",
      description: "Multi-language sentiment analysis system optimized for North African dialects and languages.",
      tech: ["Python", "NLP", "Transformers", "FastAPI"],
      category: "AI/ML",
      status: "In Progress"
    },
    {
      title: "Computer Vision GAN Project",
      description: "Generative Adversarial Network for creating high-quality synthetic images with custom conditioning.",
      tech: ["PyTorch", "GANs", "OpenCV", "Python"],
      category: "Deep Learning",
      status: "Completed"
    },
    {
      title: "Interactive Data Visualization Suite",
      description: "Comprehensive data visualization toolkit built with modern web technologies and advanced charting libraries.",
      tech: ["React", "D3.js", "Python", "Tailwind"],
      category: "Frontend",
      status: "Featured"
    }
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const scaleValue = useSpringValue(1, {
      config: { mass: 1, friction: 10, tension: 200 },
    });

    const glowOpacity = useSpringValue(0, {
      config: { mass: 1, friction: 8, tension: 120 },
    });

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        className="relative"
      >
        <animated.div
          style={{ 
            scale: scaleValue,
            boxShadow: glowOpacity.to(opacity => 
              `0 0 ${opacity * 30}px hsla(var(--primary), ${opacity * 0.3})`
            )
          }}
          onMouseEnter={() => {
            scaleValue.start(1.05);
            glowOpacity.start(1);
            setHoveredProject(index);
          }}
          onMouseLeave={() => {
            scaleValue.start(1);
            glowOpacity.start(0);
            setHoveredProject(null);
          }}
          className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full cursor-pointer relative overflow-hidden"
        >
          {/* Status badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Featured' 
              ? 'bg-accent/20 text-accent border border-accent/30' 
              : project.status === 'In Progress'
              ? 'bg-warning/20 text-warning border border-warning/30'
              : 'bg-secondary/20 text-secondary border border-secondary/30'
          }`}>
            {project.status}
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-sm text-muted-foreground font-medium">{project.category}</span>
              <h3 className="text-xl font-bold mt-1 mb-3">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string, techIndex: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.1) + (techIndex * 0.05) + 0.3, duration: 0.3 }}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Hover effect overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredProject === index ? 0.1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl"
          />
        </animated.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative AI solutions and cutting-edge applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/nirdidev05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-primary/20 hover:border-primary"
          >
            View All Projects on GitHub
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
