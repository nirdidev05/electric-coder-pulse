import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Target, Lightbulb, Trophy, CheckCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const t = useTranslation();

  const projectsData = {
    'data-analytics': {
      ...t.projects.items.dataAnalytics,
      tech: ["Python", "PyTorch", "React", "SQL"],
      category: "Data Science",
      status: "Featured"
    },
    'nlp-sentiment': {
      ...t.projects.items.nlpSentiment,
      tech: ["Python", "NLP", "Transformers", "FastAPI"],
      category: "AI/ML",
      status: "In Progress"
    },
    'computer-vision': {
      ...t.projects.items.computerVision,
      tech: ["PyTorch", "GANs", "OpenCV", "Python"],
      category: "Deep Learning",
      status: "Completed"
    },
    'data-visualization': {
      ...t.projects.items.dataVisualization,
      tech: ["React", "D3.js", "Python", "Tailwind"],
      category: "Frontend",
      status: "Featured"
    }
  };

  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            {t.projects.backToProjects}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={20} />
            {t.projects.backToProjects}
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-background/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                {project.category}
              </span>
              <span className={`ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                project.status === 'Featured' 
                  ? 'bg-accent/20 text-accent border border-accent/30' 
                  : project.status === 'In Progress'
                  ? 'bg-warning/20 text-warning border border-warning/30'
                  : 'bg-secondary/20 text-secondary border border-secondary/30'
              }`}>
                {project.status}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-technical">
              <span className="gradient-text">{project.title}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {project.tech.map((tech: string, index: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 font-technical"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid gap-16">
            
            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code className="text-primary" size={24} />
                </div>
                <h2 className="text-3xl font-bold m-0 font-technical">{t.projects.projectDetails.overview}</h2>
              </div>
              <div className="bg-card/50 rounded-xl p-8 border border-border">
                <p className="text-foreground leading-relaxed text-lg">
                  {project.overview}
                </p>
              </div>
            </motion.section>

            {/* Technologies Used */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Target className="text-secondary" size={24} />
                </div>
                <h2 className="text-3xl font-bold font-technical">{t.projects.projectDetails.technologies}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.tech.map((tech: string, index: number) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-background border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
                  >
                    <span className="font-technical font-semibold text-primary">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Challenges Faced */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Lightbulb className="text-warning" size={24} />
                </div>
                <h2 className="text-3xl font-bold font-technical">{t.projects.projectDetails.challenges}</h2>
              </div>
              <div className="bg-card/50 rounded-xl p-8 border border-border">
                <p className="text-foreground leading-relaxed text-lg">
                  {project.challenges}
                </p>
              </div>
            </motion.section>

            {/* Results & Impact */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Trophy className="text-accent" size={24} />
                </div>
                <h2 className="text-3xl font-bold font-technical">{t.projects.projectDetails.results}</h2>
              </div>
              <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl p-8 border border-accent/20">
                <p className="text-foreground leading-relaxed text-lg">
                  {project.results}
                </p>
              </div>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <h2 className="text-3xl font-bold font-technical">{t.projects.projectDetails.keyFeatures}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <CheckCircle size={20} className="text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

          </div>
        </div>
      </main>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Interested in similar projects?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore more innovative solutions and get in touch to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View All Projects
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;