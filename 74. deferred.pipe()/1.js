var defer = $.Deferred(),
  filtered = defer.pipe(function (value) {
    return value * 2;
  });

defer.resolve(5);
filtered.done(function (value) {
  alert("Value is ( 2*5 = ) 10: " + value);
});
