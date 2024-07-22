import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#4682B4', // Steel Blue
        secondary: '#708090', // Slate Gray
        accent: '#98FF98', // Mint Green
        'accent-light': '#b6ffb6', // Light Mint Green (for hover)
        'secondary-dark': '#4e5d6c', // Dark Slate Gray (for hover)
        'white-smoke': '#F5F5F5', // White Smoke
        'dim-gray': '#696969', // Dim Gray
      },
    },
  },
  
  plugins: [],
};
export default config;
