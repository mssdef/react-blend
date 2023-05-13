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
        white_A700_4c: "#ffffff4c",
        black_900_7e: "#0000007e",
        teal_A400_00: "#00ffc300",
        blue_gray_50: "#f1f1f1",
        gray_800: "#3f3f3f",
        gray_900_00: "#25252500",
        black_900_5b: "#0000005b",
        gray_900: "#252525",
        black_900_90: "#00000090",
        black_900_0c: "#0000000c",
        teal_A400: "#00ffc3",
        gray_100: "#f5f5f5",
        black_900: "#000000",
        white_A700: "#ffffff",
        red_A700: "#ff0000",
      },
      boxShadow: { bs: "0px 0px  12px 0px #0000000c" },
      fontFamily: { generalsans: "General Sans" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#252525,#25252500)",
        gradient1: "linear-gradient(270deg ,#00ffc3,#00ffc300)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
