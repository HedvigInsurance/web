const webpack = require('webpack');

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    plugins: [
      new webpack.DefinePlugin({
        NETLIFY_BRANCH: JSON.stringify(process.env.BRANCH || 'local'),
      }),
    ],
  });

  return config;
};
