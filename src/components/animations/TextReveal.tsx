import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(' ');

  return (
    <div className={`overflow-hidden ${className}`}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-2"
          initial={{ 
            opacity: 0, 
            y: 50,
            filter: 'blur(10px)',
            scale: 0.8
          }}
          animate={isVisible ? { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)',
            scale: 1,
            transition: {
              duration: duration,
              delay: wordIndex * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          } : {}}
          whileHover={{
            scale: 1.05,
            color: '#FF6B35',
            transition: { duration: 0.2 }
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default TextReveal;