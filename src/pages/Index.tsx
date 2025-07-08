import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
<ScrollProgress className="top-[65px] z-20 bg-gradient-to-r from-blue-600 via-green-300 to-white" />      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;