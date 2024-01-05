import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "500px",
    },
    extend: {
      colors: {
        background: "#1C1C26",
        container: "#2A2838",
        accent: "#E9B67E",
        hover: "#3C3A49",
        surface: "#CAC4CD",
      },
    },
  },
  plugins: [],
};

export default config;
