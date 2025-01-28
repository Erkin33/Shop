/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Указание на папку src
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px', // Минимальный размер экрана: 320px
        x:'425px',
        xss: '500px',
        des: '1366px',
        l3d: '1440px',
        mx: '1800px',
        mxx: '1920px',
      },
    },
  },
  plugins: [],
};
