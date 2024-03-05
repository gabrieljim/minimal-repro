
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    target: 'node',

    entry: {
        app: './src/index.ts',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                  path.resolve(__dirname, 'node_modules'),
                  path.resolve(__dirname, 'libs/@defined/sdk')
                ],
            },
            {
                test: /README$/,
                use: 'null-loader',
            },
            {
                test: /\.(cs|html)$/,
                use: 'null-loader',
            }
        ],
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        // ignored: ['/node_modules/', '../node_modules/', '../shared/node_modules/', '../frontend/node_modules/', '!../shared/**'],
        ignored: ['/node_modules/'],
    },

};
