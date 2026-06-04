$(".box").on("click", "button", function (event) {
  $(event.delegateTarget).css("background-color", "red");
});
