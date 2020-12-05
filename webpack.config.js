let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    cards: path.resolve(__dirname, './src/ui_kit/cards.js')
  } ,
  output: {
    path: path.resolve(__dirname, 'dist')
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
      filename: './pug/pages/ui_kit/cards/cards.html',
      template: path.resolve(__dirname, '../src/ui_kit/cards.html'),
      chunks: ['cards']
    })
  ]
};