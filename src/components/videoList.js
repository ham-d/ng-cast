angular.module('video-player')

.component('videoList', {
  bindings: {
    videos: '<',
    click: '<',
  },
  templateUrl: 'src/templates/videoList.html',
  controller: 'videoListCtrl',
})

.controller('videoListCtrl', function($scope) {
  $scope.$ctrl.onClick = function() {};
});
