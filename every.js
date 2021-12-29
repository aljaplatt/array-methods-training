/* EVERY 
- Executes a given function on every item in the array 
- returns true if the callback function returns a truthy value all items in the array
- if a falsey value is found, false will be returned immediately
*/

//1
const numbers = [1, 2, 3, 4, 5];
const numbersAgain = [-1, 1, 2, 3, 4, 5];

// check all numbers are positive
// method requires a callback function (value, index, array)
const res = numbers.every(isPositive);
const res2 = numbersAgain.every(isPositive);

// return if item is greater than zero
function isPositive(item, index, arr) {
  return item > 0;
}

console.log(res); // true
console.log(res2); // false

//2
// test if all objects in array have a certain property
// each has a name property except the last one.

const persons = [
  {
    name: "Alex",
  },
  {
    name: "Kelly",
  },
  {
    name: "Alan",
  },
  {
    // surname: "Platt",
    name: "Platt",
  },
];

// for every person, we test if the person.name doesnt not equal undefined
const result = persons.every((person) => person.name !== undefined);

console.log(result); // last one is surname = false / changed to name = true

// 3
// array of arrays, check if all the arrays are arrays
const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  //   [7, 8, 9],
  "123",
];

const arrResult = arrays.every((arr) => Array.isArray(arr));

console.log(arrResult); // true //'123' = false
