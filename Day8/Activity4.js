/*What are Default Parameters?
Default parameters allow you to initialize function parameters with default values if no argument or undefined is passed.

Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter. */

function multiply(a,b=1){
    return a*b;
}

console.log(multiply(5,2));
console.log(multiply(5));

// Explanation: Default parameters allow you to specify default values for function parameters if no argument is provided.