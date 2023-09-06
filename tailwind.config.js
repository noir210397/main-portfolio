/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lora": ["lora", "sans serif"]
      },
      colors: {
        primary: 'hsl(270,89%,41%)',
        mywhite: 'hsl(0,5%,100%)',
        light: "hsl(270,5%,94%)",
        myblack: 'hsl(270,5%,15%)',
        dark: 'hsl(270,5%,44%)',
        mypurple: 'hsl(309, 89%, 41%)',
        mygreen: 'hsl(116, 89%, 41%)',
        mypink: 'hsl(329, 89%, 41%)',
        myred: 'hsl(360, 89%, 41%)',
        myyellow: 'hsl(54, 89%, 41%)',

      }
    },
  },
  plugins: [],
}