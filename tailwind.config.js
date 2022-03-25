module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      cyan: '#35CEE6',
      blue: '#3B82F6',
      gray: {
        100: '#C1C1C1',
        200: '#8492a6',
        300: '#404040'
      }
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        'text-main': 'var(--text-main)'
      }
    }
  },
  plugins: []
};
