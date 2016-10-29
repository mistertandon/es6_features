"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Below code demonstrate how to create <module> in es6
 * 
 * Note: To get transpiled script
 * Step 1: Reach up to application root folder
 * Step 2: Run command > npm run build
 */
var TerrestrialAnimalClass = exports.TerrestrialAnimalClass = function () {
    function TerrestrialAnimalClass(name, speed, rank) {
        _classCallCheck(this, TerrestrialAnimalClass);

        this.name = name;
        this.speed = speed;
        this.rank = rank;
    }

    _createClass(TerrestrialAnimalClass, [{
        key: "getDescription",
        value: function getDescription() {

            return (this.name + " is able to run at " + this.speed + ", having " + this.rank + " rank among fastest animal.").trim();
        }
    }]);

    return TerrestrialAnimalClass;
}();