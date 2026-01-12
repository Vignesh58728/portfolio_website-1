/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A53DFF",
        secondary: "#FF8D28",
        accent: "#FDC435",
        dark: {
          DEFAULT: "#2C2C2C",
          100: "#132238",
          200: "#121216",
          300: "#09090B",
          400: "#18181B"
        },
        light: {
          DEFAULT: "#FFFFFF",
          100: "#FFFCFC",
          200: "#FFF8F8",
          300: "#EEEEEE",
          gray: "#87909D"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
