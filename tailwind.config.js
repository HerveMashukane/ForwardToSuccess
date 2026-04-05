// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-accent': '#B91C1C',
        'brand-accent-hover': '#991B1B',
        'brand-primary': '#1D4ED8',
        'brand-primary-hover': '#1E40AF',
        'brand-secondary': '#374151;',
        'brand-secondary-hover': '#1F2937',
        'brand-background': '#FFFFFF',
      },
      fontSize: {
        'heading1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading2': ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.25', fontWeight: '400' }],
      },
      borderRadius: {
        'btnRadius': '9999px',
        'inputRadius': '0.5rem',
      },
      boxShadow: {
        'btnShadow': '0 2px 6px rgba(0,0,0,0.15)',
        'inputShadow': '0 1px 3px rgba(0,0,0,0.1)',
        'glow': '0 0 30px rgba(29,78,216,0.3)',
      },
      spacing: {
        'btnY': '0.625rem',
        'btnX': '1.25rem',
        'inputY': '0.5rem',
        'inputX': '0.75rem',
      },
      keyframes: {
        toastIn: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        toastOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(29,78,216,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(29,78,216,0.6)' },
        },
      },
      animation: {
        'glow-pulse': "glowPulse 4s ease-in-out infinite",
        'toastIn': "toastIn 0.4s ease-out",
        'toastOut': "toastOut 0.3s ease-in forwards",
      },
    },
  },
  plugins: [],
}