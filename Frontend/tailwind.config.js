/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #fff, 0 0 20px #7e22ce' },
          '50%': { boxShadow: '0 0 25px #fff, 0 0 45px #7e22ce' },
        },
      },
      animation: {
        glow: 'glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
