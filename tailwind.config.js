module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      green: "#64766A",
      blue: "#BACEC1",
      white: "#FFFFFF",
      grey: "#F4F2F3",
      night: "#344648",
      black: "#000000",
      beige: "#F7F1F0",
      orange: "#E59560",
      yellow: "#FFC44D",
      bleu: "#0277BD",
      bleuclair: "#6FCBE1",
      github: "#3D6ECE",
      vert: "#83CD29",
      red: "#e02e16",
      sql: "#E29618",
      figma: "#E7A290",
      yellow2: "#F7DF1F",
      green2: "#396150",
      transparent: "transparent",
      prune: "#C3A6A0",
      marron: "#A15C38",
    },
    extend: {
      screens: {
        "-sm": { max: "639px" },
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      link: ["Raleway"],
    },
    plugins: [],
  },
};
