const webpack = require('webpack');

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    plugins: [
      new webpack.DefinePlugin({
        URL: JSON.stringify(
          process.env.URL || process.env.DEPLOY_PRIME_URL || '',
        ),
        NETLIFY_BRANCH: JSON.stringify(process.env.BRANCH || 'local'),
      }),
    ],
  });

  return config;
};
