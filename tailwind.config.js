/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desk-light": "url('/image/bg-desktop-light.jpg')",
        "desk-dark": "url('/image/bg-desktop-dark.jpg')",
        "mobile-dark": "url('/image/bg-mobile-dark.jpg')",
        "mobile-light": "url('/image/bg-mobile-light.jpg')",
      },
      fontFamily: {
        theme: ["Josefin Sans", "system-ui"],
      },
      colors: {
        "bg-blue": " hsl(235, 21%, 11%)",
        "bg-dark-blue": "hsl(235, 24%, 19%)",
        "gray-blue": "hsl(235, 24%, 19%)",
        "bg-dark-hover": "hsl(236, 33%, 92%)",
        "border-gray": " hsl(233, 14%, 35%)",
        "border-light": "hsl(234, 39%, 85%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
