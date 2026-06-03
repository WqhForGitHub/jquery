var request = $.ajax(url, { dataType: "json" }),
  chained = request.pipe(function (data) {
    return $.ajax(url2, { data: { user: data.userId } });
  });

chained.done(function (data) {
  // data retrieved from url2 as provided by the first request
});
