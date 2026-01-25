import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />
    </div>
  );
};

export default ParticleBackground;
