
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center space-x-8">
            <motion.div
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.1 }}
            >
              BENBOUTA.AI
            </motion.div>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <span>Final-year ESI Student</span>
            <span>•</span>
            <span>AI Engineer</span>
            <span>•</span>
            <span>Competition Winner</span>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <span>© 2024 BENBOUTA Walid</span>
            <span>•</span>
            <span>Built with React & Tailwind CSS</span>
          </div>

          <p className="text-xs text-muted-foreground/60 max-w-md mx-auto">
            Creating intelligent, responsible AI solutions for real-world applications in North Africa & beyond
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
