// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

async function asyncFunction() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Async/Await resolved after 2 seconds");
        }, 2000);
    });

    const result = await promise;
    console.log(result);
}

asyncFunction();

/*
->>async marks a function as asynchronous.

->>await pauses the execution of the async function until the promise resolves, and then the resolved value is logged.
*/