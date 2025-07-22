import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

/**
 * Hook for monitoring Core Web Vitals and performance metrics
 */
export const usePerformanceMonitoring = () => {
  const logMetric = useCallback((name: string, value: number) => {
    // In production, you would send these to your analytics service
    console.log(`Performance Metric - ${name}: ${value}ms`);
    
    // Example: Send to analytics
    // analytics.track('performance_metric', { name, value });
  }, []);

  const measureWebVitals = useCallback(() => {
    // Measure FCP (First Contentful Paint)
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      logMetric('FCP', fcpEntry.startTime);
    }

    // Measure LCP using PerformanceObserver
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          logMetric('LCP', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        const clsObserver = new PerformanceObserver((entryList) => {
          let clsScore = 0;
          for (const entry of entryList.getEntries()) {
            const layoutShiftEntry = entry as PerformanceEntry & { value: number; hadRecentInput: boolean };
            if (!layoutShiftEntry.hadRecentInput) {
              clsScore += layoutShiftEntry.value;
            }
          }
          if (clsScore > 0) {
            logMetric('CLS', clsScore);
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Measure FID
        const fidObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            const firstInputEntry = entry as PerformanceEntry & { processingStart: number };
            logMetric('FID', firstInputEntry.processingStart - entry.startTime);
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }, [logMetric]);

  const measurePageLoad = useCallback(() => {
    // Measure navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const ttfb = navigation.responseStart - navigation.fetchStart;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
      const pageLoad = navigation.loadEventEnd - navigation.fetchStart;

      logMetric('TTFB', ttfb);
      logMetric('DOM Content Loaded', domContentLoaded);
      logMetric('Page Load', pageLoad);
    }
  }, [logMetric]);

  const measureResourceTiming = useCallback(() => {
    // Analyze resource loading performance
    const resources = performance.getEntriesByType('resource');
    const slowResources = resources.filter(resource => resource.duration > 1000);
    
    if (slowResources.length > 0) {
      console.warn('Slow loading resources detected:', slowResources.map(r => ({
        name: r.name,
        duration: r.duration
      })));
    }
  }, []);

  useEffect(() => {
    // Measure immediately for sync metrics
    measurePageLoad();
    
    // Measure after load for async metrics
    const timer = setTimeout(() => {
      measureWebVitals();
      measureResourceTiming();
    }, 1000);

    return () => clearTimeout(timer);
  }, [measurePageLoad, measureWebVitals, measureResourceTiming]);

  return {
    measureWebVitals,
    measurePageLoad,
    measureResourceTiming,
    logMetric,
  };
};