import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite'
      },
      keyframes: {
        text: {
          '0%': {
            backgroundSize: '300%',
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundSize: '300%',
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundSize: '300%',
            backgroundPosition: '0% 50%'
          }
        },
        glitch: {
          '0%': {
            color: '#fff',
            textShadow: '1px 1px 0px #00ffff, -1px -1px 0px #ff00ff'
          },
          '25%': {
            color: '#fff',
            textShadow: '-1px -1px 0px #fff, 1px 1px 0px #ff00ff'
          },
          '50%': {
            color: '#fff',
            textShadow: '1px -1px 0px #00ffff, -1px 1px 0px #fff'
          },
          '75%': {
            color: '#fff',
            textShadow: '-1px 1px 0px #ff00ff, 1px -1px 0px #00ffff'
          },
          '100%': {
            color: '#fff',
            textShadow: '1px 1px 0px #00ffff, -1px -1px 0px #ff00ff'
          }
        },
        twinkle: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      }
    }
  },
  plugins: [flowbite]
};
