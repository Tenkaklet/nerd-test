var app = angular.module('NerdApp', []);

app.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
  var NewsUrl = 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=e52ac532f5764bebab21059964519cbc';
  $http.get(NewsUrl)
  .then(function (res) {
    console.log(res);
  });
}]);
