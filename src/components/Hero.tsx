
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen pt-20 lg:pt-0">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
           <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
>
  <p className="text-lg text-muted-foreground mb-2">{t.hero.greeting}</p>
  <RollingText
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight gradient-text"
    text={t.hero.name}
  />
</motion.div>

           <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="space-y-2"
>
  <HighlightText
    className="text-xl sm:text-2xl lg:text-3xl text-secondary font-semibold"
    text={t.hero.title}
  />
  <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
    {t.hero.description}
  </p>
</motion.div>

            <TypingAnimation className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
              {t.hero.me}
            </TypingAnimation>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
            >
              <animated.button
                style={{ opacity }}
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 glow-effect w-full sm:w-auto"
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
                href="/walid's%20CV%20(1).pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <InteractiveHoverButton className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto">
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
            className="relative flex items-center justify-center h-64 sm:h-80 lg:h-96 order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-float">
                  <span className="text-lg sm:text-2xl font-bold">AI</span>
                </div>
              </div>

              {/* Orbiting tech logos */}
              <OrbitingCircles radius={80} duration={18} delay={0}>
                <img
                  src="/kafka.png"
                  alt="Apache Kafka"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
             <OrbitingCircles radius={80} duration={18} delay={6}>
                <img
                  src="/optuna.png"
                  alt="Optuna"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={80} duration={18} delay={9}>
                <img
                  src="/python.png"
                  alt="Python"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={80} duration={18} delay={12}>
                <img
                  src="/pytorch-icon-size_256.png"
                  alt="PyTorch"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={80} duration={18} delay={15}>
                <img
                  src="/R.png"
                  alt="R"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={80} duration={18} delay={18}>
                <img
                  src="/sql.png"
                  alt="SQL"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
              <OrbitingCircles radius={80} duration={18} delay={21}>
                <img
                  src="/Tensorflow.png"
                  alt="TensorFlow"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  draggable={false}
                />
              </OrbitingCircles>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-4 sm:right-20 w-2 h-2 bg-secondary rounded-full animate-float hidden sm:block"
        style={{ animationDelay: '1s' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      />
      <motion.div
        className="absolute bottom-40 left-4 sm:left-20 w-3 h-3 bg-primary rounded-full animate-float hidden sm:block"
        style={{ animationDelay: '2s' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      />
    </section>
  );
};

export default Hero;
