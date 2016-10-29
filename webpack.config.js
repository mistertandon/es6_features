var webpack = require('webpack');

module.exports = {
    
    entry: './src/07_string_api.js',
    devtool: 'source-map',
    output: {
        filename: './transpile/07_string_api.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "buble"}
        ]
    }
};