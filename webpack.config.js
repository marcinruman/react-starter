const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {

    // input
    entry: [
        './js/client.js'
    ],

    // output
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: debug ? '/' : path.join(__dirname, 'dist'),
    },

    // input
    context: path.join(__dirname, 'src'),

    // transformations
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: [
                        'react-html-attrs',
                        'transform-decorators-legacy',
                        'transform-class-properties',
                        'transform-react-jsx-img-import'
                    ]
                }
            }
        ]
    },

    // sourcemaps
    devtool: debug ? 'source-map' : false,

    // plugins
    plugins: debug ? [] : [
        new ExtractTextPlugin('style.min.css'),
        new webpack.optimize.UglifyJsPlugin(
            {
                mangle: false,
                sourcemap: false
            })
    ]

};
