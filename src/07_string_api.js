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

let stringVal = 'hey, how are you.';

if(stringVal.includes('how')){
    
    console.log('String contains <how> word.');
}

if(stringVal.startsWith('hey')){
    
    console.log('String starts with <hey> word.');
}

if(stringVal.endsWith('you.')){
    
    console.log('String ends with <you> word.');
}

let repeatStr = "Danger";
/**
 * 
 * Below code block repeat <repeatStr> string two times i.e DangerDanger
 */
repeatStr.repeat(2);