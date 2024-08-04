/* What are Enhanced Object Literals?
Enhanced object literals allow you to define object properties, methods, and computed property names more concisely. This includes shorthand property names, method definitions, and dynamic property names using expressions.

Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. */

// function to calculate age

function calculateAge(yearOfBirth) {
    return new Date().getFullYear() - yearOfBirth;
}

// Using the enhanced object literals to create an object with methods and properties

const person = {
    name: 'Alice',
    yearOfBirth: 1990,
    age: calculateAge(1990),
    greet() {
        console.log(`Hi, I'm ${this.name} and I am ${this.age} years old.`);
    }
};

// Log the object to the console
console.log(person);

// It allow you to define methods and properties more concisely.

/*Task 9: Create an object with computed property names based on variables and log the object to the console. */

const propName1 = 'firstName';
const propName2 = 'lastName';

// Use computed property names to create an object
const user = {
    [propName1]: 'Jane',
    [propName2]: 'Doe'
};

// Log the object to the console
console.log(user);

// Explanation: Computed property names allow you to use the value of a variable as a property name in an object literal.