

// Create a Promise
let myPromise = new Promise((resolve, reject) => {
  let success = true; // change to false to see rejection

  if (success) {
    resolve("Task completed successfully!");
  } else {
    reject(" Task failed!");
  }
});

// Use the Promise
myPromise
  .then(val => console.log(val))   // runs if resolved
  .catch(error => console.log(error));   // runs if rejected


  // Callback hell example
function getName(callback) {
  setTimeout(() => {
    callback("Alice");
  }, 1000);
}

function greet(name, callback) {
  setTimeout(() => {
    callback("Hello " + name);
  }, 1000);
}

function sayGoodbye(message, callback) {
  setTimeout(() => {
    callback(message + " ... Goodbye!");
  }, 1000);
}

// Nested callbacks (callback hell)
getName(function(name) {
  greet(name, function(greeting) {
    sayGoodbye(greeting, function(finalMessage) {
      console.log(finalMessage);
    });
  });
});
