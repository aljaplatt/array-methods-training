/*
MAP 

- Executes a given function on every element from an array and RETURNS A NEW ARRAY
- MUST SAVE NEW ARRAY IN A NEW VARIABLE
- Can take 3 parameters - current value, index, array.

*/
//1
const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(double);

function double(value, index, arr) {
  return value * 2;
}

console.log(numbersDouble);

//2
function multiply(value, index, arr) {
  return value * index;
}

const numbersMultiply = numbers.map(multiply);

console.log(numbersMultiply);
