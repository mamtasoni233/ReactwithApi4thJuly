/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' }
        }
      },
      animation: {
        rotate: 'rotate 30s linear infinite',
      }
    }
  },
  plugins: [],
};


