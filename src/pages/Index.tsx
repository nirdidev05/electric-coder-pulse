import { lazy } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import LazyWrapper from '@/components/LazyWrapper';
import { usePerformanceMonitoring } from '@/hooks/usePerformanceMonitoring';

// Lazy load heavy components
const Projects = lazy(() => import('@/components/Projects'));
const Achievements = lazy(() => import('@/components/Achievements'));

const Index = () => {
  // Initialize performance monitoring
  usePerformanceMonitoring();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <ScrollProgress className="top-[65px] z-50 h-1 sm:h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
      <Hero />
      <About />
      <LazyWrapper component={Projects} />
      <LazyWrapper component={Achievements} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;