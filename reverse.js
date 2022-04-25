/* REVERSE 
- Mutates og array 
- can store in new array 
*/

const numbers = [1, 2, 3, 4, 5];

// numbers.reverse();

// console.log(numbers); // 5,4,3,2,1

// if you dont want to change the og array, store new array and create a shallow copy using the concat method
// const newArr = numbers.concat().reverse();

console.log(numbers);
// console.log(newArr);

// can also use the spread operator instaed of concat - does same thing

const newArr = [...numbers].reverse();

console.log(newArr);

// Reverse the characters inside of a string

const str = "Coding is fun!";

const res = str.split(""); // - Will split every letter into indiv char, and store in an array

const resReverse = res.reverse().join(""); // Will revese the array, join will then join each letter back into a string

console.log(resReverse); // -"!nuf si gnidoC";
