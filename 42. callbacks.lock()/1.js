// A sample logging function to be added to a callbacks list
var foo = function (value) {
  console.log("foo:" + value);
};

var callbacks = $.Callbacks();

// Add the logging function to the callback list
callbacks.add(foo);

// Fire the items on the list, passing an argument
callbacks.fire("hello");
// Outputs "foo: hello"

// Lock the callbacks list
callbacks.lock();

// Try firing the items again
callbacks.fire("world");

// As the list was locked, no items were called,
// so "world" isn't logged
