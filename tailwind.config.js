module.exports = {
  purge: [],
  darkMode: 'class', // or 'media - is going to allow device to control the dark mode' or 'class'false
  theme: {
    debugScreens: {
      position: ['top', 'left']
    },
    extend: {
      fontFamily: {
        // by this we defined our own font -> nice
        headline: ["Oswald"]
      },
      colors: {
        // mainColor is our name, we can put it whatever we want
        // so we extended again the tailwin! nice!
        mainColor: '#212f49'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}
