/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'founders_grotesk': ['Founders Grotesk X-Cond Bold', 'sans-serif'],
        'Neue': ['Neue Montreal', 'sans-serif'],
        'Founders_Regular': ['Founders Grotesk Regular', 'sans-serif']
      }
    },
  },
  plugins: [],
}
