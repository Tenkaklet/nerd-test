$(function () {

  var NewsUrl = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=e52ac532f5764bebab21059964519cbc';
  var keyDiv = $('.key');
  var valueDiv = $('.value');
  $.getJSON(NewsUrl, function (data) {
    var base = data.articles[0];
    console.log(base);
    $.each(base, function (i, v) {
      var keyTemp = '<li>' + i + '</li>';
      keyDiv.append(keyTemp);
      var valTemp = '<li>' + v + '</li>';
      valueDiv.append(valTemp);
    });
  });
  if ($(window).width() < 600) {
    keyDiv.click(function () {
      alert($(this)[0].innerText);
    });
  } 
});
