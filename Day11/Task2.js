// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const promise = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Promise rejected after 2 seconds");
    },2000);
});

promise.catch((error) =>{
    console.error(error);
})

/*
->> Here, _ is used in place of resolve since we are focusing on rejection.
->> The promise is rejected after 2 seconds, and .catch() is used to handle the error and log it to the console.
*/