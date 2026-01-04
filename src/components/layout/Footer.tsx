import Container from "./Container";
import { portfolio } from "../../content/portfolio";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 text-sm text-white/60 md:flex-row md:items-center">
          <p>
            {portfolio.name} (c) {new Date().getFullYear()} - {portfolio.footer.note}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {portfolio.socials.map((social) => (
              <a
                key={social.id}
                className="hover:text-white"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.label}
              </a>
            ))}
            <a className="hover:text-white" href={`mailto:${portfolio.links.email}`}>
              {portfolio.footer.emailLabel}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
