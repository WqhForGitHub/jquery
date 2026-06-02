// A sample logging function to be added to a callbacks list
var foo = function (value) {
  console.log("foo: " + value);
};

var callbacks = $.Callbacks();

// Add the function "foo" to the list
callbacks.add(foo);

// Fire the items on the list
callbacks.fire("hello");
// Outputs: "foo: hello"

// Remove "foo" from the callback list
callbacks.remove(foo);

// Fire the items on the list again
callbacks.fire("world");

// Nothing output as "foo" is no longer in the list
