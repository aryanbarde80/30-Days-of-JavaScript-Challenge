// Graceful Error Handling in Fetch

// Concept

// The fetch API can return rejected promises, which can be caught with .catch() or try-catch.

// Task 8

fetch("https://invalid-url")
    .then(response => response.json())
    .catch(error => console.log("Fetch Error caught:",error));

// Task 9

async function fetchWithErrorHandling() {
    try{
        const response = await fetch("https://invalid-url");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Async Fetch Error caught:",error);
    }
}
fetchWithErrorHandling();
