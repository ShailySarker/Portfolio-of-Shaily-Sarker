import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    setIsVisible(true);
  }, [cursorX, cursorY]);

  const handleMouseEnterInteractive = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeaveInteractive = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', hideCursor);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', hideCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, [handleMouseMove, handleMouseEnterInteractive, handleMouseLeaveInteractive]);

  // Update interactive element listeners when DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [handleMouseEnterInteractive, handleMouseLeaveInteractive]);

  return (
    <>
      {/* Outer large glow - ambient effect */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{ 
            opacity: isVisible ? 0.4 : 0,
            scale: isHovering ? 1.5 : 1,
            width: isHovering ? 400 : 300,
            height: isHovering ? 400 : 300,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--accent) / 0.08) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Middle gradient ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{ 
            opacity: isVisible ? 0.6 : 0,
            scale: isHovering ? 1.8 : 1,
            width: isHovering ? 80 : 50,
            height: isHovering ? 80 : 50,
            rotate: 360,
          }}
          transition={{ 
            opacity: { duration: 0.2 },
            scale: { duration: 0.3, ease: 'easeOut' },
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' }
          }}
          style={{
            background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
            filter: 'blur(12px)',
          }}
        />
      </motion.div>

      {/* Inner core - soft glow instead of dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{ 
            opacity: isVisible ? 0.9 : 0,
            scale: isHovering ? 1.5 : 1,
            width: isHovering ? 24 : 16,
            height: isHovering ? 24 : 16,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.5) 60%, transparent 100%)',
            filter: 'blur(4px)',
          }}
        />
      </motion.div>

      {/* Trailing particles effect */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{ 
            opacity: isVisible ? 0.3 : 0,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            opacity: { duration: 0.3 },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            width: 120,
            height: 120,
            background: 'radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Hide default cursor on desktop */}
      <style>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CursorGlow;
