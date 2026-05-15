/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        paper: '#FFFFFF',
        muted: '#888888',
        subtle: '#E8E8E8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
