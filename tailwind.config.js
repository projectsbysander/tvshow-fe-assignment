module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--primary-font)', 'Inter', 'sans-serif'],
        secondary: ['var(--secondary-font)', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        main: 'var(--main-color)',
        text: 'var(--text-color)',
        shaded: 'var(--shaded-color)',
      },
      backgroundColor: {
        primary: 'var(--primary-color)',
        main: 'var(--main-color)',
        shaded: 'var(--shaded-color)',
      },
      borderColor: {
        primary: 'var(--primary-color)',
        main: 'var(--main-color)',
        shaded: 'var(--shaded-color)',
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-in-out',
        fadeUpSm: 'fadeUpSm 0.6s ease-in-out',
        fadeInMd: 'fadeInMd 1s ease-in-out',
        fadeInLg: 'fadeInLg 1s ease-in-out',
      },
      keyframes: (theme) => ({
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeUpSm: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInMd: {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.3 },
        },
        fadeInLg: {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.8 },
        },
      }),
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailwindcss-animation-delay'),
  ],
}
