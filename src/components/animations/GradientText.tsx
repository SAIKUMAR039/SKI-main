import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
  gradient?: string;
  animate?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({ 
  text, 
  className = '',
  gradient = 'from-skizen-accent via-orange-500 to-red-500',
  animate = true
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${animate ? 'bg-300%' : ''} ${className}`}
      animate={animate ? {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      } : {}}
      transition={animate ? {
        duration: 3,
        repeat: Infinity,
        ease: 'linear'
      } : {}}
      whileHover={{
        scale: 1.05,
        filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.5))',
        transition: { duration: 0.3 }
      }}
      style={animate ? {
        backgroundSize: '300% 300%'
      } : {}}
    >
      {text}
    </motion.div>
  );
};

export default GradientText;