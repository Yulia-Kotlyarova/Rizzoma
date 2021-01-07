let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    cards: path.resolve(__dirname, './src/pug/pages/ui_kit/cards/card.js')
  } ,
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    // }),

    // new CleanWebpackPlugin({
    //   cleanStaleWebpackAssets: false,
    //   cleanOnceBeforeBuildPatterns: ['**/*', '!files*', '!files/*.jpg', '!files/*.mp3'],
    // }),
    new HtmlWebpackPlugin({
        filename: 'color_type.html',
        template: path.resolve(__dirname, './src/pug/pages/ui_kit/color_type/color_type.html'),
        chunks: ['color_type']
      }),

    new HtmlWebpackPlugin({
    filename: 'form_elem.html',
    template: path.resolve(__dirname, './src/pug/pages/ui_kit/form_elem/form_elem.html'),
    chunks: ['form_elem']
    }),

    new HtmlWebpackPlugin({
    filename: 'cards.html',
    template: path.resolve(__dirname, './src/pug/pages/ui_kit/cards/cards.html'),
    chunks: ['cards']
    }),

    new HtmlWebpackPlugin({
      filename: 'headers_and_footers.html',
      template: path.resolve(__dirname, './src/pug/pages/ui_kit/headers_and_footers/headers_and_footers.html'),
      chunks: ['headers_and_footers']
    }),
    new HtmlWebpackPlugin({
      filename: 'landing_page.html',
      template: path.resolve(__dirname, './src/pug/pages/website/landing_page/landing_page.html'),
      chunks: ['landing_page']
    }),

    // new CopyPlugin([
    //   { from: '../../../../assets', to: 'src/assets' },
    //   // { from: 'src/icons', to: 'icons' },
    //   // { from: 'src/assets/', to: '' },
    // ]),
  ]
};