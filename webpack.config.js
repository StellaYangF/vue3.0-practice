const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = (...args) => path.resolve(__dirname, ...args);

module.exports = {
    entry: resolve('./src/index.js'),
    output: {
        path: resolve('./dist'),
        filename: '[id].js',
    },
    resolve: {
        modules: [resolve('./packages'), 'node_modules'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('./public/index.html'),
        }),
    ]
}