import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '200px',
      md: '450px',
      lg: '1024px',
      xl: '1280px',

    },
    extend: {
      animation: {
        tscale: "scale 1s linear infinite",
        bouncing: "bubble 5s linear infinite"
      },
      keyframes: {
        scale: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.03)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },

      

        bubble: {
        "0%":  {
            transform: "translateY(0) scale(0.8)",
        },
        "50%": {
            transform: "translateY(-40%)  scale(1.3)",
        },
        "100%": {
            transform: "translateY(0) scale(0.8)",
        },

        }
      },


     
      
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
