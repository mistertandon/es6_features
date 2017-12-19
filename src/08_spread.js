
function sum(...numbers) {

  return numbers.reduce(function (prev, next) {
    return prev + next;
  })
}

var result;

result = sum(1, 2, 3, 4, 5);

console.log(`Sum of numbers is: ${result}`);