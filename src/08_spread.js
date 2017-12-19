
function sum(augent, addend) {

  return augent + addend;
}

var result = [1, 2];

result = sum(...result);

console.log(`Sum of numbers is: ${result}`);