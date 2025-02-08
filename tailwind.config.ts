import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1FB8BF",
          light: "#3DC8CF",
          dark: "#1A9A9F",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          secondary: "#F3F4F6",
          dark: "#111111",
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 0 50px -12px rgb(0 0 0 / 0.25)',
      },
    },
  },
  plugins: [],
}

export default config;
