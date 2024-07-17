// function parameters with default values

const greet = (name,age=30) => {
    return `Hello ${name}, your age is ${age}.`;
}

/*
function greet(name, age = 20) {
  return `Hello ${name}, your age is ${age}.`;
}
*/

console.log(greet(`aryan`,`21`))
console.log(greet(`harry`))