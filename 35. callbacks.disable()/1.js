// A sample logging function to be added to a callbacks list
var foo = function (value) {
  console.log(value);
};

var callbacks = $.Callbacks();

// Add the above function to the list
callbacks.add(foo);

// Fire the items on the list
callbacks.fire("foo");
// Outputs: foo

// Disable further calls being possible
callbacks.disable();

// Attempt to fire with "foobar" as an argument
callbacks.fire("foobar");
// foobar isn't output
