/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'racing-red':    '#DC2626',
        'racing-orange': '#F97316',
        'racing-yellow': '#FBBF24',
        'bg-dark':       '#111827',
        'bg-card':       '#1F2937',
      },
    },
  },
  plugins: [],
}
