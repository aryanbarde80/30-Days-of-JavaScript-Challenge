//  Module Bundling (Optional)

// Concept:
// Module bundlers like Webpack or Parcel combine multiple JavaScript files into a single file, which can be used in a browser.

// Install Parcel
// npm install -g parcel-bundler

// Create an entry file (e.g., index.js)
// index.js
import { multiply } from './utilities.js';
import divide from './calculator.js';

console.log(multiply(5, 3)); // 15
console.log(divide(10, 2)); // 5

// Bundle the modules into a single file
// parcel build index.js
