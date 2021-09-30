module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'eerie-black': '#110c11',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-no-scrollbar"),
  ],
}
