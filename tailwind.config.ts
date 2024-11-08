import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#c9aa42",
        dark: {
          light: "#333333",
          medium: "#252525",
          strong: "#000000"
        },
        revenue: colors.emerald[500],
        expense: colors.red[500],
      },
    },
  },
  plugins: [],
};
export default config;
