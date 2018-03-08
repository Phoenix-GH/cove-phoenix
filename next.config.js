const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';
const path = require('path');
const getRoutes = require('./routes');

module.exports = {
  exportPathMap: getRoutes,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext]',
            },
          },
          'babel-loader',
          'styled-jsx-css-loader',
        ],
      }
    );

    return config;
  },
};
