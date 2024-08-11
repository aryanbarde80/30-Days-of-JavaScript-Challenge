// Creating and Exporting Modules

// Concept -> export is used to export functions, objects, or primitives from a module so they can be reused in other files.

// Task 1: add.js
export function add(a, b) {
    return a + b;
}

// Task 2: person.js
export const person = {
    name: "John Doe",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

// main.js
import { add } from './add.js';
import { person } from './person.js';

console.log(add(5, 3)); // 8
person.greet(); // Hello, my name is John Doe.
