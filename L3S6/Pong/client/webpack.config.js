// fichier webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
  
const PRODUCTION = true;

module.exports = {
  entry: './src/scripts/pong.js',
  mode : 'surveillance',
  output: {
    path: path.resolve(__dirname, '../server/public'),
    filename: 'scripts/bundle.js'
  },

  mode :  (PRODUCTION ? 'production' : 'development'),
  devtool : (PRODUCTION ? undefined : 'eval-source-map'),

  devServer: {
    static: {
       publicPath: path.resolve(__dirname, '../server/public'),
       watch : true
    },
    host: 'localhost',    
    port : 8085,      
    open : true
},

  module: {
    rules : [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },


      {
        test: /\.(png|jpg|gif)/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name : '[name].[ext]',
              outputPath : 'images'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    
    new CopyPlugin({
	    patterns: [
		    {
          from: 'src/images/*',
          to:  'images/[name][ext]'
		    },
        {
            from: 'src/style/*',
            to:  'style/[name][ext]'
        },        
	    ]
	  })
  ]
}; 