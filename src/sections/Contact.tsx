import { useState } from "react";
import { FiCheck, FiCopy, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { portfolio } from "../content/portfolio";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(portfolio.links.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          eyebrow={portfolio.contact.eyebrow}
          title={portfolio.contact.title}
          subtitle={portfolio.contact.subtitle}
        />
        <Card className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-lg text-white">
              {portfolio.contact.lead} <span className="text-accent">{portfolio.links.email}</span>
            </p>
            <Button href={`mailto:${portfolio.links.email}`}>
              <FiMail />
              {portfolio.contact.ctaLabel}
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={handleCopy} variant="ghost" size="sm">
              {copied ? <FiCheck /> : <FiCopy />}
              {copied ? portfolio.contact.copiedLabel : portfolio.contact.copyLabel}
            </Button>
            {portfolio.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
              >
                {social.id === "linkedin" ? <FaLinkedinIn /> : <FaGithub />}
                {social.label}
              </a>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default Contact;
