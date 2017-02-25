angular.module('video-player')
.directive('videoListEntry', function() {
  return {

    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/videoListEntry.html',

    controller: function($scope) {
      console.log('videoListEntry scope', $scope);
    }
  };
});
