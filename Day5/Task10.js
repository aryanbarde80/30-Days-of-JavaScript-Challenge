function composeFunctions(func1, func2, value) {
    return func2(func1(value));
}

// functions
function addTwo(x) {
    return x + 2;
}

function multiplyByThree(x) {
    return x * 3;
}

// Applying addTwo first, then multiplyByThree
const result = composeFunctions(addTwo, multiplyByThree, 5);
console.log(result); // Output: (5 + 2) * 3 = 21
