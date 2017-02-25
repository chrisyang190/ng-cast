angular.module('video-player')
.controller('videoListController', function($scope) {
  //$scope.videos = window.exampleVideoData;
})

.directive('videoList', function() {
  return {
    scope: {
      videos: '<'
    },
    templateUrl: 'src/templates/videoList.html',

    controller: function($scope) {
      console.log('videoList scope', $scope);
    }

  };
});
