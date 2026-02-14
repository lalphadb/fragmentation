import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f4f5f7",
          100: "#e4e6eb",
          200: "#cdd1d9",
          300: "#a9b0bd",
          400: "#7e879a",
          500: "#636c7f",
          600: "#555c6c",
          700: "#494e5b",
          800: "#40444e",
          900: "#2c2f37",
          950: "#1a1d23",
        },
        orange: {
          50: "#fef9ec",
          100: "#fcefc9",
          200: "#f9dd8e",
          300: "#f5c654",
          400: "#e8a830",
          500: "#d18b18",
          600: "#b96a12",
          700: "#994c12",
          800: "#7d3c16",
          900: "#673217",
          950: "#3b1808",
        },
        dark: {
          50: "#f7f8fa",
          100: "#eef1f5",
          200: "#dae0e8",
          300: "#9ba8b9",
          400: "#6b7a8d",
          500: "#4a5568",
          600: "#374151",
          700: "#252f3f",
          800: "#1a2332",
          900: "#111827",
          950: "#0a0f1a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.85) rotate(45deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(45deg)" },
        },
        clipWipeIn: {
          "0%": { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" },
          "100%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        },
        clipWipeOut: {
          "0%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
          "100%": { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        underlineGrow: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.8s ease-out forwards",
        "fade-in-right": "fadeInRight 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "clip-wipe-in": "clipWipeIn 1.2s cubic-bezier(0.77,0,0.175,1) forwards",
        "clip-wipe-out": "clipWipeOut 1.2s cubic-bezier(0.77,0,0.175,1) forwards",
        "spin-slow": "spinSlow 3s linear infinite",
        "underline-grow": "underlineGrow 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
