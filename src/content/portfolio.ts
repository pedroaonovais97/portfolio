export const portfolio = {
  name: "Pedro Novais",
  title: "Software Engineer (Backend) - Kotlin @ Pleo | .NET | Python | AI-curious",
  tagline:
    "I build scalable backend systems with a focus on clarity and reliability. At Pleo I ship Kotlin services and backoffice tooling, while exploring frontend and AI to deliver end-to-end products.",
  links: {
    linkedin: "https://www.linkedin.com/in/pedro-novais-351925219/",
    github: "https://github.com/pedroaonovais97",
    email: "pedroaonovais97@gmail.com",
  },
  socials: [
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/pedro-novais-351925219/",
    },
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/pedroaonovais97",
    },
  ],
  navigation: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "ai", label: "AI" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    kicker: "Backend Engineer + Product-focused Builder",
    profileAlt: "Portrait of Pedro Novais",
    statusItems: [
      "Kotlin @ Pleo (since Sep)",
      ".NET / Microservices",
      "Frontend-curious (React + UI polish)",
      "Python + AI exploration",
    ],
    ctaPrimary: "Download CV",
    ctaSecondary: "Contact",
  },
  about: {
    eyebrow: "About",
    title: "Systems-first builder with an eye for product",
    subtitle: "A clear view of how I approach reliability, scale, and product clarity.",
    summary:
      "I design backend systems that stay fast and dependable under load. I care about clean boundaries, resilient APIs, and the way thoughtful UX decisions elevate the product experience.",
    bullets: [
      "Systems mindset: reliable APIs, scalability, and performance",
      "Strong backend foundation in .NET and distributed systems",
      "Product and UI curiosity with a focus on AI-driven automation",
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Backend depth with frontend curiosity",
    subtitle: "A toolkit tuned for resilient systems, fast iteration, and polished interfaces.",
    categories: [
      {
        title: "Backend",
        items: [
          "C#",
          ".NET",
          "ASP.NET",
          "Kotlin",
          "Microservices",
          "Async/Coroutines",
          "REST APIs",
        ],
      },
      {
        title: "Infrastructure",
        items: ["PostgreSQL", "SQL", "MongoDB", "Redis", "Kafka", "Docker", "CI/CD"],
      },
      {
        title: "Frontend",
        items: ["React", "TypeScript", "Tailwind", "Responsive UI", "Framer Motion"],
      },
      {
        title: "Python & AI",
        items: ["Python", "Automation", "AI/LLMs (interest)", "Prototyping"],
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Building reliable systems across teams",
    subtitle: "Focused on scalable backend services, integrations, and product-ready APIs.",
    roles: [
      {
        company: "Pleo",
        role: "Software Engineer (Backend)",
        period: "Sep 2025 - Present",
        summary:
          "Backend engineer delivering Kotlin services and backoffice tooling with a focus on reliability and scale.",
        bullets: [
          "Developing APIs and event-driven services with Kotlin, Kafka, Redis, and PostgreSQL.",
          "Improving backoffice workflows and internal tooling that keep operations fast and consistent.",
          "Shipping targeted frontend support to enhance the backoffice experience.",
        ],
      },
      {
        company: "Kaizen Gaming",
        role: "Software Engineer .NET",
        period: "03/2024 - Present",
        summary: "",
        bullets: [
          "Led backend development in .NET with Kafka, SQL, Redis, MongoDB, and Docker for high-demand environments.",
          "Owned monitoring and troubleshooting of microservices, resolving performance issues to keep systems stable.",
          "Managed CI/CD deployments end-to-end, optimizing pipelines for continuous integration and delivery.",
          "Designed and delivered new features in the team's cluster aligned with product requirements and scalability.",
          "Applied advanced optimization techniques to improve throughput and resilience in distributed services.",
        ],
      },
      {
        company: "Farfetch",
        role: "Software Engineer .NET",
        period: "09/2021 - 03/2024",
        summary: "",
        bullets: [
          "Led backend development in .NET with Kafka, SQL, Redis, MongoDB, and Docker for high-demand environments.",
          "Owned monitoring and troubleshooting of microservices, resolving performance issues to keep systems stable.",
          "Managed CI/CD deployments end-to-end, optimizing pipelines for continuous integration and delivery.",
          "Designed and delivered new features in the team's cluster aligned with product requirements and scalability.",
          "Applied advanced optimization techniques to improve throughput and resilience in distributed services.",
        ],
      },
      {
        company: "Universidade do Minho",
        role: "Bachelor's Degree in Software Engineering",
        period: "",
        summary: "",
        bullets: [],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Proof of craft and product polish",
    subtitle: "Selected work that blends backend rigor with user-centered design.",
    detailsLabel: "Details",
    items: [
      {
        name: "Paies Travel",
        link: "https://www.paiestravel.com",
        description: "A premium travel website focused on immersive visuals and UX polish.",
        tags: ["React", "UI/UX", "Responsive"],
        details: [],
      },
      {
        name: "Choose and Chill",
        link: "",
        description: "A recommendation app that surfaces movies and shows tailored to each user.",
        tags: ["Recommendation", "Personalization"],
        details: [],
      },
      {
        name: "Oddlify",
        link: "",
        description: "AI-powered software that predicts football match outcomes.",
        tags: ["AI", "Prediction"],
        details: [],
      },
      {
        name: "Padel Vision",
        link: "",
        description:
          "An AI-powered web app that analyzes padel matches and produces match and player statistics.",
        tags: ["AI", "Analytics", "Web App"],
        details: [],
      },
    ],
  },
  aiPython: {
    eyebrow: "AI & Python",
    title: "AI & Automation",
    subtitle: "Exploring automation and intelligent features that reduce friction for teams.",
    bullets: [
      "I use Python for scripting and experimentation.",
      "I am exploring LLMs and AI-assisted product features.",
      "I enjoy building tools that remove friction from day-to-day workflows.",
    ],
    chat: {
      title: "AI Fit Chat",
      description: "",
      triggerLabel: "Ask AI why I should be on your company",
      closeLabel: "Close AI chat",
      headerLabel: "Ask AI why I should be on your company",
      placeholder:
        "Example: We build a B2B fintech platform. We need a backend engineer who can scale event-driven services and improve operational tooling.",
      buttonLabel: "Ask the AI",
      clearLabel: "Clear",
      promptsLabel: "Try a prompt",
      disclaimer: "Powered by Groq. Your message is sent to the AI model.",
      introMessage:
        "Tell me about your company and the candidate profile you want. I will reply with a tailored fit summary.",
      prompts: [
        "We are a SaaS platform modernizing expense management. We need strong backend systems and clean APIs.",
        "We are a marketplace focused on reliability, data consistency, and operational tooling.",
        "We are a product team building internal backoffice tools and event-driven services.",
      ],
      response: {
        intro: "Based on what you shared, here is why I am a strong fit:",
        outro:
          "If you want a backend engineer who combines reliability with product clarity, I would love to talk.",
        fallback:
          "Even without a specific domain, my focus is on resilient systems, clean APIs, and thoughtful product execution.",
        domains: [
          {
            id: "fintech",
            line:
              "Payments, compliance, and operational accuracy demand reliable backoffice systems and careful data workflows.",
          },
          {
            id: "saas",
            line:
              "B2B platforms thrive on stable integrations, predictable performance, and rapid iteration on customer-facing tooling.",
          },
          {
            id: "marketplace",
            line:
              "Marketplace businesses depend on dependable services and observability to keep critical flows moving.",
          },
          {
            id: "gaming",
            line:
              "High-traffic environments benefit from event-driven systems that stay fast and consistent under load.",
          },
        ],
        points: [
          {
            id: "backend",
            line:
              "I build robust backend services in Kotlin and .NET with API-first design and clean system boundaries.",
          },
          {
            id: "data",
            line:
              "I ship event-driven architectures with Kafka, Redis, and PostgreSQL to keep data consistent and fast.",
          },
          {
            id: "product",
            line:
              "I improve backoffice workflows and can support frontend touchpoints when teams need extra lift.",
          },
          {
            id: "ai",
            line:
              "I use Python to prototype AI and automation ideas when they unlock product value.",
          },
          {
            id: "performance",
            line:
              "I optimize latency, throughput, and observability for production-grade reliability.",
          },
        ],
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something reliable",
    subtitle:
      "Hiring for backend roles and value engineers who care about UI and AI? Let's talk.",
    lead: "Ready to connect? Reach me directly at",
    ctaLabel: "Email Pedro",
    copyLabel: "Copy Email",
    copiedLabel: "Copied",
  },
  footer: {
    note: "Built with React + TypeScript.",
    emailLabel: "Email",
  },
  commandPalette: {
    title: "Quick Actions",
    closeLabel: "Esc",
    confirmLabel: "Enter",
    actions: [
      {
        id: "email",
        label: "Email Pedro",
        description: "Send a quick note",
      },
      {
        id: "github",
        label: "Open GitHub",
        description: "View repositories",
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        description: "Connect professionally",
      },
      {
        id: "cv",
        label: "Download CV",
        description: "Grab the latest resume",
      },
    ],
  },
} as const;
