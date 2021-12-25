/* CONCAT
Merge 2 or more arrays into a new array
- want change og arrays - a, b, d  - produces new one
 */

// 1
const a = [1, 2, 3];
const b = [4, 5, 6];

// const c = a.concat(b);

// console.log(c); // 1-6

// 2
// if you then wanted to add another array

const d = [7, 8, 9];

// const c = a.concat(b, d);

// console.log(c); // 1-9

// 3

// const c = a.concat(); // produces a shallow copy of a
// c.push(4); // this wont change a
// console.log(c);
// console.log(a); // stays 3

// 4 Can use concat in a similar way to push

const c = a.concat(1, 2, 3, a); // 1,2,3,1,2,3

console.log(c);
