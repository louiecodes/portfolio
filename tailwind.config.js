import flowbite from 'flowbite/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      'animation': {
        'text': 'text 5s ease infinite',
      },
      'keyframes': {
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
        }
      }
    },
  },
  plugins: [
    flowbite,
  ],
}
