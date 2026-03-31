//toexponential
const num1 = 123456;
console.log(num1.toExponential());       // Output: "1.23456e+5"
console.log(num1.toExponential(2));      // Output: "1.23e+5"
console.log(num1.toExponential(4));      // Output: "1.2346e+5"

//tofixed
const num2 = 12.3456;

console.log(num2.toFixed());     // Output: "12"
console.log(num2.toFixed(2));    // Output: "12.35"
console.log(num2.toFixed(4));    // Output: "12.3456"

//tostring
const num3 = 123;
console.log(num3.toString());   // Output: "123"

//math.floor
console.log(Math.floor(4.7));   // Output: 4
console.log(Math.floor(-4.7));  // Output: -5


//math.ceil
console.log(Math.ceil(4.2));    // Output: 5
console.log(Math.ceil(-4.2));   // Output: -4

