import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //색상
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      //그리드 Columns
      gridTemplateColumns:{
        'item-2' : 'auto max-content',
        'col-100' : '100%'
      },
      fontSize : {
        s : '0.6rem',
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
