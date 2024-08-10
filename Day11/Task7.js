// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchData() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error('Error:',error);
    }
}

fetchData();

/*
->>The fetch API is used with async/await for a more readable and synchronous-looking code.
->>The response is awaited, and the data is logged. Any errors are caught and logged.
*/