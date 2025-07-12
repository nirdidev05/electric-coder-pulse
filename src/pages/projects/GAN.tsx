import { Link, useParams } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const GAN = () => {
  const { id } = useParams<{ id: string }>();
  const t = useTranslation();

  // Security check - validate project ID
  const isValidProjectId = (projectId: string): boolean => {
    const allowedIds = ['computer-vision', 'data-analytics', 'nlp-sentiment', 'data-visualization', 'web-scraping', 'blockchain-app', 'mobile-app', 'api-gateway'];
    return allowedIds.includes(projectId);
  };

  if (!id || !isValidProjectId(id)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested project could not be found.</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="rotate-180"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Back to Projects
            </Link>
            <div className="text-sm text-muted-foreground">
              Project Details
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Project Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              Deep Learning
            </span>
            <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
              Completed
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Computer Vision with <span className="gradient-text">GANs</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl">
            Advanced computer vision project implementing Generative Adversarial Networks for image generation and enhancement. 
            This project explores the latest techniques in deep learning for visual content creation.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {['PyTorch', 'GANs', 'OpenCV', 'Python', 'NumPy', 'Matplotlib', 'CUDA'].map((tech) => (
              <span
                key={tech}
                className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This project implements a sophisticated Generative Adversarial Network (GAN) architecture 
                for computer vision tasks. The system is capable of generating high-quality synthetic images 
                and performing various image enhancement operations.
              </p>
              <p>
                The implementation includes custom loss functions, advanced training techniques, and 
                comprehensive evaluation metrics to ensure optimal performance and stability during training.
              </p>
              <p>
                Key features include real-time image generation, style transfer capabilities, and 
                integration with popular computer vision libraries for seamless deployment.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {[
                'High-resolution image generation',
                'Style transfer and image enhancement',
                'Real-time processing capabilities',
                'Custom loss function implementations',
                'Comprehensive training pipeline',
                'Performance optimization techniques'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary mt-0.5 flex-shrink-0"
                  >
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results and Metrics */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Results & Performance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Generation Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2.3s</div>
              <div className="text-sm text-muted-foreground">Average Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1024x1024</div>
              <div className="text-sm text-muted-foreground">Max Resolution</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/nirdidev05/computer-vision-gan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
          <a
            href="https://demo.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        </div>
      </main>
    </div>
  );
};

export default GAN;