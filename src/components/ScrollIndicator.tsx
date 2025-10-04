import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-skizen-accent via-orange-500 to-red-500 z-50 origin-left"
      style={{
        scaleX: scrollProgress,
        transformOrigin: '0%',
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
      // 🎛️ FASTER SCROLL INDICATOR - More responsive to match faster scrolling:
      transition={{ duration: 0.02, ease: 'easeOut' }} // Reduced from 0.05 to 0.02
    />
  );
};

export default ScrollIndicator;