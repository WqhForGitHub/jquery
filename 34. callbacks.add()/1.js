// A sample logging function to be added to a callbacks list
var foo = function (value) {
  console.log("foo: " + value);
};

// Another function to also be added to the list
var bar = function (value) {
  console.log("bar: " + value);
};

var callbacks = $.Callbacks();

// Add the function "foo" to the list
callbacks.add(foo);

// Fire the items on the list
callbacks.fire("hello");
// Outputs: "foo: hello"

// Add the function "bar" to the list
callbacks.add(bar);

// Fire the items on the list again
callbacks.fire("world");

// Outputs:
// "foo: world"
// "bar: world"
