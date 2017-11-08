var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "url-loader?limit: 20000"
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components|public\/)/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { config: { path: path.join(__dirname, 'postcss.config') } } },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    watchContentBase: true,
    host: 'localhost',
    port: 3000
  }
}