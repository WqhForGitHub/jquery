$("body").delegate("p", "click", function () {
  alert($(this).text());
});
