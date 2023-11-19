/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'pop-right': {
          '0%, 100%': { transform: 'translateY(150px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'pop-right': 'pop-right 1s '
      }
    },
  },
  plugins: [],
}

