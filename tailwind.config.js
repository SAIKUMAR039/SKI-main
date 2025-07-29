/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'ski-black': '#0A0A0A',
        'ski-gray': '#F8F8F8',
        'ski-accent': '#FF6B35',
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'morph': 'morph 6s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite',
        'pulse-glow': 'pulseGlow 1.5s ease-in-out infinite alternate',
        'rotate-border': 'rotateBorder 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 107, 53, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.8)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(255, 107, 53, 0.5)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(255, 107, 53, 0.8)',
            transform: 'scale(1.05)'
          },
        },
        rotateBorder: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};