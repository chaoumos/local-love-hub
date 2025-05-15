/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        background: '#F7F7F7',
        text: '#333333',
      },
      fontFamily: {
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
        'serif': ['Times New Roman', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}