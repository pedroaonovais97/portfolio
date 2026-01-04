import express from "express";
import dotenv from "dotenv";
import { Groq } from "groq-sdk";

dotenv.config();

const app = express();
const port = process.env.PORT || 8787;
const apiKey = process.env.GROQ_API_KEY;
const model = process.env.GROQ_MODEL || "llama-3.1-8b-instant";

app.use(express.json({ limit: "1mb" }));

const client = apiKey ? new Groq({ apiKey }) : null;

const systemPrompt = `
You are an AI assistant representing Pedro Novais, a backend engineer.
Goal: Respond to a hiring manager's description of their company and desired candidate.
Respond in a confident, clear, and professional tone, in first person, and be concise.
Do not invent facts. Use only the following true details:
- Backend engineer with Kotlin at Pleo working on APIs, Kafka, Redis, PostgreSQL, and backoffice systems.
- Strong .NET background and distributed systems experience.
- Experience with microservices, Kafka, Redis, MongoDB, Docker, CI/CD, monitoring, and performance optimization.
- Supports frontend when needed for internal tools.
- Uses Python for automation and exploring AI features.
Projects: Paies Travel (premium UI/UX), Choose and Chill (recommendations), Oddlify (AI predictions),
Padel Vision (AI match analysis).
Always end with a short, friendly invite to talk.
`;

app.post("/api/chat", async (req, res) => {
  if (!apiKey || !client) {
    return res.status(500).json({ error: "Missing GROQ_API_KEY." });
  }

  const { messages } = req.body ?? {};
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid payload." });
  }

  const safeMessages = messages
    .filter(
      (message) =>
        message &&
        typeof message.content === "string" &&
        (message.role === "user" || message.role === "assistant")
    )
    .map(({ role, content }) => ({ role, content }));

  try {
    const completion = await client.chat.completions.create({
      model,
      temperature: 0.4,
      max_tokens: 400,
      messages: [{ role: "system", content: systemPrompt.trim() }, ...safeMessages],
    });

    const message = completion.choices?.[0]?.message?.content?.trim();
    if (!message) {
      return res.status(500).json({ error: "No response from model." });
    }

    return res.json({ message });
  } catch (error) {
    console.error("Groq API error:", error);
    const message =
      process.env.NODE_ENV === "production"
        ? "Failed to reach Groq."
        : error?.message ?? "Failed to reach Groq.";
    return res.status(500).json({ error: message });
  }
});

app.listen(port, () => {
  console.log(`Groq API server listening on http://localhost:${port}`);
});
