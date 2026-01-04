import { useEffect } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const CursorGlow = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove);

    return () => window.removeEventListener("pointermove", handleMove);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return <div className="cursor-glow" aria-hidden="true" />;
};

export default CursorGlow;
