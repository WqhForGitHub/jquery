// A sample logging function to be added to a callbacks list
var log = function (value1, value2) {
  console.log("Received: " + value1 + "," + value2);
};

var callbacks = $.Callbacks();

// Add the log method to the callbacks list
callbacks.add(log);

// Fire the callbacks on the list using the context "window"
// and an arguments array

callbacks.fireWith(window, ["foo", "bar"]);
// Outputs: "Received: foo, bar"
