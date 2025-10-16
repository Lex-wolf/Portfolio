/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          dark: '#0B0C10',
          darker: '#1F2833',
          light: '#C5C6C7',
        },
        accent: {
          cyan: '#66FCF1',
          teal: '#45A29E',
        },
      },
      animation: {
        'gradient-move': 'moveGradient 20s ease infinite',
        'gradient-move-text': 'gradientMove 8s ease infinite',
      },
      keyframes: {
        moveGradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        gradientMove: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
