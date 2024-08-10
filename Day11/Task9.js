// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), 3000));

Promise.race([promise1,promise2,promise3])
    .then((value) => {
        console.log(value);
    });

// Promise.race() returns the result of the first promise that resolves (or rejects) among the promises in the array.

// The resolved value of the fastest promise is logged to the console.