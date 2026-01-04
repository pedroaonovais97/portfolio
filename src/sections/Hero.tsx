import { motion, useScroll, useTransform } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import { portfolio } from "../content/portfolio";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 280], [0, 40]);
  const heroOpacity = useTransform(scrollY, [0, 280], [1, 0.7]);
  const ringY = useTransform(scrollY, [0, 280], [0, -30]);
  const ringScale = useTransform(scrollY, [0, 280], [1, 0.94]);
  const profileY = useTransform(scrollY, [0, 280], [0, 20]);
  const profileScale = useTransform(scrollY, [0, 280], [1, 0.96]);
  const radius = 150;
  const angleStep = (Math.PI * 2) / portfolio.hero.statusItems.length;

  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            style={prefersReducedMotion ? undefined : { y: parallaxY, opacity: heroOpacity }}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
              {portfolio.hero.kicker}
            </p>
            <div>
              <h1 className="text-4xl font-semibold text-gradient title-glow md:text-5xl">
                {portfolio.name}
              </h1>
              <p className="mt-4 text-lg text-accent md:text-xl">{portfolio.title}</p>
            </div>
            <p className="max-w-xl text-base text-muted md:text-lg">{portfolio.tagline}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/PedroNovaisCV1.pdf" target="_blank" rel="noopener noreferrer">
                <FiDownload />
                {portfolio.hero.ctaPrimary}
              </Button>
              <Button href="#contact" variant="ghost">
                <FiMail />
                {portfolio.hero.ctaSecondary}
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/70">
              {portfolio.socials.map((social) => (
                <a
                  key={social.id}
                  className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:text-white"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.id === "linkedin" ? <FaLinkedinIn /> : <FaGithub />}
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
          <div className="relative flex items-center justify-center">
            <motion.div
              className="relative h-[320px] w-[320px]"
              style={prefersReducedMotion ? undefined : { y: ringY, scale: ringScale }}
              animate={prefersReducedMotion ? undefined : { rotate: 360 }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 30, ease: "linear", repeat: Infinity }
              }
            >
              {portfolio.hero.statusItems.map((item, index) => {
                const angle = index * angleStep;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={item}
                    className="absolute left-1/2 top-1/2"
                    style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                  >
                    <motion.div
                      className="glass-panel neon-border rounded-2xl px-4 py-2 text-center text-xs uppercase tracking-[0.2em] text-white/80"
                      animate={prefersReducedMotion ? undefined : { rotate: -360 }}
                      transition={
                        prefersReducedMotion
                          ? undefined
                          : { duration: 30, ease: "linear", repeat: Infinity }
                      }
                    >
                      {item}
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
            <motion.div
              className="absolute flex h-[200px] w-[200px] items-center justify-center rounded-full border border-white/20 bg-white/5 p-3 shadow-neon"
              style={prefersReducedMotion ? undefined : { y: profileY, scale: profileScale }}
            >
              <div className="h-full w-full overflow-hidden rounded-full">
                <img
                  src="/profile.jpg"
                  alt={portfolio.hero.profileAlt}
                  className="h-full w-full object-cover object-[50%_15%]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
