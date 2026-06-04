$("p").on("click", function (event) {
  alert(event.currentTarget === this); // true
});
