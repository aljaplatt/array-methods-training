/* INCLUDES
- Find if an element is included inside an array
*/

const names = ["Alex", "Kelly", "Emma"];

const res = names.includes("Alex"); // returns true

console.log(res);

//

const fruits = ["Apple", "Orange", "Mango"];

const result = fruits.includes("Mango"); // returns true

if (result) {
  console.log("Yay!");
} else {
  console.log("Sad, lets buy a Mango");
}
