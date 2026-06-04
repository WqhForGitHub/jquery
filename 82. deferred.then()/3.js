var defer = $.Deferred(),
  filtered = defer.then(null, function (value) {
    return value * 3;
  });

defer.reject(6);
filtered.fail(function (value) {
  alert("Value is ( 3*6 = ) 18: " + value);
});
