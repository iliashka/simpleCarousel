const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: "./build",
        historyApiFallback: true
    },
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ('style-loader', 'css-loader')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve('./src/index.html'),
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'build'), // change this
        publicPath: '/',
        filename: "bundle.js"
    }
}