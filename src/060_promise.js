/**
 * Below code demonstrate how to use <promise> in es6
 * 
 * Note: To get transpiled script
 * Step 1: Reach up to application root folder
 * Step 2: Run command > npm run build
 */

var timer = new Promise(function (resolve, reject) {

    setTimeout(function () {

        console.log('TaskRef#ASYNCH: Asynchronous code is in process');
        resolve();
    }, 2000);
});

timer.then(function () {

    console.log('After executing asynchronous code (TaskRef#ASYNCH) then part will be called.');
});
