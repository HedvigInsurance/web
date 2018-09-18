const webpack = require('webpack');

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    plugins: [
      new webpack.DefinePlugin({
        'process.env.URL': JSON.stringify(process.env.URL),
        NETLIFY_BRANCH: JSON.stringify(process.env.BRANCH || 'local'),
      }),
    ],
  });

  return config;
};
