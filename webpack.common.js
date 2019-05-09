const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js'
  },
  plugins: [
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs'
          }
        }
      }
    ]
  }
}