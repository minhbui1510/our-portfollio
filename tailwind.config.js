module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563eb", // dùng class bg-brand
          dark: "#1e40af",    // dùng bg-brand-dark
        },
      },
      fontFamily: {
        heading: ['"Poppins"', "sans-serif"],
        body: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
