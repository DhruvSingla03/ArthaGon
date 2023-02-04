/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue'],
        Montserrat: ['Montserrat',"sans-serif"],
        poppins: ['Poppins'," sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F8CBA6",
          secondary: "#FFE7CC",
          accent: "#FFFBEB",
          neutral: "#ECF9FF",
          "base-100": "#ECF9FF",
        },
      },
      "cyberpunk"],
  },
}