// Existing object
var obj = {
    hello: function (name) {
      alert("Hello " + name);
    },
  },
  // Create a Deferred
  defer = $.Deferred();

// Set object as a promise
defer.promise(obj);

// Resolve the deferred
defer.resolve("John");

// Use the object as a Promise
obj
  .done(function (name) {
    obj.hello(name); // Will alert "Hello John"
  })
  .hello("Karl"); // Will alert "Hello Karl"
