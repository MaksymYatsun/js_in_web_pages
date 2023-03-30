/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["Tenor Sans"],
    },
    extend: {
      colors: {
        "title-active": "#000000",
        body: "#333333",
        label: "#555555",
        placeholder: "#888888",
      },
    },
  },
  plugins: [],
};
