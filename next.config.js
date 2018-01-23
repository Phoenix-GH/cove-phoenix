const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';
const path = require('path');

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/products': { page: '/products' },
      '/checkout/customer': { page: '/checkout', query: { stage: 'customer' }  },
      '/checkout/shipping': { page: '/checkout', query: { stage: 'shipping' } },
      '/checkout/payment': { page: '/checkout', query: { stage: 'payment' } },
      '/cart': { page: '/cart' },
      '/coveclub': { page: '/coveclub' },
      '/account': { page: '/account' },
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
