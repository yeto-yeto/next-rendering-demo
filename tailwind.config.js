module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => {
        return {
          ...theme('colors'),
          csr: '#2E94B9',
          ssr: '#FFFDC0',
          ssg: '#F0B775',
          isr: '#D25565',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
