import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type CardProps = {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
};

const Card = ({ children, className = "", tilt = false }: CardProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 16, mass: 0.2 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 16, mass: 0.2 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!tilt || prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    rotateX.set((-y / rect.height) * 8);
    rotateY.set((x / rect.width) * 8);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      className={`glass-panel neon-border group relative overflow-hidden rounded-3xl border-white/15 p-6 transition-shadow duration-300 hover:border-accent/40 hover:shadow-neon-strong ${className}`}
      style={
        tilt && !prefersReducedMotion
          ? {
              rotateX: springX,
              rotateY: springY,
              transformStyle: "preserve-3d",
              transformPerspective: 1000,
            }
          : undefined
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.div>
  );
};

export default Card;
