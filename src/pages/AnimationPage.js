import { motion } from 'framer-motion';

const AnimationPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5, ease: [0.6, 0.01, 0.05, 0.9] }}
    >
      {children}
    </motion.div>
  );
};
export default AnimationPage;
