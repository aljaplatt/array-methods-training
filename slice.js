/* -- SLICE
- Returns a shallow copy of a poprtion of an array
- it wont modify the original array
- Provide the begining index and the end index (0, 2) for example
*/

// const indx = [0, 1, 2, 3, 4];
const numbers = [1, 2, 3, 4, 5];
const participants = ["Sinead", "Amrit", "Alex", "Chris", "Jasien"];

// By default, the starting index is 0, and the ending index is array.length
// we want to new array  of numbers 2-4 - This would equate to 1-4 in the index
// the last index is not inc.
// we keep the og array - unmutated
// numbers.slice() will give a shallow copy of the og array
// negative number will start from the end
const newNumbers = numbers.slice(1, 4);

console.log(newNumbers); // [2,3,4]

const fromEndNumbers = numbers.slice(-3);

console.log(fromEndNumbers); // [3,4,5]

const startAtIndexOneNumbers = numbers.slice(1); // [2,3,4,5]

// Participants - we have five but only want to show the first 3.

const winners = participants.slice(0, 3);

console.log(winners); // "Sinead", "Amrit", "Alex"
