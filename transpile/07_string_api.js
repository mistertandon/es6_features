/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	/**
	 * Below code demonstrate how to use <promise> with error occured while process
	 * asynchronous code in es6
	 * 
	 * Note: To get transpiled script
	 * Step 1: Reach up to application root folder
	 * Step 2: Run command > npm run build
	 * 
	 * Imp Note: Do the following modification into package.json
	 * 
	 *  "scripts": {
	    "build": "webpack"
	  }
	
	 */
	
	console.log('=>'.repeat(5)+ ' ES6 String API demostration '+'<='.repeat(5));
	
	var stringVal = 'hey, how are you.';
	
	if(stringVal.includes('how')){
	    
	    console.log('String contains <how> word.');
	}
	
	if(stringVal.startsWith('hey')){
	    
	    console.log('String starts with <hey> word.');
	}
	
	if(stringVal.endsWith('you.')){
	    
	    console.log('String ends with <you> word.');
	}
	
	var repeatStr = "Danger";
	/**
	 * 
	 * Below code block repeat <repeatStr> string two times i.e DangerDanger
	 */
	repeatStr.repeat(2);

/***/ })
/******/ ]);
//# sourceMappingURL=07_string_api.js.map