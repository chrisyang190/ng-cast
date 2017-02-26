angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      result: '<'
    },
    controller: function(youTube) {
      //console.log('this', $scope); 
      // this.result = function(input, callback) {
      //   youTube.search(input, callback);
      this.clicked = function() {
        youTube.search(this.input, (data) => { this.result(data); });
      };
      
      
    },
    // controller: function(youTube) {
    //   console.log('hi', youTube);
    // },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/search.html'
  };
});
