/*
What is Destructuring?
Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and arrays. It allows you to unpack values from arrays or properties from objects into distinct variables.
*/

/*
Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
*/

const numbers = [10,20,30,40];
const [first, second] = numbers;

console.log(`First: ${first}, Second: ${second}`);

// Explanation: Array destructuring allows you to extract values from an array and assign them to variables in a single statement.


/*
Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
*/

const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
};

const {title,author} = book;

console.log('Title: ${title}, Author: ${author}');

// Explanation: Object destructuring allows you to extract properties from an object and assign them to variables with matching names.