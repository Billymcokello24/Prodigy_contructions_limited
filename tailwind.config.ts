import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New editorial palette (reference site)
        graphite: "#111513",
        "graphite-soft": "#1c211e",
        moss: "#26382f",
        paper: "#f8f6ef",
        limestone: "#ece9df",
        smoke: "#56605a",
        line: "#d6d3ca",
        orange: "#ef6128",
        "orange-dark": "#c84516",
        // Legacy aliases kept so existing page sections stay dark/consistent
        base: "#111513",
        charcoal: "#111513",
        "charcoal-soft": "#1c211e",
        concrete: "#f8f6ef",
        ink: "#111513",
        muted: "#56605a",
        accent: "#ef6128",
        "accent-light": "#ff7a4d",
        "accent-dark": "#c84516",
        invert: "#f5f5f2",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1380px",
      },
      fontSize: {
        display: "clamp(3rem, 7vw, 6.5rem)",
        "display-md": "clamp(2.4rem, 5vw, 4.5rem)",
        "display-sm": "clamp(1.9rem, 3.5vw, 2.8rem)",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;