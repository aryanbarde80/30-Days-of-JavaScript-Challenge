// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function asyncFunction() {
    const promise = new Promise((_, reject) =>{
        setTimeout(() => {
            reject("Async/Await rejected after 2 seconds");
        }, 2000);
    });

    try{
        const result = await promise;
        console.log(result);
    } catch(error) {
        console.error(error);
    }
}

asyncFunction();

/*
->>The async function includes a try-catch block to handle errors.
->>If the promise is rejected, the error is caught and logged to the console.
*/