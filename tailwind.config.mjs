/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shine:'shine 5s linear infinite'
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",

          },
        },
        shine:{
          '0%': { 'background-position': '100%' },
                   '100%': { 'background-position': '-100%' },
        },
      },
    },
  },
  plugins: [],
};
