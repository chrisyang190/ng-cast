angular.module('video-player')
.controller('AppController', ['$scope', function($scope) {
  $scope.videos = window.exampleVideoData;
  console.log('app scope', $scope);
}]) 

.directive('app', function() {
  return {
    templateUrl: 'src/templates/app.html',
    // controller: function($scope) {
    //   console.log($scope);
    // }
  };

});
