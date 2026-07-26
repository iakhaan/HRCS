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
        brand: {
          orange: '#F5A623',
          navy: '#0D1526',
          black: '#070B12',
          white: '#FFFFFF',
          offwhite: '#F7F7F5',
          softgrey: '#E7E9ED',
          textgrey: '#667085',
          gold: '#D99018'
        }
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(245, 166, 35, 0.15) 0%, rgba(13, 21, 38, 0) 50%)',
      }
    },
  },
  plugins: [],
};
export default config;
