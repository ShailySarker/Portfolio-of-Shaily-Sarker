import React, { ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MovingBorderButtonProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  borderRadius?: string;
  as?: any;
  [key: string]: any;
}

export function MovingBorder({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) {
  const pathRef = useRef<any>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x || 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y || 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

const MovingBorderButton = ({
  children,
  as: Component = "button",
  containerClassName,
  className,
  borderClassName,
  duration = 2000,
  borderRadius = "1.75rem",
  borderGlowColor,
  ...otherProps
}: MovingBorderButtonProps) => {
  return (
    <Component
      className={cn(
        "bg-transparent relative h-12 w-fit p-[1px] overflow-hidden group/btn flex items-center justify-center",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30" ry="30">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8]",
              borderGlowColor ? "" : "bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]",
              borderClassName
            )}
            style={{
              background: borderGlowColor ? `radial-gradient(${borderGlowColor} 40%, transparent 60%)` : undefined
            }}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          // "relative bg-card border border-border backdrop-blur-xl text-foreground flex items-center justify-center w-full h-full text-sm font-bold antialiased px-10 transition-all duration-300 group-hover/btn:bg-primary/5 group-hover/btn:border-primary/20",
          // className
          "relative border border-border backdrop-blur-xl text-foreground flex items-center justify-center w-full h-full text-sm font-bold antialiased px-10 transition-all duration-300",
          // Fallback to bg-card if no background class is provided in className
          !className?.includes("bg-") && "bg-card hover:bg-primary/5",
          
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default MovingBorderButton;
