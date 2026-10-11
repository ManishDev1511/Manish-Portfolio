/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: "#050807",
          surface: "#0E1715",
          surfaceElevated: "#132320",
          surfaceSubtle: "#091210",
          border: "#182E29",
          borderLight: "#23473F",
          teal: "#14B8A6",
          tealLight: "#2DD4BF",
          tealDark: "#0F766E",
          textPrimary: "#F1F5F4",
          textSecondary: "#9EADA9",
          textMuted: "#637571",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 8s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(40px)" },
          "100%": { opacity: "0.8", filter: "blur(60px)" },
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
