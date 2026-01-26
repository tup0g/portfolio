/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          bg: '#121212', // Фон
          cream: '#F5F5DC', // Основний текст
          gray: '#BEBEBE', // Другорядний текст
          accent: '#8B7D6B', // Акцент
          card: '#1E1E1E', // Трохи світліший фон для карток
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
