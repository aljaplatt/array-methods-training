const numbers = [1, 2, 3, 4, 5];
const letters = ["a", "b", "c", "c", "a", "d", "e", "z", "a", "b"];

// numbers.forEach(consoleItem);

// function consoleItem(item, index, arr) {
//   console.log(item);
// }

// function consoleItem(item, index, arr) {
//   console.log("numbers index[" + index + "] = " + item);
// }

// numbers.forEach((item, index, arr) => {
//   console.log("numbers index[" + index + "] = " + item);
// });

let sum = 0;

numbers.forEach((item) => {
  sum += item;
});
console.log(sum);

// object keeps count of each letter
let count = {};

letters.forEach((item) => {
  // if the count of item/ if we have a property inside the object with the item, add 1
  if (count[item]) {
    count[item]++;
    // if we don't have a property, initialise with value 1.
  } else {
    count[item] = 1;
  }
});

console.log(count);
