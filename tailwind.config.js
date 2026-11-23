/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#174C38', light: '#347A55', dark: '#0F3326' },
        cream: '#F5F0E6',
        charcoal: '#252A27',
        gold: '#C6A56A',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(23, 76, 56, 0.15)',
      },
    },
  },
  plugins: [],
};
