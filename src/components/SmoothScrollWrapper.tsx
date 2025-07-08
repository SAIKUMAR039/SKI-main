import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

interface SmoothScrollWrapperProps {
  children: ReactNode;
  enabled?: boolean;
  factor?: number;
  ease?: number;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({
  children,
  enabled = true,
  factor = 1,
  ease = 0.08,
}) => {
  const scrollRef = useSmoothScroll({ factor, ease, enabled });

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScrollWrapper;