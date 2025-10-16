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
            'gradient-shift': 'gradientShift 10s ease-in-out infinite',
            'gradient-shift-subtle': 'gradientShiftSubtle 12s ease infinite alternate',
            'float': 'float 6s ease-in-out infinite',
            'glow': 'glow 2s ease-in-out infinite alternate',
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
            gradientShift: {
              '0%': { 'background-position': '0% 50%' },
              '50%': { 'background-position': '100% 50%' },
              '100%': { 'background-position': '0% 50%' },
            },
            gradientShiftSubtle: {
              '0%': { 'background-position': 'left top' },
              '100%': { 'background-position': 'right bottom' },
            },
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
            },
            glow: {
              '0%': { 'box-shadow': '0 0 5px rgba(102, 252, 241, 0.2)' },
              '100%': { 'box-shadow': '0 0 20px rgba(102, 252, 241, 0.4)' },
            },
          },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
