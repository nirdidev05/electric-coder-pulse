import { motion } from 'framer-motion';
import { useSpringValue, animated } from '@react-spring/web';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import OrbitingCircles from './ui/orbiting-circles';
import { RollingText } from '@/components/ui/rolling';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { HighlightText } from '@/components/animate-ui/text/highlight';
import { useTranslation } from '@/hooks/useTranslation';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const t = useTranslation();

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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-2 sm:space-y-3"
            >
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                {t.hero.greeting}
              </p>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-secondary font-semibold leading-tight">
                <h1 className="break-words">{t.hero.name}</h1>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-3 sm:space-y-4"
            >
              <HighlightText
                className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-secondary font-semibold leading-tight"
                text={t.hero.title}
              />
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
                {t.hero.description}
              </p>
            </motion.div>

            <div className="max-w-lg mx-auto lg:mx-0">
              <TypingAnimation className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t.hero.me}
              </TypingAnimation>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start"
            >
              <animated.button
                style={{ opacity }}
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect"
                onMouseEnter={() => {
                  opacity.start(1);
                  setIsHovering(true);
                }}
                onMouseLeave={() => {
                  opacity.start(0.7);
                  setIsHovering(false);
                }}
              >
                {t.hero.getInTouch}
              </animated.button>

              <a
                href="/walid's CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <InteractiveHoverButton className="w-full sm:w-auto border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  {t.hero.downloadResume}
                </InteractiveHoverButton>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Orbiting Circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative flex items-center justify-center h-64 sm:h-80 lg:h-96 order-first lg:order-last"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-float">
                  <span className="text-lg sm:text-2xl font-bold">AI</span>
                </div>
              </div>

              {/* Orbiting tech logos */}
              <OrbitingCircles radius={60} duration={18} delay={0} className="sm:radius-80 lg:radius-100">
                <img
                  src="/kafka.png"
                  alt="Apache Kafka"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={60} duration={18} delay={6} className="sm:radius-80 lg:radius-100">
                <img
                  src="/optuna.png"
                  alt="Optuna"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={60} duration={18} delay={6} className="sm:radius-80 lg:radius-100">
                <img
                  src="/optuna.png"
                  alt="Optuna"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={60} duration={18} delay={9} className="sm:radius-80 lg:radius-100">
                <img
                  src="/python.png"
                  alt="Python"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={60} duration={18} delay={12} className="sm:radius-80 lg:radius-100">
                <img
                  src="/pytorch-icon-size_256.png"
                  alt="PyTorch"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={60} duration={18} delay={15} className="sm:radius-80 lg:radius-100">
                <img
                  src="/R.png"
                  alt="R"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={60} duration={18} delay={18} className="sm:radius-80 lg:radius-100">
                <img
                  src="/sql.png"
                  alt="SQL"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={60} duration={18} delay={21} className="sm:radius-80 lg:radius-100">
                <img
                  src="/Tensorflow.png"
                  alt="TensorFlow"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-16 sm:top-20 right-4 sm:right-20 w-2 h-2 bg-secondary rounded-full animate-float"
        style={{ animationDelay: '1s' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      />
      <motion.div
        className="absolute bottom-32 sm:bottom-40 left-4 sm:left-20 w-3 h-3 bg-primary rounded-full animate-float"
        style={{ animationDelay: '2s' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      />
    </section>
  );
};

export default Hero;