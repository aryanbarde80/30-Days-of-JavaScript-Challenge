import { add } from './add.mjs';
import { person } from './person.mjs';
import { multiply, subtract } from './utilities.mjs';  // Combine the imports
import divide from './calculator.mjs';
import * as math from './constants.mjs';
import _ from 'lodash';
import axios from 'axios';

// Existing operations
console.log(add(5, 3)); // 8
person.greet(); // Hello, my name is John Doe.

console.log(multiply(5, 3)); // 15
console.log(subtract(10, 4)); // 6
console.log(divide(10, 2)); // 5

console.log(math.PI); // 3.14159
console.log(math.circumference(10)); // 62.8318
console.log(math.area(5)); // 78.53975

const numbers = [1, 2, 3, 4, 5];
console.log(_.shuffle(numbers)); // Randomly shuffled array

axios.get('https://api.github.com/users/octocat')
    .then(response => console.log(response.data))
    .catch(error => console.log("Error:", error));

// Removed duplicate imports and debugging section
