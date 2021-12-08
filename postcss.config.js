module.exports = {
    plugins: [
      require('tailwindcss'),
      require('postcss-mixins'),
      require('autoprefixer'),
      require('postcss-simple-vars')({ silent: true }),
      require('postcss-import'),
      require('postcss-each'),
      require('postcss-nested')
    ]
  }