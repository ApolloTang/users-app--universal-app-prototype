const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ttt = path.join(__dirname, '..');
module.exports = {
    context: path.join(__dirname, '..'),
    entry: {
        bundle: path.join(__dirname, '..', 'src', 'index.js'),
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
    },
    resolve: {
        alias: {
            share: path.resolve(__dirname, '..'),
        },
        extensions: ['.js', '.jsx', '.json', '.less'],
        modules: [path.join(__dirname, '..', 'src'), 'node_modules'],
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less-loader',
                }),
            },

        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true,
            },
            compress: {
                screw_ie8: true,
            },
            comments: false,
        }),
        new ExtractTextPlugin('bundle.css'),
    ],
    // If React is included, if not remove
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react',
            },
        },
        {
            'lodash': 'lodash',
        },
        {
            'react-native': 'react-native',
        },
        {
            'redux': 'redux',
        },
        {
            'react-navigation': 'react-navigation',
        },
        {
            'prop-types': {
                root: 'PropTypes',
                commonjs2: 'prop-types',
                commonjs: 'prop-types',
                amd: 'prop-types',
            },
        },
    ],
};
