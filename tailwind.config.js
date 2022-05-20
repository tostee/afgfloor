module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
       quicksand: ["Quicksand", "cursive"],
      },
      
  },
  plugins: [
    require('flowbite/plugin')
  ],
}};
