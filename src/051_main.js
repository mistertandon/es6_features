/**
 * Below code demonstrate how to define <class> in es6
 * 
 * Note: To get transpiled script
 * Step 1: Reach up to application root folder
 * Step 2: Create webpack.config.js file 
 * Step 3: Define neccessary key to get transpiled scripts using webpack
 
    Demo code: 

    var webpack = require('webpack');

    module.exports = {

        entry: './src/051_main.js',
        output: {
            filename: './transpile/051_main.js'
        }
    }; 

 * Step 4: Run command > webpack
 */

import {TerrestrialAnimalClass} from "./051_module";

let terrestrialAnimalClassI = new TerrestrialAnimalClass('Lion', 55, 6);
let terrestrialAnimalDescription = terrestrialAnimalClassI.getDescription();

console.log(terrestrialAnimalDescription);