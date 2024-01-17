/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#000000', // Example dark mode primary color
          secondary: '#333333', // Example dark mode secondary color
          // Add more dark mode color variations as needed
        },
        light: {
          primary: '#ffffff', // Example light mode primary color
          secondary: '#f8f8f8', // Example light mode secondary color
          // Add more light mode color variations as needed
        },
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'full': '9999px',
      },
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
  },
  plugins: [],
}
