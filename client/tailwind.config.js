/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      base: "0px",
      xs: "400px",
      sm: "592px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b6b7ef",
          secondary: "#f9a29a",
          accent: "#39cc62",
          neutral: "#312833",
          "base-100": "#f1f3f3",
          info: "#a8b7f0",
          success: "#0e7159",
          warning: "#e2a712",
          error: "#eb1455",
        },
      },
    ],
  },
  plugins: [daisyui],
};
