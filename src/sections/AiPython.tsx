import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { portfolio } from "../content/portfolio";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const AiPython = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="ai" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow={portfolio.aiPython.eyebrow}
          title={portfolio.aiPython.title}
          subtitle={portfolio.aiPython.subtitle}
        />
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="space-y-4">
            <ul className="space-y-3 text-sm text-white/80">
              {portfolio.aiPython.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default AiPython;
