import { FiDownload } from "react-icons/fi";
import Container from "./Container";
import Button from "../ui/Button";
import { portfolio } from "../../content/portfolio";
import { useActiveSection } from "../../hooks/useActiveSection";

const Navbar = () => {
  const sectionIds = portfolio.navigation.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="fixed left-0 right-0 top-0 z-40">
      <Container>
        <div className="mt-4 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">
          <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-white">
            {portfolio.name}
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {portfolio.navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xs uppercase tracking-[0.3em] transition-colors ${
                  activeSection === item.id ? "text-accent" : "text-white/70 hover:text-white"
                }`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button
              href="/PedroNovaisCV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              variant="ghost"
              className="hidden md:inline-flex"
            >
              <FiDownload />
              {portfolio.hero.ctaPrimary}
            </Button>
          </div>
        </div>
        <nav className="mt-3 flex items-center gap-4 overflow-x-auto pb-2 md:hidden">
          {portfolio.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`whitespace-nowrap text-[11px] uppercase tracking-[0.3em] ${
                activeSection === item.id ? "text-accent" : "text-white/70"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
