import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const t = useTranslation();
  
  const PROJECTS_PER_PAGE = 4;

  const projects = useMemo(() => [
    {
      id: "data-analytics",
      title: t.projects.items.dataAnalytics.title,
      description: t.projects.items.dataAnalytics.description,
      tech: ["Python", "PyTorch", "React", "SQL"],
      category: "Data Science",
      status: "Featured"
    },
    {
      id: "nlp-sentiment",
      title: t.projects.items.nlpSentiment.title,
      description: t.projects.items.nlpSentiment.description,
      tech: ["Python", "NLP", "Transformers", "FastAPI"],
      category: "AI/ML",
      status: "In Progress"
    },
    {
      id: "computer-vision",
      title: t.projects.items.computerVision.title,
      description: t.projects.items.computerVision.description,
      tech: ["PyTorch", "GANs", "OpenCV", "Python"],
      category: "Deep Learning",
      status: "Completed"
    },
    {
      id: "data-visualization",
      title: t.projects.items.dataVisualization.title,
      description: t.projects.items.dataVisualization.description,
      tech: ["React", "D3.js", "Python", "Tailwind"],
      category: "Frontend",
      status: "Featured"
    }
  ], [t]);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredProject(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const currentProjects = useMemo(() => {
    const startIndex = currentPage * PROJECTS_PER_PAGE;
    return projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [projects, currentPage]);

  const handlePreviousPage = useCallback(() => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  }, [totalPages]);

  const handlePageClick = useCallback((pageIndex: number) => {
    setCurrentPage(pageIndex);
  }, []);

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const isHovered = hoveredProject === index;

    return (
      <div className="relative">
        <div
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className={`
            bg-background/80 backdrop-blur-sm border border-border 
            rounded-2xl p-8 h-full cursor-pointer overflow-hidden
            transition-all duration-300 ease-out
            ${isHovered ? 'border-primary/50 shadow-lg shadow-primary/10 transform -translate-y-2' : ''}
          `}
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
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Read More Button */}
            <div className="mt-6">
              <Link
                to={`/project/${project.id}`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300 group"
              >
                {t.projects.readMore}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Hover effect overlay */}
          <div 
            className={`
              absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 
              rounded-2xl transition-opacity duration-300
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">{t.projects.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 mb-8 gap-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 0}
              className="p-2 rounded-lg bg-background border border-border hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'bg-primary scale-125' 
                      : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-lg bg-background border border-border hover:border-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://github.com/nirdidev05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-primary/20 hover:border-primary group"
          >
            View All Projects on GitHub
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;