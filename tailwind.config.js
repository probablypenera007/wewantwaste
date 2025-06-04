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
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translate(-50%, 100%)', opacity: 0 },
          '100%': { transform: 'translate(-50%, 0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}