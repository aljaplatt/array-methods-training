/*
MAP 

- Executes a given function on every element from an array and RETURNS A NEW ARRAY
- MUST SAVE NEW ARRAY IN A NEW VARIABLE
- Can take 3 parameters - current value, index, array.

*/
//1
const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(double);

function double(value, index, arr) {
	return value * 2;
}

console.log(numbersDouble);

//2
function multiply(value, index, arr) {
	return value * index;
}

const numbersMultiply = numbers.map(multiply);

console.log(numbersMultiply);

//3
const products = [
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
//a
// const totalProductsValue = products.map((item) => item.price * item.count);

//b - Here we return an an array of objects with extra info.
const totalProductsValue = products.map(item => ({
	name: item.price,
	totalValue: item.price * item.count,
}));

console.log(totalProductsValue);

//4 - convert an array of strings to numbers using map

const str = ['1', '2', '3', '4'];

const num = str.map(Number);

console.log(num);

str.forEach(str => Number(str) * 2);

console.log(str);
