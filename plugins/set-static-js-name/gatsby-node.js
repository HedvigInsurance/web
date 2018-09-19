exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
      },
    });
  }
};
