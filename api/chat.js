import { Groq } from "groq-sdk";

const model = process.env.GROQ_MODEL || "llama-3.1-70b-versatile";

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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!process.env.GROQ_API_KEY) {
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
    const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
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
    return res.status(500).json({ error: "Failed to reach Groq." });
  }
}
