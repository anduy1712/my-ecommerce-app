/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        '--nc-primary': '#ee4d2d',
        '--nc-primary-bg': '#fef6f5',
        '--nc-primary-gradient': 'linear-gradient(#ee4d2d,#ff7337)',
        '--nc-secondary-blue': '#0046ab',
        '--nc-secondary-yellow': '#eda500',
        '--nc-secondary-green': '#26aa99',
        '--nc-error': '#ee2c4a',
        '--nc-error-bg': '#fff4f4',
        '--nc-caution': '#f69113',
        '--nc-caution-bg': '#fff8e4',
        '--nc-success': '#30b566',
        '--nc-success-bg': '#f7fffe'
      }
    }
  },
  plugins: []
};
