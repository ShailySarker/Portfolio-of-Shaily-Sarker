import { motion } from 'framer-motion';

interface RotatingDashedCircleProps {
  size?: number;
  strokeWidth?: number;
  dashLength?: number;
  gapLength?: number;
  duration?: number;
  className?: string;
}

const RotatingDashedCircle = ({
  size = 320,
  strokeWidth = 1,
  dashLength = 10,
  gapLength = 10,
  duration = 30,
  className = '',
}: RotatingDashedCircleProps) => {
  const radius = (size - strokeWidth) / 2;

  return (
    <div
      className={`absolute flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.svg
        width={size}
        height={size}
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--primary) / 0.6)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${dashLength} ${gapLength}`}
          className="opacity-100"
        />
      </motion.svg>
      
      {/* Secondary counter-rotating dashed circle */}
      <motion.svg
        width={size + 40}
        height={size + 40}
        className="absolute"
        animate={{ rotate: -360 }}
        transition={{ duration: duration * 1.5, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx={(size + 40) / 2}
          cy={(size + 40) / 2}
          r={(size + 40 - strokeWidth) / 2}
          fill="none"
          stroke="hsl(var(--accent) / 0.5)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${dashLength * 0.8} ${gapLength * 1.5}`}
        />
      </motion.svg>
      
      {/* Soft glow behind the circle */}
      <div 
        className="absolute rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl -z-10"
        style={{ width: size * 0.9, height: size * 0.9 }}
      />
    </div>
  );
};

export default RotatingDashedCircle;
