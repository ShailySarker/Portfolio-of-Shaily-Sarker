import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MovingBorderButtonProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
  download?: boolean;
}

const MovingBorderButton = ({
  children,
  className,
  containerClassName,
  borderClassName,
  duration = 3000,
  onClick,
  as = 'button',
  href,
  download,
}: MovingBorderButtonProps) => {
  const Component = as;

  return (
    <Component
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        containerClassName
      )}
      onClick={onClick}
      {...(as === 'a' ? { href, download, target: href?.startsWith('http') ? '_blank' : undefined, rel: href?.startsWith('http') ? 'noopener noreferrer' : undefined } : {})}
    >
      <motion.span
        className={cn(
          "absolute inset-[-1000%]",
          borderClassName
        )}
        style={{
          background: `conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))`,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-background px-6 py-2 text-sm font-medium backdrop-blur-3xl transition-all hover:bg-secondary/50",
          className
        )}
      >
        {children}
      </span>
    </Component>
  );
};

export default MovingBorderButton;
