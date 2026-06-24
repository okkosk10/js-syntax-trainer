import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        app: {
          bg: "#101114",
          panel: "#17191f",
          surface: "#1f222b",
          border: "#2b303b",
          text: "#f1f5f9",
          muted: "#9ca3af",
          accent: "#4ade80",
          warn: "#f59e0b",
          danger: "#fb7185"
        }
      }
    }
  },
  plugins: []
};

export default config;
