// angular.module('video-player')
//
// .component('app', {
//   bindings: {
//   },
//   controller: 'AppCtrl',
//   templateUrl: 'src/templates/app.html'
// })
//
// // .controller('AppCtrl', function($scope, youTube) {
// //   $scope.$ctrl.selectVideo = function(video) {
// //     $scope.$ctrl.currentVideo = video;
// //   };
// //   // this.selectVideo = function(video) {
// //   //   this.currentVideo = video;
// //   // }.bind(this);
// //   $scope.$ctrl.
// //   $scope.$ctrl.searchResults = function() {};
// //   $scope.$ctrl.currentVideo = window.exampleVideoData[0];
// //   $scope.$ctrl.videos = window.exampleVideoData;
// // });
// .controller('AppCtrl', function(youTube) {
//   this.searchService = youTube;
//   this.searchResults = (data) => {
//     this.videos = data;
//     this.currentVideo = this.videos[0];
//   };
//   this.selectVideo = (video) => {
//     this.currentVideo = video;
//   };
//   // this.selectVideo = function(video) {
//   //   this.currentVideo = video;
//   // }.bind(this);
//   this.currentVideo = window.exampleVideoData[0];
//   this.videos = window.exampleVideoData;
//   youTube.search('lakers', this.searchResults);
// });
angular.module('video-player')
  .controller('AppCtrl', function(youTube) {
    this.search = function(input) { youTube.search(input, this.searchResults); }.bind(this);
    this.selectVideo = function (video) { this.currentVideo = video; };
    this.searchResults = function (data) {
      this.videos = data;
      this.currentVideo = data[0];
    }.bind(this);
    this.result = _.debounce(this.search, 500, true);
    this.$onInit = this.search('nba');
  })


.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});
