/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        carbon: '#0B0A09',
        graphite: '#141210',
        smoke: '#1E1B18',
        ivory: '#F2ECE0',
        ash: '#8F877A',
        champagne: { DEFAULT: '#D4B47E', light: '#EDDCB8', deep: '#A8865A' },
        brand: '#FFD000',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { eyebrow: '0.22em' },
      maxWidth: { shell: '1440px' },
      transitionTimingFunction: { lux: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    },
  },
  plugins: [],
}
