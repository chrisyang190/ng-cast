angular.module('video-player')
.controller('AppController', ['$scope', function($scope) {
  $scope.videos = window.exampleVideoData;
  console.log('app scope', $scope);

  $scope.onClick = function() {

  };
}]) 

.directive('app', function() {
  return {
    // controller: function () {
    //   this.videos = window.exampleVideoData;
    //   console.log('app scope', this);
    // },
    templateUrl: 'src/templates/app.html',
    // controller: function($scope) {
    //   console.log($scope);
    // }
  };

});
