import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SpotlightProps {
  className?: string;
  fill?: string;
}

const Spotlight = ({ className = "", fill = "white" }: SpotlightProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: `radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};

export default Spotlight;
