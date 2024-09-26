/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%' : {
            transform: 'translateY(-5%)' ,
          },
          '50%': {
            transform: 'translateY(0)'
          }
        }
      },
      screen: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}

