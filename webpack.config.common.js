var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.css$/,
                loaders: ['raw-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['to-string-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                loaders: ['file-loader?limit=10000']
            },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                loader: 'imports?jQuery=jquery'
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
}