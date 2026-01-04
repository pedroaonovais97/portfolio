/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["\"Space Grotesk\"", "sans-serif"],
        display: ["\"Sora\"", "sans-serif"],
      },
      colors: {
        base: "var(--color-base)",
        surface: "var(--color-surface)",
        accent: "var(--color-accent)",
        accent2: "var(--color-accent-2)",
        neon: "var(--color-neon)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(76, 255, 219, 0.35), 0 0 60px rgba(76, 255, 219, 0.2)",
        "neon-strong": "0 0 30px rgba(124, 252, 136, 0.6), 0 0 90px rgba(124, 252, 136, 0.3)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%) rotate(15deg)" },
          "100%": { transform: "translateX(120%) rotate(15deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.9 },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        shine: "shine 2.2s ease-in-out infinite",
        "pulse-soft": "pulseSoft 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
