exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.merge({
      output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
      },
    })
  }

  return config
}
