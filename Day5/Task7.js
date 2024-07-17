//  Function parameter with default values

const multiply = (a,b=1) => a*b;

console.log(multiply(5,2)); // Output: 10
console.log(multiply(5)); // Output: 5 (since b defaults to 1)