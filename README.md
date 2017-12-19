**es6 features**

**How to get start with this repository**
                
1. Navigate up to root folder i.e es6_features
2. `$ npm install`
3. Do configuration in webpack.config.js file shown below

#### webpack.config.js file　

```javascript
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
```
4. `$ ./node_modules/.bin/webpack` OR `$ npm run build`
