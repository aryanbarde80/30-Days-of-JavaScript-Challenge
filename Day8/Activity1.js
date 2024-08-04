// Template Literals

/*
What are Template Literals?
Template literals are string literals that allow embedded expressions. They are enclosed by backticks (`) instead of double or single quotes and can contain placeholders indicated by the dollar sign and curly braces (${expression}). This feature makes it easier to create multi-line strings and concatenate strings with variables.
*/

// Task1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const name = 'John';
const age = 25;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);

// Explanation: Template literals use backticks (``) instead of quotes. 
// Variables can be embedded directly using ${variableName}.



// Task2 : Create a multi-line string using template literals and log it to the console.

const multiLineString = `This is line 1.
This is line 2.
This is line 3.`;

console.log(multiLineString);

// Explanation: Template literals allow for multi-line strings without using concatenation or escape characters.