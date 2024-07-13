// Example with let
let variableLet = 10;
console.log("Initial value of variableLet:", variableLet);

variableLet = 20; // Reassigning the value
console.log("Reassigned value of variableLet:", variableLet);

// Example with const
const variableConst = 30;
console.log("Initial value of variableConst:", variableConst);

try {
  variableConst = 40; // Attempting to reassign the value
} catch (error) {
  console.log("Error when trying to reassign variableConst:", error.message);
}

// // Demonstrating that the reference cannot be changed but the content can (for objects)
// const objectConst = { key: "value" };
// console.log("Initial value of objectConst:", objectConst);

// objectConst.key = "new value"; // Modifying the content of the object
// console.log("Modified value of objectConst:", objectConst);

// try {
//   objectConst = { newKey: "newValue" }; // Attempting to reassign the constant object
// } catch (error) {
//   console.log("Error when trying to reassign objectConst:", error.message);
// }


/* Day One Completed On 13/07/2024 */
