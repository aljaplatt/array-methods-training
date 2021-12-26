/* FILL
- Changes all the elements with a provided value (0)
- mutates og array - numbers 
- returns new array - num2 
- you can also specify start and end index (0,1,4)
- create an array 
*/

const numbers = [1, 2, 3, 4, 5];

// const num2 = numbers.fill(0);

// console.log(numbers); // 0,0,0,0,0,0
// console.log(num2); // 0,0,0,0,0,0

numbers.fill(0, 1, 4);

console.log(numbers); // 1,0,0,0,0,5

// use case, create an array with all the numbers from 1 till n
function fillInNumbers(n) {
  return Array(n) // Creating an array of length n provided by the function
    .fill(0) // filling with 0s - we have to fill with some value
    .map((_, idx) => idx + 1); // loop over and change the elements inside the array by index + 1 (zero index)
}

console.log(fillInNumbers(10)); // 1 - 10
