
import { motion } from 'framer-motion';
import { useSpringValue, animated } from '@react-spring/web';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import OrbitingCircles from './ui/orbiting-circles';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const opacity = useSpringValue(0.7, {
    config: { mass: 2, friction: 5, tension: 80 },
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Custom cursor trail */}
      <motion.div
        className="cursor-trail w-4 h-4 bg-primary/30 rounded-full blur-sm"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="gradient-text">BENBOUTA</span>
              <br />
              <span className="text-foreground">Walid</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-2"
            >
              <h2 className="text-2xl lg:text-3xl text-secondary font-semibold">
                AI Engineer & Data Scientist
              </h2>
              <p className="text-lg text-muted-foreground">
                Final-year ESI student • Competition Winner • AI Innovator
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Creating intelligent, responsible AI solutions for real-world applications 
              in North Africa & beyond. Specializing in Deep Learning, NLP, and Data Visualization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <animated.button
                style={{ opacity }}
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect"
                onMouseEnter={() => {
                  opacity.start(1);
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  opacity.start(0.7);
                  setIsHovering(false);
                }}
              >
                Get In Touch
              </animated.button>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Orbiting Circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative flex items-center justify-center h-96"
          >
            <div className="relative w-80 h-80">
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-float">
                  <span className="text-2xl font-bold">AI</span>
                </div>
              </div>

              {/* Orbiting social icons */}
              <OrbitingCircles radius={80} duration={15} delay={0}>
                <a
                  href="https://github.com/nirdidev05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
              </OrbitingCircles>

              <OrbitingCircles radius={80} duration={15} delay={5}>
                <a
                  href="https://www.linkedin.com/in/benbouta-walid-416870291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </OrbitingCircles>

              <OrbitingCircles radius={80} duration={15} delay={10}>
                <a
                  href="mailto:benboutawalid@gmail.com"
                  className="w-full h-full flex items-center justify-center hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                </a>
              </OrbitingCircles>

              {/* Outer ring with tech stack */}
              <OrbitingCircles radius={120} duration={25} delay={0} reverse>
                <div className="text-xs font-semibold">Python</div>
              </OrbitingCircles>

              <OrbitingCircles radius={120} duration={25} delay={8} reverse>
                <div className="text-xs font-semibold">PyTorch</div>
              </OrbitingCircles>

              <OrbitingCircles radius={120} duration={25} delay={16} reverse>
                <div className="text-xs font-semibold">React</div>
              </OrbitingCircles>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-secondary rounded-full animate-float"
        style={{ animationDelay: '1s' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full animate-float"
        style={{ animationDelay: '2s' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      />
    </section>
  );
};

export default Hero;
