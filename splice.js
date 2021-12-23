/*
- remove or replace elements in ana array 
- starting index, count 
- mutates og array and returns 
*/


// 1 - remove last 3 elements of array

// const indx = [0, 1, 2, 3, 4];
const numbers = [1, 2, 3, 4, 5];

// starting index 2, how many you want to remove 3
// const deleted = numbers.splice(2, 3)

// will add 6, 7
// const deleted = numbers.splice(2, 3, 6,7) // array is now - 1,2 6,7

console.log(numbers); // [1, 2]
console.log(deleted); // [3, 4, 5]

// if you want to add in something - 0 says you don't want to remove anything
const deleted = numbers.splice(2, 0, 6,7) // array is now - 1,2 6,7
// console.log(deleted); // [1, 2, 6, 7, 3, 4, 5]