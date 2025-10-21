import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { gold: "#C7A44C", charcoal: "#1F1F1F", ink: "#0B0B0B", warmgray: "#2B2B2B" },
      fontFamily: {
         display: ["var(--font-display)", "Nunito Sans", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
         body: ["var(--font-body)", "Nunito Sans", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
         numbers: ["var(--font-numbers)", "Nunito Sans", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
         brand: ["var(--font-brand)", "cursive"],
         menu: ["var(--font-menu)", "Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
       },
      boxShadow: { luxury: "0 10px 30px rgba(0,0,0,0.25)" }
    },
  },
  plugins: [typography],
};
export default config;
