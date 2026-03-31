//deepobject
const person = {
  name: "diya",
  age: 20,
  city: "ahmedabad",
  location: {
    city: "surat"
  }
};

function deepCopy(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(item => deepCopy(item));
  }

  const copiedObject = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      copiedObject[key] = deepCopy(value[key]);
    }
  }

  return copiedObject;
}

const copiedPerson = deepCopy(person);
console.log(copiedPerson);


//shallow copy

///