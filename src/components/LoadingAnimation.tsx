import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Complete loading after 2.5 seconds
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 600);
      }, 300);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden"
        >
          {/* Subtle Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} />
          </div>

          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 107, 53, 0.08), transparent 70%)',
              filter: 'blur(40px)'
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 138, 101, 0.06), transparent 70%)',
              filter: 'blur(40px)'
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-12 px-8">
            {/* Logo Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative"
            >
              {/* Logo */}
              <motion.img 
                src="/full_logo.png" 
                alt="SKIZEN Logo" 
                className="h-20 md:h-28 lg:h-32 w-auto relative z-10 rounded-full"
                animate={{
                  filter: ['brightness(1)', 'brightness(1.05)', 'brightness(1)']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Subtle Shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 blur-2xl transform translate-y-8" />
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center space-y-2"
            >
              <motion.p 
                className="text-sm md:text-base text-gray-500 font-light tracking-wider uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                AI-Driven Digital Marketing
              </motion.p>
            </motion.div>

            {/* Modern Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-64 md:w-80 space-y-3"
            >
              {/* Progress Bar Container */}
              <div className="relative h-1 bg-gray-100 rounded-full overflow-hidden">
                {/* Progress Fill */}
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full"
                  style={{
                    width: `${progress}%`,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span className="font-light">Loading</span>
                <motion.span 
                  className="font-medium tabular-nums"
                  key={progress}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {progress}%
                </motion.span>
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex space-x-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-orange-500 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Corner Accent Lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-8 left-8 w-12 h-12"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500/40 to-transparent" />
            <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-orange-500/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute bottom-8 right-8 w-12 h-12"
          >
            <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-orange-500/40 to-transparent" />
            <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-orange-500/40 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;