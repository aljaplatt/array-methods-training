/* INDEXOF
- Returns the first index at which a given element can be found inside the array
*/

const names = ["Alex", "Kelly", "Jasien", "Alex"];

// case sensitive
// console.log(names.indexOf("Kelly")); // returns 1

// If you need to swap something out of an array, but you first need to know wht index it is

// const idx = names.indexOf("Kelly"); // returns 1
// if i was to search for cristiano, which deosnt exist in the array, it would return -1.

// names[idx] = "Alice";
console.log(names); // alex, alice, jasien

// const idx = names.indexOf("Cristiano"); // returns 1

// if index is greater than -1, so whatever youre search for is in the array
// if (idx > -1) {
//   console.log("yay we have...");
// } else {
//   console.log("sad...");
// }

// lastIdexof starts at the end
const idx = names.lastIndexOf("Alex"); // returns 1

console.log(idx); // 3
