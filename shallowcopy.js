//shallow copy
const original = {
  name: "Diya",
  age: 20,
  location: {
    city: "Ahmedabad"
  }
};

// Shallow copy using Object.assign
const copy1 = Object.assign({}, original);

// Shallow copy using spread operator
const copy2 = { ...original };

// Modify nested object
original.location.city = "Surat";

console.log(copy1.location.city); // Output: "Surat"
console.log(copy2.location.city); // Output: "Surat"
