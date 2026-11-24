import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#151515",
        cream: "#F5F0E7",
        coffee: "#5A3825",
        olive: "#6D7255",
        ember: "#C76A35",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.35em",
      },
      animation: {
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
      },
      keyframes: {
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollPulse: {
          "0%,100%": { opacity: "0.3", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
