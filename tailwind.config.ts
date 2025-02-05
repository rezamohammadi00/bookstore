import type { Config } from "tailwindcss";
import daisyui from "daisyui"; // for daisyUI adding

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IranSansXPro: "var(--font-IranSansXPro)",
      },
    },
    plugins: [daisyui],   // for daisyUI adding 
    daisyui: {
      themes: ["winter"], //add winter theme of daisyui
    }
  },
} satisfies Config;
