import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const BackgroundGrid = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const slowDrift = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fastDrift = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.3]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-animated"
        style={prefersReducedMotion ? undefined : { y: slowDrift }}
      />
      <motion.div
        className="absolute inset-0 bg-grid"
        style={
          prefersReducedMotion
            ? { opacity: 0.3 }
            : { y: fastDrift, opacity: gridOpacity }
        }
      />
      <div className="absolute inset-0 noise-texture" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40"
        style={prefersReducedMotion ? undefined : { opacity: overlayOpacity }}
      />
    </div>
  );
};

export default BackgroundGrid;
