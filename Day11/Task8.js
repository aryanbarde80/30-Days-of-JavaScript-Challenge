const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), 3000));

Promise.all([promise1, promise2, promise3])
    .then((values) =>{
        console.log(values);
    });

// Promise.all() waits for all promises in the array to resolve and returns an array of resolved values.

// All resolved values are logged together once all promises have completed.