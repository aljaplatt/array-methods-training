/* FIND INDEX
- Find element and returns index
*/

// const idxx = [0, 1, 2, 3, 5, 5];
const numbers = [1, 2, 3, 4, 5, 6];

const res = numbers.findIndex(findThree);

function findThree(value) {
  return value === 3;
}
console.log(res); // returns 2
