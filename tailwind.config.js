/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sedgwick: ['Sedgwick Ave Display', 'sans-serif'],
        kanit: ['Kanit', 'sans'],
        rubik: ['Rubik Iso', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        lato: ['Lato', 'sans'],
        playpen: ['Playpen Sans', 'sans']
      },
      colors: {
        blueviolet: '#8a2be2',
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
