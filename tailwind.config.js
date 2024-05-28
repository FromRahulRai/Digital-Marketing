/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '10px 10px 20px 5px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}