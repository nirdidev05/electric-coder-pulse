import { useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

// Lazy load project components
const DataAnalytics = lazy(() => import('./projects/DataAnalytics'));
const NLPSentiment = lazy(() => import('./projects/NLPSentiment/page'));
const GAN = lazy(() => import('./projects/GAN'));
const DataVisualization = lazy(() => import('./projects/DataVisualization'));
const WebScraping = lazy(() => import('./projects/WebScraping'));
const BlockchainApp = lazy(() => import('./projects/BlockchainApp'));
const MobileApp = lazy(() => import('./projects/MobileApp'));
const APIGateway = lazy(() => import('./projects/APIGateway'));

// Loading component
const ProjectLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading project details...</p>
    </div>
  </div>
);

// Error component
const ProjectError = ({ projectId }: { projectId: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center max-w-md mx-auto px-6">
      <div className="text-6xl mb-4">🚫</div>
      <h1 className="text-2xl font-bold text-destructive mb-4">Project Not Found</h1>
      <p className="text-muted-foreground mb-6">
        The project "{projectId}" could not be found or is not available.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
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
        Back to Home
      </Link>
    </div>
  </div>
);

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Project mapping with security validation
  const projectComponents: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
    'FORECASTER': DataAnalytics,
    'nlp-sentiment': NLPSentiment,
    'computer-vision': GAN,
    'data-visualization': DataVisualization,
    'web-scraping': WebScraping,
    'gpt-app': BlockchainApp,
    'Protein': MobileApp,
    'api-gateway': APIGateway,
  };
  
  // Validate project ID
  if (!id || !projectComponents[id]) {
    return <ProjectError projectId={id || 'unknown'} />;
  }
  
  // Get the component
  const ProjectComponent = projectComponents[id];
  
  return (
    <Suspense fallback={<ProjectLoader />}>
      <ProjectComponent />
    </Suspense>
  );
};

export default ProjectDetail;