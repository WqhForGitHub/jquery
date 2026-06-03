$.get("test.php")
  .done(function () {
    alert("$.get succeeded");
  })
  .fail(function () {
    alert("$.get failed!");
  });
