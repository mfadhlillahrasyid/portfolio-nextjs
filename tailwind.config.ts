import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        '96': '0.96',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif", "system-ui"],
      }
    },
  },
  plugins: [
    daisyui,
  ],
} satisfies Config;
