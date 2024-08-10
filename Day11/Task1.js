// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promise = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("Promise resolved after 2 seconds");
    })
});

promise.then((message) =>{
    console.log(message);
})

/*
->> new Promise is used to create a promise. It takes a function with resolve and reject as parameters.

->> setTimeout is used to simulate a delay of 2 seconds before resolving the promise with a message.

->> .then() is used to handle the resolved value of the promise, which is logged to the console.
*/