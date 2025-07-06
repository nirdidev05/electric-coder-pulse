
import { motion } from 'framer-motion';
import { useSpringValue, animated } from '@react-spring/web';

const About = () => {
  const scaleValue = useSpringValue(1, {
    config: { mass: 1, friction: 10, tension: 200 },
  });

  const techStack = [
    'Python', 'PyTorch', 'React', 'Tailwind CSS', 
    'GANs', 'NLP', 'Data Visualization', 'SQL', 'R'
  ];

  const languages = ['Arabic', 'French', 'English'];

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating intelligent solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <animated.div
              style={{ scale: scaleValue }}
              onMouseEnter={() => scaleValue.start(1.02)}
              onMouseLeave={() => scaleValue.start(1)}
              className="bg-background/50 p-8 rounded-2xl border border-border"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a final-year student at ESI (École Nationale Supérieure d'Informatique, Algeria), 
                I've built a strong foundation in AI and Data Science through both academic excellence 
                and competitive programming.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My vision is to create intelligent, responsible AI solutions for real-world applications 
                in North Africa and beyond, bridging the gap between cutting-edge technology and 
                practical implementation.
              </p>
            </animated.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-background/50 p-8 rounded-2xl border border-border"
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    className="bg-accent/20 text-accent px-4 py-2 rounded-full font-semibold"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-background/50 p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-center font-semibold hover:bg-primary/20 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">Specializations</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Deep Learning & Neural Networks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Generative AI & GANs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Data Science & Visualization
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
