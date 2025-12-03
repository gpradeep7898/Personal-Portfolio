import { motion } from 'framer-motion';

const SectionDivider: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="section-divider"
    />
  );
};

export default SectionDivider;

