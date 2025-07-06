
import { motion } from 'framer-motion';
import { useSpringValue, animated } from '@react-spring/web';
import { Github, Linkedin, Mail } from 'lucide-react';
import OrbitingCircles from './ui/orbiting-circles';

const Contact = () => {
  const formScale = useSpringValue(1, {
    config: { mass: 1, friction: 10, tension: 200 },
  });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "benboutawalid@gmail.com",
      href: "mailto:benboutawalid@gmail.com",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub", 
      value: "nirdidev05",
      href: "https://github.com/nirdidev05",
      color: "text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "benbouta-walid",
      href: "https://www.linkedin.com/in/benbouta-walid-416870291/",
      color: "text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative AI projects or discuss opportunities in data science
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Orbiting contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center h-96"
          >
            <div className="relative w-80 h-80">
              {/* Center element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-float"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-2xl font-bold">Connect</span>
                </motion.div>
              </div>

              {/* Orbiting contact methods */}
              {contactMethods.map((contact, index) => (
                <OrbitingCircles 
                  key={contact.label}
                  radius={100} 
                  duration={20} 
                  delay={index * 7}
                >
                  <motion.a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`w-full h-full flex items-center justify-center ${contact.color} hover:scale-110 transition-all duration-300`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <contact.icon size={20} />
                  </motion.a>
                </OrbitingCircles>
              ))}
            </div>
          </motion.div>

          {/* Right side - Contact information and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <animated.div
              style={{ scale: formScale }}
              onMouseEnter={() => formScale.start(1.02)}
              onMouseLeave={() => formScale.start(1)}
              className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-border"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactMethods.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`p-3 rounded-full bg-background border border-border group-hover:border-primary/30 ${contact.color}`}>
                      <contact.icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">{contact.label}</div>
                      <div className="text-sm text-muted-foreground">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </animated.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20"
            >
              <h4 className="text-xl font-bold mb-4">Open to Opportunities</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  AI Engineering Positions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Collaborative Research Projects
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  Consulting & Freelance Work
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Speaking & Workshop Opportunities
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
