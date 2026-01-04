import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { portfolio } from "../content/portfolio";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const Skills = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerVariants = prefersReducedMotion
    ? undefined
    : {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12 } },
      };
  const itemVariants = prefersReducedMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 },
      };

  return (
    <section id="skills" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow={portfolio.skills.eyebrow}
          title={portfolio.skills.title}
          subtitle={portfolio.skills.subtitle}
        />
        <motion.div
          variants={containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {portfolio.skills.categories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
