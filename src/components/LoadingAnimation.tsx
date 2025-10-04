import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simple 2.5 second loading with just logo
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-skizen-black to-gray-800 flex items-center justify-center"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-skizen-accent/10 via-orange-500/5 to-red-500/10"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(255, 107, 53, 0.1), rgba(255, 138, 101, 0.05), rgba(255, 69, 0, 0.1))",
                  "linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 138, 101, 0.1), rgba(255, 69, 0, 0.15))",
                  "linear-gradient(225deg, rgba(255, 107, 53, 0.1), rgba(255, 138, 101, 0.05), rgba(255, 69, 0, 0.1))",
                  "linear-gradient(315deg, rgba(255, 107, 53, 0.15), rgba(255, 138, 101, 0.1), rgba(255, 69, 0, 0.15))",
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Floating Particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-skizen-accent/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Main Content - Just Logo */}
          <div className="relative z-10 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="relative"
            >
              {/* Logo */}
              <img 
                src="/full_logo.png" 
                alt="SKIZEN Logo" 
                className="h-24 md:h-32 lg:h-40 w-auto"
              />
              
              {/* Animated Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-skizen-accent/30 to-orange-500/30 rounded-lg blur-xl"
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatDelay: 0.5
                }}
              />
              
              {/* Pulsing Ring */}
              <motion.div
                className="absolute inset-0 border-2 border-skizen-accent/50 rounded-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
