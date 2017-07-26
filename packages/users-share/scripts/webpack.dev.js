const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const path = require('path');

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
    devtool: 'cheap-module-source-map',
    resolve: {
      alias: {
          share: path.resolve(__dirname, '..'), // eg: 'import device from 'share/src/root/device-rn/actionNames';
      },
      extensions: ['.js', '.jsx', '.json', '.less'],
      modules: [
        path.join(__dirname, '..', 'src'),  // eg: 'import device from 'root/device-rn/actionNames';
        'node_modules'
      ],
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
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less-loader',
            },
        ],
    },
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
            'react-native': 'react-native',
        },
        {
            'lodash': 'lodash',
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
    plugins: [new Visualizer()],
};
