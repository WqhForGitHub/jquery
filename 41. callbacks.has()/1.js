// A sample logging function to be added to a callbacks list
var foo = function (value1, value2) {
  console.log("Received: " + value1 + "," + value2);
};

// A second function which will not be added to the list
var bar = function (value1, value2) {
  console.log("foobar");
};

var callbacks = $.Callbacks();

// Add the log method to the callbacks list
callbacks.add(foo);

// Determine which callbacks are in the list
console.log(callbacks.has(foo));
// true
console.log(callbacks.has(bar));
// false
