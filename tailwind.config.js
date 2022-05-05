module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#ffff',
      cyan: {
        100: '#48dbfb',
        200: '#0abde3'
      },
      red: {
        100: '#e84118',
        200: '#c23616'
      },
      yellow: {
        100: '#ffdd59',
        200: '#ffd32a'
      },
      blue: '#3B82F6',
      green: '#9EE70C',
      gray: {
        100: '#dcdde1',
        200: '#C1C1C1',
        300: '#8492a6',
        400: '#404040'
      }
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        'text-main': 'var(--text-main)'
      },

      fontFamily: {
        vazir: ['vazirmatn', 'vazir-font']
      }
    }
  },
  plugins: []
};
