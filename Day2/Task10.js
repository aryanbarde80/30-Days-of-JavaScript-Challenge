/*
Double Equals (==)
The == operator is known as the equality operator. It checks for equality between two values after converting both values to a common type (type coercion). This means that it compares the values for equality regardless of their type.

Triple Equals (===)
The === operator is known as the strict equality operator. It checks for equality without converting the values to a common type (no type coercion). This means that both the value and the type must be the same for the comparison to be true.
*/

console.log(5==`5`)
console.log(true==1)
console.log(false==0)
console.log(null==undefined)

console.log(5===`5`)
console.log(true===1)
console.log(false===0)
console.log(null===undefined)