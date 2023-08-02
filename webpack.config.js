const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.[fullhash].js',
        publicPath: 'auto',
        path: path.resolve(process.cwd(), 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: 'public/*.json', to: '[name][ext]' }],
        }),
        // new BundleAnalyzerPlugin(),
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
    },
    resolve: {
        fallback: {
            'obliterator/chain': require.resolve('obliterator/chain'),
            'obliterator/iterator': require.resolve('obliterator/iterator'),
            'obliterator/take': require.resolve('obliterator/take'),
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
