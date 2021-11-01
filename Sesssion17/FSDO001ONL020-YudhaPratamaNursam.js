let prompt = require("prompt-sync")();

// init value
let valueA = 10;
let valueB = 2;

// processing value
let sumResult = valueA + valueB;
let differenceResult = valueA - valueB;
let productResult = valueA * valueB;
let quotientResult = valueA / valueB;
let remainderResult = valueA % valueB;
valueA++;
valueB--;

// displaying result
console.log("Sum: " + sumResult);
console.log("Difference: " + differenceResult);
console.log("Product: " + productResult);
console.log("Quotient: " + quotientResult);
console.log("Remainder: " + remainderResult);
console.log("Value of num1 after increment: " + valueA);
console.log("Value of num1 after decrement: " + valueB);
