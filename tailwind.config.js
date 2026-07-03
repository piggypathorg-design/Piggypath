/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#f8f9fa',
          teal: '#00e699',
          purple: '#9966ff',
          black: '#111111',
          white: '#ffffff',
          gray: '#e0e0e0',
          darkgray: '#666666'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'neo-base': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-teal': '4px 4px 0px 0px #00e699',
        'neo-purple': '4px 4px 0px 0px #9966ff',
      },
      borderRadius: {
        'neo': '8px',
      }
    },
  },
  plugins: [],
}
