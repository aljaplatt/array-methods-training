/* FLAT 
- creats a new array, with all the sub arrays concatenated into it 
*/

// const arr = [1, [2, [3, [4]]]];

// [1,2,3,4]

// const res = arr.flat();

// default is 1 layer

const arr = [1, [2, [3, [4]]]];
// const res = arr.flat(3);
const res = arr.flat(Infinity);
console.log(res); // [1,2,3,4]
