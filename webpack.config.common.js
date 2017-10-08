var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/app/main.ts'
    },
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
                loaders: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url-loader?limit=10000'
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