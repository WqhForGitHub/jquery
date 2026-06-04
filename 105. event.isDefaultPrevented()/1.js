$("a").on("click", function (event) {
  alert(event.isDefaultPrevented()); // false
  event.preventDefault();
  alert(event.isDefaultPrevented()); // true
});
