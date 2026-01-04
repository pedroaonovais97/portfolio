import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type CommandAction = {
  id: string;
  label: string;
  description: string;
  onSelect: () => void;
};

type CommandPaletteProps = {
  actions: CommandAction[];
  title: string;
  closeLabel: string;
  confirmLabel: string;
};

const CommandPalette = ({ actions, title, closeLabel, confirmLabel }: CommandPaletteProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const panelAnimation = useMemo(
    () =>
      prefersReducedMotion
        ? {}
        : {
            initial: { opacity: 0, y: -20, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: -10, scale: 0.98 },
            transition: { duration: 0.2, ease: "easeOut" },
          },
    [prefersReducedMotion]
  );

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-6 py-24 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            {...panelAnimation}
            className="glass-panel neon-border w-full max-w-xl rounded-3xl p-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.4em] text-accent">{title}</p>
              <button
                type="button"
                className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {closeLabel}
              </button>
            </div>
            <div className="mt-6 grid gap-3">
              {actions.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  onClick={() => {
                    action.onSelect();
                    setOpen(false);
                  }}
                  className="flex w-full items-start justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-white/30"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{action.label}</p>
                    <p className="text-xs text-white/60">{action.description}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {confirmLabel}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default CommandPalette;
