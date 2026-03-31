//question 1
// Given an array of numbers, calculate the sum of all positive numbers
const input1 = [-2, 5, 3, -8, 10, -4, 7];
let sum = 0;

for (let num of input1) {
  if (num > 0) {
    sum += num;
  }
}

console.log(sum); // Output: 25

//q uestion 2
// Given an array of strings, create a new array with each string's length
const input2 = ['hello', 'world', 'javascript', 'coding'];













// Expected output: [5, 5, 10, 6]
// Question 3
// Given an array of numbers, find all numbers that are multiples of 3
//const input3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// Expected output: [3, 6, 9, 12]
// Question 4 (Updated)
// Given an array of numbers representing daily steps, find all days where the person exceeded their
//daily goal of 10000 steps
// Return an array of objects with the day number and steps taken
//const input4 = [8547, 12345, 9856, 11254, 7856, 10999, 7856];
// Expected output: [
// { day: 2, steps: 12345 },
// { day: 4, steps: 11254 },
// { day: 6, steps: 10999 }
// ]
// Question 5
// Given an array of objects representing products, find all products under $50
