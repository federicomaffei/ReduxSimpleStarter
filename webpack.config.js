const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-react'].map(require.resolve),
              plugins: [
                ['babel-plugin-transform-object-rest-spread', 'babel-plugin-transform-runtime', 'babel-plugin-transform-object-assign'].map(require.resolve),
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: false,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
          'postcss-loader',
          {
            loader: 'clean-css-loader',
            options: {
              level: 1,
              inline: ['remote']
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('./node_modules/'),
    ]
  },
  output: {
    path: path.join(__dirname, '/public/webpack/'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce(function (o, k) {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {})
    })
  ],
};