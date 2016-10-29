/**
 * Below code demonstrate how to use <let>, <var> and <const> in es6
 * 
 * Note: To get transpiled script
 * Step 1: Reach up to application root folder
 * Step 2: Run command > npm run build
 */
var var_A = 'var_A';

function letVarConst(){
    
var var_A = 'var_B';

    console.log('Into letVarConst function.');
    console.log(var_A);
    
}
letVarConst();
console.log('After letVarConst function.');
console.log(var_A);

const months = ['January', 'Feburary'];
console.log(months);

/**
 * Following Re-assignment will cause an error as constant can not be
 * re-assigned.
 * Un-comment to see result.
 */
//months = ['March', 'April'];

/**
 * Note: <const> is not pure immutable.
 * 
 * Below statement will produce no error.
 */
months.push('May');
console.log(months);


