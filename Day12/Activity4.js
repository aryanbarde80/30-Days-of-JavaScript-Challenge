// Error Handling in Promises

// Concept

// .catch() handles promise rejections.
// try-catch can be used in async functions to handle errors.

// Task 6

function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5){
            resolve("Success!");
        } else {
            reject("Failure!");
        }
    });
}

randomPromise()
    .then(result => console.log(result))
    .catch(error => console.log("Error", error));

// Task 7

async function handlePromise() {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.log("Async Error caught:", error);
    }
}
handlePromise();