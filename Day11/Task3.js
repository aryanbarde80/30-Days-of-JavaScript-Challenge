// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchData1 = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("Fteched data 1");
    },1000);
});

const fetchData2 = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("Fteched data 2");
    },2000);
});

const fetchData3 = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("Fteched data 3");
    },3000);
});

fetchData1
    .then((data) =>{
        console.log(data);
        return fetchData2;
    })
    .then((data) => {
        console.log(data);
        return fetchData3;
    })
    .then((data) =>{
        console.log(data);
    });

    /*
    ->>Three promises simulate fetching data at different intervals.
    ->>The promises are chained using .then() to ensure the data is logged in the correct order.
    */