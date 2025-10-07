import React, { useState, useEffect, useRef } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);
  const scrollYRef = useRef(0);
  const prevBodyStylesRef = useRef<{ overflow: string; position: string; top: string; width: string }>({ overflow: '', position: '', top: '', width: '' });
  const prevHtmlOverscrollRef = useRef<string>('');
  // keep handler refs to remove later
  const wheelHandlerRef = useRef<(e: Event) => void>();
  const touchHandlerRef = useRef<(e: Event) => void>();
  const keyHandlerRef = useRef<(e: KeyboardEvent) => void>();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check if mobile
    setIsMobile(window.innerWidth < 768);
  }, []);
  
  useEffect(() => {
    // Lock scroll while loading (robust)
    scrollYRef.current = window.scrollY || 0;
    prevBodyStylesRef.current = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };
    prevHtmlOverscrollRef.current = (document.documentElement.style as any).overscrollBehavior || '';

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = '100%';
    (document.documentElement.style as any).overscrollBehavior = 'none';

    wheelHandlerRef.current = (e: Event) => { e.preventDefault(); };
    touchHandlerRef.current = (e: Event) => { e.preventDefault(); };
    keyHandlerRef.current = (e: KeyboardEvent) => {
      const keys = ['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '];
      if (keys.includes(e.key)) e.preventDefault();
    };
    window.addEventListener('wheel', wheelHandlerRef.current, { passive: false });
    window.addEventListener('touchmove', touchHandlerRef.current, { passive: false });
    window.addEventListener('keydown', keyHandlerRef.current as any, { passive: false } as any);

    // Fallback in case 'ended' doesn't fire
    fallbackTimerRef.current = window.setTimeout(() => {
      finish();
    }, 5200);

    return () => {
      // Restore scroll lock
      document.body.style.overflow = prevBodyStylesRef.current.overflow;
      document.body.style.position = prevBodyStylesRef.current.position;
      document.body.style.top = prevBodyStylesRef.current.top;
      document.body.style.width = prevBodyStylesRef.current.width;
      (document.documentElement.style as any).overscrollBehavior = prevHtmlOverscrollRef.current;
      window.scrollTo(0, scrollYRef.current);
      if (wheelHandlerRef.current) window.removeEventListener('wheel', wheelHandlerRef.current as any);
      if (touchHandlerRef.current) window.removeEventListener('touchmove', touchHandlerRef.current as any);
      if (keyHandlerRef.current) window.removeEventListener('keydown', keyHandlerRef.current as any);
      if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    };
  }, []);

  const restoreLock = () => {
    // Restore scroll lock immediately
    document.body.style.overflow = prevBodyStylesRef.current.overflow;
    document.body.style.position = prevBodyStylesRef.current.position;
    document.body.style.top = prevBodyStylesRef.current.top;
    document.body.style.width = prevBodyStylesRef.current.width;
    (document.documentElement.style as any).overscrollBehavior = prevHtmlOverscrollRef.current;
    window.scrollTo(0, scrollYRef.current);
    if (wheelHandlerRef.current) window.removeEventListener('wheel', wheelHandlerRef.current as any);
    if (touchHandlerRef.current) window.removeEventListener('touchmove', touchHandlerRef.current as any);
    if (keyHandlerRef.current) window.removeEventListener('keydown', keyHandlerRef.current as any);
    if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
  };

  const finish = () => {
    if (isComplete) return;
    restoreLock();
    setIsComplete(true);
    // small delay to allow fade-out CSS transitions if any
    setTimeout(() => onComplete(), 200);
  };

  const handleEnded = () => {
    if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    finish();
  };

  return (
    <>
      {!isComplete && (
        <div 
          className="fixed inset-0 z-50 bg-black touch-none overscroll-none"
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/media/intro.mp4"
            poster="/media/intro_poster.jpg"
            preload="auto"
            autoPlay
            muted
            playsInline
            onEnded={handleEnded}
          />
        </div>
      )}
    </>
  );
};

export default LoadingAnimation;