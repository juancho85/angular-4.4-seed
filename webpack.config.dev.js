var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/app/main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: 'awesome-typescript-loader', options: {
                        transpileOnly: true
                    }},
                    { loader: 'angular2-template-loader' },
                    { loader: 'angular-router-loader' }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});