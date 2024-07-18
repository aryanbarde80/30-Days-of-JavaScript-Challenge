// Array Methods (Intermediate)

// Task-7
const numbers1 = [1,2,3,4,5];
const doubledNumbers = numbers1.map(number => number*2);
console.log(doubledNumbers);

/*
Callback Function: The map method takes a callback function that is applied to each element of the array. Here, number => number * 2 is the callback function that takes a number and returns its double.
*/

// Task-8
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers2.filter(number => number % 2 === 0);
console.log(evenNumbers);

// Task-9
const numbers = [1, 2, 3, 4, 5];
// Using reduce to sum all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

/*
Callback Function: The reduce method takes a callback function with two parameters:
accumulator: Accumulates the result.
currentValue: The current element being processed in the array.
The second argument (0 in this case) is the initial value of the accumulator.
*/


