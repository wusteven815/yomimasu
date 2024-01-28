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
        container: "#0f1117",
        accent: "#E9B67E",
        "accent-hover": "#edc191",
        hover: "#3C3A49",
        surface: "#E5E7EB",
        outline: "#32353C",
      },
    },
  },
  plugins: [],
};

export default config;
