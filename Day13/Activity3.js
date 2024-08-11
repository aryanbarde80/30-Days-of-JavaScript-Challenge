// Importing Entire Modules

// Concept->> You can import an entire module as an object and access its exports as properties.

// Task 5: constants.js
export const PI = 3.14159;
export function circumference(radius) {
    return 2 * PI * radius;
}

export function area(radius) {
    return PI * radius * radius;
}

// main.js
import * as math from './constants.js';

console.log(math.PI); // 3.14159
console.log(math.circumference(10)); // 62.8318
console.log(math.area(5)); // 78.53975
