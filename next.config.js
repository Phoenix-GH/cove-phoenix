const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';
const path = require('path');

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/products': { page: '/products' },
      '/checkout': { page: '/checkout',query : { stage: 'customer' }  },
      '/shipping': { page: '/shipping', query : { stage: 'shipping' } },
      '/payment': { page: '/payment', query : { stage: 'payment' } },
      '/cart': { page: '/cart' },
      '/coveclub': { page: '/coveclub' },
    };
  },
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
