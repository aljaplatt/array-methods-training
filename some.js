/* SOME
- Executes a given function on the elements of an array, and returns true if the callback function returns a truthy value for at least one element.
- if all return false, cb function will also return false 
- gets item, index, array 
*/

const numbers = [1, 2, 3, 4, 5];

const result = numbers.some(greaterThanFour);

// loops over the array, looking for item greater than 4
function greaterThanFour(item, idx, arr) {
  return item > 4;
}

console.log(result); // true

// array of of objects of people, check if at least one person is an adult

const persons = [
  {
    name: "Alex",
    age: 35,
  },
  {
    name: "James",
    age: 20,
  },
  {
    name: "Devon",
    age: 16,
  },
];
const res = persons.some(isAdult);

function isAdult(person) {
  return person.age >= 18;
}

console.log(res); // true

const res = Math.floor(Math.random() * numbers.length);

console.log(res);
