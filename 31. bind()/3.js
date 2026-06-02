function handler(event) {
  alert(event.data.foo);
}
$("p").bind(
  "click",
  {
    foo: "bar",
  },
  handler,
);
