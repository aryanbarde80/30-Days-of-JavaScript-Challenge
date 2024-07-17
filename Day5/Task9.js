// higher order functions

function repeatFunction(fn,times){
    for(let i=0;i<times;i++){
        fn();
    }
}

const sayHello = () => console.log("Hello!");

repeatFunction(sayHello,10);