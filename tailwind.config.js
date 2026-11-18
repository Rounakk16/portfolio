/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        paper: '#fbfaf6',
        ink: '#1a1a16',
        muted: '#6b6b5e',
        line: '#e6e3d8',
        amber: {
          DEFAULT: '#ca8a04',
          soft: '#fef8e7',
          deep: '#a16b04',
        },
        red: {
          DEFAULT: '#b91c1c',
          soft: '#fdeaea',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'color-shift': 'colorShift 16s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        colorShift: {
          '0%, 100%': { '--accent': '#ca8a04', '--accent-soft': '#fef8e7', '--emphasis': '#b91c1c' },
          '33%': { '--accent': '#d97706', '--accent-soft': '#fdf3e0', '--emphasis': '#dc2626' },
          '66%': { '--accent': '#a16207', '--accent-soft': '#fbf3d8', '--emphasis': '#991b1b' },
        },
      },
    },
  },
  plugins: [],
};
