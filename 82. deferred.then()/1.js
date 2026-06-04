$.get("test.php").then(
  function () {
    alert("$.get succeeded");
  },
  function () {
    alert("$.get failed!");
  },
);
