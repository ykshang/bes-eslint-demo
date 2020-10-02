var path = require('path')

module.exports = {
  mode: 'development',// 开发环境模式
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'eslint-loader'
        // options: vueLoaderConfig
      },
      {
        test: /\.gadget$/,
        loader: 'eslint-loader',
        // options: vueLoaderConfig
      },
      {
        test: /\.uslx$/,
        loader: 'eslint-loader',
        // options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        // include: vueLoaderConfig
      },
      {
        test: /\.css$/,
        loader: 'eslint-loader',
        // include: vueLoaderConfig
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('@author kangkang shang <535634238@qq.com>')
  ],
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}