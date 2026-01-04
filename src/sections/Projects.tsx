import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { portfolio } from "../content/portfolio";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const Projects = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="projects" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow={portfolio.projects.eyebrow}
          title={portfolio.projects.title}
          subtitle={portfolio.projects.subtitle}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.projects.items.map((project) => (
            <motion.div
              key={project.name}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card tilt>
                <div className="flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                      <p className="mt-2 text-sm text-muted">{project.description}</p>
                    </div>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                      rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:text-white"
                        aria-label={`Open ${project.name}`}
                      >
                        <FiExternalLink />
                      </a>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  {project.details.length ? (
                    <details className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                      <summary className="cursor-pointer text-xs uppercase tracking-[0.2em] text-white/80">
                        {portfolio.projects.detailsLabel}
                      </summary>
                      <ul className="mt-3 space-y-2">
                        {project.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
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

export default Projects;
