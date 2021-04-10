const path = require('path');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWepackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: path.resolve(__dirname, './src/app.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [autoprefixer('last 5 versions')]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [autoprefixer('last 5 versions')]
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new UglifyWebpackPlugin(),
        new HtmlWepackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            title: 'Tab',
            chunks: ['app'],
            chunksSortMode: 'manual',
            excludeChunks: ['node_modules'],
            hash: true
        })
    ],
    devServer: {
        open: true,
        port: 2100
    }
}