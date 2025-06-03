/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       animation: {
        'text-glow': 'pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}