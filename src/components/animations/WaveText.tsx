import React from 'react';
import { motion } from 'framer-motion';

interface WaveTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const WaveText: React.FC<WaveTextProps> = ({
  text,
  className = '',
  delay = 0,
}) => {
  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`flex ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block"
          whileHover={{
            y: -10,
            color: '#FF6B35',
            transition: { duration: 0.2 }
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WaveText;