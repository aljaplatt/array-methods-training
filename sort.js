/* SORT 
- Sorts the element of array by manipulating array
- default order is ascending 
- converts to a string and compares utf 16 code values


*/

// 1
const names = ["Kelly", "Alex", "Alan", "Jenny", "Emma"];

names.sort(); // Makes names alphabetical - alan, alex emma etc

console.log(names);

// 2

// const numbers = [74, 18, 5, 99, 43, 105];

// numbers.sort(); // 105, 18, 43, 5, 74, 99

// console.log(numbers);

// sort converts elements to strings

// 3 - To sort numerical lowest to higest we need to create a function

// function takes in two paramteters. The result of this function will decide which comes first

function compare(a, b) {
  return a - b;
}
/*
- We have 3 scenarios 
1 - if the return is less than 0, a will come first 
2 - if return = 0 - stay the same 
3 - greater than 0 - b comes first 
*/

const numbers = [74, 18, 5, 99, 43, 105];

numbers.sort(compare); // 5, 18, 43, 74, 99, 105

console.log(numbers);

// 4 - With an array of objects

const products = [
  {
    name: "laptop",
    price: 1000,
  },
  {
    name: "desktop",
    price: 1500,
  },
  {
    name: "phone",
    price: 500,
  },
];

// products.sort();

console.log(products); // nothing changes, but we can make another function

// sort by ascending price - lowest first phone, laptop, desktop
// products.sort((a, b) => {
//   return a.price - b.price;
// });

// highest price first
products.sort((a, b) => b.price - a.price);
