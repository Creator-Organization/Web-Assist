/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Apple-inspired color system
        primary: {
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CCFF',
          300: '#66B2FF',
          400: '#3399FF',
          500: '#007AFF', // Main Apple Blue
          600: '#0066CC',
          700: '#004C99',
          800: '#003366',
          900: '#001933',
        },
        secondary: {
          50: '#E8F5E8',
          100: '#C3E6C3',
          200: '#9FD69F',
          300: '#7AC67A',
          400: '#55B755',
          500: '#34C759', // Apple Green
          600: '#2BA947',
          700: '#228B35',
          800: '#196D23',
          900: '#0F4F11',
        },
        accent: {
          50: '#FFF4E6',
          100: '#FFE6CC',
          200: '#FFCC99',
          300: '#FFB366',
          400: '#FF9933',
          500: '#FF9500', // Apple Orange
          600: '#CC7700',
          700: '#995A00',
          800: '#663D00',
          900: '#331F00',
        },
        neutral: {
          50: '#F5F5F7',
          100: '#E5E5E7',
          200: '#D1D1D6',
          300: '#C7C7CC',
          400: '#AEAEB2',
          500: '#8E8E93',
          600: '#636366',
          700: '#48484A',
          800: '#2C2C2E',
          900: '#1D1D1F', // Apple Dark
        },
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F5F5F7', // Apple Light Gray
          tertiary: '#FAFAFA',
        },
        // Keep existing grays for backward compatibility
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'apple': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'apple-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'apple-xl': '0 16px 64px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'apple': '12px',
        'apple-lg': '16px',
        'apple-xl': '24px',
      },
      screens: {
        'xs': '475px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)',
        'gradient-primary': 'linear-gradient(135deg, #007AFF 0%, #34C759 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #34C759 0%, #FF9500 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF9500 0%, #007AFF 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // Use class strategy for better control
    }),
  ],
}