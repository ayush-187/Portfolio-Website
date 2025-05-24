/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6366F1',
        'primary-dark': '#4F46E5',
        'secondary': '#10B981',
        'accent': '#F59E0B',
        'dark': {
          100: '#1F2937',
          200: '#111827',
          300: '#0F172A',
          400: '#0D1117'
        },
        'light': {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB'
        },
        'gray': {
          750: '#2D374D',
          850: '#1A2234',
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'ripple': 'ripple 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          }
        },
        ripple: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: 1
          },
          '100%': {
            transform: 'scale(2)',
            opacity: 0
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-custom': 'linear-gradient(to right, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
} 