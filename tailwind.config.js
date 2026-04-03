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
        // Brand colors
        'brand-primary': '#B91C1C',
        'brand-primary-hover': '#991B1B',
        'brand-secondary': '#1D4ED8',
        'brand-secondary-hover': '#1E40AF',
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
        // Better radius system
        'btnRadius': '9999px',   // fully rounded (pill)
        'inputRadius': '0.5rem', // medium rounded (clean + modern)
      },
      boxShadow: {
        'btnShadow': '0 2px 6px rgba(0,0,0,0.15)',
        'inputShadow': '0 1px 3px rgba(0,0,0,0.1)',
      },
      spacing: {
        'btnY': '0.625rem',
        'btnX': '1.25rem',
        'inputY': '0.5rem',
        'inputX': '0.75rem',
      },
    },
  },
  plugins: [],
}