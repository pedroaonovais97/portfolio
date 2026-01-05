import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
};

const SectionTitle = ({ eyebrow, title, subtitle }: SectionTitleProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className="flex flex-col gap-3"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <p className="text-[11px] uppercase tracking-[0.35em] text-accent md:text-xs md:tracking-[0.4em]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold text-gradient title-glow md:text-4xl">{title}</h2>
      <motion.div
        className="h-px w-24 bg-gradient-to-r from-accent via-neon to-accent2"
        initial={prefersReducedMotion ? false : { scaleX: 0 }}
        whileInView={prefersReducedMotion ? undefined : { scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        style={{ transformOrigin: "0% 50%" }}
      />
      {subtitle ? (
        <p className="max-w-2xl text-sm text-muted md:text-lg">{subtitle}</p>
      ) : null}
    </motion.div>
  );
};

export default SectionTitle;
