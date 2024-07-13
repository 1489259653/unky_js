module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist/',
  },
  module: {
    rules: [
      // 用于处理 CSS 文件的规则
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
      // 其他规则...
    ],
  },
};