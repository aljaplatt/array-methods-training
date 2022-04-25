/* JOIN 
- Creates a new string from an array by concatenating all the elements from the array.
- by default it uses a comma as a separater, but you can change this 
*/

const countries = ["UK", "Malaysia", "Anguilla"];

// const res = countries.join();

// console.log(res); // UK,Malaysia,Anguilla - no spaces

// const res = countries.join(" - ");
const res = countries.join(",  "); //  comma, space
// const res = countries.join(""); // - no sep

console.log(res); // UK - Malaysia - Anguilla
console.log(`I want to visit ${res}`);
