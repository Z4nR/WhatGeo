/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      base: '0px',
      xs: '400px',
      sm: '592px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#11648e',
          secondary: '#f9844d',
          accent: '#c4d8fc',
          neutral: '#202e3c',
          'base-100': '#f9fafa',
          info: '#123eed',
          success: '#0d6856',
          warning: '#eea744',
          error: '#db242d',
        },
      },
    ],
  },
  plugins: [daisyui],
};
