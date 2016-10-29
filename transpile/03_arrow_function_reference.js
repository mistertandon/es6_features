'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Below code demonstrate reference of <Arrow function>.
 * 
 * Note: To get transpiled script
 * Step 1: Reach up to application root folder
 * Step 2: Run command > npm run build
 */
var TerrestrialAnimal = function () {
    function TerrestrialAnimal() {
        var animalsName = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        _classCallCheck(this, TerrestrialAnimal);

        this.animalsName = animalsName;
    }

    _createClass(TerrestrialAnimal, [{
        key: 'getAnimalNameUsingArrowFunction',
        value: function getAnimalNameUsingArrowFunction() {
            var _this = this;

            console.log('Demonstrate this pseudo variable value while using arrow funtion');
            this.animalsName.forEach(function (animalName) {

                console.log(_this);
            });
        }
    }, {
        key: 'getAnimalNameUsingGeneralFunction',
        value: function getAnimalNameUsingGeneralFunction() {

            console.log('Demonstrate this pseudo variable value while using general funtion');
            this.animalsName.forEach(function (animalName) {

                console.log(this);
            });
        }
    }]);

    return TerrestrialAnimal;
}();

var terrestrialAnimalObj = new TerrestrialAnimal(['Lion', 'Camel', 'Panther']);
terrestrialAnimalObj.getAnimalNameUsingArrowFunction();
terrestrialAnimalObj.getAnimalNameUsingGeneralFunction();