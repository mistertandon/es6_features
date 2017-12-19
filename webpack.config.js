var webpack = require('webpack');

module.exports = {

    entry: './src/08_spread.js',
    devtool: 'source-map',
    output: {
        filename: './transpile/08_spread.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "buble" }
        ]
    }
};