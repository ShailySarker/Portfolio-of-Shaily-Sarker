import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Smoother spring configuration for that "liquid" feel
  const springConfig = { damping: 30, stiffness: 120, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [mouseX, mouseY, isVisible]);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"], .group');
    
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [handleMouseMove]);

  // Dynamic values for styles
  const size = isHovering ? 80 : 25;
  const glowSize = isHovering ? 400 : 300;
  const opacity = isVisible ? 1 : 0;

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        {/* Ambient Glow Trail */}
        <motion.div
            className="absolute hidden lg:block"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            <motion.div
                animate={{
                    width: glowSize,
                    height: glowSize,
                    opacity: isVisible ? 0.3 : 0,
                }}
                className="rounded-full"
                style={{
                    background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                }}
            />
        </motion.div>

        {/* Liquid Main Cursor */}
        <motion.div
            className="absolute hidden lg:block"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            <motion.div
                animate={{
                    width: size,
                    height: size,
                    opacity: opacity,
                    scale: isHovering ? 1.2 : 1,
                }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className="relative flex items-center justify-center rounded-full border border-primary/30 bg-primary/5 backdrop-blur-[2px]"
            >
                {/* Center point */}
                <motion.div 
                    animate={{
                        scale: isHovering ? 0 : 1,
                        opacity: isHovering ? 0 : 1
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
                />
                
                {/* Hover ring animation */}
                {isHovering && (
                    <motion.div
                        layoutId="cursorHover"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 rounded-full border-2 border-primary shadow-[0_0_15px_hsl(var(--primary)/0.5)]"
                    />
                )}
            </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
          a, button, [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CursorGlow;
