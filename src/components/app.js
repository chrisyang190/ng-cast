angular.module('video-player')


.directive('app', function() {
  return {
    // controller: function () {
    //   this.videos = window.exampleVideoData;
    //   console.log('app scope', this);
    // },
    // scope: {
    //   videos: '=',
    //   video: '='
    // },
    scope: {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html',
    controller: function($window, $scope, youTube) {
      //console.log('this refers to', this);
      this.videos = $window.exampleVideoData;
      //this.videos = youTube();
      this.currentVideo = $window.exampleVideoData[0];
        // console.log('app scope', $scope);

      this.onClick = function(index) {
        console.log('before', this.currentVideo.snippet.title);
        this.currentVideo = this.videos[index];
          // console.log('after', $scope.video.snippet.title);

      };

      this.searchService = youTube;
      this.selectVideo = function() {


      };

      //youTube.search('cats');
      this.searchResults = (data) => {
        console.log(data);
        this.videos = data;
        console.log(this.videos);
        this.currentVideo = data[0];
      };

      youTube.search('cats', this.searchResults);
    }
  };

});
