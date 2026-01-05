# Pedro Novais Portfolio

Futuristic single-page portfolio built with Vite, React, TypeScript, Tailwind, and Framer Motion.

## Run locally

1) Install dependencies
```
npm install
```

2) Set up the AI key
```
cp .env.example .env
```
Add your Groq key to `.env`.

3) Start the AI server (Groq)
```
npm run dev:api
```

4) Start the frontend
```
npm run dev
```

## Edit content

All text lives in `src/content/portfolio.ts`.

## Build

```
npm run build
```

## Deploy to Vercel (with AI)

1) Import the repo in Vercel.
2) Add environment variables:
   - `GROQ_API_KEY`
   - `GROQ_MODEL` (optional, default in `api/chat.js`)
3) Deploy. The serverless function lives at `api/chat.js` and is available at `/api/chat`.

Test it.
