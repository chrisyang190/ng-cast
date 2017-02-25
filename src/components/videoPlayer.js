angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    // TODO
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoPlayer.html',

    //  function($scope) {
    //   if ($scope.video !== undefined) {
    //     return 'src/templates/videoPlayer.html'; 
    //   } else {
    //     return '<video-player video="video">Please wait</video-player>';
    //   }
    // },

    controller: function($scope) {
      // $scope.url = 'https://www.youtube.com/embed/' + $scope.video.id.videoId;
      $scope.getIframeSrc = function (videoId) {
        return 'https://www.youtube.com/embed/' + videoId;
      };
      console.log('videoPlayer scope', $scope);
    }
  };
});
