module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_600: "#79747e",
        gray_700: "#666666",
        black_900: "#000000",
        gray_800: "#49454f",
        deep_purple_500: "#6750a4",
        white_A700: "#ffffff",
      },
      fontFamily: { roboto: "Roboto", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
