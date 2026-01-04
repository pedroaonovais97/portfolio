import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const particles = [
  { size: 240, top: "10%", left: "15%", color: "bg-accent/10", delay: "0s" },
  { size: 180, top: "25%", left: "70%", color: "bg-neon/10", delay: "2s" },
  { size: 260, top: "65%", left: "10%", color: "bg-accent2/10", delay: "1s" },
  { size: 200, top: "70%", left: "75%", color: "bg-accent/10", delay: "3s" },
];

const Particles = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {particles.map((particle, index) => (
        <span
          key={`${particle.top}-${index}`}
          className={`absolute rounded-full blur-3xl ${particle.color} animate-float`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: particle.top,
            left: particle.left,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
