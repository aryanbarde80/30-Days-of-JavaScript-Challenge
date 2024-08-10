// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })

    .catch((error) => {
        console.error('Error:', error);
    });

    /*
    ->>fetch() is used to make HTTP requests. It returns a promise.
    ->>The response is converted to JSON format using .json().
    ->>The data is logged to the console, and any errors are handled using .catch().
    */