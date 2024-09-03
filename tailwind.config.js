import { transform } from 'next/dist/build/swc';

/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    fontFamily: {
      sans: 'var(--font-sans)', // Corrected syntax
      serif: 'var(--font-serif)', // Corrected syntax
    },
    animation: {
      'ping-large': "ping-large 1s ease-in-out infinite",
      'move-left': "move-left 1s linear infinite",
      'move-right': "move-right 1s linear infinite",
    },
    keyframes: {
      'ping-large':{
        '75%, 100%': {
        transform: 'scale(3)',
        opacity: '0',
       }
      },
      'move-left':{
        '0%': {
          transform: 'translateX(0%)'
        },
        '100%': {
          transform: 'translateX(-50%)'
        }
      },
      'move-right':{
        '0%': {
          transform: 'translateX(-50%)'
        },
        '100%': {
          transform: 'translateX(0%)'
        }
      },
    }
  },
};
export const plugins = [];
