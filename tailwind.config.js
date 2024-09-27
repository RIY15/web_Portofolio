/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      keyframes: {
        blink: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        bounce: {
          '0%, 100%' : {
            transform: 'translateY(-5%)' ,
          },
          '50%': {
            transform: 'translateY(0)'
          }
        },
      },
      screen: {
        '2xl': '1320px'
      },
      animation: {  
        blink: 'blink 1s linear infinite',
      }
    },
  },
  plugins: [],
}

