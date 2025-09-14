import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const t = useTranslation();

  const PROJECTS_PER_PAGE = 4;

  const projects = useMemo(() => [
    {
      id: "FORECASTER",
      title: t.projects.items.dataAnalytics.title,
      description: t.projects.items.dataAnalytics.description,
      tech: ["Python", "PyTorch", "React", "SQL"],
      category: "Data Science",
      status: "Featured",
      component: "DataAnalytics"
    },
    {
      id: "nlp-sentiment",
      title: t.projects.items.nlpSentiment.title,
      description: t.projects.items.nlpSentiment.description,
      tech: ["Python", "NLP", "Transformers", "FastAPI"],
      category: "AI/ML",
      status: "In Progress",
      component: "NLPSentiment"
    },
    {
      id: "computer-vision",
      title: t.projects.items.computerVision.title,
      description: t.projects.items.computerVision.description,
      tech: ["PyTorch", "GANs", "OpenCV", "Python"],
      category: "Deep Learning",
      status: "Completed",
      component: "GAN"
    },
    {
      id: "data-visualization",
      title: t.projects.items.dataVisualization.title,
      description: t.projects.items.dataVisualization.description,
      tech: ["React", "D3.js", "Python", "Tailwind"],
      category: "Frontend",
      status: "Featured",
      component: "DataVisualization"
    },
    {
      id: "web-scraping",
      title: "Web Scraping Tool",
      description: "Advanced web scraping tool with proxy rotation and anti-detection features",
      tech: ["Python", "Selenium", "BeautifulSoup", "Scrapy"],
      category: "Automation",
      status: "Completed",
      component: "WebScraping"
    },
    {
      id: "gpt-app",
      title: t.projects.items.GPT.title,
      description: t.projects.items.GPT.description,
       tech: ["Python", "PyTorch", "Transformers", "CUDA", "Hugging Face", "TensorBoard"],
  category: "AI/ML",
  status: "In Progress",
  component: "GPTCodeTracer"
    },
    {
      id: "Protein",
      title: t.projects.items.PROTEIN.title,
      description: t.projects.items.PROTEIN.description,
tech: ["Python", "PyTorch", "Scikit-learn", "CatBoost", "LightGBM", "XGBoost", "Pandas"],
      category: "Bioinformatics/ML",
      status: "Featured",
      component: "Protein"
    },
    {
      id: "api-gateway",
      title: "Microservices API Gateway",
      description: "High-performance API gateway with load balancing and authentication",
      tech: ["Node.js", "Express", "Redis", "Docker"],
      category: "Backend",
      status: "Completed",
      component: "APIGateway"
    }
  ], [t]);

  // Pagination calculations
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredProject(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
      setHoveredProject(null);
    }
  }, [totalPages]);

  const handlePreviousPage = useCallback(() => {
    handlePageChange(currentPage - 1);
  }, [currentPage, handlePageChange]);

  const handleNextPage = useCallback(() => {
    handlePageChange(currentPage + 1);
  }, [currentPage, handlePageChange]);

  // Security function to validate project component name
  const isValidProjectComponent = (component: string): boolean => {
    const allowedComponents = [
      'DataAnalytics', 'NLPSentiment', 'GAN', 'DataVisualization',
      'WebScraping', 'GPTCodeTracer', 'Protein', 'APIGateway'
    ];
    return allowedComponents.includes(component);
  };

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const isHovered = hoveredProject === index;
    const isValidComponent = isValidProjectComponent(project.component);

    // If valid component, wrap entire card in Link
    if (isValidComponent) {
      return (
        <Link
          to={`/project/${project.id}`}
          className="relative block h-full"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div
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

              {/* Read More indicator */}
              <div className="mt-6">
                <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300 group">
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
                </div>
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
        </Link>
      );
    }

    // If invalid component, render non-clickable card
    return (
      <div className="relative">
        <div
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className={`
            bg-background/80 backdrop-blur-sm border border-border 
            rounded-2xl p-8 h-full overflow-hidden opacity-60
            transition-all duration-300 ease-out
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

            {/* Disabled Read More */}
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 text-muted-foreground font-medium cursor-not-allowed">
                {t.projects.readMore}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-50"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PaginationControls = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex items-center justify-center gap-4 mt-12">
        {/* Previous Button */}
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className={`
            p-2 rounded-full transition-all duration-300
            ${currentPage === 0 
              ? 'text-muted-foreground cursor-not-allowed opacity-50' 
              : 'text-primary hover:bg-primary/10 hover:text-primary-foreground'
            }
          `}
          aria-label="Previous page"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="rotate-180"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`
                w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300
                ${currentPage === index
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }
              `}
              aria-label={`Go to page ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className={`
            p-2 rounded-full transition-all duration-300
            ${currentPage === totalPages - 1 
              ? 'text-muted-foreground cursor-not-allowed opacity-50' 
              : 'text-primary hover:bg-primary/10 hover:text-primary-foreground'
            }
          `}
          aria-label="Next page"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="tex-white bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              {t.projects.title.split(' ')[0]}
            </span>{' '}
            <span className="text-white">{t.projects.title.split(' ')[1]}</span>
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
        <PaginationControls />

        <div className="text-center mt-12">
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