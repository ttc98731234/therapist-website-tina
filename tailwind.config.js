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
        'lavender': {
          50: '#f5f3f9',
          100: '#eae6f3',
          200: '#d5cde7',
          300: '#bfb4db',
          400: '#a997cf', // 主色 - 低飽和薰衣草紫
          500: '#8f7ac2',
          600: '#775daf',
          700: '#624d90',
          800: '#4f3e74',
          900: '#41345f',
        },
        'milktea': {
          50: '#fcf9f6',
          100: '#f8f3ec',
          200: '#f1e7d9',
          300: '#e9dbc6',
          400: '#e2ceb3', // 主色 - 奶茶杏
          500: '#d5b791',
          600: '#c6a070',
          700: '#b3874f',
          800: '#936d40',
          900: '#785a35',
        },
        'calmblue': {
          50: '#f2f7fa',
          100: '#e6eff5',
          200: '#cddee9',
          300: '#b4cedf',
          400: '#9bbdd4', // 主色 - 靜謐藍
          500: '#7fa9c7',
          600: '#6394ba',
          700: '#4d7c9d',
          800: '#3e637e',
          900: '#335167',
        },
        'mistgray': {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e7e7e7',
          300: '#dadada',
          400: '#cecece', // 輔色 - 霧灰白
          500: '#b7b7b7',
          600: '#9f9f9f',
          700: '#878787',
          800: '#6c6c6c',
          900: '#595959',
        },
        'gentlegreen': {
          50: '#f3f7f5',
          100: '#e6efeb',
          200: '#cddfd7',
          300: '#b4cfc3',
          400: '#9bbfaf', // 輔色 - 溫柔墨綠
          500: '#7fa994',
          600: '#65917c',
          700: '#527664',
          800: '#425f50',
          900: '#364e42',
        },
      },
      fontFamily: {
        'sans': ['Noto Sans TC', 'sans-serif'],
        'handwriting': ['Noto Sans TC', 'cursive'], // 後續可替換為手寫風格字體
      },
    },
  },
  plugins: [],
} 