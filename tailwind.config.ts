import type { Config } from "tailwindcss";

const config: Config = {
  //  theme: {
  //   extend: {},
  // },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, 10px)' },
          '100%': { transform: 'translate(0, -0)' },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-motion')],
};
export default config;


