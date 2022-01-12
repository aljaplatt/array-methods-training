/* FIND 
- Search array and return first value that returns a truthy value
- if it doesnt find one, it will return undefined
*/

// find alan and return it
const names = ["Alex", "Kelly", "Alan", "Jenny"];

const res = names.find(findAlan);

function findAlan(item, idx, arr) {
  return item === "Alan";
}

console.log(res); // returns Alan

// in an array of people, find one person then return info on that person

const people = [
  {
    name: "Alex",
    age: 25,
    hobby: "Programming",
  },
  {
    name: "Alan",
    age: 35,
    hobby: "Reading paper",
  },
  {
    name: "Kelly",
    age: 21,
    hobby: "Shopping",
  },
];

// const result = people.find(findKelly);

// function findKelly(person) {
//   return person.name === "Kelly";
// }

// console.log(result); // returns the whole kelly object

// if we only want to return her hobby
const hobby = people.find(findKelly).hobby;

function findKelly(person) {
  return person.name === "Kelly";
}

console.log(hobby); // returns shopping

const camperName = bootcampers.find((camper) => camper.indexOf(randomCamper));

function findCamper(camper) {
  return camper.index === randomCamper;
}

const camperName = bootcampers.find((camper) => camper.indexOf(randomCamper));
