// Named and default Exports

// Concept ->>
// Named exports allow you to export multiple items from a module.
// Default exports allow you to export a single item that is the default for the module.

// Task 3: utilities.js
export function multiply(a, b) {
    return a*b;
}

export function subtract(a, b) {
    return a - b;
}

// Task 4: calculator.js

export default function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero.");
    return a / b;
}

// main.js
import { multiply, subtract } from './utilities.js';
import divide from './calculator.js';

console.log(multiply(5, 3)); // 15
console.log(subtract(10, 4)); // 6
console.log(divide(10, 2)); // 5