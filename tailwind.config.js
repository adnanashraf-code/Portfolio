/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#1a3629',
        'brand-yellow': '#f0a53b',
        'brand-cream': '#f5f0e6',
        'brand-dark': '#232323',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'solid': '6px 6px 0px 0px rgba(26, 54, 41, 1)',
        'solid-yellow': '6px 6px 0px 0px rgba(240, 165, 59, 1)',
      }
    },
  },
  plugins: [],
}
