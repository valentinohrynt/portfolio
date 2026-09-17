/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        paper: {
          50: '#FFFFFF',
          100: '#FCFBF7',
          200: '#F5F2EB',
          300: '#ECE6D9',
          400: '#DDD5C3',
          500: '#C7BBA3',
          800: '#4A4437',
          900: '#2A261E',
        },
        ink: {
          50: '#8A8477',
          100: '#696459',
          200: '#48443C',
          300: '#322F29',
          400: '#22201C',
          500: '#141310',
          pure: '#0C0B0A',
        },
        accent: {
          rust: '#A8422B',
          forest: '#2D5A43',
          amber: '#B46E14',
          indigo: '#324765',
        }
      },
    },
  },
  plugins: [],
}
