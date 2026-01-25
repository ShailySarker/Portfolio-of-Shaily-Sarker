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
  strokeWidth = 2,
  dashLength = 12,
  gapLength = 8,
  duration = 20,
  className = '',
}: RotatingDashedCircleProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

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
        <defs>
          <linearGradient id="dashedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#dashedGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${dashLength} ${gapLength}`}
          strokeLinecap="round"
          className="opacity-80"
        />
      </motion.svg>
      
      {/* Secondary counter-rotating dashed circle */}
      <motion.svg
        width={size + 50}
        height={size + 50}
        className="absolute"
        animate={{ rotate: -360 }}
        transition={{ duration: duration * 1.5, repeat: Infinity, ease: 'linear' }}
      >
        <circle
          cx={(size + 50) / 2}
          cy={(size + 50) / 2}
          r={(size + 50 - strokeWidth) / 2}
          fill="none"
          stroke="hsl(var(--accent) / 0.4)"
          strokeWidth={1.5}
          strokeDasharray={`${dashLength * 0.8} ${gapLength * 1.5}`}
          strokeLinecap="round"
        />
      </motion.svg>
      
      {/* Soft glow behind the circle */}
      <div 
        className="absolute rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl -z-10"
        style={{ width: size * 0.8, height: size * 0.8 }}
      />
    </div>
  );
};

export default RotatingDashedCircle;
