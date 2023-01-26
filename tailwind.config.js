/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      backgroundImage: {
        "random-img": "url('https://source.unsplash.com/random')",
      },
    },
  },
  plugins: [],
};
