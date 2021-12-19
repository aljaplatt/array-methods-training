/* REDUCE 
- Executes a callback function on every element of an array and returns a single output value.
- adds all to a single value for example.
*/
const numbers = [1, 2, 3, 4, 5, 6];

// const total = numbers.reduce(callback, initialValue);
const total = numbers.reduce(sum, 0);

// accumulator keeps tracks of the value that will be returned at the end

function sum(accumulator, value, index, arr) {
  return accumulator + value;
}

console.log(total); // = 21
