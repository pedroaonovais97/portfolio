import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { portfolio } from "../content/portfolio";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const About = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="about" className="py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-[0.6fr_1fr]">
          <SectionTitle
            eyebrow={portfolio.about.eyebrow}
            title={portfolio.about.title}
            subtitle={portfolio.about.subtitle}
          />
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="space-y-4">
              <p className="text-base text-white/80">{portfolio.about.summary}</p>
              <ul className="space-y-3 text-sm text-muted">
                {portfolio.about.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
