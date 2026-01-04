import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#2E8FA8",
          red: "#D64545",
          ink: "#111827",
          muted: "#6B7280",
          soft: "#F7FAFC",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;