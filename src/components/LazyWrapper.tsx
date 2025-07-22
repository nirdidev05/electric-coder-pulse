import { Suspense, ComponentType, LazyExoticComponent } from 'react';

interface LazyWrapperProps {
  component: LazyExoticComponent<ComponentType<unknown>>;
  fallback?: React.ReactNode;
  className?: string;
}

const DefaultLoader = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center py-12 ${className}`}>
    <div className="animate-pulse space-y-4 w-full max-w-4xl mx-auto px-4">
      <div className="h-8 bg-muted rounded w-1/4"></div>
      <div className="h-4 bg-muted rounded w-3/4"></div>
      <div className="h-4 bg-muted rounded w-1/2"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-48 bg-muted rounded-lg"></div>
        ))}
      </div>
    </div>
  </div>
);

const LazyWrapper = ({ component: Component, fallback, className }: LazyWrapperProps) => {
  return (
    <Suspense fallback={fallback || <DefaultLoader className={className} />}>
      <Component />
    </Suspense>
  );
};

export default LazyWrapper;