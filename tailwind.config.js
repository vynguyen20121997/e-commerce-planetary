/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
    './node_modules/tw-elements/js/**/*.js',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      backgroundImage: {
        'hero-planet-01': "url('/planet-01.png')",
        'hero-planet-02': "url('/planet-06.png')",
        'hero-planet-03': "url('/planet-07.png')",
        'hero-planet-04': "url('/planet-08.png')",
        'hero-planet-05': "url('/planet-04.png')",
      },
    },
  },
  plugins: [],
};
