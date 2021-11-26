module.exports = {
  publicPath: '/google-calendar/',
  outputDir: 'docs',

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
      ],
    },    
  }
}