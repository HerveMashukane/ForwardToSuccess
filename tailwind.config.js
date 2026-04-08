/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "brand-accent": "#B91C1C",
        "brand-accent-hover": "#991B1B",
        "brand-primary": "#1D4ED8",
        "brand-primary-hover": "#1E40AF",
        "brand-secondary": "#374151",
        "brand-secondary-hover": "#1F2937",
        "brand-background": "#FFFFFF",
        page: "#f1f5f9",
      },
      fontSize: {
        heading1: ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        heading2: ["2.25rem", { lineHeight: "1.3", fontWeight: "700" }],
        heading3: ["1.875rem", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.25", fontWeight: "400" }],
      },
      borderRadius: {
        btnRadius: "9999px",
        inputRadius: "0.5rem",
      },
      boxShadow: {
        btnShadow: "0 2px 6px rgba(0,0,0,0.15)",
        inputShadow: "0 1px 3px rgba(0,0,0,0.1)",
        glow: "0 0 30px rgba(29,78,216,0.3)",
        section: "0 4px 24px rgba(15, 23, 42, 0.06)",
      },
      keyframes: {
        toastIn: {
          "0%": { opacity: "0", transform: "translateY(-12px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        toastOut: {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(-12px) scale(0.98)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 30px rgba(29,78,216,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(29,78,216,0.6)" },
        },
        heroOvalUp: {
          "0%,100%": { transform: "translateY(14px)", opacity: "0.82" },
          "50%": { transform: "translateY(-14px)", opacity: "0.92" },
        },
        heroOvalDown: {
          "0%,100%": { transform: "translateY(-14px)", opacity: "0.92" },
          "50%": { transform: "translateY(14px)", opacity: "0.82" },
        },
        testimonialIn: {
          "0%": { opacity: "0", transform: "translateX(12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatDiagonal: {
          "0%": { transform: "translate(0,0) rotate(0deg)" },
          "50%": { transform: "translate(10px,-10px) rotate(15deg)" },
          "100%": { transform: "translate(0,0) rotate(0deg)" },
        },
        bounceSlow: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        toastIn: "toastIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        toastOut: "toastOut 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "hero-oval-up": "heroOvalUp 9s ease-in-out infinite",
        "hero-oval-down": "heroOvalDown 9s ease-in-out infinite",
        "testimonial-fade": "testimonialIn 0.55s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "float-diagonal": "floatDiagonal 6s ease-in-out infinite",
        "bounce-slow": "bounceSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};