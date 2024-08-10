// Custom Error Objects

// Concept
// You can create custom error classes by extending the built-in Error class.

// Task 4

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    try {
        throw new CustomError("This is a custom error.");
    } catch (error) {
        console.log("Caught:", error.name, "-", error.message);
    }
}

throwCustomError();

// Task 5

function validateInput(input) {
    try{
        if(!input) throw new CustomError("Input cannot be empty.");
    } catch (error) {
        console.log("Caught:", error.name, "-", error.message)
    }
}
validateInput("Hello");
validateInput("");