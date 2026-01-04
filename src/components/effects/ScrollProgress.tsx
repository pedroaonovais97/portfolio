import { motion, useScroll, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const ScrollProgress = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.2,
  });

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-accent via-neon to-accent2 shadow-neon"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
