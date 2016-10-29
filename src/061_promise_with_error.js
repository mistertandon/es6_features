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

var timer = new Promise(function (resolve, reject) {

    setTimeout(function () {

        console.log('TaskRef#ASYNCH: Asynchronous code is in process and imagine that an error occured.');

        reject(Error('Throw error manually to demonstrate ES6 promise functionality with error occured. '));
    }, 2000);
});

timer.then(function () {

    console.log('After executing asynchronous code (TaskRef#ASYNCH) then part will be called.');
}, function(error){
    
    console.log('=======Promise [then] part where error message is used to display, called immediate after reject =========');
    console.log('Error occured while executing asynchronous code having reference TaskRef#ASYNCH');

    console.log(error.message);
});