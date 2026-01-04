import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
      {children}
    </span>
  );
};

export default Badge;
