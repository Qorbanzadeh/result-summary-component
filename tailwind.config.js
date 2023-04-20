/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_light_red: "hsl(0, 100%, 67%)",
        primary_orangey_yellow: "hsl(39, 100%, 56%)",
        primary_green_teal: "hsl(166, 100%, 37%)",
        primary_cobalt_blue: "hsl(234, 85%, 45%)",
        // bg
        gradient_light_slate_blue: "hsl(252, 100%, 67%)",
        gradient_light_royal_blue: "hsl(241, 81%, 54%)",
        // circle
        gradient_violet_blue: "hsla(256, 72%, 46%, 1)",
        gradient_persian_blue: "hsla(241, 72%, 46%, 0)",
        neutral_white: "hsl(0, 0%, 100%)",
        neutral_pale_blue: "hsl(221, 100%, 96%)",
        neutral_light_lavender: "hsl(241, 100%, 89%)",
        neutral_dark_gray_blue: "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
