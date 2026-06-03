$("ul")
  .append("<li>" + $("ul").context + "</li>")
  .append("<li>" + $("ul", document.body).context.nodeName + "</li>");
