let number = 5; // Change this to the number you want to calculate the factorial of
let factorial = 1;
let i = number;

do {
    factorial *= i; // factorial = factorial * i; ->> 1*5=5 ->> 5*4->> ...
    i--; // 5 ->> 4 ->> 3 ->> 2 ->> 1
} while (i > 0);

console.log(`The factorial of ${number} is ${factorial}`);
