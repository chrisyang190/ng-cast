angular.module('video-player')
.service('youTube', function($http, $window) {


  // TODO
  this.search = function(query, callback) {

    var successCallback = function(response) {
      console.log('getting data from youtube service', response.data.items);
      //console.log(response.data.items);

      callback(response.data.items);
    };

    var errorCallback = function(e) {
      console.log('error');
    };

    // Simple GET request example:
    $http.get('https://www.googleapis.com/youtube/v3/search', {params: {
      part: 'snippet',
      q: query,
      maxResults: 5,
      key: 'AIzaSyDupe9X_6ctUZ66Okk1jTAwCmkXgJP3S-I',
      videoEmbeddable: true,
      type: 'video'
    } }).then(successCallback, errorCallback);
  };
  
});
