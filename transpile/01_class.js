"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Below code demonstrate how to define <class> in es6
 * 
 * Note: To get transpiled script
 * Step 1: Reach up to application root folder
 * Step 2: Run command > npm run build
 */
var TerrestrialAnimalClass = function TerrestrialAnimalClass(name, speed, rank) {
    _classCallCheck(this, TerrestrialAnimalClass);

    this.name = name;
    this.speed = speed;
    this.rank = rank;
};