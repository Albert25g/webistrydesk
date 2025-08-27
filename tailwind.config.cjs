/* eslint-disable @typescript-eslint/no-require-imports -- tailwind config uses CommonJS */

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
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Primary Brand Colors - Professional Blue
        brand: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c7d6fe',
          300: '#a5b8fc',
          400: '#8b91f8',
          500: '#1B3B6F', // Main brand color
          600: '#162F57', // Darker for hover states
          700: '#0f1f3a',
          800: '#0a1529',
          900: '#050b14',
          DEFAULT: '#1B3B6F',
          dark: '#162F57',
        },
        // Secondary - Trust Cyan
        cyan: {
          50: '#f0fdff',
          100: '#ccf7fe',
          200: '#99effd',
          300: '#66e2fb',
          400: '#31B6C4', // Main cyan
          500: '#0891b2',
          600: '#0e7490',
          700: '#155e75',
          800: '#164e63',
          900: '#083344',
          DEFAULT: '#31B6C4',
        },
        // Premium Gold
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#C7A45B', // Main gold
          500: '#B28C3E', // Darker gold
          600: '#92400e',
          700: '#78350f',
          800: '#451a03',
          900: '#1c0a00',
          DEFAULT: '#C7A45B',
          dark: '#B28C3E',
        },
        // Enhanced Grays
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        // Semantic Colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#31B6C4',
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(27, 59, 111, 0.1), 0 4px 6px -2px rgba(27, 59, 111, 0.05)',
        'brand-lg': '0 20px 25px -5px rgba(27, 59, 111, 0.15), 0 8px 10px -6px rgba(27, 59, 111, 0.1)',
        'gold': '0 10px 25px -5px rgba(199, 164, 91, 0.2), 0 4px 6px -2px rgba(199, 164, 91, 0.1)',
        'gold-lg': '0 20px 25px -5px rgba(199, 164, 91, 0.25), 0 8px 10px -6px rgba(199, 164, 91, 0.15)',
        'cyan': '0 10px 25px -5px rgba(49, 182, 196, 0.2), 0 4px 6px -2px rgba(49, 182, 196, 0.1)',
        'cyan-lg': '0 20px 25px -5px rgba(49, 182, 196, 0.25), 0 8px 10px -6px rgba(49, 182, 196, 0.15)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
};
