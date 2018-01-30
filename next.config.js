const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';
const path = require('path');
const getRoutes = require('./routes');

module.exports = {
  exportPathMap: getRoutes,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext].js',
          },
        },
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            extends: path.resolve(__dirname, './.babelrc'),
          },
        },
        'sass-loader',
      ],
    });

    return config;
  },
};
