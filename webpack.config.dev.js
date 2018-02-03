const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src',

  entry: {
    app: ['./js/app'],
    common: ['react', 'react-dom', 'react-router']
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js'
  },

  resolve: {
    modules: [
      path.resolve('./src'), 'node_modules'
    ],
    alias: {
      config: path.join(__dirname, '/src/config/environment.dev.js')
    }
  },

  module: {
    rules: [
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/, loaders: [{
            loader: 'style-loader'
        }, {
            loader: 'css-loader'
        }, {
            loader: 'sass-loader', options: {
                paths: [
                    path.resolve(__dirname, "./assets/scss")
                ]
            }
          }
        ]
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.html|\.jpg|\.woff|\.svg|\.ttf|.eot$/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'common', minChunks: Infinity, filename: 'common.bundle.js'}),

    new webpack.LoaderOptionsPlugin({minimize: true, debug: true}),

    new HtmlWebpackPlugin({template: './index.ejs'}),

    new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", Tether: "tether"})
  ],

  devServer: {
    hot: true,
    inline: true,
    stats: {
      colors: true
    },
    port: 9000,
    proxy: {
      '/api/**': {
        target: 'http://www.themealdb.com/',
        secure: false,
        changeOrigin: true
      }
    }
  }
};
