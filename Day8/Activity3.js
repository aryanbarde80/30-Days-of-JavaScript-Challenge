/*
What are Spread and Rest Operators?
The spread operator (...) expands an iterable (like an array) into individual elements. The rest operator (...) collects all remaining elements into an array. These operators simplify array and object manipulation and function arguments handling.

Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
*/

const existingArray = [1,2,3];

//use the spread operator to creat a new array with additional elements
const newArray = [...existingArray, 4, 5];

console.log(newArray);

// Explanation: The spread operator (...) allows you to expand elements of an iterable (like an array) into another array or function call.

/*
Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
*/

function sum(...numbers) {
    return numbers.reduce((total,num) => total + num,0);
}

console.log(sum(1,2,3,4,5)); //Output:15

// Explanation: The rest operator (...) allows a function to accept an indefinite number of arguments as an array.