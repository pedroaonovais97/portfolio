import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
  className?: string;
};

const Button = ({
  children,
  href,
  target,
  rel,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 18, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 160, damping: 18, mass: 0.2 });

  const baseClass = `btn-base ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${
    size === "sm" ? "text-xs px-4 py-2" : "text-sm px-6 py-3"
  } ${className}`;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const targetElement = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - targetElement.left - targetElement.width / 2;
    const offsetY = event.clientY - targetElement.top - targetElement.height / 2;
    x.set(offsetX * 0.15);
    y.set(offsetY * 0.15);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="inline-flex"
      style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {href ? (
        <a
          className={baseClass}
          href={href}
          target={target}
          rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
          onClick={onClick}
        >
          <span className="btn-shine" aria-hidden="true" />
          <span className="relative z-10">{children}</span>
        </a>
      ) : (
        <button className={baseClass} type={type} onClick={onClick}>
          <span className="btn-shine" aria-hidden="true" />
          <span className="relative z-10">{children}</span>
        </button>
      )}
    </motion.div>
  );
};

export default Button;
