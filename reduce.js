/* REDUCE 
- Executes a callback function on every element of an array and returns a single output value.
- adds all to a single value for example.

*/
//1
const numbers = [1, 2, 3, 4, 5, 6];

// const total = numbers.reduce(callback, initialValue);
// 0 - Starts FROM 0, IF 3, WOULD = 24
// const total = numbers.reduce(sum, 0);
const total = numbers.reduce(sum, 3);

// accumulator keeps tracks of the value that will be returned at the end
// value - current value at that iteration

function sum(accumulator, value, index, arr) {
	return accumulator + value;
}

console.log(total); // = 21 with 0

//2 - return highest number in array
const moreNumbers = [1, 2, 3, 20, 4, 5, 6];
// -infinity =
const max = moreNumbers.reduce(callback, -Infinity);

function callback(accumulator, value, index, arr) {
	if (accumulator > value) {
		return accumulator;
	} else {
		return value;
	}
}

console.log(max);

function addTwo(acc, val) {
	if (val >= 10 && val <= 99) return val;
}

const ans = moreNumbers.reduce(addTwo, 0);
console.log(ans);

//3

const store = [
	{
		name: 'laptop',
		price: 1000,
		count: 5,
	},
	{
		name: 'desktop',
		price: 1500,
		count: 2,
	},
	{
		name: 'phone',
		price: 500,
		count: 12,
	},
];

// Whats the worth for all the products in the store? item - price

const totalValue = store.reduce(
	(acc, item) => acc + item.price * item.count,
	0
);

console.log(totalValue);

const rainJanuaryByWeek = [10, 20, 0, 122];

const totalRainfallJanuary = rainJanuaryByWeek.reduce(
	(total, item) => total + item,
	48
);

console.log(totalRainfallJanuary);

const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73];

const classAvr = grades.reduce((total, item) => total + item) / grades.length;

console.log(`The class average is ${classAvr}`);
