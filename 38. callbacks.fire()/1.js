// A sample logging function to be added to a callbacks list
var foo = function (value) {
  console.log("foo:" + value);
};

var callbacks = $.Callbacks();

// Add the function "foo" to the list
callbacks.add(foo);

// Fire the items on the list
callbacks.fire("hello"); // Outputs: "foo: hello"
callbacks.fire("world"); // Outputs: "foo: world"

// Add another function to the list
var bar = function (value) {
  console.log("bar:" + value);
};

// Add this function to the list
callbacks.add(bar);

// Fire the items on the list again
callbacks.fire("hello again");
// Outputs:
// "foo: hello again"
// "bar: hello again"
