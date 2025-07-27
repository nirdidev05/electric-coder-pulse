import { motion } from 'framer-motion';

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
  >
    <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center items-start p-1">
      <div className="w-1 h-3 bg-[--primary] rounded-full" />
    </div>
  </motion.div>
);

export default ScrollIndicator;
