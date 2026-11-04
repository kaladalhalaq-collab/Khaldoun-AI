
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#8B5CF6",
          gold: "#D4AF37",
          dark: "#09090F"
        }
      }
    }
  },
  plugins: []
};

export default config;
