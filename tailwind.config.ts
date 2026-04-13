import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f3f0e8",   // Example color based on context
        ink: "#0d0e10",     // Example dark ink color
        pine: "#2d5a27",    // Example green accent
        folder: "#e4d8c8",  // Example folder background
        stamp: "#c23a22",   // Example red stamp color
      },
      animation: {
        folder: "folder 0.5s ease-out forwards",
      },
      // Add your custom keyframes from tailwind.config.js here
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
export default config;