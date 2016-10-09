var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var paths = {
  entryUrl: './app/app.js',
  outputUrl: './temp/js',
  indexUrl: './app/index.html',
  indexUrlDest: '../index.html',
  assetsUrl: './app/assets',
  assetsUrlDest: '../assets',
};

module.exports = {
  devServer: {
    inline: true,
    contentBase: 'temp',
    port: 3000
  },
  entry: paths.entryUrl,
  output: {
    path: paths.outputUrl,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss', '.sass']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$|\.scss$|\.sass$/,
        loader: 'style!css!sass',
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['temp'], {
    //   root: './',
    //   verbose: true,
    //   dry: false,
    //   exclude: []
    // }),
    new CopyWebpackPlugin([
      {
        from: paths.indexUrl,
        to: paths.indexUrlDest
      },
      {
        context: paths.assetsUrl,
        from: '**/*',
        to: paths.assetsUrlDest
      }
    ], {
      ignore: [
        '*.scss',
      ]
    })
  ]
};
