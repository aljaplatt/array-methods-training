/* Filter method
- create a new array - tests array for a condition.
- if the condition is true, then it will be returned.
*/

//1
const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}

console.log(even);

//2
const people = [
  {
    name: "Alex",
    age: 21,
  },
  {
    name: "Chris",
    age: 51,
  },
  {
    name: "Kelly",
    age: 23,
  },
];

const adults = people.filter((person) => person.age >= 18);

console.log(adults);

//3

const moreNumbers = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6, 3];

const nums = moreNumbers.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});

console.log(nums);
