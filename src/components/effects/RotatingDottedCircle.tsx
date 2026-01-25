import { motion } from 'framer-motion';

interface RotatingDottedCircleProps {
  size?: number;
  dotCount?: number;
  duration?: number;
  className?: string;
}

const RotatingDottedCircle = ({
  size = 320,
  dotCount = 24,
  duration = 20,
  className = '',
}: RotatingDottedCircleProps) => {
  const dots = Array.from({ length: dotCount }, (_, i) => {
    const angle = (i / dotCount) * 360;
    const x = Math.cos((angle * Math.PI) / 180) * (size / 2 - 8);
    const y = Math.sin((angle * Math.PI) / 180) * (size / 2 - 8);
    return { x, y, delay: i * 0.05 };
  });

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(${dot.x}px, ${dot.y}px) translate(-50%, -50%)`,
          }}
          initial={{ opacity: 0.3, scale: 0.5 }}
          animate={{ 
            opacity: [0.3, 1, 0.3], 
            scale: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: dot.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  );
};

export default RotatingDottedCircle;
