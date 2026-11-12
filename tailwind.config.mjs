/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mzc: {
          blue: '#0C71C3',
          'blue-dark': '#0A5FA3',
          teal: '#7EBEC5',
          'teal-dark': '#5AB8C4',
          navy: '#1A2A4A',
          'navy-dark': '#0A1628',
          gold: '#C9A84C',
          'gold-dark': '#D4A82C',
          light: '#F5F7FA',
          dark: '#0A1224'
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Nunito Sans', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float 7s ease-in-out infinite reverse',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: []
};