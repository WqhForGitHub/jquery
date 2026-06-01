$("p").animate(
  {
    height: 200,
    width: 400,
    opacity: 0.5,
  },
  1000,
  "linear",
  function () {
    alert("all done");
  },
);
