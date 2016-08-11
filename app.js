$(function () {

  var NewsUrl = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=e52ac532f5764bebab21059964519cbc';

  $.getJSON(NewsUrl, function (data) {
    console.log(data);
  });
});
