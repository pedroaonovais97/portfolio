import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import AiChat, { type ChatContent } from "./AiChat";
import Button from "./Button";

type ChatWidgetProps = {
  chat: ChatContent & {
    triggerLabel: string;
    closeLabel: string;
    headerLabel?: string;
  };
  variant?: "icon" | "button";
  buttonClassName?: string;
  triggerClassName?: string;
};

const ChatWidget = ({
  chat,
  variant = "icon",
  buttonClassName = "",
  triggerClassName = "",
}: ChatWidgetProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <>
      {variant === "button" ? (
        <Button
          type="button"
          onClick={() => setOpen(true)}
          variant="ghost"
          size="sm"
          className={buttonClassName}
        >
          <FiMessageSquare />
          {chat.headerLabel ?? chat.triggerLabel}
        </Button>
      ) : (
        <div className="group relative">
          <div className="pointer-events-none absolute right-14 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white/10 bg-black/60 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/80 opacity-0 shadow-neon transition group-hover:opacity-100 md:block">
            {chat.headerLabel ?? chat.triggerLabel}
          </div>
          <button
            type="button"
            aria-label={chat.triggerLabel}
            onClick={() => setOpen(true)}
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:border-accent/50 hover:text-white ${triggerClassName}`}
          >
            <FiMessageSquare />
          </button>
        </div>
      )}
      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed bottom-6 right-6 z-50 w-[min(520px,calc(100vw-3rem))]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              data-lenis-prevent
            >
              <div className="relative">
                <button
                  type="button"
                  aria-label={chat.closeLabel}
                  onClick={() => setOpen(false)}
                  className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 transition hover:border-accent/50 hover:text-white"
                >
                  <FiX />
                </button>
                <AiChat chat={chat} />
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
