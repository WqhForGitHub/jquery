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

// Test to establish if the callbacks have been called
console.log(callbacks.fired());
