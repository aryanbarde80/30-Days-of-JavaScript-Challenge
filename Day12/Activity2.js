// Finally Block

// Concept

// The finally block is used to execute code after try and catch blocks, regardless of the result.

function demoFinally() {
    try {
        console.log("Try block running.");
    } catch (error) {
        console.log("Catch block running:", error.message);
    } finally {
        console.log("Finally block running.");
    }
}