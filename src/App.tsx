import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackgroundGrid from "./components/effects/BackgroundGrid";
import CursorGlow from "./components/effects/CursorGlow";
import Particles from "./components/effects/Particles";
import ScrollProgress from "./components/effects/ScrollProgress";
import CommandPalette from "./components/ui/CommandPalette";
import ChatWidget from "./components/ui/ChatWidget";
import { portfolio } from "./content/portfolio";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import AiPython from "./sections/AiPython";
import Contact from "./sections/Contact";

const App = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      smoothTouch: false,
      eventsTarget: document.documentElement,
      wheelEventsTarget: document.documentElement,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  const actionHandlers: Record<string, () => void> = {
    email: () => {
      window.location.href = `mailto:${portfolio.links.email}`;
    },
    github: () => {
      window.open(portfolio.links.github, "_blank", "noopener,noreferrer");
    },
    linkedin: () => {
      window.open(portfolio.links.linkedin, "_blank", "noopener,noreferrer");
    },
    cv: () => {
      window.open("/PedroNovaisCV1.pdf", "_blank", "noopener,noreferrer");
    },
  };

  const commandActions = portfolio.commandPalette.actions.map((action) => ({
    ...action,
    onSelect: actionHandlers[action.id] ?? (() => {}),
  }));

  return (
    <div className="relative min-h-screen text-white">
      <BackgroundGrid />
      <Particles />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <div className="fixed right-6 top-24 z-50 md:top-28">
        <ChatWidget chat={portfolio.aiPython.chat} triggerClassName="chat-pulse" />
      </div>
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AiPython />
        <Contact />
      </main>
      <Footer />
      <CommandPalette
        actions={commandActions}
        title={portfolio.commandPalette.title}
        closeLabel={portfolio.commandPalette.closeLabel}
        confirmLabel={portfolio.commandPalette.confirmLabel}
      />
    </div>
  );
};

export default App;
