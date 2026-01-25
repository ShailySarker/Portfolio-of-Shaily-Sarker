import { ReactNode, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const GlowCard = ({ children, className, containerClassName }: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("group relative", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${x}px ${y}px,
              hsl(var(--primary) / 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />

      {/* Card content */}
      <div
        className={cn(
          "relative rounded-2xl border border-border bg-card p-6 transition-colors duration-300",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
