/** @type {import('next').NextConfig} */
const nextConfig = {
}

module.exports = nextConfig


// next.config.js
const withPlugins = require('./node_modules/next-compose-plugins');
const withImages = require('./node_modules/next-images');

module.exports = withPlugins([withImages], {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
});
