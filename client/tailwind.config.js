/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
