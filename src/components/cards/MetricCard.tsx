import { motion } from 'framer-motion';

interface Props {
  value: string;
  label: string;
  color: string;
  index: number;
}

const MetricCard: React.FC<Props> = ({ value, label, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2 }}
    className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className={`text-4xl font-bold ${color} font-mono`}>
      {value}
    </div>
    <div className="text-muted-foreground font-medium mt-2">
      {label}
    </div>
  </motion.div>
);

export default MetricCard;
