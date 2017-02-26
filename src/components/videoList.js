angular.module('video-player')


.directive('videoList', function() {
  return {

    scope: {
      videos: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoList.html',

    controller: function($scope) {
      // console.log('videoList scope', $scope);
    }

  };
});
