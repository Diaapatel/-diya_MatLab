//example of array destructing

const rgb=[255,200,100];
const [red,green,pink]=rgb;
console.log("red:",red);
console.log("green:",green);
console.log("pink:",pink);

//example of map array
const number=[1,2,3,4,5];
const doublednumber=number.map(num => num*2);
console.log("doubled no:",doublednumber);
console.log("name:",name);
console.log("age:",age);
console.log("city:",city);

//example of filter array
const evennumber=numbers.filter(num => num%2==0);

console.log("even no:",evennumber);
console.log("city:",city);

//example of reduce array
const sum = numbers.reduce((Acc,curr) => accc +curr,0);
console.log("sum of no:",sum);

//example of foreach array

numbers.foreach(num => console.log("number:",num));

//example of find array
const foundnumber = numbers.find(num => num>3);
console.log("found number greater than 3:",foundnumber);

//create object using object.value,object.keys,object.entries
 
const person ={
    name:"diya",
    age:20,
    city:"ahmedabad"
};
//example of object keys

const keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "city"];

//example of object values

const values = Object.values(person);
console.log(values); // Output: ["Patel", 30, "Ahmedabad"];

//example of object entries

const entries = Object.entries(person);
console.log(entries);

