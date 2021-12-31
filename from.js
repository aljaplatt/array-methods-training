/* FROM 
- creates a shallow copy array-like object 
*/
const str = "1234567";

// we want to convert the above string to [1,2,3,4,5,6,7]

// const res = Array.from(str, mapFn);

// console.log(res); // gives us an array of string numbers ['1', '2' etc ]

// then we need to convert string numbers to numbers
// we can do this by passing the map function as the second parameter
// for from method

function mapFn(x) {
  return Number(x);
}

// const res = Array.from(str, (x) => Number(x));

// console.log(res); // gives us an array of numbers

const res = Array.from(str, Number);
console.log(res); // gives us an array of numbers

// another use case is if you want to remove all the duplicate from an array

const num = [1, 2, 3, 4, 5, 6, 7, 4, 3, 2, 5, 6, 4, 3, 2, 2];

// create a new set which will remove the duplicates, then, create new array

const result = Array.from(new Set(num));

console.log(result);

// this will also work for strings
