var foo = function () {
  // Code to handle some kind of event
};

// Now foo will be called when paragraphs are clicked
$("p").live("click", foo);

// Now foo will no longer be called
$("p").die("click", foo);
