/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-400%)" }
        }
      },
      animation: {
        slide: "slide 20s linear infinite"
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
};

