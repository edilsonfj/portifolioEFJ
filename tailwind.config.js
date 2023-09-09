/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      screens: {
        'mobile': { 'min': '368px' },
        'tablet': { 'min': '576px' },
        'laptop': { 'min': '768px' },
        'notebook': { 'min': '960px' },
        'desktop': { 'min': '1152px' },
        'monitor': { 'min': '1344px' },
        'tv': { 'min': '1536px' },
        'scale': { 'min': '1728px' },
        'screen': { 'min': '1920px' },
      },
      fontFamily: {
        'logo': ['Kernel', 'sans-serif'],
        'sans': ['Kanit', 'sans-serif'],
        'serif': ['Arvo', 'serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },
      width: {
        '4.5': '1.875rem',
        '5.5': '2.875rem',
        '6.5': '3.875rem',
      },
      spacing: {
        '18': '4.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '42': '10.5rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '100': '25rem',
        '104': '26rem',
        '112': '36rem',
      },
      colors: {
        'bg': '#06010B',
      },
      backgroundImage: {
        'treeBg': "url('../src/assets/treeBg.png')",
      },
    },
  },
  plugins: [],
}

