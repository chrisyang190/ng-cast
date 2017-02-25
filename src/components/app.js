angular.module('video-player')
.controller('AppController', ['$scope', function($scope) {
  $scope.videos = window.exampleVideoData;
  $scope.video = window.exampleVideoData[0];
  console.log('app scope', $scope);

  $scope.onClick = function(index) {
    console.log('before', $scope.video.snippet.title);
    $scope.video = $scope.videos[index];
    console.log('after', $scope.video.snippet.title);

  };

  
}]) 

.directive('app', function() {
  return {
    // controller: function () {
    //   this.videos = window.exampleVideoData;
    //   console.log('app scope', this);
    // },

    // controllerAs: 'ctrl',
    // bindToController: true,
    templateUrl: 'src/templates/app.html',
    // controller: function($scope) {
    //   // console.log('app scope', $scope);
    //   $scope.selectVideo = function() {

    //   };
    // }
  };

});
