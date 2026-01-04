import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { portfolio } from "../content/portfolio";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const Experience = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="experience" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow={portfolio.experience.eyebrow}
          title={portfolio.experience.title}
          subtitle={portfolio.experience.subtitle}
        />
        <div className="relative ml-4 border-l border-white/15">
          {portfolio.experience.roles.map((item) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative pb-8 pl-8"
            >
              <span className="absolute -left-[9px] top-4 h-4 w-4 rounded-full bg-accent shadow-neon" />
              <Card>
                <div className="flex flex-col gap-2">
                  {item.period ? (
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{item.period}</p>
                  ) : null}
                  <h3 className="text-lg font-semibold text-white">
                    {item.company} - {item.role}
                  </h3>
                  {item.summary ? <p className="text-sm text-muted">{item.summary}</p> : null}
                  {item.bullets.length ? (
                    <ul className="mt-2 space-y-2 text-sm text-white/70">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent2" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
