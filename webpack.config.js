let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: path.join(__dirname, './src/assets'),
}
const PAGES_DIR = `${PATHS.src}/pug/pages/`

module.exports = {
  mode: 'development',
  entry: {
    color_type: `${PAGES_DIR}ui_kit/color_type/color_type.js`,
    form_elem: `${PAGES_DIR}ui_kit/form_elem/form_elem.js`,
    headers_and_footers: `${PAGES_DIR}ui_kit/headers_and_footers/headers_and_footers.js`,
    cards: `${PAGES_DIR}ui_kit/cards/card.js`,
    landing_page: `${PAGES_DIR}website/landing_page/landing_page.js`,
    search_room_filter: `${PAGES_DIR}website/search_room_filter/search_room_filter.js`,
    vendors: [
      "webpack-material-design-icons"
      ]
  } ,
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // { 
      //   test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/, 
      //   loader: 'file-loader',
      //   options: {
      //     name: 'fonts/mat_icons/[name].[ext]'
      //   }
      // },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true, // map for development
            },
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
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
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
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
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    
    new HtmlWebpackPlugin({
        filename: 'color_type.html',
        template: `${PAGES_DIR}ui_kit/color_type/color_type.pug`,
        chunks: ['color_type']
      }),

    new HtmlWebpackPlugin({
    filename: 'form_elem.html',
    template: `${PAGES_DIR}ui_kit/form_elem/form_elem.pug`,
    chunks: ['form_elem']
    }),

    new HtmlWebpackPlugin({
    filename: 'cards.html',
    template: `${PAGES_DIR}ui_kit/cards/cards.pug`,
    chunks: ['cards']
    }),    
    new HtmlWebpackPlugin({
      filename: 'headers_and_footers.html',
      template: `${PAGES_DIR}ui_kit/headers_and_footers/headers_and_footers.pug`,
      chunks: ['headers_and_footers'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'landing_page.html',
      template: `${PAGES_DIR}website/landing_page/landing_page.pug`,
      chunks: ['landing_page']
    }),
    new HtmlWebpackPlugin({
      filename: 'search_room_filter.html',
      template: `${PAGES_DIR}website/search_room_filter/search_room_filter.pug`,
      chunks: ['search_room_filter']
    }),
    new CopyPlugin({
      patterns:  [
        { from: `${PATHS.assets}/fonts/Montserrat`, to: `${PATHS.dist}/fonts/Montserrat` }
      ]
    }),
    new CopyPlugin({
      patterns:  [
        { from: `${PATHS.assets}/icons`, to: `${PATHS.dist}/icons` }
      ]
    })
  ]
};
