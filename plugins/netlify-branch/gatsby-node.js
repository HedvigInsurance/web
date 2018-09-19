const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.DefinePlugin({
        'process.env.URL': JSON.stringify(process.env.URL),
        NETLIFY_BRANCH: JSON.stringify(process.env.BRANCH || 'local'),
      }),
    ],
  });
};
