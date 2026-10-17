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
          bg: "#090A0F",              /* Deep Obsidian Titanium Black */
          surface: "#111218",         /* Sleek Dark Graphite Surface */
          surfaceElevated: "#181922", /* Elevated Card / Modal Surface */
          surfaceSubtle: "#0D0E14",   /* Subtle Section Contrast */
          border: "#20222C",          /* Crisp Slate Dark Border */
          borderLight: "#2E313E",     /* Subtle Highlight Border */
          borderHighlight: "#E11D48", /* Executive Crimson Highlight */
          teal: "#E11D48",            /* Primary Executive Crimson */
          tealLight: "#F43F5E",       /* Radiant Rose Crimson */
          tealDark: "#9F1239",        /* Deep Velvet Wine */
          red: "#E11D48",             /* Primary Accent */
          redLight: "#F43F5E",
          redDark: "#9F1239",
          crimson: "#DC2626",
          rose: "#F43F5E",
          textPrimary: "#FFFFFF",     /* Pure Crisp White */
          textSecondary: "#94A3B8",   /* Slate-400 - High Contrast Readability */
          textMuted: "#64748B",       /* Slate-500 - Professional Metadata */
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 6s ease-in-out infinite",
        "glow": "glow 8s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(8px)" },
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
