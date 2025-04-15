// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Asegúrate de incluir el directorio de tu aplicación
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          900: '#0A0C1B',
          800: '#111224',
          700: '#181a31',
          600: '#22253d',
        },
        'primary': {
          900: '#1a1854',
          800: '#262176',
          700: '#312a97',
          600: '#3d33b9',
          500: '#493cdb',
          400: '#6a5ee3',
          300: '#8b81eb',
          200: '#aca3f2',
          100: '#cdc6f9',
        },
        'secondary': {
          900: '#142d4c',
          800: '#1b3a63',
          700: '#22477a',
          600: '#295591',
          500: '#3062a8',
          400: '#5581ba',
          300: '#7a9fcb',
          200: '#a0bedd',
          100: '#c5ddee',
        },
        'accent-pink': '#ec4899',
        'black': '#121212',
        'cyan': '#00b8f4',
        'blackMate': '#1E1E1E',
      },
      fontFamily: {
        'sans': ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui'],
        'heading': ['var(--font-poppins)', 'ui-sans-serif', 'system-ui'],
        'mono': ['var(--font-fira-code)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
