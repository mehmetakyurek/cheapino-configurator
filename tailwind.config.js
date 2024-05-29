/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "key": "#C8C8C8",
        "key-text": "#000000",
        "background": "#2A292C",
        "tab-selected": "#202020",
        "layer-key": "#4D5D76",
        "container-key": "#BB804A",
        "stroke": "#212121"
      }
    },
  },
  plugins: [],
}

