// Preloader utilities for critical resources

export interface PreloadResource {
  href: string;
  as: 'font' | 'image' | 'script' | 'style' | 'document';
  type?: string;
  crossorigin?: 'anonymous' | 'use-credentials';
}

class ResourcePreloader {
  private preloadedResources = new Set<string>();

  /**
   * Preload a single resource
   */
  preload(resource: PreloadResource): void {
    if (this.preloadedResources.has(resource.href)) {
      return; // Already preloaded
    }

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    
    if (resource.type) {
      link.type = resource.type;
    }
    
    if (resource.crossorigin) {
      link.crossOrigin = resource.crossorigin;
    }

    document.head.appendChild(link);
    this.preloadedResources.add(resource.href);
  }

  /**
   * Preload multiple resources
   */
  preloadResources(resources: PreloadResource[]): void {
    resources.forEach(resource => this.preload(resource));
  }

  /**
   * Preload fonts with proper font-display handling
   */
  preloadFonts(fonts: string[]): void {
    fonts.forEach(font => {
      this.preload({
        href: font,
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      });
    });
  }

  /**
   * Preload critical images
   */
  preloadImages(images: string[]): void {
    images.forEach(image => {
      this.preload({
        href: image,
        as: 'image'
      });
    });
  }

  /**
   * Intelligent preloading for route components
   */
  preloadRouteComponent(routePath: string): void {
    // This would be expanded based on your routing structure
    const componentMap: Record<string, () => Promise<unknown>> = {
      '/projects': () => import('@/components/Projects'),
      '/achievements': () => import('@/components/Achievements'),
    };

    const preloadComponent = componentMap[routePath];
    if (preloadComponent && 'requestIdleCallback' in window) {
      requestIdleCallback(() => {
        preloadComponent().catch(() => {
          // Silent fail for preloading
        });
      });
    }
  }

  /**
   * Preload on hover for improved UX
   */
  setupHoverPreloading(): void {
    // Preload route components when hovering over navigation links
    document.addEventListener('mouseover', (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href^="/"]') as HTMLAnchorElement;
      
      if (link && link.href) {
        const url = new URL(link.href);
        this.preloadRouteComponent(url.pathname);
      }
    }, { passive: true });
  }
}

// Export singleton instance
export const preloader = new ResourcePreloader();

/**
 * Initialize critical resource preloading
 */
export const initializePreloading = () => {
  // Preload critical images
  preloader.preloadImages([
    '/placeholder.svg',
  ]);

  // Setup hover preloading
  preloader.setupHoverPreloading();
};

/**
 * React hook for preloading resources
 */
export const usePreloader = () => {
  return {
    preload: preloader.preload.bind(preloader),
    preloadImages: preloader.preloadImages.bind(preloader),
    preloadFonts: preloader.preloadFonts.bind(preloader),
    preloadRouteComponent: preloader.preloadRouteComponent.bind(preloader),
  };
};