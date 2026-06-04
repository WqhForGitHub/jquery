// If missing.png is missing, it is replaced by replacement.png
$("img")
  .on("error", function () {
    $(this).attr("src", "replacement.png");
  })
  .attr("src", "missing.png");
