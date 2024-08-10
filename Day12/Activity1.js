// Basic Error Handling with Try-Catch

// Concept 
// try blocks contain code that might throw an error.
// catch blocks handle errors if they occur.

// Task1
function throwError() {
    try{
        throw new Error("This is a forced error.");
    } catch (error) {
        console.log("Error caught:", error.message);
    }
}
throwError();

// Task2
function divide(a,b) {
    try{
        if (b === 0) throw new Error("Cannot divide by zero.");
        return a/b;
    } catch (error) {
        console.log("Error:", error.message);
    }
}

console.log(divide(4,2));
console.log(divide(4,0));