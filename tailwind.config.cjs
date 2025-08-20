/* eslint-disable @typescript-eslint/no-require-imports -- tailwind config uses CommonJS */
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
        ],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        brand: {
          DEFAULT: '#1B3B6F',
          dark: '#162F57',
          cyan: '#31B6C4',
          gold: '#C7A45B',
          goldDark: '#B28C3E',
        },
        surface: { base: '#0B0F14', elev1: '#0F172A', elev2: '#111827' },
      },
      boxShadow: {
        floating: '0 10px 30px rgba(11,15,20,.45), 0 6px 12px rgba(0,0,0,.35)',
        gold: '0 8px 24px rgba(199,164,91,.22)',
      },
      borderRadius: { xl: '1.25rem', '2xl': '1.5rem', '3xl': '2rem' },
      backgroundImage: {
        premiumGrid:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 1px)',
        digitalFlow:
          'conic-gradient(from 180deg at 50% 50%, rgba(49,182,196,.12), rgba(27,59,111,.10), rgba(199,164,91,.08))',
        luxeSheen:
          'linear-gradient(120deg, rgba(199,164,91,0.05), rgba(255,255,255,0) 30%, rgba(49,182,196,0.05))',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.ring-gold': {
          boxShadow:
            '0 0 0 1px rgba(199,164,91,.55), 0 0 24px rgba(199,164,91,.18)',
        },
        '.container-tight': {
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
        },
      });
    }),
  ],
};
