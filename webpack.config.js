const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  // 输入文件
  entry: './src/main.js',
  output: {
    // 文件名
    filename: 'index.js',
    // 静态目录,从这里取文件
    publicPath:'/dist/',
    // 输出目录
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
        rules: [
            //解析vue后缀文件
            {
              test: /\.vue$/,
              loader: 'vue-loader',
              exclude: /node_modules/
            },
            //用巴babel解析js文件 排除模块安装目录的文件
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            },
            {
                test: /\.css$/, 
                use:['vue-style-loader','css-loader']
            }
        ]
    }
};
