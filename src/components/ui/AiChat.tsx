import type { KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import Button from "./Button";
import Card from "./Card";

export type ChatContent = {
  title: string;
  description: string;
  placeholder: string;
  buttonLabel: string;
  clearLabel: string;
  promptsLabel: string;
  disclaimer: string;
  introMessage: string;
  prompts: readonly string[];
  response: {
    intro: string;
    outro: string;
    fallback: string;
    domains: ReadonlyArray<{ id: string; line: string }>;
    points: ReadonlyArray<{ id: string; line: string }>;
  };
};

export type AiChatProps = {
  chat: ChatContent;
};

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type HistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

const AiChat = ({ chat }: AiChatProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const displayMessages = useMemo<Message[]>(() => {
    const intro: Message = {
      id: "intro",
      role: "assistant",
      content: chat.introMessage,
    };
    const historyMessages = history.map((message, index) => ({
      id: `${message.role}-${index}`,
      ...message,
    }));
    return [intro, ...historyMessages];
  }, [chat.introMessage, history]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [displayMessages, isLoading]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const nextHistory: HistoryMessage[] = [
      ...history,
      { role: "user", content: trimmed },
    ];
    setHistory(nextHistory);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextHistory }),
      });

      if (!response.ok) {
        throw new Error("Request failed.");
      }

      const data = await response.json();
      if (!data?.message) {
        throw new Error("No response.");
      }

      setHistory((prev) => [...prev, { role: "assistant", content: data.message }]);
    } catch (err) {
      setError("AI is unavailable right now. Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">{chat.title}</p>
          {chat.description ? (
            <p className="text-sm text-white/80">{chat.description}</p>
          ) : null}
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <div
            ref={scrollRef}
            className="max-h-[280px] space-y-3 overflow-auto pr-2 text-sm text-white/80"
            data-lenis-prevent
          >
            {displayMessages.map((message) => (
              <div
                key={message.id}
                className={`rounded-2xl border px-4 py-3 ${
                  message.role === "assistant"
                    ? "border-white/10 bg-white/5 text-white/90"
                    : "border-accent/40 bg-accent/10 text-white"
                }`}
              >
                <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/50">
                  <span>{message.role === "assistant" ? "AI" : "You"}</span>
                </div>
                <p className="whitespace-pre-line">{message.content}</p>
              </div>
            ))}
            {isLoading ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Thinking...
                </p>
              </div>
            ) : null}
          </div>
          <div className="mt-4 space-y-3">
            <textarea
              className="min-h-[110px] w-full resize-none rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/80 outline-none transition focus:border-accent/60"
              placeholder={chat.placeholder}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="flex flex-wrap items-center gap-3">
              <Button type="button" onClick={handleSend}>
                {chat.buttonLabel}
              </Button>
              <button
                type="button"
                className="text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white"
                onClick={() => {
                  setHistory([]);
                  setInput("");
                  setError("");
                }}
              >
                {chat.clearLabel}
              </button>
            </div>
            {error ? <p className="text-xs text-red-200">{error}</p> : null}
          </div>
        </div>
        <details className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          <summary className="cursor-pointer text-xs uppercase tracking-[0.3em] text-white/70">
            {chat.promptsLabel}
          </summary>
          <div className="mt-3 flex flex-wrap gap-2">
            {chat.prompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-white/70 transition hover:border-accent/50 hover:text-white"
                onClick={() => setInput(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/40">{chat.disclaimer}</p>
        </details>
      </Card>
    </motion.div>
  );
};

export default AiChat;
