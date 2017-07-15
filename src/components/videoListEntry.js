angular.module('video-player')

.component('videoListEntry', {
  bindings: {
    video: '<',
    click: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html',
  controller: 'videoListEntryCtrl'
})

.controller('videoListEntryCtrl', function($scope) {
  // $scope.$ctrl.currentVideo = $scope.$ctrl.video;

});
